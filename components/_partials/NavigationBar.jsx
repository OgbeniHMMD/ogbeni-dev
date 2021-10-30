import Link from "next/link";
import SectionContainer from "../SectionContainer";

export default function NavigationBar() {
  return (
    <SectionContainer padding="sm" shade="dark">
      <section className="flex space-x-2 w-full justify-between items-center">
        <Link href="/">
          <a className="font-black font--mono text-transparent text-4xl text-stroke-light-50 text-stroke-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" className="h-8 lg:h-10" alt="logo" />
          </a>
        </Link>

        <div className="font-medium space-x-8 tracking-wide hidden uppercase md:flex">
          <Link href="/#top">
            <a className="hover:(underline)">About</a>
          </Link>

          <Link href="/#contact">
            <a className="hover:(underline)">Contact</a>
          </Link>

          <Link href="/#blog">
            <a className="hover:(underline)">Blog</a>
          </Link>
        </div>
      </section>
    </SectionContainer>
  );
}
