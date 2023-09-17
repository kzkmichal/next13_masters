export type ImageType = {
	width?: number;
	height?: number;
	src?: string;
	alt?: string;
};

export type ProductType = {
	id?: string;
	title?: string;
	category?: string;
	price?: number;
	description?: string;
	coverImage?: ImageType;
};

export type ProductResponseType = {
	id?: string;
	title?: string;
	price?: number;
	description?: string;
	category?: string;
	rating?: Rating;
	image?: string;
	longDescription?: string;
};

export type Rating = {
	rate?: number;
	count?: number;
};
