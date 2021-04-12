import Image from 'next/image';
import config from '@/config';

export default function Main() {
  const { email } = config;

  return (
    <div tw="grid grid-flow-row md:grid-flow-col gap-6 lg:gap-10 justify-items-center">
      <div tw="my-auto">
        <Image
          tw="rounded-full animate-appear"
          src="/images/me.jpg"
          alt="Christian"
          width={160}
          height={160}
          priority
        />
      </div>
      <div>
        <h2>Hej there, I&apos;m Christian!</h2>
        <p>
          I am a consultant and software developer with a passion for web technologies. In my career I worked across
          different industries so far and having both experience in front-end and back-end development, I like the
          challenges of new technologies. I am especially encouraged by agile methods and an agile mindset and also have
          a love for simple, clean and well-designed user interfaces. For me user experience design is one of the most
          important parts in the development process which is why I put the user in the focus and try to get a better
          and deeper understanding of their needs first. You want to know more?{' '}
          <a href={`mailto:${email}`} tw="font-semibold">
            Get in touch with me!
          </a>
        </p>
      </div>
    </div>
  );
}
