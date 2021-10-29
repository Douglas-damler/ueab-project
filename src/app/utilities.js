import '../links/data.json'

export function filterData(data, searchTerm) {
    return data.filter((dat) => dat.title.toLowerCase().includes(searchTerm.toLowerCase()));
}

export const findTutorialById = (tutorials, id) => {
    for (let index = 0; index < tutorials.length; index++) {
        if (tutorials[index].id === id) {
            return tutorials[index];
        }
    }
}

export const addMoreTutorials = (data) => {
    const fs = require('fs');
    const jsonString = JSON.stringify(data);
    fs.writeFile('../links/data.json', jsonString, (err) => {
        if (err) {
            console.log('Error writing file', err)
        }

        else {
            console.log('Successfully wrote file');
        }
    });
    
}