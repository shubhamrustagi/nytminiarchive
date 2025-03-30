function extractDate() {
    const inputDate = document.getElementById('dateInput').value;
    const minDate = new Date('2014-08-21');
    const maxDate = new Date();
    const date = new Date(inputDate);
    const datetextElement = document.getElementById('dateText');
    const linkerElement = document.getElementById('linker');
    datetextElement.style.visibility = "visible";
    if (date < minDate) {
        datetextElement.innerHTML ="The date cannot be before 21 August 2014.";
        
        return;
    }
    if (date > maxDate) {
        datetextElement.innerHTML = "The date cannot be in the future.";
        
        return;
    }
    if (inputDate) {
        const dateParts = inputDate.split('-');
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        const linkWithDate = `https://www.nytimes.com/crosswords/game/mini/${dateParts[0]}/${dateParts[1]}/${dateParts[2]}`;
        linkerElement.innerHTML = `<a target="_blank" href="${linkWithDate}">Open Here</a>`;
        
        datetextElement.innerHTML = `${day} ${month} ${year}`;
        
    } else {
        datetextElement.innerHTML = "Please enter a date.";
        
    }
}


function nextClick() {
    const inputDate = document.getElementById('dateInput').value;
    const date = new Date(inputDate);
    date.setDate(date.getDate() + 1);
    document.getElementById('dateInput').value = date.toISOString().split('T')[0];
    extractDate();
}

function prevClick() {
    const inputDate = document.getElementById('dateInput').value;
    const date = new Date(inputDate);
    date.setDate(date.getDate() - 1);
    document.getElementById('dateInput').value = date.toISOString().split('T')[0];
    extractDate();
}
