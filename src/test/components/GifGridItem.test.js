import React from "react";
import "@testing-library/jest-dom";
import { GifGridItem} from "../../components/GifGridItem";
import { shallow } from "enzyme";

describe("Pruebas de <GifGridItem />)", () => {
  const title = "Un titulo";
  const url = "https://localhost/algo.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test(" debe mostrar el componenete correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test(" debe de tener un parrafo con el titulo enviado", () => {
    const textoParrafo = wrapper.find('#ptitle');
    expect(textoParrafo.text()).toBe(title);
  });

  test(" debe de tener un img con la url y alt enviados", () => {
    const urlImg = wrapper.find('#isrc');
    expect(urlImg.props().src).toBe(url);
    expect(urlImg.props().alt).toBe(title);
  });

  test(" debe de tener un img con la url y alt enviados", () => {
    const urlImg = wrapper.find('#dimg');
    const claseBuscada = 'animate__bounce';
    expect(urlImg.props().className.includes(claseBuscada)).toBe(true);
  });

});
