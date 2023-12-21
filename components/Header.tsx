import Link from "next/link";
import React from "react";

type HeaderProps = { title: string; tags?: boolean };

const Header = ({ title = "", tags = false }: HeaderProps) => {
	return (
		<header className='py-14 px-8 mb-10 text-center border-b dark:border-purple-500'>
			<h2 className='uppercase mx-auto max-w-2xl text-2xl font-bold '>
				{title}
			</h2>
			{tags && (
				<div className='text-xs mt-2 hover:text-purple-500'>
					<Link href='/tag'>#tags</Link>
				</div>
			)}
		</header>
	);
};

export default Header;
