import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthButton } from "../../../components/buttons";
import { PasswordBox, TextBox } from "../../../components/inputs";
import React from "react";
import { Link } from "react-router-dom";
import { RegisterModel } from "../models/RegisterModel";
import { IGenericForm } from "../../../models/GenericForm";
import { AuthService } from "../services/authService";
import { email, required, validate } from "../../../utils/validationRules";

class Register extends React.Component<{}, IGenericForm<RegisterModel>> {
    private authService : AuthService;

    constructor(props: any){
        super(props);
        this.authService = new AuthService();
        this.state = {
            formData:{
                email:'',
                password:'',
                userName:''
            },
            errors:{
                email:[],
                password:[],
                userName:[],
            },
            isValid:false,
            validationRules:{
                email:[required, email],
                password:[required],
                userName:[required]
            }
        };
        
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        let form = this.state as IGenericForm<RegisterModel>;
        form.formData[name as keyof RegisterModel] = value;
        form = validate(form)
        this.setState(form);
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let form = this.state as IGenericForm<RegisterModel>;
        form = validate(form);
        this.setState(form);
        if (form.isValid) {
            this.authService.register(form.formData).then(result => {
            });
        }
    };

    render(): React.ReactNode {
        const { userName, password, email } = this.state.formData;
        const { errors } = this.state;
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
                            <form onSubmit={this.handleSubmit} className="text-start">
                                <TextBox placeholder="Name" name="userName" onChange={this.handleChange} value={userName} ></TextBox>
                                <div className="text-danger">
                                    {
                                        errors.userName?.map((item, index) => (
                                            <span key={index}>{item}</span> // List items for each string
                                        ))
                                    }
                                </div>
                                <TextBox placeholder="Email" name="email" onChange={this.handleChange} value={email} ></TextBox>
                                <div className="text-danger">
                                    {
                                        errors.email?.map((item, index) => (
                                            <span key={index}>{item}</span> // List items for each string
                                        ))
                                    }
                                </div>
                                <PasswordBox placeholder="Password" name="password" onChange={this.handleChange} value={password}></PasswordBox>
                                <div className="text-danger">
                                    {
                                        errors.password?.map((item, index) => (
                                            <span key={index}>{item}</span> // List items for each string
                                        ))
                                    }
                                </div>
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