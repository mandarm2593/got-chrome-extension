const data = [
    {
        name: "Ned Stark",
        icon: "./icons/ned-stark.jpg",
        house: "Stark",
        houseIcon: "..",
        titles: [
            "Lord of Winterfell",
            "Lord Paramount of the North",
            "Warden of the North",
            "Hand of the King",
            "Lord Regent of the Seven Kingdoms",
            "Protector of the Realm"
        ]
    },
    {
        name: "Jaime Lannister",
        icon: "./icons/jaime-lannister.jpg",
        house: "Lannister",
        houseIcon: "..",
        titles: ["Ser", "Lord Commander of the Kingsguard"]
    }
]

chrome.runtime.onStartup.addListener(function () {
    const chosenData = data[Math.floor(Math.random() * data.length)];
    chrome.storage.sync.set({"chosenData":chosenData}, function () {
        console.log(`Character set as:${chosenData}`)
    });
});
