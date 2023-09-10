import Image from "next/image";
import React from "react";
import { type ImageType } from "@/app/types/types";

export type ProductCoverImageProps = ImageType;

const ProductCoverImage = ({
	width = 360,
	height = 360,
	src,
	alt = "",
}: ProductCoverImageProps) => {
	const imageProps = {
		width,
		height,
	};

	return (
		<div className=" aspect-square overflow-hidden rounded-md">
			<Image
				alt={alt}
				src={src || "/images/hanger.png"}
				{...imageProps}
				className=" h-full w-full object-cover object-center transition duration-300 hover:scale-110"
			/>
		</div>
	);
};

export default ProductCoverImage;
