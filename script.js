const textarea = document.getElementById('content');
const cCount = document.getElementById("cCount");
const wCount = document.getElementById("wCount");

textarea.oninput = () => {
    let characters = textarea.value;
    // console.log(characters);

    // cCount.textContent = characters.length; //it will count the spaces also
    cCount.textContent = characters.replace(/\s/g, "").length; // it will not count the spaces

    let words = textarea.value.split(' ').filter((item) => {
        return item != "";
    })
    wCount.textContent = words.length;
}