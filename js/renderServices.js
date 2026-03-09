const servicesData = [
  {
    title: "AUTOFOLIERUNG",

    image:
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "AUTOBESCHRIFTUNG",
    image:
      "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "SCHEIBENTÖNUNG",
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "LACKSCHUTZFOLIERUNG",
    image:
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "AUTOFOLIERUNG",

    image:
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "AUTOBESCHRIFTUNG",
    image:
      "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "SCHEIBENTÖNUNG",
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "LACKSCHUTZFOLIERUNG",
    image:
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "LACKSCHUTZFOLIERUNG",
    image:
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800",
  },
];

function renderServices() {
  const gridContainer = document.getElementById("servicesGrid");

  let htmlContent = "";

  servicesData.forEach((item) => {
    htmlContent += `
                    <div class="service-card">
                        <img src="${item.image}" alt="${item.title}" class="service-image">
                        <div class="card-overlay">
                            <h4 class="card-title">${item.title}</h4>
                            <div class="card-btn">
                                <svg viewBox="0 0 24 24">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </div>
                        </div>
                    </div>
                `;
  });

  gridContainer.innerHTML = htmlContent;
}

renderServices();

const modal = document.getElementById("serviceModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const closeModal = document.getElementById("closeModal");

document.addEventListener("click", function (e) {
  const card = e.target.closest(".service-card");

  if (card) {
    const img = card.querySelector(".service-image").src;
    const title = card.querySelector(".card-title").innerText;

    modalImg.src = img;
    modalTitle.innerText = title;

    modal.classList.add("active");
  }
});

closeModal.onclick = () => {
  modal.classList.remove("active");
};

document.addEventListener("click", function (e) {

  if (e.target === modal) {
    modal.classList.remove("active");
  }

});
