import { prisma } from "@/lib/db";
import { useTRPC } from "@/trpc/routers/client";

const Page = async ()=>{

  const trpc = useTRPC();
  trpc.createAI.queryOptions({text:'hello!!'})

  const user = await prisma.user.findMany();


  return (
    <div className="font-bold text-rose-500">
      {JSON.stringify(user,null,2)}
    </div>
  )
}
export default Page;