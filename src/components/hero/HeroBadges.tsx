"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { IconContext } from "react-icons";
import { LuArrowUpRight } from "react-icons/lu";
import { FaSpotify, FaSteam } from "react-icons/fa6";

export function HeroBadges() {
	return (
		<div className="flex flex-wrap gap-2">
			<HeroBadge
				text="Playing: Clash Of Clans"
				href="https://supercell.com/en/games/clashofclans/"
				icon={
					<IconContext.Provider value={{ size: "1rem" }}>
						<FaSteam />
					</IconContext.Provider>
				}
				className="bg-[#05173b] hover:bg-[#27395a]"
			/>

			<HeroBadge
				text="Listening to: Louise - Die With A Smile"
				href="https://open.spotify.com/track/2plbrEY59IikOBgBGLjaoe"
				icon={
					<IconContext.Provider value={{ size: "1rem" }}>
						<FaSpotify />
					</IconContext.Provider>
				}
				className="bg-[#137736] hover:bg-[#1c9245]"
			/>
		</div>
	);
}

interface HeroBadgeProps {
	icon: React.ReactNode;
	text: string;
	href: string;
	className?: string;
}

export function HeroBadge({ icon, text, href, className }: HeroBadgeProps) {
	return (
		<a
			href={href}
			target="_blank"
			className={cn(
				"inline-flex items-center gap-2 rounded-full border bg-background px-3.5 py-1 text-sm font-semibold text-foreground transition-colors",
				className
			)}
		>
			{icon}

			{text}

			<IconContext.Provider value={{ size: "1rem" }}>
				<LuArrowUpRight />
			</IconContext.Provider>
		</a>
	);
}
