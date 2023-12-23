import { useEffect, useRef, useState } from "react";
import styles from "./Services.module.scss";
import Break from "@/app/components/Break/Break";
import { roboto } from "@/app/layout";
import Link from "next/link";
import Service from "@/app/components/Service/Service";
import { useRouter } from "next/router";

const servicesData = [
    {
        heading: "Dizajn veb sajta",
        title: "Oblikujte veb sajt iz snova: Dizajn koji povezuje i pretvara posetioce u klijente",
        description:
            "Ne pravim samo veb sajtove, već stvaram digitalna iskustva koja osvajaju pažnju vaše publike i donose konkretne rezultate. Od sofisticiranih modernih dizajna do korisnički prijatne navigacije i rasporeda koji podstiču konverzije, pretvaram vaše ideje u stvarnost.",
        image: "/dizajn.svg",
        extraParagraph:
            "Vaš veb sajt je vaša digitalna prodavnica, vaš 24/7 prodavac i vaš prozor u svet. Ja ne izrađujemo samo veb sajtove, već i moćne alate koji pokreću vaše poslovanje napred. Hajde da kreiramo veb sajt koji pretvara posetioce u lojalne klijente i premašuje vaša očekivanja.",
        listItems: [
            "Strateški dizajn: Razumem vašu ciljnu publiku, poslovne ciljeve i identitet brenda kako bismo kreirali veb sajt koji rezonira i podstiče akciju.",
            "Savršen dizajn: Doživite zadivljujuće vizuelne efekte, intuitivne rasporede i besprekorna korisnička iskustva koja ostavljaju trajan utisak.",
            "Optimizacija fokusirana na konverzije: Dizajniram za rezultate, osiguravajući da vaš veb sajt vodi posetioce ka željenim rezultatima.",
        ],
    },
    {
        heading: "Redizajn veb sajta",
        title: "Zaboravite na zastareli veb sajt koji ne donosi rezultate! Udahnimo mu novi život modernim dizajnom za bolje rezultate, zadovoljnije korisnike i puno procenata na vašem brojaču.",
        description:
            "Da li ti je veb sajt zastareo i više ne privlači ili zadržava klijente? Ja udišem novi dah u umorne online prezentacije, modernizujući vaš veb sajt za poboljšane performanse, veće uključivanje korisnika i konkretne koristi za vaš biznis.",
        image: "/redesign.svg",
        extraParagraph:
            "Niste zadovoljni veb sajtom koji vas koči. Moja rešenja za preoblikovanje veb sajtova otključavaju vaš online potencijal, privlače nove klijente, podižu angažman i donose stvarne rezultate. Hajde da pretvorimo vaš veb sajt u moćno oružje koje će pokrenuti rast vašeg biznisa.",
        listItems: [
            "Sveže i moderno: Obnavljam vaš veb sajt savremenim estetskim izgledom koji se uklapa sa vašim brendom i osvaja vašu ciljnu publiku.",
            "Besprekorno korisničko iskustvo: Optimizujem navigaciju, protok i funkcionalnost kako bi stvorili prilagođeno korisničko iskustvo koje će zadržati posetioce.",
            "Strategije za poboljšanje konverzija: Analiziram podatke vašeg postojećeg veb sajta i trendove u industriji kako bih implementirao ciljane promene koje podižu konverzije i povratak na uložena sredstva.",
        ],
    },
    {
        heading: "Optimizacija za pretraživače",
        title: "Lansiram vaš veb sajt na vrh, donoseći vam organski promet, privlačeći kvalifikovane potencijalne klijente i podižući vašu online vidljivost pomoću moje optimizacije za pretraživače zasnovane na podacima.",
        description:
            "Zaboravi na skupe oglase i prolazne trendove. Moje strategije donose održiv rast, privlače kvalifikovane potencijalne klijente, neguju odnose sa njima i pokreću organski uspeh vašeg biznisa. Ja sam vaš partner u svetu pretraživača, posvećen sam tome da vaš brend odvedemo na vrh i još dalje.",
        image: "/SEO.svg",
        extraParagraph:
            "Nema više ignorisanja od strane Google-a. Moje strategije otvaraju vam vrata prema besplatnom prometu i angažovanim posetiocima. Izgradimo solidan temelj sa pravim ključnim rečima, optimizovanim sadržajem i stalnim praćenjem kako bi vaš veb sajt zablistao među zvezdama pretraživača.",
        listItems: [
            "Istraživanje i analiza ključnih reči: Otkrivam zlatne reči koje vaša publika traži, gradeći ciljane strategije za maksimalan rezultat u pretraživačima.",
            "On-page i off-page optimizacija: Prilagođavam sadržaj vašeg veb sajta, tehničku strukturu i profil backlinkova, šaljući pozitivne signale pretraživačima i povećavajući autoritet.",
            "Kontinuirano praćenje i analiza: Pratim vaš napredak pomoću najsavremenijih alata, prilagođavam strategije na osnovu podataka u realnom vremenu i osiguravam stalni rast i dominaciju u organskoj pretrazi.",
        ],
    },
    {
        heading: "Sistem za upravljanje sadržajem",
        title: "Preuzmite kontrolu nad svojim sadržajem: Osnažite se sistemom za upravljanje sadržajem.",
        description:
            "Kažite zbogom zamršenim interfejsima i tehničkim preprekama! Ja rušim barijere u upravljanju sadržajem i pomažem vam da preuzmete kontrolu nad vašim veb sajtom, sa lakoćom objavljujete sveže sadržaje i bez napora angažujete publiku. Hajde da zajedno otključamo puni potencijal vašeg sadržaja sa savršenim sistemom za upravljanje sadržajem.",
        image: "/cms.svg",
        extraParagraph:
            "Oprostite se od haosa! Moje rešenje vam daje ključeve za uređivanje, ažuriranje i objavu sadržaja na lak način, da ispričate vašu priču i postignete željene rezultate. Vi upravljate, a ja pružam podršku i savet da vaš veb sajt sjaji.",
        listItems: [
            "Izbor i implementacija sistema za upravljanje sadržajem: Plovićemo kroz svet platforma i preporučujem savršenu za vaše potrebe, veštine i budžet, osiguravajući bezproblemnu implementaciju.",
            "Prilagođavanje i obuka: Prilagođavam vaše iskustvo, personalizujući interfejs, tok rada i uloge korisnika, i nudim detaljne obuke za lako upravljanje sadržajem.",
            "Kontinuirana podrška i optimizacija: Ja sam vaš partner i uvek blizu za podršku, optimizaciju performansi i strateške savete kako bi maksimizirali potencijal vašeg sistema za upravljanje sadržajem.",
        ],
    },
    {
        heading: "Online plaćanje",
        title: "Neka plaćanje bude uživanje! Integrišem sigurne i jednostavne platforme za online plaćanje koje grade poverenje kod klijenata, ubrzavaju transakcije i otvaraju nove izvore prihoda za vaš biznis.",
        description:
            "Zaboravite na komplikovane procese. Omogućavam besprekorno online plaćanje, gradeći poverenje, povećavajući konverzije i otvarajući nove staze za rast vašeg biznisa. Hajde da zajedno oblikujemo jednostavno plaćanje koje će oduševiti vaše klijente i osigurati uspeh vašeg poslovanja.",
        image: "/card.svg",
        extraParagraph:
            "Neka vaše plaćanje bude brzo i sigurano! Povezujem vas sa vrhunskim procesorima plaćanja, obezbeđujući da klijenti imaju jednostavan i bezbedan način za obavljanje kupovine. Zajedno gradimo lojalnost i otvaramo vrata novim profitima.",
        listItems: [
            "Raznolikost platforme za plaćanje: Povezujemo vas sa različitim poverljivim platformama i processorima, prilagođavajući se željama vaših klijenata i povećavajući njihovo zadovoljstvo.",
            "Glatko i brzo iskustvo plaćanja: Dizajniram i sprovodim bezbedne procese plaćanja, optimizujući svaki korak od odabira proizvoda do potvrde, vodeći ka većim profitima.",
            "Povećana sigurnost i zaštita od prevara: Sigurnost je moj prioritet. Koristim najsavremenije šifrovanje i mere zaštite od prevara kako bi transakcije bile sigurne i bezbedne i za vas i za vaše klijente.",
        ],
    },
    {
        heading: "Optimizacija sajta i responsivan dizajn",
        title: "Ubrzajte vaš sajt i postignite sjajan izgled na svim ekranima? To je magija optimizacije!",
        description:
            "Zaboravite na sporost i frustraciju prilikom pregleda vašeg sajta! Otključavam puni potencijal vašeg veb sajta sa stručnom optimizacijom brzine i besprekornom prilagođavanju za mobilne uređaje.",
        image: "/turbo.svg",
        extraParagraph:
            "Neka vaš veb sajt leti! Moja optimizacija brzine i mobilna magija idu dalje od tehničkih trikova. Razumem vezu između performansi veb sajta, korisničkog iskustva i uspeha biznisa. Pretvorimo vaš veb sajt u mašinu za konverzije koja će pritegnuti posetioce, pretvoriti ih u klijente i gurnuti vaš biznis napred. Vaš online uspeh počinje sa odličnim veb sajtom, a mi smo tu da to ostvarimo.",
        listItems: [
            "Munjevita brzina učitavanja: Držite posetioce angažovanim i smanjite gubite sa veb sajtom koji leti.",
            "Besprekorno iskustvo na mobilnim uređajima: Dajte svakom klijentu sjajan doživljaj, bez obzira na uređaj, sa veb sajtom koji sjaji na svakom ekranu.",
            "Više konverzija: Pretvorite vaš veb sajt u mašinu za konverzije sa optimizovanom navigacijom i glatkim korisničkim iskustvom.",
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
                    Moje usluge
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
