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
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Marina_Bay_Sands_in_the_evening_-_20101120.jpg/1200px-Marina_Bay_Sands_in_the_evening_-_20101120.jpg",
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
    img: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=900&q=80&auto=format&fit=crop",
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
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Petronas_Twin_Towers%2C_Kuala_Lumpur%2C_Malaysia_%282019%29.jpg/1200px-Petronas_Twin_Towers%2C_Kuala_Lumpur%2C_Malaysia_%282019%29.jpg",
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
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900&q=80&auto=format&fit=crop",
    desc: "Famous cities, landmarks and scenic experiences.",
    places: ["Paris", "Switzerland", "Rome", "Venice", "Amsterdam"],
  },
  {
    type: "domestic",
    title: "Kashmir Tour Package",
    img: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=900&q=80&auto=format&fit=crop",
    desc: "Mountains, gardens, valleys and beautiful local experiences.",
    places: ["Srinagar", "Gulmarg", "Pahalgam", "Sonmarg", "Dal Lake"],
  },
  {
    type: "domestic",
    title: "Kerala Tour Package",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&q=80&auto=format&fit=crop",
    desc: "Backwaters, hill stations and peaceful family travel options.",
    places: ["Munnar", "Alleppey", "Thekkady", "Kochi", "Houseboat"],
  },
  {
    type: "domestic",
    title: "Goa Tour Package",
    img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&q=80&auto=format&fit=crop",
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
    img: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=1200&q=80&auto=format&fit=crop",
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
  const el = document.getElementById("packageSlider");
  el.innerHTML = "";
  packages
    .filter((p) => filter === "all" || p.type === filter)
    .forEach((p) => {
      const card = document.createElement("div");
      card.className = "package-card";
      card.dataset.type = p.type;
      card.innerHTML = `<div class="package-img" style="background-image:url('${
        p.img
      }
                        ');
                        background-position:${
                          p.title.includes("Malaysia")
                            ? "center top"
                            : p.title.includes("Manali")
                              ? "center center"
                              : "center center"
                        }
                          "><span class="pkg-badge">${p.type}
                            </span>
</div>
<div class="package-body"><h3>${p.title}
                              </h3><p>${p.desc}
                                </p>
<div class="meta"><span>Contact for Price</span><span>Customised Package</span>
</div>
<div class="places">${p.places
        .map(
          (x) => `<span>${x}
                                    </span>`,
        )
        .join("")}
                                    </div><a class="btn btn-primary" target="_blank" href="https://wa.me/919405893383?text=Hello%2C%20I%20want%20${encodeURIComponent(
                                      p.title,
                                    )}
                                      %20details">Get Package Details</a>
</div>`;
      el.appendChild(card);
    });
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
  setTimeout(
    () => document.getElementById("loader").classList.add("hide"),
    1350,
  );
  observeReveal();
});
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
