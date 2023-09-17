import React from "react";
import { type Metadata } from "next";
import SingleProductTemplate from "@/components/molecules/SingleProductTemplate";
import { getProductById } from "@/api/products";
export type SingleProductPagesTypes = {
	params: { productId: string };
	searchParams?: { [key: string]: string | string[] };
};

export const generateMetadata = async ({
	params,
}: SingleProductPagesTypes): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	return {
		title: product.title,
		description: product.description,
	};
};

const SingleProductPage = async ({
	params,
} // searchParams,
: SingleProductPagesTypes) => {
	const product = await getProductById(params.productId);
	// const referral = searchParams?.referral.toString();

	return (
		<div>
			{product?.id}

			<SingleProductTemplate {...product} />
		</div>
	);
};

export default SingleProductPage;
