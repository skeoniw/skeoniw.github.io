let responses = [
    "hmm... i've never heard that one before.",
    "don't tell me, tell your mother.",
    "hahahaha, uh, okay.",
    "don't be mad, but i'm absolutely telling everyone this. it's funny.",
    "weird, dude.",
    "and you've kept that to yourself for how long?",
    "idk if i can trust u anymore...",
    "that's ... new",
    "yikes",
    "okkkayyyy no judging", 
    "ur lucky im not a judge",
    "i know i asked but like...",
    "have u tried betterhelp?",
];

let shh = JSON.parse(localStorage.getItem("userResponses")) || [];

function storeResponse(response) {
    shh.push(response);
    localStorage.setItem("userResponses", JSON.stringify(shh));
}

function displayShh() {
    let header = document.getElementById("header");
    if (shh.length > 0) {
        header.innerHTML = shh.join("<br>");
    } else {
        header.textContent = " ";
    }
}

function tell() {
    let inputField = document.getElementById("secret");
    let userInput = inputField.value.trim();

    if (userInput.toLowerCase() === "secret") {
        displayShh();
    } else {
        document.getElementById("header").textContent = userInput || "tell me a secret";
    }
}

document.getElementById("secret").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();

        let inputField = document.getElementById("secret");
        let userInput = inputField.value.trim();

        if (userInput !== "") {
            if (userInput.toLowerCase() !== "secret") {
                let randomResponse = responses[Math.floor(Math.random() * responses.length)];
                document.getElementById("header").textContent = randomResponse;
                storeResponse(userInput);
            }
            inputField.value = "";
            document.getElementById("header").textContent = "tell me a secret";
        }
    }
});

let gradient = document.getElementById('gradient-overlay');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let fixedRadius = 150; 

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  gradient.style.background = 'radial-gradient(circle ' + fixedRadius + 'px at ' + mouseX + 'px ' + mouseY + 'px, rgba(0, 123, 255, 0.4) 0%, transparent 60%)';
});

let isCyan = false;

document.addEventListener("keydown", () => {
    document.body.style.backgroundColor = isCyan ? "white" : "#66c7ffd9";
    isCyan = !isCyan;
});