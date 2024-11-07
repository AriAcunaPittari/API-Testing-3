import { APIRequestContext } from "playwright-core";

export class DeleteCharacter {
  request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }
  async deleteCharacter(deletePayload: {
    nickname: string;
    hogwartsHouse: string;
  }) {
    const requestURL = await process.env.URL_CHARACTER!;
    const response = await this.request.patch(requestURL, {
      data: deletePayload,
    });
    return response;
  }
}
