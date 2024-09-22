document.addEventListener("DOMContentLoaded", () => {
    const inputText = document.getElementById("inputText");
    const buttonText = document.getElementById("buttonText");

    buttonText.addEventListener("click", () => {
        const textValue = inputText.value.trim();
        
        if (textValue) {
            localStorage.setItem("inputValue", textValue);
            inputText.value = '';
        } else {
            console.log("Por favor, ingrese un valor válido.");
        }
    });
});
