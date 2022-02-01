import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import Layout from "./layout/Layout";
const NotFound = React.lazy(() => import("./pages/NotFoundPage"));
const Features = React.lazy(() => import("./pages/FeaturesPage"));
const Stories = React.lazy(() => import("./pages/StoriesPage"));
const Home = React.lazy(() => import("./pages/HomePage"));
const Pricing = React.lazy(() => import("./pages/PricingPage"));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/features' element={<Features />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
