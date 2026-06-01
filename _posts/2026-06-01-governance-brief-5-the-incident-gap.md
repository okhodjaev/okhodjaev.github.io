---
title: "Analytical Note No. 5 — The Incident Gap"
date: 2026-06-01
permalink: /governance-briefs/the-incident-gap/
description: "Why the absence of incident protocols is itself a governance failure. The structural case for AI incident reporting architecture in Uzbekistan."
tags: [AI governance, incident reporting, Uzbekistan, institutional risk, enforcement gap]
layout: single
author_profile: false
classes: wide
toc_icon: "file-text"
excerpt: "The absence of a rule is not a neutral condition. It is an architectural choice — and its consequences begin accumulating the day the system goes live."
---

*Analytical Note No. 5 · Series: Governance Briefs · June 2026*
*Operationalises: [Beyond Control: Theory of Limits of AI Governance](https://okhodjaev.com/essays/)*

*Why the absence of incident protocols is itself a governance failure. The structural case for AI incident reporting architecture in Uzbekistan.
The absence of a rule is not a neutral condition. It is an architectural choice — and its consequences begin accumulating the day the system goes live.*
---

#### Contents

- [I. The Missing Protocol](#i-the-missing-protocol)
- [II. What an Incident Protocol Actually Does](#ii-what-an-incident-protocol-actually-does)
- [III. The Banking Precedent](#iii-the-banking-precedent)
- [IV. The Centralisation Risk Amplifier](#iv-the-centralisation-risk-amplifier)
- [V. The Invisible Accumulation](#v-the-invisible-accumulation)
- [Implications](#implications)
- [Signals to Watch](#signals-to-watch)
- [The Questions That Remain Open](#the-questions-that-remain-open)
- [Sources & Notes](#sources--notes)

*The absence of a rule is not a neutral condition. It is an architectural choice — and its consequences are not deferred until an incident occurs. They begin accumulating the day the system goes live.*

---

## I. The Missing Protocol

Every mature risk domain has a moment when the industry recognises that informal response is no longer sufficient. Aviation reached that moment in the 1950s. Nuclear power reached it at Three Mile Island and again at Chernobyl. Banking reached it — repeatedly, and with costly delays — through the crises of 1998, 2001, and 2008. In each case, the recognition followed a visible failure that had already caused harm. In each case, regulators and operators had known that incidents were occurring. What they lacked was a defined architecture for what happened next: who was notified, within what timeframe, on whose authority, with what independent verification, and with what consequences for incomplete or delayed disclosure.

Uzbekistan's AI governance framework, as currently constituted, does not have that architecture. It has deployment authorisations. It has coordination mechanisms between agencies. It has a roadmap that anticipates AI systems operating in financial services, healthcare, education, and public administration. What it does not have is a defined answer to the question that every deployed AI system eventually forces: what happens when something goes wrong?

This is not a minor procedural omission. The absence of incident protocols is a structural feature of the current framework — and that structure carries institutional consequences before any incident occurs.

---

## II. What an Incident Protocol Actually Does

The function of an incident reporting regime is widely misunderstood. It is treated, in most governance discussions, as a mechanism for managing harm after the fact — a channel through which failures are recorded, investigated, and addressed. This framing is incomplete.

An incident protocol does three things simultaneously. It establishes a taxonomy: what counts as a reportable event, at what threshold, under what classification. It creates an information pathway: from the deploying institution to the regulatory body, within defined timeframes, in standardised format. And it assigns consequence: non-disclosure, delayed disclosure, or incomplete disclosure carry specified institutional costs.

Without the first function, deploying institutions make their own determinations about what constitutes an incident — typically under incentives that favour narrow classification. Without the second, regulators learn of failures through journalistic coverage, public complaints, or downstream system behaviour — at a point when the corrective window is already narrowing. Without the third, disclosure remains voluntary in substance even when nominally required, because the cost of non-disclosure is structurally lower than the cost of disclosure.

All three functions are absent from Uzbekistan's current AI governance architecture.

---

## III. The Banking Precedent

This pattern is not unfamiliar to practitioners from banking and financial services. In Uzbekistan's banking sector in the 1990s and early 2000s, the absence of standardised incident reporting for payment system failures created a structural dynamic that is recognisable as a regulatory type rather than a local episode. In established regulatory systems, the information gap between institutional and aggregate pictures of system performance tends to appear first in payment infrastructure — and then reproduces itself in each new technological domain the regulator is asked to oversee.

When correspondent account infrastructure was fragmented and the centralised clearing mechanism did not yet exist, banks processed client payments across a system where failure was common and invisible simultaneously. Individual banks knew their own failure rates. The Central Bank knew what the aggregate system reported. The gap between those two numbers was not recorded in any document that crossed institutional boundaries — because no mechanism existed to require it.

The 2003 reform that established a centralised correspondent account for commercial bank settlement did not begin as an incident response. It began as a structural recognition that the information gap had become institutionally untenable: the regulator was making supervisory decisions based on a picture of the payment system that no longer corresponded to operational reality.

The AI governance equivalent of that 2003 recognition has not yet arrived. But the structural preconditions for it are accumulating. AI systems are being deployed in sectors — financial services, healthcare administration, education — where their outputs directly affect individual and institutional outcomes. The question of when those systems fail, how they fail, and who finds out first is not yet governed by any defined institutional mechanism.

---

## IV. The Centralisation Risk Amplifier

Analytical Note No. 4 of this series documented a specific constraint: that even an independent verification body, if one existed, would have no defined access path to the behavioural data its work requires under Uzbekistan's current QR payment architecture. That is a problem of audit access — the regulator cannot reach the data. This note identifies a prior problem: the absence of an incident protocol means that many system outputs are never classified as events requiring access in the first place.

The distinction matters. *Audit Without Access* describes a limit on what oversight can do once an event is recognised. The Incident Gap describes a structural condition in which events are not recognised at all — because no taxonomy exists to compel their classification, and no institutional authority exists to enforce that classification independently of the deploying entity.

Uzbekistan's unified QR payment architecture concentrates real-time behavioural transaction data in a single registry, operated by a single designated operator, under a regulatory framework that assumes reporting will flow upward through defined channels. That architecture creates a structural dependency: the quality of the regulator's information depends on the reporting integrity of the entity being overseen. This is a known failure mode. But in the AI context, the problem operates one layer deeper. A credit scoring model whose outputs feed into payment eligibility decisions is not merely processing transactions — it is making determinations that the operator's reporting system may not classify as incidents at all, because they do not activate any threshold that the current architecture would recognise as requiring disclosure. The deploying institution becomes, by default, the de facto arbiter of what counts as an incident. That is not a regulatory gap. It is a structural feature of an architecture that has not defined what a reportable event is.

---

## V. The Invisible Accumulation

The most consequential feature of a governance gap is not what happens when a visible failure occurs. It is what happens in the interval between deployment and visibility.

Incidents that are not reported do not disappear. They accumulate as undocumented operational history — a record that exists inside the deploying institution but is invisible to the regulator, to the public, and to any future body tasked with reviewing the system's performance. When a visible failure eventually triggers an inquiry, the inquiry begins not from a baseline of documented incident history, but from a condition of institutional amnesia. The deploying institution may have extensive internal records. The governance system lacks an independent, verifiable baseline.

This is precisely the pattern documented in the MTS license suspension of July 2012: the regulatory action was formally legal and structurally justified, but it operated against a backdrop of accumulated operational history — service quality data, user dependency patterns, the gradual concentration of subscriber dependence — that had not been captured in any independently verifiable record. The incident was resolved. The structural conditions that made millions of users unexpectedly dependent on a single operator for critical communications infrastructure were not systematically documented, and therefore not systematically addressed.

AI systems operating in critical sectors are creating the same accumulation dynamic. Every output that affects an institutional decision is part of a system's operational history. Without incident protocols, that history is institutional property of the deploying entity — not a shared record available to governance actors when the moment for review arrives.

---

## Implications

The absence of AI incident reporting protocols in Uzbekistan creates three compounding institutional risks that do not require any visible failure to activate.

First, the information baseline for future regulatory review is degrading in real time. Systems currently being deployed are producing operational history that will be invisible to any subsequent inquiry because no mechanism exists to require its documentation in independent, standardised form.

Second, the incentive architecture for deploying institutions defaults to narrow incident classification. Without defined thresholds, standardised taxonomies, and consequences for non-disclosure, operational failures are systematically underclassified — not through bad faith, but through the structural logic of institutions managing their own reputational and regulatory exposure.

Third, the correction window for incident protocol design is narrowing. The institutional cost of establishing a reporting regime is lowest when deployment is limited and incident history is short. As AI deployment deepens across financial services, healthcare, and public administration, the political and operational cost of requiring retrospective reporting from institutions that have already accumulated undocumented operational history rises. The architecture of accountability becomes harder to impose the longer its absence is normalised.

---

## Signals to Watch

Three observable indicators will mark whether this gap is narrowing or widening.

Whether any Uzbekistan regulatory body publishes a document containing: an explicit definition of a reportable AI incident, classification thresholds expressed in measurable terms — such as the number of affected users or decisions, categories of financial or medical harm, or defined capability breach — and mandatory notification timelines specifying a named recipient, a defined period, and a consequence for non-compliance. The appearance of all three elements in a single document, however imperfect, would represent the first operational step toward a functional incident architecture.

Whether public-sector AI procurement contracts include clauses requiring incident notification to a body independent of the deploying operator, reference to a standardised incident taxonomy, and contractual penalties for delayed or incomplete disclosure. Procurement conditionality has historically been the fastest route to de facto incident reporting standards in jurisdictions where primary regulatory capacity is still developing.

Whether any technical assistance agreement with an international partner institution — the World Bank, Asian Development Bank, or UNDP — makes disbursement conditional on delivery of minimum incident reporting architecture, with public benchmarks and defined timelines rather than general references to governance capacity building. The existence of such conditionality in a publicly available document would constitute verifiable institutional pressure that domestic political economy alone has not yet generated.

---

## The Questions That Remain Open

What is the threshold at which an AI output becomes an incident? The answer is not technical. It is institutional — and Uzbekistan's institutions have not yet answered it.

When the first publicly documented AI failure occurs in Uzbekistan's financial or healthcare system, what will the investigating body find? A rich operational record, independently documented and chronologically verified? Or a single institution's account of events, constructed after the fact, with no independent baseline for comparison?

The incident gap is not a risk waiting to be activated. It is a governance deficit that is structurally active from the day a system is deployed. The question is not whether this deficit matters. The question is what the institutional cost will be by the time it becomes visible enough to force action.

---

## Sources & Notes

[1] Uzbekistan Agency for Artificial Intelligence (UZAI). *National Strategy for the Development of Artificial Intelligence in the Republic of Uzbekistan.* 2021. [regulation.gov.uz](https://regulation.gov.uz)

[2] Central Bank of the Republic of Uzbekistan. *Resolution No. 3817 on the Unified QR Code Payment System.* March 2026. [cbu.uz](https://cbu.uz)

[3] OECD. *Recommendation of the Council on Artificial Intelligence.* 2019, updated 2024. Principle 1.5 on accountability and transparency obligations for AI actors. [oecd.ai](https://oecd.ai)

[4] Financial Stability Board. *Framework for the Regulatory and Supervisory Authorities' Assessment of Financial Institutions' AI/ML Usage.* 2022. [fsb.org](https://fsb.org)

[5] European Union. *AI Act* (Regulation (EU) 2024/1689). Articles 73–74 on serious incident reporting obligations for high-risk AI systems. [eur-lex.europa.eu](https://eur-lex.europa.eu)

[6] National Transportation Safety Board. *Aviation Accident Reporting System: History and Structural Design.* Washington, D.C. [ntsb.gov](https://ntsb.gov)

[7] Khodjaev, Oybek. *The Transparency Trap.* Beyond Control: Theory of Limits of AI Governance, Essay 2. February 2026. [okhodjaev.com/essays/the-transparency-trap/](https://okhodjaev.com/essays/the-transparency-trap/)

[8] Khodjaev, Oybek. *Audit Without Access.* Governance Briefs, Analytical Note No. 4. May 2026. [okhodjaev.com/governance-briefs/audit-without-access/](https://okhodjaev.com/governance-briefs/audit-without-access/)

---

*Oybek Khodjaev — over 35 years of experience in banking, finance, public administration, and business in Uzbekistan and the CIS. 
Author of the essay series “Beyond Control: Theory of Limits of AI Governance.” okhodjaev.com

The author advises public institutions and financial organisations on AI governance, verification frameworks, and institutional readiness.*
