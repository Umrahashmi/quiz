const questions=[
    {
        'que':'Who are called the GenZ?',
        'a':'People born in stone age',
        'b':'people above 60 years',
        'c':'People born between 1996-2010',
        'd':'People born between 1950-1994',
        'correct':'c'
    },
    {
        'que':'What do you mean by spilling the tea?',
        'a':'Gossiping',
        'b':'Creating a mess',
        'c':'Working hard',
        'd':'Cleaning the room',
        'correct':'a'
    },
    {
        'que':'What does it mean if something is basic?',
        'a':'funny',
        'b':'unoriginal',
        'c':'juvenile',
        'd':'easy',
        'correct':'b'
    },
    {
        'que':'Harry Potter belonged to?',
        'a':'Slytherin',
        'b':'Gryffindor',
        'c':'Hufflepuff',
        'd':'Tigers',
        'correct':'b'
    },
    {
        'que':'What does iykyk stand for?',
        'a':'in your known years as king',
        'b':'if you know you know',
        'c':'you only live once',
        'd':'dont know',
        'correct':'b'
    },
    {
        'que':'What does sus mean?',
        'a':'sustainable',
        'b':'suspicious',
        'c':'satisfactory',
        'd':'sunny',
        'correct':'b'
    },
    {
        'que':'What does no-cap stand for?',
        'a':'not wearing a cap',
        'b':'no gums',
        'c':'lost cap',
        'd':'No-lie or real',
        'correct':'d'
    },
    {
        'que':'What is a wig?',
        'a':'something that is amazing',
        'b':'angry',
        'c':'scared',
        'd':'artificial hair',
        'correct':'a'
    },
    {
        'que':'What does woke stand for?',
        'a':'cool',
        'b':'tall',
        'c':'aware of social justice',
        'd':'no sleep',
        'correct':'c'
    },
    {
        'que':'What is ghosting?',
        'a':'to host a ghost',
        'b':'using snapchat',
        'c':'being ignored',
        'd':'giving a hug',
        'correct':'c'
    },
    {
        'que':'What does swole stand for?',
        'a':'smart',
        'b':'buff',
        'c':'beautiful',
        'd':'cute',
        'correct':'b'
    },
    {
        'que':'What does finna mean?',
        'a':'planning something',
        'b':'fantastic',
        'c':'a secret conversation',
        'd':'finish',
        'correct':'a'
    },
    {
        'que':'Who was in "The Greatest Showman" and "Spider-Man: No Way Home"?',
        'a':'Dwayne Johnson',
        'b':'Zendaya',
        'c':'Salman Khan',
        'd':'Millie Bobbie Brown',
        'correct':'b'
    },
    {
        'que':'What is a chat app popular with gamers?',
        'a':'ChatGpt',
        'b':'discord',
        'c':'Snapchat',
        'd':'instant-messenger',
        'correct':'b'
    },
    {
        'que':'Who became the worlds youngest billionaire in 2018?',
        'a':'Kylie Jenner',
        'b':'Elon Musk',
        'c':'Gigi Hadid',
        'd':'Zendaya',
        'correct':'a'
    }
]
let index=0;
let total=questions.length;
let right=0,
wrong=0;
const quesBox=document.getElementById("quesBox")
const optionInputs=document.querySelectorAll('.options')
const loadQuestion=() => {
    if(index === total){
        return endQuiz()
    }
    reset();
    const data= questions[index]
    quesBox.innerText=`${index+1})${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}
const submitQuiz=() =>{
    const data=questions[index];
    const ans=getAnswer()
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer=() =>{
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz = () => {
    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
    <h3>You're an OG FR!!</h3>
    <h2>${right}/${total} are correct </h2>
    </div>
    `
} 
loadQuestion();
