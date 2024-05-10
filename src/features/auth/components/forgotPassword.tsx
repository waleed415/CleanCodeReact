import { Link } from "react-router-dom";
import { AuthButton } from "../../../components/buttons";
import { PasswordBox, TextBox } from "../../../components/inputs";
import React from "react";


class ForgotPassword extends React.Component{

    render(): React.ReactNode {
        return(
            <div className="row">
                            <div className="col-lg-4 col-md-8 col-12 mx-auto">
                                <div className="card z-index-0 fadeIn3 fadeInBottom">
                                    <div className="card-body">
                                        <form role="form" className="text-start">
                                            <TextBox placeholder="Email" ></TextBox>
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