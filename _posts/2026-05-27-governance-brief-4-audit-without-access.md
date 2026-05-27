---
title: "Audit Without Access"
date: 2026-05-27
permalink: /governance-briefs/audit-without-access/
description: "Behavioural data and the structural limits of AI oversight in Uzbekistan's financial sector. Analytical Note No. 4 — Governance Briefs series."
tags: [AI governance, Uzbekistan, data access, QR payments, CBU, financial sector]
layout: single
author_profile: false
classes: wide
excerpt: "The distinction between reviewing compliance documentation and examining operational data is the difference between reading the instructions and inspecting the machine in operation."
---
***The distinction between reviewing compliance documentation and examining operational data is the difference between reading the instructions and inspecting the machine in operation.***

*Analytical Note No. 4 · Series: [Governance Briefs](/governance-briefs/) · May 2026* · 
*Operationalises: Essay 8 "The Agency Transfer" — [Beyond Control: Theory of Limits of AI Governance](/essays/)*
*[Русская версия](/governance-briefs/audit-without-access-ru/)*

---

The CBU Board's decision of March 25, 2026, registered by the Ministry of Justice on April 15, 2026 (Registration No. 3817), establishes the operational framework for Uzbekistan's unified QR payment system. The technical design is coherent. It standardises QR code formats across all banks and payment services, creates a mechanism for real-time settlement data provision, and brings the entire retail payment infrastructure under a single operational architecture. By July 1, 2026, QR payment acceptance will be mandatory for all commercial and service organisations operating in the country. The transaction volumes this system will process represent, by any comparable metric, the first centralised real-time behavioural financial dataset of this scale — meaning a continuously updated record of payment patterns across every commercial transaction in the country — in Uzbekistan's institutional history. That is a substantial achievement. It also raises a structural question the Rules document does not address: who has the right to examine this data, and under what institutional conditions.

## What audit requires in practice

Analytical Note No. 3 established that no body in the current public architecture simultaneously holds an independent mandate, defined access rights, and operational authority to verify whether AI systems in Uzbekistan behave as their documentation declares. This note goes one level deeper: even if such a body were created, it would encounter a prior structural problem.

Analytical Note No. 1 in this series established this gap at the level of ZRU-1115's operative provision itself: the prohibition on exclusive AI reliance has no mechanism for independent verification in the current framework.

Enforcing Article 7¹ of ZRU-1115 — the prohibition on exclusive reliance on AI-generated conclusions in legally significant decisions — requires a specific evidentiary capacity that document review cannot supply. What AI systems declare in their documentation and what they produce in actual operation can diverge. This divergence is not an exceptional event. Independent technical assessments of AI deployments in banking, insurance, and credit scoring internationally have recorded it as a structural feature of complex systems operating at scale — through phenomena documented as model drift, automation bias, and systematic deviations identified in algorithmic credit scoring reviews. Establishing that an institution used an AI system's output as an exclusive basis for a decision, rather than as one input among several, requires access to the decision log: the operational record of what the system produced, when, and in response to what inputs.

The distinction between reviewing compliance documentation and examining operational data is the difference between reading the instructions and inspecting the machine in operation.

## The architecture Resolution 3817 creates

Articles 6 through 8 of the Rules establish the data architecture of the unified QR system with specificity. The Operator processes all participant data and performs primary settlements, providing settlement and commission information to system participants in real time or by the same operational day. The Operator monitors transaction flows continuously and alerts participants automatically to discrepancies and risk signals. The Operator maintains the unified registry of all static and dynamic QR code identifiers across the entire system.

CBU Regulation No. 3266 (June 2020), which governs AML and counter-terrorism financing controls for payment system operators, requires acquirer agents to conduct KYC on merchants and transmit identification data to the system automatically. By the time the unified QR system reaches mandatory scale, the centralised registry will contain not only transaction flows but identity and classification data on every participating commercial entity in the country.

