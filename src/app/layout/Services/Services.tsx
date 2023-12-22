import { useEffect, useRef, useState } from "react";
import styles from "./Services.module.scss";
import Break from "@/app/components/Break/Break";
import { roboto } from "@/app/layout";
import Link from "next/link";
import Service from "@/app/components/Service/Service";
import { useRouter } from "next/router";

const servicesData = [
    {
        heading: "Dizajn veb sajtova",
        title: "Oblikujte veb sajt iz snova: Dizajn koji povezuje i pretvara posetioce u klijente",
        description:
            "Ne samo da izrađujemo veb sajtove, već kreiramo digitalna iskustva koja osvajaju vašu publiku i donose rezultate. Od elegantnih modernih dizajna do korisnički prihvatljive navigacije i rasporeda koji podstiču konverzije, pretvaramo vašu viziju u stvarnost.",
        image: "/dizajn.svg",
        extraParagraph:
            "Vaš veb sajt je vaša digitalna prodavnica, vaš 24/7 prodavac i vaš prozor u svet. Mi ne izrađujemo samo veb sajtove, već i moćne alate koji pokreću vaše poslovanje napred. Hajde da kreiramo veb sajt koji pretvara posetioce u lojalne klijente i premašuje vaša očekivanja.",
        listItems: [
            "Strateški dizajn: Razumemo vašu ciljnu publiku, poslovne ciljeve i identitet brenda kako bismo kreirali veb sajt koji rezonira i podstiče akciju.",
            "Savršen dizajn: Doživite zadivljujuće vizuelne efekte, intuitivne rasporede i besprekorna korisnička sučelja koja ostavljaju trajan utisak.",
            "Optimizacija fokusirana na konverzije: Dizajniramo za rezultate, osiguravajući da vaš veb sajt vodi posetioce ka željenim akcijama poput kupovina, pretplata ili generisanja potencijalnih klijenata.",
        ],
    },
    {
        heading: "Oživi svoj veb sajt",
        title: "Zaboravi na zastareli veb sajt koji ne donosi rezultate! Udišimo mu novi život modernim dizajnom za bolje rezultate, zadovoljnije korisnike i puno procenata na tvom brojaču.",
        description:
            "Da li ti je veb sajt zastareo i više ne privlači ili zadržava klijente? Mi udišemo novi dah u umorne online prezentacije, modernizujući tvog veb sajta za poboljšane performanse, veće uključivanje korisnika i konkretne koristi za tvog biznis.",
        image: "/redesign.svg",
        extraParagraph:
            "Ne zadovolji se veb sajtom koji te koči. Naša rešenja za preoblikovanje veb sajtova otključavaju tvoj online potencijal, privlače nove klijente, podižu angažman i donose stvarne rezultate. Hajde da pretvorimo tvoj veb sajt u moćno oružje koje će pokrenuti rast tvog biznisa.",
        listItems: [
            "Sveže i moderno: Obnavljamo tvoj veb sajt savremenim estetskim izgledom koji se uklapa sa tvojim brendom i osvaja tvoju ciljnu publiku.",
            "Bezbedno korisničko iskustvo: Optimizujemo navigaciju, protok i funkcionalnost kako bi stvorili prilagođeno korisničko iskustvo koje će zadržati posetioce.",
            "Strategije za poboljšanje konverzija: Analiziramo podatke tvog postojećeg veb sajta i trendove u industriji kako bi implementirali ciljane promene koje podižu konverzije i povratak na uložena sredstva.",
        ],
    },
    {
        heading: "Penji se SEO lestvicom",
        title: "Sitan ti je čamirenja na dnu pretraživača? Mi lansiramo tvoj veb sajt na vrh, dovodeći ti organski promet, angažujući potencijalne klijente i podižući tvu online vidljivost pomoću naše SEO ekspertize zasnovane na podacima.",
        description:
            "Zaboravi na skupe oglase i prolazne trendove. Naše SEO strategije donose održiv rast, privlače kvalifikovane potencijalne klijente, neguju odnose sa njima i pokreću organski uspeh tvog biznisa. Mi smo tvoji partneri u svetu pretraživača, posvećeni tome da tvoj brend odvedemo na vrh i još dalje.",
        image: "/SEO.svg",
        extraParagraph:
            "Ne trpaj više da te Google ignoruje. Naše strategije ti otvaraju vrata prema besplatnom prometu i angažovanim posetiocima. Izgradimo ti solidan temelj sa pravim ključnim rečima, optimizovanim sadržajem i stalnim praćenjem kako bi tvoj veb sajt bio zvezda pretraživača.",
        listItems: [
            "Istraživanje i analiza ključnih reči: Otkopavamo zlatne reči koje tvoja publika traži, gradeći ciljane strategije za maksimalan dopad u pretraživačima.",
            "On-page i off-page optimizacija: Optimizujemo sadržaj tvog veb sajta, tehničku strukturu i profil backlinkova, šaljući pozitivne signale pretraživačima i povećavajući autoritet.",
            "Kontinuirano praćenje i analiza: Pratitimo tvoj napredak pomoću najsavremenijih alata, prilagođavamo strategije na osnovu podataka u realnom vremenu i osiguramo stalni rast i dominaciju u organskoj pretrazi.",
        ],
    },
    {
        heading: "CMS za upravljanje sadržajem",
        title: "Preuzmite kontrolu nad svojim sadržajem: Osvetate se idealnim CMS rešenjem",
        description:
            "Kažete zbogom zamršenim interfejima i tehničkim preprekama! Mi rušimo barijere u upravljanju sadržajem i pomažemo vam da preuzmete kontrolu nad svojim veb sajtom, lako objavljujete sveže sadržaje i bez napora angažujete publiku. Hajde da zajedno otključamo puni potencijal vašeg sadržaja sa savršenim CMS rešenjem.",
        image: "/cms.svg",
        extraParagraph:
            "Oprostite se od kaosa! Naše CMS rešenje vam daje ključeve za uređivanje, ažuriranje i objavu sadržaja na lak način, da pripovestate svoju priču i postižete željene rezultate. Vi upravljate, a mi pružamo podršku i savet da vaš veb sajt sjaji.",
        listItems: [
            "Izbor i implementacija CMS-a: Plovićemo kroz svet CMS platforma i preporučujemo savršenu za vaše potrebe, veštine i budžet, osiguravajući bezproblemnu implementaciju.",
            "Prilagođavanje i obuka: Prilagođavamo vaše CMS iskustvo, personalizujući interfejs, tok rada i uloge korisnika, i nudimo detaljne obuke za bestrudsno upravljanje sadržajem.",
            "Kontinuirana podrška i optimizacija: Mi smo vaš partner i uvek blizu za podršku, optimizaciju performansi i strateške savete kako bi maksimizirali potencijal vašeg CMS-a.",
        ],
    },
    {
        heading: "Bezbedne i brze transakcije",
        title: "Neka checkout bude uživanje! Integrišemo sigurne i jednostavne platforme za online plaćanje koje grade poverenje kod klijenata, ubrzavaju transakcije i otvaraju nove izvore prihoda za vaš biznis.",
        description:
            "Zaboravite na zamršene i sporne plaćane processore. Omogućavamo besprekornu online transakciju, gradeći trust, podižući konverzije i otvarajući nove putanje za rast vašeg biznisa. Hajde da zajedno kreiramo glatko plaćanje koje će vaše klijente osrećiti i pogoniti vaš uspeh.",
        image: "/card.svg",
        extraParagraph:
            "Neka vaš checkout bude brzina i sigurnost! Povezujemo vas sa najboljim procesorima plaćanja, osiguravajući da klijenti imaju jednostavan i bezbedan način da kupuju. Zajedno gradite lojalnost i otvarate vrata novim konverzijama.",
        listItems: [
            "Raznolikost platforme za plaćanje: Povezujemo vas sa različitim poverljivim platformama i processorima, prilagođavajući se željama vaših klijenata i povećavajući njihovo zadovoljstvo.",
            "Glatko i brzo iskustvo checkout-a: Dizajniramo i implementiramo bezbedne procese plaćanja, optimizujući svaki korak od odabira proizvoda do potvrde, vodeći ka većim konverzijama.",
            "Povećana sigurnost i zaštita od prevara: Sigurnost je naš prioritet. Koristimo najsavremenije šifrovanje i mere zaštite od prevara kako bi transakcije bile sigurne i bezbedne i za vas i za vaše klijente.",
        ],
    },
    {
        heading: "Ubrzajte i prilagodite veb sajt",
        title: "Slobodan pad loadinga i sjajan izgled na svim ekranima? To je magija optimizacije!",
        description:
            "Zaboravite na sporost i frustraciju prilikom pregleda sa mobila! Otključujemo puni potencijal vašeg veb sajta sa stručnom optimizacijom brzine i besprekornom prilagođenošću za mobilne uređaje. Zamislite:...",
        image: "/turbo.svg",
        extraParagraph:
            "Neka vaš veb sajt leti! Naša optimizacija brzine i mobilna magija idu dalje od tehničkih trikova. Razumemo vezu između performansi veb sajta, korisničkog iskustva i uspeha biznisa. Pretvorimo vas veb sajt u mašinu za konverzije koja će pritegnuti posetioce, pretvoriti ih u klijente i pogoniti vaš biznis napred. Vaš online uspeh počinje sa odličnim veb sajtom, a mi smo tu da to ostvarimo.",
        listItems: [
            "Munjevit brzina učitavanja: Držite posetioce angažovanim i smanjite gubite sa veb sajtom koji leti.",
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
