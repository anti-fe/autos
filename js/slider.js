// SLIDER

const arrImg = ['img/lada.jpg', 'img/lada1.jpg', 'img/lada2.jpg','img/lada3.jpg'];
const btnPrev = document.querySelector('.slider-btn__prev');
const btnNext = document.querySelector('.slider-btn__next');
const sliderImg = document.querySelector('.slider__img');
const sliderDotes = document.querySelector('.slider-dotes');

let countSlider = 0; 

btnPrev.addEventListener('click', setNextImg);
btnNext.addEventListener('click', setPrevImg);

(function createSliderDotes() {
    let arrDotes = [];

    for(let i=0; i < arrImg.length; i++) {
        let doteItem = document.createElement('div');
        doteItem.classList.add('slider-dotes__item');
        arrDotes.push(doteItem);
    }
    arrDotes.forEach(item=>{
        sliderDotes.appendChild(item);
    })
}())

let arrDotes;

(function setDotes() {
    arrDotes = document.querySelectorAll('.slider-dotes .slider-dotes__item');
    arrDotes.forEach((item, i)=>{
        
        item.addEventListener('click', (e)=>{
            arrDotes.forEach(sitem=>{
                sitem.classList.remove('dote-active');
            })
            e.target.classList.toggle('dote-active');
            countSlider = i;
            sliderImg.setAttribute('src', arrImg[countSlider]);
    })
    })
}()) 

function setNextImg() {
    countSlider++;
    arrDotes.forEach(item=>{
        item.classList.remove('dote-active');
    })

    if(countSlider > arrImg.length-1) {
        countSlider = 0;
        arrDotes[countSlider].classList.add('dote-active');
        sliderImg.setAttribute('src', arrImg[countSlider]);
    } else {
        arrDotes[countSlider].classList.add('dote-active');
        sliderImg.setAttribute('src', arrImg[countSlider]);
    }
}

function setPrevImg() {
    countSlider--;
    arrDotes.forEach(item=>{
        item.classList.remove('dote-active');
    })

    if(countSlider < 0) {
        countSlider = arrImg.length - 1;
        arrDotes[countSlider].classList.add('dote-active');
        sliderImg.setAttribute('src', arrImg[countSlider]);
    } else {
        arrDotes[countSlider].classList.add('dote-active');
        sliderImg.setAttribute('src', arrImg[countSlider]);
    }
}

setInterval(setNextImg, 4000);