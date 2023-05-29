import Main from "../../components/main";
import History from "../../components/history";
import SliderSection from "../../components/sliderSection";
import Contact from "../../components/contactUs";

const MainIndex = () => {
  return (
    <>
      <Main />
      <History />
      <SliderSection />
      <Contact />
      {/* <Intro />
    {heroPost && (
      <HeroPost
        title={heroPost.data.title}
        href={heroPost.url}
        coverImage={heroPost.data.cover_image}
        date={heroPost.data.date}
        author={heroPost.data.author}
        excerpt={heroPost.data.excerpt}
      />
    )}
    {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
    </>
  );
};

export default MainIndex;
