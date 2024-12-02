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

async function getApps() {
  const res = await fetch("https://api.lecca.io/workflow-apps", {
    next: {
      revalidate: 86400, // 24 hours in seconds
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch apps");
  }

  return res.json();
}

export default async function ToolsPage() {
  const apps = await getApps();

  return (
    <div className="container mx-auto px-4 py-8  min-h-[calc(100dvh-300px)]">
      <h1 className="text-3xl font-bold mb-4">Tools</h1>
      <p className="mb-8">
        The actions and triggers you can use within your workflows and with AI
        agents.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {apps
          .filter((app: any) => app.isPublished)
          .map((app: any) => (
            <Card key={app.id} className="hover:shadow-md">
              <Link href={`/tools/${app.id}`}>
                <CardHeader>
                  <img
                    src={app.logoUrl}
                    alt={app.name}
                    className="size-10 object-contain mb-4"
                  />
                  <h2 className="text-xl font-semibold mb-2">{app.name}</h2>
                </CardHeader>
                <CardContent>
                  <CardDescription>{app.description}</CardDescription>
                </CardContent>
              </Link>
            </Card>
          ))}
      </div>
    </div>
  );
}
