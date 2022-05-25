import React from 'react';
import styles from './Footer.module.css'

// Station Footer Component
const Footer = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className={styles.wrapper}>
                    <div className="col-sm-4">
                        <div className={styles.footerWrapper}>
                            <div className={styles.contents}>
                                <h3 className={styles.title}>Dribble FM</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;