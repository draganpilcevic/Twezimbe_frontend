import { db } from '@vercel/postgres';
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
   const client = await db.connect();
   try {
      console.log("mtn collections------------");
      
    const collections = await client.sql`SELECT * FROM Payment;`;
    return NextResponse.json({ collections: collections.rows }, { status: 200 })
   } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
   }
}
