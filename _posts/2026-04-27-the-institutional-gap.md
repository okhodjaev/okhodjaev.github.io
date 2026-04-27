---
title: "The Institutional Gap: Why No Existing Institution Can Govern AI"
permalink: /essays/the-institutional-gap/
classes: wide
---

*Beyond Control — Theory of Limits of AI Governance · Essay 11 of 12*

---

**The problem is not that governance is missing. The problem is a category mismatch: what real enforcement requires and what existing institutions can produce are not the same thing — and no amount of additional regulation, budget, or political will can close a gap that is structural in origin.**

---

On March 25, 2026, the Board of the Central Bank of Uzbekistan signed Resolution No. 5/11, establishing the rules for a unified QR payment system. Registered by the Ministry of Justice on April 15, 2026, under registration number 3817, the document introduced a single Operator responsible for creating and managing all QR transaction flows, maintaining a unified registry of every QR identifier in the country, and monitoring all payment transactions in real time across the entire economy. A Presidential Decree of December 2025 had already made non-cash payments effectively compulsory for most significant transactions. From July 2026, acceptance of QR payments becomes mandatory for retail and service businesses.

The system is technically sound and the stated goals are legitimate: standardizing payments, reducing the shadow economy, expanding interoperability across providers. But the architecture creates something unprecedented in this country's institutional history: a single centralized behavioral financial dataset covering the entire economy, in real time, managed by a single Operator whose activities are supervised by the same institution that appointed it. Independent legal analysis confirms the gap: the personal data regulator has no jurisdiction over behavioral transaction data — merchant category codes, transaction timing, spending patterns, real-time flows — when that data does not directly identify an individual. The Central Bank oversees the Operator. The document contains no independent audit mechanism for how the Operator uses that dataset.

> *The question is not whether the system works. The question is who controls the controller. And there is no answer in the founding document.*

This is not a regulatory failure. It is a category mismatch between what meaningful oversight requires and what the current institutional architecture can produce. That distinction matters enormously. A regulatory failure can be corrected by better rules. A category mismatch cannot be resolved within the existing framework because the framework was not designed to produce the mechanisms that oversight requires.

---

I have seen this pattern before — and not only in digital systems.

In late 2022, Uzbekistan's Ministry of Health confirmed that dozens of children had died after taking Dok-1 Max, a cough and cold syrup manufactured by Indian company Marion Biotech. Investigations found that the syrup contained ethylene glycol — a toxic industrial compound used in antifreeze — in place of pharmaceutical-grade propylene glycol. The contaminated substance was introduced at the manufacturing stage in India. By the time the product reached children in Uzbekistan, it had already passed through registration, batch certification, and the import-and-distribution chain. The medicine had been officially licensed in Uzbekistan since 2012. Each batch reportedly received a conformity certificate. By the time the system registered what had happened, 65 children were dead.

The failure operated simultaneously at three levels. The registration system failed: documentation confirmed the product met required standards, but there was no independent laboratory analysis that actually corresponded to those documents. The inspection mechanism failed: court materials later included allegations that a bribe was paid to prevent an inspection of the relevant shipment, meaning the system was not merely slow — it was structurally vulnerable to bypass. And the cross-border quality assurance failed: India's export controls did not stop the contaminated product; Uzbekistan's import controls did not catch it. Marion Biotech subsequently lost its license. Uzbekistan introduced GVP standards and post-marketing surveillance rules. Both countries moved toward more formalized cross-border verification mechanisms.

This was not a case of no regulation. It was a case where regulation existed on paper — certification, registration, inspection procedures, licensing, conformity certificates — but the real control mechanisms had already drifted away from their stated function. The documents said control existed. The system behaved as if control existed. Children died.

> *The institutional gap is not the absence of rules. It is the structural inability of the rules that exist to produce the verification they claim to produce.*

The pharmaceutical case, the payment architecture, and AI governance share the same underlying structure. In each domain, a formal regulatory presence claims oversight. In each domain, the actual mechanism of verification depends on the entity being overseen rather than on independent infrastructure. And in each domain, the founding documents do not answer the question of what happens when the system works exactly as designed but produces outcomes the regulatory framework cannot independently detect or address.

