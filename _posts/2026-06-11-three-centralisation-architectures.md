---
title: "Analytical Note No. 8 — Three Centralisation Architectures"
date: 2026-06-11
permalink: /governance-briefs/three-centralisation-architectures/
description: "Comparative analysis of three centralisation architectures in Uzbekistan, India (UPI), and Brazil (Pix). How different governance architectures shape the consequences of the same centralising technical mechanism."
tags: [AI governance, centralisation, payment systems, institutional risk, UPI, Pix, Uzbekistan, governance architecture]
layout: single
author_profile: false
classes: wide
toc_icon: "file-text"
excerpt: "The subject of this Note is not payment infrastructure. It is how different governance architectures shape the consequences of the same centralising technical mechanism."
---

*Analytical Note No. 8 · Series: Governance Briefs · June 2026*  
*Operationalises: [Essay 11 — The Institutional Gap](/essays/the-institutional-gap/)*  
*[Beyond Control: Theory of Limits of AI Governance](/essays/)*  
*[English](/governance-briefs/three-centralisation-architectures/) · [Русская версия](/governance-briefs/three-centralisation-architectures-ru/)*

---

#### Contents

- [I. The Governance Architecture Surrounding a Centralised Node](#i-the-governance-architecture-surrounding-a-centralised-node)
- [II. Architecture A — Designed Centralisation: Uzbekistan](#ii-architecture-a--designed-centralisation-uzbekistan)
- [III. Architecture B — Emergent Centralisation: India (UPI)](#iii-architecture-b--emergent-centralisation-india-upi)
- [IV. Architecture C — Governed Centralisation: Brazil (Pix)](#iv-architecture-c--governed-centralisation-brazil-pix)
- [V. The Comparative Typology and the Bridge to AI Governance](#v-the-comparative-typology-and-the-bridge-to-ai-governance)
- [Sources](#sources)

---

## I. The Governance Architecture Surrounding a Centralised Node

The subject of this Note is not payment infrastructure. It is how different governance architectures shape the consequences of the same centralising technical mechanism.

This distinction matters before the analysis begins. Payment systems are observable precedents — documented, regulated, and in several cases already producing measurable institutional outcomes. They offer what frontier AI systems cannot yet provide: a completed record. The technical logic of centralisation — a single node that aggregates data flows, manages identifiers, processes transactions, and monitors behaviour in real time — is the same logic being embedded in AI-enabled decision systems across credit, healthcare, public administration, and regulatory enforcement. The payment cases are not analogies. They are earlier instances of the same structural problem.

**The unit of analysis is not centralisation itself. The unit of analysis is the governance architecture surrounding a centralised node.**

This reframing is not semantic. Centralisation as a technical choice is neutral: it enables standardisation, reduces friction, expands access. The same technical mechanism that improves payment interoperability also concentrates data flows, creates single points of failure, and shifts the distribution of power between the node operator, the regulating institution, and the users of the system. Whether that power shift generates institutional risk — and what kind of risk — is not determined by the technical mechanism. It is determined by what exists around it: who controls access, who audits decisions, who bears accountability for failure, and whether any of those functions operate independently of the entity being overseen.

Three jurisdictions have deployed structurally similar centralisation mechanisms for payment infrastructure within the past decade. Each produced a different governance architecture around that mechanism. Each produced a different institutional risk profile. Mapping these differences is the purpose of the analytical protocol that follows.

### The Diagnostic Protocol

Each architecture is examined through eight questions. The questions are not evaluative — they do not ask whether a choice was correct. They ask what the architecture produces structurally:

1. Where is the technical centre of the system?
2. Who controls access to that centre?
3. Who makes critical operational decisions?
4. Who bears accountability when the system fails?
5. Where is the single point of failure located?
6. What oversight mechanisms exist — and are they structurally independent?
7. What enforcement mechanisms exist — and can they operate without the consent of the overseen entity?
8. What institutional risk profile emerges from this combination?

The eighth question is the outcome of the first seven. It cannot be answered from the founding document alone — it requires reading what the document does not say alongside what it does.

One structural observation applies across all three cases before the analysis begins. Founding documents — resolutions, regulations, technical standards — describe functional architecture. They specify who does what, under what conditions, with what reporting obligations. They do not typically specify what happens when the system operates exactly as designed but in ways the document did not anticipate. The gap between designed function and unanticipated consequence is not a drafting failure. It is a structural feature of any regulatory instrument applied to a dynamic system. The governance architecture surrounding a centralised node is tested not by routine operation but by the moment the system produces an outcome no one planned for.

That is the moment when governance architecture either contains the consequences of failure or reveals that no such architecture exists.

---

## II. Architecture A — Designed Centralisation: Uzbekistan

On March 25, 2026, the Board of the Central Bank of Uzbekistan adopted Resolution No. 5/11, establishing rules for payment services through a unified QR code system. The document was registered by the Ministry of Justice on April 15, 2026, under registration number 3817. The stated objectives are straightforward: standardise QR payment formats, enable interoperability across providers, reduce the shadow economy, expand non-cash payment coverage. These are legitimate goals, and the technical instrument designed to achieve them is coherent.

**The architecture that document creates is the subject of this section.**

### Applying the Diagnostic Protocol

**1. Where is the technical centre of the system?**

The Operator. The document defines the Operator as the legal entity that creates and manages the QR code system, ensures its continuous operation, and forms clearing data for all QR transactions. Article 7 establishes that the Operator maintains a unified registry of all static and dynamic QR identifiers in the country. Article 6 establishes that the Operator monitors the entire transaction flow in real time and distributes settlement information to all participants — also in real time, or no later than the business day on which settlements occur.

The Operator is not one participant among several. The Operator is the infrastructure through which all other participants operate.

**2. Who controls access to that centre?**

The Operator. Technical documentation governing integration standards, operational requirements, and tariff structures is developed by the Operator and published on the Operator's website within three business days of approval. Acquirers and payment organisations participate in the system under contracts concluded with the Operator, on terms that include the Operator's technical requirements. Changes to those requirements take effect fifteen days after publication — with no independent mechanism for participants to contest them.

**3. Who makes critical operational decisions?**

The Operator determines technical standards, sets tariff structures (subject to agreement with participants), assigns MCC codes to merchants through the acquirer layer, manages system continuity protocols, and generates the clearing data that underlies all settlements. Article 11 establishes a reporting obligation: the Operator notifies the Central Bank of changes to technical documentation no later than fifteen working days before those changes take effect. The structure is notification, not prior approval. The Central Bank receives information about changes. The document does not specify a mechanism by which the Central Bank can prevent, modify, or independently audit those changes before they take effect.

**4. Who bears accountability when the system fails?**

The document assigns the Operator responsibility for system continuity (Article 5) and for maintaining operational guidelines. Acquirers bear responsibility for the security and continuity of payments within their own layer. The document does not specify what accountability mechanism applies if the Operator's actions — or inactions — produce systemic consequences across the entire payment infrastructure. The absence of this specification is architecturally significant: in a system where a single entity manages the unified registry and clears all transactions, the failure mode with the highest systemic impact is precisely the one the document leaves unaddressed.

**5. Where is the single point of failure?**

The Operator's registry. Every QR identifier in the country passes through and is registered in the unified registry maintained by the Operator. Every settlement is processed through clearing data formed by the Operator. A disruption at this layer — technical, operational, or regulatory — does not affect one acquirer or one payment corridor. It affects the entire QR payment infrastructure simultaneously.

*Uzbekistan itself has historical experience with highly centralised infrastructures whose disruption affected millions simultaneously. The relevance of that experience is not technological but structural.*

**6. What oversight mechanisms exist — and are they structurally independent?**

The Central Bank of Uzbekistan oversees the Operator. The Central Bank also appointed the Operator and established the framework within which the Operator functions. The oversight relationship is real — reporting obligations exist, notification requirements are specified, the Operator operates under a regulatory mandate. But the oversight loop is closed: the supervising institution and the appointing institution are the same entity.

The document itself does not establish a role for the personal data regulator within the governance architecture of the QR system. Whether behavioural transaction data falls within existing personal data regulation remains a separate legal question. What matters for this Note is that no independent oversight role is specified in the founding architecture itself.

**7. What enforcement mechanisms exist — and can they operate without the consent of the overseen entity?**

The document specifies the Operator's reporting and notification obligations. It does not specify an independent audit mechanism for how the unified registry is used, how the behavioral dataset it generates is accessed, or what decisions are made on the basis of real-time transaction monitoring. The Central Bank can act on information the Operator provides. The document does not establish a mechanism for the Central Bank — or any other body — to independently verify what the Operator does not report.

**8. What institutional risk profile emerges?**

Architecture A — Designed Centralisation — produces a specific and identifiable risk profile. The concentration of technical function, data access, and operational decision-making in a single entity is architecturally intended, not incidental. The system works as designed. The governance architecture surrounding that design contains a structural gap: independent verification — of how the unified registry is used, how the behavioral dataset is accessed, and what decisions are made on the basis of real-time monitoring — is not built into the founding document.

This is not a regulatory failure. The document is internally consistent. The gap exists at a different level: between what the technical architecture makes possible and what the governance architecture is equipped to observe.

That is the defining characteristic of Architecture A: the governance claim — that the system operates in the public interest, under institutional oversight — depends on the good faith of the overseen entity rather than on mechanisms capable of functioning independently of it. Whether that good faith exists is not the question this Note asks. The question this Note asks is structural: what happens when the governance claim needs to be verified, and the architecture does not contain verification?

**Architecture A leaves that question outside the governance architecture established by the founding document.**

---

## III. Architecture B — Emergent Centralisation: India (UPI)

India's Unified Payments Interface was designed as open infrastructure. The National Payments Corporation of India (NPCI), the not-for-profit entity that built and operates UPI, created a technical architecture explicitly intended to be interoperable: any licensed bank or payment service provider could connect, any consumer application could ride the rails. The founding logic was distributional — bring hundreds of millions of unbanked and underbanked citizens into the formal payment system by removing the barriers that proprietary networks impose.

Within a few years, UPI reached hundreds of millions of users. The technical achievement was genuine and substantial.

*And then the architecture produced something its designers had not specified.*

### Applying the Diagnostic Protocol

**1. Where is the technical centre of the system?**

NPCI operates the central switch — the infrastructure layer through which all UPI transactions are routed, authenticated, and settled. NPCI designed the layer above the switch to be open: participant banks connect directly, payment applications compete for users, no single application is privileged at the technical level. The technical centre exists. The architecture was designed to prevent concentration above it.

**2. Who controls access to that centre?**

NPCI governs access through technical certification and licensing. Banks must be NPCI members. Payment service providers must be certified. Access is governed through published technical standards, certification requirements, and participation criteria rather than through bilateral operational arrangements.

**3. Who makes critical operational decisions?**

At the infrastructure layer: NPCI. At the application layer: the payment service providers — the consumer-facing applications through which users actually initiate transactions. This distinction becomes analytically significant in the next step.

**4. Who bears accountability when the system fails?**

NPCI bears accountability for infrastructure-level failures. Member banks bear accountability for failures within their own systems. Payment service providers bear accountability for application-level failures. The accountability architecture is distributed — by design, and coherently so for the technical layer it governs.

The problem this distribution produces becomes visible when the failure mode is not a technical breakdown but a concentration of behavioral data across the application layer. No entity in the founding architecture was assigned accountability for that outcome — because the founding architecture did not anticipate it as an outcome requiring governance.

**5. Where is the single point of failure located?**

The technical single point of failure is the NPCI switch, visible in the founding architecture and subject to standard infrastructure resilience requirements. But by the time UPI reached scale, a different single point of failure had formed above the technical layer and outside the founding architecture. Two payment applications came to account for the substantial majority of UPI transaction volume. The concentration did not occur at the infrastructure level NPCI designed. It occurred at the application level, through market dynamics that no founding document governed.

The founding architecture specified who could connect to the rails. It did not specify what concentration at the application layer would mean for the governance of the behavioral data those applications collected as a product of operating on those rails.

**6. What oversight mechanisms exist — and are they structurally independent?**

The Reserve Bank of India oversees NPCI. NPCI is structured as a not-for-profit with bank ownership — a different accountability structure from Architecture A, where the central operator is supervised by the institution that appointed it. The RBI–NPCI oversight relationship operates at arm's length.

But oversight of NPCI is not oversight of the behavioral data the application layer generates. The payment applications operating on UPI rails collect transaction data — what users buy, when, at what frequency, across what merchant categories — as a function of providing the service. This data is commercially valuable, analytically powerful, and not governed by the same framework that governs transaction processing.

**The most consequential concentration occurred outside the institutional field the founding architecture was designed to govern.**

The oversight gap in Architecture B is structurally different from Architecture A. In Architecture A, the gap exists because the founding document does not assign independent oversight of the designated central operator. In Architecture B, the gap exists because the entities that accumulated the most consequential data were not the entities the founding architecture was designed to govern.

**7. What enforcement mechanisms exist — and can they operate without the consent of the overseen entity?**

The RBI can enforce on NPCI and on licensed banks. Standard regulatory instruments — inspection, license conditions, remedial requirements — apply. These mechanisms function independently of the entities they oversee, at least in principle.

The RBI recognised the market concentration that had formed and proposed a cap on the transaction volume any single payment application could process — a structural intervention designed to limit concentration after it had occurred. The implementation of that intervention was repeatedly deferred. The mechanism existed. Its application encountered the institutional friction that enforcement against established market positions characteristically produces.

**8. What institutional risk profile emerges?**

Architecture B — Emergent Centralisation — produces a risk profile with a structural characteristic that distinguishes it from Architecture A: there is no founding document to revise, no designated operator to hold accountable, no single design decision that produced the concentration. The risk emerged from the interaction between an open technical architecture and market dynamics the founding architecture was not designed to govern.

Identifying the governance gap in Architecture A leads to identifiable governance structures. Identifying the governance gap in Architecture B leads to a market outcome. That is a different kind of institutional problem — and one that the enforcement mechanisms of the founding architecture were not calibrated to address.

**Architecture B leaves the governance of its most significant risk outside the architecture that governs everything else.**

---

## IV. Architecture C — Governed Centralisation: Brazil (Pix)

Brazil's Pix was launched by the Banco Central do Brasil in November 2020 with a structural feature that distinguishes it from both preceding architectures before the first transaction was processed. The Central Bank did not appoint an operator to manage the system. The Central Bank became the operator. Pix is owned, built, and run by BCB directly — an arrangement that resolves one governance problem and creates another.

The resolution: there is no appointed entity whose activities require independent oversight. The regulator and the operator are the same institution.

**The problem: the same institution that governs Brazil's financial system sets the technical standards, controls the infrastructure, enforces participation, and collects the behavioral dataset that Pix produces. The concentration of roles is not incidental. It is the design.**

### Applying the Diagnostic Protocol

**1. Where is the technical centre of the system?**

The Banco Central do Brasil. The Pix infrastructure — the central directory, the clearing and settlement layer, the transaction routing system — is BCB infrastructure, operated under BCB authority, governed by BCB rules. In Architecture C, BCB holds both the operator and oversight roles simultaneously. The structural question is not whether the operator is overseen. It is what institutional mechanism governs BCB in its role as operator — and whether that mechanism is functionally separate from BCB in its role as regulator.

**2. Who controls access to that centre?**

BCB. Participation in Pix is mandatory for financial institutions above a defined asset threshold — a regulatory requirement, not a commercial decision. The rules of participation are set by BCB through normative acts, using the same regulatory authority by which BCB changes any financial regulation. The access architecture is grounded in BCB's general regulatory authority rather than in a bilateral contractual arrangement between an operator and its participants. This changes the legal character of the access relationship. It does not change the concentration of control.

**3. Who makes critical operational decisions?**

BCB makes technical decisions as operator — infrastructure standards, interoperability requirements, data formats, security specifications. BCB makes regulatory decisions as supervisor — participation thresholds, compliance requirements, enforcement actions. BCB makes institutional decisions as both — what the Pix behavioral dataset can be used for, who can access it, and under what conditions.

The dual role does not produce an internal governance problem in the ordinary sense: BCB is a sophisticated institution with established governance procedures. The structural observation is different. When the entity that accumulates the dataset is also the entity that determines the legal framework governing that dataset, the check on how the dataset is used is internal rather than independent.

**4. Who bears accountability when the system fails?**

BCB bears accountability for infrastructure-level failures as operator. BCB bears accountability for regulatory failures as supervisor. What the structure does not resolve is the question of oversight for decisions that fall between the two roles. A decision about how Pix transaction data is aggregated, retained, or made available to other government entities is simultaneously a technical decision (how the system is configured), a regulatory decision (what the rules permit), and a policy decision (what serves the public interest). All three are made by the same institution, within its own governance procedures, without a structurally independent review mechanism for decisions that exercise all three capacities at once.

**5. Where is the single point of failure located?**

The BCB-operated Pix infrastructure. BCB has invested substantially in operational resilience and the system has operated at scale without major outages. The single point of failure exists, as it does in Architectures A and B. What differs is that BCB, as both operator and supervisor, has direct authority to specify and enforce its own resilience standards, rather than reporting those standards to a separate body for review.

**6. What oversight mechanisms exist — and are they structurally independent?**

This is where Architecture C diverges most clearly from Architectures A and B, and where the partially institutionalised nature of its governance becomes analytically precise.

BCB recognised, during the design of Pix, that the behavioral dataset the system would produce required governance that did not flow automatically from the payment system's technical architecture. BCB developed governance arrangements for Pix data within the broader framework established by Brazil's data protection regime. The governance framework was not an afterthought. It was designed and legislated in parallel with the technical deployment.

**The defining characteristic of Architecture C is not the absence of concentration. It is the anticipation of concentration and the partial institutionalisation of a response before concentration becomes a governance crisis.**

BCB is overseen by the Brazilian National Congress and operates under Brazil's constitutional framework for central bank independence. Congressional oversight exists. External legal review exists. Civil society organisations and academic institutions have engaged with Pix data governance questions in ways that generate public record. These mechanisms create additional institutional venues through which governance questions can be raised, contested, and reviewed. Their presence does not resolve the question. It changes the question's character.

**7. What enforcement mechanisms exist — and can they operate without the consent of the overseen entity?**

BCB can enforce against participant institutions without those institutions' consent — standard regulatory authority. What remains structurally unresolved is enforcement against BCB itself in its capacity as operator. Congressional oversight and judicial review provide external mechanisms in principle. Whether those mechanisms are calibrated for technical and operational decisions made at the infrastructure layer — rather than for monetary policy or financial stability decisions — is a different question. The accountability instruments were designed for BCB as regulator. Their application to BCB as operator of the largest payment network in Latin America has been developed iteratively, not designed in advance.

**8. What institutional risk profile emerges?**

Architecture C — Governed Centralisation — produces a risk profile defined by a specific structural condition: the concentration is anticipated, named, and partially addressed. Not resolved. Partially institutionalised.

What Architecture C demonstrates is that designed centralisation at the operator level need not produce the same governance gap as Architecture A, provided the institution anticipates the gap and builds parallel governance in time. What Architecture C also demonstrates is that anticipation and partial institutionalisation are not the same as resolution. BCB governs the framework within which BCB operates. That circularity is structural, not incidental — and it is the characteristic risk of Architecture C, distinct from the characteristic risks of A and B.

---

## V. The Comparative Typology and the Bridge to AI Governance

The three architectures examined in this Note were not selected because they represent payment systems. They were selected because they represent something else: a completed institutional record of how different governance architectures respond to the same centralising technical mechanism — across its full lifecycle, from design through deployment through the emergence of consequences.

Payment systems offer what AI governance cannot yet provide. The institutional outcomes are observable. The timelines are documented. The gaps between founding architecture and operational reality have already produced measurable results. That record is not an analogy for what AI governance faces. It is an earlier instance of the same structural problem, running further along the same institutional timeline.

The unit of analysis was never payment infrastructure. The unit of analysis was always the governance architecture surrounding a centralised node. The payment cases gave that analysis a completed record to work with.

### The Comparative Typology

The three architectures differ not in their technical mechanisms — all three centralise transaction routing, identifier management, and behavioral data collection — but in their institutional relationship to concentration. That relationship can be characterised along a single axis: when does the institution recognise that concentration is occurring, and what does it do at the moment of recognition?

**Architecture A** recognises concentration as a design feature. The system is built around a single designated operator. The governance architecture does not build independent verification into the founding document because concentration is not treated as a problem requiring verification — it is treated as the solution to a coordination problem. The governance claim rests on the designated operator's compliance with the framework the appointing institution established. What the architecture does not answer is what happens when that claim needs to be verified externally.

**Architecture B** does not recognise concentration as a design feature because the founding architecture is designed to prevent it. When concentration emerges anyway — through market dynamics that operate above the technical layer the founding architecture governs — the institution discovers the problem after it has already occurred. The accountability gap is structural: the entities that accumulated the most consequential data were not the entities the founding architecture was designed to govern. Correction requires intervening in a market outcome rather than revising a governance design. Those are different institutional problems, and the enforcement mechanisms of the founding architecture were calibrated for the second, not the first.

**Architecture C** recognises concentration as an anticipated consequence of the technical design and attempts to build governance around it before concentration becomes a governance crisis. The attempt is partial — the governance framework requires iterative development, legal codification, and enforcement mechanisms that were not all present at launch. What distinguishes Architecture C is not that it resolved the governance problem. It is that it named the problem as structural before deployment, rather than discovering it as a gap after deployment.

*These are not three points on a quality spectrum. They are three different institutional positions relative to the same structural dynamic. Each position generates a characteristic governance gap. Each gap becomes visible at a different moment in the system's lifecycle.*

### The Bridge

The same three architectures can increasingly be observed in AI governance. The payment cases provide a completed record. The AI cases are earlier in the same institutional timeline. The question is not which architecture is better. The question is which architecture each jurisdiction is building — and what the payment record suggests about where each position leads.

**Designed Centralisation** is visible wherever a single national AI operator is created by sovereign authority without a structurally independent verification mechanism. The architectural logic is identical to Architecture A: a designated entity manages the central function, the appointing institution provides oversight, and the governance claim rests on the good faith of the entity being overseen rather than on mechanisms capable of operating independently of it. The founding documents of these systems specify functional architecture. They do not specify what happens when the governance claim needs to be externally verified.

**Emergent Centralisation** is the condition that already characterises the global AI development landscape. No governance framework designed the concentration of frontier AI capabilities in two or three laboratories. That concentration emerged from the interaction between capital availability, compute access, talent concentration, and deployment speed — forces that operated above the technical layer any existing regulatory framework was designed to govern. By the time major regulatory efforts were being written, the landscape they were designed to govern had already concentrated in ways those frameworks did not anticipate. The accountability question this produces is structurally identical to the UPI aggregator problem: who bears accountability for a concentration that no founding document created, and how does correction reach an outcome that post-dates the founding design?

**Governed Centralisation** is what the international AI safety infrastructure is attempting, with varying degrees of institutional authority and speed. The creation of AI safety institutes, the commissioning of multilateral safety assessments, the development of voluntary commitment frameworks alongside binding regulatory instruments — these represent partial institutionalisation of a response to a concentration that has been anticipated and named. The structural risk Architecture C reveals is also present here: the institutions attempting to govern AI development are often created by governments that are simultaneously pursuing competitive AI development as a strategic priority. The regulator and the operator share institutional space. The governance framework is being developed by the same sovereign apparatus that has a material interest in the outcome it is being asked to govern.

What the payment record adds is a specific institutional observation. Architecture C encounters structural limits because partial institutionalisation and resolved concentration are not the same thing. The existence of a governance response does not eliminate the governance gap. It changes its character. The gap no longer exists between concentration and recognition, as in Architecture B, or between authority and verification, as in Architecture A. It exists between recognising a structural problem and fully institutionalising a response capable of operating independently of the institution that identified it.

### What the Typology Reveals

The central finding of this comparative analysis is not that some architectures are safer than others. It is that the moment at which an institution recognises concentration — and what institutional response it builds at that moment — determines the character of the governance gap that follows. Architecture A produces a gap between governance claim and independent verification. Architecture B produces a gap between governance design and market reality. Architecture C produces a gap between recognised problem and fully institutionalised response.

All three gaps are structural. None disappears through better regulation, larger budgets, or stronger political will within the existing framework. Each gap is a function of the architecture that produced it.

The governance question this Note leaves open — deliberately, in the tradition of the series to which it belongs — is the one the typology cannot answer from within itself. If the payment record shows that each architecture produces a characteristic gap, and if the same three architectures can increasingly be observed in AI governance at earlier points in their institutional lifecycle, then the question is not which architecture to choose. The question is whether any institution has recognised which architecture it is building — before the moment when the gap becomes visible.

Architecture A does not answer that question. It assumes it is not being asked.

Architecture B cannot answer it. The question arrives after the architecture was set.

*Architecture C is the only architecture in this comparison that attempts to ask the question before the governance gap becomes operationally visible. Whether the answer is sufficient is what the institutional timeline will reveal.*

---

## Sources

**Primary Sources**

[1] Central Bank of Uzbekistan, Board Resolution No. 5/11 (March 25, 2026). *Rules for Payment Services via Unified QR Code.* Registered by the Ministry of Justice of the Republic of Uzbekistan, April 15, 2026, No. 3817. [lex.uz](https://lex.uz/docs/-8139307)

[2] National Payments Corporation of India (NPCI). *UPI Ecosystem: Product Overview and Governance Framework.* [npci.org.in](https://www.npci.org.in)

[3] Banco Central do Brasil. *Pix: Institutional Framework and Operating Rules* (2020–2023). [bcb.gov.br](https://www.bcb.gov.br/estabilidadefinanceira/pix)

[4] Brazil. *Lei Geral de Proteção de Dados* (Law No. 13.709, August 14, 2018). [planalto.gov.br](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm)

**Conceptual Reference**

[5] Khodjaev, O. *The Institutional Gap: Why No Existing Institution Can Govern AI.* Essay 11 of Beyond Control: Theory of Limits of AI Governance. [okhodjaev.com/essays/the-institutional-gap/](https://okhodjaev.com/essays/the-institutional-gap/) (April 27, 2026)

---

*Oybek Khodjaev researches AI governance and advises on institutional readiness in the age of AI, with a particular focus on systemic risk. Drawing on more than 35 years of experience across banking, finance, public administration, and business in Uzbekistan and the CIS, he develops practical approaches to assessing the institutional limits of AI governance. He is the author of the "Beyond Control" essay series, which advances a structural theory of the limits of AI governance.*
