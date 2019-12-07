import React, {useState} from 'react';
import styled from 'styled-components';



const Avatar = styled.div`
    position: absolute;
    top: 25px;
    right: 25px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: blue;
`

const AvatarDetails = styled.div`
    position: absolute;
    top: 85px;
    right: 25px;
    height:75px;
    width: 150px;
    padding: 4px;
    border-radius: 10%;
    border-width: 2px;
    border-style: solid;
    background: lightgrey;
`

function UserDetails() {
    const [toggle, setToggle] = useState(false)
    return (
        <>
        <Avatar toggle={toggle} onClick={() => setToggle(!toggle)} />
        {toggle && ( 
            <AvatarDetails>
                <span>stuff and junk</span>
            </AvatarDetails>
        )}
        
        </>
        )
} 

export default UserDetails;