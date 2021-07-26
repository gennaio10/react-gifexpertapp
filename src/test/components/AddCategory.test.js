import React from "react";
import "@testing-library/jest-dom";
import { AddCategory } from "../../components/AddCategory";
import { shallow } from "enzyme";

describe("Pruebas de <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  const value = "Texto de prueba";

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar el texto de la caja de texto", () => {
    const icategoria = wrapper.find("#icategoria");
    icategoria.simulate("change", { target: { value } });
    expect(wrapper).toMatchSnapshot();
  });

  test("No debe postear la informacion onSubmit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    // Se espera no se llame la funcion "setCategories"
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe llamar a setCategories y limpiar la caja de texto", () => {
    const icategoria = wrapper.find("#icategoria");
    icategoria.simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    // Se espera se llame la funcion "setCategories"
    expect(setCategories).toHaveBeenCalled();

    // Se espera se halla llamado "setCategories" solo una vez
    expect(setCategories).toHaveBeenCalledTimes(1);

    // Se espera se llame la funcion "setCategories" con una funcion como parametro
    // ASI ESTA OK    setCategories((categoriesE) => [inputValue, ...categoriesE]);
    // ASI ESTA MAL   setCategories(12323233);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    // el valor del input debe estar limpio
    expect(wrapper.find("#icategoria").props().value).toBe('');
  });
});
