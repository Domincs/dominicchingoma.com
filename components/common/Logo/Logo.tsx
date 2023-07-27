import { Link } from '@components/ui';
import Image from 'next/image';

export const Logo = ({ className = '' }) => (
  <Link
    href='/'
    className={`${className} font-heading transform text-3xl font-medium text-[#FFBE7A] hover:scale-95 hover:text-[#f98811] dark:text-[#FFBE7A]`}
  >
    <Image src='/images/logo.png' width={60} height={40} alt='logo' />
  </Link>
);
