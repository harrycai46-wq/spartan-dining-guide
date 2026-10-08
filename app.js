const hallData = [
  {
    id: "brody",
    name: "Brody Square",
    building: "Brody Hall",
    address: "241 W. Brody Road, East Lansing, MI 48825",
    locationHint: "West campus · Brody Neighborhood",
    lat: 42.731481,
    lng: -84.495581,
    officialMapUrl: "https://maps.msu.edu/interactive/index.php?location=L25O",
    zone: "Brody",
    zoneKey: "brody",
    description: "A spacious social hub with broad food variety and plenty of room for groups.",
    atmosphere: "Lively & social",
    noise: 4,
    variety: 5,
    study: 3,
    late: 3,
    diets: ["vegetarian", "vegan", "halal"],
    tags: ["Big groups", "Many stations", "Bright interior"],
    hoursLabel: "Daily · 9:00 AM–3:00 PM · 4:30–9:00 PM",
    schedule: { 0:[[540,900],[990,1260]],1:[[540,900],[990,1260]],2:[[540,900],[990,1260]],3:[[540,900],[990,1260]],4:[[540,900],[990,1260]],5:[[540,900],[990,1260]],6:[[540,900],[990,1260]] },
    image: "https://edge.sitecorecloud.io/michigansta4044-msutodaye50e-prode5b2-fb0c/media/Project/MSU/MSUToday/Images/2025/building-stories-student-spaces/buildings-student-spaces-brody-square-2-ns.jpg?h=733&iar=0&w=1100",
    imageAlt: "Stairs and seating inside Brody Square dining hall",
    imageSource: "https://msutoday.msu.edu/news/2025/03/building-stories-student-spaces",
    imageLabel: "Official MSU dining hall photo",
    imageCredit: "Nick Schrader",
    detail: "Brody Square works well when a group wants plenty of choice in one place. The open layout and shared seating make it feel active, especially around lunch and dinner.",
    menuUrl: "https://eatatstate.msu.edu/menu/Brody%20square/all"
  },
  {
    id: "landon",
    name: "Heritage Commons",
    building: "Landon Hall",
    address: "632 W. Circle Drive, East Lansing, MI 48825",
    locationHint: "West Circle · North Neighborhood",
    lat: 42.733853,
    lng: -84.485105,
    officialMapUrl: "https://maps.msu.edu/interactive/index.php?location=BK0S",
    zone: "North",
    zoneKey: "north",
    description: "A character-rich North Neighborhood option in a historic residential setting.",
    atmosphere: "Warm & classic",
    noise: 3,
    variety: 4,
    study: 4,
    late: 3,
    diets: ["vegetarian", "vegan"],
    tags: ["Historic setting", "Cozy seating", "North campus"],
    hoursLabel: "Sun–Fri · 7:00 AM–3:00 PM · 4:30–9:00 PM",
    schedule: { 0:[[420,900],[990,1260]],1:[[420,900],[990,1260]],2:[[420,900],[990,1260]],3:[[420,900],[990,1260]],4:[[420,900],[990,1260]],5:[[420,900],[990,1260]],6:[[540,900],[990,1260]] },
    image: "https://msu-p-001.sitecorecontenthub.cloud/api/public/content/0ad7ed8abd2e4af6b0347efb1834c290?v=e87cfa27",
    imageAlt: "Students eating inside Heritage Commons at Landon Hall",
    imageSource: "https://msutoday.msu.edu/news/2026/08/msu-things-to-look-forward-to",
    imageLabel: "Official MSU dining hall photo",
    imageCredit: "Derrick L. Turner",
    detail: "Heritage Commons offers a more traditional campus atmosphere. It is a useful North Neighborhood choice for students who value a calmer room and a sense of place.",
    menuUrl: "https://eatatstate.msu.edu/menu/Heritage%20Commons%20at%20Landon/all"
  },
  {
    id: "case",
    name: "South Pointe",
    building: "Case Hall",
    address: "842 Chestnut Road, East Lansing, MI 48825",
    locationHint: "South campus · South Neighborhood",
    lat: 42.724459,
    lng: -84.488511,
    officialMapUrl: "https://maps.msu.edu/interactive/index.php?location=50BU",
    zone: "South",
    zoneKey: "south",
    description: "A convenient South Neighborhood hall with flexible seating and solid everyday variety.",
    atmosphere: "Practical & active",
    noise: 3,
    variety: 4,
    study: 3,
    late: 3,
    diets: ["vegetarian", "vegan", "halal"],
    tags: ["South campus", "Easy meetup", "Good variety"],
    hoursLabel: "Daily · 7:00 AM–3:00 PM · 4:30–9:00 PM",
    schedule: { 0:[[420,900],[990,1260]],1:[[420,900],[990,1260]],2:[[420,900],[990,1260]],3:[[420,900],[990,1260]],4:[[420,900],[990,1260]],5:[[420,900],[990,1260]],6:[[420,900],[990,1260]] },
    image: "https://edge.sitecorecloud.io/michigansta4044-msutodaye50e-prode5b2-fb0c/media/project/msu/msutoday/images/2023/great-food-great-price-eat-at-state-dining-rates/eatatstate1.jpg?h=640&iar=0&w=960",
    imageAlt: "Interior of South Pointe dining hall at Case Hall",
    imageSource: "https://msutoday.msu.edu/news/2023/06/great-food-great-price-dining-plan-rate-eat-at-state",
    imageLabel: "Official MSU dining hall photo",
    detail: "South Pointe is positioned as an all-purpose stop for South Neighborhood. The prototype emphasizes convenience, dependable variety, and group-friendly seating.",
    menuUrl: "https://eatatstate.msu.edu/menu/South%20Pointe%20at%20Case/all"
  },
  {
    id: "akers",
    name: "The Edge",
    building: "Akers Hall",
    address: "908 Akers Road, East Lansing, MI 48825",
    locationHint: "East campus · East Neighborhood",
    lat: 42.724167,
    lng: -84.464854,
    officialMapUrl: "https://maps.msu.edu/interactive/index.php?location=4S5X",
    zone: "East",
    zoneKey: "east",
    description: "An East Neighborhood destination with a social feel and multiple everyday choices.",
    atmosphere: "Energetic",
    noise: 4,
    variety: 4,
    study: 2,
    late: 3,
    diets: ["vegetarian", "vegan"],
    tags: ["East campus", "Social", "Multiple stations"],
    hoursLabel: "Daily · 9:00 AM–3:00 PM · 4:30–9:00 PM",
    schedule: { 0:[[540,900],[990,1260]],1:[[540,900],[990,1260]],2:[[540,900],[990,1260]],3:[[540,900],[990,1260]],4:[[540,900],[990,1260]],5:[[540,900],[990,1260]],6:[[540,900],[990,1260]] },
    image: "https://edge.sitecorecloud.io/michigansta4044-msutodaye50e-prode5b2-fb0c/media/project/msu/msutoday/images/2023/great-food-great-price-eat-at-state-dining-rates/eatatstate2-3.jpg?h=1686&iar=0&w=3000",
    imageAlt: "Students and employees eating inside The Edge at Akers Hall",
    imageSource: "https://msutoday.msu.edu/news/2023/06/great-food-great-price-dining-plan-rate-eat-at-state",
    imageLabel: "Official MSU dining hall photo",
    detail: "The Edge is presented as a lively East Neighborhood option. It is best suited to students prioritizing a social meal and convenient access from nearby residences.",
    menuUrl: "https://eatatstate.msu.edu/menu/The%20Edge%20at%20Akers/all"
  },
  {
    id: "gallery",
    name: "The Gallery",
    building: "Snyder/Phillips Hall",
    address: "362 Bogue Street, East Lansing, MI 48825",
    locationHint: "Snyder entrance · North Neighborhood",
    lat: 42.729999,
    lng: -84.472944,
    officialMapUrl: "https://maps.msu.edu/interactive/index.php?location=KLZ9",
    zone: "North",
    zoneKey: "north",
    description: "A central North Neighborhood choice with an inviting, creative campus atmosphere.",
    atmosphere: "Creative & communal",
    noise: 3,
    variety: 4,
    study: 4,
    late: 3,
    diets: ["vegetarian", "vegan", "halal"],
    tags: ["Central location", "Study-friendly", "Community feel"],
    hoursLabel: "Daily · 9:00 AM–3:00 PM · 4:30–9:00 PM",
    schedule: { 0:[[540,900],[990,1260]],1:[[540,900],[990,1260]],2:[[540,900],[990,1260]],3:[[540,900],[990,1260]],4:[[540,900],[990,1260]],5:[[540,900],[990,1260]],6:[[540,900],[990,1260]] },
    image: "https://msu-p-001.sitecorecontenthub.cloud/api/public/content/a0f0f74eee474e259abc1b233eb2929a?v=22868670",
    imageAlt: "Students dining inside The Gallery at Snyder and Phillips Hall",
    imageSource: "https://msutoday.msu.edu/news/2026/09/2026-09-01-photo-gallery",
    imageLabel: "Official MSU dining hall photo",
    imageCredit: "Derrick L. Turner",
    detail: "The Gallery is a strong candidate for students who want a balance of food, conversation, and a place to stay for a while. Its environment profile should be confirmed through student interviews.",
    menuUrl: "https://eatatstate.msu.edu/menu/The%20Gallery%20at%20Snyder%20Phillips/all"
  },
  {
    id: "holmes",
    name: "The Nucleus",
    building: "Holmes Hall",
    address: "919 E. Shaw Lane, East Lansing, MI 48825",
    locationHint: "E. Shaw Lane · East Neighborhood",
    lat: 42.726611,
    lng: -84.464747,
    officialMapUrl: "https://maps.msu.edu/interactive/index.php?location=TR2V",
    zone: "East",
    zoneKey: "east",
    description: "A later-day East Neighborhood option that becomes especially useful after classes.",
    atmosphere: "Focused & relaxed",
    noise: 2,
    variety: 3,
    study: 4,
    late: 5,
    diets: ["vegetarian", "vegan"],
    tags: ["Open later", "Calmer", "East campus"],
    hoursLabel: "Sun–Thu · 3:00–10:00 PM",
    schedule: { 0:[[900,1320]],1:[[900,1320]],2:[[900,1320]],3:[[900,1320]],4:[[900,1320]],5:[],6:[] },
    image: "https://liveon.msu.edu/sites/default/files/2022-02/HOLMES-FOR-WEB.png",
    imageAlt: "Official exterior view of Holmes Hall, home of The Nucleus",
    imageSource: "https://liveon.msu.edu/reshall/holmes",
    imageLabel: "Official MSU building exterior",
    detail: "The Nucleus fills a distinct role: an afternoon and evening dining option. Its later schedule makes it worth highlighting separately from halls built around breakfast and lunch.",
    menuUrl: "https://eatatstate.msu.edu/menu/The%20Nucleus%20at%20Holmes/all"
  },
  {
    id: "shaw",
    name: "The Vista",
    building: "Shaw Hall",
    address: "591 N. Shaw Lane, East Lansing, MI 48825",
    locationHint: "Central campus · River Trail Neighborhood",
    lat: 42.726747,
    lng: -84.47529,
    officialMapUrl: "https://maps.msu.edu/interactive/index.php?location=BUFO",
    zone: "River Trail",
    zoneKey: "river",
    description: "A well-placed River Trail stop for students moving across the center of campus.",
    atmosphere: "Fast & convenient",
    noise: 3,
    variety: 3,
    study: 3,
    late: 2,
    diets: ["vegetarian", "vegan"],
    tags: ["Central route", "Quick stop", "River Trail"],
    hoursLabel: "Mon–Fri · 7:00 AM–3:00 PM · 4:30–8:00 PM",
    schedule: { 0:[[600,900]],1:[[420,900],[990,1200]],2:[[420,900],[990,1200]],3:[[420,900],[990,1200]],4:[[420,900],[990,1200]],5:[[420,900],[990,1200]],6:[[600,900]] },
    image: "https://edge.sitecorecloud.io/michigansta4044-msutodaye50e-prode5b2-fb0c/media/project/msu/msutoday/images/2023/great-food-great-price-eat-at-state-dining-rates/eatatstate7.jpg?h=605&iar=0&w=1024",
    imageAlt: "Diners in line for food inside The Vista at Shaw Hall",
    imageSource: "https://msutoday.msu.edu/news/2023/06/great-food-great-price-dining-plan-rate-eat-at-state",
    imageLabel: "Official MSU dining hall photo",
    detail: "The Vista’s central placement is its clearest advantage. The experience should emphasize how easily it fits between classes and trips through the River Trail area.",
    menuUrl: "https://eatatstate.msu.edu/menu/The%20Vista%20at%20Shaw/all"
  },
  {
    id: "owen",
    name: "Thrive",
    building: "Owen Hall",
    address: "735 E. Shaw Lane, East Lansing, MI 48825",
    locationHint: "E. Shaw Lane · River Trail Neighborhood",
    lat: 42.726327,
    lng: -84.47068,
    officialMapUrl: "https://maps.msu.edu/interactive/index.php?location=IK3D",
    zone: "River Trail",
    zoneKey: "river",
    description: "A weekday-focused hall where allergen-conscious dining is the defining consideration.",
    atmosphere: "Calm & intentional",
    noise: 2,
    variety: 3,
    study: 4,
    late: 2,
    diets: ["vegetarian", "vegan", "allergen"],
    tags: ["Allergen-conscious", "Calmer", "Weekdays"],
    hoursLabel: "Mon–Fri · 11:00 AM–8:00 PM",
    schedule: { 0:[],1:[[660,1200]],2:[[660,1200]],3:[[660,1200]],4:[[660,1200]],5:[[660,1200]],6:[] },
    image: "https://eatatstate.msu.edu/sites/default/files/inline-images/MSU%201.jpg",
    imageAlt: "Dining station inside Thrive at Owen Hall",
    imageSource: "https://eatatstate.msu.edu/news/allergyaward20",
    imageLabel: "Official MSU dining hall photo",
    detail: "Thrive stands apart through its allergen-conscious focus. The final product should explain specific accommodations using current official information and avoid making medical guarantees.",
    menuUrl: "https://eatatstate.msu.edu/menu/Thrive%20at%20Owen/all"
  }
];

