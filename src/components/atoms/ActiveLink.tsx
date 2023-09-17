"use client";

import { type UrlObject } from "url";
import { type Route } from "next";
import React, { type ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type ActiveLinkProp<T extends string> = {
	className?: string;
	activeClassName?: string;
	href: Route<T> | UrlObject;
	children: ReactNode;
	exact: boolean;
};

const ActiveLink = <T extends string>({
	className,
	activeClassName,
	href,
	children,
	exact,
}: ActiveLinkProp<T>) => {
	const pathName = usePathname();

	const path = typeof href === "string" ? href : href.pathname || "";

	const isActive = exact
		? pathName === path
		: pathName.startsWith(path);

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
