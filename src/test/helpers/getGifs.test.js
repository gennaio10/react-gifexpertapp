import { getGifs } from "../../helpers/getGifs";

describe("Pruebas con getGifs", () => {

  test("debe retornar 10 elementos", async () => {
    const gifList = await getGifs("Evergarden");
    expect(gifList.length).toBe(10);
  });

  test("No debe retornar nada", async () => {
    const gifList = await getGifs('');
    expect(gifList.length).toBe(0);
  });

});
