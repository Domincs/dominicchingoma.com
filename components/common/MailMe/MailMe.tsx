import { Box, Link } from '@components/ui';

export const MailMe = ({ className = '' }) => (
  <Box className={className}>
    <span className='font-heading mr-2 text-sm uppercase opacity-75 2xl:text-xs'>
    </span>
    <Link
      className='font-heading border-b border-slate-500 text-sm uppercase hover:border-[#FFBE7A] dark:border-slate-200 dark:hover:border-[#FFBE7A] 2xl:text-xs'
      href='mailto:hello@josemukorivo.com'
    >
      hello@dominicchingoma.com
    </Link>
  </Box>
);
