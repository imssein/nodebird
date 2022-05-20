import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';
import { Overlay, Global, Header, CloseBtn, ImageWrapper, Indicator, SlickWrapper } from './style';

function ImagesZoom({images, onClose}) {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <Overlay>
            <Global />
            <Header>
                <h1>상세 이미지</h1>
                <CloseBtn onClick={onClose}>X</CloseBtn>
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
                <Indicator>
                    <div>
                        {currentSlide + 1}
                        {' '}
                        / 
                        {images.length}
                    </div>
                </Indicator>
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