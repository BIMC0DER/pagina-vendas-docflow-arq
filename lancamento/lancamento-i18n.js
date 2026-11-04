(() => {
  const copy = {
    en: {
      "Conhecer os planos": "See the plans",
      "Leve o DocFlow para os seus próximos projetos.": "Bring DocFlow to your next projects.",
      "O plano anual inclui todas as ferramentas do DocFlow ARQ, atualizações e atendimento durante a assinatura.": "The annual plan includes every DocFlow ARQ tool, updates, and support during your subscription.",
      "Escolha o período da assinatura": "Choose the subscription period",
      "Anual": "Annual",
      "Plano anual": "Annual plan",
      "Melhor custo-benefício": "Best value",
      "por apenas": "only",
      "Acesso completo durante 1 ano": "Full access for one year",
      "Todas as ferramentas e atualizações do DocFlow ARQ": "All DocFlow ARQ tools and updates",
      "Até 2 usuários ativos por licença": "Up to 2 active users per license",
      "/ mês": "/ month",
      "Acesso completo durante 1 ano, com cobrança anual parcelada.": "Full access for one year, with the annual price paid in installments.",
      "Quero o plano anual — 12x de R$ 79": "I want the annual plan — 12 installments of R$ 79",
      "Compra protegida": "Protected purchase",
      "Experimente as ferramentas no seu projeto por 7 dias.": "Try the tools in your project for 7 days.",
      "Você tem 7 dias para experimentar as ferramentas de cotas, vistas e pranchas em um projeto seu. Se não fizer sentido para sua rotina, solicite o reembolso dentro desse prazo.": "You have 7 days to try the dimension, view, and sheet tools in one of your projects. If they do not fit your workflow, request a refund within that period.",
      "Como funciona o plano anual?": "How does the annual plan work?",
      "O plano anual custa 12x de R$ 79 e inclui acesso completo durante 1 ano, com todas as ferramentas, atualizações e atendimento durante a assinatura.": "Annual plan: 12 installments of R$ 79, with full access for one year, all tools, updates, and support.",
      "7 dias de garantia · Revit 2023 a 2027 · suporte em português": "7-day guarantee · Revit 2023 through 2027 · support in Portuguese"
    },
    es: {
      "Conhecer os planos": "Ver los planes",
      "Leve o DocFlow para os seus próximos projetos.": "Lleve DocFlow a sus próximos proyectos.",
      "O plano anual inclui todas as ferramentas do DocFlow ARQ, atualizações e atendimento durante a assinatura.": "El plan anual incluye todas las herramientas de DocFlow ARQ, actualizaciones y soporte durante la suscripción.",
      "Escolha o período da assinatura": "Elija el período de suscripción",
      "Anual": "Anual",
      "Plano anual": "Plan anual",
      "Melhor custo-benefício": "Mejor relación calidad-precio",
      "por apenas": "por solo",
      "Acesso completo durante 1 ano": "Acceso completo durante un año",
      "Todas as ferramentas e atualizações do DocFlow ARQ": "Todas las herramientas y actualizaciones de DocFlow ARQ",
      "Até 2 usuários ativos por licença": "Hasta 2 usuarios activos por licencia",
      "/ mês": "/ mes",
      "Acesso completo durante 1 ano, com cobrança anual parcelada.": "Acceso completo durante un año, con el precio anual en cuotas.",
      "Quero o plano anual — 12x de R$ 79": "Quiero el plan anual — 12 cuotas de R$ 79",
      "Compra protegida": "Compra protegida",
      "Experimente as ferramentas no seu projeto por 7 dias.": "Pruebe las herramientas en su proyecto durante 7 días.",
      "Você tem 7 dias para experimentar as ferramentas de cotas, vistas e pranchas em um projeto seu. Se não fizer sentido para sua rotina, solicite o reembolso dentro desse prazo.": "Tiene 7 días para probar las herramientas de cotas, vistas y láminas en uno de sus proyectos. Si no se adaptan a su rutina, solicite el reembolso dentro de ese plazo.",
      "Como funciona o plano anual?": "¿Cómo funciona el plan anual?",
      "O plano anual custa 12x de R$ 79 e inclui acesso completo durante 1 ano, com todas as ferramentas, atualizações e atendimento durante a assinatura.": "Plan anual: 12 cuotas de R$ 79, con acceso completo durante un año, todas las herramientas, actualizaciones y soporte.",
      "7 dias de garantia · Revit 2023 a 2027 · suporte em português": "7 días de garantía · Revit 2023 a 2027 · soporte en portugués"
    }
  };

  const reverse = {};
  Object.values(copy).forEach((language) => Object.entries(language).forEach(([source, translated]) => { reverse[translated] = source; }));
  const translate = (root = document.body) => {
    const language = window.docflowI18n?.language || "pt";
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const current = node.nodeValue.trim();
      if (!current || ["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) return;
      const source = reverse[current] || current;
      const target = language === "pt" ? source : copy[language]?.[source];
      if (target && target !== current) node.nodeValue = node.nodeValue.replace(current, target);
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    translate();
    const observer = new MutationObserver((records) => records.forEach((record) => {
      if (record.type === "characterData") translate(record.target.parentElement);
      record.addedNodes.forEach((node) => node.nodeType === Node.ELEMENT_NODE && translate(node));
    }));
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  });
  window.addEventListener("docflow-languagechange", () => translate());
})();