const state = { filter: "all", search: "", compare: [], view: "list" };
const zoneOrder = { brody: 1, north: 2, river: 3, south: 4, east: 5 };

const hallGrid = document.querySelector("#hallGrid");
const emptyState = document.querySelector("#emptyState");
const compareContent = document.querySelector("#compareContent");
const compareCount = document.querySelector("#compareCount");
const detailDialog = document.querySelector("#detailDialog");
const dialogContent = document.querySelector("#dialogContent");
const campusMapMarkers = document.querySelector("#campusMapMarkers");
const locationList = document.querySelector("#locationList");

function eastLansingNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Detroit",
    weekday: "short",
    hour: "numeric",
    minute: "2-digit",
    hour12: false
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
  const dayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return { day: dayMap[values.weekday], minutes: Number(values.hour) * 60 + Number(values.minute), label: `${values.weekday} · ${values.hour}:${values.minute}` };
}

function openState(hall) {
  const now = eastLansingNow();
  const intervals = hall.schedule[now.day] || [];
  const active = intervals.find(([start, end]) => now.minutes >= start && now.minutes < end);
  if (active) return { open: true, label: `Open · until ${formatMinutes(active[1])}` };
  const next = intervals.find(([start]) => start > now.minutes);
  if (next) return { open: false, label: `Closed · opens ${formatMinutes(next[0])}` };
  return { open: false, label: "Closed today" };
}

