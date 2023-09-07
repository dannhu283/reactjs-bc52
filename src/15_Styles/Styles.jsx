import React from "react";
import cn from "classnames";

//import file css
import "./Style.css";

//import css module
import styles from "./styles.module.css";

//import scss module
import styleSCSS from "./Style.module.scss";

import { Title } from "./Style.js";

export default function Styles() {
  return (
    <div>
      <h1 className="title">CSS</h1>
      <h1 className={cn(styles.title, "alert alert-danger")}> CSS module</h1>
      <h1 className={styleSCSS.title}>SCSS module</h1>
      <Title color="green" bg="aqua">
        Css in js
      </Title>
    </div>
  );
}
