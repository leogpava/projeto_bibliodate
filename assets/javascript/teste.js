let nic = new Date(2023, 3, 24); // Corrija o mês para abril (3)
let data = new Date();
let dif = data.getTime() - nic.getTime();
let dias = Math.floor(dif / (1000 * 60 * 60 * 24)); // Corrija para calcular dias corretamente

console.log(dias);