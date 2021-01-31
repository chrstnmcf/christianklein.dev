import 'twin.macro';
import Excerpt from './Excerpt';

export default function Overview() {
  return (
    <div tw="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-5 xl:gap-x-8 mt-20">
      <Excerpt />
      <Excerpt />
      <Excerpt />
      <Excerpt />
      <Excerpt />
    </div>
  );
}
