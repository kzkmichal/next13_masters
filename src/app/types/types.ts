export type ImageType = {
	width?: number;
	height?: number;
	src?: string;
	alt?: string;
};

export type ProductType = {
	id?: number;
	title?: string;
	category?: string;
	price?: number;
	coverImage?: ImageType;
};
