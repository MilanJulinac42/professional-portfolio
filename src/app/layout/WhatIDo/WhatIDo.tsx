import React from "react";
import styles from "./WhatIDo.module.scss";
import HeroCard from "@/app/components/HeroCard/HeroCard";
import { inter } from "@/app/layout";

const WhatIDo = () => {
    return (
        <div className={`${styles.containerWrapper} ${inter.className}`}>
            <HeroCard
                image={"/mobila.svg"}
                title={"Oslobodite svoj digitalni potencijal"}
                description={
                    "Kreiram upečatljive veb sajtove, implementiram strateški SEO i pojednostavljujem online plaćanja kako bih povećao saobraćaj, konverzije i prihod vašeg poslovanja. Zajedno ćemo kreirati digitalna iskustva koja ostavljaju snažan utisak."
                }
            />
            <HeroCard
                image={"/htmlcss.svg"}
                title={"Pretvorite ideje u stvarnost"}
                description={
                    "Povezujem dizajn i kod, kreirajući pixel-savršene veb sajtove koji oličavaju vašu viziju i pružaju izuzetno korisničko iskustvo na svim uređajima. Svaki detalj je važan, a ja sam posvećen tome da vaš digitalni identitet zablista."
                }
            />
            <HeroCard
                image={"/analitika.svg"}
                title={"Odluke zasnovane na podacima za rast vašeg biznisa"}
                description={
                    "Koristim moć analitike da otkrijem ključne uvide, donesem informisane odluke i optimiziram vaš veb sajt za maksimalne performanse. Zajedno ćemo kreirati strategiju baziranu na podacima koja će podstaknuti vaš uspeh na internetu."
                }
            />
        </div>
    );
};

export default WhatIDo;
