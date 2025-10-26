import type { ReactNode } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import "./NavLink.scss";

interface NavLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

export const NavLink = ({ to, children, className = "" }: NavLinkProps) => {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `${"nav-link"} ${isActive ? "active" : ""} ${className}`
      }
    >
      {children}
    </RouterNavLink>
  );
};
