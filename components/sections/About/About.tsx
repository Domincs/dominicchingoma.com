
import { Text, Box, Container } from '@components/ui';
import { motion } from 'framer-motion';
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
        Over the past 7 years, I&#39;ve been on quite the adventure in the industry, exploring various roles from consultant to entrepreneur and eventually finding my groove as a full-stack developer and team leader.
      </motion.span>
      </Text>
      <Text className='gap-5 max-w-lg' as='p' fontSize='xl'>
      <motion.span
        className='block'
        initial={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.8 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        At AMAKA, I have the privilege of leading an incredible team of engineers as the Head of Engineering. What I adore about my role is how it lets me roll up my sleeves and apply my technical skills to solve real-world problems. Plus, I&#39;m all about spreading the knowledge and helping others grow – mentoring is just as rewarding as achieving milestones!
      </motion.span>
      </Text>
      <Text className='gap-5 max-w-lg' as='p' fontSize='xl'>
      <motion.span
        className='block'
        initial={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.8 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        I&#39;ve got this knack for thinking strategically and a deep-seated desire to make things better. Whether it&#39;s shaking up the norm or finding innovative solutions, I&#39;m always up for the challenge. And hey, being a team player comes naturally – I&#39;m the first to jump in and lend a hand whenever needed.
      </motion.span>
      </Text>
      <Text className='gap-5 max-w-lg' as='p' fontSize='xl'>
      <motion.span
        className='block'
        initial={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.8 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        Looking ahead, I&#39;m buzzing with excitement about what&#39;s to come in the software development realm. With a sunny outlook and a passion for making a positive impact, I&#39;m eager to keep the momentum going and continue shaping a brighter future through my work.
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
