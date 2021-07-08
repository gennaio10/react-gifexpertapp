import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({ data: [], loadind: true });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({ data: imgs, loadind: false });
    });
  }, [category]);

  return state;
};
