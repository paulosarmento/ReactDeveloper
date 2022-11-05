import Link from "next/link";
import {
  buttonBack,
  buttonContinue,
  FooterButton,
} from "../../../utils/buttons";

type FooterProps = {
  buttons?: FooterButton[];
};

const Footer = ({ buttons = [buttonBack, buttonContinue] }: FooterProps) => {
  return (
    <footer className="fixed">
      {buttons?.map(
        ({ href, type, className, disabled, onClick, value }, index) => {
          if (href === undefined) {
            return (
              <button
                key={index}
                type={type}
                className={className}
                disabled={disabled}
                onClick={onClick}
              >
                {value}
              </button>
            );
          } else {
            return (
              <Link href={href} key={index}>
                <a className={className}>{value}</a>
              </Link>
            );
          }
        }
      )}
    </footer>
  );
};

export default Footer;
