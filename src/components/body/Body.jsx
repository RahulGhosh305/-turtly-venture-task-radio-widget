import React, { useRef, useContext, useState } from 'react';
import AppData from '../../AppData';
import styles from './Body.module.css'
// Assets
import minus from '../../assests/minus.png';
import plus from '../../assests/plus.png';
import radio from '../../assests/radio.png';
import { FMContext } from "../../Screens/RadioScreen";

// Station Body Content
const Body = () => {
    const [activeIndex, setActiveIndex] = useState("");
    const [FMname, setFMname] = useContext(FMContext)

    let NewRefs = [];
    // console.log(NewRefs);
    const FindRefs = (isActive) => {
        const newRef = useRef(isActive)
        // console.log(newRef)
        NewRefs.push(newRef);
        return newRef
    }

    const setIndexInActive = () => {
        setActiveIndex("")
        setFMname("")
    }
    const setIndexActive = (index, name) => {
        setActiveIndex(index)
        setFMname(name)
    }

    return (
        <div className="container">
            <div className="row">
                <div className={styles.wrapper}>
                    <div className={`col-sm-4 ${styles.bodyWrapper}`}>
                        {
                            AppData.map((item, index) => {
                                const isActive = index === activeIndex
                                // console.log(isActive);
                                const newRef = FindRefs(isActive)
                                return (
                                    <div
                                        key={index}
                                        className={styles.accordionWrapper}
                                        onClick={() =>
                                            isActive ? setIndexInActive() : setIndexActive(index, item.name)
                                        }
                                    >
                                        {/* accordion hideing toggle part */}
                                        <div
                                            style={{ backgroundColor: "#2b2b35" }}
                                            ref={newRef}
                                            className={
                                                !isActive ? `${styles.displayNone}` : `${styles.displayShow} ${styles.accordionContent}`}
                                        >
                                            <div className={styles.contentWrapper}>
                                                <button type='button'>
                                                    <img className={styles.minus} src={minus} alt="Minus" />
                                                </button>
                                                <img className={styles.radio} src={radio} alt="pic" />
                                                <button type='button'>
                                                    <img className={styles.plus} src={plus} alt="Plus" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Render Part */}
                                        <div className={styles.accordion}>
                                            <div className={styles.contents}>
                                                <h4>{item.name}</h4>
                                                <h4>{item.frequency}</h4>
                                            </div>
                                        </div>
                                        <hr className={styles.horizontal} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;