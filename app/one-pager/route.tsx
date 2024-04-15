import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { compile } from "@onedoc/react-print";
import { Onedoc } from "@onedoc/client";
import { OnePager } from "../documents/one-pager";
import React from "react";

export const maxDuration = 20;
export const dynamic = "force-dynamic";
export const runtime = 'edge';


const onedoc = new Onedoc(process.env.ONEDOC_API_KEY!);

export async function GET(req: NextRequest) {
  const nameData = JSON.parse(req.nextUrl.searchParams.get("nameData")!);
  const userData = JSON.parse(req.nextUrl.searchParams.get("userData")!);
  const content = JSON.parse(req.nextUrl.searchParams.get("content")!);
  const logoUrl = JSON.parse(req.nextUrl.searchParams.get("logoUrl")!);
  const name = nameData.name;

  const link  = 
      <OnePager
        nameData={nameData}
        userData={userData}
        content={content}
        logoUrl={logoUrl}
      />

  return link;
}
