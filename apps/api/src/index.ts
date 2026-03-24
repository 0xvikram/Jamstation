import Fastify, { fastify } from "fastify";
import { userRoutes } from "./routes/user";
const app=fastify();
app.register(userRoutes);

app.get('/', async()=>{
  return {message:"API Running.."};
}) 
app.listen({port:4000},()=>{
  console.log("Server running on http://localhost:4000");
})