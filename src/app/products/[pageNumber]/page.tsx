import React from "react";
import ProductList from "../../../components/organisms/ProductList";
import Pagination from "@/components/molecules/Pagination";
import { getProductList, getProductsByPage } from "@/api/products";

const constants = {
	productsPerPage: 4,
};

export type ProductsProps = {
	params: { pageNumber: string };
	searchParams?: { [key: string]: string | string[] };
};

export const generateStaticParams = async () => {
	const allProducts = await getProductList();

	const numberOfPages = Math.ceil(
		allProducts.length / constants.productsPerPage,
	);

	return Array.from({ length: numberOfPages }, (_, index) => ({
		pageNumber: `${index + 1}`,
	}));
};

const Products = async ({ params }: ProductsProps) => {
	const allProducts = await getProductList();
	const pageNumber = Number(params.pageNumber);
	const skipOffset = (pageNumber - 1) * constants.productsPerPage;

	const products = await getProductsByPage(
		constants.productsPerPage,
		skipOffset,
	);

	const numberOfPages = Math.ceil(
		allProducts.length / constants.productsPerPage,
	);

	return (
		<>
			<ProductList products={products} isRelated={false} />
			<Pagination
				pathName="products"
				numberOfPages={numberOfPages}
				pageNumber={pageNumber}
			/>
		</>
	);
};

export default Products;
