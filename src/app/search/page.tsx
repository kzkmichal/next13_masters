import React from "react";
import { getProductListBySearch } from "@/api/products";
import ProductList from "@/components/organisms/ProductList";

type SearchPageParams = {
	searchParams: {
		query: string;
	};
};

const SearchPage = async ({
	searchParams: { query },
}: SearchPageParams) => {
	const products = await getProductListBySearch(query);

	if (!products.length) {
		return <p>no products found</p>;
	}

	return (
		<div>
			<ProductList products={products} />
		</div>
	);
};

export default SearchPage;
