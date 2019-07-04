const characterName = document.getElementById('character-name');
const houseName = document.getElementById('house-name');
const titleList = document.getElementById('titles');
const characterIcon = document.getElementById('character-icon');
chrome.storage.sync.get('chosenData', function (data) {
    console.log(data.chosenData.icon)
    characterName.innerText = data.chosenData.name
    houseName.innerText = `House : ${data.chosenData.house}`
    characterIcon.setAttribute('src', data.chosenData.icon)
    data.chosenData.titles.forEach((title) => {
        let listItem = document.createElement('li')
        listItem.innerText = title
        titleList.appendChild(listItem)
    })
});

