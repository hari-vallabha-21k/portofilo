"use client";

import { IconContext } from "react-icons";
import { Button } from "@/components/ui/Button";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

export function HeroButtons() {
	return (
		<div className="flex flex-row flex-wrap items-center gap-4">
			<Button asChild>
				<a href="#timeline">Learn more</a>
			</Button>
			<Button asChild>
				<a href="/harii resume.pdf" target="_blank">
					Resume
				</a>
			</Button>

			<IconContext.Provider value={{ size: "1.5rem" }}>
				<Button size="icon" asChild>
					<a href="https://github.com/hari-vallabha-21k" target="_blank" aria-label="GitHub link">
						<LuGithub />
					</a>
				</Button>
				<Button size="icon" asChild>
					<a href="https://www.linkedin.com/in/harii-vallabha-4892602a5" target="_blank" aria-label="Linkedin link">
						<LuLinkedin />
					</a>
				</Button>
				<Button size="icon" asChild>
					<a href="mailto:harivallabhak@gmail.com" aria-label="Email link">
						<LuMail />
					</a>
				</Button>
			</IconContext.Provider>
		</div>
	);
}
