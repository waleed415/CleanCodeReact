import { Link } from "react-router-dom";
import { AuthButton } from "../../../components/buttons";
import { TextBox } from "../../../components/inputs";
import React from "react";
import { IGenericForm } from "../../../models/GenericForm";
import { ForgetPasswordModel } from "../models/ForgetPasswordModel";
import { required, validate } from "../../../utils/validationRules";


class ForgotPassword extends React.Component<{}, IGenericForm<ForgetPasswordModel>> {
    constructor(props: any) {
        super(props);
        this.state = {
            formData: {
                email: ''
            },
            errors: {
                email: []
            },
            validationRules: {
                email: [required]
            },
            isValid: false
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        let form = this.state;
        form.formData[name as keyof ForgetPasswordModel] = value;
        form = validate(form)
        this.setState(form);
    };

    render(): React.ReactNode {
        const { email } = this.state.formData;
        const { errors } = this.state;
        return (
            <div className="row">
                <div className="col-lg-4 col-md-8 col-12 mx-auto">
                    <div className="card z-index-0 fadeIn3 fadeInBottom">
                        <div className="card-body">
                            <form className="text-start">
                                <TextBox placeholder="Email" name="email" value={email} onChange={this.handleChange}></TextBox>
                                <div className="text-danger">
                                    {
                                        errors.email?.map((item, index) => (
                                            <span key={index}>{item}</span> // List items for each string
                                        ))
                                    }
                                </div>
                                <div className="text-center">
                                    <AuthButton type="submit" title="Send Code"></AuthButton>
                                </div>
                                <p className="mt-4 text-sm text-center">
                                    Don't have an account?
                                    <Link to="/auth/register" className="text-primary text-gradient font-weight-bold">Sign Up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ForgotPassword;