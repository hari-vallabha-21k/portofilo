import "./globals.css";

import type { Metadata } from "next";
import { Navbar } from "@/views/Navbar";
import localFont from "next/font/local";
import { GridBackground } from "@/components/graphics/GridBackground";
import { ResponsiveContainer } from "@/components/layout/ResponsiveContainer";

const clashDisplay = localFont({
	src: "./fonts/ClashDisplay-Variable.woff2",
	variable: "--font-clash-display",
	weight: "200 700"
});

const satoshi = localFont({
	src: "./fonts/Satoshi-Variable.woff2",
	variable: "--font-satoshi",
	weight: "300 900"
});

export const metadata: Metadata = {
	title: "Kadam Hari Vallabha",
	description:
		"I'm Kadam Hari Vallabha, a final-year B.Tech Data Science student specializing in full-stack development, machine learning, and AI-driven applications.",

	authors: [{ name: "Kadam Hari Vallabha" }],

	keywords: [
		"Kadam Hari Vallabha",
		"Hari Vallabha",
		"Data Scientist",
		"Machine Learning Engineer",
		"Full Stack Developer",
		"AI Developer",
		"Python Developer",
		"React Developer",
		"Flask",
		"Node.js",
		"Data Science Student",
		"ML Projects",
		"Healthcare Analytics",
		"AI Voice Assistant"
	],
	metadataBase: new URL("https://www.HariVallabha.com"),
	openGraph: {
		title: "Kadam Hari Vallabha",
		description:
			"I'm Kadam Hari Vallabha, a final-year B.Tech Data Science student specializing in full-stack development, machine learning, and AI-driven applications.",
		url: "https://www.HariVallabha.com",
		images: "/opengraph-image.png"
	}
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
	return (
		<html lang="en">
			<body className={`${clashDisplay.variable} ${satoshi.variable} relative antialiased`}>
				<GridBackground className="absolute inset-0 h-full min-h-screen w-full" />

				<ResponsiveContainer>
					<main className="p-8 font-satoshi">
						<Navbar />

						<div className="my-8 sm:my-24" />

						{children}
					</main>
				</ResponsiveContainer>
			</body>
		</html>
	);
}
