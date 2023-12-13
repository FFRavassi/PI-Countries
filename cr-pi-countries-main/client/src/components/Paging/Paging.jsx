import React from "react";

import style from "./Paging.module.css";

function Paging() {
  return (
    <div className={style.container}>
      <li>
        <a href="#">Prev</a>
      </li>
      <li>
        <a href="#">1</a>
      </li>
      <li>
        <a href="#">2</a>
      </li>
      <li>
        <a href="#">3</a>
      </li>
      <li>
        <a href="#">4</a>
      </li>
      <li>
        <a href="#">5</a>
      </li>
      <li>
        <a href="#">Next</a>
      </li>
    </div>
  );
}

export default Paging;
