/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
// app/integrations/[integration]/page.tsx

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

// Generate static pages at build time
export async function generateStaticParams() {
  const res = await fetch("https://api.lecca.io/workflow-apps");
  const apps = await res.json();

  return apps.map((app: any) => ({
    integration: app.id,
  }));
}

// Fetch single app data
async function getApp(toolId: string) {
  const res = await fetch("https://api.lecca.io/workflow-apps", {
    next: {
      revalidate: 86400, // 24 hours
    },
  });

  const apps = await res.json();
  const app = apps.find((app: any) => app.id === toolId);

  if (!app) {
    throw new Error("Integration not found");
  }

  return app;
}

export default async function ToolPage(props: {
  params: Promise<{ tool: string }>;
}) {
  const params = await props.params;
  const app = await getApp(params.tool);

  return (
    <div className="container mx-auto px-4 py-8  min-h-[calc(100dvh-300px)]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={app.logoUrl}
            alt={app.name}
            className="size-10 object-contain"
          />
          <h1 className="text-3xl font-bold">{app.name}</h1>
        </div>
        <p className="mb-8">{app.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:gap-20">
        {/* Actions Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Actions</h2>
          <div className="space-y-4">
            {app.actions.length === 0 ? (
              <div className="text-muted-foreground text-sm flex items-center justify-center p-10">
                There are no actions
              </div>
            ) : (
              app.actions.map((action: any) => (
                <Card key={action.id}>
                  <CardHeader>
                    <h3>{action.name}</h3>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{action.description}</CardDescription>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>

        {/* Triggers Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Triggers</h2>
          <div className="space-y-4">
            {app.triggers.length === 0 ? (
              <div className="text-muted-foreground text-sm flex items-center justify-center p-10">
                There are no triggers
              </div>
            ) : (
              app.triggers.map((trigger: any) => (
                <Card key={trigger.id}>
                  <CardHeader>
                    <h3>{trigger.name}</h3>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{trigger.description}</CardDescription>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>

        {/* Connections Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Connections</h2>
          <div className="space-y-4">
            {app.connections.length === 0 ? (
              <div className="text-muted-foreground text-sm flex items-center justify-center p-10">
                No connection is required to use this tool
              </div>
            ) : (
              app.connections.map((connection: any) => (
                <Card key={connection.id}>
                  <CardHeader>
                    <h3>{connection.name}</h3>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{connection.description}</CardDescription>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
