app = document.getElementById("app");

async function getUsers() {
    let url = '158.108.182.17:3000/data';
    try {
        let res = await fetch(url);
        console.log();
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}