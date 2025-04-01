import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import client from '@/db' 

export async function GET(req: NextRequest) {
   const user = await client.user.findFirst();

   return NextResponse.json({
      username: user?.username
   })
}


export async function POST(req: NextRequest) {
   const body = await req.json();

   try {
   await client.user.create({
      data: {
        username: body.username,
        password: body.password,
      },
   });

   return NextResponse.json({
       body
   })

  } catch(e) {
   console.log(e);
   return NextResponse.json({
      msg: "error occured"
   }, {
      status: 411
   })
  }

}
