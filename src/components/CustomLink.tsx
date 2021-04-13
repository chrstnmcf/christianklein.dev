/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
import Link from 'next/link';

interface Props {
  href: string;
  target?: string;
  className?: string;
}

const CustomLink = (props: React.PropsWithChildren<Props>) => {
  const { href } = props;
  const internal = href && (href.startsWith('/') || href.startsWith('#'));

  if (internal) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noreferrer noopener" {...props} />;
};

export default CustomLink;
