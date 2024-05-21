import HttpClient from "../utils/httpClient";
import { Response } from '../models/Response';
import { Filter } from "../models/Filter";

class BaseHttpService<T> {

    private httpClient: HttpClient;
    protected apiUrl: string;
    constructor(baseUrl: string, apiUrl: string) {
        this.httpClient = new HttpClient(baseUrl)
        this.apiUrl = apiUrl;
    }

    public async getAll(pageNumber: number, pageSize: number, filters: Array<Filter>): Promise<Response<Array<T>> | undefined> {
        let filterQueryString = '';
        let url = `${this.apiUrl}?pagesize=${pageSize}&pagenumber=${pageNumber}`
        for (let i = 0; i < filters.length; i++) {
            filterQueryString += `&filters[${i}].key=${filters[i].key}&filters[${i}].value=${filters[i].value}&filters[${i}].operator=${filters[i].operator}&filters[${i}].postOperator=${filters[i].postOperator}`
        }
        if(filterQueryString)
            url = `${url}${filterQueryString}`
       return this.httpClient.Get(url)
    }

    public async getById(id: number): Promise<Response<T> | undefined> {
       return this.httpClient.Get(`${this.apiUrl}?id=${id}`)
    }

    public async Create(model:T) : Promise<Response<T>| undefined>{
        return this.httpClient.Post(this.apiUrl, model);
    }

    public async Update(id:number, model: T): Promise<Response<T>| undefined>{
        return this.httpClient.Put(`${this.apiUrl}/${id}`, model);
    }

    public async Delete(id:number): Promise<Response<T>| undefined>{
        return this.httpClient.Delete(`${this.apiUrl}/${id}`);
    }
}