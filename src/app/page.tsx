import { IntegrationsCarousel } from "@/components/integrations-carousel";
import { HomeHero } from "./home-hero";
import { HomeBenefits } from "./home-benefits";
import { HomeUseCases } from "./home-use-cases";
import { HomeFAQ } from "./home-faq";
import { Separator } from "@/components/ui/separator";
import { HomePricing } from "./home-pricing";
import { HomeContactUs } from "./home-contact-us";
import { HomeFeatures } from "./home-features";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-28 sm:pb-48">
      <HomeHero />
      <HomeBenefits />
      <HomeUseCases />
      <Separator />
      <HomeFeatures />
      <IntegrationsCarousel />
      <HomePricing />
      <HomeFAQ />
      <Separator />
      <HomeContactUs />
    </main>
  );
}
