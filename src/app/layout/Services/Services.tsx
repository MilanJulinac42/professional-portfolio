import { useState } from "react";
import HelpCard from "@/app/components/HelpCard/HelpCard";
import Container from "../Container/Container";
import styles from "./Services.module.scss";
import Break from "@/app/components/Break/Break";
import { roboto } from "@/app/layout";
import Link from "next/link";
import Service from "@/app/components/Service/Service";

const servicesData = [
    {
        heading: "Website Design",
        title: "Craft Your Dream Website: Design that Connects and Converts",
        description:
            "We don't just build websites, we create digital experiences that captivate your audience and drive results. From sleek modern designs to user-friendly navigation and conversion-focused layouts, we bring your vision to life.",
        image: "/dizajn.svg",
        extraParagraph:
            "Your website is your digital storefront, your 24/7 salesperson, and your window to the world. We don't just build websites, we build powerful tools that propel your business forward. Let's create a website that turns visitors into loyal customers and exceeds your expectations.",
        listItems: [
            "Strategic Design: Understand your target audience, business goals, and brand identity to craft a website that resonates and drives action.",
            "Pixel-Perfect Design: Experience stunning visuals, intuitive layouts, and seamless user interfaces that leave a lasting impression.",
            "Conversion-Focused Optimization: We design for results, ensuring your website guides visitors towards desired actions like purchases, subscriptions, or leads.",
        ],
    },
    {
        heading: "Website Redesign",
        title: "Breathe New Life into Your Website: Modern Upgrades for Maximum Impact",
        description:
            "Is your website feeling outdated or failing to convert? We breathe new life into tired online presences, revamping your website for enhanced performance, user engagement, and bottom-line benefits.",
        image: "/redesign.svg",
        extraParagraph:
            "Don't settle for a website that's holding you back. Our website redesign solutions unlock your online potential, attracting new customers, boosting engagement, and driving real results. Let's transform your website into a powerful asset that fuels your business growth.",
        listItems: [
            "Fresh & Modern Design: We revamp your website with a modern aesthetic that aligns with your brand and resonates with your target audience.",
            "Seamless User Experience: We optimize navigation, flow, and functionality to create a user-friendly experience that keeps visitors engaged.",
            "Conversion-Driven Strategies: We analyze your existing website data and industry trends to implement targeted changes that boost conversions and ROI.Conversion-Driven Strategies: We analyze your existing website data and industry trends to implement targeted changes that boost conversions and ROI.",
        ],
    },
    {
        heading: "Search Engine Optimization",
        title: "Climb the Search Engine Ladder: Dominate Google with Our Proven SEO Strategies",
        description:
            "Description: Tired of languishing in the depths of search results? We catapult your website to the top, driving organic traffic, engaging leads, and boosting your online visibility with our data-driven SEO expertise.",
        image: "/SEO.svg",
        extraParagraph:
            "Forget expensive ads and fleeting trends. Our SEO strategies deliver sustainable growth, attracting qualified leads, nurturing customer relationships, and driving organic success for your business. We're your search engine partners, dedicated to propelling your brand to the top and beyond.",
        listItems: [
            "Keyword Research & Analysis: We uncover the golden gems of keywords your audience craves, crafting targeted strategies for maximum search engine impact.",
            "On-Page & Off-Page Optimization: We optimize your website content, technical structure, and backlink profile, sending positive signals to search engines and increasing authority.",
            "Continuous Monitoring & Analysis: We track your progress using cutting-edge tools, adapt strategies based on real-time data, and ensure ongoing growth and organic search domination.",
        ],
    },
    {
        heading: "Content Management Service",
        title: "Take Control of Your Content: Empowering You with the Perfect CMS Solution",
        description:
            "Ditch the content chaos! We unlock the power of content management systems, equipping you with a user-friendly platform to easily manage, update, and publish your website content, empowering you to tell your story and drive results.",
        image: "/cms.svg",
        extraParagraph:
            "Say goodbye to clunky interfaces and technical hurdles. We break down content management barriers, empowering you to take control of your website, publish fresh content consistently, and engage your audience with ease. Let's unlock the full potential of your content with the perfect CMS solution.",
        listItems: [
            "CMS Selection & Implementation: We navigate the CMS landscape, recommending the perfect platform for your needs, skills, and budget, and ensuring seamless implementation.",
            "Customization & Training: We tailor your CMS experience, customizing interfaces, workflows, and user roles, and providing comprehensive training for effortless content management.",
            "Ongoing Support & Optimization: We're your ongoing content management partner, offering technical support, performance optimization, and strategic guidance to maximize your CMS potential.",
        ],
    },
    {
        heading: "Online Payment",
        title: "Seamless Transactions, Happy Customers: Streamline Your Payments with Confidence",
        description:
            "Eliminate checkout friction and watch conversions soar. We integrate secure, user-friendly online payment solutions that boost customer confidence, accelerate transactions, and unlock new revenue streams for your business.",
        image: "/card.svg",
        extraParagraph:
            "Don't let clunky payment systems hold you back. We power seamless online transactions, building trust, simplifying purchases, and unlocking new growth opportunities for your business. Let's create a smooth payment journey that delights your customers and fuels your success.",
        listItems: [
            "Diverse Payment Gateway Integration: We connect you with a range of trusted payment gateways and processors, accommodating your customers' preferred payment methods and maximizing convenience.",
            "Frictionless Checkout Experience: We design and implement seamless checkout flows, optimizing every step from product selection to confirmation, leading to higher conversion rates.",
            "Enhanced Security & Fraud Protection: We prioritize security, employing cutting-edge encryption and fraud prevention measures to ensure safe and secure transactions for both you and your customers.",
        ],
    },
    {
        heading: "Website Speed Optimization & Mobile Responsiveness",
        title: "Turbocharge Your Website: Speed & Mobile Magic for Lasting Impact",
        description:
            "Say goodbye to sluggish loading times and frustrating mobile browsing! We unlock your website's full potential with expert speed optimization and seamless mobile responsiveness. Imagine:",
        image: "/turbo.svg",
        extraParagraph:
            "Don't settle for a sluggish website holding you back. Our speed optimization and mobile magic go beyond technical tweaks. We understand the intricate relationship between website performance, user experience, and business success. Let us transform your website into a high-performance powerhouse that engages visitors, converts leads, and propels your business forward. Your online success starts with a website that delivers, and we're here to make that happen.",
        listItems: [
            "Lightning-fast loading times: Keep visitors engaged and avoid bounce rates with a website that zips.",
            "Flawless mobile experience: Reach every customer, wherever they are, with a website that shines on any device.",
            "Increased conversions: Turn your website into a conversion machine with optimized navigation and a smooth user experience.",
        ],
    },
];

const Services = () => {
    const [selectedService, setSelectedService] = useState<number | null>(0);

    const handleServiceClick = (index: any, event: React.MouseEvent) => {
        setSelectedService(index);
        event.preventDefault();
    };

    return (
        <>
            <div className={styles.helpContainer}>
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
