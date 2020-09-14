const lightmode = document.getElementById('light');
const darkmode = document.getElementById('dark');
light.addEventListener('click', () => {
    changeDisplay("none", "block", "#613dff", "aliceblue", "black")
})

dark.addEventListener('click', () => {
    changeDisplay("block", "none", "black", "#151519", "aliceblue")
})

function changeDisplay(light, dark, headerbg, sec1bg, sec1color) {
    const header = document.getElementsByTagName('header')[0];
    const sec1 = document.getElementById('sec-1');
    const body = document.getElementsByTagName('body')[0]
    header.style.backgroundColor = headerbg;
    sec1.style.backgroundColor = sec1bg;
    sec1.style.color = sec1color;
    lightmode.style.display = light;
    darkmode.style.display = dark;
    body.style.backgroundColor = sec1bg;
}