import { executeGraphql } from "./grapqlApi";
import { CollectionGetBySlugDocument } from "@/gql/graphql";

export const getCollectionNameBySlug = async (slug: string) => {
	const data = await executeGraphql({
		query: CollectionGetBySlugDocument,
		variables: { slug },
	});

	return data.collections[0]?.name;
};
