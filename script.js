document.querySelector('footer a').addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const mainParagraph = document.querySelector('main p:nth-child(1)');
const currentHour = new Date().getHours();

let greeting;
if (currentHour < 12) {
    greeting = "Good Morning!";
} else if (currentHour < 18) {
    greeting = "Good Afternoon!";
} else {
    greeting = "Good Evening!";
}

mainParagraph.textContent = `I'm Vivek, ${greeting}`;