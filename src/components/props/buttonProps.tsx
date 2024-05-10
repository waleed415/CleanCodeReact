import { HtmlHTMLAttributes } from "react";

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
    title:string;
    type: "submit" | "button" | "reset";
}

export default ButtonProps;