/* =========================================================
   Design Tours and Travels
   Clean, human-readable JavaScript
   ========================================================= */

const WHATSAPP_NUMBER = "919405893383";

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const packages = [
  {
    type: "international",
    title: "Dubai Tour Package",
    img: "assets/dubai.jpg",
    desc: "Customised Dubai travel support for families, groups and leisure travellers.",
    places: ["Burj Khalifa", "Dubai Mall", "Desert Safari", "Marina Cruise", "Gold Souk"],
  },
  {
    type: "international",
    title: "Singapore Tour Package",
    img: "assets/singapore.jpg",
    desc: "Modern city attractions, family activities and sightseeing options.",
    places: ["Merlion Park", "Sentosa", "Universal Studios", "Gardens by the Bay", "Singapore Flyer"],
  },
  {
    type: "international",
    title: "Malaysia Tour Package",
    img: "assets/malaysia.png",
    desc: "Kuala Lumpur sightseeing and family-friendly travel assistance.",
    places: ["Petronas Towers", "Batu Caves", "Genting Highlands", "KL Tower", "Putrajaya"],
  },
  {
    type: "international",
    title: "Turkey Tour Package",
    img: "assets/turkey.webp",
    desc: "Historic locations, scenic views and cultural sightseeing support.",
    places: ["Istanbul", "Blue Mosque", "Hagia Sophia", "Bosphorus Cruise", "Cappadocia"],
  },
  {
    type: "international",
    title: "Thailand Tour Package",
    img: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=80&auto=format&fit=crop",
    desc: "Popular Thailand packages for families, couples and groups.",
    places: ["Bangkok", "Pattaya", "Phuket", "Krabi", "Coral Island"],
  },
  {
    type: "international",
    title: "Bali Tour Package",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80&auto=format&fit=crop",
    desc: "Beautiful island travel planning with beaches, temples and scenic stays.",
    places: ["Ubud", "Kuta", "Nusa Penida", "Tanah Lot", "Uluwatu"],
  },

  {
    type: "international",
    title: "Vietnam Tour Package",
    img: "assets/vietnam.jpg",
    desc: "Scenic landscapes, city tours, culture, food and family-friendly travel experiences.",
    places: ["Hanoi", "Ho Chi Minh City", "Ha Long Bay", "Da Nang", "Hoi An"],
  },
  {
    type: "international",
    title: "Maldives Tour Package",
    img: "assets/maldives.jpg",
    desc: "Resort, honeymoon and family island package assistance.",
    places: ["Male", "Resort Islands", "Water Villa", "Beach Villa", "Water Sports"],
  },
  {
    type: "international",
    title: "Europe Tour Package",
    img: "assets/europe.jpg",
    desc: "Famous cities, landmarks and scenic travel experiences.",
    places: ["Paris", "Switzerland", "Rome", "Venice", "Amsterdam"],
  },
  {
    type: "international",
    title: "Azerbaijan Tour Package",
    img: "assets/azerbaijan.jpg",
    desc: "Baku and nearby sightseeing options for customised international trips.",
    places: ["Baku", "Nizami Street", "Flame Towers", "Gobustan", "Gabala"],
  },
  {
    type: "domestic",
    title: "Kashmir Tour Package",
    img: "assets/kashmir.jpg",
    desc: "Mountains, gardens, valleys and beautiful local experiences.",
    places: ["Srinagar", "Gulmarg", "Pahalgam", "Sonmarg", "Dal Lake"],
  },
  {
    type: "domestic",
    title: "Kerala Tour Package",
    img: "assets/kerala.jpg",
    desc: "Backwaters, hill stations and peaceful family travel options.",
    places: ["Munnar", "Alleppey", "Thekkady", "Kochi", "Houseboat"],
  },
  {
    type: "domestic",
    title: "Goa Tour Package",
    img: "assets/goa.jpg",
    desc: "Beaches, forts, sightseeing and leisure travel options.",
    places: ["North Goa", "South Goa", "Baga Beach", "Calangute", "Fort Aguada"],
  },
  {
    type: "domestic",
    title: "Manali Tour Package",
    img: "assets/manali.jpg",
    desc: "Mountains, valleys, snow points and adventure experiences.",
    places: ["Solang Valley", "Atal Tunnel", "Hadimba Temple", "Mall Road", "Rohtang"],
  },
  {
    type: "domestic",
    title: "Rajasthan Tour Package",
    img: "assets/rajasthan.webp",
    desc: "Royal palaces, desert experiences and heritage sightseeing.",
    places: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Mount Abu"],
  },
  {
    type: "domestic",
    title: "Ladakh Tour Package",
    img: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=1200&q=80&auto=format&fit=crop",
    desc: "Scenic road trips, monasteries, lakes and mountain landscapes.",
    places: ["Leh", "Nubra Valley", "Pangong Lake", "Khardung La", "Shanti Stupa"],
  },
  {
    type: "domestic",
    title: "Andaman Tour Package",
    img: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=1200&q=80&auto=format&fit=crop",
    desc: "Island sightseeing, beaches and family holiday assistance.",
    places: ["Port Blair", "Havelock", "Neil Island", "Cellular Jail", "Radhanagar Beach"],
  },
  {
    type: "domestic",
    title: "Himachal Tour Package",
    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80&auto=format&fit=crop",
    desc: "Hill station travel options for couples, families and groups.",
    places: ["Shimla", "Manali", "Kullu", "Dharamshala", "Dalhousie"],
  },
  {
    type: "domestic",
    title: "Delhi Agra Tour Package",
    img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80&auto=format&fit=crop",
    desc: "Classic North India sightseeing with monuments and heritage places.",
    places: ["Taj Mahal", "Agra Fort", "India Gate", "Red Fort", "Qutub Minar"],
  },
];

