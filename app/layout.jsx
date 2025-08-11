import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import { IkalasLogo } from "../components/icons";

export const metadata = {
  description:
    "Official Ikalas API Documentation - Artificial Intelligence and Automation Platform.",
  metadataBase: new URL("https://ikalas.com"),
  keywords: [
    "Ikalas",
    "API",
    "Artificial Intelligence",
    "AI",
    "Automation",
    "Documentation",
    "Development",
    "Integration",
  ],
  generator: "Next.js",
  applicationName: "Ikalas Documentation",
  appleWebApp: {
    title: "Ikalas Documentation",
  },
  title: {
    default: "Ikalas Documentation – API and Artificial Intelligence",
    template: "%s | Ikalas Documentation",
  },
  openGraph: {
    url: "./",
    siteName: "Ikalas Documentation",
    locale: "en_US",
    type: "website",
    title: "Ikalas Documentation",
    description: "Official Ikalas API Documentation",
  },
  other: {
    "msapplication-TileColor": "#3b82f6",
  },
  twitter: {
    site: "https://ikalas.com",
  },
  alternates: {
    canonical: "./",
  },
};

const banner = (
  <Banner dismissible={false}>
    🚀 Welcome to Ikalas documentation! Discover our complete API and AI functions.
  </Banner>
);

const navbar = (
  <Navbar
    logo={
      <IkalasLogo
        height="20"
        className="logo-animation hover:transition-all hover:duration-1000 motion-reduce:hover:transition-none"
      />
    }
    projectLink="https://github.com/ikalasdev/ikalas-documentation-fr"
  />
);

const footer = (
  <Footer className="flex-col items-center md:items-start">
    <p className="mt-6 text-xs">
      © {new Date().getFullYear()} Ikalas. All rights reserved.
    </p>
  </Footer>
);

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap();
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/ikalasdev/ikalas-documentation-fr"
          editLink="Edit this page on GitHub"
          feedback={{
            content: "Give feedback →",
          }}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
          toc={{
            title: "On this page",
            extraContent: (
              <>
                <a href="https://ikalas.com" className="block mt-1 text-xs">
                  Website link
                </a>
              </>
            ),
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
