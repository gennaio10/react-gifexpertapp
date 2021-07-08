
import React from "react";
import '@testing-library/jest-dom';
import GifExpertApp from "../GifExpertApp";
import { shallow } from "enzyme";

describe("Pruebas de <GifExpertApp />)", () => { 

  test(' debe mostrar el componenete correctamente', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

});
