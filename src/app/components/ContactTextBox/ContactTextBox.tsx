import { Roboto, Inter } from "next/font/google";
import styles from "./ContactTextBox.module.scss";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const ContactTextBox = () => {
    return (
        <div className={`${styles.contactTextBoxContainer} ${inter.className}`}>
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
    );
};

export default ContactTextBox;
