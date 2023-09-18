import React from "react";
import ActiveLink from "../atoms/ActiveLink";

const productsLink = {
	pathname: "/products",
};

const Navigation = () => {
	return (
		<nav
			data-testid="navigation"
			className="w-full items-center px-24 py-4"
		>
			<ul className="flex gap-4">
				<li>
					<ActiveLink
						className="text-red-700"
						activeClassName="border-b  border-b-red-700 "
						exact={true}
						href="/"
					>
						Home
					</ActiveLink>
				</li>
				<li>
					<ActiveLink
						className="text-red-700"
						activeClassName="border-b  border-b-red-700"
						exact={false}
						href={productsLink}
					>
						All
					</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
