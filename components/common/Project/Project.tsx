import { Box, Text } from "@components/ui";
import Image from "next/image";
import { motion } from 'framer-motion';

export const Project = () => {
  return (
    <Box className="grid grid-cols-12 gap-5 py-5 w-screen max-w-6xl aspect-[8/3] panel">
      <Box className="grid col-start-1 col-span-7 row-start-1 row-end-1 relative z-10 gap-4">
        <Text className="text-[#FFBE7A]" fontSize="md">Featured project</Text>
        <Text as="h2" fontSize="3xl">Insurance Underwriting Software</Text>
        <Box className="bg-slate-50 dark:bg-slate-800 rounded shadow-md">
          <Text as='p' className='p-3' fontSize='xl'>
            <motion.p
              className=''
              initial={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aliquid voluptatibus fugiat ut dolores, officia numquam, quisquam esse provident quis cumque possimus? Eaque cupiditate est facere molestiae, dolorem deserunt sunt , officia numquam, quisquam esse provident quis cumque possimus? Eaque cupiditate est facere molestiae, dolorem deserunt sunt.
            </motion.p>
          </Text>
        </Box>
        <ul className="flex flex-row gap-4 list-none text-[#FFBE7A]">
          <li>Codeigniter</li>
          <li>MySql</li>
          <li>Bootstrap</li>
          <li>JQuery</li>
          <li>Html</li>
        </ul>
      </Box>
      <Box className="col-start-6 row-start-1 row-end-1 col-end-12 relative min-h-[200px] md:w-lg z-1">
        <Image
          src="/images/code.jpg"
          objectFit="cover"
          layout="fill"
          alt="Insurance System"
          className="absolute"
        />
      </Box>

    </Box>
  )
};
