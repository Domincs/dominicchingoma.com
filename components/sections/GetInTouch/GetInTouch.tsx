import { Box, Container, Text } from '@components/ui';
import { Calendy } from '@components/common';
import { ButtonLink } from '@components/ui/Button/Button';

export const GetInTouch = () => (
  <Box className='mb-10 bg-slate-50  py-12 text-center dark:bg-[#0d1424]'>
    <Container>
      <Text as='h2' className='mb-4' fontSize='4xl' align='center'>
        Get in touch
      </Text>
      <Text className='mx-auto mb-5 max-w-md opacity-75' align='center'>
        You have a cool project that you want to discuss or a tech article you
        want written? I&lsquo;d love to hear from you.
      </Text>
      <Box className='flex items-center justify-center gap-5'>
        <ButtonLink href='mailto:hello@josemukorivo.com' variant="primary" size='medium'>
          Send me an email
        </ButtonLink>
        <Calendy>Schedule a meeting</Calendy>
      </Box>
    </Container>
  </Box>
);
