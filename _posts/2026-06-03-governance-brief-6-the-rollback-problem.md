---
title: "Analytical Note No. 6 — The Rollback Problem"
date: 2026-06-03
permalink: /governance-briefs/the-rollback-problem/
description: "AI scoring in Uzbekistan's financial sector and the non-linear cost of correction. Once a shared scoring platform operates at sector level, correction requires explicit procedures that monitoring mechanisms do not automatically imply."
tags: [AI governance, Uzbekistan, financial sector, AI scoring, correction window, agency transfer]
layout: single
author_profile: false
classes: wide
toc_icon: "file-text"
excerpt: "Most systems remain technically reversible long after they have ceased to be institutionally reversible."
---

**Analytical Note No. 6 · Series: Governance Briefs · June 2026**

**Operationalises: Essay 7 "The Correction Window," Essay 8 "The Agency Transfer," Essay 11 "The Institutional Gap" — Beyond Control: Theory of Limits of AI Governance**

*[Русская версия](/governance-briefs/the-rollback-problem-ru/)*

---

The question governance frameworks rarely ask is not whether an AI system can be corrected, but at what point correction becomes structurally prohibitive. In most deployments, the decisive variable is not the technical properties of the model. It is the depth of institutional, contractual, and decisional dependencies that accumulate around it after launch. Most systems remain technically reversible long after they have ceased to be institutionally reversible. The Correction Window — the period during which modification remains operationally manageable without systemic disruption — does not narrow gradually. It compresses.

Uzbekistan's financial sector is entering precisely this phase.

**The architecture of emerging dependency**

Presidential Decree No. PP-204 of 26 May 2026 establishes a centralised digital financial platform for SME lending. An AI-based alternative scoring model is scheduled to become operational from 1 December 2026. The platform will integrate data from 47 government registries listed in Annex 1 and 71 alternative scoring datasets listed in Annex 2, sourced from agencies spanning the State Tax Committee to the Bureau of Compulsory Enforcement. The operator is structured as a separate legal entity under the Central Bank, with its information systems housed within the Central Bank's Main Informatisation Centre. This creates what might be termed an institutional execution layer: a specialised intermediary positioned between the state and the market, through which credit decisions are channelled. Unlike ordinary service providers, institutional execution layers become progressively harder to replace because other institutions reorganise around them. Such nodes, once operational, tend to become structurally indispensable faster than the governance frameworks around them mature. Scoring results will be recorded in borrowers' credit histories at credit bureaus in accordance with established procedures.

This is a technically coherent response to a genuine development problem: expanding the SME credit portfolio threefold by 2030, enabling unsecured micro-loans within one hour, and reaching borrowers without traditional credit histories. The architecture is not the issue. The structural question is what forms around it once the system is live.

Three interlocking layers of dependency emerge in sequence.

The first is data dependency. Data from government registries is provided to the platform free of charge until June 2027, then routed through the Digital Government platform. From June 2028, alternative scoring data follows the same path. By 2028, the scoring model will be operationally inseparable from the data repositories and information systems of at least a dozen state agencies. A fundamental correction to the model's input architecture is not a technical update — it is a renegotiation of data-sharing protocols across government.

This phased timeline is not incidental. It is written into the decree itself. PP-204 establishes three distinct stages of data integration: direct agency feeds until 2027, Digital Government routing from 2027, and full alternative dataset consolidation by 2028. Each stage expands the model's operational dependencies. The Correction Window does not simply close over time — it closes in stages that the decree's own calendar defines. By 2028, rollback requires not merely a technical revision but a reversal of legislative and inter-agency commitments already in force.

The second is contractual and procedural dependency. Scoring results embed into bank credit workflows, internal risk models, and credit bureau records. Staff training, liability allocation, and approval processes adjust to the new architecture. Reversion is no longer a model swap — it is a multi-institutional operational overhaul.

The third is decisional and capital dependency. Each AI-generated credit decision creates a binding contract in the bank's portfolio and a precedent in the borrower's credit history. If the model is later found to have mispriced risk, correction cannot be applied retrospectively to disbursed funds. The rollback cost is absorbed by the institution's balance sheet: mispriced loans remain active, requiring recalibration of capital reserves and risk-weighted assets across the sector.

