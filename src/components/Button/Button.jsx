import React            from 'react';
import refreshSvg       from '../../assets/refresh.svg';
import spinnersSvg      from '../../assets/spinners.svg';
import styles           from '../../styles/components/Button.module.css';

export const Button = ({ onClick, allApplesInBasket, isLoadingEnabled, isTryAgainEnabled }) => {
    return (
        <div className={styles.container}>
            {
                allApplesInBasket ? (
                    <button 
                        onClick     =   { onClick } 
                        className   =   { styles.buttonStyle } 
                        disabled    =   { isTryAgainEnabled } 
                    >
                        <div className={ styles.centerContainer }>
                            Try Again <img src={refreshSvg} alt='refreshSvg'/>
                        </div>
                    </button>
                ) : (
                    <button 
                        onClick     =   { onClick }  
                        className   =   { styles.buttonStyle } 
                        disabled    =   { isLoadingEnabled } 
                        >
                        { 
                            isLoadingEnabled ? ( 
                                <div className={ styles.centerContainer }>
                                    Loading <img src={ spinnersSvg } alt='refreshSvg'/>
                                </div>
                            ) : ( 
                                <p>Shake</p>
                            )
                        }
                    </button>
                )
            }
        </div>
    );
}
