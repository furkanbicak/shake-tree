import React            from 'react';
import refreshSvg       from '../../assets/refresh.svg';
import spinnersSvg      from '../../assets/spinners.svg';
import styles           from '../../styles/components/Button.module.css';

export const Button = ({ onClick, allApplesInBasket, isEnabled, buttonText }) => {

    const handleClick = () => {
        onClick();
    };

    return (
        <div className={styles.container}>
            {
                allApplesInBasket ? (
                    <button 
                        onClick     =   { handleClick } 
                        className   =   { styles.buttonStyle } 
                        disabled    =   { isEnabled } 
                    >
                        <div className={ styles.centerContainer }>
                            REPLACE <img src={refreshSvg} alt='refreshSvg'/>
                        </div>
                    </button>
                ) : (
                    <button 
                        onClick     =   { handleClick }  
                        className   =   { styles.buttonStyle } 
                        disabled    =   { isEnabled } 
                        >
                        { 
                            isEnabled ? ( 
                                <div className={styles.centerContainer}>
                                    Loading <img src={spinnersSvg} alt='refreshSvg'/>
                                </div>
                            ) : ( 
                                buttonText 
                            )
                        }
                    </button>
                )
            }
        </div>
    );
}
