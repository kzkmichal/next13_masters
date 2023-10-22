import React from "react";
import SingleProductVariantItem from "./SingleProductVariantItem";
import { getProductColorVariantById } from "@/api/products";
import { type SingleProductColorVariantFragment } from "@/gql/graphql";

const SingleProductVariantList = async ({ id }: { id: string }) => {
	const colorVariant = await getProductColorVariantById(id);

	const colorItems: SingleProductColorVariantFragment[] = [];

	colorVariant?.variants.forEach((variant) => {
		if (Object.keys(variant).length > 0) {
			colorItems.push(variant as SingleProductColorVariantFragment);
		}
	});

	return !!colorItems?.length ? (
		<SingleProductVariantItem colorVariants={colorItems} />
	) : null;
};

export default SingleProductVariantList;
