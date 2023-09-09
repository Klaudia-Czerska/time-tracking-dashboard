const timeStrings = document.querySelectorAll('.chosen-time');
const currentTime = {
    'Work': document.querySelector('.work .current-time'),
    'Play': document.querySelector('.play .current-time'),
    'Study': document.querySelector('.study .current-time'),
    'Exercise': document.querySelector('.exercise .current-time'),
    'Social': document.querySelector('.social .current-time'),
    'Self Care': document.querySelector('.self-care .current-time')
}
const prevoiusTime = {
    'Work': document.querySelector('.work .previous-time'),
    'Play': document.querySelector('.play .previous-time'),
    'Study': document.querySelector('.study .previous-time'),
    'Exercise': document.querySelector('.exercise .previous-time'),
    'Social': document.querySelector('.social .previous-time'),
    'Self Care': document.querySelector('.self-care .previous-time')
}

const chosenTime = () => {
    const buttons = document.querySelectorAll('.radio-button');
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].checked) {
            return buttons[i].value;
        }
    }
};

const updateData = (data) => {
    const dataKeys = Object.keys(data);
    switch (chosenTime()) {
        case 'daily':
            for (let i = 0; i < dataKeys.length; i++) {
                currentTime[data[i].title].innerText = data[i].timeframes['daily'].current;
                prevoiusTime[data[i].title].innerText = data[i].timeframes['daily'].previous;
                timeStrings.forEach(timeString => {
                    timeString.innerText = 'Day';
                })
            }
            break;
        case 'weekly':
            for (let i = 0; i < dataKeys.length; i++) {
                currentTime[data[i].title].innerText = data[i].timeframes['weekly'].current;
                prevoiusTime[data[i].title].innerText = data[i].timeframes['weekly'].previous;
                timeStrings.forEach(timeString => {
                    timeString.innerText = 'Week';
                })
            }
            break;
        case 'monthly':
            for (let i = 0; i < dataKeys.length; i++) {
                currentTime[data[i].title].innerText = data[i].timeframes['monthly'].current;
                prevoiusTime[data[i].title].innerText = data[i].timeframes['monthly'].previous;
                timeStrings.forEach(timeString => {
                    timeString.innerText = 'Month';
                })
            }
            break;
    }
    
        
}

const _updateData = updateData;
export { _updateData as updateData };