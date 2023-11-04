import React from "react";
import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { getProductsByCollectionSlug } from "@/api/products";
import ProductList from "@/components/organisms/ProductList";
import { getCollectionNameBySlug } from "@/api/collections";

export type CollectionProps = {
	params: { slug: string; pageNumber: string };
};

export const generateMetadata = async ({
	params,
}: CollectionProps): Promise<Metadata> => {
	const collectionName = await getCollectionNameBySlug(params.slug);

	return {
		title: collectionName,
	};
};

const CollectionPage = async ({ params }: CollectionProps) => {
	const products = await getProductsByCollectionSlug(params.slug);

	const collectionName = await getCollectionNameBySlug(params.slug);

	if (!products?.length) {
		throw notFound();
	}
	return (
		<div>
			<h2>{collectionName}</h2>
			<ProductList products={products} />
		</div>
	);
};

export default CollectionPage;
