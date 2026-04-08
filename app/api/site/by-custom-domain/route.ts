import { NextRequest, NextResponse } from "next/server";
import {
  isBackendConfigured,
  requestSiteFromBackend,
} from "@/lib/fetch-site-from-backend";

export async function GET(request: NextRequest) {
  const domain =
    request.nextUrl.searchParams.get("customDomain")?.trim() ?? "";
  if (!domain) {
    return NextResponse.json(
      { error: "customDomain is required" },
      { status: 400 }
    );
  }

  if (!isBackendConfigured()) {
    return NextResponse.json(
      {
        error:
          "Set SITE_API_BASE_URL or NEXT_PUBLIC_API_BASE_URL in .env (restart next dev after changing)",
      },
      { status: 503 }
    );
  }

  const result = await requestSiteFromBackend(domain);

  if (result.kind === "ok") {
    return NextResponse.json(result.site);
  }
  if (result.kind === "not_found") {
    return new NextResponse(null, { status: 404 });
  }
  if (result.kind === "no_config") {
    return NextResponse.json(
      { error: "API base URL is not configured" },
      { status: 503 }
    );
  }

  return NextResponse.json(
    { error: result.message },
    { status: result.status }
  );
}
