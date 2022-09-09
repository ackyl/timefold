import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <Link href="/" passHref>
          <a className="header-link">home</a>
        </Link>
        <Link href="/about" passHref>
          <a className="header-link">about</a>
        </Link>
        <Link href="https://whitenoisewish.es/" passHref>
          <a className="header-link" target="_blank">
            music
          </a>
        </Link>
      </div>
    </header>
  );
}
