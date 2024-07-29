import { Link } from "react-router-dom";
import { AuthButton } from "../../../components/buttons";
import { TextBox } from "../../../components/inputs";
import React from "react";
import { IGenericForm } from "../../../models/GenericForm";
import { ForgetPasswordModel } from "../models/ForgetPasswordModel";
import { required, validate } from "../../../utils/validationRules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthService } from "../services/authService";


class ForgotPassword extends React.Component<{}, IGenericForm<ForgetPasswordModel>> {
    private authService: AuthService;
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
        this.authService = new AuthService();
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        let form = this.state;
        form.formData[name as keyof ForgetPasswordModel] = value;
        form = validate(form)
        this.setState(form);
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let form = this.state as IGenericForm<ForgetPasswordModel>;
        form = validate(form);
        this.setState(form);
        if (form.isValid) {
            this.authService.forgetPassword(form.formData.email).then(result => {
                if(result){
                    window.location.href = "/auth/resetpassword";
                }
            });
        }
    };

    render(): React.ReactNode {
        const { email } = this.state.formData;
        const { errors } = this.state;
        return (
            <div className="row">
                <div className="col-lg-4 col-md-8 col-12 mx-auto">
                    <div className="card z-index-0 fadeIn3 fadeInBottom">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                                <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Reset Password</h4>
                                <div className="row mt-3">
                                    <div className="col-2 text-center ms-auto">
                                        <a className="btn btn-link px-3" href="javascript:void(0);">
                                            <FontAwesomeIcon icon={['fab', 'facebook']} className="text-white text-lg" />
                                        </a>
                                    </div>
                                    <div className="col-2 text-center px-1">
                                        <a className="btn btn-link px-3" href="javascript:void(0);">
                                            <FontAwesomeIcon icon={['fab', 'github']} className="text-white text-lg" />
                                        </a>
                                    </div>
                                    <div className="col-2 text-center me-auto">
                                        <a className="btn btn-link px-3" href="javascript:void(0);">
                                            <FontAwesomeIcon icon={['fab', 'google']} className="text-white text-lg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <form className="text-start" onSubmit={this.handleSubmit}>
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