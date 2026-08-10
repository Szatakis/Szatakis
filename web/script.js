const discordCard = document.getElementById("discord-card");
const discordElement = document.getElementById("discord");

discordCard.addEventListener("click", async () => {
    const username = "szatakis";

    try {
        await navigator.clipboard.writeText(username);

        discordElement.textContent = "Copied!";

        setTimeout(() => {
            discordElement.textContent = username;
        }, 1500);
    } catch {
        discordElement.textContent = "szatakis";
    }
});

const orbs = document.querySelectorAll(".orb");

document.addEventListener("mousemove", (event) => {
    const x =
        (event.clientX / window.innerWidth - 0.5) * 20;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 20;

    orbs.forEach((orb, index) => {
        const multiplier =
            index === 0 ? 1 : -1;

        orb.style.transform =
            `translate(
                ${x * multiplier}px,
                ${y * multiplier}px
            )`;
    });
});

if ("ontouchstart" in window) {
    document.removeEventListener("mousemove", () => {});
}