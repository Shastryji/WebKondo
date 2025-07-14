import { useTRPC } from "@/trpc/routers/client";
import { useQuery } from "@tanstack/react-query";

const Page = ()=>{

  const trpc = useTRPC();
  const {data} = useQuery(trpc.createAI.queryOptions({text:'hello!!'}))


  return (
    <div className="font-bold text-rose-500">
      {JSON.stringify(data)}
    </div>
  )
}
export default Page;