const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

const endPoint = 10;

function addAnswer(answerText,qIdx){
    var a = document.querySelector(".aBox");
    var answer = document.createElement('button');
    
    answer.classList.add('answerList');
    answer.classList.add('my-5');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    
    answer.classList.add('fadeIn');

    a.appendChild(answer);

    answer.innerHTML = answerText;

    answer.addEventListener("click",function(){
        var children = document.querySelectorAll('.answerList'); 
        for(let i=0;i<children.length;i++){
            children[i].disabled = true;

            children[i].style.WebkitAnimation = "fadeOut 0.5s"
            children[i].style.animation = "fadeOut 0.5s"
        }
        setTimeout(()=>{
            for(let i=0;i<children.length;i++){
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        },450)
    },false)


}

function goNext(qIdx){
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    
    for(let i in qnaList[qIdx].a)
    {
        addAnswer(qnaList[qIdx].a[i].answer,qIdx);
    }
    var countStatusNum = document.querySelector('.countStatus');
    countStatusNum.innerHTML = (qIdx+1)+"/"+endPoint;

    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint)*(qIdx+1)+"%"

}

function start(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(()=>{
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";            
        }, 450);
        let qIdx = 0;
        goNext(qIdx);
    },450);
}