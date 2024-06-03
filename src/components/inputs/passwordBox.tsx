import React from "react";
import TextBoxProps from "../props/textBoxProps";


class PasswordBox extends React.Component<TextBoxProps>{

    render(): React.ReactNode {
        return (
            <div className="input-group input-group-outline my-3">
                <input type="password" className="form-control"
                 value={this.props.value} {...this.props} />
            </div>
        );
    }
}

export default PasswordBox;