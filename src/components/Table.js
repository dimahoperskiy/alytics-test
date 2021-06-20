import React, {useState} from "react";
import style from "./Table.module.css"
import Row from "./Row";
import gear from "../img/gear.png"
import question from "../img/question.png"
import question1 from "../img/question1.png"
import arrow from "../img/arrow.png"
import Arrow from "./Arrow";

const Table = (props) => {
    let [list, setList] = useState(props.list)

    let [clicked, setClicked] = useState(false)

    let [isName, setIsName] = useState(false)
    let [isShow, setIsShow] = useState(false)
    let [isClicks, setIsClicks] = useState(false)
    let [isSeances, setIsSeances] = useState(false)
    let [isCtr, setIsCtr] = useState(false)
    let [isPrice, setIsPrice] = useState(false)
    let [isSpent, setIsSpent] = useState(false)
    let [isAmountSold, setIsAmountSold] = useState(false)
    let [isCpaSold, setIsCpaSold] = useState(false)
    let [isEarnings, setIsEarnings] = useState(false)
    let [isAmountGoal, setIsAmountGoal] = useState(false)
    let [isCpaGoal, setIsCpaGoal] = useState(false)
    let [isCr, setIsCr] = useState(false)

    let [nameOrder, setNameOrder] = useState("desc")
    let [showOrder, setShowOrder] = useState("desc")
    let [clicksOrder, setClicksOrder] = useState("desc")
    let [seancesOrder, setSeancesOrder] = useState("desc")
    let [ctrOrder, setCtrOrder] = useState("desc")
    let [priceOrder, setPriceOrder] = useState("desc")
    let [spentOrder, setSpentOrder] = useState("desc")
    let [amountSoldOrder, setAmountSoldOrder] = useState("desc")
    let [cpaSoldOrder, setCpaSoldOrder] = useState("desc")
    let [earningsOrder, setEarningsOrder] = useState("desc")
    let [amountGoalOrder, setAmountGoalOrder] = useState("desc")
    let [cpaGoalOrder, setCpaGoalOrder] = useState("desc")
    let [crOrder, setCrOrder] = useState("desc")

    let sortingAlg = (type, order, set) => {
        let newList = [...list]

        let sortingCallback = (a, b) => {
            switch (type) {
                case "name":
                    if (order === "asc") {
                        if (a.name > b.name) return 1
                        else if (a.name < b.name) return -1
                        else return 0
                    } else {
                        if (a.name < b.name) return 1
                        else if (a.name > b.name) return -1
                        else return 0
                    }
                case "show":
                    return order === "asc" ? a.show - b.show : b.show - a.show
                case "clicks":
                    return order === "asc" ? a.clicks - b.clicks : b.clicks - a.clicks
                case "seances":
                    return order === "asc" ? a.seances - b.seances : b.seances - a.seances
                case "ctr":
                    return order === "asc" ? a.ctr - b.ctr : b.ctr - a.ctr
                case "price":
                    return order === "asc" ? a.price - b.price : b.price - a.price
                case "spent":
                    return order === "asc" ? a.spent - b.spent : b.spent - a.spent
                case "amountSold":
                    return order === "asc" ? a.amountSold - b.amountSold : b.amountSold - a.amountSold
                case "cpaSold":
                    return order === "asc" ? a.cpaSold - b.cpaSold : b.cpaSold - a.cpaSold
                case "earnings":
                    return order === "asc" ? a.earnings - b.earnings : b.earnings - a.earnings
                case "amountGoal":
                    return order === "asc" ? a.amountGoal - b.amountGoal : b.amountGoal - a.amountGoal
                case "cpaGoal":
                    return order === "asc" ? a.cpaGoal - b.cpaGoal : b.cpaGoal - a.cpaGoal
                case "cr":
                    return order === "asc" ? a.cr - b.cr : b.cr - a.cr
                default:
                    return 0
            }
        }

        order === "asc" ? set("desc") : set("asc")

        newList = newList.sort(sortingCallback)
        newList.forEach(el => {
            if (el.sources) {
                el.sources.sort(sortingCallback)
            }
        })

        return newList
    }

    let sort = (type) => {
        setClicked(true)
        switch (type) {
            case "name":
                setIsClicks(false)
                setIsSeances(false)
                setIsCtr(false)
                setIsPrice(false)
                setIsAmountGoal(false)
                setIsAmountSold(false)
                setIsCpaGoal(false)
                setIsCpaSold(false)
                setIsCr(false)
                setIsEarnings(false)
                setIsSpent(false)
                setIsShow(false)

                setClicksOrder("desc")
                setSeancesOrder("desc")
                setCtrOrder("desc")
                setPriceOrder("desc")
                setAmountGoalOrder("desc")
                setAmountSoldOrder("desc")
                setCpaGoalOrder("desc")
                setCpaSoldOrder("desc")
                setCrOrder("desc")
                setEarningsOrder("desc")
                setSpentOrder("desc")
                setShowOrder("desc")

                setIsName(true)
                setList(sortingAlg(type, nameOrder, setNameOrder))
                break
            case "show":
                setIsClicks(false)
                setIsSeances(false)
                setIsCtr(false)
                setIsPrice(false)
                setIsAmountGoal(false)
                setIsAmountSold(false)
                setIsCpaGoal(false)
                setIsCpaSold(false)
                setIsCr(false)
                setIsEarnings(false)
                setIsSpent(false)
                setIsName(false)

                setNameOrder("desc")
                setClicksOrder("desc")
                setSeancesOrder("desc")
                setCtrOrder("desc")
                setPriceOrder("desc")
                setAmountGoalOrder("desc")
                setAmountSoldOrder("desc")
                setCpaGoalOrder("desc")
                setCpaSoldOrder("desc")
                setCrOrder("desc")
                setEarningsOrder("desc")
                setSpentOrder("desc")

                setIsShow(true)
                setList(sortingAlg(type, showOrder, setShowOrder))
                break
            case "clicks":
                setIsShow(false)
                setIsSeances(false)
                setIsCtr(false)
                setIsPrice(false)
                setIsAmountGoal(false)
                setIsAmountSold(false)
                setIsCpaGoal(false)
                setIsCpaSold(false)
                setIsCr(false)
                setIsEarnings(false)
                setIsSpent(false)
                setIsName(false)

                setNameOrder("desc")
                setShowOrder("desc")
                setSeancesOrder("desc")
                setCtrOrder("desc")
                setPriceOrder("desc")
                setAmountGoalOrder("desc")
                setAmountSoldOrder("desc")
                setCpaGoalOrder("desc")
                setCpaSoldOrder("desc")
                setCrOrder("desc")
                setEarningsOrder("desc")
                setSpentOrder("desc")

                setIsClicks(true)
                setList(sortingAlg(type, clicksOrder, setClicksOrder))
                break
            case "seances":
                setIsShow(false)
                setIsClicks(false)
                setIsCtr(false)
                setIsPrice(false)
                setIsAmountGoal(false)
                setIsAmountSold(false)
                setIsCpaGoal(false)
                setIsCpaSold(false)
                setIsCr(false)
                setIsEarnings(false)
                setIsSpent(false)
                setIsName(false)

                setNameOrder("desc")
                setClicksOrder("desc")
                setShowOrder("desc")
                setCtrOrder("desc")
                setPriceOrder("desc")
                setAmountGoalOrder("desc")
                setAmountSoldOrder("desc")
                setCpaGoalOrder("desc")
                setCpaSoldOrder("desc")
                setCrOrder("desc")
                setEarningsOrder("desc")
                setSpentOrder("desc")

                setIsSeances(true)
                setList(sortingAlg(type, seancesOrder, setSeancesOrder))
                break
            case "ctr":
                setIsShow(false)
                setIsSeances(false)
                setIsClicks(false)
                setIsPrice(false)
                setIsAmountGoal(false)
                setIsAmountSold(false)
                setIsCpaGoal(false)
                setIsCpaSold(false)
                setIsCr(false)
                setIsEarnings(false)
                setIsSpent(false)
                setIsName(false)

                setNameOrder("desc")
                setClicksOrder("desc")
                setSeancesOrder("desc")
                setShowOrder("desc")
                setPriceOrder("desc")
                setAmountGoalOrder("desc")
                setAmountSoldOrder("desc")
                setCpaGoalOrder("desc")
                setCpaSoldOrder("desc")
                setCrOrder("desc")
                setEarningsOrder("desc")
                setSpentOrder("desc")

                setIsCtr(true)
                setList(sortingAlg(type, ctrOrder, setCtrOrder))
                break
            case "price":
                setIsShow(false)
                setIsSeances(false)
                setIsCtr(false)
                setIsClicks(false)
                setIsAmountGoal(false)
                setIsAmountSold(false)
                setIsCpaGoal(false)
                setIsCpaSold(false)
                setIsCr(false)
                setIsEarnings(false)
                setIsSpent(false)
                setIsName(false)

                setNameOrder("desc")
                setClicksOrder("desc")
                setSeancesOrder("desc")
                setCtrOrder("desc")
                setShowOrder("desc")
                setAmountGoalOrder("desc")
                setAmountSoldOrder("desc")
                setCpaGoalOrder("desc")
                setCpaSoldOrder("desc")
                setCrOrder("desc")
                setEarningsOrder("desc")
                setSpentOrder("desc")

                setIsPrice(true)
                setList(sortingAlg(type, priceOrder, setPriceOrder))
                break
            case "spent":
                setIsShow(false)
                setIsSeances(false)
                setIsCtr(false)
                setIsClicks(false)
                setIsAmountGoal(false)
                setIsAmountSold(false)
                setIsCpaGoal(false)
                setIsCpaSold(false)
                setIsCr(false)
                setIsEarnings(false)
                setIsPrice(false)
                setIsName(false)

                setNameOrder("desc")
                setClicksOrder("desc")
                setSeancesOrder("desc")
                setCtrOrder("desc")
                setShowOrder("desc")
                setAmountGoalOrder("desc")
                setAmountSoldOrder("desc")
                setCpaGoalOrder("desc")
                setCpaSoldOrder("desc")
                setCrOrder("desc")
                setEarningsOrder("desc")
                setPriceOrder("desc")

                setIsSpent(true)
                setList(sortingAlg(type, spentOrder, setSpentOrder))
                break
            case "amountSold":
                setIsShow(false)
                setIsSeances(false)
                setIsCtr(false)
                setIsClicks(false)
                setIsAmountGoal(false)
                setIsSpent(false)
                setIsCpaGoal(false)
                setIsCpaSold(false)
                setIsCr(false)
                setIsEarnings(false)
                setIsPrice(false)
                setIsName(false)

                setNameOrder("desc")
                setClicksOrder("desc")
                setSeancesOrder("desc")
                setCtrOrder("desc")
                setShowOrder("desc")
                setAmountGoalOrder("desc")
                setSpentOrder("desc")
                setCpaGoalOrder("desc")
                setCpaSoldOrder("desc")
                setCrOrder("desc")
                setEarningsOrder("desc")
                setPriceOrder("desc")

                setIsAmountSold(true)
                setList(sortingAlg(type, amountSoldOrder, setAmountSoldOrder))
                break
            case "cpaSold":
                setIsShow(false)
                setIsSeances(false)
                setIsCtr(false)
                setIsClicks(false)
                setIsAmountGoal(false)
                setIsSpent(false)
                setIsCpaGoal(false)
                setIsAmountSold(false)
                setIsCr(false)
                setIsEarnings(false)
                setIsPrice(false)
                setIsName(false)

                setNameOrder("desc")
                setClicksOrder("desc")
                setSeancesOrder("desc")
                setCtrOrder("desc")
                setShowOrder("desc")
                setAmountGoalOrder("desc")
                setSpentOrder("desc")
                setCpaGoalOrder("desc")
                setAmountSoldOrder("desc")
                setCrOrder("desc")
                setEarningsOrder("desc")
                setPriceOrder("desc")

                setIsCpaSold(true)
                setList(sortingAlg(type, cpaSoldOrder, setCpaSoldOrder))
                break
            case "earnings":
                setIsShow(false)
                setIsSeances(false)
                setIsCtr(false)
                setIsClicks(false)
                setIsAmountGoal(false)
                setIsSpent(false)
                setIsCpaGoal(false)
                setIsAmountSold(false)
                setIsCr(false)
                setIsCpaSold(false)
                setIsPrice(false)
                setIsName(false)

                setNameOrder("desc")
                setClicksOrder("desc")
                setSeancesOrder("desc")
                setCtrOrder("desc")
                setShowOrder("desc")
                setAmountGoalOrder("desc")
                setSpentOrder("desc")
                setCpaGoalOrder("desc")
                setAmountSoldOrder("desc")
                setCrOrder("desc")
                setCpaSoldOrder("desc")
                setPriceOrder("desc")

                setIsEarnings(true)
                setList(sortingAlg(type, earningsOrder, setEarningsOrder))
                break
            case "amountGoal":
                setIsShow(false)
                setIsSeances(false)
                setIsCtr(false)
                setIsClicks(false)
                setIsEarnings(false)
                setIsSpent(false)
                setIsCpaGoal(false)
                setIsAmountSold(false)
                setIsCr(false)
                setIsCpaSold(false)
                setIsPrice(false)
                setIsName(false)

                setNameOrder("desc")
                setClicksOrder("desc")
                setSeancesOrder("desc")
                setCtrOrder("desc")
                setShowOrder("desc")
                setEarningsOrder("desc")
                setSpentOrder("desc")
                setCpaGoalOrder("desc")
                setAmountSoldOrder("desc")
                setCrOrder("desc")
                setCpaSoldOrder("desc")
                setPriceOrder("desc")

                setIsAmountGoal(true)
                setList(sortingAlg(type, amountGoalOrder, setAmountGoalOrder))
                break
            case "cpaGoal":
                setIsShow(false)
                setIsSeances(false)
                setIsCtr(false)
                setIsClicks(false)
                setIsEarnings(false)
                setIsSpent(false)
                setIsAmountGoal(false)
                setIsAmountSold(false)
                setIsCr(false)
                setIsCpaSold(false)
                setIsPrice(false)
                setIsName(false)

                setNameOrder("desc")
                setClicksOrder("desc")
                setSeancesOrder("desc")
                setCtrOrder("desc")
                setShowOrder("desc")
                setEarningsOrder("desc")
                setSpentOrder("desc")
                setAmountGoalOrder("desc")
                setAmountSoldOrder("desc")
                setCrOrder("desc")
                setCpaSoldOrder("desc")
                setPriceOrder("desc")

                setIsCpaGoal(true)
                setList(sortingAlg(type, cpaGoalOrder, setCpaGoalOrder))
                break
            case "cr":
                setIsShow(false)
                setIsSeances(false)
                setIsCtr(false)
                setIsClicks(false)
                setIsEarnings(false)
                setIsSpent(false)
                setIsAmountGoal(false)
                setIsAmountSold(false)
                setIsCpaGoal(false)
                setIsCpaSold(false)
                setIsPrice(false)
                setIsName(false)

                setNameOrder("desc")
                setClicksOrder("desc")
                setSeancesOrder("desc")
                setCtrOrder("desc")
                setShowOrder("desc")
                setEarningsOrder("desc")
                setSpentOrder("desc")
                setAmountGoalOrder("desc")
                setAmountSoldOrder("desc")
                setCpaGoalOrder("desc")
                setCpaSoldOrder("desc")
                setPriceOrder("desc")

                setIsCr(true)
                setList(sortingAlg(type, crOrder, setCrOrder))
                break
            default:
                return 0
        }
    }

    let elemList = list.map(el => <Row {...el} clicked={clicked} setClicked={setClicked}/>)

    return (
        <div className={style.wrapper}>
            <div className={style.table}>
                <div className={style.row}>
                    <div className={style.col}>
                        <p>Источники трафика</p>
                    </div>
                    <div className={style.col}>
                        <p>Трафик</p>
                        <div className={style.icons}>
                            <img src={gear} alt=""/>
                            <img src={question} alt=""/>
                        </div>
                    </div>
                    <div className={style.col}>
                        <div className={style.upper}>
                            <img src="https://testing1.alytics.ru/images/multichannel/crm.png" alt=""/>
                            <p>Продажи</p>
                        </div>
                        <div className={style.upper}>
                            <img src="https://testing1.alytics.ru/images/goal_models/png/model_linear.png" alt=""/>
                            <p className={style.smallLabel}>Линейная модель</p>
                        </div>
                        <div className={style.icons}>
                            <img src={gear} alt=""/>
                            <img src={question} alt=""/>
                        </div>
                    </div>
                    <div className={style.col}>
                        <div className={style.upper}>
                            <img src="https://testing1.alytics.ru/images/multichannel/composite.png" alt=""/>
                            <p>Цель с осн. GA</p>
                        </div>
                        <div className={style.upper}>
                            <img src="https://testing1.alytics.ru/images/goal_models/png/composite.png" alt=""/>
                            <p className={style.smallLabel}>Составная цель</p>
                        </div>
                        <div className={style.icons}>
                            <img src={gear} alt=""/>
                            <img src={question} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col}>
                        <span onClick={() => sort("name")}>Название</span>
                        <Arrow is={isName} order={nameOrder}/>
                    </div>
                    <div className={style.col}>
                        <span className={style.divQuestion}>
                            <span onClick={() => sort("show")}>Показы</span>
                            <img src={question1} alt=""/>
                        </span>
                        <Arrow is={isShow} order={showOrder}/>
                        <span onClick={() => sort("clicks")}>Клики</span>
                        <Arrow is={isClicks} order={clicksOrder}/>
                        <span onClick={() => sort("seances")}>Сеансы</span>
                        <Arrow is={isSeances} order={seancesOrder}/>
                        <span onClick={() => sort("ctr")} className={style.divQuestion}>
                            <span>CTR, %</span>
                            <img src={question1} alt=""/>
                        </span>
                        <Arrow is={isCtr} order={ctrOrder}/>
                        <span onClick={() => sort("price")}>Цена клика</span>
                        <Arrow is={isPrice} order={priceOrder}/>
                        <span onClick={() => sort("spent")} className={style.settings}>
                            <p>Затраты</p>
                            <div>
                                <p>Настроить</p>
                                <img src={question1} alt=""/>
                            </div>
                        </span>
                        <Arrow is={isSpent} order={spentOrder}/>
                    </div>
                    <div className={style.col}>
                        <span onClick={() => sort("amountSold")}>Кол-во</span>
                        <Arrow is={isAmountSold} order={amountSoldOrder}/>
                        <span onClick={() => sort("cpaSold")}>СРА</span>
                        <Arrow is={isCpaSold} order={cpaSoldOrder}/>
                        <span onClick={() => sort("earnings")}>Выручка</span>
                        <Arrow is={isEarnings} order={earningsOrder}/>
                    </div>
                    <div className={style.col}>
                        <span onClick={() => sort("amountGoal")}>Кол-во</span>
                        <Arrow is={isAmountGoal} order={amountGoalOrder}/>
                        <span onClick={() => sort("cpaGoal")}>СРА</span>
                        <Arrow is={isCpaGoal} order={cpaGoalOrder}/>
                        <span onClick={() => sort("cr")}>CR, %</span>
                        <Arrow is={isCr} order={crOrder}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col}>
                        <p>Итого</p>
                    </div>
                    <div className={style.col}>
                        <span>{props.overall.show ? props.overall.show : "-"}</span>
                        <span>{props.overall.clicks}</span>
                        <span>{props.overall.seances}</span>
                        <span>{props.overall.ctr ? props.overall.ctr : "-"}</span>
                        <span>{props.overall.price}</span>
                        <span>{props.overall.spent}</span>
                    </div>
                    <div className={style.col}>
                        <span className={style.linked}>{props.overall.amountSold}</span>
                        <span>{props.overall.cpaSold}</span>
                        <span>{props.overall.earnings}</span>
                    </div>
                    <div className={style.col}>
                        <span>{props.overall.amountGoal}</span>
                        <span>{props.overall.cpaGoal}</span>
                        <span>{props.overall.cr}</span>
                    </div>
                </div>
                {elemList}
            </div>


        </div>
    )
}

export default Table