import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';

const Layout = React.lazy(() => import('./layout/Layout'));
const NotFound = React.lazy(() => import('./pages/NotFoundPage'));
const Features = React.lazy(() => import('./pages/FeaturesPage'));
const Stories = React.lazy(() => import('./pages/StoriesPage'));
const SingleStoryPage = React.lazy(() => import('./pages/SingleStoryPage'));
const Home = React.lazy(() => import('./pages/HomePage'));
const Pricing = React.lazy(() => import('./pages/PricingPage'));

const App = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/stories' element={<Stories />} />
					<Route path='/stories/:id' element={<SingleStoryPage />} />
					<Route path='/features' element={<Features />} />
					<Route path='/pricing' element={<Pricing />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Layout>
		</Suspense>
	);
};

export default App;
