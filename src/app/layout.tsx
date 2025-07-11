import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://r3ne-sch0b3r.web'),
    title: {
        default: "René Schober - Full-Stack Entwickler & Technologie-Enthusiast",
        template: "%s | René Schober"
    },
    description: "Full-Stack Entwickler aus Salzburg mit Expertise in Vue.js, Node.js, TypeScript und modernen Web-Technologien. Spezialisiert auf Clean Architecture, Container-Deployment und innovative Portfolio-Lösungen.",
    keywords: [
        "Full-Stack Entwickler",
        "Vue.js",
        "Node.js",
        "TypeScript",
        "React",
        "Next.js",
        "Docker",
        "ElysiaJS",
        "Bun",
        "Clean Architecture",
        "Salzburg",
        "Webentwicklung",
        "Frontend",
        "Backend",
        "Container-Deployment",
        "DevOps"
    ],
    authors: [{ name: "René Schober" }],
    creator: "René Schober",
    publisher: "René Schober",
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: "website",
        locale: "de_AT",
        url: "https://r3ne-sch0b3r.web/",
        siteName: "René Schober Portfolio",
        title: "René Schober - Full-Stack Entwickler & Technologie-Enthusiast",
        description: "Full-Stack Entwickler aus Salzburg mit Expertise in Vue.js, Node.js, TypeScript und modernen Web-Technologien.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "René Schober - Full-Stack Entwickler Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "René Schober - Full-Stack Entwickler & Technologie-Enthusiast",
        description: "Full-Stack Entwickler aus Salzburg mit Expertise in Vue.js, Node.js, TypeScript und modernen Web-Technologien.",
        images: ["/og-image.jpg"],
    },
    icons: {
        icon: [
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon.ico", sizes: "any" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
        other: [
            {
                rel: "mask-icon",
                url: "/safari-pinned-tab.svg",
                color: "#000000",
            },
        ],
    },
    manifest: "/site.webmanifest",
    other: {
        "msapplication-TileColor": "#000000",
        "theme-color": "#ffffff",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
