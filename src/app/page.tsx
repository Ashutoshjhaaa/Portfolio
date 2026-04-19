import { Sidebar } from "@/components/layout/Sidebar";
import { Projects } from "@/components/sections/Projects";
import { GitHub } from "@/components/sections/GitHub";
import { InterviewCard } from "@/components/ui/InterviewCard";
import ContactSection from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

// Force dynamic (SSR) so GitHub contributions are always fetched live
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="max-w-[1184px] mx-auto min-h-screen pt-8 lg:pt-8 lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 px-4 lg:px-0">
      <div className="lg:col-span-5 xl:col-span-4">
        <Sidebar />
      </div>
      <div className="lg:col-span-7 xl:col-span-8">
        <main className="flex-1 p-4 lg:p-6 lg:pl-0 space-y-8 mt-12 lg:mt-[120px]">
          <Projects />
          <GitHub />
          <InterviewCard />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
