import TechCard from "@/app/components/TechCard/TechCard";
import styles from "./TechContainer.module.scss";
import {
    faReact,
    faJs,
    faAws,
    faDrupal,
    faNode,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Break from "@/app/components/Break/Break";
import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const TechContainer = () => {
    return (
        <div className={styles.techContainer}>
            <h2 className={`${styles.heading} ${roboto.className}`}>
                Tehnologije koje znam
            </h2>
            <Break />
            <div className={styles.techWrapper}>
                <TechCard
                    background="#54c5e3"
                    tech="React"
                    icon={faReact}
                    description="Oživite svoje ideje sa Reactom, vodećim JavaScript okvirom za izgradnju dinamičnih i interaktivnih korisničkih interfejsa. Reactova arhitektura zasnovana na komponentama čini ga efikasnim i skalabilnim, savršenim za kreiranje privlačnih veb iskustava koja osvajaju vašu publiku."
                    delay={0.2}
                />
                <TechCard
                    background="#d9c43b"
                    tech="JavaScript"
                    icon={faJs}
                    description="JavaScript dodaje magični dodir vašim kreacijama. Ovaj svestrani jezik daje život statičnim stranicama, omogućavajući animacije, interakcije korisnika i besprekornu funkcionalnost. Sa JavaScriptom, vaši projekti postaju privlačni i dinamični, nadmašujući očekivanja korisnika."
                    delay={0.4}
                />
                <TechCard
                    background="#68a063"
                    tech="Node.JS"
                    icon={faNode}
                    description="Node.js je pokretačka snaga iza vaših aplikacija. Ovo serversko JavaScript run-time okruženje se ističe u rukovanju podacima u realnom vremenu, izgradnji API-ja i pokretanju visokoperformansnih veb aplikacija. Node.js osigurava skalabilnost i efikasnost, omogućavajući vam da se fokusirate na kreiranje izuzetnih korisničkih iskustava."
                    delay={0.6}
                />
                <TechCard
                    background="#F79400"
                    tech="Amazon Web Services"
                    icon={faAws}
                    description="Ne izmišljajte točak ponovo, iskoristite snagu cloud-a sa AWS-om. Ovaj sveobuhvatni paket cloud computing usluga pruža sve što vam je potrebno za izgradnju, implementaciju i upravljanje vašim aplikacijama u velikom obimu. Od skladištenja i baza podataka do bezbednosti i mašinskog učenja, AWS vam daje moć da brže inovirate i dostignete nove visine."
                    delay={0.8}
                />
                <TechCard
                    background="#001e2b"
                    tech="Mongo DB"
                    icon={faDatabase}
                    description="Recite zbogom krutim strukturama podataka. Dokumentno orijentisana baza podataka MongoDB-a nudi neuporedivu fleksibilnost i skalabilnost, prilagođavajući se vašim promenljivim potrebama. Skladištite, upitajte i analizirajte podatke sa lakoćom, dobijajući vredne uvide i pokrećući dinamične aplikacije."
                    delay={1}
                />
                <TechCard
                    background="#009cde"
                    tech="Drupal"
                    icon={faDrupal}
                    description="Omogućite svojim klijentima da lako upravljaju svojim sadržajem. Drupal, vodeći open-source sistem za upravljanje sadržajem, pruža platformu jednostavnu za korišćenje za izgradnju i održavanje veb sajtova i veb aplikacija. Sa opsežnim opcijama za prilagođavanje i živahnom zajednicom, Drupal vam daje moć da kreirate moćna i skalabilna iskustva sadržaja."
                    delay={1.2}
                />
            </div>
        </div>
    );
};

export default TechContainer;
