const categories = {
  "restaurant-menu": {
    title: "Restaurant Menu Design",
    meta: "Category: Menus for restaurants and food venues",
    image: "assets/restaurant-menu.png.jpg",
    alt: "Premium restaurant menu design mockup on a warm tabletop",
    overview: "A focused category for printed and digital menu systems across restaurants, cafes, bakeries, and specialty food venues.",
    focus: "Clear hierarchy, appetite-led sequencing, premium perception, and menu structures that help guests choose faster.",
    deliverables: "Menu architecture, print menu design, QR menu adaptation, section hierarchy, typography, production-ready files.",
    tools: "Figma, Adobe Illustrator, Adobe Photoshop",
    samples: [
      {
        name: "Fine dining menu refresh",
        type: "Restaurant",
        result: "Reworked categories and visual rhythm to make signature dishes easier to find."
      },
      {
        name: "Fast casual menu system",
        type: "Food startup",
        result: "Simplified choice paths and improved menu scanning for busy ordering moments."
      },
      {
        name: "Seasonal cafe menu",
        type: "Cafe",
        result: "Built a flexible layout for rotating drinks, brunch items, and daily specials."
      }
    ]
  },
  "food-packaging": {
    title: "Food Packaging Design",
    meta: "Category: Packaging systems for food products",
    image: "assets/food-packaging.png",
    alt: "Premium food packaging system with boxes, jars, labels, and pouches",
    overview: "Packaging concepts and systems for products that need to feel valuable, clear, and shelf-ready at first glance.",
    focus: "Shelf presence, product storytelling, scalable label logic, ingredient cues, and tactile brand expression.",
    deliverables: "Packaging concept, label system, box direction, color palette, typography, mockups, print-ready artwork guidance.",
    tools: "Adobe Illustrator, Adobe Photoshop, Figma",
    samples: [
      {
        name: "Gourmet jar label family",
        type: "Specialty food",
        result: "Created a repeatable label structure with stronger flavor recognition."
      },
      {
        name: "Premium pouch concept",
        type: "Packaged goods",
        result: "Elevated the product through calmer hierarchy and richer material cues."
      },
      {
        name: "Retail box system",
        type: "Food brand",
        result: "Designed a modular box language that can extend across multiple SKUs."
      }
    ]
  },
  "cafe-identity": {
    title: "Cafe Brand Identity",
    meta: "Category: Identity systems for cafes",
    image: "assets/cafe-identity.png",
    alt: "Cafe brand identity mockup with cups, cards, bags, and stationery",
    overview: "Identity systems that help cafes feel memorable across cups, signage, menus, packaging, and social touchpoints.",
    focus: "Warmth, consistency, tactile details, local character, and a brand system that works in daily operations.",
    deliverables: "Visual direction, logo direction, stationery, packaging touchpoints, color and type system, usage notes.",
    tools: "Figma, Adobe Illustrator, Adobe Photoshop",
    samples: [
      {
        name: "Neighborhood coffee identity",
        type: "Cafe",
        result: "Built a warmer visual system for cups, cards, and counter signage."
      },
      {
        name: "Bakery cafe launch kit",
        type: "Cafe bakery",
        result: "Designed the first identity touchpoints for opening week and packaging."
      },
      {
        name: "Espresso bar refresh",
        type: "Coffee bar",
        result: "Refined the look to feel more intentional without losing the casual tone."
      }
    ]
  },
  "digital-menu-ui": {
    title: "Digital Menu UI",
    meta: "Category: Digital menus and ordering interfaces",
    image: "assets/digital-menu-ui.png",
    alt: "Digital restaurant menu UI displayed on tablet and phone",
    overview: "Digital menu experiences for restaurants that need guests to browse, understand, and order with less friction.",
    focus: "Appetite-first layouts, category clarity, dish cards, ordering flow, and responsive menu behavior.",
    deliverables: "Mobile UI screens, tablet menu concept, category system, dish cards, interaction states.",
    tools: "Figma, Adobe Photoshop",
    samples: [
      {
        name: "QR menu redesign",
        type: "Restaurant",
        result: "Made menu browsing faster with clearer grouping and dish emphasis."
      },
      {
        name: "Table ordering UI",
        type: "Casual dining",
        result: "Reduced friction between browsing, customising, and adding items."
      },
      {
        name: "Takeaway menu flow",
        type: "Food startup",
        result: "Structured the ordering path around repeat orders and quick decisions."
      }
    ]
  },
  "coffee-subscription": {
    title: "Coffee Subscription App UI",
    meta: "Category: Mobile UI for coffee brands",
    image: "assets/coffee-subscription-app.png",
    alt: "Coffee subscription mobile app UI with coffee bags and beans",
    overview: "Mobile product experiences for coffee brands that need online buying to feel sensory, simple, and trustworthy.",
    focus: "Product discovery, subscription cadence, flavor education, checkout confidence, and brand-led UI details.",
    deliverables: "App UI concept, product cards, subscription flow, visual system, mobile mockups.",
    tools: "Figma, Adobe Photoshop",
    samples: [
      {
        name: "Bean selection flow",
        type: "Coffee roaster",
        result: "Made roast, flavor, and grind choices easier to compare."
      },
      {
        name: "Subscription setup",
        type: "Coffee brand",
        result: "Designed a calmer cadence picker for recurring coffee deliveries."
      },
      {
        name: "Coffee product cards",
        type: "E-commerce",
        result: "Created more sensory cards for tasting notes and product confidence."
      }
    ]
  },
  "bakery-packaging": {
    title: "Bakery Packaging",
    meta: "Category: Packaging for bakeries and pastry brands",
    image: "assets/bakery-packaging.png",
    alt: "Elegant bakery packaging with pastry boxes, bread sleeves, and baked goods",
    overview: "Packaging directions for bakeries that want everyday purchases to feel cared for, crafted, and giftable.",
    focus: "Warm material choices, simple labels, box and sleeve systems, and touchpoints that feel handmade but premium.",
    deliverables: "Packaging concept, box and sleeve direction, label system, paper recommendations, mockups.",
    tools: "Adobe Illustrator, Adobe Photoshop",
    samples: [
      {
        name: "Pastry box system",
        type: "Bakery",
        result: "Created a cleaner box language for gifting and takeaway."
      },
      {
        name: "Bread sleeve concept",
        type: "Artisan bakery",
        result: "Designed a repeatable sleeve system for daily bread varieties."
      },
      {
        name: "Cookie label family",
        type: "Dessert brand",
        result: "Made small-batch packaging feel more polished and collectible."
      }
    ]
  },
  "restaurant-landing": {
    title: "Restaurant Landing Page",
    meta: "Category: Web presence for restaurants",
    image: "assets/restaurant-landing-page.png",
    alt: "Restaurant landing page UI displayed on a laptop in warm dining light",
    overview: "Landing pages and web concepts for restaurants that need atmosphere, menu style, and reservations to connect quickly.",
    focus: "Cinematic first impression, clear booking actions, food-first art direction, and responsive page structure.",
    deliverables: "Landing page concept, responsive sections, UI direction, image treatment, booking CTA system.",
    tools: "Figma, Adobe Photoshop",
    samples: [
      {
        name: "Reservation landing page",
        type: "Restaurant",
        result: "Directed the page around atmosphere, booking, and signature dishes."
      },
      {
        name: "Opening campaign page",
        type: "New venue",
        result: "Created a concise launch page with a stronger first impression."
      },
      {
        name: "Chef-led web concept",
        type: "Dining concept",
        result: "Built an editorial structure around story, menu, and reservation intent."
      }
    ]
  },
  "beverage-label": {
    title: "Beverage Label Design",
    meta: "Category: Labels for beverage brands",
    image: "assets/beverage-label.png",
    alt: "Premium beverage label mockup with bottles and cans on a warm counter",
    overview: "Label systems for beverage brands that need stronger flavor recognition, shelf confidence, and premium recall.",
    focus: "Flavor architecture, can and bottle hierarchy, color cues, material finish, and a flexible system across variants.",
    deliverables: "Label design system, flavor variation structure, bottle and can mockups, print artwork guidance.",
    tools: "Adobe Illustrator, Adobe Photoshop, Figma",
    samples: [
      {
        name: "Craft soda labels",
        type: "Beverage brand",
        result: "Built clearer flavor families for a multi-variant bottle range."
      },
      {
        name: "Cold brew can system",
        type: "Coffee beverage",
        result: "Designed a compact label system for chilled retail shelves."
      },
      {
        name: "Botanical drink labels",
        type: "Wellness beverage",
        result: "Balanced natural cues with a calmer premium shelf presence."
      }
    ]
  }
};

