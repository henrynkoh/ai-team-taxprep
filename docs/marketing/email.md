# Email — templates (1:1 and broadcast)

Use **merge tags** (`{{first_name}}`, `{{firm}}`) per your ESP. Keep **CAN-SPAM** compliant: physical address, unsubscribe.

Disclaimers: [ADS-DISCLAIMERS.md](./ADS-DISCLAIMERS.md)

---

## 1. Cold outreach (tax pro — partnership / guest cohort)

**Subject:** 7-day Seattle niche workshop — TurboTax + LLM workflow?

**Body:**

Hi {{first_name}},

I run professional development for preparers who see a lot of **W-2/RSU + short-term rental + AFH** on **single-filer** returns. We map **TurboTax Desktop** end-to-end and build a **Claude/ChatGPT/Gemini** prompt library — cross-checking outputs, no extra automation stack.

If that matches your client base in **Greater Seattle**, happy to send a **one-page syllabus**. Educational only — not soliciting tax advice on specific returns.

Worth a 12-minute call?

{{your_name}}  
{{title}}  
{{link}}

---

## 2. Lead magnet delivery (“checklist”)

**Subject:** Your TurboTax + RSU/STR/AFH checklist (educational)

Hi {{first_name}},

Here’s the link: {{lead_magnet_url}}

**Please read:** This is **training material** for practitioners. Verify every line against **current year** IRS publications and your **TurboTax Desktop** build before using with clients.

Next step: if you want the full **7-day** outline, reply **SYLLABUS**.

{{your_name}}

---

## 3. Registration / receipt

**Subject:** Confirmed — Seattle Combo Tax Curriculum ({{track}} track)

Hi {{first_name}},

You’re registered for the **{{track}}** cohort ({{dates}}).

**Prep:**

- Install/update **TurboTax Desktop** per syllabus minimum build.  
- Open accounts on **Claude, ChatGPT, Gemini**.  
- Skim Day 1 in the curriculum app: {{app_url}}/curriculum/{{track}}/day/1  

**Policies:** educational content; bring your own **cyber** hygiene; **no** sharing of real client PII inside LLM prompts.

See you soon,  
{{your_name}}

---

## 4. Post–Day 7 follow-up

**Subject:** Playbook export + what to do this week

Hi {{first_name}},

Cohort wrap — strong work on the **workflow map** and **prompt library**. Recommended **this week**:

1. Copy your best prompts into a **single** team doc (version + date).  
2. Schedule **one** public post (LinkedIn or FB group) using a hook from Day 2.  
3. Pick **one** return in your queue to run the **triple-model** check before filing.

Reminder: LLMs **do not** replace Pub 527 / Form 4562 instructions / professional judgment.

{{your_name}}

---

## 5. Internal team email (associate preparer)

**Subject:** How we use the 3-LLM check on combo returns

Team —

For **Seattle combo** files (RSU + STR + AFH), minimum workflow:

1. Run approved checklist prompt in **Claude, ChatGPT, Gemini**.  
2. Diff the outputs; flag conflicts to **reviewer**.  
3. **Never** paste SSNs or full brokerage statements.

Docs: {{internal_manual_link}}

Thanks,  
{{your_name}}

---

## HTML email safe paragraph (disclaimer)

```html
<p style="font-size:11px;color:#666;margin-top:24px;">
Educational use only. Not tax, legal, or investment advice. Verify all guidance with
official IRS materials, form instructions, your software version, and firm policy.
</p>
```
