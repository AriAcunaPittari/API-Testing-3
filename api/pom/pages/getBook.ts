import { APIRequestContext } from "playwright-core";

export class GetBooks {
    request: APIRequestContext;

    constructor(request: APIRequestContext) {
      this.request = request;
    }
    async getBooks(json:boolean = false) {
      const requestURL = await process.env.URL_HOME!;
      const response = await this.request.get(requestURL);
      if(json===true){
        const getBooksList = await response.json();
        console.log(response.json());
        return getBooksList;
        
      }else{
        return response;
      }
  
    }
}