let nic = new Date(2023, 3, 24); 
let data = new Date();
let dif = data.getTime() - nic.getTime();
let dias = Math.floor(dif / (1000 * 60 * 60 * 24)); 

console.log(dias);