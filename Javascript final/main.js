let help = "";
const sageBtn = document.getElementById('sage');
const brimstoneBtn = document.getElementById('brimstone');
const phoenixBtn = document.getElementById('phoenix');
const sovaBtn = document.getElementById('sova');
const viperBtn = document.getElementById('viper');
const cypherBtn = document.getElementById('cypher');
const reynaBtn = document.getElementById('reyna');
const killjoyBtn = document.getElementById('killjoy');
const breachBtn = document.getElementById('breach');
const omenBtn = document.getElementById('omen');
const jettBtn = document.getElementById('jett');
const yoruBtn = document.getElementById('yoru');

// creating event listeners on buttons
sageBtn.addEventListener('click', function(){
    
    userPicked('sage');
});
brimstoneBtn.addEventListener('click', function(){
   
    userPicked('brimstone');
});
phoenixBtn.addEventListener('click', function(){
   
    userPicked('phoenix');
});
sovaBtn.addEventListener('click', function(){
   
    userPicked('sova');
});
viperBtn.addEventListener('click', function(){
   
    userPicked('viper');
});cypherBtn.addEventListener('click', function(){
   
    userPicked('cypher');
});reynaBtn.addEventListener('click', function(){
   
    userPicked('reyna');
});killjoyBtn.addEventListener('click', function(){
   
    userPicked('killjoy');
});breachBtn.addEventListener('click', function(){
   
    userPicked('breach');
});omenBtn.addEventListener('click', function(){
   
    userPicked('omen');
});jettBtn.addEventListener('click', function(){
   
    userPicked('jett');
});yoruBtn.addEventListener('click', function(){
   
    userPicked('yoru');
});
// helpBtn.addEventListener('click', function(){
//     //doing stuff
//     userPicked('help');
// });

