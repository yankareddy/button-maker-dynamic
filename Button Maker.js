let customButton = document.getElementById("customButton");
let bgColorInput = document.getElementById("bgColorInput");
let fontColorInput = document.getElementById("fontColorInput");
let fontSizeInput = document.getElementById("fontSizeInput");
let fontWeightInput = document.getElementById("fontWeightInput");
let paddingInput = document.getElementById("paddingInput");
let borderRadiusInput = document.getElementById("borderRadiusInput");
let applyButton = document.getElementById("applyButton");

applyButton.onclick = function() {
    let bgColor = bgColorInput.value;
    customButton.style.backgroundColor = bgColor;
    let fontColor = fontColorInput.value;
    customButton.style.color = fontColor;
    let fontSize = parseInt(fontSizeInput.value) + "px";
    customButton.style.fontSize = fontSize;
    let fontWeight = parseInt(fontWeightInput.value);
    customButton.style.fontWeight = fontWeight;
    let padding = parseInt(paddingInput.value) + "px";
    customButton.style.padding = padding;
    let borderRadius = parseInt(borderRadiusInput.value) + "px";
    customButton.style.borderRadius = borderRadius;


}