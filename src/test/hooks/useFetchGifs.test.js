import "@testing-library/jest-dom";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("pruebas a useFetchGifs", () => {
  const category = "Goku";

  test("pruebas de retornar le estado inicial", async() => {
    const {result, waitForNextUpdate } = renderHook(()=>useFetchGifs(category))
    const { data, loadind } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loadind).toBe(true);
  });

  test("pruebas de retornar un arreglo de imagenes y el loading en false", async() => {
    const {result, waitForNextUpdate } = renderHook(()=>useFetchGifs(category))
    await waitForNextUpdate();
    const { data, loadind } = result.current;
    expect(data.length).toBe(10);
    expect(loadind).toBe(false);
  });
});
