import { test } from "@playwright/test";
import { ApiManager } from "./pom/apiManager";
import * as schemaInfo from "./pom/schemas/apiSchemas";
import { validateSchema } from "../utils/schemaValidator";

const schema = new schemaInfo.Schemas();
let apiManager: ApiManager;

test.describe("Ejemplo de tests", () => {
  test(
    "Get: Spells List",
    {
      tag: "@Get",
    },
    async ({ request }) => {
      apiManager = new ApiManager(request);
      const getBookList = await apiManager.getSpells();
      const returnData = await getBookList.getSpellsList(false);
      await apiManager.checkerGet.positiveCheck(returnData);
      console.log("Return Data:", returnData);
      await validateSchema(false, returnData, schema.spellsList);
    }
  );
  test(
    "Get: Search BookList",
    {
      tag: "@Get",
    },
    async ({ request }) => {
      apiManager = new ApiManager(request);
      const getBookList = await apiManager.getBooksLists();
      const returnData = await getBookList.getBooks(false);
      await apiManager.checkerGet.positiveCheck(returnData);
      console.log("Return Data:", returnData);
      await validateSchema(false, returnData, schema.booksList);
    }
  );
  test(
    "Get: Cast an existing Spell but Random",
    {
      tag: "@Get",
    },
    async ({ request }) => {
      apiManager = new ApiManager(request);
      const getBookList = await apiManager.getSpells();
      const returnData = await getBookList.getRandomSpell(false);
      await apiManager.checkerGet.positiveCheck(returnData);
      console.log("Return Data:", returnData);
      await validateSchema(false, returnData, schema.spells);
    }
  );
  test(
    "Get: 1 Character",
    {
      tag: "@Get",
    },
    async ({ request }) => {
      apiManager = new ApiManager(request);
      const characterSelected = apiManager.getACharacter();
      const checkcharacterok = apiManager.getChecker();
      const returnData = await characterSelected.selectCharacter(false);
      console.log(returnData);
      await checkcharacterok.positiveCheck(returnData);
      //Lo deje como "List" porque por mas que encuentra 1 objeto el mismo esta dentro de un array
      await validateSchema(false, returnData, schema.charactersList);
    }
  );
  test(
    "Get: Houses List",
    {
      tag: "@Get",
    },
    async ({ request }) => {
      apiManager = new ApiManager(request);
      const getBookList = await apiManager.getHousesList();
      const returnData = await getBookList.getHouses(false);
      await apiManager.checkerGet.positiveCheck(returnData);
      console.log("Return Data:", returnData);
      await validateSchema(false, returnData, schema.housesList);
    }
  );
  test(
    "POST: new character",
    {
      tag: "@Post",
    },
    async ({ request }) => {
      apiManager = new ApiManager(request);
      const createNew = await apiManager.getpostCharacter();
      const postCheck = await apiManager.getcheckNegative();
      const createPayLoad = {
        fullName: "Ariana Anahi Pittari",
      };
      const returnData = await createNew.postCharacter(createPayLoad);
      await postCheck.negativeCheck(returnData);
    }
  );
  test(
    "DELETE: character",
    {
      tag: "@Delete",
    },
    async ({ request }) => {
      apiManager = new ApiManager(request);
      const deleteCharacter = await apiManager.getdeleteCharacter();
      const deleteCharacterChecker = await apiManager.getcheckNegative();
      const deletePayload = {
        nickname: "Hermione",
        hogwartsHouse: "Gryffindor",
      };

      const returnData = await deleteCharacter.deleteCharacter(deletePayload);
      await deleteCharacterChecker.negativeCheck(returnData);
    }
  );
  test(
    "PATCH: Update a Book",
    {
      tag: "@Patch",
    },
    async ({ request }) => {
      apiManager = new ApiManager(request);
      const updateBook = await apiManager.getpatchABook();
      const updateBookChecker = await apiManager.getcheckNegative();
      const updatePayload = {
        description:
          "Alto libro, el mejor de la historia. Nada mas que agregar",
      };
      const returnData = await updateBook.patchABook(updatePayload, false);
      await updateBookChecker.negativeCheck(returnData);
    }
  );
  test(
    "PUT: Update a Book",
    {
      tag: "@Put",
    },
    async ({ request }) => {
      apiManager = new ApiManager(request);
      const updateBook = await apiManager.getputBook();
      const updateBookChecker = await apiManager.getcheckNegative();
      const updatePayload = {
        title: "Las aventuras de HarryPotter 4",
      };
      const returnData = await updateBook.putBook(updatePayload, false);
      await updateBookChecker.negativeCheck(returnData);
    }
  );
});
