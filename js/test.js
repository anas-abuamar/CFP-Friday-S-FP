//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
    info_box = document.querySelector(".info_box");
    exit_btn = info_box.querySelector(".buttons .quit");
    continue_btn = info_box.querySelector(".buttons .restart");
    quiz_box = document.querySelector(".quiz_box");
    result_box = document.querySelector(".result_box");
    option_list = document.querySelector(".option_list");
    time_line = document.querySelector("header .time_line");
    timeText = document.querySelector(".timer .time_left_txt");
    timeCount = document.querySelector(".timer .timer_sec");

// startQuiz
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// exitQuiz
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}
var  ST = 9; 
// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(ST); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

var  timeValue =  ST;
var  que_count = 0;
var  que_numb = 1;
var  studentScore = 0;
var  counter;
var  counterLine;
var  widthValue = 0;
var  tot_exam = 150;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    //result_box.classList.remove("activeResult"); //hide result box
    timeValue = 2; 
    que_count = 0;
    que_numb = 1;
    studentScore = 0;
    widthValue = 0;
    showQuetions(que_count);
    queCounter(que_numb); 
    clearInterval(counter); 
    clearInterval(counterLine); 
    startTimer(timeValue); 
    startTimerLine(widthValue); 
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// quitQuiz
quit_quiz.onclick = ()=>{
    window.location= "index.html"; //Back to home
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //que count is less than total question length
        que_count++; 
        que_numb++; 
        showQuetions(que_count); 
        queCounter(que_numb); 
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue);
        startTimerLine(widthValue); 
        timeText.textContent = "Time Left"; 
        next_btn.classList.remove("show"); 
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    var  que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    var  option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
var  tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
var  crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
var  selectTag   =   '<div class="icon pointer"><i class="fas fa-mouse-pointer"></i></div>';
//if student clicked on option
function optionSelected(answer){
    clearInterval(counter); // counter
    clearInterval(counterLine); // counterLine
    var  studentAns = answer.textContent; //getting student selected option
    var  correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    answer.classList.add("select"); // adding select  
    answer.insertAdjacentHTML("beforeend", selectTag); //adding cross icon to correct selected option
    if(studentAns == correcAns){
        studentScore += 30;
        //answer.classList.add("select"); //adding green color to correct selected option
        //answer.insertAdjacentHTML("beforeend", selectTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + studentScore);
    }else{
        //answer.classList.add("incorrect"); //adding red color to correct selected option
        //answer.insertAdjacentHTML("beforeend", selectTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                //option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                //option_list.children[i].insertAdjacentHTML("beforeend", selectTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //when student select an option then disabled all other
    }
    next_btn.classList.add("show"); //show the next button if student selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (studentScore >= 120){
        var  scoreTag = '<span>and Accepted congrats! 🎉, You got <p>'+ studentScore +'</p> out of <p>'+ tot_exam +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(studentScore > 60){ 
        var  scoreTag = '<span>waiting list nice 🙃, You got <p>'+ studentScore +'</p> out of <p>'+ tot_exam +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        var  scoreTag = '<span>not accepted 😐, You got only <p>'+ studentScore +'</p> out of <p>'+ tot_exam +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time == 0){ //if timer is less than 0
            next_btn.click();
            startTimer(ST);
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 400){ // 400 ` Width for info box
            clearInterval(counterLine); 
        }
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    var  totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}