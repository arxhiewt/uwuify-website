// Copy buttons
function copy(text){
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
}

// Demo Chat Simulation (uwuify)
function uwuify(msg){
    // Simple uwuify logic
    return msg.replace(/r|l/g,"w").replace(/R|L/g,"W").replace(/no/g,"nu").replace(/has/g,"haz")+" uwu";
}

const chatOutput = document.getElementById('chat-output');
const chatInput = document.getElementById('chat-input');

function sendMessage(){
    let text = chatInput.value;
    if(text.trim() === "") return;
    let uwuText = uwuify(text);
    let pUser = document.createElement('p'); pUser.innerHTML = `<b>You:</b> ${text}`; chatOutput.appendChild(pUser);
    let pBot = document.createElement('p'); pBot.innerHTML = `<b>uwuify:</b> ${uwuText}`; chatOutput.appendChild(pBot);
    chatOutput.scrollTop = chatOutput.scrollHeight;
    chatInput.value = "";
}
