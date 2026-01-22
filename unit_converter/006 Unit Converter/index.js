
const meterToFeet= 3.281 
const footToMeter = 0.304

const literToGallon = 0.264
const gallonToLiter = 3.7854

const kilogramTOPound = 2.204 
const poundToKilogram = 0.453592


const input =document.getElementById("input")

const convertBtn= document.getElementById("convert-btn")
const length = document.getElementById("length")
const feetMeasure = document.getElementById("foot")
const volume= document.getElementById("volume")
const mass = document.getElementById("mass")


convertBtn.addEventListener("click", function(){
 let baseValue = input.value

 
 length.textContent = `${baseValue} meters = ${(baseValue* meterToFeet).toFixed(2)} | ${baseValue} foot = ${(baseValue* footToMeter).toFixed(2)} meters `

volume.textContent = `${baseValue} liters =${(baseValue * literToGallon).toFixed(2)} | ${baseValue} gallons = ${(baseValue * gallonToLiter).toFixed(2)} `

mass.textContent = `${baseValue} kilo = ${(baseValue * kilogramTOPound).toFixed(2)} | ${baseValue} pounds = ${(baseValue * poundToKilogram).toFixed(2)}`

})