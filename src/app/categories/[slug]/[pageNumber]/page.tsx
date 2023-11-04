import React from "react";
import { notFound } from "next/navigation";
import { type Metadata } from "next";
import ProductList from "@/components/organisms/ProductList";
import Pagination from "@/components/molecules/Pagination";
import { getProductsByCategorySlug } from "@/api/products";

const constants = {
	productsPerPage: 4,
};

export type CategoryProps = {
	params: { slug: string; pageNumber: string };
};

export const generateMetadata = async ({
	params,
}: CategoryProps): Promise<Metadata> => {
	return {
		title: params.slug,
	};
};

const CategoryProductPage = async ({ params }: CategoryProps) => {
	const allCategoryProducts = await getProductsByCategorySlug(
		params.slug,
	);

	if (!allCategoryProducts) {
		throw notFound();
	}

	const numberOfPages = Math.ceil(
		allCategoryProducts.length / constants.productsPerPage,
	);
	return (
		<>
			<h2>{params.slug}</h2>
			<ProductList products={allCategoryProducts} />;
			<Pagination
				pathName={"categories"}
				numberOfPages={numberOfPages}
				pageNumber={+params.pageNumber}
			/>
		</>
	);
};

export default CategoryProductPage;
