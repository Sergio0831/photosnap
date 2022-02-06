import React from "react";
import CompareTable from "../components/CompareTable";
import GenericList from "../components/GenericList";
import PricingCard from "../components/PricingCard";
import PricingCards from "../components/PricingCards";
import Switch from "../components/Switch";
import SwitchContainer from "../components/SwitchContainer";
import { pricingCards } from "../data/pricing-cards";

const Banner = React.lazy(() => import("../components/Banner"));
const Section = React.lazy(() => import("../components/Section"));
const Pricing = React.lazy(() => import("../sections/Pricing"));
const Compare = React.lazy(() => import("../sections/Compare"));

const PricingPage = () => {
  return (
    <>
      <Section
        heading='pricing'
        text='Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.'
        theme='dark'
        desktopWebp='../assets/pricing/desktop/hero.webp'
        desktopAvif='../assets/pricing/desktop/hero.avif'
        tabletWebp='../assets/pricing/tablet/hero.webp'
        tabletAvif='../assets/pricing/tablet/hero.avif'
        mobileAvif='../assets/pricing/mobile/hero.avif'
        mobileWebp='../assets/pricing/mobile/hero.webp'
        alt='Pricing Hero'
      />
      <Pricing>
        <SwitchContainer>
          <Switch />
        </SwitchContainer>
        <PricingCards>
          <GenericList
            items={pricingCards}
            renderItem={(card) => <PricingCard key={card.id} card={card} />}
          />
        </PricingCards>
      </Pricing>
      <Compare>
        <CompareTable />
      </Compare>
      <Banner
        title='We’re in beta.
        Get your invite today!'
        btnText='get an invite'
        theme='dark'
        link='/features'
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

export default PricingPage;
