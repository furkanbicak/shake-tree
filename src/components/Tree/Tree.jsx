import { 
    dropApples, 
    sendToBasket, 
    resetState 
}                                       from '../../stores/apple';
import React, { useState }              from 'react';
import { useDispatch, useSelector }     from 'react-redux';
import functions                        from '../../functions';
import { Button }                       from '../Button/Button';
import ShakingTree                      from '../../assets/tree.svg';
import { Apple }                        from '../../components/Apple/Apple';
import { Basket }                       from '../../components/Basket/Basket';
import styles                           from '../../styles/components/Tree.module.css';

export const Tree = () => {
    const dispatch                                      = useDispatch();                                                // Store dispatch.
    const { apples }                                    = useSelector(state => state.apple);                            // Store state.
    const [shaking, setShaking]                         = useState(null);                                               // Tree shaking state.
    const [isLoadingEnabled, setLoadingIsEnabled]       = useState(false);                                              // Loading button status state.
    const [isTryAgainEnabled, setIsTrayAgainEnabled]    = useState(false);                                              // Tray again button status state.
    const [allApplesInBasket, setAllApplesInBasket]     = useState(false);                                              // Basket status state.
    const lastFallingTime                               = Math.max(...apples.map(item => item.transition))              // Last falling apple time.

    // Shake tree 3 seconds.
    const shakingChange = () => {
        setShaking(true);
        setLoadingIsEnabled(true);

        setTimeout(() => {
            setShaking(false);
            handleDropApples();
        }, 3000);
    };

    // Function that makes apples fall from tree.
    const handleDropApples = () => {
        const updatedApples = apples.map((item) => {
            return {
                ...item,
                top: 350,
            };
        });

        dispatch(dropApples(updatedApples));

        // Elmalar objesindeki en büyük transition değerini baz alarak, elmaların yere düşmesi beklenir ve 1 saniye sonra elmalar sepete gönderilir.
        setTimeout(() => {  
            handleSendToBaskets(); 
            setLoadingIsEnabled(false);
        }, ((lastFallingTime)*1000)+1000);
    };

    // Function that puts apples in the basket
    const handleSendToBaskets = () => {
        const updatedApples = apples.map((item) => {
            return {
                ...item,
                top: functions.randomGenerateNumber.getRandomInt(225, 257),
                left: functions.randomGenerateNumber.getRandomInt(810, 950),
            };
        });
        
        dispatch(sendToBasket(updatedApples));

        setIsTrayAgainEnabled(true);
        setAllApplesInBasket(true);

        setTimeout(() => {
            setIsTrayAgainEnabled(false);
        }, ((lastFallingTime)*1000)+1000);
    };

    // Reset the state to its initial value.
    const handleResetState = () => {
        //  Reset the state by dispatching the resetState action.
        dispatch(resetState());
        setIsTrayAgainEnabled(true);

        setTimeout(() => {
            setAllApplesInBasket(false);
            setIsTrayAgainEnabled(false);
            setLoadingIsEnabled(false);
        }, ((lastFallingTime)*1000)+1000);
    };

    return (
        <div className={ styles.center }>
            <Apple/>

            <div className={ shaking ? styles.shakeContainer : "" }>  
                <img src = { ShakingTree } alt = "treeSvg" />
            </div>

            <div>
                <Button 
                    isLoadingEnabled    =   { isLoadingEnabled } 
                    isTryAgainEnabled   =   { isTryAgainEnabled }
                    allApplesInBasket   =   { allApplesInBasket }
                    onClick             =   { allApplesInBasket ? handleResetState  : shakingChange } 
                />
                <Basket />
            </div>
        </div>
    )
}