const modal = document.querySelector("#caseModal");
const modalImage = document.querySelector("#modalImage");
const modalTitle = document.querySelector("#modalTitle");
const modalCategory = document.querySelector("#modalCategory");
const modalOverview = document.querySelector("#modalOverview");
const modalFocus = document.querySelector("#modalFocus");
const modalSamples = document.querySelector("#modalSamples");
const modalDeliverables = document.querySelector("#modalDeliverables");
const modalTools = document.querySelector("#modalTools");
const closeTriggers = document.querySelectorAll("[data-close-modal]");
const focusableCards = document.querySelectorAll(".project-card");
let lastFocusedElement = null;

const toolIconMeta = {
  Figma: {
    className: "tool-figma",
    label: "Figma",
    shortLabel: "F"
  },
  "Adobe Illustrator": {
    className: "tool-ai",
    label: "Adobe Illustrator",
    shortLabel: "Ai"
  },
  "Adobe Photoshop": {
    className: "tool-ps",
    label: "Adobe Photoshop",
    shortLabel: "Ps"
  }
};

function updateLocalTime() {
  const timeElement = document.querySelector("#localTime");
  if (!timeElement) return;

  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Copenhagen",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(new Date());

  timeElement.textContent = `DK ${time}`;
}

function renderSamples(samples) {
  modalSamples.innerHTML = samples
    .map(
      (sample) => `
        <article class="sample-card">
          <span>${sample.type}</span>
          <h3>${sample.name}</h3>
          <p>${sample.result}</p>
        </article>
      `
    )
    .join("");
}

