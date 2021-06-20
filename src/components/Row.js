import React, {useState, useEffect} from "react";
import style from "./Table.module.css";
import plus from "../img/plus.png"
import minus from "../img/minus.png"


const Row = (props) => {
    useEffect(() => {
        if (props.clicked) setIsActive(false)
    }, [props.clicked])

    const [isActive, setIsActive] = useState(false)

    let list

    if (props.type === "Группа") {
        list = props.sources.map(el => {
            return (
                <Row {...el} img={el.img? el.img : props.img}/>
            )
        })
    } else list = ""

    let action = () => {
        props.setClicked(false)
        setIsActive(!isActive)
    }

    return (
        <>
            <div className={`${style.row} ${isActive? style.gray: ""}`}>
                <div className={`${style.col} ${style.source}`}>
                    {props.type === "Группа"?
                        <img className={style.plus} src={isActive? minus : plus} onClick={action} alt=""/> :
                        <p/>
                    }
                    <img src={props.img} alt=""/>
                    <div className={style.info}>
                        <p className={style.name}>{props.name}</p>
                        <p className={style.description}>{props.description}</p>
                    </div>
                    {props.type === "Платная реклама"?
                        <span className={style.circle}/>:
                        ""}
                </div>
                <div className={style.col}>
                    <span>{props.show? props.show: "-"}</span>
                    <span>{props.clicks}</span>
                    <span>{props.seances}</span>
                    <span>{props.ctr? props.ctr: "-"}</span>
                    <span>{props.price}</span>
                    <span>{props.spent}</span>
                </div>
                <div className={style.col}>
                    <span className={style.linked}>{props.amountSold}</span>
                    <span>{props.cpaSold}</span>
                    <span>{props.earnings}</span>
                </div>
                <div className={style.col}>
                    <span>{props.amountGoal}</span>
                    <span>{props.cpaGoal}</span>
                    <span>{props.cr}</span>
                </div>
            </div>
            <div className={`${style.children} ${isActive? style.active : ""}`}>
                {list}
            </div>
        </>

    )
}

export default Row