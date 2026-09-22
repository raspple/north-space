const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RECIPIENT_EMAIL = "louisehall538@gmail.com";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      company,
      service_type,
      location,
      message,
      mail_handling,
      people_count,
      catering,
      office_size,
    } = body;

    const serviceLabels: Record<string, string> = {
      virtual_office: "Virtual Office",
      meeting_room: "Meeting Room",
      serviced_office: "Serviced Office",
      general: "General Enquiry",
    };

    const serviceLabel = serviceLabels[service_type] || "General Enquiry";

    const rows: string[] = [
      `<tr><td style="padding:8px 12px;font-weight:bold;color:#334155;width:140px;">Name</td><td style="padding:8px 12px;color:#475569;">${name ?? "—"}</td></tr>`,
      `<tr><td style="padding:8px 12px;font-weight:bold;color:#334155;">Email</td><td style="padding:8px 12px;color:#475569;">${email ?? "—"}</td></tr>`,
      `<tr><td style="padding:8px 12px;font-weight:bold;color:#334155;">Phone</td><td style="padding:8px 12px;color:#475569;">${phone || "—"}</td></tr>`,
      `<tr><td style="padding:8px 12px;font-weight:bold;color:#334155;">Company</td><td style="padding:8px 12px;color:#475569;">${company || "—"}</td></tr>`,
      `<tr><td style="padding:8px 12px;font-weight:bold;color:#334155;">Service</td><td style="padding:8px 12px;color:#475569;">${serviceLabel}</td></tr>`,
      `<tr><td style="padding:8px 12px;font-weight:bold;color:#334155;">Location</td><td style="padding:8px 12px;color:#475569;">${location || "—"}</td></tr>`,
    ];

    if (mail_handling) {
      rows.push(
        `<tr><td style="padding:8px 12px;font-weight:bold;color:#334155;">Mail Handling</td><td style="padding:8px 12px;color:#475569;">${mail_handling}</td></tr>`,
      );
    }
    if (people_count) {
      rows.push(
        `<tr><td style="padding:8px 12px;font-weight:bold;color:#334155;">People</td><td style="padding:8px 12px;color:#475569;">${people_count}</td></tr>`,
      );
    }
    if (catering !== undefined && catering !== null) {
      rows.push(
        `<tr><td style="padding:8px 12px;font-weight:bold;color:#334155;">Catering</td><td style="padding:8px 12px;color:#475569;">${catering ? "Yes" : "No"}</td></tr>`,
      );
    }
    if (office_size) {
      rows.push(
        `<tr><td style="padding:8px 12px;font-weight:bold;color:#334155;">Office Size</td><td style="padding:8px 12px;color:#475569;">${office_size}</td></tr>`,
      );
    }
    if (message) {
      rows.push(
        `<tr><td style="padding:8px 12px;font-weight:bold;color:#334155;vertical-align:top;">Message</td><td style="padding:8px 12px;color:#475569;">${message.replace(/\n/g, "<br />")}</td></tr>`,
      );
    }

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#0f172a;padding:24px 32px;border-radius:12px 12px 0 0;">
          <h1 style="color:#fff;font-size:22px;margin:0;">New Enquiry — NorthSpace</h1>
        </div>
        <div style="background:#fff;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;padding:24px 32px;">
          <p style="color:#475569;margin:0 0 16px;">A new enquiry has been submitted through your website. Here are the details:</p>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            ${rows.join("\n")}
          </table>
          <p style="color:#94a3b8;font-size:12px;margin:24px 0 0;">This email was sent automatically from the NorthSpace website enquiry form.</p>
        </div>
      </div>
    `;

    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 503, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "NorthSpace <onboarding@resend.dev>",
        to: RECIPIENT_EMAIL,
        subject: `New Enquiry from ${name || "Unknown"} — ${serviceLabel}`,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const errText = await resendResponse.text();
      console.error("Resend API error:", resendResponse.status, errText);
      return new Response(
        JSON.stringify({ error: "Failed to send email" }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to process notification" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