//create function userPicked();
function userPicked(buttonName){
    console.log('the user picked'+ buttonName);
    const agentMember = document.getElementById('agentMember');
    const agentImage = document.getElementById('agentImage');
    const agentCopy = document.getElementById('agentCopy');

    switch (buttonName){
        case 'sage':
            speakers.src = 'sounds/sage.mp3';
            speakers.play();
            agentMember.innerHTML = "You are Sage."
            agentImage.src = 'images/Sage.jpeg';
            agentCopy.innerHTML = "You are a sentinal, your main focus is heal and support your teammates while they charge into the line of fire."
            modal.hidden = !modal.hidden;
            break;
        case 'brimstone':
            speakers.src = 'sounds/brimstone.mp3';
            speakers.play();
            agentMember.innerHTML = "You are Brimstone."
            agentImage.src = 'images/Brimstone.jpeg';
            agentCopy.innerHTML = "You are a smoker, your main focus is to throw the enemy off with your smoking ability to give your team a great advantage."
            modal.hidden = !modal.hidden;
            break;
        case 'phoenix':
            speakers.src = 'sounds/phoenix.mp3';
            speakers.play();
            agentMember.innerHTML = "You are Phoenix."
            agentImage.src = 'images/Phoenix.jpeg';
            agentCopy.innerHTML ="You are a duelist, your main focus is to be the spear of your offense to charge into enemy lines with a chance at second life."
            modal.hidden = !modal.hidden;    
        break;
        case 'sova':
            speakers.src = 'sounds/sova.mp3';
            speakers.play();
            agentMember.innerHTML = "You are Sova."
            agentImage.src = 'images/Sova.jpeg';
            agentCopy.innerHTML ="You are an initiator, your main focus is to provide your team recon and information to locate the enemy team in order to have a more precise attack/defense."
            modal.hidden = !modal.hidden;
            break;
        case 'viper':
            speakers.src = 'sounds/viper.mp3';
            speakers.play();
            agentMember.innerHTML = "You are Viper."
            agentImage.src = 'images/Viper.jpeg';
            agentCopy.innerHTML ="You are a smoker, your main focus is to throw the enemy off with your immense amount of smoking ability while causing disruption with your poisonous grenades."
            modal.hidden = !modal.hidden;
            break;
        case 'cypher':
            speakers.src = 'sounds/Adrianna.mp3';
            speakers.play();
            agentMember.innerHTML = "You are Cypher."
            agentImage.src = 'images/cypher.jpeg';
            agentCopy.innerHTML = "You are a sentinal, your main focus is to watch your teammates back by providing cover with tripwires and traps while also spying on the enemy with your mini-camera"
            modal.hidden = !modal.hidden;
            break;
        case 'reyna':
            speakers.src = 'sounds/reyna.mp3';
            speakers.play();
            agentMember.innerHTML = "You are Reyna."
            agentImage.src = 'images/Reyna.jpeg';
            agentCopy.innerHTML ="You are a duelist, your main focus is to bulldoze straight into the enemy lines with your high skillset, outpowering the otherside by tenfold when you successfully take an enemy down."
            modal.hidden = !modal.hidden;
            break;
        case 'killjoy':
            speakers.src = 'sounds/killjoy.mp3';
            speakers.play();
            agentMember.innerHTML = "You are Killjoy."
            agentImage.src = 'images/Killjoy.jpeg';
            agentCopy.innerHTML ="You are a sentinal, your job is guard your sites with your utilities to stall the enemy for as long as possible until your backup arives. You can also be creative with your placement of the utility to throw your enemies off."
            modal.hidden = !modal.hidden;
            break;
        case 'breach':
            speakers.src = 'sounds/breach.mp3';
            speakers.play();
            agentMember.innerHTML = "You are Breach."
            agentImage.src = 'images/Breach.jpeg';
            agentCopy.innerHTML ="You are an initiator, your main focus is to distract the enemy with your stuns and blinds in order to provide your teammates an easier entrance onto site."
            modal.hidden = !modal.hidden;
            break;
        case 'omen':
            speakers.src = 'sounds/omen.mp3';
            speakers.play();
            agentMember.innerHTML = "You are Omen."
            agentImage.src = 'images/Omen.jpeg';
            agentCopy.innerHTML ="You are a smoker, your main focus to use your smokes to blind the enemies line of sight while also occasionally playing the role of a lurker where you can sneak behind your enemies without them noticing."
            modal.hidden = !modal.hidden;
            break;
        case 'jett':
            speakers.src = 'sounds/jett.mp3';
            speakers.play();
            agentMember.innerHTML = "You are Jett."
            agentImage.src = 'images/Jett.jpeg';
            agentCopy.innerHTML = "You are a duelist, your main focus is to use your agile movements to dash onto site and create space for your team. Out of all the dueslists you have one of the most useful skillsets but the problem of controlling your skills."
            modal.hidden = !modal.hidden;
            break;
        case 'yoru':
            speakers.src = 'sounds/yoru.mp3';
            speakers.play();
            agentMember.innerHTML = "You are Yoru."
            agentImage.src = 'images/Yoru.jpeg';
            agentCopy.innerHTML ="You are a duelist, your main focus is confuse the enemy team with your decoys and fakes while being the wildcard with your teleportations. You also have an ability to give information to your team."
            modal.hidden = !modal.hidden;
            break;
       
    default:
       
    }
}

const userSubmitBtn = document.getElementById('submitBtn');


userSubmitBtn.addEventListener('click', function() {

    
    const userBday = new Date(document.getElementById('bday').value);
    
    const whichMonth = userBday.getUTCMonth() + 1;
   

    const whichDayOfMonth = userBday.getUTCDate();
    

    // Zodiac Algorithm
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "sage";
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "brimstone";
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "phoenix";
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "sova";
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "viper";
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "cypher";
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "reyna";
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "killjoy";
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "breach";
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "omen";
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "jett";
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "yoru";
    }
  

    console.log(AstroSign);
    userPicked(AstroSign);
});

// modal
const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('btn-modal-close');
modalCloseBtn.addEventListener('click', function() {
    modal.hidden = !modal.hidden;
})

//  help button 
const showHelpBox = () =>{

    const helpBox = document.querySelector('.help-box');
  
    // show and hide box
    if (help){
        helpBox.style.display = "none";
        help = false;
    }
    
    else{
        helpBox.style.display = "flex";
        help = true;
    }
  
    rectangle(help);
  };
  //  main box hide
function rectangle(hiding){
    const mainRectangle = document.querySelector('.help-box-body');
    if (hiding){
      mainRectangle.style.display = "none";
    }
    else{
      mainRectangle.style.display = "block";
    }
  }
  //  help open button 
  const helpOpenButton = document.querySelector('.help-button');
  helpOpenButton.addEventListener('click', showHelpBox);
  
  // help close button
  const helpCloseButton = document.querySelector('.help-button-close');
  helpCloseButton.addEventListener('click', showHelpBox);

//   help button end 