/**
 * ApexDigital - Modern Responsive Landing Page Script
 * Features: Dark/Light Mode, Mobile Navigation Drawer, Scroll Spy, 
 * Reveal Animations, Animated Stats Counters, Pricing Switcher, 
 * FAQ Accordion, Real-time Form Validation & Toast System.
 */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // ==========================================================================
  // 1. Theme Toggle (Dark / Light Mode)
  // ==========================================================================
  const themeToggleBtn = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  // Retrieve saved theme or system preference
  const savedTheme = localStorage.getItem("apexdigital-theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme) {
    htmlElement.setAttribute("data-theme", savedTheme);
  } else if (systemPrefersDark) {
    htmlElement.setAttribute("data-theme", "dark");
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = htmlElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      
      htmlElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("apexdigital-theme", newTheme);
    });
  }

  // ==========================================================================
  // 2. Sticky Header & Back to Top Visibility
  // ==========================================================================
  const header = document.getElementById("header");
  const backToTopBtn = document.getElementById("back-to-top");

  const handleScrollState = () => {
    const scrollY = window.scrollY;

    // Header sticky shadow & glass effect
    if (scrollY > 40) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }

    // Floating Back to Top Button
    if (scrollY > 450) {
      backToTopBtn?.classList.add("visible");
    } else {
      backToTopBtn?.classList.remove("visible");
    }
  };

  window.addEventListener("scroll", handleScrollState, { passive: true });
  handleScrollState(); // Initial check on load

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // ==========================================================================
  // 3. Mobile Navigation Drawer
  // ==========================================================================
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  const toggleMenu = (open) => {
    const isOpen = open !== undefined ? open : !navMenu.classList.contains("open");
    navMenu?.classList.toggle("open", isOpen);
    menuToggle?.classList.toggle("active", isOpen);
    menuToggle?.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => toggleMenu());

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        navMenu.classList.contains("open") &&
        !navMenu.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        toggleMenu(false);
      }
    });

    // Close on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("open")) {
        toggleMenu(false);
      }
    });

    // Close drawer when clicking any nav link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        toggleMenu(false);
      });
    });
  }

  // ==========================================================================
  // 4. Scroll Spy (Active Navigation Highlight)
  // ==========================================================================
  const sections = document.querySelectorAll("section[id]");

  const updateActiveNavLink = () => {
    const scrollPos = window.scrollY + 140;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", updateActiveNavLink, { passive: true });

  // ==========================================================================
  // 5. Scroll Reveal Animations (IntersectionObserver)
  // ==========================================================================
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  if ("IntersectionObserver" in window) {
    const appearOptions = {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, appearOptions);

    animatedElements.forEach((el) => appearOnScroll.observe(el));
  } else {
    // Fallback if browser doesn't support IntersectionObserver
    animatedElements.forEach((el) => el.classList.add("is-visible"));
  }

  // ==========================================================================
  // 6. Animated Number Counters
  // ==========================================================================
  const counters = document.querySelectorAll(".counter");
  let countersAnimated = false;

  const animateCounters = () => {
    counters.forEach((counter) => {
      const target = Number(counter.getAttribute("data-target")) || 0;
      const duration = 1800; // ms
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Ease-out cubic animation formula
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(easeOutProgress * target);

        counter.textContent = currentVal.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toLocaleString();
        }
      };

      requestAnimationFrame(updateCounter);
    });
  };

  const statsSection = document.querySelector(".stats-grid");
  if (statsSection && "IntersectionObserver" in window) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
  } else if (counters.length > 0) {
    animateCounters();
  }

  // ==========================================================================
  // 7. Pricing Period Switcher (Monthly vs Yearly)
  // ==========================================================================
  const billingToggle = document.getElementById("billing-toggle");
  const priceValues = document.querySelectorAll(".price-val");
  const billingNotes = document.querySelectorAll(".billing-note");

  if (billingToggle) {
    billingToggle.addEventListener("change", () => {
      const isYearly = billingToggle.checked;

      priceValues.forEach((price) => {
        const monthlyVal = price.getAttribute("data-monthly");
        const yearlyVal = price.getAttribute("data-yearly");

        // Subtle animation transition
        price.style.opacity = "0";
        price.style.transform = "translateY(-6px)";

        setTimeout(() => {
          price.textContent = isYearly ? yearlyVal : monthlyVal;
          price.style.opacity = "1";
          price.style.transform = "translateY(0)";
        }, 150);
      });

      // Update descriptions
      billingNotes.forEach((note) => {
        note.style.opacity = "0.7";
      });
    });
  }

  // ==========================================================================
  // 8. FAQ Accordion Component
  // ==========================================================================
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");

    questionBtn?.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Optional: Close other open FAQ items for clean accordion UX
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".faq-question")?.setAttribute("aria-expanded", "false");
        }
      });

      item.classList.toggle("active", !isActive);
      questionBtn.setAttribute("aria-expanded", String(!isActive));
    });
  });

  // ==========================================================================
  // 9. Toast Notification System
  // ==========================================================================
  const toast = document.getElementById("toast");
  const toastTitle = document.getElementById("toast-title");
  const toastMessage = document.getElementById("toast-message");
  const toastClose = document.getElementById("toast-close");
  let toastTimeout = null;

  const showToast = (title, message, isSuccess = true) => {
    if (!toast) return;

    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }

    if (toastTitle) toastTitle.textContent = title;
    if (toastMessage) toastMessage.textContent = message;

    toast.style.borderLeftColor = isSuccess ? "var(--color-success)" : "var(--color-danger)";
    const toastIcon = toast.querySelector(".toast-icon i");
    if (toastIcon) {
      toastIcon.className = isSuccess ? "fa-solid fa-circle-check" : "fa-solid fa-circle-exclamation";
      toastIcon.style.color = isSuccess ? "var(--color-success)" : "var(--color-danger)";
    }

    toast.classList.add("show");

    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 4500);
  };

  toastClose?.addEventListener("click", () => {
    if (toast) toast.classList.remove("show");
    if (toastTimeout) clearTimeout(toastTimeout);
  });

  // ==========================================================================
  // 10. Contact Form Validation & Submission
  // ==========================================================================
  const contactForm = document.getElementById("contact-form");
  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const messageInput = document.getElementById("contact-message");
  const submitBtn = document.getElementById("submit-btn");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const clearErrors = () => {
    [nameError, emailError, messageError].forEach((el) => {
      if (el) el.textContent = "";
    });
    [nameInput, emailInput, messageInput].forEach((input) => {
      input?.classList.remove("input-error");
    });
  };

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      clearErrors();

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        if (nameError) nameError.textContent = "Please enter your full name.";
        nameInput.classList.add("input-error");
        isValid = false;
      } else if (nameInput.value.trim().length < 2) {
        if (nameError) nameError.textContent = "Name must be at least 2 characters.";
        nameInput.classList.add("input-error");
        isValid = false;
      }

      // Validate Email
      if (!emailInput.value.trim()) {
        if (emailError) emailError.textContent = "Please enter your email address.";
        emailInput.classList.add("input-error");
        isValid = false;
      } else if (!validateEmail(emailInput.value.trim())) {
        if (emailError) emailError.textContent = "Please enter a valid email address.";
        emailInput.classList.add("input-error");
        isValid = false;
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        if (messageError) messageError.textContent = "Please write a brief project overview.";
        messageInput.classList.add("input-error");
        isValid = false;
      } else if (messageInput.value.trim().length < 10) {
        if (messageError) messageError.textContent = "Message should be at least 10 characters long.";
        messageInput.classList.add("input-error");
        isValid = false;
      }

      if (!isValid) return;

      // Simulate sending state
      const btnText = submitBtn.querySelector(".btn-text");
      const btnIcon = submitBtn.querySelector(".btn-icon");
      const originalText = btnText ? btnText.textContent : "Send Message";

      submitBtn.disabled = true;
      if (btnText) btnText.textContent = "Sending Message...";
      if (btnIcon) btnIcon.className = "fa-solid fa-spinner fa-spin btn-icon";

      setTimeout(() => {
        submitBtn.disabled = false;
        if (btnText) btnText.textContent = originalText;
        if (btnIcon) btnIcon.className = "fa-solid fa-paper-plane btn-icon";

        // Reset form
        contactForm.reset();

        // Show success toast
        showToast(
          "Inquiry Received!",
          "Thank you for reaching out. We will get back to you within 24 hours.",
          true
        );
      }, 700);
    });
  }

  // ==========================================================================
  // 11. Newsletter Form Subscription
  // ==========================================================================
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterEmail = document.getElementById("newsletter-email");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();

      if (!email || !validateEmail(email)) {
        showToast("Invalid Email", "Please enter a valid email address.", false);
        return;
      }

      newsletterForm.reset();
      showToast("Subscribed!", "You're now subscribed to ApexDigital insights.", true);
    });
  }

  // ==========================================================================
  // 12. Dynamic Copyright Year
  // ==========================================================================
  const currentYearSpan = document.getElementById("current-year");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
