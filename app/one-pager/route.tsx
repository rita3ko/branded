import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { compile } from "@onedoc/react-print";
import { OnePager } from "../documents/one-pager";
import React from "react";

export const maxDuration = 20;
export const dynamic = "force-dynamic";
export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const nameData = JSON.parse(req.nextUrl.searchParams.get("nameData")!);
  const userData = JSON.parse(req.nextUrl.searchParams.get("userData")!);
  const content = JSON.parse(req.nextUrl.searchParams.get("content")!);
  const logoUrl = JSON.parse(req.nextUrl.searchParams.get("logoUrl")!);
  const name = nameData.name;

  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
}
