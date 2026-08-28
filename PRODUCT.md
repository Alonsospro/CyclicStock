# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two distinct roles operating within the same system:

- **Floor counters** — warehouse/inventory staff who perform cyclic counts on the shop or warehouse floor. They work primarily on mobile devices (phones/tablets), often with physical or camera-based barcode scanners. Connectivity may be limited; speed and legibility under harsh lighting are critical.
- **Supervisors / admins** — inventory managers who plan count cycles, assign work centers (centros), review discrepancies, approve or reject photo-justified differences, and export reports. They work on desktop browsers.

## Product Purpose

CyclicStock is a multi-center cyclic inventory counting system. It lets floor counters scan barcodes, record counts, and attach photo justifications for discrepancies — and syncs every count directly to Excel files (.xlsx) without requiring an ERP. Supervisors manage cycle configuration, user access, and center-level reporting from an admin panel. Success means every counted item is recorded, discrepancies are documented and justified, and the final count is reflected in an accurate Excel file the business can act on.

## Positioning

Barcode scanning on mobile + photo-justified discrepancy workflow that feeds directly into Excel — no ERP, no middleware, no cloud dependency for the core counting operation.

## Operating Context

- Each **centro de trabajo** (work center) has its own isolated dataset, users, and count cycle.
- Floor staff carry mobile devices around shelving rows; the UI must be operable one-handed, with large tap targets.
- Barcode scanning is done via the device camera (html5-qrcode library) — no dedicated scanner hardware required.
- After counting, supervisors pull Excel reports (.xlsx via ExcelJS) that become the authoritative inventory record.
- The product is currently branded and operated for **Nibol Repuestos** (spare-parts distributor), though the architecture supports multi-tenant deployment.
- Deployment: Node.js/Express server; cloud-ready (Render, Vercel configs present); Docker support exists.

## Capabilities and Constraints

- Multi-center (multicentro) architecture — centros are isolated at the data and user level.
- Mobile-first layout with camera-based barcode scanning is non-negotiable for floor users.
- Excel files (.xlsx) are the downstream record — all count data must be exportable in structured Excel format.
- Authentication is role-based (floor counter vs. supervisor); users are scoped to one or more centros.
- Photo uploads are supported as discrepancy justification evidence.
- Stack: Node.js + Express backend, vanilla HTML/CSS/JS frontend (no frontend framework), ExcelJS for spreadsheet generation, Google Sheets integration available as optional sync layer.

## Brand Commitments

- Product name: **CyclicStock** (also referred to as "CyclicStock PRO" in the UI heading).
- Company badge: **Nibol Repuestos** (shown on the login screen).
- Dark mode is the default theme; a light/dark toggle is present.
- Icons: Font Awesome 6. Typography: Inter (body), Outfit (headings/brand), JetBrains Mono (codes/SKUs).

## Evidence on Hand

- `public/index.html` — full single-page application shell (2 200+ lines); login screen, dashboard, scanning view, supervisor panel all present.
- `public/css/style.css` — 150 KB design system (tokens, components, animations).
- `public/js/app.js` — 228 KB client-side application logic.
- `server.js` — 50 KB Express API (auth, Excel import/export, Google Sheets sync, multi-center routing).
- `services/` — excelService, configService, usersService, assignmentService, auditService, justificationService, googleSheetService.

## Product Principles

1. **Floor first.** Every UI decision starts with the counter's mobile experience — speed, legibility, and one-handed usability outrank desktop aesthetics.
2. **Excel is the contract.** The count is not done until it's in the spreadsheet. No workflow that leaves data stranded in the app is acceptable.
3. **Centers are sovereign.** Data, users, and cycles per centro are fully isolated; cross-center contamination is a critical bug.
4. **Justify, don't discard.** Discrepancies are not errors to hide — they must be documented with reason and photo evidence before a cycle can close.
5. **Run anywhere.** No cloud vendor lock-in for core operation; the server must boot from a single `node server.js`.
