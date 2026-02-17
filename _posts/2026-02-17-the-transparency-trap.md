---
title: "The Transparency Trap: Why More Data Does Not Mean More Accountability in AI Governance"
date: 2026-02-17
permalink: /essays/the-transparency-trap/
description: "AI governance instruments are rebuilding a familiar architecture: disclosure without enforceable accountability. The pattern has a name."
tags: [AI governance, institutional risk, regulatory capture, transparency, systemic risk]
classes: wide
---

#### Contents

- [I. The Architecture of Performative Disclosure](#i-the-architecture-of-performative-disclosure)
- [II. Window Dressing, Human Nature, and Regulatory Capture](#ii-window-dressing-human-nature-and-regulatory-capture)
- [III. The Speed Asymmetry](#iii-the-speed-asymmetry)
- [IV. What Accountability Actually Requires — and What It Costs](#iv-what-accountability-actually-requires--and-what-it-costs)
- [Implications](#implications)
- [Signals to Watch](#signals-to-watch)
- [The Questions That Remain Open](#the-questions-that-remain-open)
- [Sources & Notes](#sources--notes)

*In the early 1990s, I worked in a bank where the balance sheet was beautiful.*

Assets were properly classified. Capital ratios met regulatory requirements. Reports went to the Central Bank of Uzbekistan on schedule, formatted correctly, signed by the appropriate officers. On paper, the institution was sound.

Then a client's payment did not go through.

Then another. Then dozens. For years — not as isolated incidents, but as a recurring condition reported by clients across multiple banks and branches — payments were delayed or failed. The reason was structural: until autumn 2003, multi-branch banks operated decentralized correspondent accounts at the Central Bank. Each branch managed its own liquidity independently. A bank could present consolidated reports showing adequate resources while individual branches operated with effectively empty correspondent accounts. The reporting architecture was intact. The functional capacity to execute payments was not.

This was not fraud. It was something more instructive: a system that had learned to produce transparency without producing accountability.

I have been thinking about that period every time I read about AI governance frameworks.

---

**The thesis:** today's AI governance instruments — model cards, safety frameworks, voluntary commitments, ISO standards, red-teaming disclosures — are rebuilding a familiar architecture: disclosure without enforceable accountability.

The pattern has a name: **the transparency trap.**

*Transparency trap: the condition in which disclosure volume grows faster than verification capacity, consequence infrastructure, and enforcement mechanisms — creating the institutional appearance of accountability without its operational substance.*

Institutions caught in this trap are not dishonest. They are producing exactly what the system incentivizes: documentation that demonstrates governance without the infrastructure to make governance real. And the gap, when it finally closes, often closes suddenly — though rarely without warning signals that become obvious in retrospect.

---

## I. The Architecture of Performative Disclosure

When Uzbekistan inherited the Soviet banking system in 1991, it also inherited Soviet accounting logic: a plan of accounts designed to report to the state, not to manage risk. The transition to international accounting standards, substantially advanced by 1995 with direct assistance from international organizations and audit firms [7], was supposed to change this. In formal terms, it did. Banks began reporting in internationally recognized formats.

What did not change was the enforcement infrastructure. Regulators received better-formatted data. They did not receive the operational capacity to verify reported figures against real-time liquidity conditions. The decentralized correspondent account structure — maintained for twelve years, until the 2003 centralization reform — meant that consolidated reports and actual payment capacity remained structurally disconnected. The result was not system-wide collapse, but recurring payment delays reported across multiple branches and institutions during this period — consistent with the decentralized liquidity structure [7].

This distinction — between better data and better accountability — is precisely what ISO/IEC 42001:2023 cannot bridge on its own. The standard represents a genuine technical achievement: the first global framework for AI management systems, covering risk assessment, ethical considerations, data governance, and continuous improvement [1]. Organizations can now be certified against it.

But ISO/IEC 42001 is a management system standard. Certification assesses management system conformance — whether documented procedures exist and are followed — not model-level safety outcomes. A bank can hold full quality management certification and simultaneously experience recurring payment failures. An AI laboratory can maintain ISO/IEC 42001 compliance while deploying systems whose emergent capabilities — behaviors that appear at deployment scale and under adversarial pressure, but were not fully present during development testing — may exceed what current evaluation methods can fully capture [8]. The point is not incompetence; it is the structural limits of evaluation at deployment scale.

The standard measures the governance architecture. It cannot, by design, measure the gap between that architecture and operational reality.

To be clear: transparency is necessary. Better disclosure practices have genuinely improved baseline governance across industries. The argument here is not against transparency — it is about what transparency cannot do alone. Without independent verification, defined consequences, and real-time enforcement capacity, disclosure becomes the appearance of accountability rather than its substance.

*The lesson from Uzbekistan's banking transition: changing the reporting format does not close the enforcement gap. It can make the gap harder to see.*

---

## II. Window Dressing, Human Nature, and Regulatory Capture

It would be convenient to frame what follows as a story about bad actors. It is not.

Every organization that undergoes external audit prepares for that audit. Knowing the methodology, the criteria, the timeline — organizations naturally present their strongest position. This is rational, universal, and entirely predictable. It is human nature applied to institutional incentives.

In Uzbekistan's banking sector in the 1990s, this produced what practitioners called "window dressing": temporary adjustments to balance sheet positions around reporting dates, bringing key ratios into compliance, positions that reverted once the reporting period closed. The same pattern appeared in Western financial markets before 2008. Rating agencies assessed mortgage-backed securities against defined criteria. The criteria were met — methodically, professionally, with full documentation. The underlying risk was not captured by the criteria [4].

The voluntary commitments produced at the Bletchley Park AI Safety Summit of November 2023 and the Seoul AI Safety Summit of May 2024 follow the same structural logic [5]. The organizations signing them intended, at the moment of signing, to honor them. The question is not sincerity. The question is structural: voluntary frameworks, assessed against self-reported criteria, without independent verification infrastructure, reproduce window dressing conditions regardless of intent.

There is a second mechanism that compounds this problem: regulatory capture — the process by which regulated entities come to shape the rules governing their own regulation [3]. Industry input into governance design is not inherently illegitimate; it is often technically necessary, particularly in fast-moving domains where regulators lack deep expertise. The problem arises when industry input substitutes for independent verification and enforceable constraints — when the resulting standards reflect what current market leaders can demonstrate, rather than what public protection requires. In that configuration, compliance frameworks can, in practice, function as competitive moats: barriers that incumbents can meet through existing documentation infrastructure while new entrants face disproportionate compliance costs. The governance architecture becomes a market protection mechanism rather than a public protection mechanism.

*The lesson from banking audit cycles: when the rules of evaluation are known in advance, organizations optimize for the evaluation. When incumbents help write the rules, the rules reflect incumbents' capabilities. The evaluation measures readiness to be evaluated, not underlying condition.*

---

## III. The Speed Asymmetry

Window dressing describes what happens when disclosure is evaluated against known criteria. Speed asymmetry describes what happens when disclosure cannot even be independently verified — when the gap between reported and actual risk profiles is structurally inaccessible to oversight.

There is an important distinction between AI governance and previous governance failures that strengthens, rather than weakens, the concern.

In Uzbekistan's banking sector, the gap between reporting and reality existed partly because institutions themselves understood their risk profiles imperfectly. In AI development today, the asymmetry runs differently. The teams building frontier AI systems understand their systems' capabilities and limitations far better than any external regulatory body currently can. The gap is not ignorance on either side. It is structural. As of early 2026, independent technical evaluation capacity — with consistent access to model weights and training processes, and the authority to compel disclosure across major laboratories — still does not exist at routine scale in any major jurisdiction [6].

This is not a criticism of regulators. AI development is a young field relative to banking or pharmaceuticals, where decades of regulatory practice have built genuine verification expertise. The technical capacity required to independently assess emergent capabilities — particularly under novel deployment contexts and adversarial pressure — requires interpretability and evaluation methods that remain at the frontier of research, not established regulatory practice.

The competitive dynamics accelerating this gap are structural, not conspiratorial: investor pressure, market competition between frontier laboratories, the compounding momentum of each capability advance. These forces do not require bad intent to produce dangerous outcomes. They require only that the development cycle moves faster than the evaluation cycle — which it does, by design.

The pandemic offered a preview of what institutional lag looks like at acute scale. When governing systems optimized for stable conditions encountered a shock that moved faster than their adaptation capacity, the response required abandoning system-level management. Based on my direct experience managing regional crisis response in Samarkand Region in 2020 — with nearly four million residents — governing institutions shifted to case-by-case manual intervention. Each situation addressed individually, by human decision-makers with local judgment and local accountability.

That transition was difficult and costly. It was also possible, because the relevant decisions were local, granular, and human-executable.

The critical asymmetry with AI governance failure scenarios is this: when AI systems are deployed across critical infrastructure — finance, healthcare, logistics, communications — governance breakdown is harder to reverse at comparable scale. Rollback is non-trivial once systems are deeply integrated, and manual intervention cannot substitute for an integrated response when failures propagate across jurisdictions, institutions, and decision chains. The correction capacity that existed during COVID — imperfect, costly, but real — does not have a straightforward equivalent.

*The lesson: systems optimized for stable conditions fail suddenly under novel stress. The difference with AI is not that failure becomes more likely. It is that the correction window and correction mechanisms operate under fundamentally different constraints.*

---

## IV. What Accountability Actually Requires — and What It Costs

The Soviet planning system produced extraordinary quantities of data. Gosplan's reports were detailed, internally consistent, regularly updated, and formally verified by layers of institutional review. The data did not prevent institutional collapse because it was not connected to enforcement mechanisms with real consequences for non-compliance — and because those reviewing the data were not positioned to act on what the data would have revealed.

Real accountability requires three elements that transparency cannot supply alone.

First: **independent verification capacity** — the technical and institutional ability to assess reported figures against operational reality. In AI governance, this is nascent. The UK AI Safety Institute and its counterparts represent genuine institutional progress [6]. Their access remains limited in scope, voluntary in significant respects, and technically constrained by the current state of interpretability research. There is no broadly empowered, routine, independent verification regime with consistent access to model internals across frontier laboratories in any major jurisdiction.

Second: **consequences for misrepresentation** — legal and financial exposure that makes the gap between reported and actual risk profiles costly to maintain. This is almost entirely absent. No major jurisdiction has established liability frameworks that would make over-reported safety meaningful in financial or legal terms. Voluntary frameworks without liability exposure are structurally equivalent to banking capital requirements without supervisory enforcement — the form without the force.

Third: **real-time enforcement infrastructure** — the operational capacity to detect and respond to governance failures as they occur rather than retrospectively. Current oversight is episodic, event-driven, and dependent on voluntary disclosure.

What exists is disclosure. Disclosure is necessary. It is not sufficient.

For institutional investors and procurement officers, this structural gap has concrete financial implications. If liability legislation moves from discussion to enforceable statute in a major jurisdiction, AI companies currently operating under voluntary frameworks will face retroactive exposure that their governance documentation does not protect against — exposure that is not currently priced into valuations or procurement risk assessments. If independent audit becomes a mandatory procurement condition, the cost structure of AI development changes materially. If insurers begin pricing AI tail risk differently from AI companies' public communications — which historically precedes regulatory reckoning in complex risk domains — the enforcement gap will have become visible to institutions with real financial stakes.

For business leaders and risk officers, the key question is not whether current AI governance documentation is sincere. It is whether that documentation would survive a stress test it was not designed to face — and whether your organization's exposure has been assessed against that scenario rather than the documentation it relies on.

*The lesson from Soviet planning data: information without enforcement is not governance. It is the appearance of governance — which is more dangerous than its absence, because it creates institutional comfort with conditions that remain unaddressed.*

---

## Implications

The current generation of AI governance instruments is producing disclosure infrastructure faster than accountability infrastructure. Documentation sophistication is increasing. Verification capacity, consequence frameworks, and enforcement mechanisms are not keeping pace. This is the transparency trap: more information, wider gap, greater institutional comfort with a condition that resembles accountability without producing it.

ISO/IEC 42001 and equivalent standards will increasingly be used to demonstrate governance compliance in procurement decisions, regulatory filings, and public communications. Compliance with the standard is systematically easier to achieve than the safety outcomes the standard is intended to support. This is not a flaw in the standard. It is the predictable consequence of any framework that can be met through procedural compliance rather than outcome verification.

A compounding risk: regulatory arbitrage. As major jurisdictions advance AI governance requirements, development activities face incentives to migrate toward jurisdictions with weaker audit requirements — hosting and training infrastructure shifting while market access remains concentrated in regulated markets. This pattern is established in financial services and pharmaceutical development. The structural incentives for its appearance in AI governance are already present.

The organizations most likely to impose effective constraints are not the governance bodies producing disclosure frameworks. They are the institutions that price tail risk: insurers, institutional investors, trade finance regulators, and government procurement officers. When these institutions begin acting differently from AI companies' public communications — requiring verified rather than reported compliance, conditioning access on demonstrated rather than documented safety — the enforcement gap will have become visible to institutions with real stakes. That behavioral divergence is the most reliable leading indicator that the transparency trap is closing.

---

## Signals to Watch

* Whether AI liability legislation in any major jurisdiction moves from discussion to enforceable statute with meaningful financial consequences. Voluntary frameworks without liability exposure are structurally equivalent to banking capital requirements without supervisory enforcement.

* Whether independent technical audit — not self-reported, not voluntary — becomes a condition for high-risk AI deployment or public sector procurement in any major jurisdiction. The transition from voluntary to mandatory independent audit, with standardized incident taxonomies and penalties for non-reporting, is the structural threshold separating disclosure from accountability.

* Whether development activity migrates toward jurisdictions with weaker governance requirements while maintaining market presence in regulated markets. Migration at scale signals that governance frameworks are being optimized around rather than complied with.

* Whether behavioral divergence between AI companies' insurers and their public safety communications widens. Insurance underwriters price what they believe, not what they are told.

---

## The Questions That Remain Open

In autumn 2003, Uzbekistan's banking system completed the transition to a centralized correspondent account infrastructure [7]. Client payments began processing reliably. The reform that changed the situation was not better reporting standards or improved documentation. It was a change in the underlying operational infrastructure — the actual mechanism through which resources moved and accountability was enforced in real time.

The question for AI governance is structural: where is the equivalent of the centralized correspondent account? Not better model cards. Not more detailed voluntary commitments. Not additional ISO certifications. What is the infrastructure change — the shift in actual enforcement architecture — that connects reported AI risk to real consequences?

Three directions are visible from current policy trajectories. An international independent technical audit body for frontier AI systems, with routine access and defined legal standing. Mandatory liability exposure tied to the gap between reported and actual risk profiles, making over-reported safety financially consequential. Enforceable incident reporting requirements — with standardized taxonomies and penalties for non-disclosure — that make governance failures visible in real time rather than retrospectively.

None of these exist at operational scale. The 2003 banking reform in Uzbekistan required twelve years of recurring payment failures to become institutionally and politically possible. The question for AI governance is not whether equivalent infrastructure is needed. It is whether the waiting period — and the failures that make reform possible — must be paid in full before the institutional will to act appears.

*The transparency trap is not sprung by dishonesty. It is sprung by the institutional comfort of having something to show. For those governing AI, the question is whether what is being shown corresponds to what is actually there. For those investing in or procuring AI systems, the question is whether your risk assessment is based on the documentation — or on what the documentation would reveal under independent scrutiny.*

---

## Sources & Notes

[1] ISO/IEC 42001:2023 — Artificial Intelligence — Management Systems. Clause 1 (Scope): applicable to organizations providing or using AI-based products or services. Assesses management system conformance, not model-level safety outcomes. [iso.org](https://iso.org/standard/81230.html)

[2] ISO/IEC 23894:2023 — Information Technology — Artificial Intelligence — Guidance on Risk Management. [iso.org](https://iso.org/standard/77304.html)

[3] Stigler, George J. "The Theory of Economic Regulation." *Bell Journal of Economics and Management Science*, Vol. 2, No. 1, Spring 1971. Foundational framework on regulatory capture; widely applied to financial and technology governance contexts.

[4] Financial Crisis Inquiry Commission. *The Financial Crisis Inquiry Report.* U.S. Government Publishing Office, 2011. Chapters 8 and 11 on rating agency methodologies and the CDO risk misrepresentation mechanism. [fcic.law.stanford.edu](https://fcic.law.stanford.edu)

[5] Bletchley Declaration on AI Safety, November 1, 2023 (28 countries). Seoul Ministerial Statement for Advancing AI Safety, May 21, 2024. UK Department for Science, Innovation and Technology. [gov.uk](https://www.gov.uk/government/publications/ai-safety-summit-2023-the-bletchley-declaration)

[6] UK AI Safety Institute. *AISI's Approach to Evaluations*, 2024. [aisi.gov.uk](https://www.aisi.gov.uk). As of early 2026, no jurisdiction has established a broadly empowered, routine, independent verification regime with consistent access to frontier model weights and training processes, and with authority to compel disclosure across major laboratories.

[7] Central Bank of Uzbekistan (institutional history and regulatory timeline, including payment-system modernization culminating in the 2003 centralization of correspondent account infrastructure). Author's direct professional experience in the sector (UzAgroIndustrialBank / Agrobank, 1990s–2001). [cbu.uz](https://cbu.uz)

[8] Anthropic. *Responsible Scaling Policy*, September 2023. [anthropic.com](https://www.anthropic.com/index/anthropic-responsible-scaling-policy). See also: CSET Georgetown. "Evaluating the Social Impact of Generative AI Systems," 2023. [cset.georgetown.edu](https://cset.georgetown.edu)

Full essay and updated sources: [okhodjaev.com/essays/the-transparency-trap](https://okhodjaev.com/essays/the-transparency-trap/)

---

*Oybek Khodjaev: systems transformation analyst, Founder & CEO of INVEXI LLC.
Former Deputy Governor (Deputy Khokim) of Samarkand Region. Previously, Treasury Director and Deputy Chairman of the Management Board at JSC UzAgroIndustrialBank.
More than thirty years' experience in economics, banking, finance, and business across Uzbekistan and the CIS.*

**Published** February 17, 2026

[Substack](https://okhodjaev.substack.com) · [X.com](https://x.com/O_Khodjaev) · [LinkedIn](https://www.linkedin.com/in/oybek-khodjaev/)
