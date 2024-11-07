import { APIRequestContext } from "playwright-core";


export class GetSpells {
    request: APIRequestContext;


    constructor(request: APIRequestContext) {
      this.request = request;
    }
    async getRandomSpell(json:boolean = false) {
      const requestURL = await process.env.URL_RANDOM_SPELLS!;
      const response = await this.request.get(requestURL);
      if(json===true){
        const getASpell = await response.json();
        console.log(response.json());
        return getASpell;
        
      }else{
        return response;
      }

    }
}
