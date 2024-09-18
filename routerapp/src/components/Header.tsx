import { Link } from "@tanstack/react-router";
export default function Header() {
  return (
    <nav>
      <Link
        to="/"
        className="px-2"
        activeProps={{
          className: "font-bold",
        }}
        activeOptions={{ exact: true }}
      >
        Home
      </Link>{" "}
      <Link
        to="/about"
        className="px-2"
        activeProps={{
          className: "font-bold",
        }}
      >
        About
      </Link>
      <Link
        to="/starwars/1"
        className="px-2"
        activeProps={{
          className: "font-bold",
        }}
      >
        1
      </Link>
    </nav>
  );
}
