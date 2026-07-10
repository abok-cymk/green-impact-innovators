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
  title: "Green Impact Innovators | CBO",
  description: "Empowering schools and communities in Kisumu to tackle hunger and climate change through sustainable forest gardens.",
  
  canonical: "https://abok-cymk.github.io/green-impact-innovators/",
  
  openGraph: {
    basic: {
      title: "Green Impact Innovators | CBO",
      type: "website",
      // preview image (e.g., og-image.png) inside public/ folder.
      image: "https://abok-cymk.github.io/green-impact-innovators/og-image.png", 
      url: "https://abok-cymk.github.io/green-impact-innovators/"
    },
    optional: {
      siteName: "Green Impact Innovators",
      description: "Empowering schools and communities in Kisumu to tackle hunger and climate change through sustainable forest gardens."
    }
  }
};