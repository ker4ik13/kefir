




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
