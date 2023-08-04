
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
            start: 'top 10%',
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
        <Container className="relative z-[0]" id="projects">
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
            <Box className="mb-10 md:mb-28 mt-0 md:mt-[8em] horizontal-scroll overflow-hidden flex flex-row flex-nowrap gap-[6em] relative z-[-1] w-fit left-0" id="horizontal-scroll-container">
                    <Project
                        title={"Insurance Underwriting System"}
                        description={"This tool serves insurance brokers and underwriting agencies, streamlining policy tasks, claims, and reports. It manages accounts with audit reports, balanced statements, and receipt printing. Simplifies quotes, renewals, and claims with organized lists and analysis. Handles stakeholders, offers advanced reports for profitability insights."}
                        image="/images/code.jpg"
                        technology = {['Codeigniter', 'MySql', 'Bootstrap', 'JQuery', 'Html']}
                    />
                    <Project
                        title="African Citizens Watch"
                        description={"An independent platform that tracks the performance and effectiveness of African governments based on the pledges made in the manifesto and other important policy pronouncements. The tool is owned and managed by an independent organisation called SIVIO Institute"}
                        image="/images/african-citizens-watch.png"
                        link = "https://africancitizenswatch.org"
                        technology={["Next Js", "Tailwind CSS", "Typescript", "GSAP", "Django", "Postgres"]}
                    />
                    <Project
                        title={"Digital Insurance Platform"}
                        description={"Unveil the future of insurance with DMP (Digital Insurance Platform): a revolutionary online marvel. Clients harness its power to effortlessly manage policies, bask in personalized assistance, and renew with ease – all from the sanctuary of their homes. No more tedious office visits, no more policy lapses. Embrace unparalleled convenience and forge unbreakable customer bonds, all thanks to this digital masterpiece."}
                        image="/images/code.jpg"
                        link="https://dmp.credsure.co.zw/experts/motor_quote/"
                        technology={["Django", "Celery", "Postgres", "Django Channels"]}
                    />
                    <Box className="panel md:hidden"/>
            </Box>
        </Container>
        
    )
}