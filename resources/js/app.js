import { updateData } from "./helper.js";

const radioButtons = document.querySelectorAll('.radio-button');
const radioButtonsArray = [...radioButtons];
const cards = document.querySelectorAll('.content');

const fetchData = async () => {
    const times = document.querySelectorAll('.time');
    try {
        const response = await fetch('../../data.json');
        if (response.ok) {
            const jsonResponse = await response.json();
            await updateData(jsonResponse);
        }
    } catch (error) {
        console.log(error);
    }
}

fetchData();

radioButtonsArray.forEach(radioButton => {
    radioButton.addEventListener('click', () => {
        fetchData();
    });
})

cards.forEach(card => {
    card.addEventListener('click', () => {
        
    })
})