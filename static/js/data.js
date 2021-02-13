function getTime(text) {
    time = document.createElement('p')
    time.innerText = text
    return time
}

app = document.getElementById("app");

// app.appendChild()

setInterval(() => {
    fetch("http://158.108.182.17:3000/data", {method: "GET",
    headers: { "Content-Type": "application/json" },}).then((data) => data.json()).then((datas) => {
        datas.forEach((data) => {
            console.log();
            if (!cache.includes(data.cost)) {
                app.appendChild(getTime(data.cost));
                cache.push(data.cost);
            }
        });
    });
}, 5000);
