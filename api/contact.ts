import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  const { name, email, message, honeypot } = req.body || {};

  if (honeypot) {
    // Silently drop bot submissions.
    return res.status(200).json({ ok: true });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, message: "Missing required fields" });
  }

  try {
    await resend.emails.send({
      from: "Brian Portfolio <onboarding@resend.dev>",
      to: ["brianarichard14@gmail.com"],
      reply_to: email,
      subject: `New portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact send error", error);
    return res.status(500).json({ ok: false, message: "Failed to send message" });
  }
}
