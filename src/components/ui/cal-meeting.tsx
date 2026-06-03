"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Image from "next/image";
import { ABOUT_ME, CAL_CONFIG } from "@/app/constants/data";
import { SiGooglemeet } from "react-icons/si";

export default function Meeting() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("init", { origin: "https://cal.com" }); // Required for popup
      cal("ui", CAL_CONFIG.ui);
    })();
  }, []);

  return (
    <button
      data-cal-link={CAL_CONFIG.link}
      data-cal-config={JSON.stringify({ layout: CAL_CONFIG.ui.layout })}
      className="btn w-full px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 cursor-pointer"
    >
      <SiGooglemeet className="w-4 h-4" />
      Schedule a Meeting
    </button>
  );
}
