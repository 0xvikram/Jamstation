import type { FastifyInstance } from "fastify";
import prisma from "../../../../packages/db/client"
export async function sessionRoutes(app:FastifyInstance){
    app.post('/session',async(request,reply)=>{
        try{
            const body=request.body as{
                title: string;
                hostId: string;
            }
            if(!body.title || !body.hostId){
                return reply.status(400).send({
                    error:"Session tittle and hostId are required",
                })
            }
            const session=await prisma.session.create({
                data:{
                    title:body.title,
                    hostId:body.hostId,

                }
            })
            return reply.status(201).send(session);
        }
          catch (error){
            console.error( error);
            return reply.status(500).send({
                error:"Something went wrong"
            })

        }

    })
}