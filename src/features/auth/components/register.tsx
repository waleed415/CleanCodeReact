import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthButton } from "../../../components/buttons";
import { PasswordBox, TextBox } from "../../../components/inputs";
import React from "react";
import { Link } from "react-router-dom";

class Register extends React.Component {

    render(): React.ReactNode {
        return (
            <div className="row">
                <div className="col-lg-4 col-md-8 col-12 mx-auto">
                    <div className="card z-index-0 fadeIn3 fadeInBottom">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                                <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Sign Up</h4>
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
                            <form role="form" className="text-start">
                                <TextBox placeholder="Name" ></TextBox>
                                <TextBox placeholder="Email" ></TextBox>
                                <PasswordBox placeholder="Password"></PasswordBox>
                                <div className="text-center">
                                    <AuthButton type="submit" title="Sign Up"></AuthButton>
                                </div>
                                <p className="mt-4 text-sm text-center">
                                    Already have an account?
                                    <Link to="/auth/login" className="text-primary text-gradient font-weight-bold">Sign In</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;