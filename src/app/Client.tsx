'use client';

import { useTRPC } from "@/trpc/routers/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Client = () =>
{
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.createAI.queryOptions({text: 'Shivam Prefetch'}));

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}