import React from "react";
import { type Route } from "next";
import ActiveLink from "../atoms/ActiveLink";

export type PaginationProps = {
	pageNumber: number;
	pathName: string;
	numberOfPages?: number;
};

const Pagination = ({
	pageNumber,
	pathName,
	numberOfPages = 0,
}: PaginationProps) => {
	const pageNumbers = Array.from(
		{ length: numberOfPages },
		(_, i) => 1 + i,
	);

	return (
		<nav className="mt-4">
			<ul className="flex gap-4" aria-label="pagination">
				{pageNumber > 1 && (
					<li>
						<ActiveLink
							href={`/${pathName}/${pageNumber - 1}` as Route}
							exact={true}
						>
							prev
						</ActiveLink>
					</li>
				)}
				{pageNumbers.map((item, i) => (
					<li key={i}>
						<ActiveLink
							href={`/${pathName}/${item}` as Route}
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
							href={`/${pathName}/${pageNumber + 1}` as Route}
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
