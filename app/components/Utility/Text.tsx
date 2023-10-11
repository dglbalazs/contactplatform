"use client";
import styles from './Text.module.scss'

interface TextProps {
    text: string,
    texttype: number,
    clr: number
}

const Text: React.FC<Readonly<TextProps>> = ({ text, texttype, clr }) => {

    switch (texttype) {
        case 1:
            return <h1 className={`${styles.Headline1} textclr${clr}`}>{text}</h1>;
        case 2:
            return <h2 className={`${styles.Headline2} textclr${clr}`}>{text}</h2>;
        case 3:
            return <h3 className={`${styles.Headline3} textclr${clr}`}>{text}</h3>;
        case 4:
            return <span className={`${styles.Body4} textclr${clr}`}>{text}</span>;
        default:
            return <span className={`${styles.Body5} textclr${clr}`}>{text}</span>;
        }

}

export default Text;