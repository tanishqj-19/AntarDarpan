import { analyze } from "@/utils/ai";
import { getUserByClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const PATCH = async (request : Request, {params}) => {

    const {content} = await request.json()
    const user  = await getUserByClerkId();
    const updateEntry =  await prisma.journalEntry.update({
        where: {
            userId_id: {
                userId: user.id,
                id: params.id,
            },
        },
        data: {
            content,
        },
       
    })

    const analysis = await analyze(updateEntry.content);

    const updatedAnalysis = await prisma.analysis.upsert({
        where: {
            entryId: updateEntry.id,
        },
        create: {
            userId: user.id,
            entryId: updateEntry.id,
            ...analysis,
        },
        update: analysis,

    })
    console.log(updatedAnalysis);

    


    return NextResponse.json({data: {...updateEntry, analysis: updatedAnalysis}})
}