---

## Thesis

Essay 7 of this series established that three elements of real AI enforcement have been historically absent: halt authority — the ability to stop deployment before an incident; independent access — the capacity to assess systems without the consent or cooperation of those being assessed; and consequences for misrepresentation — real accountability for false safety claims. What Essay 7 identified as absent, this essay explains as structurally unavailable.

These three mechanisms are not missing from AI governance because of insufficient effort, inadequate resources, or lack of political commitment. They cannot emerge within the current institutional architecture. Not because institutions have failed. But because they are not designed to produce them.

This is not a governance gap. It is a category mismatch — a structural incompatibility between what enforcement requires and what current public authority, technical knowledge, and jurisdictional power can generate. Developing economies are not merely illustrative here. They are a structural demonstration of this mismatch in concentrated form: where compensating mechanisms — independent courts, parliamentary oversight with investigative capacity, free press, civil audit infrastructure — are least developed, the distance between formal governance and real enforcement is most visible. The gap is constitutive of the current international order. It is not a temporary deficiency that better regulation can close.

---

## I. The Gap in Practice

The QR architecture described above is a local instance of a global pattern — and the connection to AI governance runs deeper than it first appears.

In both cases, the system operates as designed and the technical achievement is real. In both cases, a single point of concentration accumulates data and decision authority that was previously distributed. In both cases, the oversight mechanism is formally present but structurally dependent on the entity being overseen: the QR Operator reports to the Central Bank that appointed it; AI laboratories provide safety documentation to regulators who lack the independent technical capacity to verify it. And in both cases, the question of what happens when the system works exactly as designed but in ways that create institutional risk receives no answer in the founding documents.

The specific bridge between these two architectures is the behavioral dataset. The QR system does not collect names and home addresses. It collects MCC codes, transaction timing, spending patterns, and real-time flows — the behavioral map of an entire economy. A centralized AI decision system operates on an equivalent logic: not necessarily personal identifiers, but behavioral patterns that shape outcomes. The governance question is structurally identical: who has independent access to how those patterns are used, and what happens when they are used in ways the founding documents did not anticipate?

Uzbekistan's history offers a documented precedent for what happens when single-point-of-failure architecture operates without compensating institutional mechanisms. In July 2012, a major mobile operator had its license suspended. Millions of subscribers lost service without warning, with no appeal mechanism and no service alternative. The regulatory action was formally legal. But millions of people dependent on critical communications infrastructure had no recourse, no advance notice, and no fallback. The incident was resolved. What it demonstrated architecturally — that critical infrastructure concentration without independent oversight creates vulnerability that formal regulatory procedures cannot manage after the fact — was not systematically addressed.

The pattern across all three cases — pharmaceuticals in 2022, mobile infrastructure in 2012, payment architecture in 2026 — is structurally identical: formal regulatory presence, single point of concentration, absence of independent verification, and a governance claim that depends on the good faith of the overseen entity rather than on mechanisms capable of functioning independently of it. AI governance at the frontier operates under the same conditions. The difference is scale, speed, and opacity.

---

## II. The Comparative Record

The pattern across jurisdictions is consistent enough to be structural rather than incidental.

When India built UPI, the technical achievement was genuine: a unified payments infrastructure that reached hundreds of millions of people within a few years. But the architecture concentrated behavioral transaction data in the hands of a small number of licensed intermediaries in ways the original design did not contemplate governing. The regulatory framework addressed transaction processing. It did not address behavioral data concentration. The gap between what the system did technically and what oversight could reach became apparent only after the concentration had already occurred and entrenched itself.

Brazil's Pix achieved 70 percent population coverage within two years of launch. But the Central Bank of Brazil recognized a structural problem during implementation: Pix required a separate data governance framework that was not inherent to the payment system itself. That framework had to be designed, legislated, and enforced in parallel — an explicit acknowledgment that technical deployment and institutional resilience are separate projects proceeding at different speeds. Pix worked. The governance of what Pix produced required iterative correction years after launch.

