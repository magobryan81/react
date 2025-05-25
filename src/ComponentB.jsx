import React, {useContext} from 'react';
import {UserContext} from './ComponentA.jsx';

export default function ComponentB(props) {

    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>ComponentB</h1>
            <h2>{`Hello again, ${user}`}</h2>
        </div>
    )
}