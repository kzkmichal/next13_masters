import React from "react";
import ProductList from "../../../components/organisms/ProductList";
import Pagination from "@/components/molecules/Pagination";
import {
	getProductListPagination,
	// getProducts,
} from "@/api/products";

export type ProductsProps = {
	params: { pageNumber: string };
	searchParams?: { [key: string]: string | string[] };
};

export const generateStaticParams = async () => {
	return Array.from({ length: 10 }, (_, index) => ({
		pageNumber: `${index + 1}`,
	}));
};

const Products = async ({ params }: ProductsProps) => {
	// const products = await getProducts();
	const products = await getProductListPagination(
		"20",
		params.pageNumber,
	);

	return (
		<>
			<ProductList products={products} />;
			<Pagination pageNumber={+params.pageNumber} />
		</>
	);
};

export default Products;
