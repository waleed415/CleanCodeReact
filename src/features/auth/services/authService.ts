import HttpClient from "../../../utils/httpClient";
import { AuthConfigs } from "../models/AuthConfigs";
import { TokenRequestModel } from "../models/TokenRequestModel";
import { TokenResponseModel } from "../models/TokenResponseModel";
import { RegisterModel } from "../models/RegisterModel";
import { Response } from "../../../models/Response";
import { getEnvVar } from "../../../utils/envUtil";


export class AuthService {

    private httpClient: HttpClient
    private authConfigs: AuthConfigs

    constructor(baseUrl?: string, authConfigs?: AuthConfigs) {
        if (baseUrl)
            this.httpClient = new HttpClient(baseUrl);
        else
            this.httpClient = new HttpClient(getEnvVar('API_BASE_URL'));
        if (authConfigs)
            this.authConfigs = authConfigs;
        else
            this.authConfigs = {
                tokenUrl: getEnvVar('AUTH_TOKEN'),
                forgotPasswordUrl: getEnvVar('AUTH_FORGOT_PASSWORD'),
                refreshTokenUrl: getEnvVar('AUTH_REFRESH'),
                registerUrl: getEnvVar('AUTH_REGISTER'),
                resetPasswordUrl:getEnvVar('AUTH_RESET_PASSWORD'),
            };
    }

    public async getToken(model: TokenRequestModel): Promise<Response<TokenResponseModel> | undefined> {
        var response = await this.httpClient.Post(this.authConfigs.tokenUrl, model);
        return response as Response<TokenResponseModel>;
    }

    public async register(model: RegisterModel): Promise<Response<string> | undefined> {
        var response = await this.httpClient.Post(this.authConfigs.registerUrl, model);
        return response as Response<string>;
    }

    public async getRefreshToken(token: string): Promise<Response<TokenResponseModel> | undefined> {
        var response = await this.httpClient.Get(`${this.authConfigs.refreshTokenUrl}?refreshToken=${token}`);
        return response as Response<TokenResponseModel>;
    }

    public async forgetPassword(email:string): Promise<Response<string>>{
        var response = await this.httpClient.Get(`${this.authConfigs.forgotPasswordUrl}?email=${email}`);
        return response as Response<string>;
    }

}