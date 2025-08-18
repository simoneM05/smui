// links.js
const mainLinks = [
  { href: "/", label: "Components" },
  { href: "Ui-Kit", label: "Ui Kit" },
  { href: "Docs", label: "Docs" },
];
const docsLinks = [
  { href: "Docs/accordion", label: "Accordion" },
  { href: "Docs/alert", label: "Alert" },
  { href: "Docs/avatar", label: "Avatar" },
  { href: "Docs/button", label: "Button" },
  { href: "Docs/checkbox", label: "Checkbox" },
  { href: "Docs/collapsible", label: "Collapsible" },
  { href: "Docs/drawer", label: "Drawer" },
  { href: "Docs/navigation-menu", label: "Navigation Menu" },
  { href: "Docs/skeleton", label: "Skeleton" },
  { href: "Docs/input", label: "Input" },
  { href: "Docs/select", label: "Select" },
  { href: "Docs/radio", label: "Radio" },
  { href: "Docs/textarea", label: "Textarea" },
  { href: "Docs/modal", label: "Modal" },
  { href: "Docs/tabs", label: "Tabs" },
  { href: "Docs/table", label: "Table" },
  { href: "Docs/badge", label: "Badge" },
  { href: "Docs/progress", label: "Progress" },
  { href: "Docs/tooltip", label: "Tooltip" },
  { href: "Docs/pagination", label: "Pagination" },
];

const uiKitLinks = [
  { href: "Ui-Kit/buttons", label: "Buttons" },
  { href: "Ui-Kit/forms", label: "Forms" },
  { href: "Ui-Kit/cards", label: "Cards" },
];

// Esporta tutto insieme
export const allLinks = [...mainLinks, ...docsLinks, ...uiKitLinks];

// Esporta separatamente se serve
export { mainLinks, docsLinks, uiKitLinks };
