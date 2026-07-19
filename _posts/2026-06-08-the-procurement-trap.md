---
title: "Analytical Note No. 7 — The Procurement Trap"
date: 2026-06-08
permalink: /governance-briefs/the-procurement-trap/
description: "How AI procurement decisions lock in governance architecture before deployment begins. The moment at which consequential governance choices are made is not the moment at which governance frameworks are applied."
tags: [AI governance, procurement, Uzbekistan, institutional lock-in, agency transfer]
layout: single
author_profile: false
classes: wide
toc_icon: "file-text"
excerpt: "The procurement trap: the moment at which consequential governance choices are made is not the moment at which governance frameworks are applied."
---

**Analytical Note No. 7 · Series: Governance Briefs · June 2026**

**Operationalises: Essay 8 "The Agency Transfer," Essay 10 "The Infrastructure Question" — Beyond Control: Theory of Limits of AI Governance**

*[Русская версия](/governance-briefs/the-procurement-trap-ru/)*

---

Most discussions of AI governance focus on what happens after a system is deployed: how it performs, whether it produces the outcomes it was designed for, and what oversight mechanisms are in place to detect and correct failures. The procurement decision that precedes deployment receives considerably less attention. It should not. By the time an AI system goes live, its governance architecture has already been substantially determined — not by the oversight framework, but by the contract.

This is the procurement trap: the moment at which consequential governance choices are made is not the moment at which governance frameworks are applied. The trap is not a consequence of procurement — it is its built-in structural property.

**The architecture of pre-commitment**

A procurement contract for an AI system specifies far more than price and delivery schedule. It determines where data is processed and stored, which standards the system must meet, what technical interfaces it must support, and under what conditions modifications, audits, or replacements are permissible. Each of these specifications is simultaneously a governance decision: it determines what oversight is structurally possible, what correction would require, and what exit from the vendor relationship would cost. A scenario warranting particular attention is emergency loss of access: the imposition of sanctions against the user country, force majeure circumstances, or a unilateral decision by the vendor to suspend or revoke its licence. In such a case, any procedure embedded in a mandatory operational cycle would be blocked without any transitional architecture in place. The procurement contract either addresses this scenario — or it does not. After signature, that question can no longer be resolved.

These are not hypothetical futures. They are contractual facts established before the system processes a single transaction. The institution that signed the contract may not have framed these choices as governance decisions. The procurement officer evaluated compliance with technical specifications, budget authority, and procurement law. The institution's governance function, if it engaged at all, engaged after the technical architecture was already defined. The sequence matters. Governance frameworks review systems. Procurement decisions build them.

Uzbekistan's Presidential Decree No. UP-259 of 26 December 2025 illustrates the structural dynamic precisely. Article 3 mandated the deployment, from 1 March 2026, of an AI-based module for calculating the benchmark market price of any procurement subject on the state procurement portal gosziakupka.uz. From that date, any state customer has been required to generate a benchmark price through the module before initiating a procurement procedure. Article 22 goes further: the Ministry of Economy and Finance, jointly with the Ministry of Digital Technologies, has been instructed to develop proposals for automatic determination of a procurement winner without the participation of a procurement commission — removing human review from the award decision entirely.

The decree is a coherent response to legitimate governance problems: reducing price manipulation, curbing corruption, and increasing competition in public procurement. The structural observation is not that these goals are mistaken. It is that in pursuing them, the decree embedded an AI module at an obligatory stage of a procedure governing trillions of sums in annual expenditure — without specifying, in the same document, which institution holds authority to suspend the module if its outputs are systematically wrong, how a finding of material error propagates through decisions already embedded in signed contracts, or what procedure governs replacement of the module if the underlying model requires structural revision.

The oversight question arrived, as it typically does, after the operational fact.

**The dependency that forms before deployment**

Note 6 of this series identified three layers of dependency that form after an AI system is deployed: data dependency, contractual and procedural dependency, and decisional and capital dependency. The procurement trap operates on a different temporal axis. The dependencies described below are not consequences of deployment — they are fixed at the moment of contract signature, before the system processes its first transaction.

Three structural dependencies emerge from the architecture UP-259 creates.

