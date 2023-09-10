import ProductList from "./components/organisms/ProductList";
import { type ProductType } from "./types/types";

export default function Home() {
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

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ProductList products={products} data-testid="products-list" />
		</main>
	);
}
