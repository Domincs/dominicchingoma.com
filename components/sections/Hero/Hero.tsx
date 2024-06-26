import Image from 'next/image';
import { motion } from 'framer-motion';
import { Text, Box, Container, Link } from '@components/ui';
import {  BiDownload } from 'react-icons/bi';
import { ArrowLink } from '@components/ui/ArrowButton';

export const Hero = () => {
  return (
    <Box className='mb-10 grid md:mb-40 md:h-screen z-1' id='top'>
      <motion.div
        initial={{ opacity: 0.8 }}
        transition={{ duration: 0.6 }}
        animate={{ opacity: 1 }}
        className='relative md:absolute w-screen left-0 t-0 h-[70vh] md:h-screen z-[-1] hidden md:block md:dark:hidden'
      >
        <Image
          src='/images/dark_photo.png'
          layout='fill'
          objectFit={"contain"}
          priority
          quality={50}
          blurDataURL='/images/dominic-placeholder.png'
          placeholder='blur'
          alt='Dominic Chingoma'
          className='bg-no-repeat'
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0.8 }}
        transition={{ duration: 0.6 }}
        animate={{ opacity: 1 }}
        className='relative md:absolute w-screen left-0 t-0 h-[70vh] md:h-screen z-[-1] hidden md:dark:block'
      >
        <Image
          src='/images/light_photo.png'
          layout='fill'
          objectFit={"contain"}
          priority
          quality={50}
          blurDataURL='/images/dominic-placeholder.png'
          placeholder='blur'
          alt='Dominic Chingoma'
          className='bg-no-repeat'
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0.8 }}
        transition={{ duration: 0.6 }}
        animate={{ opacity: 1 }}
        className='relative md:absolute w-screen left-0 t-0 h-[70vh] md:h-screen z-[-1] block dark:hidden md:hidden'
      >
        <Image
          src='/images/dark_photo.png'
          layout='fill'
          objectFit='cover'
          priority
          quality={50}
          blurDataURL='/images/dominic-placeholder.png'
          placeholder='blur'
          alt='Dominic Chingoma'
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0.8 }}
        transition={{ duration: 0.6 }}
        animate={{ opacity: 1 }}
        className='relative md:absolute w-screen left-0 t-0 h-[70vh] md:h-screen z-[-1] hidden md:hidden dark:block'
      >
        <Image
          src='/images/light_photo.png'
          layout='fill'
          objectFit='contain'
          priority
          quality={50}
          blurDataURL='/images/dominic-placeholder.png'
          placeholder='blur'
          alt='Dominic Chingoma'
        />
      </motion.div>

      <Container className='flex flex-col md:flex-row justify-between items-center w-full'>
        <Box className='md:w-96'>
          <Text as='h1' className='mb-5' fontSize='5xl'>
            <motion.span
              className=''
              initial={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              Hello, <br/>
              I’m <span className='text-amber-500'>Dominic</span>
            </motion.span>
          </Text>
          <Text as='p' className='mb-5' fontSize='xl'>
            <motion.span
              className='block'
              initial={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              Software Engineer, DevOps, Software Architect, Tech Evangelist.
            </motion.span>
          </Text>
          

          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1}}
            className="hidden pt-12 lg:block"
          >
            <ArrowLink href={"/#contact"} direction="right" textSize="small">
              {"Let's Talk"}
            </ArrowLink>
          </motion.div>
        </Box>
        <Box className='md:w-96 z-5'>
          <Text as='p' className='mb-5 text-amber-500' fontSize='lg'>
            <motion.span
              className='block'
              initial={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              Expert in
            </motion.span>
          </Text>
          <Text as='h2' className='mb-5' fontSize='3xl'>
            <motion.span
              className='block'
              initial={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              Architecting high-quality code for exceptional digital experiences.
            </motion.span>
          </Text>
          <Text as='p' className='mb-5' fontSize='lg'>
            <motion.span
              className='block'
              initial={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              I&#39;m a passionate software engineer dedicated to delivering innovative code solutions that elevate user satisfaction. As a tech evangelist, I stay at the forefront of industry trends, inspiring teams with cutting-edge tools. Exceptional communicator and collaborator, fostering cross-functional synergy for shared success.
            </motion.span>
          </Text>
          <Link href="https://docs.google.com/document/d/1AXqZCJVXIMsbbNg-suPxpCjanr7cHEIW/edit?usp=sharing&ouid=107596598132806676606&rtpof=true&sd=true" target='_blank'
            className='font-heading mr-3 uppercase p-0'
          >
            <Box as={"div"} className='flex items-center gap-2 leading-2 border-b-2 w-max border-amber-500 0pb-1'>
              <Text as='p' fontSize='xl' className='text-amber-500 0text-2xl'>
                Download Resume
              </Text>
              <BiDownload color='#f59e0b' />
            </Box>
          </Link>

        </Box>
      </Container>
    </Box>
  );
};
