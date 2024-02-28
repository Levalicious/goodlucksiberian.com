import { InternalLink } from "./InternalLink";

export const BlogLinks = () => {
  return (
    <>
      <InternalLink to="/news">News</InternalLink>
      <InternalLink to="/cats">My Cats</InternalLink>
      <InternalLink to="/tags">Tags</InternalLink>
      <InternalLink to="/about">About</InternalLink>
    </>
  );
};
