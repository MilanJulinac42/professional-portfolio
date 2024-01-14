import { useEffect, useRef, useState } from "react";
import styles from "./Services.module.scss";
import Break from "@/app/components/Break/Break";
import Link from "next/link";
import Service from "@/app/components/Service/Service";
import { useRouter } from "next/router";
import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const servicesData = [
    {
        heading: "Website Design",
        title: "Shape Your Dream Website: Design that Connects and Converts Visitors into Clients",
        description:
            "I don't just create websites; I build digital experiences that capture your audience's attention and deliver tangible results. From sophisticated modern designs to user-friendly navigation and layouts that drive conversions, I turn your ideas into reality.",
        image: "/dizajn.svg",
        extraParagraph:
            "Your website is your digital storefront, your 24/7 salesperson, and your window to the world. I don't just create websites; I craft powerful tools that propel your business forward. Let's create a website that turns visitors into loyal clients and exceeds your expectations.",
        listItems: [
            "Strategic Design: Understand your target audience, business goals, and brand identity to create a website that resonates and inspires action.",
            "Perfect Design: Experience stunning visual effects, intuitive layouts, and flawless user experiences that leave a lasting impression.",
            "Conversion-Focused Optimization: Design for results, ensuring your website guides visitors to desired outcomes.",
        ],
    },
    {
        heading: "Website Redesign",
        title: "Forget About Outdated Websites That Don't Deliver Results! Let's Breathe New Life into It with Modern Design for Better Results, Satisfied Users, and Tons of Metrics on Your Counter.",
        description:
            "Is your website outdated and no longer attracting or retaining clients? I breathe new life into tired online presentations by modernizing your website for improved performance, increased user engagement, and tangible benefits for your business.",
        image: "/redesign.svg",
        extraParagraph:
            "Not satisfied with a website that holds you back? My website redesign solutions unlock your online potential, attract new clients, boost engagement, and deliver real results. Let's turn your website into a powerful tool that drives the growth of your business.",
        listItems: [
            "Fresh and Modern: Revitalize your website with a contemporary aesthetic that aligns with your brand and captivates your target audience.",
            "Seamless User Experience: Optimize navigation, flow, and functionality to create a tailored user experience that retains visitors.",
            "Conversion Improvement Strategies: Analyze data from your existing website and industry trends to implement targeted changes that boost conversions and deliver a return on investment.",
        ],
    },
    {
        heading: "Search Engine Optimization",
        title: "Launch Your Website to the Top, Bringing Organic Traffic, Attracting Qualified Potential Clients, and Boosting Your Online Visibility Through My Data-Driven Search Engine Optimization.",
        description:
            "Forget about expensive ads and passing trends. My strategies bring sustainable growth, attract qualified potential clients, nurture relationships with them, and drive organic success for your business. I am your partner in the world of search engines, dedicated to taking your brand to the top and beyond.",
        image: "/SEO.svg",
        extraParagraph:
            "No more being ignored by Google. My strategies open doors to free traffic and engaged visitors. Let's build a solid foundation with the right keywords, optimized content, and constant monitoring to make your website shine among the stars of search engines.",
        listItems: [
            "Keyword Research and Analysis: Discovering golden keywords your audience searches for, building targeted strategies for maximum results in search engines.",
            "On-Page and Off-Page Optimization: Adapting your website's content, technical structure, and backlink profile, sending positive signals to search engines and increasing authority.",
            "Continuous Monitoring and Analysis: Tracking your progress using state-of-the-art tools, adjusting strategies based on real-time data, and ensuring continuous growth and dominance in organic search.",
        ],
    },
    {
        heading: "Content Management System",
        title: "Take Control of Your Content: Empower Yourself with a Content Management System.",
        description:
            "Say goodbye to complex interfaces and technical obstacles! I break down barriers in content management, helping you take control of your website, easily publish fresh content, and effortlessly engage your audience. Let's unlock the full potential of your content together with the perfect content management system.",
        image: "/cms.svg",
        extraParagraph:
            "Bid farewell to chaos! My solution gives you the keys for editing, updating, and publishing content effortlessly, so you can tell your story and achieve desired results. You manage, and I provide support and advice to make your website shine.",
        listItems: [
            "Selection and Implementation of Content Management System: We'll navigate the world of platforms, and I recommend the perfect one for your needs, skills, and budget, ensuring a seamless implementation.",
            "Customization and Training: I tailor your experience, personalizing the interface, workflow, and user roles, and offering detailed training for easy content management.",
            "Continuous Support and Optimization: I am your partner, always close by for support, performance optimization, and strategic advice to maximize the potential of your content management system.",
        ],
    },
    {
        heading: "Online Payment",
        title: "Let Payment Be a Pleasure! I integrate secure and user-friendly online payment platforms that build trust with clients, expedite transactions, and open new revenue streams for your business.",
        description:
            "Forget about complicated processes. I enable seamless online payments, fostering trust, increasing conversions, and opening new paths for your business growth. Let's shape a straightforward payment experience that delights your customers and ensures the success of your business.",
        image: "/card.svg",
        extraParagraph:
            "Let your payment be fast and secure! I connect you with top-notch payment processors, ensuring clients have a simple and secure way to make purchases. Together, we build loyalty and open doors to new profits.",
        listItems: [
            "Payment Platform Diversity: I connect you with various trustworthy platforms and processors, adapting to your clients' preferences and increasing their satisfaction.",
            "Smooth and Swift Payment Experience: I design and implement secure payment processes, optimizing every step from product selection to confirmation, leading to greater profits.",
            "Enhanced Security and Fraud Protection: Security is my priority. I use state-of-the-art encryption and anti-fraud measures to ensure transactions are secure and safe for both you and your clients.",
        ],
    },
    {
        heading: "Website Optimization and Responsive Design",
        title: "Speed up your site and achieve a stunning appearance on all screens? That's the magic of optimization!",
        description:
            "Forget about slowness and frustration when browsing your site! I unlock the full potential of your website with expert speed optimization and seamless adaptation for mobile devices.",
        image: "/turbo.svg",
        extraParagraph:
            "Let your website soar! My speed optimization and mobile magic go beyond technical tricks. I understand the connection between website performance, user experience, and business success. Let's turn your website into a conversion machine that captivates visitors, turns them into clients, and propels your business forward. Your online success begins with an excellent website, and we're here to make that happen.",
        listItems: [
            "Lightning-fast loading speed: Keep visitors engaged and reduce bounce rates with a website that flies.",
            "Seamless experience on mobile devices: Provide every client with a brilliant experience, regardless of the device, with a website that shines on every screen.",
            "Increased conversions: Transform your website into a conversion machine with optimized navigation and a smooth user experience.",
        ],
    },
];

