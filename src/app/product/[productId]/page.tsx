import React from "react";
import { notFound } from "next/navigation";
import { type Metadata } from "next";
import SingleProductTemplate from "@/components/molecules/SingleProductTemplate";
import {
	getProductById,
	getProductsByCollectionSlug,
} from "@/api/products";
import ProductList from "@/components/organisms/ProductList";
export type SingleProductPagesTypes = {
	params: { productId: string };
};

export const generateMetadata = async ({
	params,
}: SingleProductPagesTypes): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	return {
		title: product?.name,
		description: product?.description,
	};
};

const SingleProductPage = async ({
	params,
}: SingleProductPagesTypes) => {
	const product = await getProductById(params.productId);

	const collectionSlug = product?.collections[0]?.slug;

	const relatedProducts = collectionSlug
		? await getProductsByCollectionSlug(collectionSlug)
		: undefined;

	if (!product) {
		throw notFound();
	}
	return (
		<div className="flex flex-col gap-8">
			<SingleProductTemplate product={product} />
			{relatedProducts && (
				<div className="flex flex-col gap-4 ">
					<h3 className="text-center text-2xl"> Related products</h3>
					<ProductList
						products={relatedProducts.slice(0, 4)}
						isRelated={true}
					/>
				</div>
			)}
		</div>
	);
};

export default SingleProductPage;
