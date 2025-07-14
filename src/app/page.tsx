import { caller } from "@/trpc/server";

const Page = async()=>{

  const data = await caller.createAI({
    text: "Hello, how are you?"
  });

  return (
    <div className="font-bold text-rose-500">
      {JSON.stringify(data)}
    </div>
  )
}
export default Page;