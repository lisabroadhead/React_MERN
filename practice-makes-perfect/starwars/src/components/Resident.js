import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Resident = (props) => {
    const [people,setPeople] = useState({})
    

    useEffect(() => {
        axios.get(props.person).then(response=>{
            var txt = response.data.url;
            var numb = txt.match(/\d/g);
            numb = numb.join("");

            setPeople({ 
                name:response.data.name,
                id:numb
            })
        })
    }, [props.person]);
    var link = `/people/${ people.id }`

    return(
        <li><Link to={link}> {people.name}</Link></li>
    );
}

export default Resident;