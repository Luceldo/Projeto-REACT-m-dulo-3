import styled from 'styled-components'
import imgprincipal from './../../assets/images/img_principal.jpg'

export const MainStyled = styled.div`
    background: url(${imgprincipal});
    background-position: center center; 
    background-size: cover;
    background-repeat: no-repeat;

    display: grid;
    place-items: center;

    .logo {
        font-family: 'Bilbo Swash Caps', cursive;
        font-size: 80px;
        color: var(--white);
        margin-top: 200px;
        text-shadow: 1px 2px 3px #666;
        animation: zoomIn .6s linear both;
    }
`