function renderTools(tools) {
  const toolList = tools.split(",").map((tool) => tool.trim());

  modalTools.innerHTML = toolList
    .map((tool) => {
      const icon = toolIconMeta[tool];
      if (!icon) return "";

      return `
        <span class="tool-icon ${icon.className}" role="img" aria-label="${icon.label}" title="${icon.label}">
          ${icon.shortLabel}
        </span>
      `;
    })
    .join("");
}

function openModal(categoryKey) {
  const category = categories[categoryKey];
  if (!category) return;

  lastFocusedElement = document.activeElement;
  modalImage.src = category.image;
  modalImage.alt = category.alt;
  modalTitle.textContent = category.title;
  modalCategory.textContent = category.meta;
  modalOverview.textContent = category.overview;
  modalFocus.textContent = category.focus;
  modalDeliverables.textContent = category.deliverables;
  renderTools(category.tools);
  renderSamples(category.samples);

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  document.querySelector(".modal-close").focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

focusableCards.forEach((card) => {
  card.addEventListener("click", () => openModal(card.dataset.project));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(card.dataset.project);
    }
  });
});

closeTriggers.forEach((trigger) => {
  trigger.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

const cursor = document.querySelector(".cursor-dot");

if (cursor && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("pointermove", (event) => {
    cursor.classList.add("is-active");
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });

  document.querySelectorAll("a, button, .project-card").forEach((element) => {
    element.addEventListener("pointerenter", () => cursor.classList.add("is-hovering"));
    element.addEventListener("pointerleave", () => cursor.classList.remove("is-hovering"));
  });
}

updateLocalTime();
setInterval(updateLocalTime, 30000);
