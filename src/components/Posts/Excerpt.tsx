import 'twin.macro';

export default function Excerpt() {
  return (
    <div tw="flex flex-col bg-gray-100 dark:bg-gray-700 rounded-2xl py-5 px-5 shadow-sm">
      <h4>This is an excerpt</h4>
      <div tw="text-xs text-gray-400 dark:text-gray-500">31. Januar 2021</div>
      <p tw="line-clamp-3 text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt, velit assumenda sequi at, debitis
        eius voluptatem dolore provident voluptatum delectus in nulla iure iste optio eos vero excepturi magni aliquid
        rem voluptate quo? Magnam quis, magni repudiandae quisquam veritatis, quibusdam natus blanditiis placeat totam
        in et quaerat deleniti repellendus id optio voluptas quos. Accusamus ab fugit modi consequatur iste corrupti
        quibusdam expedita distinctio quasi recusandae? Asperiores obcaecati perferendis assumenda, eius incidunt
        perspiciatis ipsam corporis cumque distinctio voluptas reprehenderit illum?
      </p>
    </div>
  );
}
