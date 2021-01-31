import Image from 'next/image';
import 'twin.macro';

export default function Main() {
  return (
    <div tw="container">
      <div tw="grid grid-flow-row md:grid-flow-col gap-6 lg:gap-10 justify-items-center">
        <div tw="my-auto">
          <Image tw="rounded-full" src="/images/me.jpg" alt="Christian" width={160} height={160} />
        </div>
        <div>
          <h2>Hej there, I&apos;m Christian!</h2>
          <p>
            In my career I worked as a consultant and developer across different industries so far and I have a general
            passion for web technologies. Having experience in both front-end and back-end development, I am motivated
            by the challenges of new technologies and have a keen interest to face and master these new challenges.
            Especially I am encouraged by agile methods and agile thinking and have also a love for simple, clean and
            usable user interfaces. For me, user experience design is a huge part in the development process which is
            why I put the user in the focus and try to built the solution around their needs.
          </p>
        </div>
      </div>
    </div>
  );
}
