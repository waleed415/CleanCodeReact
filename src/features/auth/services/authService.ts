import HttpClient from "../../../utils/httpClient";
import { AuthConfigs } from "../models/AuthConfigs";
import { TokenRequestModel } from "../models/TokenRequestModel";
import { TokenResponseModel } from "../models/TokenResponseModel";
import { Response } from "../../../models/Response";
import { RegisterModel } from "../models/RegisterModel";


export class AuthService {

    private httpClient: HttpClient
    private authConfigs: AuthConfigs

    constructor(baseUrl?: string, authConfigs?: AuthConfigs) {
        if (baseUrl)
            this.httpClient = new HttpClient(baseUrl);
        else
            this.httpClient = new HttpClient('https://localhost:7170/api/');
        if (authConfigs)
            this.authConfigs = authConfigs;
        else
            this.authConfigs = {
                tokenUrl: 'auth/token',
                forgotPasswordUrl: 'Auth/forgotpassword',
                refreshTokenUrl: 'Auth/refresh',
                registerUrl: 'Auth/register',
                resetPasswordUrl: 'Auth/resetpassword',
                timeForRefreshToken: 30
            };
    }

    public async getToken(model: TokenRequestModel): Promise<Response<TokenResponseModel> | undefined> {
        var response = await this.httpClient.Post(this.authConfigs.tokenUrl, model);
        this.triggerRefreshToken(response.data.refreshToken);
        return response as Response<TokenResponseModel>;
    }

    public async register(model: RegisterModel):Promise<Response<string> | undefined>{
        var response = await this.httpClient.Post(this.authConfigs.registerUrl, model);
        return response as Response<string>;
    }

    private triggerRefreshToken(token: string){
        setTimeout(() => {
            this.getRefreshToken(token);
        }, this.authConfigs.timeForRefreshToken *1000)
    }

    private async getRefreshToken(token:string): Promise<Response<TokenResponseModel> | undefined>{
        var response = await this.httpClient.Get(`${this.authConfigs.refreshTokenUrl}?refreshToken=${token}`);
        this.triggerRefreshToken(response.data.refreshToken);
        return response as Response<TokenResponseModel>;
    }

}