import Link from "next/link";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { Lilita_One } from "next/font/google";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
	return (
		<header className='max-w-5xl mx-auto px-6'>
			<nav className='flex justify-between items-center h-20 w-full text-indigo-900 dark:text-emerald-100'>
				<Link href='/'>
					<div className={`${font.className} text-3xl`}>
						rahman
						<span className='text-purple-500'>Blog</span>
					</div>
				</Link>
				<ThemeSwitcher />
			</nav>
		</header>
	);
};

export default Navbar;