function formatMinutes(total) {
  const hour24 = Math.floor(total / 60);
  const minute = total % 60;
  const suffix = hour24 >= 12 ? "PM" : "AM";
  const hour = hour24 % 12 || 12;
  return `${hour}:${String(minute).padStart(2, "0")} ${suffix}`;
}

function visibleHalls() {
  const query = state.search.toLowerCase().trim();
  return hallData.filter(hall => {
    const haystack = [hall.name, hall.building, hall.zone, hall.address, hall.locationHint, hall.description, ...hall.tags].join(" ").toLowerCase();
    const matchesSearch = !query || haystack.includes(query);
    const status = openState(hall);
    const matchesFilter = state.filter === "all"
      || (state.filter === "open" && status.open)
      || (state.filter === "quiet" && hall.noise <= 2)
      || (state.filter === "variety" && hall.variety >= 4)
      || (state.filter === "study" && hall.study >= 4);
    return matchesSearch && matchesFilter;
  });
}

function visualMarkup(hall) {
  const fallback = `<div class="zone-art" aria-hidden="true">${hall.zone.slice(0, 2).toUpperCase()}</div>`;
  if (hall.image) return `${fallback}<img class="hall-photo" src="${hall.image}" alt="${hall.imageAlt || `Photo of ${hall.name}`}" loading="lazy" referrerpolicy="no-referrer" />`;
  return fallback;
}

