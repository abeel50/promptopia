import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";


export const GET = async (req, res) => {

    try {
        await connectToDB();
        const prompts = await Prompt.find({}).populate('creator');

        return new Response(JSON.stringify(prompts), { status: 201 })

    } catch (error) {
        console.error(error);
        return new Response("Failed to load Prompts", { status: 500 })
    }

}