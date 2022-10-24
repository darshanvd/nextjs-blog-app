import Head from "next/head";
import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Darshan blog</title>
        <meta name="description" content="I post about programming" />
      </Head>
      <Hero></Hero>
      <FeaturedPosts posts={props.posts}></FeaturedPosts>
    </Fragment>
  );
}
export function getStaticProps() {
  const featuredPost = getFeaturedPosts();
  return {
    props: {
      posts: featuredPost,
    },
    revalidate: 60,
  };
}

export default Home;
