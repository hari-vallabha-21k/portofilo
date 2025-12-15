import { Project } from "./model";
import { Technology } from "@/lib/common";

export const projects: Project[] = [
	{
		name: "Code Craft",
		summary: "AI-powered neuro-productivity application to improve focus using behavioral analytics",
		technologies: [Technology.Python, Technology.Flask, Technology.JavaScript, Technology.React, Technology.Git, Technology.GitHub],
		links: {
			// github: "https://github.com/your-username/code-craft"
		},
		screenshots: [
			{
				name: "Code Craft focus dashboard",
				mobile: {
					src: "/images/code-craft/dashboard-460w.webp",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/code-craft/dashboard-350w.webp",
					width: 350,
					height: 279
				},
				magnified: {
					src: "/images/code-craft/dashboard-740w.webp",
					width: 740,
					height: 590
				}
			}
		],
		type: "bullets",
		bullets: [
			"Built a neuro-productivity application using Flask and full-stack web technologies.",
			"Analyzed typing patterns to detect stress and cognitive fatigue in real time.",
			"Improved user focus cycles by 30% through behavioral analytics and adaptive wellness triggers.",
			"Implemented gamified UX elements to encourage sustained productivity."
		]
	},
	{
		name: "Simpl Home – AI Voice Assistant",
		summary: "AI-powered voice assistant for automating customer support with multilingual capabilities",
		technologies: [Technology.React, Technology.TypeScript, Technology.NodeJS, Technology.Python],
		links: {
			// add later if deployed
		},
		screenshots: [
			{
				name: "Simpl Home dashboard",
				mobile: {
					src: "/images/simpl-home/dashboard-460w.webp",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/simpl-home/dashboard-350w.webp",
					width: 350,
					height: 279
				},
				magnified: {
					src: "/images/simpl-home/dashboard-740w.webp",
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
		name: "UniFit",
		summary: "Full-stack meal planning solution for university students",
		technologies: [
			Technology.React,
			Technology.TypeScript,
			Technology.NextJS,
			Technology.TailwindCSS,
			Technology.PostgreSQL,
			Technology.Rust,
			Technology.Vercel,
			Technology.Figma
		],
		links: {
			live: "https://www.unifit.me"
		},
		screenshots: [
			{
				name: "UniFit home page",
				mobile: {
					src: "/images/unifit/home-460w.webp",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/unifit/home-350w.webp",
					width: 350,
					height: 279
				},
				magnified: {
					src: "/images/unifit/home-740w.webp",
					width: 740,
					height: 590
				}
			},
			{
				name: "UniFit account and meal plans page",
				mobile: {
					src: "/images/unifit/account-460w.webp",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/unifit/account-350w.webp",
					width: 350,
					height: 279
				},
				magnified: {
					src: "/images/unifit/account-740w.webp",
					width: 740,
					height: 590
				}
			},
			{
				name: "UniFit meal plan preferences builder page",
				mobile: {
					src: "/images/unifit/builder-460w.webp",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/unifit/builder-350w.webp",
					width: 350,
					height: 279
				},
				magnified: {
					src: "/images/unifit/builder-740w.webp",
					width: 740,
					height: 590
				}
			}
		],
		type: "bullets",
		bullets: [
			"Engineered an optimal meal plan generation algorithm using dynamic programming, reducing computation time and memory footprint both by over 90% compared to brute force approaches",
			"Architected a REST API to efficiently query ~800k meal plans considering various user preferences"
		]
	},
	{
		name: "Personle!",
		summary: "Full-stack daily guessing game for characters from the Persona video game series",
		technologies: [
			Technology.React,
			Technology.TypeScript,
			Technology.TailwindCSS,
			Technology.Java,
			Technology.SpringBoot,
			Technology.AWS,
			Technology.Rust,
			Technology.Nginx,
			Technology.Figma
		],
		links: {
			github: "https://github.com/declspecl/personle",
			live: "https://www.personle.app"
		},
		screenshots: [
			{
				name: "Personle! home page",
				mobile: {
					src: "/images/personle/home-460w.webp",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/personle/home-350w.webp",
					width: 350,
					height: 279
				},
				magnified: {
					src: "/images/personle/home-740w.webp",
					width: 740,
					height: 590
				}
			},
			{
				name: "Personle! daily play page",
				mobile: {
					src: "/images/personle/daily-460w.webp",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/personle/daily-350w.webp",
					width: 350,
					height: 279
				},
				magnified: {
					src: "/images/personle/daily-740w.webp",
					width: 740,
					height: 590
				}
			},
			{
				name: "Personle! daily play correct guess",
				mobile: {
					src: "/images/personle/daily-correct-460w.webp",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/personle/daily-correct-350w.webp",
					width: 350,
					height: 279
				},
				magnified: {
					src: "/images/personle/daily-correct-740w.webp",
					width: 740,
					height: 590
				}
			},
			{
				name: "Personle! compendium page",
				mobile: {
					src: "/images/personle/compendium-460w.webp",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/personle/compendium-350w.webp",
					width: 350,
					height: 279
				},
				magnified: {
					src: "/images/personle/compendium-740w.webp",
					width: 740,
					height: 590
				}
			}
		],
		type: "bullets",
		bullets: [
			"Scaled application from launch to 600 peak DAU with a performant REST API and NoSQL database",
			"Achieved 99.9% uptime through automated CDK IaC pipelines on a self-hosted VPS",
			"Applied creative and accessible UI styling techniques to mimic the complex art style of Persona 5"
		]
	},
	{
		name: "O.U. Bookmarket",
		summary: "Full-stack textbook resale marketplace for Oakland University students",
		technologies: [Technology.React, Technology.TypeScript, Technology.Java, Technology.SpringBoot, Technology.SQLite, Technology.GCP, Technology.Figma],
		links: {
			github: "https://github.com/declspecl/bookmarket"
		},
		screenshots: [
			{
				name: "O.U. Bookmarket shop page",
				mobile: {
					src: "/images/bookmarket/shop-460w.webp",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/bookmarket/shop-350w.webp",
					width: 350,
					height: 279
				},
				magnified: {
					src: "/images/bookmarket/shop-740w.webp",
					width: 740,
					height: 590
				}
			},
			{
				name: "O.U. Bookmarket comments page",
				mobile: {
					src: "/images/bookmarket/comments-460w.webp",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/bookmarket/comments-350w.webp",
					width: 350,
					height: 279
				},
				magnified: {
					src: "/images/bookmarket/comments-740w.webp",
					width: 740,
					height: 590
				}
			},
			{
				name: "O.U. Bookmarket create listing page",
				mobile: {
					src: "/images/bookmarket/create-listing-460w.webp",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/bookmarket/create-listing-350w.webp",
					width: 350,
					height: 279
				},
				magnified: {
					src: "/images/bookmarket/create-listing-740w.webp",
					width: 740,
					height: 590
				}
			},
			{
				name: "O.U. Bookmarket signup page",
				mobile: {
					src: "/images/bookmarket/signup-460w.webp",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/bookmarket/signup-350w.webp",
					width: 350,
					height: 279
				},
				magnified: {
					src: "/images/bookmarket/signup-740w.webp",
					width: 740,
					height: 590
				}
			}
		],
		type: "bullets",
		bullets: [
			"Led a team of 4 student developers to deliver and deploy a production application in 10 weeks",
			"Designated tasks using Agile methodologies and Kanban",
			"Organized weekly scrum meetings to ensure timely completion of features",
			"Created numerous reports and diagrams documenting the application's design, business requirements, and implementation"
		]
	}
];
