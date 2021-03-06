import Image from 'next/image';
import PropTypes from 'prop-types';
import { urlForImage } from 'lib/sanity';

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <Image
          src={urlForImage(picture).height(96).width(96).fit('crop').url()}
          layout="fill"
          placeholder="blur"
          blurDataURL="/public/blur.png"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}

Avatar.propTypes = { name: PropTypes.string, picture: PropTypes.string };
