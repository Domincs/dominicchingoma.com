
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
        <Container id="projects">
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
                    <Project
                        title={"Insurance Underwriting System"}
                        description={"This specialized tool caters to the needs of insurance brokers and underwriting agencies, offering a streamlined approach to policy administration, claims management, and report generation. It provides efficient management of accounts through features like audit reports, balanced statements, receipt printing, and cashier summaries. Simplify policy-related tasks such as quotes, renewals, endorsements, and invoices with organized lists and insightful analysis reports. Dive deeper into claims assessment using face sheets, loss ratios, risk management, and statistics. Seamlessly manage a range of stakeholders including customers, agents, and insurers, all while benefiting from advanced reports and profitability insights."}
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
                        description={"Traditional methods require clients to visit specific physical locations, leading to long queues and discouragement. DMP (Digital Insurance Platform) is an online platform aimed to simplify the hustle of buying or renewing insurance and ZINARA in Zimbabwe. It is powered by an insurance company in Zimbabwe called Credsure. Clients can manage policies, receive personalized assistance, and conveniently renew from the comfort of their homes without visiting the office, reducing the risk of policy lapses and fostering stronger customer relationships."}
                        image="/images/code.jpg"
                        link="https://dmp.credsure.co.zw/experts/motor_quote/"
                        technology={["Django", "Celery", "Postgres", "Django Channels"]}
                    />
            </Box>
        </Container>
        
    )
}