In the European Union and the United States, centralized digital systems operate alongside institutional compensating mechanisms — independent judicial review, parliamentary oversight with investigative capacity, civil society audit infrastructure, legally protected press. Those mechanisms do not prevent concentration. But they create friction, visibility, and appeal pathways. The same technical architecture — a centralized registry, a single operator, a behavioral dataset — produces different institutional risk profiles depending on the surrounding environment. The technology is not the variable. The institutional environment is.

The AI governance record follows this pattern at considerably higher velocity. According to reporting in February 2026, the International AI Safety Report — a multilateral assessment — documents that voluntary safety commitments at frontier AI laboratories have in practice functioned more as public-relations instruments than as operational constraints, with safety findings noted and then overridden for competitive reasons. Reporting from multiple outlets indicates that since January 2025, at least 38 senior safety researchers have departed from major AI laboratories. OpenAI dissolved its Superalignment team in 2024 — a structure created in 2023 to address long-term risk — and then dissolved its Mission Alignment Team in February 2026, a year and a half later. The US AI Safety Institute was renamed in late 2025; the word "safety" was removed from its institutional identity. The Eurasia Group's *Top Risks 2026* report characterizes the current moment in AI as arriving with what it calls "next to no governance, alignment, or coordination" — not as a critique, but as a structural description of a technology developing faster than the institutional capacity to constrain it.

> *Geoffrey Hinton, who left Google specifically to speak without institutional constraint, identified the structural problem directly: "The rules exist, but they are not designed to deal with most threats." The EU AI Act, he noted, exempts military applications entirely. Regulators are prepared to govern companies. They are not prepared to govern themselves.*

Yoshua Bengio framed the same structural observation differently: AI regulation, in its current form, is weaker than food safety law. Not because no one wrote the rules. Because the rules that were written cannot generate what food safety regulation historically required — independent laboratory testing, halt authority before market entry, and enforceable consequences when misrepresentation caused harm. The Dok-1 Max case demonstrates exactly what happens when food-safety-style rules exist without those three mechanisms. [Essay 6](/essays/the-pattern-closes/) of this series described performative control — governance that produces the documentation of oversight without its substance. The AI governance pattern, and the pharmaceutical pattern before it, are the same structural failure in different domains.

---

## III. Structural Incompatibility: The Institutional Physics

Why do the three mechanisms fail to appear? The answer is not political will, institutional capacity, or regulatory budget. It is structural — what might be called the institutional physics of the problem.

**Halt authority** requires a stable, definable object of regulation. In pharmaceuticals, the object is a molecule with a discrete approval gate: the compound can be tested independently before market entry, and it can be withheld pending that test. In nuclear verification, the object is a physical installation that cannot be relocated overnight. In banking, it is a balance sheet with standardized metrics that a regulator can assess without the bank's cooperation. In frontier AI, the object is a process — model weights, behaviors, context-dependent outputs — whose capabilities often emerge after deployment rather than before it, and which changes continuously through updates, fine-tuning, and new deployment contexts. No legal system has yet produced a workable operational definition of "this is the AI system that must be stopped before it is deployed." Without such a definition, halt authority is declarative rather than operational.

There is an additional structural dimension specific to AI: in banking, revoking a license is operationally contained. An individual institution can be resolved or transferred. In AI, stopping the deployment of a frontier model at a major platform means stopping hundreds or thousands of downstream services that have integrated that same API — healthcare diagnostic tools, legal research platforms, educational infrastructure, financial advisory systems. The halt becomes not a regulatory action against one entity but a disruption across an entire dependency graph. This creates institutional lock-in: the laboratory becomes structurally too embedded to halt in the conventional regulatory sense, regardless of whether legal authority formally exists. Halt authority becomes politically and operationally impossible at precisely the moment it would be most necessary.

