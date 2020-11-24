const coloridas = document.querySelector('#Coloridas');
const frases = document.querySelector('#Frases_Inspiradoras');
const animals = document.querySelector('#Animals');
const sweet = document.querySelector('#Sweet_B');
const love = document.querySelector('#Love');
const unica = document.querySelector('#Unica');
const blue = document.querySelector('#Blue');
const coloridas_n = document.querySelector('#Coloridas>p');
const frases_n = document.querySelector('#Frases_Inspiradoras>p');
const animals_n = document.querySelector('#Animals>p');
const sweet_n = document.querySelector('#Sweet_B>p');
const love_n = document.querySelector('#Love>p');
const unica_n = document.querySelector('#Unica>p');
const blue_n = document.querySelector('#Blue>p');



async function GetClothes (){

await clothes.Coloridas.forEach(shirt => {
        const shirta = createProduct(shirt);
        coloridas.appendChild(shirta);
  })
await clothes.Frases_Inspiradoras.forEach(shirt => {
    const shirta = createProduct(shirt);
    frases.appendChild(shirta);
})
await clothes.Animals.forEach(shirt => {
    const shirta = createProduct(shirt);
    animals.appendChild(shirta);
})
await clothes.Sweet_Boho.forEach(shirt => {
    const shirta = createProduct(shirt);
    sweet.appendChild(shirta);
})
await clothes.Love.forEach(shirt => {
    const shirta = createProduct(shirt);
    love.appendChild(shirta);
})
await clothes.Única.forEach(shirt => {
    const shirta = createProduct(shirt);
    unica.appendChild(shirta);
})
await clothes.Blue.forEach(shirt => {
    const shirta = createProduct(shirt);
    blue.appendChild(shirta);
})
  

}   

coloridas_n.textContent = `${clothes.Coloridas.length} items`
frases_n.textContent = `${clothes.Frases_Inspiradoras.length} items`
animals_n.textContent = `${clothes.Animals.length} items`
sweet_n.textContent = `${clothes.Sweet_Boho.length} items`
love_n.textContent = `${clothes.Love.length} items`
unica_n.textContent = `${clothes.Única.length} items`
blue_n.textContent = `${clothes.Blue.length} items`

GetClothes()