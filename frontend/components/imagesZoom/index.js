import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';
import styled, {createGlobalStyle} from 'styled-components'

const Overlay = styled.div`
    position: fixed;
    z-index: 5000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const Header = styled.header`
    height: 44px;
    background: white;
    position: relative;
    padding: 0;
    text-align: center;

    & h1 {
        margin: 0;
        font-size: 17px;
        color: #333;
        line-height: 44[x;]
    }

    & button {
        position: absoulte;
        right: 0;
        top: 0;
        padding: 15px;
        line-height: 14px;
        cursor: pointer;
    }
`;

const SlickWrapper = styled.div`
    height: calc(100% - 44px);
    background: #090909;
`;

const ImageWrapper = styled.div`
    padding: 32px;
    text-align: center;

    & img {
        margin: 0 auto;
        max-height: 750px;
    }
`;
const Indicator = styled.div`
    text-align: center;

    & > div {
        width: 75px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        background: #313131;
        display: inline-block;
        text-align: center;
        color: white;
        font-size: 15px;
    }
`;


function ImagesZoom({images, onClose}) {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <Overlay>
            <Header>
                <h1>상세 이미지</h1>
                <button onClick={onClose}>X</button>
            </Header>
            <SlickWrapper>
            <div>
                <Slick
                    // 0번째 이미지부터 슬라이드함
                    initialSlide={0}
                    // 현재 슬라이드가 몇인지는 state로 저장해야한다.
                    // 처음에는 0이였다가 슬라이드 넘길떄마다 잠깐 슬라이드로 저장
                    afterChange={(slide) => setCurrentSlide(slide)}
                    // 무한 반복 3->0
                    infinite
                    arrows={false}
                    slidesToShow={1}
                    slidesToScroll={1} 
                >
                    {images.map((v)=>(
                        <ImageWrapper key={v.src}>
                            <img src={v.src} alt={v.src} />
                        </ImageWrapper>
                    ))}
                </Slick>
            </div>
            </SlickWrapper>
        </Overlay>
    );
}
ImagesZoom.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func.isRequired,
}
export default ImagesZoom;