**Independent access** — the kind that makes IAEA inspections meaningful — requires that the inspector can verify what they are told without depending on the inspected party for the tools of inspection. In nuclear verification, there are physical signatures: isotope ratios, radiation traces, material accounting. The inspector brings their own instruments. In pharmaceutical inspection, there is laboratory chemistry: an independent tester can determine what is in a compound without asking the manufacturer to interpret it. The inspector has their own Geiger counter, built outside the regulated system, whose readings the inspected party cannot manipulate.

In AI, no such independent instrument exists. The interpretability frameworks, the evaluation benchmarks, the safety testing infrastructure — all of it was developed inside the same private laboratories whose outputs require independent assessment. This is the epistemic trap: the act of inspection depends on frameworks created by those being inspected. A model's behavior cannot be assessed without the developer's interpretability tools. A safety claim cannot be verified without the developer's evaluation suite. Unlike the nuclear inspector, the AI auditor cannot bring their own Geiger counter. There is no equivalent device that functions independently of the system under examination.

**Consequences for misrepresentation** require a measurable baseline against which a false claim can be proven false. In banking, there are capital ratios — standardized, auditable, comparable across institutions. In pharmaceuticals, there are clinical outcomes — harm occurred or it did not, and the causal chain can be traced through independent toxicology. In AI, there is currently no agreed metric for safety, no standardized stress test whose results bind the assessed party, no baseline truth against which a safety claim can be independently falsified. The boundary between honest uncertainty and deliberate misrepresentation dissolves in genuine epistemic ambiguity. And the legislative cycle — measured in years — consistently lags the capability cycle — measured in months. By the time a liability framework could be constructed, the system it was designed for has fundamentally changed.

A **fourth structural factor** operates across all three mechanisms: jurisdictional fragmentation. AI systems are developed in one jurisdiction, deployed across second and third jurisdictions, and produce consequences across dozens more. No single regulator commands authority across all three phases. The EU can regulate AI use within its borders. It cannot regulate the development of the systems being used. The United States can restrict export of certain computational resources. It cannot control the deployment of architectures that have already become globally distributed. Any enforcement framework that addresses only one phase of the development-deployment-consequence chain in practice produces the appearance of governance rather than its substance.

This is not a temporary limitation. It is a structural boundary — the point at which the institutional physics of current governance architecture runs out of the capacity to generate what enforcement actually requires.

---

## Implications

**First:** the current AI governance architecture produces the appearance of oversight faster than its substance. This is not a temporary state pending better legislation. It is a structural characteristic documented in the International AI Safety Report 2026, confirmed by the pattern of safety team dissolution at major laboratories as deployment accelerates, and visible in the growing distance between the sophistication of safety documentation and the absence of any mechanism for independently verifying its claims. The Dok-1 Max tragedy demonstrated the same structure in a different domain: certificates existed, inspections were supposed to happen. Sixty-five children died. The documents said control was present. It was not.

**Second:** governance is migrating away from regulatory institutions toward actors with direct exposure to failure. This is not a normative prescription — it is a description of where real constraint is actually located when regulatory mechanisms cannot verify what they claim to oversee. Insurers pricing AI liability cannot afford to accept unverified safety claims: they bear direct financial exposure to the gap between documented and actual risk. Institutional investors with fiduciary obligations must assess the real risk of systems they fund, not the documented risk. Procurement frameworks that cannot contractually verify safety properties will not purchase systems whose failure creates direct liability for the purchaser. Where regulators generate compliance documents, liability-exposed institutions generate skin in the game. That distinction is the actual architecture of constraint in the near term. Governance is not disappearing. It is moving to actors who cannot afford to treat it as performance.

**Third:** for developing economies, this analysis implies a specific and concrete choice — not whether to deploy centralized digital systems, but in what sequence and with what institutional architecture. The pharmaceutical case shows what happens when technology is deployed before the independent verification infrastructure exists: the gap between formal certification and real protection is filled by nothing except good faith, and the cost of that gap is borne by the most vulnerable. The QR payment architecture presents the same decision point: a technically sound system, a legitimate policy objective, and a behavioral dataset whose independent oversight has not been designed into the system. Copying technology without copying the institutional environment that makes the technology governable is not a neutral development choice. As [Essay 8](/essays/the-agency-transfer/) of this series described, agency transfer has a structural consequence: the knowledge of how to operate without the centralized system disappears not because it is destroyed but because it stops being practiced. Once that institutional memory is gone, the choice between deployment and verification is no longer available.

