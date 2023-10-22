"use client";

import { type ChangeEvent, useEffect, useState } from "react";
import { type Route } from "next";
import { useRouter } from "next/navigation";

const Search = () => {
	const [params, setParams] = useState("");
	const [typingTimeout, setTypingTimeout] = useState<
		number | undefined
	>(undefined);

	const router = useRouter();

	const setSearchParams = () => {
		if (params) {
			router.push(`/search?query=${params}` as Route);
			setParams("");
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const query = event.target.value;
		setParams(query);

		if (typingTimeout) {
			clearTimeout(typingTimeout);
		}

		const newTypingTimeout = window.setTimeout(() => {
			setSearchParams();
			console.log(params);
		}, 500);
		setTypingTimeout(newTypingTimeout);
	};

	useEffect(() => {
		return () => {
			if (typingTimeout) {
				clearTimeout(typingTimeout);
			}
		};
	}, [params, typingTimeout]);

	return (
		<div className="flex rounded-md border border-blue-500 p-1">
			<input
				type="text"
				placeholder="Search"
				className="input bg-base-200 w-full rounded-none text-sm outline-none focus:border-slate-950 focus:border-opacity-100 focus:outline-none"
				value={params}
				onChange={handleChange}
			/>
		</div>
	);
};

export default Search;
