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
  const res = await fetch("https://api.lecca.io/ai/providers");
  const providers = await res.json();

  return Object.keys(providers).map((provider: any) => ({
    provider,
  }));
}

async function getProviders(providerId: string) {
  const res = await fetch("https://api.lecca.io/ai/providers", {
    next: {
      revalidate: 86400, // 24 hours
    },
  });

  const providers = await res.json();
  const provider = providers[providerId];

  if (!provider) {
    throw new Error("Provider not found");
  }

  return provider;
}

export default async function ProviderPage(props: {
  params: Promise<{ provider: string }>;
}) {
  const params = await props.params;
  const provider = await getProviders(params.provider);

  return (
    <div className="container mx-auto px-4 py-8  min-h-[calc(100dvh-300px)]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-4 mb-4">
          {/* <img
            src={provider.logoUrl}
            alt={provider.name}
            className="size-10 object-contain"
          /> */}
          <h1 className="text-3xl font-bold">{params.provider}</h1>
        </div>
        {/* <p className="mb-8">{provider.description}</p> */}
      </div>

      <div className="grid grid-cols-1 gap-8 sm:gap-20">
        {/* Language Models Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Language Models</h2>
          <div className="space-y-4">
            {Object.keys(provider.languageModels).length === 0 ? (
              <div className="text-muted-foreground text-sm flex items-center justify-center p-10">
                There are no language models
              </div>
            ) : (
              Object.entries(provider.languageModels).map(
                ([key, value]: [key: string, value: any]) => (
                  <Card key={key}>
                    <CardHeader>
                      <h3>{key}</h3>
                    </CardHeader>
                    <CardContent>
                      <CardDescription></CardDescription>
                      <CardDescription>
                        Vision: {value.vision ? "True" : "False"}
                      </CardDescription>
                      <CardDescription>
                        Tools: {value.tools ? "True" : "False"}
                      </CardDescription>
                      <CardDescription>
                        Can Stream Text:{" "}
                        {value.canStreamText ? "True" : "False"}
                      </CardDescription>
                      <CardDescription>
                        Can Stream Tools:{" "}
                        {value.canStreamTools ? "True" : "False"}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              )
            )}
          </div>
        </div>

        {/* Embedding Models Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Embedding Models</h2>
          <div className="space-y-4">
            {Object.keys(provider.embeddingModels).length === 0 ? (
              <div className="text-muted-foreground text-sm flex items-center justify-center p-10">
                There are no embedding models
              </div>
            ) : (
              Object.entries(provider.embeddingModels).map(
                ([key, value]: [key: string, value: any]) => (
                  <Card key={key}>
                    <CardHeader>
                      <h3>{key}</h3>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Default Dimension: {value.dimensionOptions.defaultDim}
                      </CardDescription>
                      <CardDescription>
                        Allows Custom Dimension:{" "}
                        {value.dimensionOptions.allowsCustomDim
                          ? "True"
                          : "False"}
                      </CardDescription>
                      <CardDescription>
                        Max Custom Dimension:{" "}
                        {value.dimensionOptions.maxCustomDim}
                      </CardDescription>
                      <CardDescription>
                        Minimum Custom Dimension:{" "}
                        {value.dimensionOptions.minCustomDim}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
