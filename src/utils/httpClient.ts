
import axios, { AxiosError, AxiosResponse } from 'axios';
import { getPersistedToken, isUserLoggedin, setLoginState, setLogout } from './authUtil';

class HttpClient {
    private readonly instance: any;
    constructor(baseURL: string) {
        this.instance = axios.create({ baseURL })
        this.RefreshTokenInterceptor();
        this.TokenInterceptor();
    }

    public async Get(url: string): Promise<any> {
        try {
            const response: AxiosResponse<any> = await this.instance.get(url)
            return response.data
        } catch (error) {
            this.HandleError(error as AxiosError);
        }

    }

    public async Delete(url: string): Promise<any> {
        try {
            const response: AxiosResponse<any> = await this.instance.delete(url);
            return response.data;
        } catch (error) {
            this.HandleError(error as AxiosError);
        }

    }

    public async Post(url: string, data: any): Promise<any> {
        try {
            const response: AxiosResponse<any> = await this.instance.post(url, data);
            return response.data;
        }
        catch (error) {
            this.HandleError(error as AxiosError);
        }
    }

    public async Put(url: string, data: any): Promise<any> {
        try {
            const response: AxiosResponse<any> = await this.instance.put(url, data);
            return response.data;
        } catch (error) {
            this.HandleError(error as AxiosError);
        }
    }

    private HandleError(error: AxiosError) {
        if (error.response?.status === 400)
            this.handleBadRequest(error.response.data)
        if (error.response?.status === 401)
            this.handleUnAuthorizedRequest(error.response.data)
    }

    private handleBadRequest(error: any) {
        alert(error.message)
    }

    private handleUnAuthorizedRequest(error: any) {
        alert(error.message)
    }

    private TokenInterceptor() {
        if (isUserLoggedin()) {
            const accessToken = getPersistedToken();
            this.instance.interceptors.request.use(
                (config: any) => {
                    if (accessToken) {
                        config.headers.Authorization = `Bearer ${accessToken.token}`;
                    }
                    return config;
                },
                (error: any) => Promise.reject(error)
            );
        }

    }
    private RefreshTokenInterceptor() {
        this.instance.interceptors.response.use(
            (response: any) => response,
            async (error: any) => {
                const originalRequest = error.config;
                if (error.response?.status === 401 && !originalRequest._retry) {
                    const refreshToken = getPersistedToken()?.refreshToken;
                    if (refreshToken) {
                        const response = await this.instance.get(`Auth/refresh?refreshToken=${refreshToken}`)
                        originalRequest._retry = true;
                        if (response) {
                            setLoginState(response)
                            return this.instance(originalRequest);
                        }
                        else
                            setLogout();
                    }
                }
                return Promise.reject(error);
            }
        );
    }
}

export default HttpClient;