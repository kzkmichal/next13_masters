import React from "react";
import ProductList from "../../components/organisms/ProductList";
import { type ProductType } from "@/app/types/types";

const products: ProductType[] = [
	{
		id: 1,
		title: "Men's Casual Shirt",
		category: "Clothing",
		price: 29.99,
		coverImage: {
			src: "/images/men_shirt.png",
			alt: "men shirt",
		},
	},
	{
		id: 2,
		title: "Women's Summer Dress",
		category: "Clothing",
		price: 39.99,
		coverImage: {
			src: "/images/women_dress.png",
			alt: " women dress",
		},
	},
	{
		id: 3,
		title: "Men's Jeans",
		category: "Clothing",
		price: 49.99,
		coverImage: {
			src: "/images/men_pants.png",
			alt: " men pants",
		},
	},
	{
		id: 4,
		title: "Women's Running Shoes",
		category: "Footwear",
		price: 59.99,
	},
];

const Products = () => {
	return (
		<ProductList products={products} data-testid="products-list" />
	);
};

export default Products;
