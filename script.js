document.getElementById("go").addEventListener("click", () => {
    const popup = document.createElement("div");

    popup.className = "popup";
    popup.innerHTML = `
        <div class="popup-box">
            <span>✓</span>
            <p>I built this very cool website!</p>
            <button onclick="this.parentElement.parentElement.remove()">OK</button>
        </div>
    `;

    document.body.appendChild(popup);
});
