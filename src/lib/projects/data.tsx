import { Project } from "./model";
import { Technology } from "@/lib/common";

export const projects: Project[] = [
	{
		name: "Space Monitor App",
		summary: "A unified React application combining real-time satellite monitoring with AI-based GNSS error forecasting.",
		technologies: [
			Technology.React,
			Technology.TypeScript,
			Technology.Vite,
			Technology.TailwindCSS,
			Technology.ThreeJS,
			Technology.Python,
			Technology.MachineLearning
		],
		links: {
			live: "https://gnss-genai-predictor-7nxp.vercel.app/"
		},
		screenshots: [
			{
				name: "3D Satellite Monitoring Dashboard",
				mobile: {
					src: "/images/Space%20Monitor%20App/GnssAI-1.png",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/Space%20Monitor%20App/GnssAI-1.png",
					width: 350,
					height: 279
				},
				magnified: {
					src: "/images/Space%20Monitor%20App/GnssAI-1.png",
					width: 740,
					height: 590
				}
			},
			{
				name: "AI GNSS Error Forecasting Dashboard",
				mobile: {
					src: "/images/Space%20Monitor%20App/GnssAI-2.png",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/Space%20Monitor%20App/GnssAI-2.png",
					width: 350,
					height: 279
				},
				magnified: {
					src: "/images/Space%20Monitor%20App/GnssAI-2.png",
					width: 740,
					height: 590
				}
			},
			{
				name: "Multi-Constellation Dataset Visualization",
				mobile: {
					src: "/images/Space%20Monitor%20App/GnssAI-3.png",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/Space%20Monitor%20App/GnssAI-3.png",
					width: 350,
					height: 279
				},
				magnified: {
					src: "/images/Space%20Monitor%20App/GnssAI-3.png",
					width: 740,
					height: 590
				}
			},
			{
				name: "Prediction Accuracy & Error Distributions",
				mobile: {
					src: "/images/Space%20Monitor%20App/GnssAI-4.png",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/Space%20Monitor%20App/GnssAI-4.png",
					width: 350,
					height: 279
				},
				magnified: {
					src: "/images/Space%20Monitor%20App/GnssAI-4.png",
					width: 740,
					height: 590
				}
			}
		],
		type: "bullets",
		bullets: [
			"Built an interactive 3D Earth dashboard using Three.js and React Three Fiber to visualize real-time satellite constellations.",
			"Developed an AI forecasting dashboard to predict GNSS errors using LSTM, Transformer, and ensemble models.",
			"Visualized multi-constellation datasets, prediction accuracy, and error distributions using interactive charts."
		]
	},
	{
		name: "Simpl Home ",
		summary: "AI-powered voice assistant for automating customer support with multilingual capabilities",
		technologies: [Technology.React, Technology.TypeScript, Technology.NodeJS, Technology.Python],
		links: {
			live: "https://simplhome.vercel.app/"
		},
		screenshots: [
			{
				name: "Simpl Home dashboard",
				mobile: {
					src: "/images/simplehomes/SimplHome-5.png",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/simplehomes/SimplHome-5.png",
					width: 350,
					height: 279
				},
				magnified: {
					src: "/images/simplehomes/SimplHome-5.png",
					width: 740,
					height: 590
				}
			},
			{
				name: "Simpl Home ecommerce page",
				mobile: {
					src: "/images/simplehomes/SimplHome-1.png",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/simplehomes/SimplHome-1.png",
					width: 350,
					height: 279
				},
				magnified: {
					src: "/images/simplehomes/SimplHome-1.png",
					width: 740,
					height: 590
				}
			},
			{
				name: "Simpl Home dashboard",
				mobile: {
					src: "/images/simplehomes/SimplHome-3.png",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/simplehomes/SimplHome-3.png",
					width: 350,
					height: 279
				},
				magnified: {
					src: "/images/simplehomes/SimplHome-3.png",
					width: 740,
					height: 590
				}
			}
		],
		type: "bullets",
		bullets: [
			"Developed an AI voice agent to automate customer service with 24/7 multilingual support.",
			"Integrated voice workflows to handle customer queries and actions without human intervention.",
			"Improved support ticket resolution speed by 40% through automation."
		]
	},

	{
		name: "Bhasha Linguistic  ",
		summary:
			"A modern web platform for preserving, analyzing, and collaboratively exploring India's linguistic heritage with real-time sync and optional AI-powered tools.",
		technologies: [
			Technology.React,
			Technology.TypeScript,
			Technology.Vite,
			Technology.TailwindCSS,
			Technology.Convex,
			Technology.FramerMotion,
			Technology.GeminiAI,
			Technology.Vercel
		],
		links: {
			live: "https://buildathon-five.vercel.app/"
		},
		screenshots: [
			{
				name: "Bhasha landing and contribution page",
				mobile: {
					src: "/images/hasha/Bhasha-1.png",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/hasha/Bhasha-1.png",
					width: 350,
					height: 279
				},
				magnified: {
					src: "/images/hasha/Bhasha-1.png",
					width: 740,
					height: 590
				}
			}
		],
		type: "bullets",
		bullets: [
			"Built a collaborative linguistic heritage platform enabling users to contribute traditional texts, proverbs, and folk narratives with rich metadata.",
			"Implemented real-time data synchronization and role-based access control using Convex and Convex Auth with email OTP and anonymous login.",

			"Integrated optional AI-powered text analysis and translation features using the Google Gemini API."
		]
	}
];
