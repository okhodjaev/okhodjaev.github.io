---
title: "The Alignment Ceiling"
date: 2026-06-19
permalink: /governance-briefs/the-alignment-ceiling/
description: "When AI systems are imported rather than built, the alignment claim travels with them — but the institutional capacity to verify it does not. Analytical Note No. 10, Governance Briefs series."
tags: [AI governance, alignment, epistemic asymmetry, uzbekistan, procurement, global south, PP-204, ZRU-1115]
layout: single
author_profile: false
classes: wide
toc_icon: "file-text"
excerpt: "The alignment claim travels with the system. The institutional capacity to verify it does not."
---

*Analytical Note No. 10 · Series: Governance Briefs · June 2026*
*Operationalises: [Essay 12 — Beyond Control: What Happens When the Correction Window Closes](https://okhodjaev.com/essays/beyond-control/) — [Beyond Control: Theory of Limits of AI Governance](https://okhodjaev.com/essays/)*
*[English](https://okhodjaev.com/governance-briefs/the-alignment-ceiling/) · [Русская версия](https://okhodjaev.com/governance-briefs/the-alignment-ceiling-ru/)*

---

#### Contents

- [I. The Epistemic Asymmetry](#i-the-epistemic-asymmetry)
- [II. What Alignment Frameworks Actually Assume](#ii-what-alignment-frameworks-actually-assume)
- [III. The Chain Between Developer and Deployer](#iii-the-chain-between-developer-and-deployer)
- [IV. Why the Ceiling Is Structural](#iv-why-the-ceiling-is-structural)
- [Implications](#implications)
- [Signals to Watch](#signals-to-watch)
- [Sources & Notes](#sources--notes)

---

*The alignment claim travels with the system. The institutional capacity to verify it does not.*

## I. The Epistemic Asymmetry

Alignment, as it developed in the laboratories building frontier AI systems, is a technical process. Constitutional AI, reinforcement learning from human feedback, scalable oversight — these are methods applied by developers to constrain a system's behaviour during training. The claim that a system is aligned is made by those with access to the training process, the reward model, the iteration history, and the interpretability instruments — however imperfect — that allow some examination of the relationship between what the system was trained to do and what it actually does.

For institutions that deploy but do not build these systems, that technical process is unavailable. They receive what the supplier provides: a model card, a conformity declaration, an attestation that the delivered system satisfies stated requirements. This is not a lesser version of the developer's claim. It is a categorically different kind of claim, requiring a categorically different institutional infrastructure to evaluate — infrastructure that does not exist in any procurement architecture currently operating in Uzbekistan.

This is the epistemic asymmetry: the deployer cannot technically refute what the supplier asserts, because the evidence required for refutation — weights, training objectives, RLHF iteration records, evaluation suite results — remains with the provider. The regulator can review documentation. It cannot contest what the documentation represents, because it holds no independent means of generating a different answer.

ZRU-1115, Article 7¹ establishes requirements for the reliability, safety, and ethical conformity of AI systems operating in Uzbekistan. Presidential Decree PP-204 of 26 May 2026 mandates the deployment of AI-based scoring and advisory systems from external providers starting 1 July 2026, with sixty percent of microcredits processed through AI-based systems by 2030. The first document establishes sovereign standards. The second authorises their fulfilment through systems built without reference to those standards. The gap between the obligation ZRU-1115 creates and the institutional capacity to verify whether it is met is not a drafting error. It is the regulatory form of the Alignment Ceiling.

## II. What Alignment Frameworks Actually Assume

The international frameworks most cited in AI governance discussions — the OECD AI Principles, the EU AI Act's conformity assessment requirements for high-risk systems, the NIST AI Risk Management Framework — share a structural assumption that receives no explicit statement in their founding documents, because in the environments where they were drafted, it required none.

They operate most effectively under conditions where the institution claiming compliance participated in producing, commissioning, or independently auditing the system to which compliance is being claimed.

The EU AI Act requires, for high-risk AI systems in credit scoring, that providers supply full technical documentation of the system's design and development process; that human oversight mechanisms genuinely override automated decisions; and that individuals subject to AI-based decisions hold meaningful rights of explanation. These requirements presuppose that the institution claiming compliance can produce the documentation, because it commissioned or conducted the development. They presuppose that a "human oversight mechanism" can genuinely intervene, because the institution employing that human understands the system well enough to specify when intervention is warranted. They presuppose that explanation is achievable, because the institution has access to the decision logic, not merely to the output.

When a deploying institution has not participated in design or training, these preconditions do not hold. It can produce a vendor attestation. It can conduct a cybersecurity audit of the interface layer. It can review whatever documentation the supplier provides. None of this constitutes independent verification of the alignment claim. It constitutes documentation of the trust relationship.

The OECD principles assumed that the state party adopting them could independently verify compliance. The NIST framework assumed that the organisation managing AI risk could observe, test, and adjust the system it managed. These assumptions were transparent in the environments where the frameworks were written. They become invisible fault lines when the frameworks travel.

## III. The Chain Between Developer and Deployer

The structure can be made explicit.

Developer alignment — whatever its technical quality — is a claim about the relationship between a system's internal optimisation targets and the intentions of those who trained it. Supplier assurance is the downstream claim that the delivered system satisfies the requirements of the contract and the declared specifications. Institutional trust is what the deploying organisation extends when it accepts that assurance as sufficient grounds for deployment.

The chain breaks between supplier assurance and institutional trust, because trust without verification capacity is not a governance mechanism. It is an exposure.

Agency transfer — the progressive migration of decision-making authority from human operators to externally determined algorithmic logic — deepens with each credit decision processed through an unverified AI scoring model. What the deployer transfers is not only operational control. It transfers, incrementally, the institutional capacity to recognise misalignment. An organisation that has never participated in designing or auditing an AI system loses, with each deployment cycle, some portion of the technical literacy that would allow it to detect when the system's behaviour diverges from its represented properties.

Essay 8 documented this mechanism in its clearest form: human competence that is not practiced atrophies. The correction window closes not through crisis but through the quiet accumulation of dependency on systems whose internal logic the dependent institution cannot independently inspect. For alignment specifically, the atrophy is epistemic: the institution progressively loses the capacity to ask the questions whose answers would reveal misalignment.

This is the mechanism through which institutional misalignment and societal misalignment enter dependent jurisdictions — not through deliberate imposition, but through the quiet mechanics of adoption. The values encoded during training — assumptions about creditworthiness, about the relative weight assigned to different behavioral signals, about risk thresholds and fairness criteria — were optimised for the markets and regulatory environments where the capital and talent that built the system are concentrated. Deploying institutions do not align the system to local values. They adapt their operational expectations to the system's inherited logic, while maintaining documentation that represents the reverse.

Essay 2 showed that transparency without enforcement infrastructure produces the illusion of oversight. Here, the same structure operates at the level of value correspondence. The institution produces certification. The operational system proceeds under parameters it cannot fully inspect. Audit without access to the relevant artifacts is not audit. It is documentation of a declared intention to audit.

## IV. Why the Ceiling Is Structural

The Alignment Ceiling is not a temporary developmental gap that better-resourced local adaptation will eventually close. It is a structural condition defined by the architecture of the global AI stack.

At current capability levels, meaningful independent verification of a frontier or near-frontier AI system's alignment properties requires access to the training process, interpretability instruments that are themselves at the frontier of active research, and technical expertise whose formation occurs in the environments where that research is concentrated. These conditions are absent from the procurement architecture of jurisdictions occupying what this Framework defines as the structural position of the Global South — not because political will is lacking, but because the institutional substrate required to make verification possible cannot be assembled within the timelines of the deployments now being authorised.

Essay 11 showed that halt authority, independent access, and consequences for misrepresentation are absent even at the centre. For dependent positions they are constitutive. The Institutional Ceiling limits what governance can achieve. The Alignment Ceiling sets a deeper limit: the point at which any deploying institution can no longer honestly claim verified correspondence between local intent and system behaviour. Below this ceiling, stronger institutional architectures cannot be reached because the foundational claim itself is unverifiable.

The colonial pattern described in Essay 5 is reproduced not through overt imposition but through the grammar of certification. The centre develops systems whose alignment properties reflect its research priorities, regulatory assumptions, and market structures. The periphery certifies conformity with those properties under frameworks that assume participation in design. The documentation of compliance runs in one direction. The meaningful locus of control does not move.

Essay 12 was explicit about what this means for jurisdictions in structural dependence: the correction window for this architecture was never as wide as the centre's governance discourse suggested. The interval between deployment and institutional embedding — within which verification capacity could still be built alongside the operational system — is determined by the deployment schedule, not by the pace at which local verification infrastructure develops. PP-204's timeline is precise: July 2026, December 2026, 2030. The timeline for developing independent model assessment capacity appears in no document produced alongside it.

## Implications

For institutions carrying the obligation of ZRU-1115 and the deployment mandate of PP-204, the Alignment Ceiling has a specific operational consequence: the reliability and ethical conformity requirements of the law are, under the current procurement architecture, verifiable only at the contract layer. An institution can obtain documentation. It cannot independently confirm what the documentation represents.

This is not a reason to halt deployment. It is a diagnostic: the governance claim embedded in ZRU-1115 is functioning, for imported systems, as trust documentation rather than property verification. The honest institutional assessment is not "this system is aligned to our standards" but "we have accepted the supplier's representation that it is, and we have no independent means of determining otherwise."

The governance residual that Essay 12 identified — partial, asymmetric, uncoordinated — applies here in its most concrete form. Contractual audit rights, procurement specifications that demand artifact disclosure rather than merely conformity declarations, and formal accountability mechanisms for misrepresentation are not substitutes for genuine verification capacity. They are what remains available below the Alignment Ceiling. They are worth building precisely because they are all that can be built within this structural condition — and because each deployment cycle that passes without establishing them compounds the cost of establishing them later.

The following Note in this series examines the governance residual in its operational dimension: what remains available as a constraint mechanism once the Alignment Ceiling is acknowledged as a structural feature rather than a transitional gap.

## Signals to Watch

The first formal audit of an AI scoring system deployed under PP-204, conducted under the biennial mandate of Section IV.7.(a) by the Ministry of Digital Technologies. Whether the audit scope extends to model performance, accuracy against defined criteria, and the correspondence of scoring outcomes with ZRU-1115's reliability requirements — or remains limited to cybersecurity and interface compliance — will define what institutional capacity actually sits behind the governance claim.

The Central Bank's legislative proposal due August 2026 (PP-204, Section IV.6.(b)) on bank secrecy data provision to Platform operators. Whether the data access architecture it establishes includes any specification of conditions under which the sharing arrangement can be modified or revoked on grounds of model misalignment will indicate whether the alignment claim is understood as a continuing property to be monitored or a pre-deployment requirement satisfied at procurement.

Whether any procurement specification for AI systems in Uzbekistan's public-sector decision functions requires the supplier to provide technical documentation adequate for independent model performance assessment — not a conformity certificate, but the artifacts that would make conformity independently assessable. The first such requirement will mark the first institutional recognition that supplier assurance and verified alignment are different institutional objects.

Whether, in any documented case of AI-based adverse credit decision under PP-204, the affected borrower successfully exercises a right of explanation through administrative or judicial channels without requiring the technical cooperation of the system's developer. This test — when it occurs — will reveal whether the governance claim is procedurally operable in a specific, concrete case, or formally asserted at a level of generality that the operational architecture cannot sustain.

## Sources & Notes

[1] Republic of Uzbekistan. Law No. ZRU-1115 "On Artificial Intelligence." Article 7¹. Requirements for reliability, safety, and ethical conformity of AI systems. [lex.uz](https://lex.uz/ru/docs/6600604)

[2] Republic of Uzbekistan. Presidential Decree No. PP-204 "On further measures to increase the popularisation of financial services and expand support for small and medium-sized businesses." 26 May 2026. [lex.uz](https://lex.uz/ru/docs/7409517)

[3] Khodjaev, O. *Beyond Control: Theory of Limits of AI Governance.* Essay 12 "Beyond Control: What Happens When the Correction Window Closes." May 2026. [okhodjaev.com](https://okhodjaev.com/essays/beyond-control/)

[4] Khodjaev, O. Essay 8 "The Agency Transfer." April 2026. [okhodjaev.com](https://okhodjaev.com/essays/the-agency-transfer/)

[5] Khodjaev, O. Essay 4 "The Myth of Alignment." March 2026. [okhodjaev.com](https://okhodjaev.com/essays/the-myth-of-alignment/)

[6] Khodjaev, O. Essay 11 "The Institutional Gap." April 2026. [okhodjaev.com](https://okhodjaev.com/essays/the-institutional-gap/)

[7] Khodjaev, O. Essay 2 "The Transparency Trap." February 2026. [okhodjaev.com](https://okhodjaev.com/essays/the-transparency-trap/)

[8] Khodjaev, O. Essay 5 "The Colonial Pattern." March 2026. [okhodjaev.com](https://okhodjaev.com/essays/the-colonial-pattern/)

[9] Khodjaev, O. *Governance Briefs.* Analytical Note No. 9 "Why Governance Does Not Scale." June 2026. [okhodjaev.com](https://okhodjaev.com/governance-briefs/why-governance-does-not-scale/)

[10] Khodjaev, O. *Governance Briefs.* Analytical Note No. 4 "Audit Without Access." June 2026. [okhodjaev.com](https://okhodjaev.com/governance-briefs/audit-without-access/)

[11] OECD. *Recommendation of the Council on Artificial Intelligence.* 2019, updated 2024. [oecd.ai](https://oecd.ai/en/ai-principles)

[12] European Parliament and Council. *Regulation (EU) 2024/1689 on Artificial Intelligence (AI Act).* Chapter III, Section 2: Obligations for providers of high-risk AI systems. Annex IV: Technical documentation requirements. [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689)

[13] National Institute of Standards and Technology. *Artificial Intelligence Risk Management Framework (AI RMF 1.0).* January 2023. [doi.org/10.6028/NIST.AI.100-1](https://doi.org/10.6028/NIST.AI.100-1)

[14] Bai, Y. et al. "Constitutional AI: Harmlessness from AI Feedback." Anthropic, December 2022. [arxiv.org/abs/2212.08073](https://arxiv.org/abs/2212.08073)

[15] Ouyang, L. et al. "Training Language Models to Follow Instructions with Human Feedback." NeurIPS, 2022. [arxiv.org/abs/2203.02155](https://arxiv.org/abs/2203.02155)

---

*Oybek Khodjaev: systems transformation analyst, Founder & CEO of INVEXI LLC.
Former Deputy Governor (Deputy Khokim) of Samarkand Region. Previously, Treasury Director
and Deputy Chairman of the Management Board at JSC UzAgroIndustrialBank.
More than thirty years' experience in economics, banking, finance, and business
across Uzbekistan and the CIS.*

**Published** June 19, 2026

<a href="https://okhodjaev.substack.com" target="_blank">Substack</a> · <a href="https://x.com/O_Khodjaev" target="_blank">X.com</a> · <a href="https://www.linkedin.com/in/oybek-khodjaev/" target="_blank">LinkedIn</a>
