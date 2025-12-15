"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const timeSlots = ["9:00am", "9:30am", "10:00am", "10:30am", "11:00am", "11:30am", "12:00pm", "12:30pm", "1:00pm", "1:30pm", "2:00pm", "2:30pm"];

export default function ScheduleMeeting() {
	const [selectedDate, setSelectedDate] = useState<number | null>(17);
	const [selectedTime, setSelectedTime] = useState<string | null>(null);
	const [is24h, setIs24h] = useState(false);

	// sample event days to render small dots on calendar (like your screenshot)
	const eventDays = [15];

	const formatTime = (t: string) => {
		if (!is24h) return t;
		// simple conversion for the sample times above
		const [time, period] = [t.replace(/(am|pm)/, ""), t.slice(-2)];
		const parts = time.split(":").map(Number);
		let hour = parts[0];
		const minute = parts[1];
		if (period.toLowerCase() === "pm" && hour !== 12) hour += 12;
		if (period.toLowerCase() === "am" && hour === 12) hour = 0;
		return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
	};

	return (
		<div className="grid grid-cols-1 gap-6 rounded-2xl border bg-background p-6 md:grid-cols-[280px_1fr_260px]">
			{/* LEFT INFO */}
			<div className="space-y-4 text-sm">
				<div className="flex items-center gap-3">
					<div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-slate-700 to-slate-900 font-semibold text-white">
						MK
					</div>
					<div>
						<div className="text-sm text-muted-foreground">Manas Khandelwal</div>
						<h3 className="text-lg font-semibold">30 Min Meeting</h3>
					</div>
				</div>

				<div className="flex items-center gap-3 text-sm text-muted-foreground">
					<div className="inline-flex items-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
							<path d="M12 6v6l4 2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						<span>30m</span>
					</div>
					<div className="inline-flex items-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
						</svg>
						<span>Google Meet</span>
					</div>
				</div>

				<div className="flex items-center gap-2 text-sm text-muted-foreground">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path d="M12 2v6l4 2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
					<span>Asia/Kolkata</span>
				</div>
			</div>

			{/* CALENDAR */}
			<div>
				<h4 className="mb-4 font-medium">December 2025</h4>

				<div className="grid grid-cols-7 gap-2 text-center text-sm">
					{["S", "M", "T", "W", "T", "F", "S"].map((d) => (
						<span key={d} className="text-muted-foreground">
							{d}
						</span>
					))}

					{[...Array(31)].map((_, i) => {
						const day = i + 1;
						const isSelected = day === selectedDate;

						return (
							<button
								key={day}
								onClick={() => setSelectedDate(day)}
								className={cn(
									"flex flex-col items-center rounded-lg py-2 transition",
									isSelected ? "bg-orange-300 font-semibold text-black" : "bg-muted hover:bg-muted/80"
								)}
							>
								<span>{day}</span>
								{eventDays.includes(day) && <span className="mt-1 block h-1 w-1 rounded-full bg-orange-400" />}
							</button>
						);
					})}
				</div>
			</div>

			{/* TIME SLOTS */}
			<div>
				<div className="mb-3 flex items-center justify-between">
					<h4 className="font-medium">Wed {selectedDate}</h4>
					<div className="flex gap-1 rounded-full bg-muted p-1 text-xs">
						<button className={cn("rounded-full px-3 py-1", !is24h ? "bg-background" : "text-muted-foreground")} onClick={() => setIs24h(false)}>
							12h
						</button>
						<button className={cn("rounded-full px-3 py-1", is24h ? "bg-background" : "text-muted-foreground")} onClick={() => setIs24h(true)}>
							24h
						</button>
					</div>
				</div>

				<div className="max-h-[320px] space-y-2 overflow-y-auto pr-2">
					{timeSlots.map((time) => (
						<button
							key={time}
							onClick={() => setSelectedTime(time)}
							className={cn(
								"w-full rounded-xl border px-4 py-2 text-left text-sm transition",
								selectedTime === time ? "bg-primary text-primary-foreground" : "hover:bg-muted"
							)}
						>
							{formatTime(time)}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