const Services = () => {
    const router = useRouter();
    const servicesRef = useRef<HTMLDivElement>(null);
    const [selectedService, setSelectedService] = useState<number | null>(0);

    useEffect(() => {
        const { selectedService: querySelectedService } = router.query;
        if (querySelectedService) {
            setSelectedService(parseInt(querySelectedService as string, 10));

            if (servicesRef.current) {
                servicesRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });

                const offset = 70;
                const targetScrollPosition =
                    servicesRef.current.offsetTop - offset;

                window.scrollTo({
                    top: targetScrollPosition,
                    behavior: "smooth",
                });
            }
        }
    }, [router.query]);
    const handleServiceClick = (index: any, event: React.MouseEvent) => {
        setSelectedService(index);
        event.preventDefault();
    };

    return (
        <>
            <div className={styles.helpContainer} ref={servicesRef}>
                <h2 className={`${styles.heading} ${roboto.className}`}>
                    My services
                </h2>
                <ul className={styles.serviceList}>
                    {servicesData.map((service, index) => (
                        <li
                            key={index}
                            className={
                                selectedService === index
                                    ? styles.activeLink
                                    : ""
                            }
                        >
                            <Link
                                shallow={true}
                                href="#"
                                onClick={(e) => handleServiceClick(index, e)}
                            >
                                {service.heading}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Break />
            </div>
            {selectedService !== null && (
                <Service
                    title={servicesData[selectedService].title}
                    description={servicesData[selectedService].description}
                    image={servicesData[selectedService].image}
                    extraParagraph={
                        servicesData[selectedService].extraParagraph
                    }
                    listItems={servicesData[selectedService].listItems}
                />
            )}
        </>
    );
};

export default Services;
