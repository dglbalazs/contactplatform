"use client";
import styles from './Button.module.scss'
import Icon from './Icon';
import Text from './Text';


interface ButtonProps {
    buttonType: 'both' | 'onlytext' | 'onlyicon';
    colorType: 'normal' | 'deep' | 'grad';
    icon: 'Add' | 'Back' | 'Call' | 'Change' | 'Delete' | 'Fav' | 'Light' | 'More' | 'Mute' | 'Search' | 'Settings';
    text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    hideMobile?: boolean
  }

const Button: React.FC<ButtonProps> = ({ buttonType, colorType, icon, text, onClick, hideMobile }) => {

    const buttonClassNames = [
        styles.button,
        styles[buttonType],
        styles[colorType],
        hideMobile ? styles.hideMobile : ''
      ].join(' ');

return (
    <button className={buttonClassNames} onClick={onClick}>
        {buttonType === 'both' && (
        <>
            <Icon iconname={icon}></Icon>
            <Text text={text} texttype={4} clr={1}></Text>
        </>
        )}
        {buttonType === 'onlyicon' && (
            <Icon iconname={icon}></Icon>
        )}
        {buttonType === 'onlytext' && <Text text={text} texttype={4} clr={1}></Text>}
    </button>
  );
}

export default Button;