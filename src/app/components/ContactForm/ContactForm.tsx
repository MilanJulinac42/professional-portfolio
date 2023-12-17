import { inter, roboto } from "@/app/layout";
import ContactTextBox from "../ContactTextBox/ContactTextBox";
import styles from "./ContactForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faLinkedinIn,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
    return (
        <div className={`${styles.contactFormContainer} ${inter.className}`}>
            <div className={styles.wrapper}>
                <h3 className={roboto.className}>Looking to work together? </h3>
                <p>
                    Feel free to call me at any time. My phone number is:{" "}
                    <span>
                        <FontAwesomeIcon icon={faPhone} /> (+381) 63 83 84 196
                    </span>
                </p>
                <h3 className={roboto.className}>Want to hang out online?</h3>
                <div className={styles.socialContainer}>
                    <p>
                        I mostly hang out in my Facebook group, but you can also
                        find me below:
                    </p>
                    <div className={styles.social}>
                        <span>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faInstagram} />
                        </span>
                    </div>
                </div>
                <h3 className={roboto.className}>Have another question?</h3>
                <p>
                    Complete the form below or just mail me at{" "}
                    <span>
                        <FontAwesomeIcon icon={faEnvelope} />{" "}
                        milanjulinac996@gmail.com
                    </span>{" "}
                    and I’ll get back to you within 2 business days
                </p>
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
                    />
                </div>
                <div
                    className={`${styles.contactTextBoxContainer} ${inter.className}`}
                >
                    <label className={styles.contactLabel} htmlFor="name">
                        Company name
                    </label>
                    <input
                        className={styles.contactInput}
                        type="text"
                        name="name"
                        id="name"
                    />
                </div>
                <div
                    className={`${styles.contactTextBoxContainer} ${inter.className}`}
                >
                    <label className={styles.contactLabel} htmlFor="name">
                        Your website
                    </label>
                    <input
                        className={styles.contactInput}
                        type="text"
                        name="name"
                        id="name"
                    />
                </div>
                <div
                    className={`${styles.contactTextBoxContainer} ${inter.className}`}
                >
                    <label className={styles.contactLabel} htmlFor="name">
                        E-mail <span>(required)</span>
                    </label>
                    <input
                        className={styles.contactInput}
                        type="text"
                        name="name"
                        id="name"
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
                        name="name"
                        id="name"
                        rows={5}
                    />
                </div>
                <button
                    className={`${styles.submitButton} ${roboto.className}`}
                >
                    CONTACT MILAN
                </button>
            </div>
        </div>
    );
};

export default ContactForm;