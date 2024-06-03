
import axios, { AxiosResponse } from 'axios';
import { Response } from '../models/Response';

class HttpClient {
    private readonly instance: any;
    constructor(baseURL: string) {
        this.instance = axios.create({ baseURL })
    }

    public async Get(url: string): Promise<any> {
        try {
            const response: AxiosResponse<any> = await this.instance.get(url)
            return response.data
        } catch (error) {
            console.error(error)
        }

    }

    public async Delete(url: string): Promise<any> {
        try {
            const response: AxiosResponse<any> = await this.instance.delete(url);
            return response.data;
        } catch (error) {
            console.error(error)
        }

    }

    public async Post(url: string, data: any): Promise<any> {
        try {
            const response: AxiosResponse<any> = await this.instance.post(url, data);
            return response.data;
        }
        catch (error) {
            console.error(error)
        }
    }

    public async Put(url: string, data: any): Promise<any> {
        try {
            const response: AxiosResponse<any> = await this.instance.put(url, data);
            return response.data;
        } catch (error) {
            console.error(error)
        }
    }
}

export default HttpClient;