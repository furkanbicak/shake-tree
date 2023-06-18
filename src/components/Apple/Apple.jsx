import React            from 'react';
import svgApple         from '../../assets/apple.svg';
import styles           from '../../styles/components/Apple.module.css';
import { useSelector }  from 'react-redux';

export const Apple = () => {
    const { apples } = useSelector(state => state.apple);       // Store apples state.

    return (
        <div style={{position:'relative'}}>
            {
                apples.map((apple) => (
                    <div key={apple.id}>
                        <img 
                            id          =   { apple.id }
                            src         =   { svgApple } 
                            alt         =   "appleSvg"
                            className   =   { styles.apple }
                            style       =   {{ top: `${apple.top}px`, left: `${apple.left}px`, transition: `all ${apple.transition}s` }} 
                        />
                    </div>
                ))
            }
        </div>
    );
};