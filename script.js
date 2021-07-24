const quizData=[
  {
    question:'If there are 3 apples on the table and you take 2 of them, how many will you have?',
    a: 'five',
    b: 'four',
    c: 'two',
    d: 'three',
    correct: 'c'
  },
  {
    question: 'Divide 30 by a half and add 10 what have you got?',
    a: '70',
    b: '15',
    c: '60',
    d: '25',
    correct: 'a'
  },
  {
    question: 'How many months have 28 days?',
    a: 'none',
    b: '1',
    c: 'Depends if there is a leap year or not',
    d: '12',
    correct: 'd'
  },
  {
    question: 'A doctor gives you 3 pills and tells you take 1 every half an hour, how long would it be before the pills have been taken?',
    a: '30 min',
    b: '60 min',
    c: '75 min',
    d: '90 min',
    correct: 'b'
  },
  {
    question: 'Half of 2 + 2 =?',
    a: '0',
    b: '1',
    c: '2',
    d: '3',
    correct: 'd'
  },
  {
    question: 'If you pass out the 2nd person in a race, what position are you?',
    a: '1st',
    b: '2nd',
    c: '3rd',
    d: '4th',
    correct: 'b'
  },
  {
    question: 'Mary\'s father had 5 children - Mimi, Mumu, Mama, Meme. What was the 5th child\'s name?',
    a: 'Mary',
    b: 'Momo',
    c: 'Impossible to know',
    d: 'Marie',
    correct: 'a'
  },
  {
    question: 'I don\'t speak, I cannot hear, but I always tell the truth.',
    a: 'The Mirror',
    b: 'Fish',
    c: 'Old Granny',
    d: 'The Watch',
    correct: 'a'
  },
  {
    question: 'A woodpecker can peck how many times per second?',
    a: '10',
    b: '20',
    c: '30',
    d: '40',
    correct: 'b'
  },
  {
    question: 'In space, which sad thing can astronauts not perform properly?',
    a: 'Sneeze',
    b: 'Hiccup',
    c: 'Cry',
    d: 'Cough',
    correct: 'c'
  }
]
let qnumber=0,corr=0;
const btn=document.getElementById('btn');

let container=document.querySelector('.quiz-container');

const input=document.querySelectorAll('input');

function loadQuestion(){
const ques=document.getElementById('ques');
const opt_a=document.getElementById('opt_a');
const opt_b=document.getElementById('opt_b');
const opt_c=document.getElementById('opt_c');
const opt_d=document.getElementById('opt_d');
ques.innerHTML=quizData[qnumber].question;
opt_a.innerHTML=quizData[qnumber].a;
opt_b.innerHTML=quizData[qnumber].b;
opt_c.innerHTML=quizData[qnumber].c;
opt_d.innerHTML=quizData[qnumber].d;
}

loadQuestion();
btn.addEventListener('click',() => {

  input.forEach((item)=>{
    if(item.checked && item.id==quizData[qnumber].correct)
    corr++;
  });

  qnumber++;
  if(qnumber<10)
  loadQuestion();
  else
  {
      container.innerHTML=`<h1 style='margin:3rem'>Thanks for giving the quiz!!!</h1><h2 style='margin-bottom:3rem'>You got ${corr}/10 correct answers.</h2><button onclick="location.reload()">Reload</button>`;
      container.style.textAlign = 'center';
  }
});
