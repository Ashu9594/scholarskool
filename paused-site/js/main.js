(function () {
  var nav = document.getElementById("nav-links");
  var burger = document.getElementById("burger");

  function scrollToId(id) {
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (nav) nav.classList.remove("is-open");
    if (burger) {
      burger.classList.remove("active");
      burger.setAttribute("aria-expanded", "false");
    }
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-target]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      scrollToId(btn.getAttribute("data-target"));
    });
  });

  document.getElementById("logo-home")?.addEventListener("click", function () {
    scrollToId("programs");
  });

  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      burger.classList.toggle("active", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav?.classList.contains("is-open")) {
      scrollToId("programs");
    }
  });

  var form = document.getElementById("contact-form");
  var note = document.getElementById("form-note");
  var submitBtn = document.getElementById("contact-submit");
  if (form && note) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var school = document.getElementById("school").value.trim();
      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var msg = document.getElementById("msg").value.trim();
      if (!school || !name || !email || !msg) {
        note.hidden = false;
        note.textContent = "Please fill in all fields.";
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        note.hidden = false;
        note.textContent = "Please enter a valid email.";
        return;
      }

      var originalLabel = submitBtn ? submitBtn.textContent : "Submit Enquiry";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";
      }
      note.hidden = false;
      note.textContent = "Sending your enquiry...";

      var payload = {
        access_key: "08b5a4c5-c9e6-48ca-ba07-c9884bbdb82f",
        subject: "New ScholarSkool enquiry from " + school,
        from_name: "ScholarSkool Website",
        name: name,
        email: email,
        school: school,
        message: msg,
        botcheck: false,
      };

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then(function (res) {
          return res.json().catch(function () {
            return {};
          });
        })
        .then(function (data) {
          if (data && data.success) {
            note.textContent =
              "Thanks! Your enquiry has been sent. We'll get back to you at " + email + ".";
            form.reset();
          } else {
            var reason = (data && data.message) ? data.message : "please try again later";
            note.textContent =
              "Couldn't send right now (" + reason + "). Email info@scholarskool.com directly.";
          }
        })
        .catch(function () {
          note.textContent =
            "Network issue. Please check your connection or email info@scholarskool.com directly.";
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalLabel;
          }
        });
    });
  }
})();
