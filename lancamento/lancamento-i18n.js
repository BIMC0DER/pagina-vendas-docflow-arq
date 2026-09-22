(() => {
  const copy = {
    en: {
      "OFERTA DE LANÇAMENTO": "LAUNCH OFFER",
      "Conhecer os planos": "See the plans",
      "Leve o DocFlow para os seus próximos projetos.": "Bring DocFlow to your next projects.",
      "Os dois planos incluem todas as ferramentas do DocFlow ARQ, atualizações e atendimento durante a assinatura.": "Both plans include every DocFlow ARQ tool, updates, and support during your subscription.",
      "Escolha o período da assinatura": "Choose the subscription period",
      "Plano anual": "Annual plan",
      "Plano mensal": "Monthly plan",
      "MAIS VANTAJOSO": "BEST VALUE",
      "MAIS FLEXÍVEL": "MORE FLEXIBLE",
      "Melhor custo-benefício": "Best value",
      "Sem compromisso anual": "No annual commitment",
      "por apenas 12x de": "only 12 installments of",
      "pagamento mensal de": "monthly payment of",
      "/ mês": "/ month",
      "Desconto de R$ 200": "R$ 200 discount",
      "em relação a 12 meses no plano mensal": "compared with 12 months on the monthly plan",
      "24% mais caro": "24% more expensive",
      "que o valor mensal equivalente do plano anual": "than the annual plan's equivalent monthly price",
      "Acesso completo durante 1 ano, com cobrança anual parcelada.": "Full access for one year, with the annual price paid in installments.",
      "R$ 99 por mês, sem compromisso. Cancele quando quiser.": "R$ 99 per month, with no commitment. Cancel anytime.",
      "Quero o plano anual — 12x de R$ 79,90": "I want the annual plan — 12 installments of R$ 79.90",
      "Quero o plano mensal — R$ 99/mês": "I want the monthly plan — R$ 99/month",
      "Compra protegida": "Protected purchase",
      "Experimente as ferramentas no seu projeto por 7 dias.": "Try the tools in your project for 7 days.",
      "Você tem 7 dias para experimentar as ferramentas de cotas, vistas e pranchas em um projeto seu. Se não fizer sentido para sua rotina, solicite o reembolso dentro desse prazo.": "You have 7 days to try the dimension, view, and sheet tools in one of your projects. If they do not fit your workflow, request a refund within that period.",
      "Qual é a diferença entre os planos?": "What is the difference between the plans?",
      "No plano anual, você paga 12x de R$ 79,90 e economiza R$ 200 em comparação com 12 meses no plano mensal. No plano mensal, você paga R$ 99 por mês, sem compromisso, e pode cancelar quando quiser.": "On the annual plan, you pay 12 installments of R$ 79.90 and save R$ 200 compared with 12 months on the monthly plan. On the monthly plan, you pay R$ 99 per month with no commitment and can cancel anytime.",
      "7 dias de garantia · Revit 2023 a 2027 · suporte em português": "7-day guarantee · Revit 2023 through 2027 · support in Portuguese"
    },
    es: {
      "OFERTA DE LANÇAMENTO": "OFERTA DE LANZAMIENTO",
      "Conhecer os planos": "Ver los planes",
      "Leve o DocFlow para os seus próximos projetos.": "Lleve DocFlow a sus próximos proyectos.",
      "Os dois planos incluem todas as ferramentas do DocFlow ARQ, atualizações e atendimento durante a assinatura.": "Ambos planes incluyen todas las herramientas de DocFlow ARQ, actualizaciones y soporte durante la suscripción.",
      "Escolha o período da assinatura": "Elija el período de suscripción",
      "Plano anual": "Plan anual",
      "Plano mensal": "Plan mensual",
      "MAIS VANTAJOSO": "MÁS CONVENIENTE",
      "MAIS FLEXÍVEL": "MÁS FLEXIBLE",
      "Melhor custo-benefício": "Mejor relación calidad-precio",
      "Sem compromisso anual": "Sin compromiso anual",
      "por apenas 12x de": "por solo 12 cuotas de",
      "pagamento mensal de": "pago mensual de",
      "/ mês": "/ mes",
      "Desconto de R$ 200": "Descuento de R$ 200",
      "em relação a 12 meses no plano mensal": "en comparación con 12 meses del plan mensual",
      "24% mais caro": "24% más caro",
      "que o valor mensal equivalente do plano anual": "que el valor mensual equivalente del plan anual",
      "Acesso completo durante 1 ano, com cobrança anual parcelada.": "Acceso completo durante un año, con el precio anual en cuotas.",
      "R$ 99 por mês, sem compromisso. Cancele quando quiser.": "R$ 99 al mes, sin compromiso. Cancele cuando quiera.",
      "Quero o plano anual — 12x de R$ 79,90": "Quiero el plan anual — 12 cuotas de R$ 79,90",
      "Quero o plano mensal — R$ 99/mês": "Quiero el plan mensual — R$ 99/mes",
      "Compra protegida": "Compra protegida",
      "Experimente as ferramentas no seu projeto por 7 dias.": "Pruebe las herramientas en su proyecto durante 7 días.",
      "Você tem 7 dias para experimentar as ferramentas de cotas, vistas e pranchas em um projeto seu. Se não fizer sentido para sua rotina, solicite o reembolso dentro desse prazo.": "Tiene 7 días para probar las herramientas de cotas, vistas y láminas en uno de sus proyectos. Si no se adaptan a su rutina, solicite el reembolso dentro de ese plazo.",
      "Qual é a diferença entre os planos?": "¿Cuál es la diferencia entre los planes?",
      "No plano anual, você paga 12x de R$ 79,90 e economiza R$ 200 em comparação com 12 meses no plano mensal. No plano mensal, você paga R$ 99 por mês, sem compromisso, e pode cancelar quando quiser.": "En el plan anual, paga 12 cuotas de R$ 79,90 y ahorra R$ 200 frente a 12 meses del plan mensual. En el plan mensual, paga R$ 99 al mes, sin compromiso, y puede cancelar cuando quiera.",
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