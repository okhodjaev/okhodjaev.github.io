---
title: "Why Governance Does Not Scale"
date: 2026-06-16
permalink: /governance-briefs/why-governance-does-not-scale/
description: "The structural limits of transposing developed-economy oversight to emerging institutional environments. When deployment scales, the gap between the governance claim and the verification architecture does not remain constant."
tags: [AI governance, Uzbekistan, financial regulation, institutional limits, scaling, PP-204]
layout: single
author_profile: false
classes: wide
toc_icon: "file-text"
excerpt: "Governance frameworks travel faster than the institutions on which they depend. When deployment scales, this gap does not remain constant. It grows."
---

**Why Governance Does Not Scale**

*Analytical Note No. 9 · Series: Governance Briefs · June 2026*
*Operationalises: [Essay 9 — The Sovereignty Question](https://okhodjaev.com/essays/the-sovereignty-question/) — [Beyond Control: Theory of Limits of AI Governance](https://okhodjaev.com/essays/)*
*[English](https://okhodjaev.com/governance-briefs/why-governance-does-not-scale/) · [Русская версия](https://okhodjaev.com/governance-briefs/why-governance-does-not-scale-ru/)*

---

**Contents**

- [I. The Deployment Architecture](#i-the-deployment-architecture)
- [II. The Governance Claim](#ii-the-governance-claim)
- [III. What the International Framework Assumes](#iii-what-the-international-framework-assumes)
- [IV. The Transfer Gap](#iv-the-transfer-gap)
- [V. Why Scale Changes the Structure](#v-why-scale-changes-the-structure)
- [Implications](#implications)
- [Signals to Watch](#signals-to-watch)
- [Sources & Notes](#sources--notes)

---

The rules travel faster than the institutions on which they depend.

**I. The Deployment Architecture**

On 26 May 2026, Presidential Decree PP-204 established a framework for expanding financial services to small and medium-sized enterprises through digital infrastructure and AI-based decision systems. The targets are concrete. By 2030: the SMB credit portfolio grows threefold, reaching twenty percent of GDP; sixty percent of microcredits are issued through AI-based processes, with approval in one hour on average; the unsecured microcredit ceiling rises from 100 to 200 million sums. A digital financial platform launches by 1 July 2026. An AI-based alternative scoring model integrates into that platform by 1 December 2026. Within two months of the decree's adoption, commercial banks launch the "AI adviser" program, providing AI-assisted guidance on business development tailored to the economic specialisation of local communities.

This is a significant and internally coherent policy architecture. The goals are legitimate: expanding access to finance for businesses without credit history, reducing administrative friction in lending decisions, and building the data infrastructure that more sophisticated financial services require. The technical instruments specified are consistent with these goals.

The structural question this Note examines is different from any assessment of that policy direction. It is architectural: what institutional mechanisms does a governance framework of this kind presuppose, and which of those mechanisms are specified in the founding document?

**II. The Governance Claim**

Every AI system deployed in high-stakes decisions carries an implicit governance claim: the system operates within a framework capable of detecting significant errors and producing correction before harm becomes irreversible. This claim is not specific to Uzbekistan. It is embedded in every deployment of AI in credit decisions, regardless of jurisdiction. The question is not whether the claim is made. It always is. The question is what institutional architecture makes that claim verifiable.

PP-204 specifies several oversight mechanisms. The Platform operator is required to conduct cybersecurity audits every two years, conducted by the State Centre for Cybersecurity, and digitalization compliance audits on the same cycle, conducted by the Ministry of Digital Technologies (Section IV.7.(a)). The operator submits quarterly analysis of credit proposals processed through the Platform to the Central Bank for monitoring (Section IV.7.(b)). The Central Bank is required, by August 2026, to approve data exchange protocols for the alternative scoring process jointly with data-providing organisations (Section IV.6.(a)).

These are real mechanisms. They address specific and significant risks: cybersecurity vulnerabilities, compliance with digitalization standards, and aggregate monitoring of credit proposal volumes. Each mechanism serves its stated function.

What the founding document does not itself specify is a different category of mechanism. Whether the function of independently assessing the AI scoring model's outputs is expected to emerge through existing supervisory institutions or through future regulatory development, the founding architecture does not address that question. It does not define which institution holds access to the Platform's behavioral dataset for purposes beyond the Central Bank's monitoring function, nor the procedure governing the situation in which the scoring model's outputs are found to be systematically wrong at scale: at what point, through which institution, and under what procedure can the model be halted or revised without depending on the cooperation of the operator.

This is not a gap created by oversight. It is a structural feature of the architecture: the founding document specifies what it specifies, and leaves the remainder to what the surrounding institutional environment can supply. The structural question is what that environment contains.

**III. What the International Framework Assumes**

Governance frameworks for AI in high-stakes financial decisions share a structural feature that is rarely stated explicitly in their founding documents, because it was not necessary to state it in the jurisdictions where those frameworks were developed.

The OECD AI Principles (2019, updated 2024), the Basel Committee's guidance on the use of machine learning in credit underwriting, and the EU AI Act's classification of AI credit scoring as a high-risk application all presuppose institutional capacities that developed incrementally in the jurisdictions where these frameworks originated. The EU AI Act requires, for high-risk AI systems: independent conformity assessment before deployment; human oversight mechanisms capable of genuinely overriding automated decisions; and the right of explanation for individuals subject to AI-assisted decisions. These requirements assume the existence of accredited conformity assessment bodies external to the deploying institution; judicial or administrative infrastructure through which the right of explanation can be exercised in practice; and supervisory technical capacity adequate to assess whether human oversight is real rather than formal.

The OECD principles assume that the state party adopting them has both the regulatory authority and the technical capacity to verify compliance independently, without depending on documentation provided by the entity being assessed. The Basel Committee guidance assumes that the supervisory body can require and independently assess model documentation, backtesting results, and performance data, rather than receiving what the developer chooses to supply.

These are not arbitrary procedural requirements. They are institutional capabilities, built incrementally over decades in the environments where the frameworks originated, and embedded so deeply in those environments' institutional fabric that they became invisible preconditions. The frameworks describe the rules. They do not describe the institutional substrate that makes the rules operational. That substrate was taken for granted. When the framework travels to a different institutional environment, the substrate does not travel with it.

**IV. The Transfer Gap**

When a governance framework moves from one institutional environment to another, what moves is the rule architecture: the requirements, the categories, the oversight obligations specified in the founding document. What does not move is the institutional infrastructure that makes the rule architecture functional in the environment where it was developed.

PP-204 adopts the financial inclusion logic developed over decades in international development finance: access to finance through digital data aggregation, alternative scoring based on behavioral and government data, rapid automated credit decisions. That logic was designed in, and in its countries of origin operates alongside, specific institutional mechanisms. These include independent credit bureau capacity providing third-party data verification separate from the scoring platform operator. They include legal frameworks that make algorithmic credit decisions challengeable in ordinary administrative or judicial proceedings, without requiring specialised AI expertise from the claimant. They include supervisory bodies with technical staff capable of evaluating AI model performance and reviewing backtesting results without depending on the developer's own reporting. And they include practices of structured public disclosure that create reputational and legal constraints on institutions whose systems perform poorly against defined benchmarks.

These mechanisms did not develop in isolation. They developed incrementally, in environments where earlier waves of financial digitalisation had created demand for them and institutional capacity to sustain them. They are, in the analytical framework of the Beyond Control essay series, the material prerequisites of the governance claim: not merely procedural requirements, but the institutional conditions under which the claim is verifiable rather than declarative.

Uzbekistan's institutional environment is not without compensating mechanisms. The Central Bank's supervisory capacity is real. The quarterly monitoring requirement creates a structured information flow between the Platform operator and the regulator. The biennial cybersecurity audit introduces periodic independent review of technical security. The credit bureau system provides some degree of data verification separate from the Platform operator. The structural observation is not that nothing exists. It is that the mechanisms specified in PP-204 address the technical and operational dimensions of the Platform's governance, while the institutional dimension of the governance claim remains external to the founding architecture: which institution independently assesses whether the AI scoring model produces reliable outcomes, by what criteria, against what standard, and with access to what data.

This gap is the transfer gap. It is not created by any failure of the founding document to do what founding documents do. It is created by the relationship between what the document specifies and what the surrounding environment can supply. In the jurisdictions where the financial inclusion logic originated, the surrounding environment supplied what the document did not need to specify. The transfer gap is the structural distance between that environment and the one in which the framework now operates.

**V. Why Scale Changes the Structure**

This gap has a property that is the central subject of this Note. It is not static.

In an institutional environment where the prerequisites of an imported governance framework are fully developed, scaling deployment does not widen the gap between governance claim and verification capacity. Oversight capacity scales alongside operational capacity because it is embedded in the institutional infrastructure. New credit decisions are made, and the same independent audit mechanisms, the same judicial redress pathways, and the same supervisory technical capacity that operated at lower deployment scale continue to operate at higher scale, without requiring redesign.

In an environment where institutional prerequisites are partially present and the transfer gap is real, scaling deployment does not leave the gap constant. When the credit portfolio triples and sixty percent of microcredits move to AI-based processes, the volume of decisions subject to the governance claim grows by the same factor. The verification capacity, sized for the current deployment level and dependent on mechanisms not fully specified in the founding architecture, does not grow at the same rate.

The gap widens. And it does not widen at a fixed rate.

Notes 1 through 8 of this series identified several structural gaps in Uzbekistan's AI governance architecture: the distance between regulatory output and enforcement architecture (Note 2); the absence of defined incident protocols that makes the deploying institution the de facto arbiter of what constitutes a failure (Note 5); the non-linear cost of correction once AI scoring is institutionally embedded (Note 6); the governance architecture fixed by procurement decisions before oversight frameworks are applied (Note 7); and the verification gap that characterises centralised architectures without independent audit mechanisms (Note 8). Each gap, in isolation, is bounded. At current deployment scale, each is manageable. At threefold deployment scale, their interaction is not additive. The absence of incident protocols, the non-linear cost of correction, governance fixed at procurement, and the verification gap in a centralised architecture combine to create a condition where correction becomes structurally harder with each additional credit decision processed through the AI model. This is the multiplicative property: the gaps do not merely persist at scale. They compound.

This is what "governance does not scale" means as a structural observation. It does not describe the quality of the governance architecture established by PP-204, which is internally consistent for the functions it addresses. It describes a relationship: between the deployment architecture, which scales rapidly and is well-specified, and the verification architecture, which is partially specified and does not scale automatically alongside it.

The international record confirms that this relationship is not specific to any one institutional environment. It is a structural property of how governance frameworks developed in one environment perform when transposed to another. India's experience with UPI demonstrated the dynamic in payment infrastructure: the governance framework addressed the technical layer, while behavioral data concentration at the application layer emerged as a governance fact before the oversight framework had capacity to address it. Brazil's Pix required the Banco Central do Brasil to develop a separate data governance framework in parallel with deployment: an explicit acknowledgment that technical capability and institutional resilience are different projects proceeding at different speeds. In both cases, the technical achievement was real and consequential. In both cases, the governance framework caught up with an architecture it had not shaped. The difference, at the scale of PP-204's ambitions and timeline, is that the interval between deployment and governance catch-up is defined by the deployment schedule rather than by the development of the verification architecture.

**Implications**

The structural observation in this Note carries a specific implication for the design of governance architecture alongside deployment architecture, rather than after it.

The international frameworks for AI in financial services operate differently when transposed to emerging institutional environments not because they are poorly designed, but because the institutional prerequisites on which they depend are differently distributed. The transfer gap is not a temporary lag that better-written rules will eventually close. It is a structural feature of governance transposition: rules travel faster than the institutional capacity to make them operational.

This does not mean that institutional capacity cannot develop. It means that its development must be treated as a distinct project, proceeding in parallel with deployment rather than following from it. The deployment timeline in PP-204 is specified with precision: July 2026 for the Platform, December 2026 for the alternative scoring model, within two months for the AI adviser program. The timeline for the development of independent model assessment capacity, for the legal architecture governing algorithmic credit decisions, and for the supervisory technical infrastructure that can verify the governance claim is not specified in the same document.

Where verification architecture is absent from the founding document, its absence is not a gap to be addressed at a convenient future date. It is a structural feature of the deployment from the moment the first credit decision is processed through the AI model. Each decision processed in the interval before the verification architecture reaches operational maturity is a decision made under conditions where the governance claim is not independently verifiable. At current deployment scale, that interval is bounded. At threefold scale, the same interval carries threefold consequences.

The following Note in this series examines what happens when AI alignment frameworks arrive in institutions that did not design the systems they are asked to align. The structural condition this Note diagnoses is the reason that question cannot be resolved by importing a more complete governance framework.

**Signals to Watch**

The first quarterly monitoring report submitted by the Platform operator to the Central Bank under Section IV.7.(b) of PP-204. What the report covers and what it leaves unaddressed will define the functional scope of the oversight mechanism in its initial operating period, and whether that scope includes any assessment of the AI scoring model's accuracy and consistency against defined performance criteria, or remains limited to aggregate credit proposal volumes.

The legislative proposal that the Central Bank is required to present to the Cabinet of Ministers by August 2026 (PP-204, Section IV.6.(b)), concerning the provision of bank secrecy data to fintech market participants. The data access architecture it establishes will determine whether an independent verification path for the Platform's behavioral dataset is structurally possible under the legal framework that governs the scoring system.

The first documented case in which an SMB borrower receives an adverse credit decision from the alternative scoring model. This event, when it occurs, will be the first empirical test of whether the governance claim embedded in PP-204 is verifiable in a specific, concrete case, and through which institutional mechanism the decision can be reviewed on its merits.

Any revision to the Platform operator's biennial audit requirements (Section IV.7.(a)) to include assessment of algorithmic performance, model accuracy, and decision consistency, extending the independent review cycle from technical security to the governance of the AI model's outputs.

**Sources & Notes**

[1] Republic of Uzbekistan. Presidential Decree No. PP-204 "On further measures to increase the popularisation of financial services, expand support for small and medium-sized businesses." 26 May 2026. [lex.uz](https://lex.uz/ru/docs/)

[2] Republic of Uzbekistan. Presidential Decree No. UP-259 "On further measures to ensure a competitive environment and transparency in the public procurement system." 26 December 2025. [lex.uz](https://lex.uz/ru/docs/7952240)

[3] Republic of Uzbekistan. Law No. ZRU-1115 "On Artificial Intelligence." 2021 (amended). Article 7¹. [lex.uz](https://lex.uz/ru/docs/6600604)

[4] OECD. *Recommendation of the Council on Artificial Intelligence.* 2019, updated 2024. [oecd.ai](https://oecd.ai/en/ai-principles)

[5] Basel Committee on Banking Supervision. *Principles for the Sound Management of Operational Risk* and *Supervisory Guidance on Model Risk Management.* Bank for International Settlements. [bis.org](https://www.bis.org/bcbs/publ/d543.htm)

[6] European Parliament and of the Council. *Regulation (EU) 2024/1689 on Artificial Intelligence (AI Act).* Annex III, High-risk AI systems: credit scoring and creditworthiness assessment. [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689)

[7] Khodjaev, O. *Beyond Control: Theory of Limits of AI Governance.* Essay 9 "The Sovereignty Question." April 2026. [okhodjaev.com](https://okhodjaev.com/essays/the-sovereignty-question/)

[8] Khodjaev, O. *Beyond Control: Theory of Limits of AI Governance.* Essay 11 "The Institutional Gap." April 2026. [okhodjaev.com](https://okhodjaev.com/essays/the-institutional-gap/)

[9] Khodjaev, O. *Governance Briefs.* Analytical Note No. 5 "The Incident Gap." June 2026. [okhodjaev.com](https://okhodjaev.com/governance-briefs/the-incident-gap/)

[10] Khodjaev, O. *Governance Briefs.* Analytical Note No. 6 "The Rollback Problem." June 2026. [okhodjaev.com](https://okhodjaev.com/governance-briefs/the-rollback-problem/)

[11] Khodjaev, O. *Governance Briefs.* Analytical Note No. 7 "The Procurement Trap." June 2026. [okhodjaev.com](https://okhodjaev.com/governance-briefs/the-procurement-trap/)

[12] Khodjaev, O. *Governance Briefs.* Analytical Note No. 8 "Three Centralisation Architectures." June 2026. [okhodjaev.com](https://okhodjaev.com/governance-briefs/three-centralisation-architectures/)

[13] National Payments Corporation of India. *UPI Ecosystem Overview and Governance Framework.* [npci.org.in](https://www.npci.org.in/what-we-do/upi/product-overview)

[14] Banco Central do Brasil. *Pix: Design and Governance Framework.* 2020–2023. [bcb.gov.br](https://www.bcb.gov.br/en/financialstability/pix_en)

---

*Oybek Khodjaev: systems transformation analyst, Founder & CEO of INVEXI LLC.
Former Deputy Governor (Deputy Khokim) of Samarkand Region. Previously, Treasury Director
and Deputy Chairman of the Management Board at JSC UzAgroIndustrialBank.
More than thirty years' experience in economics, banking, finance, and business
across Uzbekistan and the CIS.*

*The author advises public institutions and financial organisations on AI governance, verification frameworks, and institutional readiness for high-stakes AI deployment. Inquiries: [ok@okhodjaev.com](mailto:ok@okhodjaev.com)*

**Published** June 16, 2026

<a href="https://okhodjaev.substack.com" target="_blank">Substack</a> · <a href="https://x.com/O_Khodjaev" target="_blank">X.com</a> · <a href="https://www.linkedin.com/in/oybek-khodjaev/" target="_blank">LinkedIn</a>
