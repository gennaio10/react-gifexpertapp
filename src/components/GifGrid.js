import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data:imagenes, loadind } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loadind && <p>Loading...</p>}
      <div className="card-grid">
        {imagenes.map((imagenConUrl) => (
          <GifGridItem key={imagenConUrl.id} {...imagenConUrl} />
        ))}
      </div>
    </>
  );
};
