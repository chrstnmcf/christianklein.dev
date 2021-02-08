/* eslint-disable react/jsx-props-no-spreading */
import Link from 'next/link';

interface Props {
  href: string;
  target?: string;
}

const CustomLink = (props: React.PropsWithChildren<Props>) => {
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

export default CustomLink;
