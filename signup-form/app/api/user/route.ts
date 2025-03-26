import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client/extension";
const client = new PrismaClient();


export async function POST(req: NextRequest) {
    // do zod validation,
    // than authentication
    // return results
    // keep inputs as username and password 

    const body = await req.json();
    console.log(body);  

    client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })

    return Response.json({
        msg: "user logged in"
    })
}