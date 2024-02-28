import { InternalLink } from "./InternalLink";

export const BlogLinks = () => {
  return (
    <>
      <InternalLink to="/news">News</InternalLink>
      <InternalLink to="/tags">Tags</InternalLink>
      <InternalLink to="/about">About</InternalLink>
    </>
  );
};
