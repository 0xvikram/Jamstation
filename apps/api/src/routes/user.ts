import type { FastifyInstance } from "fastify";
import prisma from "../../../../packages/db/client"
export async function userRoutes(app:FastifyInstance){
    //creating user

    app.post("/user",async(request,reply)=>{
        try{
            const body=request.body as {
                name: string;
                email:string;
                username:string;
                contact?:string;


            };
            if(!body.username || !body.email){
                return reply.status(400).send({
                    error:"Email and username are required",
                })
            }
            const user=await prisma.user.create({
                data:{
                    name:body.name,
                    email:body.email,
                    username:body.username,
                    contact:body.contact,

                }
            })
            return reply.status(201).send(user);

        }
        catch (error){
            console.error( error);
            return reply.status(500).send({
                error:"Something went wrong"
            })

        }
    })
}