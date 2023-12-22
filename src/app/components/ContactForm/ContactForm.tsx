"use client";
import { inter, roboto } from "@/app/layout";
import styles from "./ContactForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faLinkedinIn,
    faInstagram,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        companyName: "",
        website: "",
        email: "",
        message: "",
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Email sent successfully!");
            } else {
                console.error("Error sending email");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className={`${styles.contactFormContainer} ${inter.className}`}>
            <div className={styles.wrapper}>
                <h3 className={roboto.className}>Želite da sarađujemo?</h3>
                <p>
                    Slobodno me pozovite u bilo kom trenutku. Moj broj telefona
                    je:{" "}
                    <span>
                        <FontAwesomeIcon icon={faPhone} /> (+381) 63 83 84 196
                    </span>
                </p>
                <h3 className={roboto.className}>
                    Želite da se družimo online?
                </h3>
                <div className={styles.socialContainer}>
                    <p>
                        Uglavnom se družim u svojoj Facebook grupi, ali možete
                        me pronaći i ovde:
                    </p>
                    <div className={styles.social}>
                        <span>
                            <Link
                                href={
                                    "https://www.facebook.com/milan.julinac.9/"
                                }
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faFacebookF} />
                            </Link>
                        </span>
                        <span>
                            <Link
                                href={
                                    "https://www.linkedin.com/in/milanjulinac/"
                                }
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </Link>
                        </span>
                        <span>
                            <Link
                                href={"https://www.instagram.com/milanjulinac/"}
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                        </span>
                        <span>
                            <Link
                                href={"https://github.com/MilanJulinac42"}
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </Link>
                        </span>
                    </div>
                </div>
                <h3 className={roboto.className}>Imate neko pitanje?</h3>
                <p>
                    Popunite formular ispod ili mi pošaljite email na{" "}
                    <span>
                        <FontAwesomeIcon icon={faEnvelope} />{" "}
                        milanjulinac996@gmail.com
                    </span>{" "}
                    i odgovoriću vam u roku od 2 dana.
                </p>
                <div
                    className={`${styles.contactTextBoxContainer} ${inter.className}`}
                >
                    <label className={styles.contactLabel} htmlFor="name">
                        Ime <span>(potrebno)</span>
                    </label>
                    <input
                        className={styles.contactInput}
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div
                    className={`${styles.contactTextBoxContainer} ${inter.className}`}
                >
                    <label className={styles.contactLabel} htmlFor="name">
                        Ime kompanije
                    </label>
                    <input
                        className={styles.contactInput}
                        type="text"
                        name="name"
                        id="name"
                        value={formData.companyName}
                        onChange={handleChange}
                    />
                </div>
                <div
                    className={`${styles.contactTextBoxContainer} ${inter.className}`}
                >
                    <label className={styles.contactLabel} htmlFor="name">
                        Vaš vebsajt
                    </label>
                    <input
                        className={styles.contactInput}
                        type="text"
                        name="name"
                        id="name"
                        value={formData.website}
                        onChange={handleChange}
                    />
                </div>
                <div
                    className={`${styles.contactTextBoxContainer} ${inter.className}`}
                >
                    <label className={styles.contactLabel} htmlFor="name">
                        E-mail <span>(potrebno)</span>
                    </label>
                    <input
                        className={styles.contactInput}
                        type="text"
                        name="name"
                        id="name"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div
                    className={`${styles.contactTextBoxContainer} ${inter.className}`}
                >
                    <label className={styles.contactLabel} htmlFor="name">
                        Kako mogu da vam pomognem? <span>(potrebno)</span>
                    </label>
                    <textarea
                        className={styles.contactTextArea}
                        name="name"
                        id="name"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button
                    className={`${styles.submitButton} ${roboto.className}`}
                >
                    kontaktirajte me
                </button>
            </div>
        </div>
    );
};

export default ContactForm;
