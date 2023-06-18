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
    const dispatch                                  = useDispatch();    // Store dispatch.
    const [shaking, setShaking]                     = useState(null);   // Tree shaking state.
    const [isEnabled, setIsEnabled]                 = useState(false);  // Button state.
    const [allApplesInBasket, setAllApplesInBasket] = useState(false);  // Button state.

    const { apples } = useSelector(state => state.apple);                // Store state.

    // Shake tree 3 seconds.
    const shakingChange = () => {
        setShaking(true);
        setIsEnabled(true);

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

        // Elmalar objesindeki en büyük transition değerini baz alarak, elmaların yere düşmesi beklenir ve daha sonra 1 saniye sonra elmalar sepete gönderilir.
        setTimeout(() => {  
            handleSendToBaskets(); 
            setIsEnabled(false);
        }, (Math.max(...updatedApples.map(apple => apple.transition))*1000)+1000);
    };

    // Function that puts apples in the basket
    const handleSendToBaskets = () => {
        const updatedApples = apples.map((item) => {
            return {
                ...item,
                top: functions.randomGenerateNumber.getRandomInt(225, 257),
                left: functions.randomGenerateNumber.getRandomInt(780, 960),
            };
        });
        
        dispatch(sendToBasket(updatedApples));

        setAllApplesInBasket(true);
    };

    // Reset the state to its initial value.
    const handleResetState = () => {
        //  Reset the state by dispatching the resetState action.
        dispatch(resetState());
        setAllApplesInBasket(false);
    };

    return (
        <div className={ styles.center }>
            <Apple/>

            <div className={ shaking ? styles.shakeContainer : "" }>  
                <img 
                    alt = "Tree" 
                    src = { ShakingTree } 
                />
            </div>

            <div>
                <Button 
                    buttonText          =   "Shake" 
                    onClick             =   { allApplesInBasket ? handleResetState  : shakingChange } 
                    isEnabled           =   { isEnabled } 
                    allApplesInBasket   =   { allApplesInBasket }
                />
                <Basket />
            </div>
        </div>
    )
}
