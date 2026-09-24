document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.querySelector("[data-launch-plan-switch]");
  const card = document.querySelector("[data-launch-price-card]");
  if (!switcher || !card) return;

  const content = {
    anual: {
      badge: "MAIS VANTAJOSO",
      kicker: "por apenas 12x de",
      price: "79",
      period: "",
      saving: "R$ 200 OFF",
      description: "Acesso completo durante 1 ano, com cobrança anual parcelada.",
      cta: "Quero o plano anual — 12x de R$ 79",
      plan: "anual"
    },
    mensal: {
      badge: "MAIS FLEXÍVEL",
      kicker: "pagamento mensal de",
      price: "99",
      period: "/ mês",
      saving: "24% mais caro",
      description: "R$ 99 por mês, sem compromisso. Cancele quando quiser.",
      cta: "Quero o plano mensal — R$ 99/mês",
      plan: "mensal"
    }
  };

  const fields = {
    badge: card.querySelector("[data-launch-badge]"),
    kicker: card.querySelector("[data-launch-kicker]"),
    price: card.querySelector("[data-launch-price]"),
    period: card.querySelector("[data-launch-period]"),
    saving: card.querySelector("[data-launch-saving]"),
    description: card.querySelector("[data-launch-description]"),
    checkout: card.querySelector("[data-launch-checkout]")
  };

  const trackingNames = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "src", "sck", "ref", "gclid", "fbclid"];
  const withTracking = (rawUrl) => {
    const destination = new URL(rawUrl);
    const current = new URL(window.location.href);
    trackingNames.forEach((name) => {
      const value = current.searchParams.get(name);
      if (value) destination.searchParams.set(name, value);
    });
    return destination.toString();
  };

  const render = (plan) => {
    const next = content[plan];
    if (!next) return;
    card.dataset.planActive = plan;
    Object.entries(fields).forEach(([key, element]) => {
      if (!element || key === "checkout") return;
      element.textContent = next[key];
    });
    fields.checkout.textContent = next.cta;
    fields.checkout.href = withTracking(fields.checkout.dataset[`${plan}Url`]);
    switcher.querySelectorAll("button").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.launchPlan === plan));
    });
    card.classList.remove("is-changing");
    window.requestAnimationFrame(() => card.classList.add("is-changing"));
  };

  switcher.addEventListener("click", (event) => {
    const button = event.target.closest("[data-launch-plan]");
    if (button) render(button.dataset.launchPlan);
  });

  const requestedPlan = new URL(window.location.href).searchParams.get("plano");
  render(requestedPlan === "mensal" ? "mensal" : "anual");
});
