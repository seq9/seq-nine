import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

function Home() {
    let history = useHistory()

    function handleClick() {
        history.push("/my")
    }
    return (
        <Wrap>
            <div onClick={handleClick}>home</div>
        </Wrap>
    )
}


const Wrap = styled.div`
    padding: 10px;
    cursor: pointer;

`

export default Home;