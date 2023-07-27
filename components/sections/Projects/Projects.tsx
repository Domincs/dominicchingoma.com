
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import gsap from "gsap";
import { useState, useEffect } from "react";
import { Project } from "@components/common";
import { Container, Text, Box } from "@components/ui";
import { motion } from 'framer-motion';

export const FeaturedProjects = () => {
    const [scrolled, setScrolled] = useState(0)

    const handleScroll = (progress) => {
        setScrolled(progress)
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        let tl = gsap.timeline({});
        
        let sections = gsap.utils.toArray(".panel");

        tl.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal-scroll",
            start: 'top 15%',
            //end: () => innerWidth * (sections.length+1),
            pin: true,
            scrub: 0.1,
            end: "+=4000",
            onUpdate: (self) => {handleScroll(self.progress)}
        }
        })
    }, [])

    gsap.registerPlugin(ScrollToPlugin)
    
    return (
        <Container>
            <Text as='h2' className='mb-4' fontSize='4xl'>
                <motion.span
                className='block'
                initial={{ x: -10 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0 }}
                >
                Featured Projects
                </motion.span>
            </Text>
            <Box className="mb-10 md:mb-28 mt-[5em] md:mt-[8em] horizontal-scroll overflow-hidden flex flex-row flex-nowrap gap-[6em] z-[-1] w-fit" id="horizontal-scroll-container">
                    <Project />
                    <Project />
                    <Project />
            </Box>
        </Container>
        
    )
}