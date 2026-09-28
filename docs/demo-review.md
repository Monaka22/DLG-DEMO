# Demo review — 28 September 2026

## Route coverage
- Opened 63 internally linked URL variants in Thai and English. Each rendered a page heading, without horizontal overflow at the current browser width.
- Also exercised Shop customer care and order confirmation.
- Checked 10 invalid URL cases, including missing doctor, center, package, article, product, unknown page/brand and malformed encoding. All show a recovery page.

## Completed journeys
| Journey | Result |
| --- | --- |
| Doctor search → profile → appointment | Passed. Doctor and center carried into the form; mock request confirmed. |
| Package filter → detail → appointment | Passed. Empty result can reset; package and price carried forward. |
| Catalog search → no results → reset | Passed. Reset returns all six products. |
| Product → basket → checkout → order | Passed. Required fields block empty submission; one Daily Greens costs ฿890 + ฿60 delivery = ฿950 throughout. No real payment. |
| Checkout with empty basket | Shows the empty basket and a shopping link. |
| Favorites and product comparison | Passed. Saved product appears in favorites; comparison shows two selected products. |
| Store search → selected map | Passed. Chiang Mai search selects Chiang Mai. No results hide the old map; reset restores locations. |
| Partner, event and contact forms | Passed with fictional data. All show local mock confirmation. |
| Social preview → contact form | Passed. Popup closes and focuses the form. |

## Improvements delivered
- Hub cards explain the suitable business types and existing features in both languages.
- Missing routes no longer silently show the first item.
- Doctor and store searches have recovery buttons.
- Footer contact links connect each prototype to its own contact form. Hub branding links back to Hub.
- Mock form confirmations explicitly describe the simulated next step.

## Scope
This review covers browser routes and simulated interactions. Forms, payments and contact channels remain mockups; external messages or payments were not sent. GPS permission was not requested and external destination pages were not audited.

The test basket was restored to Daily Greens × 1 and favorites to empty. A local demo order receipt was created during checkout verification; it contains no customer contact data.
