import React, { useRef, useEffect } from 'react';
import img1 from '../../imagesCarousel/img1-slideshare.jpg';
import img2 from '../../imagesCarousel/img2-slideshare.jpg';
import img3 from '../../imagesCarousel/img3-slideshare.jpg';
import img4 from '../../imagesCarousel/img4-slideshare.jpg';
import img5 from '../../imagesCarousel/img5-slideshare.jpg';
import { ReactComponent as LeftArrow } from '../../imagesCarousel/iconmonstr-angel-left-thin.svg';
import { ReactComponent as RightArrow } from '../../imagesCarousel/iconmonstr-angel-right-thin.svg';
import styled from 'styled-components';

const SlideImage = () => {
  const slideCarousel = useRef(null);
  const intervalSlide = useRef(null);

  const next = () => {
    //se comprueba que hay elementos
    if (slideCarousel.current.children.length > 0) {
      //aquí obtenemos el primer elemento
      const firstElement = slideCarousel.current.children[0];

      //se establece la transición
      slideCarousel.current.style.transition = `2000ms ease-out all`;
      const slideSize = slideCarousel.current.children[0].offsetWidth;

      //movemos el carousel
      slideCarousel.current.style.transform = `translateX(-${slideSize}px)`;
      const transition = () => {
        slideCarousel.current.style.transition = 'none';
        slideCarousel.current.style.transform = `translateX(0)`;
        //tomamos el primer elemento y lo mandamos al final
        slideCarousel.current.appendChild(firstElement);
        slideCarousel.current.removeEventListener('transitionend', transition);
      };
      //event listener para cuando termina la animacón
      slideCarousel.current.addEventListener('transitionend', transition);
    }
  };

  const back = () => {
    if (slideCarousel.current.children.length > 0) {
      //obtenemos el último elemento
      const counter = slideCarousel.current.children.length - 1;
      const lastElement = slideCarousel.current.children[counter];
      slideCarousel.current.insertBefore(
        lastElement,
        slideCarousel.current.firstChild
      );
      slideCarousel.current.style.transition = 'none';
      const slideSizeTwo = slideCarousel.current.children[0].offsetWidth;
      slideCarousel.current.style.tranform = `translateX(-${slideSizeTwo}px)`;
      setTimeout(() => {
        slideCarousel.current.style.transition = '2000ms ease-out all';
        slideCarousel.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    //esto sirve para poner el ratón por encima de la imagen y que se pare el intervalo, se usa useRef con intervalSlide
    intervalSlide.current = setInterval(() => {
      next();
    }, 4000);
    //para eliminar los intervalos
    slideCarousel.current.addEventListener('mouseenter', () => {
      clearInterval(intervalSlide.current);
    });
    //volvemos a poner intervalos
    slideCarousel.current.addEventListener('mouseleave', () => {
      intervalSlide.current = setInterval(() => {
        next();
      }, 4000);
    });
  }, []);

  return (
    <>
      <MainContainer>
        <ContainerSlideImage ref={slideCarousel}>
          <Slide>
            <img src={img1} alt="logotype" />
          </Slide>
          <Slide>
            <img src={img2} alt="logotype" />
          </Slide>
          <Slide>
            <img src={img3} alt="logotype" />
          </Slide>
          <Slide>
            <img src={img4} alt="logotype" />
          </Slide>
          <Slide>
            <img src={img5} alt="logotype" />
          </Slide>
        </ContainerSlideImage>
        <Control>
          {/*los botones están desordenados */}
          <Buttons onClick={next}>
            <RightArrow></RightArrow>
          </Buttons>
          <Buttons right onClick={back}>
            <LeftArrow></LeftArrow>
          </Buttons>
        </Control>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
`;
const ContainerSlideImage = styled.div`
  display: flex;
  flexwrap: nowrap;
`;
const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.2s ease all;
  z-index: 10;

  img {
    vertical-align: top;
    border: solid 4px #a598ec;
    border-radius: 6px;
    width: 290px;
    height: 200px;

    @media all and (min-width: 768px) {
      width: 490px;
      height: 400px;
    }
    @media all and (min-width: 1024px) {
      width: 750px;
      height: 550px;
    }
  }
`;
const Control = styled.button`
  position: absolute;
  top: 0;
  z-index: 20;
  widht: 100%;
  height: 100%
  pointer-events: none;
`;
const Buttons = styled.button`
  pointer-events: all;
  background: none;
  padding-top: 90px;
  padding-right: 115px;
  padding-left: 110px;
  border: none;
  cursor: pointer;
  outline: none;
  height: 100%;
  text-align: space-between;
  position: absolute;
  transition: 0.2s ease all;
  @media all and (min-width: 768px) {
    padding-top: 180px;
    padding-left: 190px;
    padding-right: 195px;
  }
  @media all and (min-width: 1024px) {
    padding-top: 270px;
    padding-left: 330px;
    padding-right: 335px;
  }

  path {
    filter: ${(props) =>
      props.right
        ? 'drop-shadow(-2px 0px 0px #a598ec)'
        : 'drop-shadow(2px 0px 0px #a598ec)'};
  }
  ${(props) => (props.right ? 'right: 0' : 'left:0')}
`;

export default SlideImage;
