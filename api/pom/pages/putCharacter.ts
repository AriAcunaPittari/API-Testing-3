import { APIRequestContext } from "playwright-core";

export class PutBook {
  request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }
  async putBook(updatePayload: { title: string }, json: boolean = false) {
    const requestURL = await process.env.URL_BOOK!;
    const response = await this.request.put(requestURL, {
      data: updatePayload,
    });

    if (json === true) {
      const patchUpdateBook = await response.json();
      return patchUpdateBook;
    } else {
      return response;
    }
  }
}
