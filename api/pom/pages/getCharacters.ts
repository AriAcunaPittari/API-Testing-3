import { APIRequestContext } from "playwright-core";


export class GetCharacter {
    request: APIRequestContext;


    constructor(request: APIRequestContext) {
      this.request = request;
    }
    async selectCharacter(json:boolean = false) {
      const requestURL = await process.env.URL_HOME!;
      const response = await this.request.get(requestURL);
      if(json===true){
        const getCharacter = await response.json();
        console.log(response.json());
        return getCharacter;
        
      }else{
        return response;
      

    }
}
