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
	const currentPath = usePathname();
	const path = typeof href === "string" ? href : href.pathname || "";

	const isActive = exact
		? currentPath === path
		: currentPath.startsWith(`${path}/`);

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
