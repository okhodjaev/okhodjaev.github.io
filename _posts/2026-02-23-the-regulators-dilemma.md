---
title: "The Regulator's Dilemma: Why You Cannot Govern What You Cannot Keep Up With"
date: 2026-02-23
permalink: /essays/the-regulators-dilemma/
description: "AI regulators face an impossible trilemma: understand the technology, move quickly, maintain legitimacy. You can choose two. This essay traces that constraint from 1990s Uzbekistan capital markets to the EU AI Act."
tags: [AI governance, regulation, institutional design, systemic risk, emerging markets]
layout: single
author_profile: false
classes: wide
toc_icon: "file-text"
excerpt: "Every regulator facing a fast-moving technology confronts the same impossible constraint: understand it, move quickly, maintain legitimacy. Pick two. AI governance is attempting all three — and achieving none."
---

#### Contents

- [I. The Rules Arrived After the Game](#i-the-rules-arrived-after-the-game)
- [II. The Knowledge Problem](#ii-the-knowledge-problem)
- [III. The Speed Trap](#iii-the-speed-trap)
- [IV. The Legitimacy Paradox](#iv-the-legitimacy-paradox)
- [V. Why AI Makes the Trilemma Harder to Resolve](#v-why-ai-makes-the-trilemma-harder-to-resolve-under-current-institutional-forms)
- [Implications](#implications)
- [Signals to Watch](#signals-to-watch)
- [The Questions That Remain Open](#the-questions-that-remain-open)
- [Sources & Notes](#sources--notes)

---

*In 1995, I headed the Division of Securities and Investments at Uzagroindustrialbank (subsequently reorganized as Pakhta-Bank, and later transformed into Agrobank) in Tashkent — a unit spanning multiple departments, responsible for instruments that had barely existed on paper the year before. Uzbekistan had declared independence four years earlier, and a new securities-and-exchange legal framework had only recently been adopted. A short time after, the Central Bank and the Ministry of Finance jointly issued the Rules for the Issuance and Circulation of Bills of Exchange — allowing banks and enterprises to issue promissory notes for the first time.*

*Our bank became the first and largest issuer of transfer bills in the country, financing Uzbekistan's dominant cotton sector. And almost immediately, the gap between the written rules and operational reality began to open.*

*The regulations, as it quickly became clear, were raw. Incomplete. Untested. Every week we encountered situations the rules had not anticipated — no guidance, no precedent, nothing. As one of the leading practitioners working directly with these instruments, I began writing my own recommendations to the Central Bank on how to resolve problems the official documents had not foreseen. The regulator was learning from the market, not the other way around.*

*Then the counterfeits appeared. Bills of exchange began to be forged at scale. Issuers had no specialist laboratories to detect fakes. Enterprises accepted fraudulent instruments, released goods against them, and suffered losses. Prosecutors opened criminal cases across the country. Financial fraud involving bills spread to national scale — the instrument began functioning as a full substitute for cash, outside any meaningful oversight. Given that we were the largest issuer and cotton was the dominant sector of the agricultural economy, the dimensions of the fraud and the damage to the economic system were severe.*

*The regulator had no playbook. In the end, the response reached the highest political level and became categorical. Bill-of-exchange circulation was curtailed rapidly under acute operational and supervisory pressure, and the instrument wound down as an emergency measure. Not gradually. Not through refined regulation. Through an executive decision that ended the experiment.*

*I have been watching the same structural sequence unfold in AI governance for the past three years: an initial framework, deployment ahead of oversight, the emergence of threats the rules did not anticipate, and the question of what happens when the scale of damage demands a categorical response.*

---

The thesis is uncomfortable, but I think it is correct: institutions governing artificial intelligence today are not choosing poorly between available options. They are caught in a structural trap that has no clean exit. I call it the regulator's trilemma.

Every regulatory body facing a fast-moving technology must balance three demands simultaneously: **understand the technology** well enough to govern it effectively; **move quickly** enough to remain relevant before the technology outpaces the framework; and **maintain legitimacy** — the credibility and independence that makes regulation binding rather than decorative. These three demands are not merely difficult to satisfy together. In the context of frontier AI, they are structurally in tension. Satisfying any two requires sacrificing the third.

This is not a criticism of individual regulators. It is a description of institutional physics.

---

## I. The Rules Arrived After the Game

In the mid-1990s, Uzbekistan's Centre for Coordination and Control of the Securities Market — the country's first attempt at a capital markets regulator — faced a problem that had no precedent in its institutional memory. The financial instruments it was meant to oversee were themselves being invented. The legal framework for securities ownership was still being drafted. The professional norms for underwriting, trading, and disclosure had no local tradition to draw from.

The bill of exchange episode, which I described in the opening, was not an isolated failure. It was a structural demonstration of what happens when rules are drafted theoretically, without practitioners at the table, and without the possibility of testing them before deployment at scale. The same sequence repeated itself in the early 2000s with the first corporate bonds issued in Uzbekistan. There were rules. There was a theory. There had been no real-world trial. And the gap between the written framework and operational reality opened almost immediately — the same practitioners who had to manage that gap were, again, ahead of the regulator in understanding what was actually happening.

The regulator's response was reasonable and, in retrospect, instructive. It produced documentation: licensing frameworks, reporting requirements, disclosure standards. The documentation was serious and carefully prepared. But by the time each set of rules was consolidated, the market participants — adapting faster than any committee could convene — had moved to the next stage. The gap was not a failure of effort or intelligence. It was structural. The regulator was running a process that operated on institutional timelines against a market that operated on competitive ones.

This is the foundational mechanism: **regulatory processes are slower than the phenomena they regulate**. Not occasionally. Structurally.

What made the 1990s Uzbekistan case tractable — eventually — was that the instruments in question, however novel locally, had international precedents. Experienced advisors from international institutions could explain how a secondary bond market worked, because bond markets had existed for decades elsewhere. The regulatory gap could be closed, imperfectly but meaningfully, by importing institutional knowledge that already existed.

AI governance does not have this option. There is no close historical precedent for what frontier AI systems can do at comparable speed and generality — not because institutional memory is short, but because the capability curve is qualitatively different from previous transformative technologies. The knowledge gap is not geographic. It is temporal.

---

## II. The Knowledge Problem

Understanding a technology well enough to govern it is not the same as understanding it well enough to discuss it. Most AI governance frameworks today demonstrate the latter while struggling with the former.

The EU AI Act — the most comprehensive AI regulatory framework produced by any major jurisdiction — classifies AI systems by risk level and assigns corresponding obligations to developers and deployers \[1\]. This is a coherent and defensible approach. The problem is what it presupposes: that regulators can accurately identify which AI systems fall into which risk categories, and that this categorization will remain stable as the systems evolve.

Both assumptions are unstable at the frontier. The capabilities of large language models are not fully specified by their developers at the time of deployment. They emerge through interaction with users and contexts that no laboratory can fully anticipate \[2\]. Classifying a frontier system as "high risk" or "limited risk" requires technical judgment that most regulators do not yet possess at institutional scale — not because the people are unqualified, but because the evaluative science itself is immature.

The failure mechanism here is familiar from banking regulation: **the technical complexity of the instruments outpaces the evaluative capacity of the oversight body**. Rating agencies in 2006 and 2007 were assigning AAA ratings to mortgage-backed securities using models that could not capture the correlation structure of underlying assets under stress \[3\]. They were not lying. They were applying the best available methodology to instruments whose actual risk profile was not accessible to any existing methodology.

AI regulators are in an analogous position. The difference is that the financial instruments of 2007 were at least computable. The risk profiles of frontier AI systems — emergent capabilities, dual-use potential, interaction effects at scale — remain only partially measurable and highly sensitive to context and deployment conditions — including for the labs that build them.

---

## III. The Speed Trap

Regulatory processes operate on institutional timelines. Legislation is drafted, consulted, revised, passed, and implemented over years. In the interval between drafting and enforcement, the technology does not pause.

The EU AI Act provides the sharpest illustration. Initial proposals were tabled in April 2021 \[4\]. The final text was published in July 2024 \[1\]. Enforcement of the highest-risk provisions begins in 2025 and 2026 \[1\]. In the five years between the opening proposal and active enforcement, the frontier of AI capability moved from GPT-3 — which could produce plausible text — to systems capable of multimodal reasoning, code generation, agentic task execution, and scientific research assistance at a level that was not anticipated in the 2021 drafting process \[5\].

This is not a criticism of the European Commission. Five years is not slow for legislative process — it is, in fact, remarkably fast for regulation of this scope and complexity. The problem is that "remarkably fast for legislation" and "fast enough for frontier AI" are not the same standard.

The speed trap has a second dimension. Moving faster — issuing emergency guidance, bypassing normal consultation processes, publishing interim frameworks — trades speed for legitimacy. Regulation that appears rushed, under-consulted, or technically thin is more likely to be challenged, circumvented, or simply ignored by the entities it is meant to govern. Regulatory bodies that have moved fastest on AI — issuing rapid guidance without deep technical grounding — have sometimes found their frameworks contested on precisely those grounds.

The mechanism: **acceleration sacrifices the credibility that makes regulation effective**. Waiting preserves credibility but sacrifices relevance. There is no speed at which both are simultaneously maximized.

---

## IV. The Legitimacy Paradox

Legitimacy in regulation is earned slowly and lost quickly. It depends on demonstrated competence — the ability to understand what is being regulated — and on perceived independence from the entities being overseen.

Both dimensions are under pressure in AI governance. On competence: the most technically qualified people who understand frontier AI systems are, overwhelmingly, employed by the frontier AI companies themselves. The concentration of expertise is not accidental. It is a function of compensation, infrastructure access, and the simple fact that the technology is being built in those organizations and nowhere else at equivalent depth. Regulatory bodies that recruit aggressively — and several are trying — still face a structural lag \[6\].

On independence: the same concentration of expertise creates a structural risk of regulatory capture — when the regulated industry gradually shapes the frameworks meant to constrain it, not necessarily through bad faith, but through the simple fact that regulators depend on industry expertise to understand what they are regulating. The pattern is not hypothetical. It is well-documented in financial services, pharmaceuticals, and telecommunications \[7\].

What makes the AI case distinctive is the speed at which this dynamic operates. In previous industries, regulatory capture was a process measured in decades. In AI governance, the window between the establishment of oversight bodies and their exposure to industry influence is measured in months.

The legitimacy paradox: **the deeper the regulator's technical understanding, the more dependent they are on industry expertise; the more dependent on industry expertise, the more their independence is structurally compromised.** There is no clean resolution to this. It is a feature of the governance problem, not a fixable design flaw.

---

## V. Why AI Makes the Trilemma Harder to Resolve Under Current Institutional Forms

Previous generations of transformative technology — railroads, nuclear energy, pharmaceuticals, the internet — were each regulated with varying degrees of success. In each case, the regulator's trilemma existed but was, over time, tractable. The knowledge gap could be closed because the technology eventually stabilized. The speed gap could be managed because the rate of capability change was bounded. Legitimacy could be maintained because the regulatory community could develop independent technical expertise without complete dependence on industry.

Frontier AI differs in three ways that make each of these paths harder.

First, AI capabilities are not converging toward a stable state. Each generation of frontier models introduces qualitatively new capabilities — not incremental improvements on existing ones — that require new evaluative frameworks. The knowledge problem does not diminish with time; it resets with each capability threshold.

Second, the deployment cycle has accelerated to a point that breaks the traditional regulatory feedback loop. Pharmaceuticals take years from development to mass deployment. Nuclear plants take decades to build. Frontier AI systems can move from training to broad deployment on commercial timelines measured in months, and their interaction effects with society are observable in the deployment, not before it \[8\]. Regulators cannot study a technology before governing its deployment if deployment precedes study.

Third, the concentration of relevant expertise is more extreme than in any previous regulated industry. The technical knowledge required for meaningful safety evaluation of frontier AI systems is highly concentrated in a small number of private labs and adjacent research teams. Closing this gap through public-sector hiring would require a shift in compensation and institutional culture that no government has yet achieved at scale \[6\].

---

## Implications

- **Current AI regulation is not choosing which two of the three trilemma dimensions to prioritize.** It is attempting all three simultaneously and achieving none at sufficient depth. The result is frameworks that are comprehensive on paper and thin in enforcement — the same architecture of declared control that has preceded every major governance failure in recent institutional history.

- **The most effective AI governance constraints in the near term are likely to come from institutions with direct liability exposure, not regulatory bodies.** Insurance underwriters, institutional lenders, and government procurement officers face actual financial consequences when AI systems fail. This creates evaluation incentives that regulatory frameworks, structured around documentation compliance, do not currently replicate. The reason these actors can navigate the trilemma differently is structural: they are not required to meet the same public-law legitimacy standard, because they operate through contract and procurement discretion rather than statute. They can update their terms quarterly rather than waiting for legislative cycles. And they can purchase independent technical evaluation on a case-by-case basis, without building permanent bureaucratic capacity. They are constrained by a different kind of institutional physics — one that happens to align more directly with the actual risk profile of AI deployment.

- **Jurisdictions that openly acknowledge the trilemma and design governance architecture around it — rather than pretending to resolve it — will produce more durable frameworks than those generating comprehensive regulation without enforcement capacity.** Partial, honest governance is more functional than complete, performative governance. The honest admission that you cannot fully evaluate what you are regulating is not a weakness. It is the beginning of a realistic framework.

---

## Signals to Watch

- **Regulatory body technical hiring relative to frontier lab hiring.** If AI Safety Institutes are adding safety evaluators at one-tenth the rate that frontier labs are adding researchers, the knowledge gap is widening, not closing — regardless of the legislative output those institutes are producing.

- **The nature of the first major enforcement action against a frontier AI lab.** What triggered it? What technical evidence did the regulator marshal? Did the proceeding demonstrate independent evaluative capacity — or did it rely primarily on the company's own documentation? The answer will reveal more about governance capacity than any published framework.

- **AI liability insurance market development.** When commercial insurers begin systematically pricing AI liability coverage — and on what terms they exclude or include specific risk categories — this will constitute a market-based risk assessment that operates independently of regulatory definitions. Insurers have no interest in declaring risks safe that are not. Watch when their behavior diverges from industry public positioning.

---

## The Questions That Remain Open

In the mid-1990s, the Uzbekistan securities regulator did not resolve its trilemma. It managed it — imperfectly, under pressure, with outside help, and with significant costs along the way. Markets developed. Rules eventually caught up to some portion of reality. The gaps that remained were managed through institutional workarounds that no one designed but everyone understood.

That trajectory took roughly fifteen years. The question is whether AI governance has fifteen years. Or five years. Or five months. Or whether the window is already shorter than the time required to close the knowledge gap through any known institutional mechanism.

I do not know the answer. But I know that every governance framework that has declared the trilemma solved — that has claimed simultaneously to understand the technology, move quickly, and maintain legitimacy — has eventually been contradicted by the system it was governing.

The question I find myself returning to: if you were designing AI governance knowing you could only do two of the three well — which two would you choose, and what would you build that honestly acknowledged the third was sacrificed?

No one in any official governance process is currently asking that question publicly. I think that silence is itself a signal.

---

## Sources & Notes

**\[1\]** European Parliament. *Regulation (EU) 2024/1689 — Artificial Intelligence Act.* Official Journal of the European Union, 12 July 2024. [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689)

**\[2\]** Ganguli, Deep, et al. "Predictability and Surprise in Large Generative Models." *Proceedings of the 2022 ACM Conference on Fairness, Accountability, and Transparency (FAccT '22).* Association for Computing Machinery, 2022. [dl.acm.org](https://dl.acm.org/doi/10.1145/3531146.3533229)

**\[3\]** Financial Crisis Inquiry Commission. *The Financial Crisis Inquiry Report.* U.S. Government Publishing Office, 2011. [fcic.law.stanford.edu](https://fcic.law.stanford.edu/report)

**\[4\]** European Commission. *Proposal for a Regulation on Artificial Intelligence (AI Act).* COM(2021) 206 final, 21 April 2021. [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52021PC0206)

**\[5\]** Anthropic; OpenAI; Google DeepMind. Public capability disclosures and model cards, 2021–2025. Comparative timelines documented by CSET (Georgetown). [cset.georgetown.edu](https://cset.georgetown.edu)

**\[6\]** UK AI Safety Institute. *AI Safety Institute: Third Progress Report.* Department for Science, Innovation and Technology, February 2024. [gov.uk](https://www.gov.uk/government/publications/uk-ai-safety-institute-third-progress-report/ai-safety-institute-third-progress-report)

**\[7\]** Dal Bó, Ernesto. "Regulatory Capture: A Review." *Oxford Review of Economic Policy* 22(2), 2006. [academic.oup.com](https://academic.oup.com/oxrep/article-abstract/22/2/203/399738)

**\[8\]** Bommasani, Rishi, et al. *On the Opportunities and Risks of Foundation Models.* Stanford CRFM, 2021 (updated 2022). [arxiv.org](https://arxiv.org/abs/2108.07258)

**\[9\]** President of the Republic of Uzbekistan. *Decree No. UP-1738: On Measures to Streamline Bill-of-Exchange Circulation in the Republic.* 19 March 1997. Declared void 3 October 2012. [lex.uz](https://lex.uz/docs/168918)

**\[10\]** President of the Republic of Uzbekistan. *Decree No. 294: On the Reorganization of Uzagroindustrialbank into Pakhta-Bank.* 27 July 1995. [lex.uz](https://lex.uz/acts/466343)

Full essay and updated sources: [okhodjaev.com/essays/the-regulators-dilemma](https://okhodjaev.com/essays/the-regulators-dilemma/)

---

**Cite this work:** Khodjaev, O. (2026). *The Regulator's Dilemma: Why You Cannot Govern What You Cannot Keep Up With.* Zenodo. <a href="https://doi.org/10.5281/zenodo.19661370" target="_blank">doi.org/10.5281/zenodo.19661370</a>

---

*Oybek Khodjaev: systems transformation analyst, Founder & CEO of INVEXI LLC.
Former Deputy Governor (Deputy Khokim) of Samarkand Region. Previously, Treasury Director
and Deputy Chairman of the Management Board at JSC UzAgroIndustrialBank.
More than thirty years' experience in economics, banking, finance, and business
across Uzbekistan and the CIS.*
