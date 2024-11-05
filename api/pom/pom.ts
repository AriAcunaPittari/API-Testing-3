import { APIRequestContext } from "@playwright/test";


export class SimpleBooksApiManager {
  request: APIRequestContext;


  constructor(request: APIRequestContext) {
    this.request = request;

  }
  getEjemplo() {

  }
}