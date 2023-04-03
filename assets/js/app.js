









// прокрутка окна при клике на arrows
const arrows = document.querySelectorAll('.arrow__down');
arrows.forEach(arrow => {
    arrow.addEventListener('click', (e) => {
        let scrollPage = e.target;
        let scrollLink = scrollPage.dataset.scroll;
        document.querySelector(`#${scrollLink}`).scrollIntoView({behavior: "smooth"});
    });
});

// page2

const page1Height = document.getElementById('page1').offsetHeight;
window.addEventListener('scroll', () => {
    let userScroll = window.pageYOffset;
    // анимация непрозрачности
    const opacity1 = {
        opacity: 0,
        opacity: 1,
    };
    const opacity0 = {
        opacity: 1,
        opacity: 0,
    };
    if(userScroll >= page1Height - 200){
        document.querySelector('.page2__img1').animate(opacity0, 4000);
        document.querySelector('.page2__img2').animate(opacity1, 4000);
    } else {
        document.querySelector('.page2__img1').animate(opacity1, 4000);
        document.querySelector('.page2__img2').animate(opacity0, 4000);
    }
});

// page3

const storisIndicators2 = document.querySelector('.storis__indicators_2'),
    storisIndicators1 = document.querySelector('.storis__indicators_1');

storisIndicators1.addEventListener('click', (e) => {
    let indicatorClick = e.target;
    let indicatorData = indicatorClick.dataset.slideTo;
    let targetIndicator = document.querySelectorAll(`ol.storis__indicators_2 li[data-slide-to="${indicatorData}"]`);
    targetIndicator[0].click();
});
storisIndicators2.addEventListener('click', (e) => {
    let indicatorClick = e.target;

    const storisIndicators1 = document.querySelectorAll('.storis__indicators_2 .itc-slider__indicator_active');
    storisIndicators1.forEach(indicator => {
        indicator.classList.remove('itc-slider__indicator_active');
    });
    indicatorClick.classList.add('itc-slider__indicator_active');

    let indicatorData = indicatorClick.dataset.slideTo;
    let targetIndicator = document.querySelectorAll(`ol.storis__indicators_1 li[data-slide-to="${indicatorData}"]`);
    targetIndicator[0].click();
});

// page4

const storisIndicators2Page4 = document.querySelector('.storis__indicators2__page4'),
    storisIndicators1Page4 = document.querySelector('.storis__indicators1__page4');

storisIndicators2Page4.addEventListener('click', (e) => {
    let indicatorClick = e.target;
    let indicatorData = indicatorClick.dataset.slideTo;
    let targetIndicator = document.querySelectorAll(`ol.storis__indicators1__page4 li[data-slide-to="${indicatorData}"]`);
    targetIndicator[0].click();
    
    const storisIndicators2Page4 = document.querySelectorAll('.storis__indicators2__page4 .itc-slider__indicator_active');
    storisIndicators2Page4.forEach(indicator => {
        indicator.classList.remove('itc-slider__indicator_active');
    });
    indicatorClick.classList.add('itc-slider__indicator_active');

    
});

const itcSliderPage4 = document.querySelector('.itc-slider__page4');

itcSliderPage4.addEventListener('touchend', sliderPage4);
itcSliderPage4.addEventListener('mouseup', sliderPage4);
itcSliderPage4.addEventListener('mouseout', sliderPage4);
itcSliderPage4.addEventListener('click', sliderPage4);
itcSliderPage4.addEventListener('mouseover', sliderPage4);

function sliderPage4(e){
    setTimeout(() => {
    let activeStorisIndicator = document.querySelector('.storis__indicators1__page4 .itc-slider__indicator_active');
    let activeIndicatorData = activeStorisIndicator.dataset.slideTo;
    let targetIndicator = document.querySelectorAll(`ol.storis__indicators2__page4 li[data-slide-to="${activeIndicatorData}"]`);

    const storisIndicators2Page4 = document.querySelectorAll('.storis__indicators2__page4 .itc-slider__indicator_active');
    storisIndicators2Page4.forEach(indicator => {
        indicator.classList.remove('itc-slider__indicator_active');
    });
    targetIndicator[0].classList.add('itc-slider__indicator_active');
    }, 200);
    
}

// page5

const storisIndicators2Page5 = document.querySelector('.storis__indicators2__page5'),
    storisIndicators1Page5 = document.querySelector('.storis__indicators1__page5');

storisIndicators2Page5.addEventListener('click', (e) => {
    let indicatorClick = e.target;
    let indicatorData = indicatorClick.dataset.slideTo;
    let targetIndicator = document.querySelectorAll(`ol.storis__indicators1__page5 li[data-slide-to="${indicatorData}"]`);
    targetIndicator[0].click();
    
    const storisIndicators2Page5 = document.querySelectorAll('.storis__indicators2__page5 .itc-slider__indicator_active');
    storisIndicators2Page5.forEach(indicator => {
        indicator.classList.remove('itc-slider__indicator_active');
    });
    indicatorClick.classList.add('itc-slider__indicator_active');
});

const itcSliderPage5 = document.querySelector('.itc-slider__page5');

itcSliderPage5.addEventListener('touchend', sliderPage5);
itcSliderPage5.addEventListener('mouseup', sliderPage5);
itcSliderPage5.addEventListener('mouseout', sliderPage5);
itcSliderPage5.addEventListener('click', sliderPage5);
itcSliderPage5.addEventListener('mouseover', sliderPage5);

function sliderPage5(e){
    setTimeout(() => {
        let activeStorisIndicator = document.querySelector('.storis__indicators1__page5 .itc-slider__indicator_active');
        let activeIndicatorData = activeStorisIndicator.dataset.slideTo;
        let targetIndicator = document.querySelectorAll(`ol.storis__indicators2__page5 li[data-slide-to="${activeIndicatorData}"]`);

        const storisIndicators2Page5 = document.querySelectorAll('.storis__indicators2__page5 .itc-slider__indicator_active');
        storisIndicators2Page5.forEach(indicator => {
            indicator.classList.remove('itc-slider__indicator_active');
        });
        targetIndicator[0].classList.add('itc-slider__indicator_active');
    }, 200);
    
};
