import React, { Component } from 'react';

import styles from './styles/Advertisements.module.css'

class Advertisements extends Component{
    render(){
        return(
            <div className={ styles.ads }>
                <div className={ styles.ad }></div>    
                <div className={ styles.ad }></div>    
                <div className={ styles.ad }></div>    
                <div className={ styles.ad }></div>    
            </div>
        );
    }
}

export default Advertisements