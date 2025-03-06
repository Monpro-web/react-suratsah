import Image from "next/image";
import { Footer } from "./components/Footer";
import { Links } from "./components/Links";
import { Headline } from "./components/Headline";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col  row-start-2 items-center gap-4 sm:items-start">
        <Headline  page="Index" />
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
       <Links page="Index" />
      </main>   
      <Footer
        className="row-start-3"
      />
    </div>
  );
}
