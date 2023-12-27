// const otpInputs = document.querySelectorAll(".otpInput");

// const focusNext = (currentInput) => {
//   const maxLength = parseInt(currentInput.maxLength, 10);
//   const currentInputIndex = Array.from(otpInputs).indexOf(currentInput);
//   if (isNaN(currentInput.value)) {
//     currentInput.value = "";
//     return;
//   }
//   if (currentInput.value.length === maxLength) {
//     const nextInput = otpInputs[currentInputIndex + 1];
//     if (nextInput) {
//       nextInput.focus();
//     }
//   }
// };

// const focusPrevious = (currentInput, key) => {
//   const currentInputIndex = Array.from(
//     currentInput.parentElement.parentElement.children
//   ).indexOf(currentInput.parentElement);

//   if (currentInput.value.length !== 0) {
//     const previousInput = otpInputs[currentInputIndex - 1];
//     if (key === "Backspace") {
//       currentInput.value = "";
//     }
//     if (previousInput) {
//       previousInput.focus();
//     }
//   }
// };

// otpInputs.forEach((input) => {
//   input.addEventListener("input", (event) => {
//     focusNext(input);
//   });

//   input.addEventListener("keydown", (event) => {
//     if (/^[0-9a-zA-Z]$/.test(event.key) && input.value !== "") {
//       focusNext(input);
//     }
//     if (event.key === "Backspace" || event.key === "Delete") {
//       event.preventDefault();
//       focusPrevious(input, "Backspace");
//     } else if (event.key === "ArrowLeft") {
//       event.preventDefault();
//       focusPrevious(input, "ArrowLeft");
//     } else if (event.key === "ArrowRight") {
//       event.preventDefault();
//       focusNext(input);
//     }
//   });

//   input.addEventListener("paste", (e) => {
//     e.preventDefault();
//     const pastedDigits = e.clipboardData.getData("text");
//     if (isNaN(pastedDigits)) {
//       input.value = "";
//       return;
//     }
//     if (pastedDigits) {
//       for (let i = 0; i < otpInputs.length; i++) {
//         const digit = i < pastedDigits.length ? pastedDigits[i] : "";
//         otpInputs[i].value = digit;
//       }
//       otpInputs[otpInputs.length - 1].focus();
//     }
//   });
// });
