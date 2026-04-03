// COPY COMMAND BUTTONS
function copyCommand(cmd){
    navigator.clipboard.writeText(cmd);
    alert("Copied: " + cmd);
}

// CHAT DEMO LOGIC
const chatOutput = document.getElementById('chat-output');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const uwuBtnContainer = document.getElementById('uwuify-btn-container');
const runBtn = document.getElementById('run-command');

let demoStage = 0; // 0=waiting user, 1=ethan reply, 2=uwuify button ready, 3=uwuified ethan, 4=alexson67

function uwuify(msg){
    return msg.replace(/r|l/g,"w").replace(/R|L/g,"W").replace(/no/g,"nu").replace(/has/g,"haz")+" uwu";
}

function getTimeStamp(){
    const d = new Date();
    return d.getHours().toString().padStart(2,'0')+":"+d.getMinutes().toString().padStart(2,'0');
}

function addMessage(author,text,type){
    let p = document.createElement('p');
    if(type==='system') p.className='system-msg';
    else if(type==='uwu') p.className='uwu-msg';
    else if(type==='user') p.className='user-msg';
    else if(type==='npc') p.className='npc-msg';
    p.innerHTML = `<b>${author}:</b> ${text} <span class="timestamp">${getTimeStamp()}</span>`;
    chatOutput.appendChild(p);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

// TYPING INDICATOR
function addTyping(author){
    let p = document.createElement('p');
    p.className='npc-msg';
    p.id='typing';
    p.innerHTML = `<b>${author}:</b> <span class="typing-dots"><span></span><span></span><span></span></span>`;
    chatOutput.appendChild(p);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}
function removeTyping(){ let t = document.getElementById('typing'); if(t) t.remove(); }

// Handle send button
sendBtn.addEventListener('click',()=>{
    let msg = chatInput.value.trim();
    if(!msg) return;

    if(demoStage===0){
        addMessage("You",msg,"user");
        chatInput.value="";
        demoStage=1;
        setTimeout(()=>{
            addTyping("CoolEthan133");
            setTimeout(()=>{
                removeTyping();
                addMessage("CoolEthan133","Hey, how are you?","npc");
                uwuBtnContainer.style.display="block";
                demoStage=2;
            },1200);
        },600);
    } else if(demoStage===2){
        if(chatInput.value.includes("/uwuify CoolEthan133")){
            addMessage("You","/uwuify CoolEthan133","user");
            chatInput.value="";
            uwuBtnContainer.style.display="none";
            demoStage=3;
            setTimeout(()=>{
                addTyping("CoolEthan133");
                setTimeout(()=>{
                    removeTyping();
                    addMessage("CoolEthan133",uwuify("what is that?"),"uwu");
                },1200);
            },600);
            setTimeout(()=>{
                addTyping("CoolEthan133");
                setTimeout(()=>{
                    removeTyping();
                    addMessage("CoolEthan133",uwuify("whatt thats so cool"),"uwu");
                },1200);
            },1600);
            setTimeout(()=>{
                addTyping("alexson67");
                setTimeout(()=>{
                    removeTyping();
                    addMessage("alexson67","LMAOO","npc");
                    demoStage=4;
                },1200);
            },2800);
        } else {
            addMessage("You",msg,"user");
            chatInput.value="";
        }
    } else {
        addMessage("You",msg,"user");
        chatInput.value="";
    }
});

// Handle uwuify button click
runBtn.addEventListener('click',()=>{
    chatInput.value="/uwuify CoolEthan133";
    chatInput.focus();
});
