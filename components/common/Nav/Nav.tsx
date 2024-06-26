import { FC, useState } from 'react';
import { Container, Box, Link } from '@components/ui';
import { Menu } from '@components/common';
import { MailMe, MenuButton } from '..';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { Logo } from '../Logo/Logo';
import { AnimatePresence } from 'framer-motion';
import { DarkModeToggle } from '@components/ui/DarkModeToggle/DarkModeToggle';

interface Props {
  variant?: 'main' | 'blog';
  className?: string;
}

export const Nav: FC<Props> = ({ className = '', variant = 'main' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onOpen = () => setIsMenuOpen(true);
  const onClose = () => setIsMenuOpen(false);
  return (
    <>
      {variant === 'main' && (
        <nav
          className={`right-0 top-0 left-0 z-10 dark:border-slate-800 md:left-[81px] 2xl:left-20 ${className}`}
        >
          <Container className='flex items-center justify-between'>
            <MailMe className='hidden md:block' />
            <Logo className='md:hidden' />
            <Box className="flex gap-5">
              <DarkModeToggle />
              <MenuButton onOpen={onOpen} />
            </Box>
          </Container>
        </nav>
      )}
      {variant === 'blog' && (
        <Box className='sticky top-0 z-10 border-b bg-white backdrop-blur backdrop-filter dark:border-slate-700 dark:bg-slate-900 md:bg-opacity-80 md:dark:bg-opacity-90'>
          <Container className='flex items-center justify-between py-3'>
            <Logo className='md:hidden' />
            <Link
              href='/blog'
              className='font-heading relative -left-1 hidden items-center text-xs uppercase hover:text-amber-500 md:flex'
            >
              <MdOutlineKeyboardArrowLeft className='mr-1 h-4 w-auto' /> back to
              blog
            </Link>
            <Box className="flex gap-5">
              <DarkModeToggle />
              <MenuButton onOpen={onOpen} />
            </Box>
          </Container>
        </Box>
      )}
      <AnimatePresence>
        {isMenuOpen && <Menu onClose={onClose} />}
      </AnimatePresence>
    </>
  );
};
