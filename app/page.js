
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Main page="Index" code={<code>app/page.js</code>}>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={180}
          priority
        />
      </Main>
        <Footer className="row-start-3" />
      
    </div>
  );
}