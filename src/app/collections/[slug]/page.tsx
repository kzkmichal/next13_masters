import React from "react";
import { notFound } from "next/navigation";
import { getProductsByCollectionSlug } from "@/api/products";
import ProductList from "@/components/organisms/ProductList";

export type CollectionProps = {
	params: { slug: string; pageNumber: string };
};

const CollectionPage = async ({ params }: CollectionProps) => {
	const products = await getProductsByCollectionSlug(params.slug);
	if (!products?.length) {
		throw notFound();
	}

	return (
		<div>
			<ProductList products={products} />
		</div>
	);
};

export default CollectionPage;
