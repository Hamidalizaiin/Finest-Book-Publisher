emailjs.init("9IeUtJjT9sFAUDhhF");

function contactSupport(e) {
    e.preventDefault();
    if (!document.getElementById("name").value || !document.getElementById("email").value || !document.getElementById("phone").value) {
        alert("❌ Please fill in all fields.");
        return;
    }

    // ✅ Send email with your service & template IDs
    emailjs.send("service_fhpl5f7", "template_381hdv6", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    }).then(function () {
        alert("✅ Message sent successfully!");
        console.log(document.getElementById("name").value);
        console.log(document.getElementById("email").value);
        console.log(document.getElementById("phone").value);

        console.log("SUCCESS!", response.status, response.text);
    }, function (error) {
        alert("❌ Failed to send. Please try again.");
        console.log("FAILED...", error);
    });
}