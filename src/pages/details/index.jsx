import React from "react";
import './styles.css';
import {useLocation} from 'react-router-dom';
import Card from '../../components/card';

const Details = () => {
    const {state} = useLocation();
    return (
        <div className = "container">
            <Card product = {state} key = {state.name} onSelect={()=>{}}/>
        </div>
    )
}

export default Details;