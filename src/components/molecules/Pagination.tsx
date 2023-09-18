import React from "react";
import ActiveLink from "../atoms/ActiveLink";

export type PaginationProps = {
	pageNumber: number;
};

const Pagination = ({ pageNumber }: PaginationProps) => {
	const limit = 200;
	const numberOfPages = Math.ceil(limit / 20);

	const pageNumbers = Array.from(
		{ length: numberOfPages },
		(_, i) => 1 + i,
	);

	return (
		<nav>
			<ul className="flex gap-4" aria-label="pagination">
				{pageNumber > 1 && (
					<li>
						<ActiveLink
							href={`/products/${pageNumber - 1}`}
							exact={true}
						>
							prev
						</ActiveLink>
					</li>
				)}
				{pageNumbers.map((item, i) => (
					<li key={i}>
						<ActiveLink
							href={`/products/${item}`}
							exact={false}
							{...(item === i + 1 && {
								activeClassName: "underline",
							})}
						>
							{item}
						</ActiveLink>
					</li>
				))}

				{pageNumber < numberOfPages && (
					<li>
						<ActiveLink
							href={`/products/${pageNumber + 1}`}
							exact={true}
						>
							next
						</ActiveLink>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Pagination;
