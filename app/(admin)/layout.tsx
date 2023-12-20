import type { Metadata } from "next";
import { Provider } from "@/utils/Provider";
import StudioNav from "@/components/StudioNav";


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
			<body>
				<Provider>
					<StudioNav />
					{children}
				</Provider>
			</body>
		</html>
	);
}
