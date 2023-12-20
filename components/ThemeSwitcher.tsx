"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	// // useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div>
			<button
				className='border border-purple-500 rounded-full p-1 hover:bg-purple-400 hover:bg-opacity-10 dark:hover:bg-opacity-10 dark:hover:bg-emerald-200'
				onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			>
				{theme === "dark" ? <SunIcon /> : <MoonIcon />}
			</button>
		</div>
	);
};

export default ThemeSwitcher;
