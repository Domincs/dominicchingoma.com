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
        <Text className='gap-5 max-w-lg' fontSize='2xl'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam inventore fuga cum eum fugiat temporibus, alias in magnam voluptatum vel quasi non sequi aut provident perferendis eos neque cupiditate soluta! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, culpa neque! In, ea? Explicabo ut, tenetur aliquid ea error autem? Dolor, libero rem animi accusamus quasi beatae fugiat neque optio. 
        </Text>
        <ArrowLink href={"/"} direction="right" textSize="small">
          Some of my work
        </ArrowLink>
  
      </Box>

    </Container>
  );
};
