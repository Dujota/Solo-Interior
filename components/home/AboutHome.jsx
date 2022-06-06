import Link from 'next/link';

export default function AboutHome() {
  return (
    <section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Et molestie ac feugiat sed lectus vestibulum mattis. At risus viverra adipiscing at in. Volutpat
        diam ut venenatis tellus. Et pharetra pharetra massa massa ultricies mi. Imperdiet nulla malesuada pellentesque
        elit. Massa placerat duis ultricies lacus sed turpis tincidunt. A erat nam at lectus urna duis. Volutpat lacus
        laoreet non curabitur. Maecenas ultricies mi eget mauris pharetra et ultrices neque. Mauris rhoncus aenean vel
        elit scelerisque mauris pellentesque pulvinar pellentesque. Aliquam ut porttitor leo a diam sollicitudin tempor.
        Maecenas volutpat blandit aliquam etiam erat. Cursus mattis molestie a iaculis at erat pellentesque.
        Pellentesque eu tincidunt tortor aliquam. Purus in mollis nunc sed id semper. Massa placerat duis ultricies
        lacus sed turpis tincidunt. Mauris pharetra et ultrices neque ornare aenean. Massa id neque aliquam vestibulum
        morbi. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Euismod nisi porta lorem mollis. Donec
        pretium vulputate sapien nec sagittis aliquam malesuada. Eu facilisis sed odio morbi quis. Dolor sed viverra
        ipsum nunc aliquet. Augue eget arcu dictum varius. Tincidunt nunc pulvinar sapien et ligula ullamcorper
        malesuada proin libero. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Venenatis cras sed
        felis eget. Ornare massa eget egestas purus. Volutpat maecenas volutpat blandit aliquam etiam erat velit
        scelerisque. In vitae turpis massa sed elementum. At volutpat diam ut venenatis. Sed vulputate mi sit amet
        mauris. Eleifend donec pretium vulputate sapien nec sagittis.
      </p>

      <Link href="/about">
        <a className="hover:underline">About Us</a>
      </Link>
    </section>
  );
}
