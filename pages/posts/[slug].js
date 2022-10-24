import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";

function PostDetailPage(props) {
  const { post } = props;
  return (
    <Fragment>
      <Head>
        <title>{post?.title}</title>
        <meta name="description" content={post?.excerpt} />
      </Head>
      {post && <PostContent post={post} />}
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postsFileNames = getPostsFiles();
  const slugs = postsFileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: true,
  };
}

export default PostDetailPage;
