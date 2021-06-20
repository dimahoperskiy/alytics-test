import React from "react"
import style from "./Table.module.css";
import arrow from "../img/arrow.png";

const Arrow = (props) => {
    return (
        <>
            {props.is ?
                <img
                    className={`${style.arrow} ${style.activeArrow} ${props.order === "asc" ? style.up : style.down}`}
                    src={arrow} alt=""/> :
                <img className={style.arrow} src={arrow} alt=""/>}
        </>
    )
}

export default Arrow