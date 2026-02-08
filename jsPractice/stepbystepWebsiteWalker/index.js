const wrapper = document.getElementById("wrapper");
const items = Array.from(wrapper.children);

let currentIndex = 0;
let overlay, tooltip, nextBtn, prevBtn;

function initTour() {
  // Create overlay once
  overlay = document.createElement("div");
  Object.assign(overlay.style, {
    position: "fixed",
    boxShadow: "0 0 0 9999px rgba(0,0,0,0.4)",
    borderRadius: "6px",
    zIndex: "9999",
    transition: "all 0.3s ease"
  });
  document.body.appendChild(overlay);

  // Tooltip
  tooltip = document.createElement("div");
  Object.assign(tooltip.style, {
    position: "fixed",
    padding: "12px",
    background: "#000",
    color: "#fff",
    borderRadius: "6px",
    zIndex: "10000"
  });
  document.body.appendChild(tooltip);

  // Next button
  nextBtn = document.createElement("button");
  nextBtn.innerText = "Next";
  Object.assign(nextBtn.style, {
    position: "fixed",
    zIndex: "10000"
  });
  document.body.appendChild(nextBtn);

  // Prev button
  prevBtn = document.createElement("button");
  prevBtn.innerText = "Prev";
  Object.assign(prevBtn.style, {
    position: "fixed",
    zIndex: "10000"
  });
  document.body.appendChild(prevBtn);

  nextBtn.addEventListener("click", nextStep);
  prevBtn.addEventListener("click", prevStep);

  document.body.style.overflow = "hidden";

  highlightCurrent();
}

function highlightCurrent() {
  const element = items[currentIndex];
  const rect = element.getBoundingClientRect();

  // Overlay highlight
  Object.assign(overlay.style, {
    top: `${rect.top}px`,
    left: `${rect.left}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`
  });

  // Tooltip position
  tooltip.innerText = `This is item ${element.innerText}`;
  tooltip.style.top = `${rect.bottom + 10}px`;
  tooltip.style.left = `${rect.left}px`;

  // Buttons
  nextBtn.style.top = `${rect.bottom + 50}px`;
  nextBtn.style.left = `${rect.left}px`;

  prevBtn.style.top = `${rect.bottom + 50}px`;
  prevBtn.style.left = `${rect.left + 80}px`;
}

function nextStep() {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    highlightCurrent();
  } else {
    endTour();
  }
}

function prevStep() {
  if (currentIndex > 0) {
    currentIndex--;
    highlightCurrent();
  }
}

function endTour() {
  overlay.remove();
  tooltip.remove();
  nextBtn.remove();
  prevBtn.remove();
  document.body.style.overflow = "auto";
}

// Start the tour
initTour();
