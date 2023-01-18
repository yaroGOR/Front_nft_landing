import React, { useLayoutEffect, useRef } from 'react'
import { useWindowScroll } from 'react-use';
import styled from 'styled-components'

const Up = styled.div`
box-sizing:border-box;
width: 3rem;
height: 3rem;
margin: 0;

padding: 0;
color: ${props=>props.theme.text};
background-color: ${props=>props.theme.body};

font-size: ${props=>props.theme.fontxl};
position: fixed;
right: 1rem;
bottom: 1rem;

cursor: pointer;

display: none;
justify-content: center;
align-items: center;

border-radius:  50%;

&:hover{
    transform: scale(1.2);
}

&:active{
    transform: scale(0.9);
}
`

const ScrollToTop = () => {
    const ref = useRef(null);

    const {y} = useWindowScroll();

    
    const scrollTo = () => {
        let element = document.getElementById("navigation");
    
        element.scrollIntoView({
            behavior:'smooth',
            block:'start',
            inline:'nearest',
    
        })
    }
    useLayoutEffect(() => {
      console.log(y)

      if(y>200) {
        ref.current.style.display = "flex"
      }
      else{
        ref.current.style.display = "none"
      }
    
      return () => {
        
      };
    }, [y])
  return (
    <Up ref={ref} onClick={()=>scrollTo()}> &#x2191;</Up>
  )
}

export default ScrollToTop