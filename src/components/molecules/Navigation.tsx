import React from "react";
import ActiveLink from "../atoms/ActiveLink";

const productsLink = {
	pathname: "/products/1",
};

const Navigation = () => {
	return (
		<div className="w-full items-center px-24 py-4">
			<ul className="flex gap-4">
				<li>
					<ActiveLink
						className="text-red-700"
						activeClassName="underline"
						exact={true}
						href="/"
					>
						Home
					</ActiveLink>
				</li>
				<li>
					<ActiveLink
						className="text-red-700"
						activeClassName="underline"
						exact={false}
						href={productsLink}
					>
						All
					</ActiveLink>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
