import React        from 'react';
import svgBasket    from '../../assets/basket.svg';
import styles       from '../../styles/components/Basket.module.css';

export const Basket = () => {
    return (
        <div className={ styles.basketContainer }>
            <img 
                src         =   { svgBasket } 
                alt         =   "SvgBasket"
                className   =   { styles.basket }
            />
        </div>
  )
}