What makes the overall cost non-linear is the interaction between these layers. The first decision processed affects one borrower and one bank. Ten thousand decisions affect the same borrower and bank, but also the credit bureau records used by every other lender, the risk-weight calculations across portfolios, the calibration assumptions in the scoring model itself, and the audit trail against which future disputes will be resolved. Each additional decision does not merely add volume — it compounds all three dependency structures simultaneously. The cost of rollback accelerates faster than the scale of deployment.

**Existing patterns in the sector**

AI-assisted scoring is already active in retail lending. Anor Bank's consumer micro-loan product offers decisions in approximately five minutes on amounts up to 100 million soums. TBC Bank's online credit product reaches the same limit without collateral or guarantors, with the decision described as automatic and based on income, credit history, and current debt load. Uzum Bank operates micro-loans of up to 25 million soums through its digital lending service. In each case, the scoring decision is made at machine speed without human review at the point of decision.

These are institution-specific products. The dependency structure they create is bounded by each institution's systems and portfolio. The architecture established by PP-204 is of a different order: a shared platform, a state-linked operator, and scoring results that enter the credit bureau record of every borrower who passes through the system.

At the infrastructure level, the joint venture 1ziyo.ai, established between UZCARD and zypl.ai, is dedicated to deploying AI technologies for credit scoring, fraud detection, and financial risk management across Uzbekistan's financial sector. This is not a bank-level product but a sector-level capability. When scoring moves from institution-specific tools to shared national infrastructure, the rollback problem scales from institutional to systemic.

PP-204 introduces a further dimension that extends beyond credit assessment. Within two months of the decree, commercial banks are required to launch the "AI Maslahatchi" programme — an AI-assisted advisory service designed to help entrepreneurs develop business ideas and identify financing options aligned with the specialisation and growth potential of their mahalla. This marks a qualitative shift: the system no longer evaluates economic behaviour after the fact. It begins to participate in shaping it before the fact. In the terms of Essay 8, this is agency transfer operating not at the level of the bank's credit officer, but at the level of the entrepreneur's initial decision. The architecture that governs what ideas get formed and financed becomes, over time, the architecture that governs what economic activity gets created.

**The gap in the current architecture**

This note does not critique PP-204 as a policy choice. The decree is a coherent response to a genuine access problem in SME finance. The point is architectural: once a shared scoring platform operates at sector level, correction requires explicit procedures that monitoring mechanisms do not automatically imply.

The existing oversight framework establishes cybersecurity review every two years, digitisation audits by the Ministry of Digital Technologies, and quarterly reporting to the Central Bank. These are monitoring mechanisms. They are not correction mechanisms. In practice, mature digital systems often develop sophisticated mechanisms for observing themselves before they develop equally sophisticated mechanisms for changing themselves.

The distinction matters. Monitoring determines whether the system is functioning as specified. Correction requires defined answers to three further questions: what constitutes a finding sufficient to trigger mandatory review or suspension; which institution holds operational halt authority; and what procedure governs decisions already embedded in credit bureau records when a model is subsequently found to be materially flawed. Defining that procedure becomes more costly with every month of operation, as the dependencies described above continue to accumulate.

International frameworks, including the Basel Committee's principles on operational risk, affirm the need for active risk management frameworks before deployment at scale — but do not yet address the unwinding of scoring architectures that have already reshaped data flows and contractual structures across a national financial system.

In the current architecture, these questions are not explicitly assigned to a designated institutional procedure. Article 7¹ of the Law of the Republic of Uzbekistan No. ZRU-1115 prohibits AI as the sole basis for legally significant decisions. This formal boundary remains prospective. It does not establish retrospective liability or remediation procedures — specifically, who bears the cost when a decision, nominally compliant at the moment it was made, is later found to rest on a flawed scoring output that has already propagated through credit bureau records and bank portfolios.

This is the precise mechanism through which agency transfer, as analysed in Essay 8, closes the Correction Window described in Essay 7. The model takes on operational authority faster than governance structures define how to take it back.

**What this signals for the governance architecture**

The gap identified here is not a deficiency of the institutions involved. The Central Bank's platform design is technically sound. PP-204 is a coherent policy response to a genuine access problem. The structural risk lies in the asymmetry of speed: the deployment timeline creates dependency faster than the oversight architecture creates correction capacity. This is a property of large-scale platforms with shared data and a common operator, not a specific feature of PP-204.

