import { APIRequestContext } from "@playwright/test";
import { GetBooks } from "./pages/getBook";
import { GetACharacter } from "./pages/getCharacters";
import { GetHouses } from "./pages/getHouses";
import { GetSpells } from "./pages/getSpells";
import { DeleteCharacter } from "./pages/deleteCharacter";
import { PatchABook } from "./pages/patchBooks";
import { PostCharacter } from "./pages/postCharacter";
import { PutBook } from "./pages/putCharacter";
import { CheckGet } from "./checker/getChecker";
import { NegativeChecker } from "./checker/negativeChecker";


export class ApiManager {
  request: APIRequestContext;
  getBookList: GetBooks;
  getCharacter: GetACharacter;
  getHouses: GetHouses;
  getARandomSpell: GetSpells;
  deleteCharacter: DeleteCharacter;
  patchABook: PatchABook;
  postCharacter: PostCharacter;
  putBook: PutBook;
  checkerGet: CheckGet;
  negativeChecker: NegativeChecker;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.getBookList = new GetBooks(this.request);
    this.getCharacter = new GetACharacter(this.request);
    this.getHouses = new GetHouses(this.request);
    this.getARandomSpell = new GetSpells(this.request);
    this.deleteCharacter = new DeleteCharacter(this.request);
    this.patchABook = new PatchABook(this.request);
    this.postCharacter = new PostCharacter(this.request);
    this.putBook = new PutBook(this.request);
    this.checkerGet = new CheckGet(this.request);
    this.negativeChecker = new NegativeChecker(this.request);

  }
  getBooksLists() {
    return this.getBookList;
  }
  getACharacter() {
    return this.getCharacter;
  }
  getHousesList() {
    return this.getHouses;
  }
  getRandomSpell() {
    return this.getARandomSpell;
  }
  getpostCharacter() {
    return this.postCharacter;
  }
  getdeleteCharacter() {
    return this.deleteCharacter;
  }
  getpatchABook() {
    return this.patchABook;
  }
  getputBook() {
    return this.putBook;
  }
  getChecker() {
    return this.checkerGet;
  }
  getcheckNegative() {
    return this.negativeChecker;
  }

}
