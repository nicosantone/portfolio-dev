import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";
import Image from "next/image";

export default function Home() {
  return (
  <main>
    <TransitionPage />
    <div className="flex min-h-[100vh] h-full bg-[linear-gradient(90.21deg,rgba(170,54,124,0.5)-5.91%,rgba(74,47,189,0.5)111.58%)] bg-cover bg-center">
      <CoverParticles />
      <Introduction />
    </div>
  </main>
  );
}
