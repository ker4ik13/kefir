





let navMenu = document.querySelector('.nav__menu');
let logo = document.querySelector('.logo__img');
let lockImg = document.querySelector('.login__img');

// прокрутка с 1 до 3 секции
const page1BtnWork = document.querySelector('.page1__btn__work');
page1BtnWork.addEventListener('click', (e) => {
    e.preventDefault;
    let scrollPage = e.currentTarget;
    let scrollLink = scrollPage.dataset.scroll;
    document.querySelector(`#${scrollLink}`).scrollIntoView({behavior: "smooth"});
});

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


let page1H = document.querySelector('.page1').offsetHeight;
let page2H = document.querySelector('.page2').offsetHeight;
let page3H = document.querySelector('.page3').offsetHeight;
let page4H = document.querySelector('.page4').offsetHeight;
let page5H = document.querySelector('.page5').offsetHeight;
let page6H = document.querySelector('.page6').offsetHeight;
let page2Offset = page1H
let page3Offset = page1H + page2H;
let page4Offset = page1H + page2H + page3H ;
let page5Offset = page1H + page2H + page3H + page4H;
let page6Offset = page1H + page2H + page3H + page4H + page5H;

let navTexts = document.querySelectorAll('.nav__text');

window.addEventListener('scroll', () => {

    // color text
    let userScroll = window.pageYOffset;
    
    let navTexts = document.querySelectorAll('.nav__text');

    if(userScroll < page2Offset - 40){
        navTexts.forEach(text => {
            text.style.color = '#04242b';
        });
        logo.src ='assets/img/nav/logo/logo.svg';
        lockImg.src = 'assets/img/nav/lock.svg';
        navMenu.classList.remove('white__menu');
    };
    if(userScroll >= page2Offset - 40){
        navTexts.forEach(text => {
            text.style.color = '#fff';
        });
        logo.src ='assets/img/nav/logo/white-logo.svg';
        lockImg.src = 'assets/img/nav/white-lock.svg';
        navMenu.classList.add('white__menu');
    };
    if(userScroll >= page3Offset - 50){
        navTexts.forEach(text => {
            text.style.color = '#04242b';
        });
        logo.src ='assets/img/nav/logo/logo.svg';
        lockImg.src = 'assets/img/nav/lock.svg';
        navMenu.classList.remove('white__menu');
    };
    if(userScroll >= page6Offset - 50){
        navTexts.forEach(text => {
            text.style.color = '#fff';
        });
        logo.src ='assets/img/nav/logo/white-logo.svg';
        lockImg.src = 'assets/img/nav/white-lock.svg';
        navMenu.classList.add('white__menu');
    };

    // анимация непрозрачности
    const opacity1 = {
        opacity: 0,
        opacity: 1,
    };
    const opacity0 = {
        opacity: 1,
        opacity: 0,
    };
    if(userScroll >= page1H){
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