---

## Signals to Watch

**First:** the first meaningful enforcement action against a frontier AI laboratory by a regulatory body. The question is not whether such action will occur — it will — but whether it is based on evidence the regulator developed independently, or on documentation provided by the company being regulated. If the latter, the enforcement action confirms the structural dependency this essay describes rather than correcting it. The appearance of accountability without its mechanism is not progress toward real oversight.

**Second:** the emergence of AI liability insurance as a distinct market, and the pricing it establishes relative to official safety profiles published by the same laboratories. Insurers price real risk. The spread between what a laboratory claims its system's safety profile to be and what an underwriter charges to cover that system's liability exposure will be the first independently generated quantification of the distance between documented and actual safety. That market does not yet fully exist. When it does, it will price the gap more precisely than any regulatory framework currently can.

**Third:** any decision by a developing economy to pause deployment of a centralized AI or digital infrastructure system pending development of compensating institutional mechanisms — or conversely, any documented case of rollback after an incident that the existing governance framework failed to prevent. Either event constitutes the first empirical data point on whether the gap can be addressed from the periphery before it is addressed at the center. Developing economies face higher institutional risk precisely because they have fewer compensating mechanisms. But they also have clearer visibility into the gap, because fewer institutional layers exist to obscure it.

**Fourth:** the first public acknowledgment by a regulator in a developing economy that it does not possess independent verification capacity for frontier AI models deployed within its national infrastructure, and that its oversight relies entirely on documentation provided by the developer. That statement — if and when it comes — will be the first honest institutional description of the structural condition this essay diagnoses. It will also be the necessary precondition for any serious institutional response.

---

## Questions Without Clean Answers

If the three mechanisms of real enforcement cannot emerge within existing institutional forms — not temporarily absent but structurally unavailable within the current distribution of authority, knowledge, and jurisdiction — what does that mean for AI governance as a project? Not as a critique, but as an honest accounting: are we governing AI, or are we governing the documentation of AI?

Can a partial, honest governance architecture — one that acknowledges what it cannot do, concentrates resources on what it can actually verify, and prices real risk rather than documented risk — be more functional than a complete, performative one? The pharmaceutical parallel offers a partial answer: after Dok-1 Max, Uzbekistan did not simply add more certificates. It introduced post-marketing surveillance — a mechanism that operates after deployment, in real conditions, against real outcomes. That is a fundamentally different epistemology of control than pre-deployment certification. There may be an equivalent approach available for AI. But it would require acknowledging that pre-deployment certification — in its current form — produces documents rather than safety.

If enforcement mechanisms cannot be produced within existing institutions, then AI governance is not a problem to be solved within the current framework. It is a structural limit to be acknowledged. The question is no longer only how to govern AI within the current institutional order. The question is what remains governable once AI systems are embedded deeply enough that rollback is technically possible but practically irreversible — not because the problem has been solved, but because the institutional memory of how to operate without the system has already disappeared. [Essay 8](/essays/the-agency-transfer/) of this series described that process. This essay explains why the institutions designed to prevent it are structurally unable to do so.

That is where the next essay begins.

---

*Oybek Khodjaev is the founder and CEO of INVEXI LLC, former Deputy Chairman of a major Uzbek commercial bank, and former Deputy Governor of the Samarkand Region (2019–2022). He writes on AI governance and institutional risk at [okhodjaev.com](https://okhodjaev.com). This essay is part of the series Beyond Control — Theory of Limits of AI Governance.*

*April 27, 2026.*

---

*Subscribe to receive essays by email: [okhodjaev.substack.com](https://okhodjaev.substack.com)*
