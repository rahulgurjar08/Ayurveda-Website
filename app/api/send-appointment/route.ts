import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      age,
      phone,
      email,
      gender,
      address,
      consultationType,
      purpose,
      concern,
      date,
      time,
    } = body;

    if (!name || !phone || !email || !date || !time) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    if (
      !process.env.GMAIL_USER ||
      !process.env.GMAIL_APP_PASSWORD ||
      !process.env.CONTACT_EMAIL
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Email configuration is missing on the server.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.verify();

    const appointmentHtml = `
      <div style="font-family:Arial,sans-serif;background:#f5f7ef;padding:30px;">
        <div style="max-width:700px;margin:auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #dfe6d9;">

          <div style="background:#2e6a27;color:white;padding:24px;">
            <h1 style="margin:0;font-family:Georgia,serif;">
              New Appointment Request
            </h1>

            <p style="margin:8px 0 0;">
              Ayurveda Healing Naturally
            </p>
          </div>

          <div style="padding:25px;">

            <h2 style="color:#2e6a27;font-family:Georgia,serif;">
              Appointment Details
            </h2>

            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px;border-bottom:1px solid #eee;"><b>Date</b></td>
                <td style="padding:10px;border-bottom:1px solid #eee;">
                  ${escapeHtml(date)}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #eee;"><b>Time</b></td>
                <td style="padding:10px;border-bottom:1px solid #eee;">
                  ${escapeHtml(time)}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #eee;"><b>Consultation</b></td>
                <td style="padding:10px;border-bottom:1px solid #eee;">
                  ${escapeHtml(consultationType)}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #eee;"><b>Purpose</b></td>
                <td style="padding:10px;border-bottom:1px solid #eee;">
                  ${escapeHtml(purpose)}
                </td>
              </tr>
            </table>

            <h2 style="color:#2e6a27;font-family:Georgia,serif;margin-top:28px;">
              Patient Details
            </h2>

            <table style="width:100%;border-collapse:collapse;">

              <tr>
                <td style="padding:9px;border-bottom:1px solid #eee;"><b>Name</b></td>
                <td style="padding:9px;border-bottom:1px solid #eee;">
                  ${escapeHtml(name)}
                </td>
              </tr>

              <tr>
                <td style="padding:9px;border-bottom:1px solid #eee;"><b>Age</b></td>
                <td style="padding:9px;border-bottom:1px solid #eee;">
                  ${escapeHtml(age)}
                </td>
              </tr>

              <tr>
                <td style="padding:9px;border-bottom:1px solid #eee;"><b>Gender</b></td>
                <td style="padding:9px;border-bottom:1px solid #eee;">
                  ${escapeHtml(gender)}
                </td>
              </tr>

              <tr>
                <td style="padding:9px;border-bottom:1px solid #eee;"><b>Phone</b></td>
                <td style="padding:9px;border-bottom:1px solid #eee;">
                  ${escapeHtml(phone)}
                </td>
              </tr>

              <tr>
                <td style="padding:9px;border-bottom:1px solid #eee;"><b>Email</b></td>
                <td style="padding:9px;border-bottom:1px solid #eee;">
                  ${escapeHtml(email)}
                </td>
              </tr>

              <tr>
                <td style="padding:9px;border-bottom:1px solid #eee;"><b>Address</b></td>
                <td style="padding:9px;border-bottom:1px solid #eee;">
                  ${escapeHtml(address)}
                </td>
              </tr>

            </table>

            <h2 style="color:#2e6a27;font-family:Georgia,serif;margin-top:28px;">
              Specific Concern
            </h2>

            <div style="background:#f3f7ee;padding:15px;border-radius:8px;">
              ${escapeHtml(concern || "No specific concern provided.")}
            </div>

          </div>

          <div style="background:#edf4e7;padding:15px;text-align:center;color:#53604f;font-size:13px;">
            This appointment was submitted from the Ayurveda website.
          </div>

        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Ayurveda Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Appointment - ${name} - ${date} ${time}`,
      html: appointmentHtml,
    });

    // Patient confirmation email
    await transporter.sendMail({
      from: `"Ayurveda Healing Naturally" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Appointment Request Received - Ayurveda",
      html: `
        <div style="font-family:Arial,sans-serif;padding:30px;background:#f6f8ef;">
          <div style="max-width:600px;margin:auto;background:white;padding:30px;border-radius:14px;">
            <h1 style="color:#2e6a27;font-family:Georgia,serif;">
              Thank You, ${escapeHtml(name)}
            </h1>

            <p>
              Your appointment request has been received successfully.
            </p>

            <div style="background:#edf4e7;padding:18px;border-radius:10px;margin:20px 0;">
              <p><b>Date:</b> ${escapeHtml(date)}</p>
              <p><b>Time:</b> ${escapeHtml(time)}</p>
              <p><b>Consultation:</b> ${escapeHtml(consultationType)}</p>
            </div>

            <p>
              Our Ayurvedic care team will contact you shortly to confirm
              your appointment.
            </p>

            <p style="color:#2e6a27;font-weight:bold;">
              Ayurveda — Healing Naturally
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Appointment request sent successfully!",
    });
  } catch (error) {
    console.error("APPOINTMENT EMAIL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send appointment email. Please try again.",
      },
      { status: 500 }
    );
  }
}