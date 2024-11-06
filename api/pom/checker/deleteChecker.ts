import { APIRequestContext, APIResponse, expect } from "@playwright/test";

export class CheckDelete {
  request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request = request;
  }
  async negativeCheck(returnData: APIResponse) {
    await expect(returnData.status()).toBe(400);
  }
}
