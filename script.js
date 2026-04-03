// Copy functionality (for docs if needed)
function copy(text){
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
}

// DEMO CHAT LOGIC
const chatOutput = document.getElementById('chat-output');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

let uwuifiedUser = null;
let demoStage = 0; // Tracks demo flow

function uwuify(msg){
    return msg.replace(/r|l/g,"w").replace(/R|L/g,"W").replace(/no/g,"nu").replace(/has/g,"haz")+" uwu";
}

function addMessage(author, text, type){
    let p = document.createElement('p');
    if(type === 'system') p.className = 'system-msg';
    else if(type === 'uwu') p.className = 'uwu-msg';
    else if(type === 'npc') p.className = 'npc-msg';
    else p.className = 'user-msg';
    p.innerHTML = `<b>${author}:</b> ${text}`;
    chatOutput.appendChild(p);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

// Demo flow
function startDemo(command){
    if(command.trim() === `/uwuify CoolEthan133`){
        uwuifiedUser = "CoolEthan133";
        addMessage("System", `${uwuifiedUser} was uwuified for 10 minutes!`, 'system');
        chatInput.disabled = false;
        sendBtn.disabled = false;
        demoStage = 1;
    } else {
        addMessage("System", "Run `/uwuify CoolEthan133` to start the demo.", 'system');
    }
}

// Send button
sendBtn.addEventListener('click',()=>{
    let msg = chatInput.value.trim();
    if(!msg) return;
    if(demoStage === 1 && uwuifiedUser){
        addMessage(uwuifiedUser, uwuify(msg), 'uwu');
        chatInput.value = "";
        // NPC replies
        setTimeout(()=>{ addMessage("alex932","haha! that's funny","npc"); },800);
        setTimeout(()=>{ addMessage("CoolEthan133","whats this?","uwu"); },1500);
    } else {
        addMessage("System","Please run `/uwuify CoolEthan133` first.","system");
    }
});

// Optional: simulate initial NPC message
setTimeout(()=>{ addMessage("CoolEthan133","Hey guys!","user"); },500);
