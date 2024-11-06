import { APIRequestContext, APIResponse, expect } from '@playwright/test';

export class CheckPostCharacter {
    request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request = request;
  }
  async postCharacterChecker(returnData: APIResponse) {
    await expect(returnData).toBeOK();
  }
}