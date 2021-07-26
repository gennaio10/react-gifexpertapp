import React from "react";
import "@testing-library/jest-dom";
import { GifGrid } from "../../components/GifGrid";
import { shallow } from "enzyme";

// simula que se ejecuto y se controla la informacion que se supone va a responder
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas da <GifGrid />", () => {
  const category = "Goku";

  test("debe de mostrar el componenete correctamente", () => {
    useFetchGifs.mockReturnValue({ data: [], loadind: true });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar items cuando se cargan imagenes useFetchGifs", () => {
    // hacer como si hubiera pasado por el custom hook y hubiera decuelto informacion
    const gifs = [
      {
        id: "ABC",
        title: "https://localhost/algo.jpg",
        url: "Un titulo",
      },
      {
        id: "ABC123",
        title: "https://localhost/algo.jpg",
        url: "Un titulo",
      },
    ];
    useFetchGifs.mockReturnValue({ data: gifs, loadind: false });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
