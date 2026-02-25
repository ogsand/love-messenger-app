function generateLink() {
  const name = nameInput.value;
  const msg = messageInput.value;
  const food = foodSelect.value;

  if (!name || !msg) {
    output.innerHTML = "Please enter name and message ❤️";
    return;
  }

  const params = new URLSearchParams({
    name: name,
    msg: msg,
    food: food,
  });

  const link =
    window.location.origin + window.location.pathname + "?" + params.toString();

  output.innerHTML = `
    <p>Send this link to your lover:</p>
    <input type="text" id="linkBox" value="${link}" readonly>
    <button onclick="copyLink()">Copy Link 📋</button>
  `;
}

/* Show message if receiver opens link */
const urlData = new URLSearchParams(window.location.search);

if (urlData.has("msg")) {
  document.body.innerHTML = `
  <div class="container">
    <h1>💖 New Love Message</h1>
    <h3>To ${urlData.get("name")}</h3>
    <p>${urlData.get("msg")}</p>
    ${urlData.get("food") ? `<p>Food idea: ${urlData.get("food")}</p>` : ""}
  </div>
  `;
}

// ///////////////////

function copyLink() {
  const linkBox = document.getElementById("linkBox");
  linkBox.select();
  linkBox.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(linkBox.value);
  alert("Link copied successfully! ❤️");
}
