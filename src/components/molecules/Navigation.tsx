import React from "react";
import { type Route } from "next";
import ActiveLink from "../atoms/ActiveLink";
import Search from "../atoms/Search";

export type NavLinkType = {
	href: Route<string>;
	label: string;
};

const navLinks: NavLinkType[] = [
	{
		href: "/",
		label: "Home",
	},
	{
		href: "/products",
		label: "All",
	},
	{
		href: "/categories/t-shirts" as Route,
		label: "t-shirts",
	},
	{
		href: "/collections/new-in" as Route,
		label: "New Items",
	},
];

const Navigation = () => {
	return (
		<nav
			data-testid="navigation"
			className="w-full items-center px-24 py-4"
		>
			<div className="flex justify-between">
				<ul className="flex gap-4">
					{navLinks.map((link) => (
						<li key={link.label}>
							<ActiveLink
								className="text-red-700"
								activeClassName="border-b  border-b-red-700 "
								exact={true}
								href={link.href}
							>
								{link.label}
							</ActiveLink>
						</li>
					))}
				</ul>

				<Search />
			</div>
		</nav>
	);
};

export default Navigation;
