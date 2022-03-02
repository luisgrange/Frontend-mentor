const id = document.querySelector('.advice-id');
const advice = document.querySelector('.advice-text');
const btn = document.querySelector('.btn');

document.addEventListener('DOMContentLoaded', async function(){
    let response = await fetch('https://api.adviceslip.com/advice');
    response = await response.json();
//   console.log(response);
    id.textContent = `Advice #${response.slip.id}`;
    advice.textContent = `${response.slip.advice}`;

    btn.addEventListener('click', async function(){
        let another = await fetch('https://api.adviceslip.com/advice');
        another = await another.json();
        id.textContent = `Advice #${another.slip.id}`;
        advice.textContent = `${another.slip.advice}`;
    })
})

