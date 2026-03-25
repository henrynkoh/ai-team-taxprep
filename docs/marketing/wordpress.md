# WordPress — posts, pages, and blocks

Use a **Page** for evergreen “Program overview” and **Posts** for SEO articles. Install a **cookie/compliance** plugin if you run EU traffic.

Disclaimer text: [ADS-DISCLAIMERS.md](./ADS-DISCLAIMERS.md)

---

## Suggested site structure

| Slug | Type | Purpose |
|------|------|---------|
| `/seattle-combo-curriculum` | Page | Program summary, syllabus PDF link, apply |
| `/disclaimer` | Page | Full educational + professional responsibility text |
| `/blog` | Archive | Thought leadership |

---

## Block pattern: hero section (copy for Gutenberg)

**Heading (H1):** 7-Day Curriculum for Seattle “Combo” Tax Returns  
**Paragraph:** TurboTax Desktop workflows plus Claude, ChatGPT, and Gemini — built for **tax professionals** who serve **single filers** with **W-2/RSU**, **Airbnb STR**, **AFH**, and **depreciation** complexity.

**Buttons:** `Request syllabus` · `View open-source app docs`

**Small text:** Educational only. Not individual tax advice.

---

## Blog post — SEO title & meta description

**Title (60–65 chars):** Seattle Tax Pros: TurboTax + LLM Workflow Training (7 Days)  
**Meta description (150–155):** Professional development for complex single-filer returns: RSU, STR, AFH, depreciation. TurboTax Desktop maps and 3-LLM prompt library. Educational; verify with IRS/software.

---

## Sample excerpt (for RSS / email tools)

> We’re piloting a 7-day professional intensive for Greater Seattle preparers focused on one ugly-beautiful niche: **tech W-2/RSU + short-term rental + AFH + depreciation** in **TurboTax Desktop**, with **cross-model** prompting in **Claude, ChatGPT, and Gemini**. If that sentence felt long, that’s the point — the stack is real, and checklists beat heroics.

---

## Categories & tags

- **Categories:** `Professional development`, `Tax software`, `Seattle`  
- **Tags:** `TurboTax Desktop`, `RSU`, `Schedule E`, `Form 4562`, `LLM`, `STR`

---

## Shortcode-style CTA (plain HTML in Custom HTML block)

```html
<div class="cta-box" style="border:1px solid #ccc;padding:1.5rem;border-radius:8px;">
  <strong>Tax professionals:</strong> request the syllabus for the Seattle Combo Tax Curriculum
  (7 days, standard or advanced track).
  <a href="mailto:you@example.com?subject=Syllabus%20request">Email us</a>.
  <p style="font-size:0.85rem;margin-top:1rem;">Educational content only.</p>
</div>
```

---

## WooCommerce / booking (optional)

If you sell seats, use product description fields to repeat: **no guaranteed tax outcomes**, **eligibility = credentialed preparers** (as your counsel advises), **refund policy**.