The first is methodological dependency. The module's calculation of benchmark market price has, since March 2026, become the reference point against which procurement officers justify their own estimates, auditors assess compliance, and — in the event of disputes — courts evaluate claims. The methodology embedded in the module is not merely a technical choice. It is an evidentiary standard. Once that standard is operationally established, challenging its outputs requires not just a counter-estimate but a challenge to the methodology itself — a structurally more demanding task, and one that becomes more difficult with every procurement cycle the module participates in.

The second is institutional dependency. Article 22's instruction to develop automatic winner determination without commission participation represents a further step: the removal of the human review layer from the award decision. When that layer is removed, the institutional capacity to exercise it does not merely pause. It begins to atrophy through disuse. The procurement officers whose judgment was previously required at the award stage will no longer exercise that judgment routinely. The organisational memory of how to conduct unassisted review degrades. This is the agency transfer mechanism described in Essay 8, operating here not as a gradual consequence of deployment but as a design intention stated in the founding instrument itself.

The third is vendor dependency. The module operates under a specific technical and contractual architecture. That architecture determines whether the model parameters and architecture are accessible to independent technical verification, or proprietary to the developer. It establishes the audit rights available to the Accounts Chamber and other supervisory bodies — or forecloses them, if the contract treats the model as a commercial secret. It fixes the switching costs that make replacement structurally expensive. These terms were negotiated once, before the module processed its first price query. They govern the relationship for the operational life of the system. If the contract does not explicitly preserve the right to independent audit, that right does not exist by default — regardless of what future regulatory acts may require.

None of these three dependencies is created by the procurement decision in isolation. Each is a structural property of how AI systems integrate into institutional processes over time. But the procurement decision is the moment at which they are enabled or constrained. The contract either preserves the state's capacity for independent audit, correction, and exit — or it does not. After deployment, that capacity cannot be restored without renegotiating from a position of established dependence.

**The gap in the current architecture**

Uzbekistan's procurement framework, substantially reformed by UP-259 itself, addresses transparency, competition, and corruption risk in the procurement process. It does not address the governance architecture of AI systems procured through that process.

The structural tension is precise. Article 7¹ of the Law of the Republic of Uzbekistan No. ZRU-1115 on Artificial Intelligence prohibits AI from serving as the sole basis for legally significant decisions. Article 22 of UP-259 instructs the Ministry to develop a procedure for automatic determination of a procurement winner — a legally significant decision — without commission participation. These two instruments proceed from different institutional logics and have not been reconciled. The Law establishes a constraint on automated authority. The Decree instructs the removal of the human layer that makes that constraint operational. This is normative tension that requires clarification from a competent authority as to whether a direct structural collision arises. The Law carries higher legal force than the Decree — which is precisely what makes the question of their relationship a matter that cannot remain unresolved during the period of active module operation.

This is not an inconsistency that requires criticism of either instrument. It is a structural observation about sequencing: the operational architecture proceeds, and the question of how legal requirements apply to that architecture follows. The interval between the two is the period during which governance dependencies form without governance frameworks to shape them.

International experience confirms that this interval is not merely a temporary lag. India's experience with UPI showed that behavioural data concentration at the aggregator level emerged as a governance problem after the technical architecture had already established it as an operational fact. Brazil's Pix required a separate data governance framework that had to be developed in parallel with deployment — an explicit acknowledgment that technical capability and institutional governance are different projects proceeding at different speeds. In both cases, the governance framework caught up with an architecture it had not shaped.

The procurement trap is not unique to Uzbekistan. It is a structural property of how institutions adopt AI systems: the technical and commercial decision precedes the governance framework, and the governance framework inherits constraints it did not choose.

**What this signals for governance architecture**

The gap identified here is architectural, not regulatory. UP-259 is a serious reform instrument addressing real problems. The structural question it raises is not whether its goals are legitimate but whether the governance architecture required to sustain those goals over time is being built in the same moment as the operational architecture.

Three observations follow from the analysis.

First, AI procurement decisions should be treated as governance decisions at the moment they are made, not after the fact. The technical specifications, data access conditions, audit rights, and exit terms in a procurement contract are governance instruments. Reviewing them through a governance lens before signature is considerably cheaper than attempting to modify them after operational dependencies have formed.

