import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <Link href="/" passHref>
          <a className="header-link">home</a>
        </Link>
        <Link href="/about" passHref>
          <a className="header-link">about me</a>
        </Link>
      </div>
    </header>
  );
}
