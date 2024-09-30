function headers() {
    var link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href = "../css/styles.css";
    document.head.appendChild(link1);

    var link2 = document.createElement("link");
    link2.rel = "preconnect";
    link2.href = "https://fonts.googleapis.com";
    document.head.appendChild(link2);

    var link3 = document.createElement("link");
    link3.rel = "preconnect";
    link3.href = "https://fonts.gstatic.com";
    link3.crossOrigin = "anonymous";
    document.head.appendChild(link3);

    var link4 = document.createElement("link");
    link4.rel = "stylesheet";
    link4.href = "https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed&display=swap";
    document.head.appendChild(link4);
}

headers();

/*
    <head>
        <link rel="stylesheet" href="css/styles.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed&display=swap" rel="stylesheet">
        <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    </head>
*/

function time(eventId, startTimeString, endTimeString, timeZone, note) {
    const startTime = new Date(`${startTimeString}${timeZone}`);
    const endTime = new Date(`${endTimeString}${timeZone}`);

    const optionsDate = {
        year: 'numeric', month: 'long', weekday: 'long', day: 'numeric',
    };
    const optionsTime = {
        hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'long',    
    };
    const optionsEndTime = {
        year: 'numeric', month: 'long', weekday: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'long',    
    };

    const localTimeString = startTime.toLocaleString(undefined, optionsDate);
    const localStartTimeString = startTime.toLocaleString(undefined, optionsTime);
    const localEndTimeString = endTime.toLocaleString(undefined, optionsEndTime);

    const eventElement = document.createElement('div');
    eventElement.innerHTML = `
    <p>${localTimeString} from ${localStartTimeString} - ${localEndTimeString}</p><p>Notes: ${note}</p>
    `;
    document.getElementById(eventId).appendChild(eventElement);
}

function timedates(events) {
    events.forEach(element => {
        time('event-list', element.startTimeString, element.endTimeString, element.timeZone, element.note);
    });
}

const events = [
    {
        startTimeString: "2024-10-09T14:00:00",
        endTimeString: "2024-10-09T23:59:59",
        timeZone: "+08:00",
        note: "Same Applies until 09:00 October 12 Philippine Time <br> Midterms"
    },
    {
        startTimeString: "2024-11-01T08:00:00",
        endTimeString: "2024-11-01T23:59:59",
        timeZone: "+08:00",
        note: "Maybe on a Catholic School, but IDK"
    },
    {
        startTimeString: "2024-11-27T08:00:00",
        endTimeString: "2024-11-27T14:00:00",
        timeZone: "+08:00",
        note: "Same Applies until September 30 Philippine Time"
    },
    {
    startTimeString: "2024-12-23T08:00:00",
    endTimeString: "2025-01-01T00:00:00",
    timeZone: "+08:00",
    note: "chrysler!"
    }
];