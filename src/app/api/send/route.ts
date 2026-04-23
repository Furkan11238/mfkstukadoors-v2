import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_FILES = 5;
const MAX_FILE_BYTES = 10 * 1024 * 1024;
const MAX_TOTAL_BYTES = 35 * 1024 * 1024;

type Fields = {
  name: string;
  email: string;
  telephone: string;
  service: string;
  message: string;
};

type Attachment = { filename: string; content: string };

async function parseRequest(request: Request): Promise<{
  fields: Fields;
  attachments: Attachment[];
}> {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("multipart/form-data")) {
    const formData = await request.formData();
    const fields: Fields = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      telephone: String(formData.get("telephone") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    const attachments: Attachment[] = [];
    let totalSize = 0;
    let fileCount = 0;

    for (const entry of formData.getAll("files")) {
      if (!(entry instanceof File) || entry.size === 0) continue;
      fileCount += 1;
      if (fileCount > MAX_FILES) {
        throw new Error("TOO_MANY_FILES");
      }
      if (entry.size > MAX_FILE_BYTES) {
        throw new Error("FILE_TOO_LARGE");
      }
      totalSize += entry.size;
      if (totalSize > MAX_TOTAL_BYTES) {
        throw new Error("TOTAL_TOO_LARGE");
      }
      const buf = Buffer.from(await entry.arrayBuffer());
      attachments.push({
        filename: entry.name || "bijlage",
        content: buf.toString("base64"),
      });
    }

    return { fields, attachments };
  }

  const body = (await request.json()) as Partial<Fields>;
  return {
    fields: {
      name: String(body.name ?? "").trim(),
      email: String(body.email ?? "").trim(),
      telephone: String(body.telephone ?? "").trim(),
      service: String(body.service ?? "").trim(),
      message: String(body.message ?? "").trim(),
    },
    attachments: [],
  };
}

export async function POST(request: Request) {
  try {
    const { fields, attachments } = await parseRequest(request);
    const { name, email, telephone, service, message } = fields;

    if (!name || !email || !service || !message) {
      return Response.json({ error: "Validatie mislukt" }, { status: 400 });
    }

    const attachmentNames =
      attachments.length > 0
        ? attachments.map((a) => a.filename).join(", ")
        : "";

    const templateVariables = {
      name,
      email,
      telephone,
      service,
      message,
      attachmentNames,
    };

    const { error: confirmError } = await resend.emails.send({
      from: "MFK Stukadoors <mfk@contact.mfkstukadoors.be>",
      to: email,
      template: {
        id: "confirmation-email",
        variables: templateVariables,
      },
    });

    if (confirmError) {
      return Response.json({ error: confirmError }, { status: 500 });
    }

    const { error: offerteError } = await resend.emails.send({
      from: "MFK Stukadoors <mfk@contact.mfkstukadoors.be>",
      to: "furkankarakocfurkan@hotmail.com",
      template: {
        id: "offerte-email",
        variables: templateVariables,
      },
      ...(attachments.length > 0 ? { attachments } : {}),
    });

    if (offerteError) {
      return Response.json({ error: offerteError }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "TOO_MANY_FILES") {
        return Response.json(
          { error: `Maximaal ${MAX_FILES} bijlagen toegestaan.` },
          { status: 400 },
        );
      }
      if (error.message === "FILE_TOO_LARGE") {
        return Response.json(
          { error: "Een bijlage is te groot (max. 10 MB per bestand)." },
          { status: 400 },
        );
      }
      if (error.message === "TOTAL_TOO_LARGE") {
        return Response.json(
          { error: "De bijlagen samen zijn te groot (max. 35 MB)." },
          { status: 400 },
        );
      }
    }
    return Response.json({ error }, { status: 500 });
  }
}
