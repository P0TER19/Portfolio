"use client"
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
export default function Cal() {
  useEffect(() => {
    (async function() {
      const cal = await getCalApi({ "namespace": "15min" });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])
  return (
    <button data-cal-namespace="15min"
      data-cal-link="p0ter/15min"

      data-cal-config='{"layout":"month_view"}'
      className="relative inline-flex h-12 w-fit overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={`inline-flex h-full w-fit cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2`}>
        Let's get in touch
        <FaLocationArrow />
      </span>
    </button>
  )
};

