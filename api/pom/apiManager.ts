import { APIRequestContext } from "@playwright/test";
import { GetBooks } from "./pages/getBook";
import { CheckGet } from "./checker/getChecker";


export class ApiManager {
  request: APIRequestContext;
  getBookList: GetBooks;
  checkerGet: CheckGet;


  constructor(request: APIRequestContext) {
    this.request = request;
    this.getBookList = new GetBooks(this.request);
    this.checkerGet = new CheckGet(this.request);
  }
  getBooksList() {
    return this.getBookList;
  }
  getChecker() {
    return this.checkerGet;
  }
}