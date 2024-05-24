"use server";

import { z } from "zod";
import prisma from "./db";
import { revalidatePath } from "next/cache";

export const createTask = async (prevState: any, formData: any) => {
    const title = formData.get("title");
    const details = formData.get("details");
    const start = formData.get("start")
        ? new Date(formData.get("start")).toISOString()
        : undefined; // Convert to ISO 8601 string
    const importance = formData.get("importance");
    const day = formData.get("day");
    const subject = formData.getAll("subject").join(", ");

    const data: any = {
        title,
        details,
        start,
        importance,
        day,
        subject,
    };

    const Task = z.object({
        title: z.string().min(5, "'Task' must be at least 5 char long"),
        details: z.string(),
        start: z.string().datetime().optional(),
        importance: z.string().min(1, "You have to select importance"),
        day: z.string({
            required_error: " 'Day' is required",
            invalid_type_error: "You have to select the 'Day'",
        }),
        subject: z
            .string()
            .min(1, "You have to select at least one of the 'Subjects'"),
    });

    try {
        //! --- "ZOD Validation" ---
        const result = Task.safeParse(data);
        console.log(result);

        //! ----------------

        if (!result.success) {
            const errorMessages = result.error.errors
                .map((e) => e.message)
                .join(", ");

            throw new Error(errorMessages);
        }

        await prisma.task.create({
            data,
        });
        revalidatePath("/tasks");
        return { status: "success", msg: "Task created." };
    } catch (error) {
        let errorMessage = "An unexpected error has occured";

        if (error instanceof Error) {
            errorMessage = error.message;
        }

        return { status: "error", msg: errorMessage };
    }
};

export const getAllTasks = async () => {
    return prisma.task.findMany();
};

export const updateComplated = async (prevState: any, formData: any) => {
    const id = formData.get("id");
    const complated = formData.get("complated") === "on" ? true : false;

    try {
        await prisma.task.update({
            where: { id },
            data: {
                complated,
            },
        });

        revalidatePath("/tasks");

        return { status: "success", msg: "Task updated." };
    } catch (error) {
        return {
            status: "error",
            msg: "An error occured while updating the task.",
        };
    }

    console.log({ id, complated });
};