Article 35 of the Rules assigns monitoring and oversight of compliance to the Central Bank of Uzbekistan. No provision creates access rights for any body outside this structure. Data flows from transactions to the Operator, from the Operator to system participants and to the CBU. The architecture was designed for operational settlement, not for institutional verification from outside the settlement chain. An independent oversight body — operating on the mandate described in Analytical Note No. 3 but not yet established — would have no defined access path under the current framework.

This is a structural condition with a specific governance consequence. The entity best positioned to assess whether AI systems operating on this data are making decisions consistent with ZRU-1115's requirements has, under the current framework, neither independent mandate nor defined data access. The gap is not the result of oversight. It is the predictable outcome of infrastructure designed for operational efficiency rather than independent verification.

## Why the AI governance context changes the stakes

Essay 8 of this series described what happens when consequential decision-making migrates to automated systems and the human institutional capacity to operate without them atrophies. A parallel dynamic operates at the level of data. When AI systems in lending, fraud detection, or merchant risk assessment are built on a centralised transaction registry, the behavioural evidence those systems generate and require for verification concentrates in the same infrastructure. The question of who can examine AI system behaviour in the financial sector is, in practice, inseparable from the question of who can examine the dataset on which those systems operate.

The domestic precedent is instructive. The centralisation of correspondent account infrastructure in 2003 — when, as the author directly observed during his time at UzAgroIndustrialBank, the specialists who carried the logic of the payment system in their heads retired or were reassigned, and no one preserved their knowledge — removed the capacity for manual reversal precisely when it was needed. The QR registry creates an analogous dependency at a faster rate and on a larger scale.

The Uzdunrobita (MTS-Uzbekistan brand) case of July 17, 2012, documents this dynamic in Uzbekistan's own institutional record. Order No. 19-L of the Uzbek Agency of Communications and Informatisation suspended the mobile operator's licence effective from 18:00 that evening. By the following morning, 9.5 million subscribers — including users of account transfer and top-up services that Uzdunrobita provided — had lost access without advance notice. The legal grounds were formally contested: the company denied having received the prescriptions it was accused of violating. Whether the action was procedurally justified or not, its structure illustrates the core problem. A single regulatory decision, applied to a single licensed operator, disconnected an entire user population simultaneously. When infrastructure is concentrated and oversight flows through a single designated body, there is no distributed verification mechanism to assess the system's operational condition independently — before a binary intervention becomes the only available instrument.

The unified QR system creates a structurally analogous concentration risk — at a faster rate of scaling and across a more economically consequential domain than mobile communications.

The architectural issue is not unique to Uzbekistan. Comparable payment infrastructures elsewhere encountered the same governance question once transaction data became concentrated at scale.

India's Unified Payments Interface created comparable transaction data concentration among a small number of platform aggregators. The governance consequences — a monopoly over behavioural financial data with no third-party access framework — became visible only after the system scaled, when conditions for data access could no longer be specified as infrastructure design decisions rather than contested regulatory ones. Brazil's Pix reached 70 percent market coverage within two years, but established a separate data governance framework before the system reached full scale — a design choice rather than a subsequent regulatory correction. The European PSD2 architecture required authorised third-party access to payment data as a structural condition of the framework from the outset.

Technical success in each case preceded the governance questions. When those questions became unavoidable, the cost of addressing them had risen, and the window for specifying access conditions without disrupting operational systems had narrowed.

## What this means for institutions

For the Central Bank, the analytical question concerns sequencing. The capacity to specify independent data access requirements exists now, while the system is scaling but not yet fully embedded in institutional practice. After July 2026, when the unified QR infrastructure becomes a settled operational fact across all commercial organisations in the country, specifying access conditions will be possible in principle but structurally more difficult. The data will be institutionally significant, the Operator will have established interests in the existing architecture, and any third-party access requirement will be experienced as an intervention into a running system rather than as a design parameter. Beyond regulatory compliance, there is a wider institutional question: who ultimately holds interpretive authority over the behavioural record of an entire national economy?

