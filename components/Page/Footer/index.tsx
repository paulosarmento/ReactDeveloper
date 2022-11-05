import Link from "next/link";

type FooterButton = {
  href?: string;
  type?: "submit" | "button" | "reset";
  value: string;
  disabled?: boolean;
  className?: string;
  onclick?: () => void;
};

type FooterProps = {
  buttons?: FooterButton[];
};

const Footer = ({ buttons }: FooterProps) => {
  return (
    <footer className="fixed">
      {buttons?.map(
        ({ href, type, className, disabled, onclick, value }, index) => {
          if (href === undefined) {
            return (
              <button
                key={index}
                type={type}
                className={className}
                disabled={disabled}
                onclick={onclick}
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
