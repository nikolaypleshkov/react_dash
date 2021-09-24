import styled from "styled-components";

export const IconGroupWrapper = styled.div`
display: flex;
width: 100%;
`

export const IconGroupContainer = styled.ul`
display: flex;
list-style: none;
justify-content: center;
text-align: center;
margin-left: -10px;

li:nth-child(1){
    color: rgb(66, 122, 252);
    background-color: rgb(115, 192, 255);
}
li:nth-child(2){
    color: rgb(222, 75, 62);
    background-color: rgb(242, 140, 131);
}
li:nth-child(3){
    color: rgb(99, 138, 255);
    background-color: rgb(99, 208, 255);
}
li:nth-child(4){
    color: rgb(241, 92, 255);
    background-color: rgb(249, 184, 255);
}
`

export const IconGroupItem = styled.li`
width: 70px;
height: 60px;
background-color: blue;
margin: 15px;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
`
