import { test } from "@playwright/test";
import { ApiManager } from "./pom/apiManager";
import * as schemaInfo from "./pom/schemas/apiSchemas"
import { validateSchema } from "../utils/schemaValidator";
import { GetCharacter } from "./pom/pages/getCharacters";
import { CheckGet } from "./pom/checker/getChecker";

const schema = new schemaInfo.Schemas();
let apiManager: ApiManager;

test.describe("Ejemplo de tests", () => {
  test
  (
    "Get: Cast an existing Spell",
    {
      tag: "@Get",
    },
    async ({ request }) => {
      apiManager = new ApiManager(request);
      const characterSelected = new GetCharacter(request);
      const chekcharacterok = new CheckGet(request);
      const returnData = await characterSelected.selectCharacter();
      await chekcharacterok.positiveCheck(returnData);


    }
  );
  test.only(
    "Get: Search BookList",
    {
      tag: "@Get",
    },
    async ({ request }) => {
      apiManager = new ApiManager(request);
      const getBookList = await apiManager.getBooksList();
      const returnData = await getBookList.getBooks(false);
      await apiManager.checkerGet.positiveCheck(returnData);
      console.log("Return Data:", returnData);
      //await validateSchema(false, returnData, schema.booksList);
    
    }
  );
  test(
    "Get: Random Spell",
    {
      tag: "@Get",
    },
    async ({ request }) => {
      apiManager = new ApiManager(request);
    }
  );
  test(
    "Get: 1 Character",
    {
      tag: "@Get",
    },
    async ({ request }) => {
      apiManager = new ApiManager(request);
    }
  );
  test(
    "Get: Houses List",
    {
      tag: "@Get",
    },
    async ({ request }) => {
      apiManager = new ApiManager(request);
    }
  );
  test(
    "POST: new character",
    {
      tag: "@Post",
    },
    async ({ request }) => {
      apiManager = new ApiManager(request);
    }
  );
  test(
    "DELETE: character",
    {
      tag: "@Delete",
    },
    async ({ request }) => {
      apiManager = new ApiManager(request);
    }
  );
  test(
    "PATCH: Update a Book",
    {
      tag: "@Patch",
    },
    async ({ request }) => {
      apiManager = new ApiManager(request);
    }
  );
  test(
    "PUT: Update a Book",
    {
      tag: "@Put",
    },
    async ({ request }) => {
      apiManager = new ApiManager(request);
    }
  );
});