Second, the agency transfer embedded in automatic award procedures warrants specific institutional attention. The capacity for human review at the award stage is not merely a procedural requirement. It is an institutional competency that degrades if not exercised. A governance architecture that replaces human judgment with automated output should specify, in the founding instrument, how and under what conditions that judgment can be restored — and which institution holds the authority to require that restoration.

Third, the unresolved tension between Article 7¹ of ZRU-1115 and Article 22 of UP-259 is not self-resolving. The module has been operational since March 2026. The procedure for automatic winner determination is under development. The interval between these two moments — active operation without resolved legal architecture — is precisely the window during which governance dependencies accumulate. PP-204, examined in Note 6 of this series, follows the same pattern in the financial sector: operational architecture first, legislative consolidation to follow. The recurrence of this sequence across unrelated domains — financial services and public procurement — suggests it is not an administrative oversight. It is the structural logic of how technology policy is currently being built in Uzbekistan.

Procurement is not an administrative process that precedes governance. It is the first governance decision — and in the AI context, often the most consequential one, because it is made before anyone has formally asked the governance questions. The correction window for the dependencies fixed by UP-259 is measured not from the date of full legislative consolidation, but from 1 March 2026. That window has been open for three months. Each procurement cycle that passes without defined audit rights, correction procedures, and exit terms compounds the cost of establishing them later.

*The following note in this series examines three centralisation architectures — Uzbekistan, India, and Brazil — to determine whether the pattern identified here is a property of a specific institutional environment or a structural feature of how AI infrastructure is adopted at national scale.*

---

## Sources & Notes

[1] Republic of Uzbekistan. Presidential Decree No. UP-259 "On further measures to ensure a competitive environment and transparency in the public procurement system." 26 December 2025. [lex.uz](https://lex.uz/ru/docs/7952240)

[2] Republic of Uzbekistan. Law No. ZRU-1115 "On Artificial Intelligence." Article 7¹. [lex.uz](https://lex.uz/ru/docs/6600604)

[3] Republic of Uzbekistan. Presidential Decree No. PP-204 "On further measures to increase the popularisation of financial services and expand support for small and medium-sized businesses." 26 May 2026. [lex.uz](https://lex.uz/ru/docs/7409517)

[4] National Payments Corporation of India. *UPI: Ecosystem and Governance Framework.* [npci.org.in](https://www.npci.org.in)

[5] Banco Central do Brasil. *Pix: Design and Governance Framework.* 2020–2023. [bcb.gov.br](https://www.bcb.gov.br/en/financialstability/pix_en)

[6] Basel Committee on Banking Supervision. *Principles for the Sound Management of Operational Risk.* Bank for International Settlements, June 2011. [bis.org](https://www.bis.org/publ/bcbs195.htm)

[7] Khodjaev, O. *Beyond Control: Theory of Limits of AI Governance.* Essay 8 "The Agency Transfer." 2026. [okhodjaev.com](https://okhodjaev.com/essays/the-agency-transfer/)

[8] Khodjaev, O. *Beyond Control: Theory of Limits of AI Governance.* Essay 10 "The Infrastructure Question." 2026. [okhodjaev.com](https://okhodjaev.com/essays/the-infrastructure-question/)

[9] Khodjaev, O. *Governance Briefs. Analytical Note No. 6 "The Rollback Problem."* June 2026. [okhodjaev.com](https://okhodjaev.com/governance-briefs/the-rollback-problem/)

[10] Spot.uz. "V Uzbekistane vvedut II-modul' dlya raschyota srednerinochnoj tseny v goszakupkakh." December 2025. [spot.uz](https://spot.uz/ru/2025/12/31/procurement-control/)

---

*Oybek Khodjaev researches AI governance and advises on institutional readiness in the age of AI, with a particular focus on systemic risk. Drawing on more than 35 years of experience across banking, finance, public administration, and business in Uzbekistan and the CIS, he develops practical approaches to assessing the institutional limits of AI governance. He is the author of the "Beyond Control" essay series, which advances a structural theory of the limits of AI governance.*
