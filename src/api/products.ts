import {
	type ProductType,
	type ProductResponseType,
} from "@/app/types/types";
const link = "https://naszsklep-api.vercel.app/api/products";

const productResToProduct: (
	res: ProductResponseType,
) => ProductType = (res) => {
	return {
		id: res?.id,
		title: res.title,
		category: res.category,
		price: res.price,
		description: res.description,
		coverImage: {
			src: res.image,
			alt: res.title,
		},
	};
};

export const getProducts = async () => {
	const res = await fetch(`${link}?take=20`);
	const productsRes = (await res.json()) as ProductResponseType[];

	const products = productsRes.map(
		(item): ProductType => ({
			id: item?.id,
			title: item.title,
			category: item.category,
			price: item.price,
			description: item.description,
			coverImage: {
				src: item.image,
				alt: item.title,
			},
		}),
	);

	return products;
};

export const getProductById = async (
	id: ProductResponseType["id"],
) => {
	const res = await fetch(`${link}/${id}`);

	const productRes = (await res.json()) as ProductResponseType;

	// const products = productsRes.map(
	// 	(item): ProductType => ({
	// 		id: item?.id,
	// 		title: item.title,
	// 		category: item.category,
	// 		price: item.price,
	// 		coverImage: {
	// 			src: item.image,
	// 			alt: item.title,
	// 		},
	// 	}),
	// );

	const product = productResToProduct(productRes);

	return product;
};

export const getProductListPagination = async (
	take: string,
	offset: string,
) => {
	const res = await fetch(
		`${link}?take=${take || 20}&offset=${offset}`,
	);
	const productsRes = (await res.json()) as ProductResponseType[];

	const products = productsRes.map(
		(item): ProductType => ({
			id: item?.id,
			title: item.title,
			category: item.category,
			price: item.price,
			description: item.description,
			coverImage: {
				src: item.image,
				alt: item.title,
			},
		}),
	);

	return products;
};
