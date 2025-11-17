import { NextResponse } from "next/server";
import jsforce from "jsforce";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const conn = new jsforce.Connection({
      oauth2: {
        clientId: process.env.SALESFORCE_CLIENT_ID!,
        clientSecret: process.env.SALESFORCE_CLIENT_SECRET!,
        loginUrl: process.env.SALESFORCE_LOGIN_URL!,
      },
      instanceUrl: process.env.SALESFORCE_INSTANCE_URL!,
    });

    await conn.authorize({ grant_type: "client_credentials" });

    const accountResult = await conn.sobject("Account").create({
      Name: body.name,
      Phone: body.phone,
      Website: body.website,
      AnnualRevenue: body.revenue,
    });

    if (!accountResult.success) {
      return NextResponse.json(
        { error: "Failed to create Account" },
        { status: 500 }
      );
    }

    const contactResult = await conn.sobject("Contact").create({
      FirstName: body.name,
      LastName: "Contact",
      Email: body.email,
      AccountId: accountResult.id,
    });

    if (!contactResult.success) {
      return NextResponse.json(
        { error: "Failed to create Contact" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      accountId: accountResult.id,
      contactId: contactResult.id,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Salesforce error", details: (err as Error).message },
      { status: 500 }
    );
  }
}
