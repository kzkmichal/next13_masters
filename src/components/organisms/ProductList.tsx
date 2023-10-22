import React from "react";
import ProductListItem from "../molecules/ProductListItem";
import { type ProductListItemFragment } from "@/gql/graphql";

const ProductList = ({
	products,
	isRelated = false,
}: {
	products: ProductListItemFragment[];
	isRelated?: boolean;
}) => {
	return (
		<ul
			data-testid={isRelated ? "related-products" : "products-list"}
			className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
		>
			{products?.map((product, index) => (
				<ProductListItem key={index} product={product} />
			))}
		</ul>
	);
};

export default ProductList;
