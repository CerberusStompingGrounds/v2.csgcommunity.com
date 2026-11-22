import { CSGVideo } from "@/components/CSGVideo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden">
      <CSGVideo
        fileName="/intro.mp4"
        fallbackFileName="/intro.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 px-4">
        <Image
          alt="Cerberus Stomping Grounds"
          src="/logo-large.png"
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
