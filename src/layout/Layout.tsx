import React, { Suspense } from 'react';
import Loading from '../components/Loading';
import Header from './Header';
const Footer = React.lazy(() => import('./Footer'));

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<div className='outer-container'>
					<Header />
					<main>{children}</main>
					<Footer />
				</div>
			</Suspense>
		</>
	);
};

export default Layout;
