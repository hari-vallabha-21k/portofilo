import { HeroBadges } from "@/components/hero/HeroBadges";
import { HeroButtons } from "@/components/hero/HeroButtons";
import { SectionTitle } from "@/components/typography/SectionTitle";

export function HeroSection() {
	return (
		<section id="about" className="mx-auto max-w-[40rem]">
			<SectionTitle text="Hi,Hari Vallabha." />
			<div className="space-y-6">
				<p>
					I am a final-year <em>B.Tech Data Science</em> student passionate about building intelligent, ethical technologies that create meaningful
					real-world impact.
				</p>
				<p>
					I specialize in <em>full-stack development</em> and <em>machine learning</em>, using tools such as{" "}
					<em>Python, React, Node.js, and Flask</em>, along with data libraries including <em>Pandas, Scikit-learn, and Plotly</em>, to develop
					applications focused on <em>healthcare equity</em>, <em>productivity</em>, and <em>AI-driven automation</em>.
				</p>
				<p>
					From identifying <em>triage bias</em> to enhancing <em>focus through behavioral analytics</em>, I believe technology should not only be{" "}
					<em>intelligent</em> but also <em>fair, accessible, and human-centered</em>.
				</p>
			</div>

			<div className="mb-4 text-base">
				<p className="mb-2">This is what I&apos;m currently up to:</p>

				<HeroBadges />
			</div>

			<HeroButtons />
		</section>
	);
}
