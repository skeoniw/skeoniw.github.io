let responses = [
    "hmm... i've never heard that one before.",
    "don't tell me, tell your mother.",
    "hahahaha, uh, okay.",
    "don't be mad, but i'm absolutely telling everyone this. it's funny.",
    "weird, dude.",
    "and you've kept that to yourself for how long?",
];

//i cross-referenced some coding sites for this, lmk if there's a better way of doing this! hi nikkiiiiiiiiiiiii

function tell() {
    let userInput = document.getElementById("secret").value;
    document.getElementById("header").textContent = userInput || "tell me a secret"; 
}

document.getElementById("secret").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 

        let randomResponse = responses[Math.floor(Math.random() * responses.length)]; 

        document.getElementById("header").textContent = randomResponse; 

        document.getElementById("secret").value = ""; 
    }
});