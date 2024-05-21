import HttpClient from "../../../utils/httpClient";
import { AuthConfigs } from "../models/AuthConfigs";
import { TokenRequestModel } from "../models/TokenModel";
import { TokenResponseModel } from "../models/TokenResponseModel";
import { Response } from "../../../models/Response"; 


export class AuthService{

    private httpClient : HttpClient
    private authConfigs : AuthConfigs

    constructor(){
        this.httpClient = new HttpClient('');
        this.authConfigs = {
            tokenUrl:'auth/token',
            forgotPasswordUrl:'',
            refreshTokenUrl:'',
            registerUrl:'',
            resetPasswordUrl:'',
        };
    }

    public async getToken(model:TokenRequestModel) : Promise<Response<TokenResponseModel> | undefined>{
        var response = await this.httpClient.Post(this.authConfigs.tokenUrl, model)
        return response as Response<TokenResponseModel>;
    }
    

}