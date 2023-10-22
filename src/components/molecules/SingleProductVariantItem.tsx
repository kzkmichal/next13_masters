"use client";

import React, { useCallback, type ChangeEvent } from "react";
import {
	usePathname,
	useRouter,
	useSearchParams,
} from "next/navigation";
import { type Route } from "next";
import { type SingleProductColorVariantFragment } from "@/gql/graphql";

const SingleProductVariantItem = ({
	colorVariants,
}: {
	colorVariants: SingleProductColorVariantFragment[];
}) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams);
			params.set(name, value);

			return params.toString();
		},
		[searchParams],
	);

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		router.push(
			(pathname +
				"?" +
				createQueryString("variant", e.target.value)) as Route,
		);
	};

	return (
		<div className="flex gap-4">
			<label>Select a color</label>
			<select
				onChange={handleChange}
				className="border"
				name="color"
				id="colorVariant"
				value={searchParams.get("variant") || undefined}
			>
				<option value="default" disabled selected>
					Color
				</option>
				{colorVariants &&
					colorVariants.map((color, i) => (
						<option key={i} value={color?.name}>
							{color?.name}
						</option>
					))}
			</select>
		</div>
	);
};

export default SingleProductVariantItem;
