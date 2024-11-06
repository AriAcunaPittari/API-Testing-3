import { APIRequestContext, APIResponse, expect } from "@playwright/test";

export class CheckNegative {
  request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request = request;
  }
  async negativeCheck(returnData: APIResponse) {
    await expect(returnData.status()).toBe(400);
  }
}
