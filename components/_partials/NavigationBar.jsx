import Link from "next/link";
import SectionContainer from "../SectionContainer";

export default function NavigationBar() {
  return (
    <SectionContainer padding="sm" shade="dark">
      <section className="w-full flex justify-between items-center space-x-2">
        <Link href="/">
          <a className="font-black font--mono text-4xl text-stroke-light-50 text-stroke-1 text-transparent">
            <img src="/logo.png" className="h-8 lg:h-10" alt="logo" />
          </a>
        </Link>

        <div className="hidden md:flex uppercase space-x-8 font-medium tracking-wide">
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
