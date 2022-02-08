import Banner from "../components/Banner";
import StoriesHero from "../components/StoriesHero";
import SinglePageText from "../sections/SinglePageText";

const SingleStoryPage = () => {
  return (
    <>
      <StoriesHero />
      <SinglePageText
        title='hazzy full moon of appalachia'
        author='John Appleseed'
        date='March 2nd 2020'
        text={[
          "The Appalachian Mountains occupy a towering spot in North American cultural identity. For many, the iconic mountain range calls to mind the extensive Appalachian Trail or the distinct dialect of Appalachian English, but the rugged peaks have been influencing the continent—and the world—for a lot longer than we’ve been around to appreciate them.Here are 11 things you might not know about the Appalachian Mountains.",
          "The Appalachian Mountains have been a fixture of the North American landscape for a long while, but exactly how old they are is a complicated question. Partly, that’s due to the fact that the range didn’t form all at once. Mountains in the Appalachian region have cropped up several times—only to erode back down again.",
          "Three hundred million years ago, the landmass that would become North America collided with something called Gondwana, a supercontinent made up of today’s Africa and South America. The result of the crash pushed Gondwana northward on top of North America, over which it slid for as far as roughly 186 miles (300 kilometers). A short 100 million years later, the two continents finally separated again, leaving the southern base of the Appalachians behind as a souvenir. Researchers at Brown University who studied the formation say the process probably looked a whole lot like the rise of the Himalayas."
        ]}
      />
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
        alt='Story Banner'
      />
    </>
  );
};

export default SingleStoryPage;
