import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link href="/">
        <a className="navbar-brand">
          <img
            src="https://res.cloudinary.com/robcg1102/image/upload/v1604468774/maq_img/rickMorty_u5tbyz.png"
            alt="RickMoryLogo"
          />
        </a>
      </Link>

      <div className="navbar">
        <Link href="/characters">
          <a className="nav-link text-white">Characters</a>
        </Link>
        <Link href="/episodes">
          <a className="nav-link text-white">Episodes</a>
        </Link>
        <Link href="/locations">
          <a className="nav-link text-white">Locations</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
