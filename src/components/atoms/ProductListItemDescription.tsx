import React from "react";

export type CategoryType = {
	slug: string;
	name: string;
};
export type CollectionType = {
	slug: string;
	name: string;
};

export type ProductListItemDescriptionProps = {
	name?: string;
	categories?: CategoryType[];
	price?: number;
	rating?: string;
	collections?: CollectionType[];
};

const ProductListItemDescription = ({
	name,
	categories,
	price,
	rating,
	collections,
}: ProductListItemDescriptionProps) => {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex justify-between gap-2">
				<h1 className="text-xl">{name}</h1>
				<p className="text-xl">{price}</p>
			</div>
			<div className="flex justify-between">
				{categories?.length && (
					<p className="text-lg">{categories[0]?.name}</p>
				)}
				{collections?.length && (
					<p className="text-lg">{collections[0]?.name}</p>
				)}
				{rating && <p>{rating}</p>}
			</div>
		</div>
	);
};

export default ProductListItemDescription;
