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
  
  canonical: "https://greenimpactinnovators.works/",
  
  openGraph: {
    basic: {
      title: "Green Impact Innovators | CBO",
      type: "website",
      // preview image (e.g., og-image.png) inside public/ folder.
      image: "https://greenimpactinnovators.works/og-image.png", 
      url: "https://greenimpactinnovators.works/"
    },
    optional: {
      siteName: "Green Impact Innovators",
      description: "Empowering schools and communities in Kisumu to tackle hunger and climate change through sustainable forest gardens."
    }
  }
};