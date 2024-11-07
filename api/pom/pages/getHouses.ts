import { APIRequestContext } from "playwright-core";


export class GetHouses {
    request: APIRequestContext;


    constructor(request: APIRequestContext) {
      this.request = request;
    }
    async getHouses(json:boolean = false) {
      const requestURL = await process.env.URL_HOUSESLIST!;
      const response = await this.request.get(requestURL);
      if(json===true){
        const getHousesList = await response.json();
        console.log(response.json());
        return getHousesList;
        
      }else{
        return response;
      }
    }
}
