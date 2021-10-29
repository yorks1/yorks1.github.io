let seed = document.getElementById("seed");
let message = document.getElementById("message");
let encodedMessage = document.getElementById("encodedMessage");
let encodedBtn = document.getElementById("encodedBtn");
encodeBtn.onclick = encode;

let decodeseed = document.getElementById("decodeSeed");
let messageToDecode = document.getElementById("messageToDecode");
let decodedMessage = document.getElementById("decodedMessage");
let decodedBtn = document.getElementById("decodedBtn");
decodeBtn.onclick = decode;

let letters = " abcdefghijklmnopqrstuvwxyz,.?!".split("");
let value = {};
for (let i = 0; i < letters.length; i++) {
	value[letters[i]] = i;
}

function setup() {
	let letters = " abcdefghijklmnopqrstuvwxyz,.?!".split("");
	for (let i = 0; i < letters.length; i++) {
		value[letters[i]] = i;
	}
}

function encode() {
	let startSeed = seed.value;
	randomSeed(startSeed);
	let messageText = message.value.toLowerCase();
	let result = "";
	for (let i = 0; i < messageText.length; i++) {
		let letter = messageText[i];
		let num = value[letter] + round(random(1, 100));
		num %= letters.length;
		result += letters[num];
	}
	encodedMessage.innerHTML = result;

}

function decode() {
	let startSeed = decodeseed.value;
	randomSeed(startSeed);
	let messageText = messageToDecode.value.toLowerCase();
	let result = "";
	for (let i = 0; i < messageText.length; i++) {
		let letter = messageText[i];
		let num = value[letter] - round(random(1, 100));

		num %= letters.length;
		num += letters.length;
		num %= letters.length;
		result += letters[num];
	}
	decodedMessage.innerHTML = result;
}
