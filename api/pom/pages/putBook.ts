import { APIRequestContext, APIResponse, expect } from '@playwright/test';

export class CheckPutCharacter {
    request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request = request;
  }
  async negativeCheck(returnData: APIResponse) {
    await expect(returnData.status()).toBe(400);
  }
}