For organisations deploying AI systems in the financial sector, the current gap has a specific practical implication. Applications built on QR transaction data will, over time, make decisions whose verification depends on access to that data. An institution that cannot demonstrate from operational records, rather than from documentation, how its AI systems reached specific conclusions faces a regulatory exposure that grows as ZRU-1115's enforcement capacity develops and as the behavioural record of those systems lengthens.

## Toward Analytical Note No. 5

Analytical Note No. 5 — "The Incident Gap" — examines the structural layer that follows. Even where an independent verification body acquires both mandate and data access, meaningful oversight requires knowing what to look for: the incident signatures that distinguish abnormal system behaviour from operational variation. No incident reporting protocol for AI systems currently exists in Uzbekistan's regulatory framework. That absence is itself a governance failure, one that makes the data access question harder to operationalise even after it is resolved.

The sequencing problem this note describes — specifying independent data access requirements before infrastructure scales and locks — is exactly what a pre-implementation assessment addresses. Examining data governance architecture, access rights, and exit provisions before a system becomes an operational fact is structurally different from examining them after. [ok@okhodjaev.com](mailto:ok@okhodjaev.com)

---

## Sources

[1] CBU Board Resolution No. 5/11, March 25, 2026; registered by the Ministry of Justice of the Republic of Uzbekistan on April 15, 2026, Registration No. 3817. *Rules for the Provision of Payment Services via Unified QR Code in Payments.* [lex.uz](https://lex.uz)

[2] Presidential Decree No. PF-246, December 10, 2025. *On additional measures to promote cashless settlements and reduce the shadow economy.* Article I(3). [lex.uz](https://lex.uz)

[3] Presidential Decree No. PQ-359, November 27, 2025. *On measures for the further development of the financial technology sector in Uzbekistan.* [lex.uz](https://lex.uz)

[4] Law No. ZRU-1115, January 21, 2026. *On amendments and additions to certain legislative acts in connection with the introduction of artificial intelligence technologies.* Article 7¹. [lex.uz](https://lex.uz)

[5] CBU Board Resolution, Registration No. 3266, June 30, 2020. *Internal control rules on AML/CFT for payment system operators, e-money system operators, and payment organisations.* [lex.uz](https://lex.uz)

[6] CBU Board Resolution, Registration No. 3420, February 8, 2023. *Instructions on procedures for opening, maintaining, and closing bank accounts.* [lex.uz](https://lex.uz)

[7] Law No. URQ-578, November 1, 2019. *On Payments and Payment Systems of the Republic of Uzbekistan.* [lex.uz](https://lex.uz)

[8] Khodjaev, Oybek. Essay 8: "The Agency Transfer: What Happens When Machines Make Decisions Humans Used to Make." *Beyond Control: Theory of Limits of AI Governance.* April 2026. [okhodjaev.com/essays/the-agency-transfer/](https://okhodjaev.com/essays/the-agency-transfer/)

[9] Uzbek Agency of Communications and Informatisation. Order No. 19-L, July 17, 2012. Suspension of licence of LLC Uzdunrobita (MTS-Uzbekistan brand). Affected services included account-to-account transfers and account top-ups; 9.5 million subscribers lost access without advance notice. [See also: Essay 7, *Beyond Control.*]

[10] National Payments Corporation of India. *UPI Annual Report 2023–2024.* [npci.org.in](https://npci.org.in); Banco Central do Brasil. *Resolução Conjunta BCB/CMN No. 1/2020 and Pix data governance framework.* [bcb.gov.br](https://bcb.gov.br)

---

*Oybek Khodjaev — over 35 years of experience in banking, finance, public administration, and business in Uzbekistan and the CIS. 
Author of the essay series "Beyond Control: Theory of Limits of AI Governance." [okhodjaev.com](https://okhodjaev.com/)*

*The author advises public institutions and financial organisations on AI governance, verification frameworks, and institutional readiness.*
