function extractDate() {
    const inputDate = document.getElementById('dateInput').value;
    const minDate = new Date('2014-08-21');
    const maxDate = new Date();
    const date = new Date(inputDate);
    console.log(date);
    if (date < minDate) {
        document.getElementById('linker').innerHTML ="The date cannot be before 21 August 2014.";
        return;
    }
    if (date > maxDate) {
        document.getElementById('linker').innerHTML = "The date cannot be in the future.";
        return;
    }
    if (inputDate) {
        const dateParts = inputDate.split('-');
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        const linkWithDate = `https://www.nytimes.com/crosswords/game/mini/${dateParts[0]}/${dateParts[1]}/${dateParts[2]}`;
        document.getElementById('linker').innerHTML = `<a target="_blank" href="${linkWithDate}">${day +" "+ month + " " + year}</a>`;
    } else {
        document.getElementById('linker').innerHTML = "Please select a date."
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
