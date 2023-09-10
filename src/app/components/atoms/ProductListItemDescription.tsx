import React from "react";

export type ProductListItemDescriptionProps = {
	title?: string;
	category?: string;
	price?: number;
	rating?: string;
};

const ProductListItemDescription = ({
	title,
	category,
	price,
	rating,
}: ProductListItemDescriptionProps) => {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex justify-between gap-2">
				<h3 className="text-xl">{title}</h3>
				<p className="text-xl">{price}</p>
			</div>
			<div className="flex justify-between">
				<p className="text-lg">{category}</p>
				{rating && <p>{rating}</p>}
			</div>
		</div>
	);
};

export default ProductListItemDescription;
