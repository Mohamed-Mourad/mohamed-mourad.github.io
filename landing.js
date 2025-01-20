document.addEventListener("DOMContentLoaded", () => {
    const gridLayer = document.querySelector(".grid-layer");

    const totalBoxes = 16;
    for (let i = 0; i < totalBoxes; i++) {
        const box = document.createElement("div");
        gridLayer.appendChild(box);
    }

    const boxes = document.querySelectorAll(".grid-layer div");
    boxes.forEach(box => {
        if (Math.random() < 0.15) {
            box.classList.add("gradient-box");
        }
    });
});
