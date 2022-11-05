import { toBack } from "./toBack";

export type FooterButton = {
  href?: string;
  type?: "submit" | "button" | "reset";
  value: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
};

export const buttonBack = {
  value: "voltar",
  onClick: toBack,
  type: "button",
} as FooterButton;

export const buttonContinue = {
  value: "Continuar",
  type: "submit",
} as FooterButton;