Countries that have deployed automated financial infrastructure at scale have encountered the same asymmetry. Technical deployment preceded institutional resilience by a significant interval, and the correction frameworks that eventually emerged were shaped by the dependencies already in place, not by the design intent. Uzbekistan's QR payment centralisation, examined in Essay 11, follows the same trajectory: capability first, compensating governance mechanisms later.

The Correction Window for the platform established by PP-204 is measured in months from the December 2026 launch, not in years from eventual full deployment. Dependencies will form fastest in the first twelve to eighteen months of operation. After that, any material change carries disproportionate operational, legal, and institutional cost.

Defining correction procedures before operational dependencies form is architecturally cheaper than defining them after. This is not a political observation. It is the consistent lesson produced by every comparable deployment, regardless of jurisdiction.

The most consequential governance decisions are often made before governance mechanisms formally exist. PP-204 itself reflects this sequencing: the operational architecture is launched first, while Article 11 instructs the Central Bank to prepare the supporting legislative amendments within two months. By the time the legal and supervisory architecture catches up with the infrastructure it is meant to govern, that infrastructure may already have become too embedded to unwind without systemic cost. This is not a critique of the sequencing — it is an argument for treating the interval between launch and legislative consolidation as the critical window for establishing correction procedures while they are still architecturally affordable.

*The following note in this series examines how pre-deployment procurement decisions lock in governance architecture for the operational life of the system.*

---

## Sources & Notes

[1] Republic of Uzbekistan. *Presidential Decree No. PP-204 "On further measures to increase the popularisation of financial services and expand support for small and medium-sized businesses."* 26 May 2026. [lex.uz](https://lex.uz/ru/docs/7409517)

[2] Anor Bank. *"Udobny Microzaym" — consumer micro-loan product.* Official product page. [anorbank.uz](https://www.anorbank.uz/credits/udobnyy-mikrozaym/)

[3] TBC Bank Uzbekistan. *TBC Kredit — FAQ.* Official product FAQ. [tbcbank.uz](https://tbcbank.uz/ru/product/kredity/faq/)

[4] Uzum Bank. *Micro-loan product via Uzum Nasiya.* Official product page. [uzumbank.uz](https://uzumbank.uz/ru/card/)

[5] UZCARD. *"UZCARD and zypl.ai establish joint venture 1ziyo.ai."* Official announcement. [api.uzcard.uz](https://api.uzcard.uz/en/news/1ziyo_ai/)

[6] zypl.ai. *Company overview and product description.* [zypl.ai](https://zypl.ai/)

[7] Republic of Uzbekistan. *Law No. ZRU-1115 "On Artificial Intelligence."* Article 7¹. [lex.uz](https://lex.uz/ru/docs/6600604)

[8] Basel Committee on Banking Supervision. *Principles for the Sound Management of Operational Risk.* Bank for International Settlements, June 2011. [bis.org](https://www.bis.org/publ/bcbs195.htm)

[9] Spot.uz. *"V Uzbekistane zapustyat tsifrovuyu platformu dlya kreditovaniya biznesa."* June 2026. [spot.uz](https://www.spot.uz/ru/2026/06/02/lending-platform/)

[10] Khodjaev, O. *Beyond Control: Theory of Limits of AI Governance.* Essay 7 "The Correction Window"; Essay 8 "The Agency Transfer"; Essay 11 "The Institutional Gap." 2026. [okhodjaev.com](https://okhodjaev.com/essays/)

---

*Oybek Khodjaev has over 35 years of experience in banking, finance, public administration, and business in Uzbekistan and the CIS. He is the author of* Beyond Control: Theory of Limits of AI Governance. *[okhodjaev.com](https://okhodjaev.com/)*

*The author advises government bodies and financial organisations on AI governance, verification frameworks, and institutional readiness.*

**Published** June 3, 2026

<a href="https://okhodjaev.substack.com" target="_blank">Substack</a> · <a href="https://x.com/O_Khodjaev" target="_blank">X.com</a> · <a href="https://www.linkedin.com/in/oybek-khodjaev/" target="_blank">LinkedIn</a>
