/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
// app/integrations/page.tsx

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";

async function getProviders() {
  const res = await fetch("https://api.lecca.io/ai/providers", {
    next: {
      revalidate: 86400, // 24 hours
    },
  });

  const providers = await res.json();

  return providers;
}

export default async function AiProvidersPage() {
  const providers = await getProviders();

  return (
    <div className="container mx-auto px-4 py-8 min-h-[calc(100dvh-300px)]">
      <h1 className="text-3xl font-bold mb-4">AI Providers</h1>
      <p className="mb-8">
        Supported AI Providers to use in your workflows and AI Agents.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Object.entries(providers).map(([key]: any) => (
          <Card key={key} className="hover:shadow-md">
            <Link href={`/ai-providers/${key}`}>
              <CardHeader>
                {/* <img
                  src={app.logoUrl}
                  alt={app.name}
                  className="size-10 object-contain mb-4"
                /> */}
                <h2 className="text-xl font-semibold mb-2">{key}</h2>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {"View LLM and embedding models"}
                </CardDescription>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
