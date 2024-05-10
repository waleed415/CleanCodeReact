import { HtmlHTMLAttributes } from "react";

interface TextBoxProps extends HtmlHTMLAttributes<HTMLInputElement>{
    value?:string | string[] | number | undefined;
    placeholder:string | undefined;
}

export default TextBoxProps;