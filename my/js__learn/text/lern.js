// var numProg; // number
//     numProg = Math.floor(Math.random() * 10) + 1;
//     console.log(numProg);

//     function show() {
//         var num, out;
//             num = document.getElementById('userNum').value;
//             out = document.getElementById('result');

//         if (num == numProg) {
//             out.innerHTML = 'Вы угадали';
//         }

//         else if (num > numProg) {
//             out.innerHTML = 'Число больше заданого';
//         }
//         else  
//             out.innerHTML = 'Число меньше заданого';
        
//     }

//     //massiv number
//     function f1() { 
//         var n = document.getElementById('n1');
        
//         for (var i=1; i<=100; i++) {
//             n.innerHTML += i+' ';
//         }
//     }

//     function f1() {
//         var n = document.getElementById ('n1');

//         var i=0;

//         while (i<50) {
//             i++;
//             n.innerHTML += i+' ';
//         }
//     }


//     var m1 = [5, 44, 'hi', 'yo']; //massive
//         console.log (m1);

//     function massOut() {
//         var p = document.getElementById ('out');
//         var str = '';
//         for (var i=0; i<m1.length; i++) {
//             str += i + ' --- ' + m1[i]+'<br>';
//         }
//         p.innerHTML = str;
//     }
// massOut();

//     function p1() {
//         var write = document.getElementById ('write').value;
//         m1.push (write);
//         massOut ();
//     }

//     function p2() {
//         m1.pop (write);
//         massOut ();
//     }



// function send() {
//     var mon1, clo, resultzp, resultprem, result, resultclock, resultnalog;
//         mon1 = document.getElementById('money').value;
//         mon1 = parseInt(mon1);
        
//         clo = document.getElementById('clock').value;
//         clo = parseInt(clo);

        
//         resultclock =  mon1*clo;
//         resultprem = resultclock * 0.1882;
//         result = resultclock + resultprem;
//         resultnalog = result * 0.195;
//         resultzp =  result - resultnalog;

//         document.getElementById('outt').innerHTML = resultzp.toFixed(2) + ' - Без учёта премии(Мес. ТД)';
// }

// var p = document.getElementsByTagName('p');
// var bold = document.getElementsByClassName('one__in');
// console.log(p);

// for (var i=0; i<p.length; i++){
//     p[i].onclick = f1;
// }
// for (var i=0; i<bold.length; i++){
//     bold[i].onclick = f2;
// }

// function f1() {
//     console.log(this); //?
//     this.style.background = 'pink'; //?
// }

// function f2() {
//     this.style.background = 'yellow';
// }


// document.getElementById('window').onmousemove = function (event) {
    
//     var x = event.offsetX;
//     console.log(x);
//     document.getElementById('two').style.width = x +'px';
// }
// window.onload = function(){

//     var scrolled;
//     var timer;

//     document.getElementById('top').onclick = function () {
//         scrolled = window.pageYOffset;
//         scrollToTop();
//     }
    
//     function scrollToTop() {
//         if (scrolled > 0) {
//             window.scrollTo(0, scrolled);
//             scrolled = scrolled - 30;
//             timer = setTimeout(scrollToTop, 10);
//         }
//         else  {
//             clearTimeout(timer);
//             window.scrollTo(0,0);
//         }
//     }
// }


