import { NavLink } from "react-router-dom";

const Navigation = () => {
  const routes = [
    { href: "", label: "swap" },
    { href: "liquidity", label: "pool" },
  ];
  return (
    <nav className="mx-6 space-x-4 lg:space-x-6 hidden md:block">
      {routes.map((route, index) => (
        <NavLink
          key={index}
          to={route.href}
          className={({ isActive }) =>
            isActive
              ? "text-medium font-bold transition-colors hover:underline underline"
              : "text-medium font-medium transition-colors hover:underline"
          }
        >
          {route.label.toUpperCase()}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
