import Link from "next/link";
import React from "react";
import { BackIcon } from "./Icons";
import "../app/(client)/globals.css";
const StudioNav = () => {
	return (
		<header className=''>
			<nav className='flex justify-between items-center py-1 px-5'>
				<Link href='/'>
					<BackIcon />
				</Link>
				<Link href='/'>
					<div className={`text-3xl p-2`}>
						rahman
						<span className='text-purple-500'>Blog</span>
					</div>
				</Link>
			</nav>
		</header>
	);
};

export default StudioNav;
