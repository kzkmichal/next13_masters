import React from "react";
import { notFound } from "next/navigation";
import ProductList from "@/components/organisms/ProductList";
import Pagination from "@/components/molecules/Pagination";
import { getProductsByCategorySlug } from "@/api/products";

export type CategoryProps = {
	params: { slug: string; pageNumber: string };
};

const CategoryProductPage = async ({ params }: CategoryProps) => {
	const products = await getProductsByCategorySlug(params.slug);

	if (!products) {
		throw notFound();
	}
	return (
		<>
			<ProductList products={products} />;
			<Pagination
				pathName={"categories"}
				pageNumber={+params.pageNumber}
			/>
		</>
	);
};

export default CategoryProductPage;
