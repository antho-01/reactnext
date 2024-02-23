import Image from "next/image";
import Link from "next/link"

export default function DefaultHome() {
  return (
      <div className="navBar">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />

            <ul>
                <li><Link href="/home" className="link">Home</Link></li>
                <li><Link href="/about" className="link">About</Link></li>
                <li><Link href="/contact" className="link">Contact</Link></li>
            </ul>

            <div className="hamburger">
              <div></div>
              <div className="middle"></div>
              <div></div>
            </div>
      </div>
  );
}
