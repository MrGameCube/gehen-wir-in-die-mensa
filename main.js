async function loadAnswer() {
    const answerElem = document.getElementById("answer");
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    let answerMsg = "Ja";

    // Direktes Abfragen der Daten. Erstmal deaktiviert
    // const feierTageResp = await fetch(`https://feiertage-api.de/api/?jahr=${currentDate.getFullYear()}&nur_land=he`);
    // const feierTage = await feierTageResp.json();

    // Feiertage in 2022,23,24 von https://feiertage-api.de für Hessen
    const closedDates = [ "2022-01-01", "2022-04-15", "2022-04-18", "2022-05-01", "2022-05-26", "2022-06-06", "2022-06-16", "2022-10-03", "2022-12-25", "2022-12-26","2023-01-01", "2023-04-07", "2023-04-10", "2023-05-01", "2023-05-18", "2023-05-29", "2023-06-08", "2023-10-03", "2023-12-25", "2023-12-26", "2024-01-01", "2024-03-29", "2024-04-01", "2024-05-01", "2024-05-09", "2024-05-20", "2024-05-30", "2024-10-03", "2024-12-25", "2024-12-26"]; //Object.values(feierTage).map((e)=>e.datum);


    if([0,6].includes(currentDay) || closedDates.includes(currentDate.toISOString().split("T")[0])) {
        answerMsg = "Nein, die haben zu :(";
    }

    answerElem.textContent = answerMsg;
}

loadAnswer();

