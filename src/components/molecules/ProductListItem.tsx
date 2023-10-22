import React from "react";
import Link from "next/link";
import ProductCoverImage from "../atoms/ProductCoverImage";
import ProductListItemDescription from "../atoms/ProductListItemDescription";
import { type ProductListItemFragment } from "@/gql/graphql";

export type ProductListItemProps = {
	product: ProductListItemFragment;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
	const { name, categories, price, id, collections } = product;

	const productProps = {
		name,
		categories,
		price,
		id,
		collections,
	};

	const image = product.images[0];
	return (
		<li>
			<Link href={`/product/${id}`}>
				<article className="flex cursor-pointer flex-col gap-4">
					{product.images.length && (
						<ProductCoverImage url={image?.url} alt={name} />
					)}
					<ProductListItemDescription {...productProps} />
				</article>
			</Link>
		</li>
	);
};

export default ProductListItem;
