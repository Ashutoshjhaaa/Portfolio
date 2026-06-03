import type { WakaTimeData } from "@/lib/services";
import { Clock, ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS, USER_NAMES } from "@/app/constants/data";
import Link from "next/link";
import { SiWakatime } from "react-icons/si";

export default function WakaTime({ data }: { data: WakaTimeData }) {
  const { today, yesterday, week, languages, editors } = data;

  return (
    <section id="wakatime" className="liquid-glass rounded-2xl overflow-hidden">
      {/* Section Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h2 className="text-2xl font-semibold flex items-center">wakatime.</h2>
        <Link
          href={SOCIAL_LINKS.wakatime}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm font-mono font-medium text-muted-foreground transition-colors shrink-0"
        >
          <SiWakatime
            className="inline-block align-middle mr-1 text-foreground"
            size={16}
          />
          {USER_NAMES.githubUsername}
          <ArrowUpRight className="inline-block w-4 h-4 ml-1" />
        </Link>
      </div>

      {/* Stats Content */}
      <div className="p-4 text-sm text-muted-foreground space-y-1">
        <div>
          <span className="text-foreground font-medium">Coding Time:</span>{" "}
          Today: {today} • Yesterday: {yesterday} • Week: {week}
        </div>
        <div>
          <span className="text-foreground font-medium">Recent Languages:</span>{" "}
          {languages.join(", ")}
        </div>
        <div>
          <span className="text-foreground font-medium">Current Editors:</span>{" "}
          {editors.join(", ")}
        </div>
      </div>
    </section>
  );
}
