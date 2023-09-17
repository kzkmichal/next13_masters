import React from "react";
import ProductCoverImage from "../atoms/ProductCoverImage";
import ProductListItemDescription from "../atoms/ProductListItemDescription";
import { type ProductType } from "@/app/types/types";

export type SingleProductTemplateProps = ProductType;

const SingleProductTemplate = ({
	title,
	category,
	price,
	id,
	coverImage,
}: SingleProductTemplateProps) => {
	const productProps = {
		title,
		category,
		price,
		id,
	};
	return (
		<div>
			<ProductCoverImage {...coverImage} />
			<ProductListItemDescription {...productProps} />
		</div>
	);
};

export default SingleProductTemplate;
