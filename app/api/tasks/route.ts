import db from "@/utils/db";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
    const tasks = await db.task.findMany();

    return NextResponse.json({ data: tasks });
};

export const POST = async (request: any) => {
    let data = await request.json();
    let { start } = data;

    // Check if 'start' is a valid ISO-8601 DateTime string
    if (start && !isNaN(new Date(start).getTime())) {
        start = new Date(start);
        data = { ...data, start };

        await db.task.create({
            data: data,
        });
        console.log({ data });

        return Response.json({ data });
    }
};
