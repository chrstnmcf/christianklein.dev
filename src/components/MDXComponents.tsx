/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link';
import Image from 'next/image';

const CustomLink = (props: any) => {
  const { href } = props;
  const isInternal = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternal) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noreferrer noopener" {...props} />;
};

const MDXComponents = {
  a: CustomLink,
  Image,
};

export default MDXComponents;
