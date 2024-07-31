let counter = document.querySelector('h1');
let count=300;
setInterval(()=>{
    counter.innerText = count;
    count--
    if(count<1) location.replace('index.html')
},1000)
function checkans(){
    const answers = {
        options1:'a',
        options2:'c',
        options3:'c',
        options4:'a',
        options5:'b'
    };
    let score=0;
    let total=answers.length;
    const form = document.getElementById('options');
    const resultDiv = document.getElementById('result');
    
    for(const que in answers){
        const userans=form[que].value;
        if(userans==answers[que]){
            score++;
        }
    }
    resultDiv.textContent='your score is ${score} out of ${total}';
}