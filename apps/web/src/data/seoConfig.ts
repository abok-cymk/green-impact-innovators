export interface SEOBlueprint {
  title: string;
  description: string;
  canonical: string;
  openGraph: {
    basic: {
      title: string;
      type: string;
      image: string;
      url: string;
    };
    optional: {
      siteName: string;
      description: string;
    };
  };
}

export const globalSEO: SEOBlueprint = {
  title: "Green Impact Innovators | CBO Certification & Legal Framework Pipeline",
  description: "A transparent update on certification progress, partnership readiness, and public accountability for community climate initiatives.",
  canonical: "https://greenimpactinnovators.org",
  openGraph: {
    basic: {
      title: "Green Impact Innovators | Community Climate Impact",
      type: "website",
      image: "https://greenimpactinnovators.org", // Use absolute paths for crawl bots
      url: "https://greenimpactinnovators.org"
    },
    optional: {
      siteName: "Green Impact Innovators Protocol",
      description: "Trusted operational frameworks that support community-led environmental impact with clear accountability."
    }
  }
};
