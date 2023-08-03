import { Box, Text } from "@components/ui";
import Image from "next/image";
import { motion } from 'framer-motion';
import Link from "next/link";
import {  BiLinkExternal } from "react-icons/bi";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technology?: string[];
  link?: string
}
export const Project = (
{
  title,
  description,
  image,
  technology = [],
  link = undefined
  }: ProjectProps
) => {
  return (
    <Box className="grid grid-cols-12 gap-5 py-5 w-screen max-w-6xl aspect-[8/3] panel">
      <Box className="grid col-start-1 col-span-7 row-start-1 row-end-1 relative z-10 gap-4">
        <Text className="text-amber-500" fontSize="md">Featured project</Text>
        <Text as="h2" fontSize="3xl">{title}</Text>
        <Box className="bg-slate-50 dark:bg-slate-800 rounded shadow-md">
          <Text as='p' className='p-3' fontSize='xl'>
            <motion.p
              className=''
              initial={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              {description}
            </motion.p>
          </Text>
        </Box>
        <ul className="flex flex-row gap-4 list-none text-amber-500 flex-nowrap">
          {technology.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <Box className="flex justify-start">
          {
            link !== undefined && (
            <Link href={link} >
              <a target="_blank" href={link} rel="noreferrer" className="btn btn-primary text-3xl relative z-50"><BiLinkExternal /></a>
            </Link>
            )
          }
          
        </Box>
      </Box>
      <Box className="col-start-6 row-start-1 row-end-1 col-end-12 relative min-h-[200px] md:w-lg z-1">
        <Image
          src={image}
          objectFit="cover"
          layout="fill"
          alt="Insurance System"
          className="absolute"
        />
      </Box>

    </Box>
  )
};
