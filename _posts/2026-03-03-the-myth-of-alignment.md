---
title: "The Myth of Alignment: Why the AI Industry's Central Promise Is a Question of Power, Not Technology"
date: 2026-03-03
permalink: /essays/the-myth-of-alignment/
description: "AI alignment is not primarily a technical challenge. It is a question of power: who defines the values, who enforces them, and who bears the consequences when the gap between declared alignment and operational behavior can no longer be contained."
tags: [AI governance, alignment, institutional design, systemic risk, power, Global South]
layout: single
author_profile: false
classes: wide
toc_icon: "file-text"
excerpt: "The AI industry's central promise misframes the problem it claims to solve. Alignment is not a technical challenge. It is a question of power — dressed in the language of engineering."
---

#### Contents

- [I. The Technical Framing and What It Omits](#i-the-technical-framing-and-what-it-omits)
- [II. Institutional Misalignment: When Organizations Cannot Keep Their Own Promises](#ii-institutional-misalignment-when-organizations-cannot-keep-their-own-promises)
- [III. Societal Misalignment: The Power Question That Is Not Being Asked](#iii-societal-misalignment-the-power-question-that-is-not-being-asked)
- [IV. What Alignment Actually Requires](#iv-what-alignment-actually-requires)
- [V. Implications](#v-implications)
- [VI. Signals to Watch](#vi-signals-to-watch)
- [VII. The Questions That Remain Open](#vii-the-questions-that-remain-open)
- [Sources & Notes](#sources--notes)

---

*In the mid-1990s, I worked in a bank where the stated lending philosophy was conservative.*

Management documents described prudent credit assessment. Risk committees met regularly. Every loan file contained the appropriate due diligence. On paper, the institution was aligned to its declared principles: protect depositors, manage risk, serve the real economy.

The incentive structure said something different.

Loan officers were evaluated on volume. Branch heads were ranked by portfolio growth. Bonuses followed disbursement, not repayment. The people making daily credit decisions were not dishonest — they were rational. They responded to what the institution actually rewarded, not to what it formally declared. The gap between the bank's stated values and its operational behavior was not a failure of character. It was a failure of alignment — the kind that no policy document can close if the underlying incentive structure points in a different direction.

I have been thinking about that period every time I read about AI alignment.

---

**The thesis:** the AI industry's central promise — that advanced AI systems can be reliably aligned to human values and intentions — misframes the problem it claims to solve. Alignment is not primarily a technical challenge. It is a question of power: power over who defines the values, who enforces them, and who bears the consequences when the gap between declared alignment and operational behavior can no longer be contained.

We have seen this misframing before. And we know what happens when it goes uncorrected.

---

## I. The Technical Framing and What It Omits

The dominant discourse on AI alignment focuses on a specific and genuine problem: how to ensure that AI systems reliably do what their developers intend, rather than pursuing proxy objectives that diverge from human goals under novel conditions. This is real technical work. Researchers at Anthropic, DeepMind, and academic institutions are engaging with problems of genuine difficulty — reinforcement learning from human feedback, constitutional AI, scalable oversight \[1\]\[2\].

The misframing is not in the technical research agenda. It is in the industry-level promise that technical alignment can substitute for political legitimacy and institutional constraint.

"Aligned to human values" requires specifying *whose* values and *which* humans. The values encoded in current frontier AI systems reflect the preferences of the teams that trained them, the feedback of the populations that provided training data, and the deployment decisions of the organizations that released them. These are not universal human values. They are the values of a specific, geographically concentrated, economically distinct group of people making choices for the rest of humanity \[3\].

This is not an accusation. It is a structural observation. The same structural observation applies to every transformative technology that preceded AI: railroads, pharmaceuticals, financial instruments, the internet. In each case, capability concentrated in the hands of some, was developed according to values they considered self-evidently correct, and was deployed to everyone — including populations who had no input into the value choices embedded in the design.

Three questions the technical alignment debate systematically avoids:

*Who decides which values AI is aligned to?*  
*Who has the authority to enforce those choices once made?*  
*Who bears the financial and social cost when the mismatch becomes visible through failure?*

Until these questions are answered openly, "alignment" is not a solution. It is a placeholder for a power struggle that has not yet become fully visible. The technical framing makes the political question invisible. That is the first dimension of the myth.

---

## II. Institutional Misalignment: When Organizations Cannot Keep Their Own Promises

In November 2023, OpenAI's board fired Sam Altman for reasons that, by all available accounts, related to concerns about the pace and transparency of AI development relative to the organization's safety mission \[4\]. The board believed it was enforcing alignment — ensuring the organization stayed true to its founding commitment to develop AI safely for the benefit of humanity.

Within five days, Altman was back. The safety mission remained in the documents. The incentive structure — competitive pressure, investor expectations, the momentum of deployment — had won.

The episode matters not because of personalities, but because it revealed where governance authority actually sits under competitive pressure. This is not a story about OpenAI specifically. It is a demonstration of the structural condition that governs every frontier AI organization simultaneously.

I recognized it immediately. Not because it was dramatic, but because it was familiar.

In banking, the equivalent moment occurs when a risk officer raises a concern that would slow a profitable transaction. The concern is noted. The documentation is preserved. The transaction proceeds. The institution remains, in formal terms, aligned to its risk policy. In operational terms, the gap has widened.

The mechanism is **institutional misalignment at scale**: the gap between what an organization formally commits to and what its actual incentive structure rewards. This gap exists in every large organization. In most industries, it is managed — imperfectly but meaningfully — through external regulation, liability exposure, and market discipline. In the AI industry, as of early 2026, these mechanisms remain immature and uneven — not yet operating in a consistently enforceable way at frontier scale \[5a\].

The organizations building frontier AI are simultaneously: committed to safety missions that require slowing deployment; competing with each other and with well-resourced state programs in ways that reward acceleration; and accountable to investors whose returns depend on deployment, not restraint. These incentives cannot be resolved through better mission statements. They are structural.

Alignment documents that do not address the underlying incentive architecture are the equivalent of my bank's lending philosophy: sincere at the moment of drafting, irrelevant at the moment of decision.

---

## III. Societal Misalignment: The Power Question That Is Not Being Asked

Climate governance has demonstrated, across thirty years of negotiation, that collective action problems cannot be resolved through voluntary alignment to shared values when the costs of compliance are immediate and local while the benefits are deferred and diffuse \[6\]. The COP process produces declarations. Nations sign them with genuine intent. Then national interest, domestic politics, and competitive economic pressure reassert themselves. The alignment was real at the moment of declaration. The incentive structure governing daily decisions was never aligned.

AI governance is replicating this structure at considerably higher speed and with less time for correction.

The values currently embedded in globally deployed AI systems were shaped primarily in the United States, the United Kingdom, and China — the first two as the dominant centers of Western frontier AI development, the third pursuing parallel systems under state-directed value frameworks. Based on United Nations population estimates for 2025–2026, these three countries together account for approximately 22 percent of world population — roughly one person in five \[3, UN\]. The remaining four in five — some 6.4 billion people across every inhabited continent — had no meaningful input into the value choices encoded in systems that will increasingly govern how information is accessed, decisions are made, and opportunities are allocated across their societies.

The concentration is more extreme than even those numbers suggest. Public disclosures and workforce estimates across the leading frontier AI laboratories — OpenAI, Anthropic, Google DeepMind, Meta AI, and their closest peers — place combined relevant headcount at roughly ten to twenty thousand people \[7\]. That is an estimated 0.0002 percent of humanity: fewer than two people in every million, making consequential choices about values on behalf of more than eight billion. These individuals are not a representative sample of human civilization. They are drawn predominantly from a specific educational tradition, a specific economic stratum, and a specific cultural geography.

This matters because values are not portable. The assumptions embedded in AI systems about individual rights and collective obligations; family structure and kinship hierarchies; the relationship between citizen and state; the meaning of privacy; the legitimate limits of authority; attitudes toward tradition, social order, and deference — these are not universal. They are culturally specific in ways that researchers in San Francisco or London may not recognize precisely because their own cultural assumptions feel self-evidently correct.

The values of a farmer in West Africa — shaped by communal land traditions, oral historical memory, and kinship-based systems of justice — differ fundamentally from those of a civil servant in Central Asia, whose institutional instincts were formed by Soviet administrative culture, Islamic ethical tradition, centuries of nomadic and settled civilization, and post-independence transition. Both differ from a software engineer in California operating within an individualist rights framework, a common law tradition, and a secular consumer culture. These are not variations on a single human theme. They are genuinely different civilizational architectures — built from different histories, different institutions, different cosmologies, different relationships between the individual and the collective, different definitions of what constitutes a fair outcome or a legitimate decision. The traditions, customs, social norms, ethnic identities, and moral intuitions that constitute value systems in non-Western societies are not cultural decoration on top of a universal human baseline. They are the baseline — for the billions of people who hold them.

A governance framework that takes one of these civilizational architectures as the default for encoding into globally deployed AI systems executes a transfer of cultural authority — from the full diversity of human civilization to a specific subset of it — without deliberation, without consent, and without any mechanism for correction if that transfer proves harmful.

Historical deployments of system-shaping technologies show a recurring pattern: capability concentrates, externalities diffuse, and affected populations lack voice in design choices. The internet reproduced existing information hierarchies rather than dismantling them. Financial instruments developed in Western markets were exported with embedded assumptions that did not transfer cleanly into different institutional environments. The pattern is structural. It does not require bad intent. AI governance is not required to repeat it — but repeating it is the path of least resistance, and nothing in current governance architecture creates meaningful friction against it.

---

## IV. What Alignment Actually Requires

In banking, the alignment problem was not solved by better articulation of lending principles. It was addressed — partially, imperfectly, with significant failures along the way — through external mechanisms: capital requirements that made risk-taking costly, liability frameworks that connected decision-makers to consequences, and supervisory bodies with independent authority to examine actual behavior rather than declared policy.

None of these mechanisms were popular with the institutions they governed. All of them were resisted. Most of them were implemented only after failures that made the cost of misalignment visible to those with power to act.

The AI alignment debate, as currently structured, is attempting to solve the banking problem through better lending philosophy. The technical researchers are working on genuinely important questions. But technical alignment — ensuring AI does what developers intend — does not address institutional alignment (ensuring organizations do what they commit to) or societal alignment (ensuring the values embedded in AI reflect a legitimate, inclusive process of choice).

Without all three levels functioning simultaneously, technical alignment is necessary but not sufficient. A technically well-aligned AI system, deployed by an institution with structurally misaligned incentives, in service of values chosen by a fraction of humanity on behalf of all of it, remains a governance failure — regardless of how well the model performs on its benchmarks.

Real alignment requires three elements that mission statements cannot supply.

**First: independent verification capacity** — the technical and institutional ability to assess whether declared alignment corresponds to operational behavior. This is nascent in AI governance. No major jurisdiction has yet established a routinely enforced, independent verification regime with consistent access to frontier model internals across major laboratories \[5a\].

**Second: consequences for misrepresentation** — legal and financial exposure that makes the gap between declared and actual alignment costly to maintain. This remains weak, uneven, and largely untested at frontier scale. No major jurisdiction has established liability frameworks that would make misrepresented safety posture consequential in financial or legal terms for frontier AI deployment \[5b\].

**Third: legitimacy through inclusive process** — a mechanism by which the value choices encoded in globally deployed AI systems reflect something broader than the preferences of the teams that build them. This does not yet exist in an operational form that would plausibly scale to frontier systems.

---

## V. Implications

- The AI alignment debate, as currently constituted, addresses the least difficult version of the problem: ensuring AI systems do what their developers intend. The harder versions — ensuring developers' intentions reflect genuine institutional commitments, and ensuring those commitments reflect a legitimate, inclusive process of societal value choice — are structurally absent from mainstream governance discussion.

- The organizations most likely to impose effective near-term constraints on AI development are not the governance bodies producing alignment frameworks. They are the institutions with direct liability exposure: insurers who price model failure, procurement officers who condition access on demonstrated rather than declared alignment, regulators in jurisdictions with enforceable liability standards. When these actors begin requiring evidence of alignment rather than documentation of alignment processes, the mismatch will have become visible to people with real stakes.

- The Global South and Central Asia alignment deficit is not a peripheral concern. It is a governance vulnerability at the level of societal legitimacy. AI systems deployed globally but value-aligned to a fraction of humanity will face legitimacy crises that no technical safety framework is designed to address. This is not a prediction. It is a structural condition, visible in every previous deployment of system-shaping technology at comparable scale — and one that has never self-corrected through the goodwill of those holding the concentrated capability.

---

## VI. Signals to Watch

- Whether any major AI governance framework requires demonstrated participation of non-Western, non-OECD populations in value alignment processes — not as users or feedback providers, but as decision-makers in the value choices embedded in frontier systems. The absence of this requirement, as frameworks proliferate, is itself a signal.

- Whether AI liability frameworks in any major jurisdiction impose consequences on organizations for the gap between declared alignment commitments and operational deployment behavior — creating institutional alignment through market discipline rather than voluntary commitment. Voluntary frameworks without liability exposure are structurally equivalent to banking capital requirements without supervisory enforcement.

- Whether institutional investors begin conditioning AI company valuations on evidence of alignment between stated safety missions and actual resource allocation between safety and deployment teams. When capital begins pricing the institutional alignment gap, the market has recognized what governance has not.

- Whether behavioral divergence between AI companies' insurers and their public safety communications widens. Insurance underwriters price what they believe, not what they are told. That divergence, when it appears consistently, is the most reliable leading indicator that the gap between declared and operational alignment has become visible to institutions with real financial stakes.

---

## VII. The Questions That Remain Open

My bank eventually developed better risk management. Not because management became more committed to its stated principles. Because the external environment — regulatory requirements, supervisory scrutiny, capital standards — made the cost of misalignment visible and consequential.

The question for AI alignment is not whether the technical problem may be solvable to a meaningful degree given enough research and time. It may well be. The question is whether the institutional and societal alignment problems will be addressed before or after a failure that makes them impossible to ignore — and whether, by the time that failure occurs, the correction window will still be open.

Three essays in this series have examined how institutions claim control they do not have (Essay 1), produce transparency without accountability (Essay 2), and face structural trilemmas that governance architecture is not designed to resolve (Essay 3). This essay adds a fourth observation: the entity that AI is being aligned to — "humanity" — is not a single actor with coherent values. It is more than eight billion people with genuinely different civilizational traditions, moral frameworks, and legitimate interests, most of whom had no voice in the choices being made on their behalf.

The question I find myself returning to: if alignment means ensuring AI reflects human values — which humans, which values, through which process of deliberation, enforced by whom, with what recourse for those who were never asked?

Until that question is answered openly, "alignment" is not a solution to the governance problem. It is the governance problem — dressed in the language of engineering.

*The mismatch between what a system declares and what it actually does has never, in my experience, closed gradually. It becomes visible through failure — often under the worst conditions for correction.*

***Who is deciding what AI should be aligned to — and what gives them that authority over the rest of us?***

---

## Sources & Notes

**\[1\]** Bai, Yuntao, et al. "Constitutional AI: Harmlessness from AI Feedback." Anthropic, December 2022. [arxiv.org/abs/2212.08073](https://arxiv.org/abs/2212.08073)

**\[2\]** Leike, Jan, et al. "Scalable agent alignment via reward modeling." DeepMind, 2018. [arxiv.org/abs/1811.07871](https://arxiv.org/abs/1811.07871)

**\[3\]** Birhane, Abeba, et al. "The Values Encoded in Machine Learning Research." *Proceedings of the 2022 ACM Conference on Fairness, Accountability, and Transparency (FAccT '22).* [dl.acm.org/doi/10.1145/3531146.3533083](https://dl.acm.org/doi/10.1145/3531146.3533083). Population figures: United Nations, *World Population Prospects 2024.* [population.un.org](https://population.un.org)

**\[4\]** Removal of Sam Altman from OpenAI, November 2023. Sources: The New York Times; Financial Times; The Verge. Altman removed November 17, reinstated November 22, 2023.

**\[5a\]** UK AI Safety Institute. *AISI's Approach to Evaluations*, 2024. [aisi.gov.uk](https://www.aisi.gov.uk). As of early 2026, no major jurisdiction has established a routinely enforced, independent verification regime with consistent access to frontier model internals across major laboratories.

**\[5b\]** OECD. *OECD AI Policy Observatory — Liability and Accountability Frameworks*, 2024. [oecd.ai](https://oecd.ai). As of early 2026, no major jurisdiction has established enforceable liability frameworks connecting frontier AI deployment decisions to financial consequences for misrepresented safety posture.

**\[6\]** IPCC. *Synthesis Report of the IPCC Sixth Assessment Report (AR6).* Geneva, 2023. [ipcc.ch](https://www.ipcc.ch)

**\[7\]** Workforce estimates for frontier AI laboratories (OpenAI, Anthropic, Google DeepMind, Meta AI) based on publicly disclosed headcount figures and industry reporting, 2024–2025. Sources include company announcements, LinkedIn workforce data, and SignalFire *State of Talent Report*, 2025. [fortune.com/2025/06/03/openai-deepmind-anthropic-loosing-engineers-ai-talent-war](https://fortune.com/2025/06/03/openai-deepmind-anthropic-loosing-engineers-ai-talent-war)

**\[8\]** Prabhakaran, Vinodkumar, et al. "Cultural Incongruencies in Artificial Intelligence." Google Research, 2022. [arxiv.org/abs/2211.05100](https://arxiv.org/abs/2211.05100)

**\[9\]** Stigler, George J. "The Theory of Economic Regulation." *Bell Journal of Economics and Management Science*, Vol. 2, No. 1, Spring 1971.

Full essay and updated sources: [okhodjaev.com/essays/the-myth-of-alignment/](https://okhodjaev.com/essays/the-myth-of-alignment/)

---

**Cite this work:** Khodjaev, O. (2026). *The Myth of Alignment: Why the AI Industry's Central Promise Is a Question of Power, Not Technology.* Zenodo. <a href="https://doi.org/10.5281/zenodo.19661522" target="_blank">doi.org/10.5281/zenodo.19661522</a>

---

*Oybek Khodjaev: systems transformation analyst, Founder & CEO of INVEXI LLC. Former Deputy Governor (Deputy Khokim) of Samarkand Region. Previously, Treasury Director and Deputy Chairman of the Management Board at JSC UzAgroIndustrialBank. More than thirty years' experience in economics, banking, finance, and business across Uzbekistan and the CIS.*
