import { Link } from '@components/ui';
import Image from 'next/image';

export const Logo = ({ className = '' }) => (
  <Link
    href='/'
    className={`${className} font-heading transform text-3xl font-medium text-amber-500 0hover:scale-95 hover:text-[#f98811] dark:text-amber-500`}
  >
    <Image className='dark:grayscale dark:contrast-[3]' src='/images/logo-color.svg' width={60} height={40} alt='logo' />
  </Link>
);
