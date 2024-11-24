import Link from 'next/link';
// import Image from 'next/image';

//import Nordic_logo_square from '../../public/images/Nordic_logo_square.png';

const images = [
  '/images/business.jpg',
  '/images/lighting.jpg',
  '/images/Nordic_logo_square.png',
  '/images/inovative.jpg',
  '/images/micro.jpg',
  '/images/slogan.jpg',
];
import Cube from '../cube/Cube';

function Logo() {
  return (
    <Link href='/'>
      <Cube images={images} />
    </Link>
  );
}

export default Logo;
