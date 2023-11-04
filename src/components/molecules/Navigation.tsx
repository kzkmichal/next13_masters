import React from "react";
import { type Route } from "next";
import ActiveLink from "../atoms/ActiveLink";
import Search from "../atoms/Search";

export type NavLinkType = {
	href: Route<string>;
	label: string;
	exact?: boolean;
};

const navLinks: NavLinkType[] = [
	{
		href: "/",
		label: "Home",
		exact: true,
	},
	{
		href: "/products",
		label: "All",
		exact: false,
	},
	{
		href: "/collections/new-in" as Route,
		label: "New In",
		exact: true,
	},
	{
		href: "/categories/t-shirts" as Route,
		label: "t-shirts",
		exact: false,
	},
];

const Navigation = () => {
	return (
		<div className="flex  px-24 py-4 ">
			<nav data-testid="navigation" className="w-full items-center">
				<div className="flex justify-between">
					<ul className="flex gap-4">
						{navLinks.map((link) => (
							<li key={link.label}>
								<ActiveLink
									className="text-red-700"
									activeClassName="border-b  border-b-red-700 "
									exact={link.exact}
									href={link.href}
								>
									{link.label}
								</ActiveLink>
							</li>
						))}
					</ul>
				</div>
			</nav>
			<Search />
		</div>
	);
};

export default Navigation;
