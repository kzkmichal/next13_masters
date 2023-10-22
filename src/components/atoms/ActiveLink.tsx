"use client";

import clsx from "clsx";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { type RouteType } from "next/dist/lib/load-custom-routes";

export type ActiveLinkProps = LinkProps<RouteType> & {
	className?: string;
	activeClassName?: string;
	exact?: boolean;
};

const ActiveLink = ({
	className,
	activeClassName,
	href,
	children,
	exact,
}: ActiveLinkProps) => {
	const pathName = usePathname();

	let isActive: boolean = false;
	const matchedPath: string = typeof href === "string" ? href : "";

	if (matchedPath) {
		isActive = exact
			? pathName === matchedPath
			: pathName.startsWith(matchedPath) &&
			  (pathName[matchedPath.length] === "/" ||
					pathName.length === matchedPath.length);
	}

	return (
		<Link
			className={clsx(className, isActive && activeClassName)}
			href={href}
		>
			{children}
		</Link>
	);
};

export default ActiveLink;