function renderHalls() {
  const halls = visibleHalls();
  hallGrid.classList.toggle("zone-view", state.view === "zone");
  hallGrid.innerHTML = halls.map((hall, index) => {
    const status = openState(hall);
    const selected = state.compare.includes(hall.id);
    return `
      <article class="hall-card ${index === 0 && state.view === "list" ? "featured" : ""}" style="--zone-order:${zoneOrder[hall.zoneKey]}">
        <div class="hall-image">
          ${visualMarkup(hall)}
          <span class="card-status ${status.open ? "open" : "closed"}">${status.label}</span>
        </div>
        <div class="hall-body">
          <div class="hall-meta"><span>${hall.zone} Neighborhood</span><span>${hall.atmosphere}</span></div>
          <h3>${hall.name}</h3>
          <p class="building-name"><span aria-hidden="true">⌖</span> Inside ${hall.building}</p>
          <p class="card-address">${hall.address.split(",")[0]} · ${hall.locationHint}</p>
          <p class="hall-description">${hall.description}</p>
          <div class="tag-row">${hall.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
          <div class="card-actions">
            <button class="text-button" type="button" data-detail="${hall.id}">View details →</button>
            <button class="compare-button ${selected ? "selected" : ""}" type="button" data-compare="${hall.id}" aria-pressed="${selected}">${selected ? "✓ Comparing" : "+ Compare"}</button>
          </div>
        </div>
      </article>`;
  }).join("");
  emptyState.hidden = halls.length !== 0;
}

