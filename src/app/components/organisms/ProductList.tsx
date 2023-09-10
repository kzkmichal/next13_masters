import React from "react";
import ProductListItem from "../molecules/ProductListItem";
import { type ProductType } from "@/app/types/types";

const ProductList = ({ products }: { products: ProductType[] }) => {
	return (
		<ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			{products?.map((item, index) => (
				<ProductListItem key={index} {...item} />
			))}
		</ul>
	);
};

export default ProductList;
