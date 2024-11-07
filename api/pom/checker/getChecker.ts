import { APIRequestContext, APIResponse, expect } from "@playwright/test";

export class CheckGet {
  request: APIRequestContext;
  statusNotFound: number;
  constructor(request: APIRequestContext) {
    this.request = request;
  }
  async positiveCheck(returnData: APIResponse) {
    await expect(returnData).toBeOK();
  }
}
