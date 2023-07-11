 // formula for speed calculating
//  speed=(actualwords/totaltime)*60
const typing_ground=document.querySelector("#textarea");
const btn=document.querySelector("#btn");
const score=document.querySelector("#score");
const show_sentence=document.querySelector("#showsentences");
const show_time=document.querySelector("#show-time");
let starttime, endtime, totaltime,sentence_to_write;
// next call function click on button to check whether it is start or done
// case 1 if it is at start--> then a enable the textarea and call the starttyping function
// case 2 if it is done than disable the typing function and call the endtyping function
const sentences=['A complex sentence combines an independent clause with one or more subordinate clauses. Complex sentences always use subordinating conjunctions to connect the clauses. ',
'One hallmark of interrogative sentences is that they usually begin with pronouns or auxiliary verbs. When this kind of sentence does start with the subject, it’s usually in colloquial speech. ',
'The only difference between a declarative sentence and an exclamatory one is the punctuation at the end. But that punctuation makes a big difference in how the reader or listener interprets the sentence.',
'A simple sentence is the most basic type of sentence. This kind of sentence consists of just one independent clause, which means it communicates a complete thought and contains a subject and a verb.',
'How can you tell if you have a compound sentence? Swap out your semicolon, colon, or coordinating conjunction for a period. If you now have two distinct, complete sentences, you’ve got a compound sentence. '
 ];
 // function of checkoing words
 const errorchecking = (words) =>{
    //console.log(words);
    let num=0;
    sentence_to_write = show_sentence.innerHTML;
    sentence_to_write =sentence_to_write.trim().split("");
    for(let i=0;i<words.length;i++){
        if(words[i]===sentence_to_write[i]){
            num++;
        }

        
    }
return num;

 }
 // this function calculate the typing speed of the user
 const calculateTypingspeed =(time_taken) =>{
    let totalword=typing_ground.value.trim();
    let actualwords=totalword === ''? 0 :totalword.split("").length;
    // logic for checking of type words by user and given actual sentences 
    actualword=errorchecking(actualwords);
    if(actualwords!==0){
        let typing_speed=(actualwords/totaltime)*60;
        typing_speed=Math.round(typing_speed);
score.innerHTML=`your typing speed is ${typing_speed} words per minutes and you wrote
${actualwords}  correct words out of ${sentence_to_write.length} and time taken ${time_taken} sec`
                      
    }
    else{
        score.innerHTML=`your typing speed is 0 word per minute and time taken ${time_taken} sec`;
    }
 }
const endTyping = () =>{
    btn.innerText="Start";
    showTimer();
    let date= new Date();
    endtime=date.getTime();
    totaltime=(endtime-starttime)/1000;
    calculateTypingspeed(totaltime);
    show_sentence.innerHTML="";
    typing_ground.value="";
}
 const startTyping = () =>{
    let randomnumber=Math.floor(Math.random()*sentences.length);
    show_sentence.innerHTML=sentences[randomnumber];
    let date=new Date();
    starttime=date.getTime();
    btn.innerText="Done";
    // timer function
    showTimer();

 }
 // implementation of timer function
 let intervalid, elapsetime=0;
 const showTimer =()=>{
if(btn.innerText === "Done"){
     intervalid = setInterval(() =>{
        elapsetime++;
        show_time.innerHTML=elapsetime;
    },1000)
}
else if(btn.innerText === "Start"){
    elapsetime=0;
    clearInterval(intervalid);
    show_time.innerHTML="";
}
 }


btn.addEventListener("click",()=>{
    switch(btn.innerText.toLowerCase()){
        case "start":
            typing_ground.removeAttribute('disabled');
            startTyping();
            break;
            case "done":
                typing_ground.setAttribute('disabled','true');
                endTyping();
                break;
    }

});
