const packages = [
  {
    type: "international",
    title: "Dubai Tour Package",
    img: "assets/dubai.jpg",
    desc: "Sightseeing, shopping, family attractions and desert experience.",
    places: [
      "Burj Khalifa",
      "Dubai Mall",
      "Desert Safari",
      "Marina Cruise",
      "Gold Souk",
    ],
  },
  {
    type: "international",
    title: "Singapore Tour Package",
    img: "assets/singapore.jpg",
    desc: "City attractions, family activities and modern sightseeing.",
    places: [
      "Merlion Park",
      "Sentosa",
      "Universal Studios",
      "Gardens by the Bay",
      "Singapore Flyer",
    ],
  },
  {
    type: "international",
    title: "Turkey Tour Package",
    img: "assets/turkey.webp",
    desc: "Historic locations, scenic views and cultural sightseeing.",
    places: [
      "Istanbul",
      "Blue Mosque",
      "Hagia Sophia",
      "Bosphorus Cruise",
      "Cappadocia",
    ],
  },
  {
    type: "international",
    title: "Malaysia Tour Package",
    img: "assets/malaysia.png",
    desc: "Kuala Lumpur sightseeing and family-friendly attractions.",
    places: [
      "Petronas Towers",
      "Batu Caves",
      "Genting Highlands",
      "KL Tower",
      "Putrajaya",
    ],
  },
  {
    type: "international",
    title: "Europe Tour Package",
    img: "assets/europe.jpg",
    desc: "Famous cities, landmarks and scenic experiences.",
    places: ["Paris", "Switzerland", "Rome", "Venice", "Amsterdam"],
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
    places: [
      "North Goa",
      "South Goa",
      "Baga Beach",
      "Calangute",
      "Fort Aguada",
    ],
  },
  {
    type: "domestic",
    title: "Manali Tour Package",
    img: "assets/manali.jpg",
    desc: "Mountains, valleys, snow points and adventure experiences.",
    places: [
      "Solang Valley",
      "Atal Tunnel",
      "Hadimba Temple",
      "Mall Road",
      "Rohtang",
    ],
  },
];

function renderPackages(filter = "all") {
  const slider = document.getElementById("packageSlider");

  if (!slider) return;

  slider.innerHTML = "";

  packages
    .filter((packageItem) => {
      return filter === "all" || packageItem.type === filter;
    })
    .forEach((packageItem) => {
      const card = document.createElement("div");
      card.className = "package-card";
      card.dataset.type = packageItem.type;

      const placesHtml = packageItem.places
        .map((place) => `<span>${place}</span>`)
        .join("");

      const whatsappText = encodeURIComponent(
        `Hello, I want ${packageItem.title} details`
      );

      card.innerHTML = `
        <div
          class="package-img"
          style="
            background-image: url('${packageItem.img}');
            background-position: ${getImagePosition(packageItem.title)};
          "
        >
          <span class="pkg-badge">${packageItem.type}</span>
        </div>

        <div class="package-body">
          <h3>${packageItem.title}</h3>
          <p>${packageItem.desc}</p>

          <div class="meta">
            <span>Contact for Price</span>
            <span>Customised Package</span>
          </div>

          <div class="places">
            ${placesHtml}
          </div>

          <a
            class="btn btn-primary"
            target="_blank"
            href="https://wa.me/919405893383?text=${whatsappText}"
          >
            Get Package Details
          </a>
        </div>
      `;

      slider.appendChild(card);
    });
}

function getImagePosition(title) {
  if (title.includes("Malaysia")) return "center center";
  if (title.includes("Singapore")) return "center center";
  if (title.includes("Manali")) return "center center";

  return "center center";
}

renderPackages();
document.querySelectorAll(".filter-btn").forEach((btn) =>
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderPackages(btn.dataset.filter);
  }),
);
function setMode(mode) {
  document.body.classList.toggle("haj-mode", mode === "haj");
  document.body.classList.toggle("tours-mode", mode === "tours");
  document
    .getElementById("toursPanel")
    .classList.toggle("active", mode === "tours");
  document
    .getElementById("hajPanel")
    .classList.toggle("active", mode === "haj");
  document
    .querySelectorAll(".switch-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(
      `.switch-btn.${mode}
                                            `,
    )
    .forEach((b) => b.classList.add("active"));
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  setTimeout(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    observeReveal();
  }, 60);
}
document.querySelectorAll("[data-mode]").forEach((btn) =>
  btn.addEventListener("click", () => {
    setMode(btn.dataset.mode);
    document.getElementById("mobileMenu").classList.add("hidden");
  }),
);
document
  .getElementById("mobileBtn")
  .addEventListener("click", () =>
    document.getElementById("mobileMenu").classList.toggle("hidden"),
  );
function observeReveal() {
  document.querySelectorAll(".reveal").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight - 70) el.classList.add("visible");
  });
}
window.addEventListener("scroll", observeReveal);
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");

    if (loader) {
      loader.classList.add("hide");
    }
  }, 1800);

  observeReveal();
});

/* Safety fallback: hide loader even if laptop browser loads slowly */
setTimeout(() => {
  const loader = document.getElementById("loader");

  if (loader) {
    loader.classList.add("hide");
  }
}, 2300);
document.getElementById("enquiryForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const fields = form.querySelectorAll("input, select, textarea");
  const name = fields[0]?.value?.trim() || "";
  const phone = fields[1]?.value?.trim() || "";
  const service = fields[2]?.value?.trim() || "";
  const destination = fields[3]?.value?.trim() || "";
  const message = fields[4]?.value?.trim() || "";
  const text = `Hello, I want to enquire about a travel package.%0A%0AName: ${encodeURIComponent(
    name,
  )}
                                                      %0APhone: ${encodeURIComponent(
                                                        phone,
                                                      )}
                                                        %0AService: ${encodeURIComponent(
                                                          service,
                                                        )}
                                                          %0ADestination: ${encodeURIComponent(
                                                            destination,
                                                          )}
                                                            %0AMessage: ${encodeURIComponent(
                                                              message,
                                                            )}
                                                              `;
  document.getElementById("successMsg").style.display = "block";
  window.open(
    `https://wa.me/919405893383?text=${text}
                                                                `,
    "_blank",
  );
  form.reset();
  setTimeout(
    () => (document.getElementById("successMsg").style.display = "none"),
    3500,
  );
});
