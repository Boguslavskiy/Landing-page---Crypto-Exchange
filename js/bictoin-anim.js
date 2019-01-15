(function(){
const MIN_H = 10;
const MAX_H = 75;
const MIN_W = 10;
const MAX_W = 75;
let elem = document.getElementById('bitcoin-anim');
let height = 15;
let width = 15;
let iterator_H = 0.5;
let iterator_W = 0.2;
setInterval(function(){
    elem.style.top = height+'%';
    elem.style.right = width+'%';

    height += iterator_H;
    if(height >= MAX_H){
        iterator_H = -0.5;
    }else if(height <= MIN_H){
        iterator_H = .5;
    }

    width += iterator_W;
    if(width >= MAX_W){
        iterator_W = -0.2;
    }else if(width <= MIN_W){
        iterator_W = 0.2;
    }

}, 20);
}());