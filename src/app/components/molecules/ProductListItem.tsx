import React from "react";
import ProductCoverImage from "../atoms/ProductCoverImage";
import ProductListItemDescription from "../atoms/ProductListItemDescription";
import { type ProductType } from "@/app/types/types";

export type ProductListItemProps = ProductType;

const ProductListItem = ({
	title,
	category,
	price,
	coverImage,
}: ProductListItemProps) => {
	const productProps = {
		title,
		category,
		price,
	};
	return (
		<li>
			<article className="flex cursor-pointer flex-col gap-4">
				<ProductCoverImage {...coverImage} />
				<ProductListItemDescription {...productProps} />
			</article>
		</li>
	);
};

export default ProductListItem;
