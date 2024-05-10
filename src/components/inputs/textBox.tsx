import React from "react";
import TextBoxProps from "../props/textBoxProps";


class TextBox extends React.Component<TextBoxProps> {

    render(): React.ReactNode {
        return (
            <div className="input-group input-group-outline my-3">
                <input type="text" className="form-control"
                 placeholder={this.props.placeholder} value={this.props.value} />
            </div>
        );
    }
}

export default TextBox;