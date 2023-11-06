'use strict';
/*
document.querySelector('.message').textContent = "Let's guess together";
console.log(document.querySelector('.message').textContent);

 */
let secretNum = Math.trunc( Math.random()*20 ) + 1;
let score = 10;
let highScore = 0;
document.querySelector('.score').textContent=score;


    const messagePut = function (message){
        document.querySelector('.message').textContent = message;
    }

    document.querySelector('.again').addEventListener('click', function (){
        secretNum = Math.trunc( Math.random()*20 ) + 1;
        console.log(secretNum);
        score = 10 ;


        // document.querySelector('.message').textContent = 'Start guessing...';
        messagePut('Start Hadsing Dude ...  ');
        document.querySelector('.score').textContent = score ;
        document.querySelector('.guess').value = '';
        document.querySelector("body").style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';

    })

    document.querySelector('.check').addEventListener('click',function (){

        const guess = Number(document.querySelector('.guess').value);
        if (!guess){
            document.querySelector('.message').textContent = 'Write a Number bitch ! 😒';
        }
        else if (guess===secretNum){
            document.querySelector('.message').textContent = 'Correct . Well Done ! 🎉';
            document.querySelector("body").style.backgroundColor = 'green';
            document.querySelector('.number').style.width = '30rem';

            if (score > highScore ){
                highScore = score;
                document.querySelector('.highscore').textContent = highScore ;
            }

        }
        else if ( guess !== secretNum ){
            if (score>1){
                document.querySelector('.message').textContent = guess > secretNum ? 'Too High . Try Again ' :
                'too Low . Try again';
                score--;
                document.querySelector('.score').textContent=score;
            }else {
                document.querySelector('.message').textContent = 'Looooooser ! 😂😂😂';
                document.querySelector('.score').textContent= 0 ;
            }

        }

        // duplicated version
        // else if (guess>secretNum) {
        //     if (score>1){
        //     document.querySelector('.message').textContent = 'Too High . Try Again ';
        //     score--;
        //     document.querySelector('.score').textContent=score;
        //     }else {
        //         document.querySelector('.message').textContent = 'Looooooser ! 😂😂😂';
        //         document.querySelector('.score').textContent=0;
        //     }
        // } else if (guess<secretNum) {
        //     if (score>1){
        //         document.querySelector('.message').textContent = 'Too Low . Try Again ';
        //         score--;
        //         document.querySelector('.score').textContent=score;
        //     }else {
        //         document.querySelector('.message').textContent = 'Looooooser ! 😂😂😂';
        //     }
        // }


    })