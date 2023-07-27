import { Container, Text, Link } from '@components/ui';

export const Copyright = () => (
  <Container className='flex flex-col justify-between border-t border-slate-300 py-5 dark:border-slate-700 md:flex-row'>
    <Text fontSize='xs'>
      All rights reserved © Dominic Chingoma {new Date().getFullYear()}
    </Text>
    <Text fontSize='xs' className='text-right'>
      Credit &nbsp;
      <Link
        href='https://josemukorivo.com'
        className='font-medium text-[#FFBE7A] hover:text-[#f98811] dark:text-[#FFBE7A]'
      >
        Joseph Mukorivo
      </Link>
      .
    </Text>
  </Container>
);
