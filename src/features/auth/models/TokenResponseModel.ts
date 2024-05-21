

export interface TokenResponseModel{
    token: string;
    refreshToken:string;
    name: string;
    roles:Array<string>;
}