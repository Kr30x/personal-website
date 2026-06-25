import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import FaviconCube from "@/components/FaviconCube";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://gleb-golubev.vercel.app/"),

	title: {
		template: "Глеб Голубев",
		default: "Глеб Голубев",
	},
	authors: {
		name: "Gleb Golubev",
	},

	description:
		"I'm a full-stack developer from Moscow. I'm passionate about creating beautiful, performant, and user-friendly products.",
	openGraph: {
		title: "Gleb Golubev",
		description:
			"I'm a full-stack developer from Moscow. I'm passionate about creating beautiful, performant, and user-friendly products.",
		url: "https://gleb-golubev.vercel.app/",
		siteName: "Gleb Golubev",
		images: "/og.png",
		type: "website",
	},
	keywords: ["Gleb Golubev", "software developer", "fullstack"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${font.className}`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <FaviconCube />
            {children}
        </ThemeProvider></body>
    </html>
  );
}
