import React from 'react';
import styles from './Header.module.css'
import backArrow from '../../assests/back-arrow.png'
import power from '../../assests/switch.png'

// Station Header Component
const Header = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className={styles.wrapper}>
                    <div className="col-sm-4">
                        <div className={styles.headerWrapper}>
                            <div className={styles.contents}>
                                <button type="button">
                                    <img className={styles.backArrow} src={backArrow} alt="Back Arrow" />
                                </button>
                                <h3 className={styles.title}>STATIONS</h3>
                                <button type="button">
                                    <img className={styles.power} src={power} alt="Power Switch" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;