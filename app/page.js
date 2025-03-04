import Image from "next/image";
import { Footer } from "./components/Footer";
import { Links } from "./components/Links";
import { Headline } from "./components/Headline";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Headline  page="Index" />
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
       <Links />
      </main>   
      <Footer
        className="row-start-3"
      />
    </div>
  );
}
