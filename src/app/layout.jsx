import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import Image from "next/image";
import NavbarLogo from "../components/NavbarLogo";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { HideLastUpdated } from "@components/HideLastUpdated";

export const metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
    title: {
        default: 'Studio Documentation',
        template: '%s | Studio'
    },
    description: 'Studio documentation',
};

const navbar = (
    <Navbar
        logo={<NavbarLogo />}
        // ... Your additional navbar options
    />
);
// const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>;

export default async function RootLayout({ children }) {
    return (
        <html
            // Not required, but good for SEO
            lang="en"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
            <Head
            // ... Your additional head options
            >
                {/* Your additional tags should be passed as `children` of `<Head>` element */}
            </Head>
            <body>
                <ThemeProvider defaultTheme="dark" enableSystem={false} attribute="class">
                    <Layout sidebar={{ autoCollapse: false, defaultOpen: true, defaultMenuCollapseLevel: 1 }}
                        // banner={banner}
                        navbar={navbar}
                        pageMap={await getPageMap()}
                        docsRepositoryBase="https://none"
                        // footer={footer}
                        editLink={false}
                        feedback={{ content: false }}
                        lastUpdated={<HideLastUpdated/>}
                        // ... Your additional layout options
                    >
                        {children}
                    </Layout>
                </ThemeProvider>
            </body>
        </html>
    );
}
