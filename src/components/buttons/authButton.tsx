import React from "react";
import ButtonProps from "../props/buttonProps";



class AuthButton extends React.Component<ButtonProps> {

    render(): React.ReactNode {
        return (
            <button
                type={this.props.type}
                className="btn bg-gradient-primary w-100 my-4 mb-2"
            >
                {this.props.title}
            </button>
        )
    }
}

export default AuthButton;