function renderPackages(filter = "international") {
  const slider = document.getElementById("packageSlider");
  if (!slider) return;

  const visiblePackages = packages.filter((item) => item.type === filter);

  slider.innerHTML = visiblePackages
    .map((item) => {
      const placesHtml = item.places.map((place) => `<span>${place}</span>`).join("");
      const packageMessage = `Hello Design Tours and Travels, I want details for ${item.title}.\n\nPackage type: Customised Package\nNo. of travellers: \nPreferred travel month: \nDeparture city: \nHotel preference: \nBudget range: `;

      return `
        <article class="package-card" data-type="${item.type}">
          <div
            class="package-img"
            style="background-image: url('${item.img}'); background-position: center center;"
          >
            <span class="pkg-badge">${item.type}</span>
          </div>

          <div class="package-body">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>

            <div class="meta">
              <span>Contact for Price</span>
              <span>Customised Package</span>
            </div>

            <div class="places">${placesHtml}</div>

            <a
              class="btn btn-primary"
              target="_blank"
              href="${whatsappLink(packageMessage)}"
            >
              Get Package Details
            </a>
          </div>
        </article>
      `;
    })
    .join("");
}

function setupPackageFilters() {
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderPackages(button.dataset.filter);
    });
  });
}

function setMode(mode) {
  const isHajMode = mode === "haj";

  document.body.classList.toggle("haj-mode", isHajMode);
  document.body.classList.toggle("tours-mode", !isHajMode);

  document.getElementById("toursPanel")?.classList.toggle("active", !isHajMode);
  document.getElementById("hajPanel")?.classList.toggle("active", isHajMode);

  document.querySelectorAll(".switch-btn").forEach((button) => {
    button.classList.remove("active");
  });

  document.querySelectorAll(`.switch-btn.${mode}`).forEach((button) => {
    button.classList.add("active");
  });

  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);

  setTimeout(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    observeReveal();
  }, 80);
}

function setupModeButtons() {
  document.querySelectorAll("[data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      setMode(button.dataset.mode);
      document.getElementById("mobileMenu")?.classList.add("hidden");
    });
  });
}

function setupMobileMenu() {
  const button = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");

  button?.addEventListener("click", () => {
    menu?.classList.toggle("hidden");
  });
}

