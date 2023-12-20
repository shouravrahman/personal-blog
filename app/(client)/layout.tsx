import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Provider } from "@/utils/Provider";

// const inter = Inter({ subsets: ["latin"] });
const fira = Fira_Code({ subsets: ["latin"] });
export const metadata: Metadata = {
	title: "rahman-dev blog",
	description: "Personal coding blog",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${fira.className} h-[100vh] bg-emerald-100 text-indigo-700 dark:bg-slate-900 dark:text-emerald-100`}
			>
				<Provider>
					<Navbar />
					<main className={`mx-auto max-w-5xl px-6 `}>{children}</main>
				</Provider>
			</body>
		</html>
	);
}
