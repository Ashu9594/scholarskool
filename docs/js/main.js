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
      var subject = encodeURIComponent("ScholarSkool enquiry — " + school);
      var body = encodeURIComponent(
        "Name: " + name + "\nReply email: " + email + "\nSchool: " + school + "\n\n" + msg,
      );
      window.location.href = "mailto:info@scholarskool.com?subject=" + subject + "&body=" + body;
      note.hidden = false;
      note.textContent =
        "If your mail app opened, send from there. Otherwise email info@scholarskool.com.";
      form.reset();
    });
  }
})();
