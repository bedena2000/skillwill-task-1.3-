const inputElement = document.querySelector(".average-input");
const buttonElement = document.querySelector(".average-button");

function throwError() {
	window.alert("გთხოვთ შეიყვანოთ სწორი მონაცემები");
};

function getAverageFromArray(arrayOfNumbers) {
	const arraySize = arrayOfNumbers.length;
	let sum = 0;
	for(let i = 0; i < arraySize; i++) {
		sum = sum + Number(arrayOfNumbers[i]);
	};
	return (sum / arraySize).toFixed(2);
};

function checkIfArrayIsProper(ourArray) {
	const arraySize = ourArray.length;
	let checker = true;
	for(let i = 0; i < arraySize; i++) {
		if(isNaN(Number(ourArray[i]))) {
			checker = false;
		};
	};
	return checker;
};

buttonElement.addEventListener('click', function() {
	const valueOfInput = inputElement.value;
	if(valueOfInput.includes(':')) {
		const resultArray = valueOfInput.split(":");
		if(checkIfArrayIsProper(resultArray)) {
			const average = getAverageFromArray(resultArray);
			window.alert('ჯამი უდრის: ' + average);
		} else {
			throwError();
		};
	} else {
		throwError();
	};
});

document.body.addEventListener("keyup", function(event) {
	if(event.key === "Enter") {
		const valueOfInput = inputElement.value;
		if(valueOfInput.includes(':')) {
			const resultArray = valueOfInput.split(":");
			if(checkIfArrayIsProper(resultArray)) {
				const average = getAverageFromArray(resultArray);
				window.alert('ჯამი უდრის: ' + average);
			} else {
				throwError();
			};
		} else {
			throwError();
		};
	};
});

