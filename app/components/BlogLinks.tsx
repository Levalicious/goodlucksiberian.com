import { InternalLink } from "./InternalLink";

export const BlogLinks = () => {
  return (
    <>
      <InternalLink to="/news">News</InternalLink>
      <InternalLink to="/cats">Cats</InternalLink>
      <InternalLink to="/kittens">Kittens</InternalLink>
      <InternalLink to="/info">Info</InternalLink>
    </>
  );
};