function renderLocations() {
  const latitudes = hallData.map(hall => hall.lat);
  const longitudes = hallData.map(hall => hall.lng);
  const minLat = Math.min(...latitudes);
  const maxLat = Math.max(...latitudes);
  const minLng = Math.min(...longitudes);
  const maxLng = Math.max(...longitudes);

  campusMapMarkers.innerHTML = hallData.map((hall, index) => {
    const x = 12 + ((hall.lng - minLng) / (maxLng - minLng)) * 76;
    const y = 14 + ((maxLat - hall.lat) / (maxLat - minLat)) * 72;
    return `
      <button class="map-marker" type="button" data-detail="${hall.id}" style="--map-x:${x.toFixed(2)}%; --map-y:${y.toFixed(2)}%;" aria-label="Open details for ${hall.name} in ${hall.building}">
        <span class="map-marker-number">${String(index + 1).padStart(2, "0")}</span>
        <span class="map-marker-label"><strong>${hall.building}</strong><small>${hall.name}</small></span>
      </button>`;
  }).join("");

  locationList.innerHTML = hallData.map((hall, index) => `
    <article class="location-card">
      <span class="location-index">${String(index + 1).padStart(2, "0")}</span>
      <div class="location-copy">
        <p>${hall.name}</p>
        <h3>${hall.building}</h3>
        <address>${hall.address}</address>
        <span>${hall.locationHint}</span>
      </div>
      <div class="location-actions">
        <button type="button" data-detail="${hall.id}">Details</button>
        <a href="${hall.officialMapUrl}" target="_blank" rel="noreferrer" aria-label="Open ${hall.building} in the official MSU map">MSU map ↗</a>
      </div>
    </article>`).join("");
}

