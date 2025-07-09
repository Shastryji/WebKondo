import { prisma } from "@/lib/db";

const Page = async ()=>{

  const user = await prisma.user.findMany();


  return (
    <div className="font-bold text-rose-500">
      {JSON.stringify(user,null,2)}
    </div>
  )
}
export default Page;