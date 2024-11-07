import { APIRequestContext, APIResponse, expect } from "@playwright/test";

export class NegativeChecker {
  request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request = request;
  }
  async negativeCheck(returnData: APIResponse) {
    await expect(returnData.status()).toBe(404);
  }
}
