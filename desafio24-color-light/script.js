const colorDisplayClass = document.querySelector('.colorDisplay')

var Hue = document.getElementById("slider hue")
var Saturation = document.getElementById("slider saturation")
var Light = document.getElementById("slider light");

function convertHslToRgb(h, s, l) {
  s /= 100;
  l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  var r = 255 * f(0)
  var g = 255 * f(8)
  var b = 255 * f(4)
  return [Math.trunc(r), Math.trunc(g), Math.trunc(b)]
}

function convertRgbToHex(r, g, b) {
  return Math.abs(r).toString(16) + Math.abs(g).toString(16) + Math.abs(b).toString(16);
}

function displayColorChange() {
  var hueColor = `hsl(${Hue.value},${Saturation.value}%,${Light.value}%)`
  var shadowColor = `0px 0px 53px 13px ${hueColor}`
  colorDisplayClass.style.backgroundColor = hueColor;
  colorDisplayClass.style.boxShadow = shadowColor
  showHslValues("hueValue", "saturationValue", "lightValue")
  showRgbValues("rValue", "gValue", "bValue")
  showHexValues("hexValue")
}

function showHslValues(hue, saturation, light) {
  var hueNumber = document.getElementById(hue);
  var saturationNumber = document.getElementById(saturation);
  var lightNumber = document.getElementById(light);
  hueNumber.innerHTML = Hue.value + ',';
  saturationNumber.innerHTML = Saturation.value + '%,';
  lightNumber.innerHTML = Light.value + '%)';
}


function showRgbValues(red, green, blue) {
  var rgb = convertHslToRgb(Hue.value, Saturation.value, Light.value)
  var redNumber = document.getElementById(red);
  var greenNumber = document.getElementById(green);
  var blueNumber = document.getElementById(blue);
  redNumber.innerHTML = rgb[0];
  greenNumber.innerHTML = rgb[1];
  blueNumber.innerHTML = rgb[2];
}

function showHexValues(hex) {
  var rgb = convertHslToRgb(Hue.value, Saturation.value, Light.value)
  var hexNumber = document.getElementById(hex);
  hexNumber.innerHTML = convertRgbToHex(rgb[0], rgb[1], rgb[2]);
}