const colorDisplay = document.querySelector('.colorDisplay')

var sliderHue = document.getElementById("slider hue")
var sliderLight = document.getElementById("slider light");
var sliderSaturation = document.getElementById("slider saturation")

sliderHue.onmousemove = function () {
  var output = document.getElementById("hueValue");
  var sliderHueValue = sliderHue.value
  var sliderLightValue = sliderLight.value
  var sliderSaturationValue = sliderSaturation.value
  var hueColor = `hsl(${sliderHueValue},${sliderLightValue}%,${sliderSaturationValue}%)`
  var shadowColor = `0px 0px 53px 13px hsl(${sliderHueValue},${sliderLightValue}%,${sliderSaturationValue}%)`
  colorDisplay.style.backgroundColor = hueColor;
  colorDisplay.style.boxShadow = shadowColor
  output.innerHTML = sliderHueValue + ',';
}

sliderLight.onmousemove = function () {
  var output = document.getElementById("lightValue");
  var sliderHueValue = sliderHue.value
  var sliderLightValue = sliderLight.value
  var sliderSaturationValue = sliderSaturation.value
  var hueColor = `hsl(${sliderHueValue},${sliderLightValue}%,${sliderSaturationValue}%)`
  var shadowColor = `0px 0px 53px 13px hsl(${sliderHueValue},${sliderLightValue}%,${sliderSaturationValue}%)`
  colorDisplay.style.backgroundColor = hueColor;
  colorDisplay.style.boxShadow = shadowColor
  output.innerHTML = sliderLightValue + '%,';
}

sliderSaturation.onmousemove = function () {
  var output = document.getElementById("lightSaturation");
  var sliderHueValue = sliderHue.value
  var sliderLightValue = sliderLight.value
  var sliderSaturationValue = sliderSaturation.value
  var hueColor = `hsl(${sliderHueValue},${sliderLightValue}%,${sliderSaturationValue}%)`
  var shadowColor = `0px 0px 53px 13px hsl(${sliderHueValue},${sliderLightValue}%,${sliderSaturationValue}%)`
  colorDisplay.style.backgroundColor = hueColor;
  colorDisplay.style.boxShadow = shadowColor
  output.innerHTML = sliderSaturationValue + '%)';
}