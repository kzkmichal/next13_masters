import { executeGraphql } from "./grapqlApi";
import {
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
	ProductsGetByCollectionSlugDocument,
	ProductGetColorVariantsByIdDocument,
	GetProductsByPageDocument,
	type ProductListItemFragment,
	type GetProductsByPageQueryVariables,
	type ProductsGetBySearchQueryVariables,
	ProductsGetBySearchDocument,
} from "@/gql/graphql";

export const PER_PAGE = 8;

export const getProductById = async (
	id: ProductListItemFragment["id"],
) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id },
		next: {
			revalidate: 1,
		},
	});

	return graphqlResponse.product;
};

export const getProductList = async () => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {},
		next: {
			revalidate: 15,
		},
	});

	return graphqlResponse.products;
};

export const getProductListBySearch = async (
	query: ProductsGetBySearchQueryVariables["query"],
) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetBySearchDocument,
		variables: { query },
		// next: {
		// 	revalidate: 15,
		// },
	});

	return graphqlResponse.products;
};

export const getProductsByPage = async (
	productsCount: GetProductsByPageQueryVariables["productsCount"],
	skip: GetProductsByPageQueryVariables["skip"],
) => {
	const graphqlResponse = await executeGraphql({
		query: GetProductsByPageDocument,
		variables: { productsCount, skip },
		// next: {
		// 	revalidate: 15,
		// },
	});

	return graphqlResponse.products;
};

export const getProductsByCategorySlug = async (
	categorySlug: string,
) => {
	const data = await executeGraphql({
		query: ProductsGetByCategorySlugDocument,
		variables: { slug: categorySlug },
	});

	return data.categories[0]?.products;
};

export const getProductsByCollectionSlug = async (
	collectionSlug: string,
) => {
	const data = await executeGraphql({
		query: ProductsGetByCollectionSlugDocument,
		variables: { slug: collectionSlug },
	});

	return data.collections[0]?.products;
};

export const getProductColorVariantById = async (id: string) => {
	const data = await executeGraphql({
		query: ProductGetColorVariantsByIdDocument,
		variables: { id: id },
	});

	return data.product;
};
