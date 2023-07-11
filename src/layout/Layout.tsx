import React, { Suspense } from 'react';
import Loading from '../components/Loading';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<Header />
				<main>{children}</main>
				<Footer />
			</Suspense>
		</>
	);
};

export default Layout;
