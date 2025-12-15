import { Technology } from "@/lib/common";
import { TimelineEntryInformation } from "./model";

export const experienceEntries: TimelineEntryInformation[] = [
	{
		header: "Freelance AI Productivity App Developer",
		subheader: "AI / Full-Stack Developer",
		dateRange: [
			{ year: 2024, monthNumber: 1 },
			{ year: 2024, monthNumber: 4 }
		],
		location: "Remote",
		type: "bullets",
		bullets: [
			"Developed a neuro-productivity application (Code Craft) using Flask, Electron.js, and GitHub API.",
			"Improved user focus cycles by 30% through typing stress analysis and real-time cognitive state detection.",
			"Designed gamified UX and wellness triggers to enhance sustained productivity.",
			"Built and deployed full-stack features with a strong focus on performance and usability."
		],
		badges: [Technology.Python, Technology.Flask, Technology.JavaScript, Technology.React, Technology.NodeJS, Technology.Git, Technology.GitHub]
	}
];

export const educationEntries: TimelineEntryInformation[] = [
	{
		header: "Vignana Bharathi Institute of Technology",
		subheader: "Bachelor of Technology (B.Tech) – Data Science",
		dateRange: [
			{ year: 2022, monthNumber: 9 },
			{ year: 2026, monthNumber: 6 }
		],
		location: "Hyderabad, Telangana, India",
		type: "bullets",
		bullets: [
			"Current CGPA: 7.1",
			"Focused on Data Science, Machine Learning, and Full-Stack Development",
			"Hands-on experience with real-world projects in healthcare analytics and AI systems"
		],
		badges: [Technology.Python, Technology.JavaScript, Technology.React, Technology.NodeJS, Technology.SQL]
	}
];
