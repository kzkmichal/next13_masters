import React from "react";
import ProductCoverImage from "../atoms/ProductCoverImage";
import SingleProductVariantList from "./SingleProductVariantList";
import { type ProductListItemFragment } from "@/gql/graphql";

export type SingleProductTemplateProps = {
	product: ProductListItemFragment;
};

const SingleProductTemplate = ({
	product,
}: SingleProductTemplateProps) => {
	const { name, categories, price, images, description, id } =
		product;

	const image = images[0];
	return (
		<div className="flex flex-col gap-8">
			<div className="flex justify-center gap-4">
				{images.length && (
					<ProductCoverImage url={image?.url} alt={name} />
				)}
				<div className="flex flex-col gap-2">
					<h1 className="mb-4 text-3xl font-semibold">{name}</h1>
					<p className="mb-4 text-2xl">{price}</p>
					<p className="text-lg">{description}</p>
					{categories?.length && (
						<p className="text-lg">Category: {categories[0]?.name}</p>
					)}
					<SingleProductVariantList id={id} />
				</div>
			</div>
		</div>
	);
};

export default SingleProductTemplate;
