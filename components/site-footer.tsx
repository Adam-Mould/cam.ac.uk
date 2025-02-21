import Image from "next/image";
import Link from "next/link";
import {
  FOOTER_MENU_1,
  FOOTER_MENU_2,
  FOOTER_MENU_3,
  FOOTER_MENU_4,
} from "@/constants";

export function SiteFooter() {
  return (
    <footer className="bg-black py-8 text-white [&_a]:hover:underline">
      <div className="container grid gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link aria-current="page" href="/" className="block w-48">
            <Image
              src="/cam-logo-white.svg"
              alt="University of Cambridge"
              width={192}
              height={56}
              className="w-full"
            />
          </Link>

          <small className="block text-sm">{`© ${new Date().getFullYear()} University of Cambridge`}</small>

          <ul className="ml-2 space-y-2 text-sm">
            {FOOTER_MENU_1.map((item, index) => (
              <li key={`footer-menu-1-${index}`}>
                <a href={item.url}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="space-y-4">
          <h4>
            <a href="https://www.cam.ac.uk/study-at-cambridge?ucam-ref=global-footer">
              Study at Cambridge
            </a>
          </h4>

          <ul className="ml-2 space-y-2 text-sm">
            {FOOTER_MENU_2.map((item, index) => (
              <li key={`footer-menu-2-${index}`}>
                <a href={item.url}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="space-y-4">
          <h4>
            <a href="https://www.cam.ac.uk/about-the-university?ucam-ref=global-footer">
              About the University
            </a>
          </h4>

          <ul className="ml-2 space-y-2 text-sm">
            {FOOTER_MENU_3.map((item, index) => (
              <li key={`footer-menu-3-${index}`}>
                <a href={item.url}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="space-y-4">
          <h4>
            <a href="https://www.cam.ac.uk/research?ucam-ref=global-footer">
              Research at Cambridge
            </a>
          </h4>

          <ul className="ml-2 space-y-2 text-sm">
            {FOOTER_MENU_4.map((item, index) => (
              <li key={`footer-menu-4-${index}`}>
                <a href={item.url}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
