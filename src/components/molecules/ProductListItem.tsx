import React from "react";
import Link from "next/link";
import ProductCoverImage from "../atoms/ProductCoverImage";
import ProductListItemDescription from "../atoms/ProductListItemDescription";
import { type ProductType } from "@/app/types/types";

export type ProductListItemProps = ProductType;

const ProductListItem = ({
	title,
	category,
	price,
	coverImage,
	id,
}: ProductListItemProps) => {
	const productProps = {
		title,
		category,
		price,
		id,
	};
	return (
		<li>
			<Link href={`/product/${id}`}>
				<article className="flex cursor-pointer flex-col gap-4">
					<ProductCoverImage {...coverImage} />
					<ProductListItemDescription {...productProps} />
				</article>
			</Link>
		</li>
	);
};

export default ProductListItem;
