import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillMail,
} from 'react-icons/ai';

import { Box, Link, Text } from '@components/ui';
import s from './SideBar.module.scss';
import { Logo } from '../Logo/Logo';

export const SideBar = () => {
  const links = [
    {
      href: 'https://github.com/josemukorivo',
      Icon: AiFillGithub,
      title: 'Github',
    },
    {
      href: 'https://twitter.com/josemukorivo',
      Icon: AiFillTwitterCircle,
      title: 'Twitter',
    },
    {
      href: 'https://www.linkedin.com/in/dominic-chingoma/',
      Icon: AiFillLinkedin,
      title: 'Linkedin',
    },
    {
      href: 'mailto:hello@dominicchingoma.com',
      Icon: AiFillMail,
      title: 'Email',
    },
  ];

  return (
    <Box className={s.root}>
      <Box className={s.main}>
        <Logo />
        <Box className={s.bar}>
          <Text as='h5' casing='uppercase' className='font-heading mb-1'>
            Software Engineer
          </Text>
          <Text
            casing='uppercase'
            fontSize='xs'
            className='text-slate-500 dark:text-slate-400'
          >
            Software Engineer, Software Architect, DevOps
          </Text>
        </Box>

        <Box>
          {links.map(({ href, Icon, title }) => (
            <Link
              key={href}
              href={href}
              target='_blank'
              className='mb-5 block dark:hover:text-amber-500'
            >
              <Icon className={s.icon} />
              <span className='sr-only'>Connect with Dominic on {title}</span>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
