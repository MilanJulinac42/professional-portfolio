"use client";
import { Roboto, Inter } from "next/font/google";
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
import Toast from "../Toast/Toast";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        companyName: "",
        subject: "",
        website: "",
        email: "",
        message: "",
    });

    const [toastMessage, setToastMessage] = useState("");
    const [showToast, setShowToast] = useState(false);

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
            console.log(formData);
            const response = await fetch(
                "http://localhost:3001/api/send-email",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                setToastMessage("Email je uspešno poslat!");
                setShowToast(true);
                console.log("Email sent successfully!");
            } else {
                setToastMessage("Greška prilikom slanja emaila!");
                setShowToast(true);
                console.error("Error sending email");
            }
        } catch (error: any) {
            setToastMessage("Error: " + error.message);
            setShowToast(true);
            console.error("Error:", error);
        }
    };

    const closeToast = () => {
        setShowToast(false);
    };

    return (
        <div className={`${styles.contactFormContainer} ${inter.className}`}>
            <div className={styles.wrapper}>
                <h3 className={roboto.className}>
                    Interested in Collaboration?
                </h3>
                <p>
                    Feel free to give me a call anytime. My phone number is:{" "}
                    <span>
                        <FontAwesomeIcon icon={faPhone} /> (+381) 63 83 84 196
                    </span>
                </p>
                <h3 className={roboto.className}>Want to Connect Online?</h3>
                <div className={styles.socialContainer}>
                    <p>
                        You can find me on one of the following platforms below:
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
                <h3 className={roboto.className}>Have a Question?</h3>
                <p>
                    Fill out the form below or send me an email at{" "}
                    <span>
                        <FontAwesomeIcon icon={faEnvelope} />{" "}
                        milanjulinac996@gmail.com
                    </span>{" "}
                    and I will get back to you within 2 days.
                </p>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div
                        className={`${styles.contactTextBoxContainer} ${inter.className}`}
                    >
                        <label className={styles.contactLabel} htmlFor="name">
                            Name <span>(required)</span>
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
                            Company Name
                        </label>
                        <input
                            className={styles.contactInput}
                            type="text"
                            name="subject"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div
                        className={`${styles.contactTextBoxContainer} ${inter.className}`}
                    >
                        <label className={styles.contactLabel} htmlFor="name">
                            Your Website
                        </label>
                        <input
                            className={styles.contactInput}
                            type="text"
                            name="website"
                            id="website"
                            value={formData.website}
                            onChange={handleChange}
                        />
                    </div>
                    <div
                        className={`${styles.contactTextBoxContainer} ${inter.className}`}
                    >
                        <label className={styles.contactLabel} htmlFor="name">
                            Email <span>(required)</span>
                        </label>
                        <input
                            className={styles.contactInput}
                            type="text"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div
                        className={`${styles.contactTextBoxContainer} ${inter.className}`}
                    >
                        <label className={styles.contactLabel} htmlFor="name">
                            How can I help you? <span>(required)</span>
                        </label>
                        <textarea
                            className={styles.contactTextArea}
                            name="message"
                            id="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        className={`${styles.submitButton} ${roboto.className}`}
                    >
                        Contact Me
                    </button>
                </form>

                {showToast && (
                    <Toast text={toastMessage} onClose={closeToast} />
                )}
            </div>
        </div>
    );
};

export default ContactForm;