function observeReveal() {
  document.querySelectorAll(".reveal").forEach((element) => {
    const rect = element.getBoundingClientRect();

    if (rect.top < window.innerHeight - 70) {
      element.classList.add("visible");
    }
  });
}

function setupLoader() {
  const loader = document.getElementById("loader");

  window.addEventListener("load", () => {
    setTimeout(() => loader?.classList.add("hide"), 1450);
    observeReveal();
  });

  // Safety fallback for slow browsers or cached asset issues.
  setTimeout(() => loader?.classList.add("hide"), 1800);
}

function buildQuickTripMessage() {
  const destination = document.getElementById("quickDestination")?.value.trim() || "Not mentioned";
  const travelType = document.getElementById("quickTravelType")?.value.trim() || "Not selected";
  const travellers = document.getElementById("quickTravellers")?.value.trim() || "Not mentioned";

  return `Hello Design Tours and Travels,
I want package details for a customised trip.

Destination: ${destination}
Travel type: ${travelType}
No. of travellers: ${travellers}
Preferred travel month: 
Departure city: 
Budget range: 

Please share suitable package options and contact-for-price details.`;
}

function setupQuickTripEnquiry() {
  const quickButton = document.getElementById("quickTripBtn");
  const fields = [
    document.getElementById("quickDestination"),
    document.getElementById("quickTravelType"),
    document.getElementById("quickTravellers"),
  ].filter(Boolean);

  if (!quickButton) return;

  const updateQuickTripLink = () => {
    quickButton.setAttribute("href", whatsappLink(buildQuickTripMessage()));
  };

  // Keep the WhatsApp URL updated while the customer types/selects.
  fields.forEach((field) => {
    field.addEventListener("input", updateQuickTripLink);
    field.addEventListener("change", updateQuickTripLink);
  });

  // Extra safety: update right before the user opens WhatsApp.
  quickButton.addEventListener("click", updateQuickTripLink);
  quickButton.addEventListener("touchstart", updateQuickTripLink, { passive: true });

  updateQuickTripLink();
}

function setupEnquiryForm() {
  const form = document.getElementById("enquiryForm");
  const successMessage = document.getElementById("successMsg");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim() || "";
    const phone = document.getElementById("phone")?.value.trim() || "";
    const service = document.getElementById("service")?.value.trim() || "";
    const destination = document.getElementById("destination")?.value.trim() || "";
    const message = document.getElementById("message")?.value.trim() || "";

    const text = `Hello Design Tours and Travels, I want to enquire about a customised travel package.\n\nName: ${name}\nPhone: ${phone}\nService needed: ${service}\nDestination: ${destination}\nNo. of travellers / message: ${message}\n\nPlease share package options and contact-for-price details.`;

    successMessage.style.display = "block";
    window.open(whatsappLink(text), "_blank");

    form.reset();
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3500);
  });
}

renderPackages("international");
setupPackageFilters();
setupModeButtons();
setupMobileMenu();
setupLoader();
setupEnquiryForm();
setupQuickTripEnquiry();

window.addEventListener("scroll", observeReveal);
observeReveal();

/* =========================================================
   Popup enquiry form before WhatsApp for direct enquiry buttons
   ========================================================= */
function getInquiryContext(link) {
  const packageCard = link.closest(".package-card");
  const hajCard = link.closest(".haj-card");
  const contactBox = link.closest(".contact-box");
  const footer = link.closest("footer");
  const bottomCta = link.closest(".bottom-cta");
  const hajPanel = link.closest("#hajPanel");

  let service = "General Travel Enquiry";
  let packageName = "";
  let intro = "I would like to enquire about a customised travel package.";

  if (packageCard) {
    const title = packageCard.querySelector("h3")?.textContent.trim() || "Tour Package";
    packageName = title;
    service = packageCard.dataset.type === "domestic" ? "Domestic Tour" : "International Tour";
    intro = `I want details for ${title}.`;
  } else if (hajCard) {
    const title = hajCard.querySelector("h3")?.textContent.trim() || "Umrah Package";
    packageName = title;
    service = title.toLowerCase().includes("haj") ? "Haj Package" : "Umrah Package";
    intro = `I want details for ${title}.`;
  } else if (hajPanel) {
    service = "Umrah Package";
    packageName = link.textContent.toLowerCase().includes("haj") ? "Haj / Umrah Package" : "Umrah Package";
    intro = "I want Haj or Umrah package details.";
  } else if (contactBox || footer || bottomCta || link.classList.contains("btn-whatsapp")) {
    service = "General Travel Enquiry";
    packageName = "Customised Travel Package";
    intro = "I would like to enquire about a customised travel package.";
  }

  return { service, packageName, intro };
}