function renderCompare() {
  compareCount.textContent = state.compare.length;
  if (!state.compare.length) {
    compareContent.innerHTML = `<div class="compare-placeholder"><p>Choose two or three halls to see their atmosphere, hours, and strengths together.</p></div>`;
    return;
  }
  const selected = state.compare.map(id => hallData.find(hall => hall.id === id));
  const rows = [
    ["Building & street", hall => `${hall.building} · ${hall.address.split(",")[0]}`],
    ["Neighborhood", hall => hall.zone],
    ["Current status", hall => openState(hall).label],
    ["Atmosphere", hall => hall.atmosphere],
    ["Food variety", hall => `${hall.variety}/5`],
    ["Study-friendly", hall => `${hall.study}/5`],
    ["Regular hours", hall => hall.hoursLabel],
    ["Best for", hall => hall.tags.slice(0, 2).join(" · ")]
  ];
  compareContent.innerHTML = `
    <div class="compare-table-wrap">
      <table class="compare-table">
        <thead><tr><th>Compare</th>${selected.map(hall => `<th>${hall.name}<span class="compare-building">${hall.building}</span><button class="remove-compare" data-remove="${hall.id}">Remove</button></th>`).join("")}</tr></thead>
        <tbody>${rows.map(([label, value]) => `<tr><td>${label}</td>${selected.map(hall => `<td>${value(hall)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>`;
}

function toggleCompare(id) {
  if (state.compare.includes(id)) state.compare = state.compare.filter(item => item !== id);
  else if (state.compare.length < 3) state.compare.push(id);
  else {
    const recommendation = document.querySelector("#recommendation");
    recommendation.classList.add("show");
    recommendation.innerHTML = `<div class="recommendation-rank">3</div><div><h3>Your comparison is full</h3><p>Remove one hall before adding another.</p></div><button class="text-button" onclick="document.querySelector('#compare').scrollIntoView()">Review shortlist →</button>`;
  }
  renderHalls();
  renderCompare();
}

function showDetail(id) {
  const hall = hallData.find(item => item.id === id);
  const status = openState(hall);
  dialogContent.innerHTML = `
    <div class="dialog-hero">
      ${visualMarkup(hall)}
      ${hall.imageSource ? `<a class="photo-source" href="${hall.imageSource}" target="_blank" rel="noreferrer">${hall.imageLabel || "Official MSU photo"}${hall.imageCredit ? ` · ${hall.imageCredit}` : ""} ↗</a>` : ""}
    </div>
    <div class="dialog-body">
      <p class="eyebrow">${hall.zone} Neighborhood · ${hall.building}</p>
      <h2 id="dialogTitle">${hall.name}</h2>
      <p class="dialog-building"><span aria-hidden="true">⌖</span> Inside ${hall.building}</p>
      <div class="dialog-location">
        <span>Official building address</span>
        <address>${hall.address}</address>
        <p>${hall.locationHint}</p>
      </div>
      <p class="dialog-intro">${hall.detail}</p>
      <div class="detail-stats">
        <div class="detail-stat"><span>Right now</span><strong>${status.label}</strong></div>
        <div class="detail-stat"><span>Atmosphere</span><strong>${hall.atmosphere}</strong></div>
        <div class="detail-stat"><span>Study score</span><strong>${hall.study}/5 · prototype</strong></div>
      </div>
      <div class="detail-block"><h3>Regular in-semester hours</h3><p>${hall.hoursLabel}. Special hours and access rules may apply.</p></div>
      <div class="detail-block"><h3>Good to know</h3><div class="tag-row">${hall.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div></div>
      <div class="detail-block"><h3>Dietary discovery</h3><p>${hall.diets.map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(" · ")}. Confirm ingredients and accommodations with the on-site culinary team.</p></div>
      <div class="detail-links">
        <a href="${hall.menuUrl}" target="_blank" rel="noreferrer">View official menu ↗</a>
        <a href="${hall.officialMapUrl}" target="_blank" rel="noreferrer">Plan route to ${hall.building} on MSU map ↗</a>
      </div>
    </div>`;
  detailDialog.showModal();
}

function recommendHall() {
  const area = document.querySelector("#areaSelect").value;
  const priority = document.querySelector("#prioritySelect").value;
  const diet = document.querySelector("#dietSelect").value;
  const scored = hallData.map(hall => {
    let score = 0;
    const reasons = [];
    const status = openState(hall);
    if (status.open) { score += 25; reasons.push("open now"); }
    if (area !== "any" && hall.zoneKey === area) { score += 35; reasons.push(`in ${hall.zone}`); }
    if (diet !== "any" && hall.diets.includes(diet)) { score += 24; reasons.push(`${diet}-friendly options`); }
    if (priority === "quiet") { score += (6 - hall.noise) * 6; if (hall.noise <= 2) reasons.push("a calmer setting"); }
    else if (priority === "variety") { score += hall.variety * 6; if (hall.variety >= 4) reasons.push("strong variety"); }
    else if (priority === "late") { score += hall.late * 6; if (hall.late >= 4) reasons.push("later hours"); }
    else if (priority === "study") { score += hall.study * 6; if (hall.study >= 4) reasons.push("study-friendly seating"); }
    else score += hall.variety * 3 + hall.study * 2 + (6 - hall.noise);
    return { hall, score, reasons };
  }).sort((a, b) => b.score - a.score);

  const best = scored[0];
  const recommendation = document.querySelector("#recommendation");
  recommendation.classList.add("show");
  recommendation.innerHTML = `
    <div class="recommendation-rank">1</div>
    <div><h3>${best.hall.name} · ${best.hall.building}</h3><p>${best.reasons.length ? `Why: ${best.reasons.slice(0,3).join(", ")}.` : best.hall.description}</p></div>
    <button class="text-button" type="button" data-recommend-detail="${best.hall.id}">See why →</button>`;
}

document.querySelector("#finderForm").addEventListener("submit", event => { event.preventDefault(); recommendHall(); });
document.querySelector("#searchInput").addEventListener("input", event => { state.search = event.target.value; renderHalls(); });
document.querySelector("#resetFilters").addEventListener("click", () => {
  state.filter = "all";
  state.search = "";
  document.querySelector("#searchInput").value = "";
  document.querySelectorAll(".chip").forEach(chip => chip.classList.toggle("active", chip.dataset.filter === "all"));
  renderHalls();
});

document.querySelectorAll(".chip").forEach(chip => chip.addEventListener("click", () => {
  state.filter = chip.dataset.filter;
  document.querySelectorAll(".chip").forEach(item => item.classList.toggle("active", item === chip));
  renderHalls();
}));

document.querySelector("#listViewButton").addEventListener("click", () => {
  state.view = "list";
  document.querySelector("#listViewButton").classList.add("active");
  document.querySelector("#zoneViewButton").classList.remove("active");
  document.querySelector("#listViewButton").setAttribute("aria-pressed", "true");
  document.querySelector("#zoneViewButton").setAttribute("aria-pressed", "false");
  renderHalls();
});

document.querySelector("#zoneViewButton").addEventListener("click", () => {
  state.view = "zone";
  document.querySelector("#zoneViewButton").classList.add("active");
  document.querySelector("#listViewButton").classList.remove("active");
  document.querySelector("#zoneViewButton").setAttribute("aria-pressed", "true");
  document.querySelector("#listViewButton").setAttribute("aria-pressed", "false");
  renderHalls();
});

document.addEventListener("click", event => {
  const detailButton = event.target.closest("[data-detail]");
  const compareButton = event.target.closest("[data-compare]");
  const removeButton = event.target.closest("[data-remove]");
  const recommendedButton = event.target.closest("[data-recommend-detail]");
  if (detailButton) showDetail(detailButton.dataset.detail);
  if (compareButton) toggleCompare(compareButton.dataset.compare);
  if (removeButton) toggleCompare(removeButton.dataset.remove);
  if (recommendedButton) showDetail(recommendedButton.dataset.recommendDetail);
});

document.addEventListener("error", event => {
  if (event.target.matches?.(".hall-photo")) event.target.remove();
}, true);

document.querySelector("#closeDialog").addEventListener("click", () => detailDialog.close());
detailDialog.addEventListener("click", event => {
  const rect = detailDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) detailDialog.close();
});

document.querySelector("#localTime").textContent = `${eastLansingNow().label} · East Lansing`;
renderHalls();
renderLocations();
renderCompare();
