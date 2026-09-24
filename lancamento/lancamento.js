document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.querySelector("[data-launch-plan-switch]");
  const card = document.querySelector("[data-launch-price-card]");
  if (!switcher || !card) return;

  const content = {
    anual: {
      badge: "R$ 200 OFF - MAIS VANTAJOSO",
      kicker: "por apenas",
      price: "79",
      period: "/ mês",
      features: ["Acesso completo durante 1 ano", "Todas as ferramentas e atualizações do DocFlow ARQ", "Até 2 usuários ativos por licença", "7 dias de garantia"],
      cta: "Quero o plano anual — 12x de R$ 79",
      plan: "anual"
    },
    mensal: {
      badge: "MAIS FLEXÍVEL",
      kicker: "por apenas",
      price: "99",
      period: "/ mês",
      features: ["Sem compromisso anual", "Todas as ferramentas e atualizações do DocFlow ARQ", "Até 2 usuários ativos por licença", "7 dias de garantia"],
      cta: "Quero o plano mensal — R$ 99/mês",
      plan: "mensal"
    }
  };

  const fields = {
    badge: card.querySelector("[data-launch-badge]"),
    kicker: card.querySelector("[data-launch-kicker]"),
    price: card.querySelector("[data-launch-price]"),
    period: card.querySelector("[data-launch-period]"),
    checkout: card.querySelector("[data-launch-checkout]")
  };

  const featureList = card.querySelector("[data-launch-features]");

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
    featureList.replaceChildren(...next.features.map((text) => {
      const item = document.createElement("li");
      item.textContent = text;
      return item;
    }));
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
