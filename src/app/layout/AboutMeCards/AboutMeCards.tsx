import HeroCard from "@/app/components/HeroCard/HeroCard";
import Container from "../Container/Container";
import styles from "./AboutMeCards.module.scss";
import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const AboutMeCards = () => {
    return (
        <Container
            title="Building Trust: My Commitment and Skills"
            background="#F0F0FA"
        >
            <div className={`${styles.containerWrapper} ${inter.className}`}>
                <HeroCard
                    title="Accuracy and Dedication"
                    description="I consistently meet deadlines, prioritizing efficiency and organization. My dedication maintains focus and ensures that every task receives full attention."
                    image="/commit.svg"
                    delay={0.3}
                />
                <HeroCard
                    title="Communication and Collaboration"
                    description="I build strong relationships with colleagues and clients, fostering open communication and collaborative problem-solving. My clear and concise communication ensures that everyone is on the same page."
                    image="/agreement.svg"
                    delay={0.6}
                />
                <HeroCard
                    title="Problem Solving and Initiative"
                    description="I overcome obstacles with innovative solutions, thinking outside the box and devising effective strategies. My proactive approach sustains project progress."
                    image="/lightbulb.svg"
                    delay={0.9}
                />
            </div>
        </Container>
    );
};

export default AboutMeCards;
