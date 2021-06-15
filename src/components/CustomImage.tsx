/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-props-no-spreading */
import Image, { ImageProps } from 'next/image';

export default function CustomImage(props: ImageProps) {
  return (
    <div tw="flex relative justify-center">
      <Image {...props} />
    </div>
  );
}
