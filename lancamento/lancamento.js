document.addEventListener("DOMContentLoaded", () => {
  const checkout = document.querySelector("[data-launch-checkout]");
  if (!checkout) return;
  const destination = new URL(checkout.dataset.anualUrl);
  const current = new URL(window.location.href);
  ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "src", "sck", "ref", "gclid", "fbclid"].forEach((name) => {
    const value = current.searchParams.get(name);
    if (value) destination.searchParams.set(name, value);
  });
  checkout.href = destination.toString();
});