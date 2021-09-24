import styled from "styled-components";

export const ButtonContainer =  styled.div`
display: flex;

`

export const ButtonGroupWrapper = styled.ul`
display: flex;
list-style: none;
width: 35%;
justify-content: flex-start;
border: 1px solid #c9c9c9;
border-radius: 20px;
@media (max-width: 940px){
    width: 70%;
}
`

export const Button = styled.li`
width: 8rem;
height: 3rem;
cursor: pointer;
font-size: 15px !important;
display: flex;
align-items: center;
justify-content: space-around;
border-right: 1px solid #c9c9c9;
cursor: pointer;
&:last-child{
    border: none;
}

@media (max-width: 940px){
    width: 8.5rem;
    font-size: 12px !important;
}

`

export const HR = styled.hr`
transform: rotate(180deg);
height: 100%;
`