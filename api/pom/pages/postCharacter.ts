import { APIRequestContext } from "playwright-core";

export class PostCharacter {
  request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }
  async postCharacter(createPayLoad: { fullName: string }) {
    const requestURL = await process.env.URL_CHARACTER!;
    const response = await this.request.post(requestURL, {
      data: createPayLoad,
    });
    return response;
  }
}
