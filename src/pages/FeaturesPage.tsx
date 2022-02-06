import React from "react";
import Feature from "../components/Feature";
import GenericList from "../components/GenericList";
import Section from "../components/Section";
import { features } from "../data/features";
const Features = React.lazy(() => import("../sections/Features"));
const Banner = React.lazy(() => import("../components/Banner"));

const FeaturesPage = () => {
  return (
    <>
      <Section
        heading='features'
        text='We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.'
        theme='dark'
        desktopWebp='../assets/features/desktop/hero.webp'
        desktopAvif='../assets/features/desktop/hero.avif'
        tabletWebp='../assets/features/tablet/hero.webp'
        tabletAvif='../assets/features/tablet/hero.avif'
        mobileAvif='../assets/features/mobile/hero.avif'
        mobileWebp='../assets/features/mobile/hero.webp'
        alt='Features Hero'
      />
      <Features>
        <GenericList
          items={features}
          renderItem={(feature) => (
            <Feature key={feature.id} feature={feature} />
          )}
        />
      </Features>
      <Banner
        title='We’re in beta.
Get your invite today!'
        btnText='get an invite'
        theme='dark'
        link='/pricing'
        desktopWebp='../assets/shared/desktop/bg-beta.webp'
        desktopAvif='../assets/shared/desktop/bg-beta.avif'
        tabletWebp='../assets/shared/tablet/bg-beta.webp'
        tabletAvif='../assets/shared/tablet/bg-beta.avif'
        mobileAvif='../assets/shared/mobile/bg-beta.avif'
        mobileWebp='../assets/shared/mobile/bg-beta.webp'
        alt='Features Banner'
      />
    </>
  );
};

export default FeaturesPage;
