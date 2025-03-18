document.getElementById("waitlist-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    const response = await fetch("https://eco-search-backend.onrender.com/join-waitlist", {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
    });

    if (response.ok) {
        message.textContent = "You have been added to the waitlist!";
    } else {
        message.textContent = "Something went wrong. Try again.";
    }
});
