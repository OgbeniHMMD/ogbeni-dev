import Link from "next/link";
import SectionContainer from "../SectionContainer";

export default function NavigationBar() {
  return (
    <SectionContainer padding="sm" shade="dark">
      <section className="w-full flex justify-between items-center space-x-2">
        <div className="font-medium font-mono text-3xl">&#128483;</div>

        <div className="uppercase flex space-x-4 font-medium tracking-wide">
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
