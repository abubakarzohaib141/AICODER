import { NextResponse } from "next/server";

const PROJECT_STAGES = [
  "Exploring an idea",
  "Need a prototype",
  "Ready to build",
  "Existing system needs AI integration",
  "Need automation",
  "Other",
];

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field, bots that auto-fill forms do.
  if (String(body.botcheck ?? "").length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const workEmail = String(body.workEmail ?? "").trim();
  const lookingToBuild = String(body.lookingToBuild ?? "").trim();
  const stage = String(body.stage ?? "").trim();
  const company = String(body.company ?? "").trim();
  const workflow = String(body.workflow ?? "").trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !workEmail || !lookingToBuild) {
    return NextResponse.json({ error: "Name, work email and project details are required." }, { status: 400 });
  }

  if (!emailPattern.test(workEmail)) {
    return NextResponse.json({ error: "Enter a valid work email." }, { status: 400 });
  }

  if (stage && !PROJECT_STAGES.includes(stage)) {
    return NextResponse.json({ error: "Invalid project stage." }, { status: 400 });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error("[contact] WEB3FORMS_ACCESS_KEY is not configured.");
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  try {
    const web3formsRes = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New project inquiry from ${name}`,
        from_name: name,
        name,
        email: workEmail,
        company: company || "Not provided",
        "Looking to build": lookingToBuild,
        "Workflow / problem": workflow || "Not provided",
        "Project stage": stage || "Not provided",
      }),
    });

    const result = await web3formsRes.json();

    if (!web3formsRes.ok || !result.success) {
      console.error("[contact] Web3Forms rejected the submission:", result);
      return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 502 });
    }
  } catch (err) {
    console.error("[contact] Failed to reach Web3Forms:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
