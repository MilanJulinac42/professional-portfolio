import HeroCard from "@/app/components/HeroCard/HeroCard";
import Container from "../Container/Container";
import styles from "./AboutMeCards.module.scss";
import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const AboutMeCards = () => {
    return (
        <Container
            title="Građenje poverenja: Moja Posvećenost i Veštine"
            background="#F0F0FA"
        >
            <div className={`${styles.containerWrapper} ${inter.className}`}>
                <HeroCard
                    title="Tačnost i posvećenost"
                    description="Redovno poštujem rokove, stavljajući efikasnost i organizaciju na prvo mesto. Moja posvećenost održava fokus i osigurava da svaki zadatak dobije punu pažnju."
                    image="/commit.svg"
                    delay={0.3}
                />
                <HeroCard
                    title="Komunikacija i saradnja"
                    description="Gradim jake veze sa kolegama i klijentima, podstičući otvorenu komunikaciju i zajedničko rešavanje problema. Moja jasna i koncizna komunikacija osigurava da su svi na istoj strani."
                    image="/agreement.svg"
                    delay={0.6}
                />
                <HeroCard
                    title="Rešenje problema i inicijativa"
                    description="Prepreke savladavam inovativnim rešenjima, razmišljajući izvan okvira i osmišljavajući efikasne strategije. Moj proaktivni pristup održava napredak projekata."
                    image="/lightbulb.svg"
                    delay={0.9}
                />
            </div>
        </Container>
    );
};

export default AboutMeCards;
