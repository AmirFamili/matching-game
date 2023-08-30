const boxes = document.querySelectorAll('.dark');
const point = document.getElementById('point');
const score = document.getElementById('score');
const faildAttemps = document.getElementById('faild-attemps');
const restart = document.getElementById('restart');
const start = document.getElementById('start');
const dark = document.getElementsByClassName('dark');


// * game
let x = 0;
let mistake = 0;
let data_1;
let data_2;



boxes.forEach(box => {

    box.addEventListener('click', () => {
        x++;
        if (x === 1) {
            data_1 = box.dataset.number;
            box.classList.add('hide');

        } else if (x === 2) {
            data_2 = box.dataset.number;
            box.classList.add('hide');

            if (data_1 === data_2) {
                const result = parseFloat(point.textContent) + 5;
                point.textContent = result.toString();
                x = 0;

            } else {
                mistake++;
                if (mistake === 3) {
                    const result = parseFloat(faildAttemps.textContent) + 1;
                    faildAttemps.textContent = result.toString();
                    setTimeout(() => {
                        for (let i = 0; i < dark.length; i++) {
                            dark[i].classList.remove('hide');
                        };
                        point.textContent = 0;
                        faildAttemps.textContent = 0;

                    }, 1000);
                    mistake = 0;
                    x = 0;
                    return;
                } else {
                    let pic1 = document.getElementsByClassName(data_1);
                    let pic2 = document.getElementsByClassName(data_2);

                    const result = parseFloat(faildAttemps.textContent) + 1;
                    faildAttemps.textContent = result.toString();
                    x = 0;
                    setTimeout(() => {
                        pic1[0].classList.remove('hide');
                        pic1[1].classList.remove('hide');
                        pic2[0].classList.remove('hide');
                        pic2[1].classList.remove('hide');
                    }, 300);

                   
                }

            }
        }

    })
});
// * End game

// * restart 
restart.addEventListener('click', () => {
    ;

    for (let i = 0; i < dark.length; i++) {
        dark[i].classList.remove('hide');

    }
    if (parseFloat(point.textContent) === 30) {

        addScore();
    }

    point.textContent = 0;
    faildAttemps.textContent = 0;
    mistake = 0;
    x = 0;
    start.style.display="inline";
    restart.style.display="none";

});
// * End restart



// * start 
start.addEventListener('click', () => {
    for (let i = 0; i < dark.length; i++) {
        dark[i].classList.add('hide');
    
    }
    setTimeout(() => {
        for (let i = 0; i < dark.length; i++) {
            dark[i].classList.remove('hide');
        
        }
    },1000);

    start.style.display="none";
    restart.style.display="inline";

    // * change image



const imageUrls = [
    '../images/cat.jpg',
    '../images/cow.jpg',
    '../images/dog.jpg',
    '../images/dunkey.jpg',
    '../images/monkey.jpg',
    '../images/rabbit.jpg',

];
const box1=document.getElementsByClassName('box-1');
const box2=document.getElementsByClassName('box-2');
const box3=document.getElementsByClassName('box-3');
const box4=document.getElementsByClassName('box-4');
const box5=document.getElementsByClassName('box-5');
const box6=document.getElementsByClassName('box-6');

var randomIndex1 = Math.floor(Math.random() * imageUrls.length);

var randomIndex2 = Math.floor(Math.random() * imageUrls.length);
while(randomIndex1===randomIndex2){
  randomIndex2 = Math.floor(Math.random() * imageUrls.length);

}

var randomIndex3 = Math.floor(Math.random() * imageUrls.length);
while(randomIndex1===randomIndex3 || randomIndex2===randomIndex3){
 randomIndex3 = Math.floor(Math.random() * imageUrls.length);

}
var randomIndex4 = Math.floor(Math.random() * imageUrls.length);
while(randomIndex1===randomIndex4 || randomIndex2===randomIndex4 || randomIndex3===randomIndex4  ){
  randomIndex4 = Math.floor(Math.random() * imageUrls.length);

}
var randomIndex5 = Math.floor(Math.random() * imageUrls.length);
while(randomIndex1===randomIndex5 || randomIndex2===randomIndex5 || randomIndex3===randomIndex5 || randomIndex4===randomIndex5 ){
 randomIndex5 = Math.floor(Math.random() * imageUrls.length);

}
var randomIndex6 = Math.floor(Math.random() * imageUrls.length);
while(randomIndex1===randomIndex6 || randomIndex2===randomIndex6 || randomIndex3===randomIndex6 || randomIndex4===randomIndex6 || randomIndex5===randomIndex6){
 randomIndex6 = Math.floor(Math.random() * imageUrls.length);

}



box1[0].style.backgroundImage = `url('${imageUrls[randomIndex1]}')`;
box1[1].style.backgroundImage=`url('${imageUrls[randomIndex1]}')`;

box2[0].style.backgroundImage=`url('${imageUrls[randomIndex2]}')`;
box2[1].style.backgroundImage=`url('${imageUrls[randomIndex2]}')`;

box3[0].style.backgroundImage=`url('${imageUrls[randomIndex3]}')`;
box3[1].style.backgroundImage=`url('${imageUrls[randomIndex3]}')`;

box4[0].style.backgroundImage=`url('${imageUrls[randomIndex4]}')`;
box4[1].style.backgroundImage=`url('${imageUrls[randomIndex4]}')`;

box5[0].style.backgroundImage=`url('${imageUrls[randomIndex5]}')`;
box5[1].style.backgroundImage=`url('${imageUrls[randomIndex5]}')`;

box6[0].style.backgroundImage=`url('${imageUrls[randomIndex6]}')`;
box6[1].style.backgroundImage=`url('${imageUrls[randomIndex6]}')`;

// * End change image
});
// * End start



// * show score
function addScore() {


    let number;

    if (localStorage.getItem('number') !== null) {
        number = localStorage.getItem('number');
        const resultNumber = parseFloat(number) + 30;
        localStorage.setItem('number', resultNumber);
        score.textContent = resultNumber.toString();

    } else {
        number = 0;
        const resultNumber = parseFloat(number) + 30;
        localStorage.setItem('number', resultNumber);
        score.textContent = resultNumber.toString();

    }
}


showScore();
function showScore() {
    let number;

    if (localStorage.getItem('number') !== null) {
        number = localStorage.getItem('number');
        score.textContent = number.toString();

    } else {
        number = 0;
        score.textContent = number.toString();

    }
}

// * End show score



