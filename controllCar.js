const step = 10;

// function buildControlBox(){
//     let controll = document.getElementsByTagName('table')[0];
//     controll.innerHTML = `<tr>
//                                 <td></td>
//                                 <td> <button onclick="moveUp()">&uArr;</button> </td>
//                                 <td></td>
//                             </tr>
//                             <tr>
//                                 <td> <button onclick="moveLeft()">&lArr;</button> </td>
//                                 <td></td>
//                                 <td> <button onclick="moveRight()">&rArr;</button> </td>
//                             </tr>
//                             <tr>
//                                 <td></td>
//                                 <td> <button onclick="moveDown()">&dArr;</button> </td>
//                                 <td></td>
//                             </tr>`;
// }
function initGame() {
    let car = document.getElementsByTagName('img')[0];
    car.src = "images/right.jpg";
    car.style.position = 'relative';
    car.style.left = 0;
    car.style.top = 0;
    car.style.width = "180px";
    car.style.height = "88px";
    car.style.transition = '0.3s';
    // buildControlBox();
    document.getElementsByTagName('body')[0].addEventListener('keydown', controllCar);
}

function moveRight() {
    let car = document.getElementsByTagName('img')[0];
    // car.src = "images/right.jpg";
    // car.style.width = "180px";
    // car.style.height = "88px";
    car.style.transform = "rotate(0deg)";
    if (parseInt(car.style.left) + parseInt(car.style.width) + step <= window.innerWidth) {
        car.style.left = `${parseInt(car.style.left) + step}px`;
    }
}

function moveDown() {
    let car = document.getElementsByTagName('img')[0];
    // car.src = "images/down.jpg";
    // car.style.width = "88px";
    // car.style.height = "180px";
    car.style.transform = "rotate(90deg)";
    if (parseInt(car.style.top) + parseInt(car.style.height) + step <= window.innerHeight) {
        car.style.top = `${parseInt(car.style.top) + step}px`;
    }
}

function moveLeft() {
    let car = document.getElementsByTagName('img')[0];
    car.style.transform = "rotate(180deg)";
    if (parseInt(car.style.left) - step >= 0) {
        car.style.left = `${parseInt(car.style.left) - step}px`;
    }
}

function moveUp() {
    let car = document.getElementsByTagName('img')[0];
    car.style.transform = "rotate(-90deg)";
    if (parseInt(car.style.top) - step >= 0) {
        car.style.top = `${parseInt(car.style.top) - step}px`;
    }
}

function controllCar(evt) {
    // alert(evt.key);
    switch (evt.keyCode) {
        case 37:
            moveLeft();
            break;
        case 38:
            moveUp();
            break;
        case 39:
            moveRight();
            break;
        case 40:
            moveDown();
            break;
        default:
            alert("please using one in four keys (left, right, up and down)!!!")
            break;
    }
}