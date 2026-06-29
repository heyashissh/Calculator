const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll(".calculator button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value==="AC") {
            inputBox.value ="";
            return;
        }

        if (value === "DEL") {
            inputBox.value = inputBox.value.slice(0 , -1);
            return
        }

       if (button.classList.contains("equa1Btn")) {
            try {
                inputBox.value = eval(inputBox.value);
            } catch (e) {
                inputBox.value ="Error";
            }
            return;
    }
    inputBox.value += value;
    });

});