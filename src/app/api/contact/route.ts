import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, role, divisionInterest, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Campos requeridos faltantes: nombre, email o mensaje." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Formato de correo electrónico no válido." },
        { status: 400 }
      );
    }

    // Log the contact lead (in production this pushes to HubSpot / CRM / Slack webhook)
    console.log("[SYSOLAT LEAD]", {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      company,
      role,
      divisionInterest,
      message,
    });

    // Optional HubSpot integration placeholder
    const hubspotPortalId = process.env.HUBSPOT_PORTAL_ID;
    if (hubspotPortalId) {
      // In production, forward lead to HubSpot Forms API
    }

    return NextResponse.json(
      {
        success: true,
        message: "Solicitud registrada con éxito en el Ecosistema SySo Co.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error procesando solicitud de contacto:", error);
    return NextResponse.json(
      { error: "Error interno al procesar la solicitud." },
      { status: 500 }
    );
  }
}
