document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const success = document.getElementById("contact-success");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");
  
      let valid = true;
  
      const setError = (id, text) => {
        document.getElementById(id).textContent = text;
      };
  
      setError("name-error", "");
      setError("email-error", "");
      setError("message-error", "");
  
      if (name.value.trim().length < 2) {
        setError("name-error", "Please enter your name.");
        valid = false;
      }
  
      if (!email.value.includes("@")) {
        setError("email-error", "Please enter a valid email.");
        valid = false;
      }
  
      if (message.value.trim().length < 5) {
        setError("message-error", "Please enter a longer message.");
        valid = false;
      }
  
      if (!valid) return;
  
      const stored = JSON.parse(localStorage.getItem("messages") || "[]");
      stored.push({
        name: name.value,
        email: email.value,
        message: message.value,
        date: new Date().toISOString()
      });
      localStorage.setItem("messages", JSON.stringify(stored));
  
      form.reset();
      success.classList.remove("hidden");
    });
  });