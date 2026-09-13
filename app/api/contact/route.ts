import { NextResponse } from "next/server";

const PROJECT_STAGES = [
  "Exploring an idea",
  "Need a prototype",
  "Ready to build",
  "Existing system needs AI integration",
  "Need automation",
  "Other",
];

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const workEmail = String(body.workEmail ?? "").trim();
  const lookingToBuild = String(body.lookingToBuild ?? "").trim();
  const stage = String(body.stage ?? "").trim();

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

  console.log("[contact] New project inquiry:", {
    name,
    company: body.company,
    workEmail,
    lookingToBuild,
    workflow: body.workflow,
    stage,
  });

  return NextResponse.json({ ok: true });
}
