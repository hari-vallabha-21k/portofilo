import { HeroBadges } from "@/components/hero/HeroBadges";
import { HeroButtons } from "@/components/hero/HeroButtons";
import { SectionTitle } from "@/components/typography/SectionTitle";

export function HeroSection() {
	return (
		<section id="about" className="mx-auto max-w-[40rem]">
			<SectionTitle text="Hi,Hari Vallabha." />
			<div className="space-y-6">
				<p>
					I&apos;m a final-year <em>B.Tech Data Science</em> student passionate about building intelligent, ethical technology that drives real-world
					impact.
				</p>
				<p>
					I specialize in <em>full-stack development</em> and <em>machine learning</em>, leveraging <em>Python, React, Node.js, Flask</em>, and data
					tools like
					<em>Pandas, Scikit-learn</em>, and <em>Plotly</em> to create applications in
					<em>healthcare equity</em>, <em>productivity</em>, and <em>AI automation</em>.
				</p>
				<p>
					From detecting <em>triage bias</em> to improving <em>focus through behavioral analytics</em>, I believe technology should be not only{" "}
					<em>smart</em>—but also
					<em>fair, accessible, and human-first</em>.
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