function openInquiryModal(context = {}) {
  const modal = document.getElementById("inquiryModal");
  if (!modal) return;

  const serviceField = document.getElementById("popupService");
  const packageField = document.getElementById("popupPackage");
  const messageField = document.getElementById("popupMessage");

  if (serviceField) serviceField.value = context.service || "General Travel Enquiry";
  if (packageField) packageField.value = context.packageName || "";
  if (messageField) messageField.value = "";

  modal.dataset.intro = context.intro || "I would like to enquire about a customised travel package.";
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  setTimeout(() => document.getElementById("popupName")?.focus(), 80);
}

function closeInquiryModal() {
  const modal = document.getElementById("inquiryModal");
  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function setupInquiryModal() {
  const modal = document.getElementById("inquiryModal");
  const form = document.getElementById("popupInquiryForm");
  if (!modal || !form) return;

  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href*="wa.me"]');
    if (!link) return;

    // Quick Trip Enquiry already has customer input on the hero card, so keep it direct.
    if (link.id === "quickTripBtn" || link.dataset.directWhatsapp === "true") return;

    event.preventDefault();
    openInquiryModal(getInquiryContext(link));
  });

  document.querySelectorAll("[data-close-inquiry]").forEach((item) => {
    item.addEventListener("click", closeInquiryModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeInquiryModal();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const intro = modal.dataset.intro || "I would like to enquire about a customised travel package.";
    const name = document.getElementById("popupName")?.value.trim() || "";
    const phone = document.getElementById("popupPhone")?.value.trim() || "";
    const service = document.getElementById("popupService")?.value.trim() || "General Travel Enquiry";
    const packageName = document.getElementById("popupPackage")?.value.trim() || "Not mentioned";
    const travellers = document.getElementById("popupTravellers")?.value.trim() || "Not mentioned";
    const month = document.getElementById("popupMonth")?.value.trim() || "Not mentioned";
    const city = document.getElementById("popupCity")?.value.trim() || "Not mentioned";
    const message = document.getElementById("popupMessage")?.value.trim() || "Not mentioned";

    const greeting = service.includes("Haj") || service.includes("Umrah") ? "Assalamualaikum Design Tours and Travels," : "Hello Design Tours and Travels,";

    const text = `${greeting}\n${intro}\n\nName: ${name}\nPhone: ${phone}\nEnquiry Type: ${service}\nPackage / Destination: ${packageName}\nNo. of travellers: ${travellers}\nPreferred month: ${month}\nDeparture city: ${city}\nMessage: ${message}\n\nPlease share package details and contact-for-pricing information.`;

    window.open(whatsappLink(text), "_blank");
    form.reset();
    closeInquiryModal();
  });
}

setupInquiryModal();

/* =========================================================
   Mobile accordions for long Haj/Umrah guide content
   ========================================================= */
function setupMobileAccordions() {
  const guideCards = document.querySelectorAll('.guide-card');
  if (!guideCards.length) return;

  guideCards.forEach((card, index) => {
    card.classList.add('mobile-accordion');
    if (index === 0) card.classList.add('open');

    const title = card.querySelector('h3');
    if (!title) return;

    title.addEventListener('click', () => {
      if (window.innerWidth > 640) return;
      guideCards.forEach((item) => {
        if (item !== card) item.classList.remove('open');
      });
      card.classList.toggle('open');
    });
  });
}

setupMobileAccordions();
