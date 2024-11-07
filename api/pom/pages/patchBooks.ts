import { APIRequestContext } from "playwright-core";

export class PatchABook {
  request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }
  async patchABook(
    updatePayload: { description: string },
    json: boolean = false
  ) {
    const requestURL = await process.env.URL_BOOK!;
    const response = await this.request.patch(requestURL, {
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
