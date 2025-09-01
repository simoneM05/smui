// links.js
const mainLinks = [
  { href: "/", label: "Components" },
  { href: "Ui-Kit", label: "Ui Kit" },
  { href: "Docs", label: "Docs" },
];

const GetStartedLinks = [
  { href: "/Docs/Introduction", label: "Introduction" },
  { href: "/Docs/Installation", label: "Installation" },
  { href: "/Docs/Theming", label: "Theming" },
  { href: "/Docs/dark-mode", label: "Dark Mode" },
];

const uiKitLinks = [
  { href: "Ui-Kit/buttons", label: "Buttons" },
  { href: "Ui-Kit/forms", label: "Forms" },
  { href: "Ui-Kit/cards", label: "Cards" },
];

// Esporta tutto insieme
export const allLinks = [...mainLinks, ...uiKitLinks];

// Esporta separatamente se serve
export { mainLinks, uiKitLinks, GetStartedLinks };
