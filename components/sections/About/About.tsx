import Image from 'next/image';
import { Text, Box, Container, Link } from '@components/ui';
import { motion } from 'framer-motion';
import { Button } from '@components/ui';
import { BiDownload } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { ArrowLink } from '@components/ui/ArrowButton';

export const About = () => {
  return (
    <Container id='about' className='mb-20 w-full grid gap-10 md:mb-40 md:grid-cols-3'>
      <Box className='md:col-span-1'>
        <Text as='h2' className='mb-5' fontSize='4xl'>
          <motion.span
            className='block'
            initial={{ x: -10 }}
            transition={{ duration: 0.8 }}
            whileInView={{ x: 0 }}
          >
            Get to know me
          </motion.span>
        </Text>
      </Box>
      <Box className='md:col-span-2 flex flex-col gap-5 items-start'>
        <Text className='gap-5 max-w-lg' as='p' fontSize='xl'>
          <motion.span
              className='block'
              initial={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
          I&#39;ve been working in the industry for over 6 years, and I&#39;ve had the opportunity to wear many hats, from consultant to entrepreneur to full stack developer.
          </motion.span>
        </Text>
        <Text className='gap-5 max-w-lg' as='p' fontSize='xl'>
          <motion.span
            className='block'
            initial={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.8 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
          I&#39;m currently the Head of Engineering at Fin, where I lead a team of talented engineers in developing high-quality solutions for the business. I love my job because it allows me to use my technical skills to solve real-world problems. I&#39;m also passionate about helping others learn and grow, so I&#39;m always looking for ways to mentor and share my knowledge with others.
          </motion.span>
        </Text>
        <Text className='gap-5 max-w-lg' as='p' fontSize='xl'>
          <motion.span
            className='block'
            initial={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.8 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
          I&#39;m a strategic thinker with a drive for excellence. I&#39;m always looking for ways to improve the way things are done, and I&#39;m not afraid to challenge the status quo. I&#39;m also a team player who is always willing to help others.
          </motion.span>
        </Text>
        <Text className='gap-5 max-w-lg' as='p' fontSize='xl'>
          <motion.span
              className='block'
              initial={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
          I&#39;m excited to see what the future holds for me in the software development industry. I&#39;m confident that I can continue to make a positive impact on the world through my work. 
          </motion.span>
        </Text>
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1}}
            className="hidden pt-12 lg:block"
        >
          <ArrowLink href={"/#projects"} direction="right" textSize="small">
            Some of my work
          </ArrowLink>
        </motion.div>
        
      </Box>

    </Container>
  );
};
