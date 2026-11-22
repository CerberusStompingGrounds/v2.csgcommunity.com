import { CSGVideo } from "@/components/CSGVideo";
import type { Metadata } from "next";
import Image from "next/image";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden">
      <CSGVideo
        fileName={media("intro.mp4")}
        fallbackFileName={media("intro.avif")}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 px-4">
        <Image
          alt="Cerberus Stomping Grounds"
          src={media("logo-large.avif")}
          width="720"
          height="487"
          loading="eager"
          fetchPriority="high"
          className="mx-auto"
        />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center lg:text-5xl orange drop-shadow-2xl">
          Cerberus Stomping Grounds
        </h1>
      </div>
    </div>
  );
}
