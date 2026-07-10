---
title: "The Access List"
date: 2026-07-13
permalink: /analysis/the-access-list/
description: "An export-control directive against access to a deployed frontier model was written against a category of person, not against a country. What that means for institutions whose operations depend on capability licensed elsewhere."
tags: [AI governance, export controls, access continuity, Central Asia, sovereignty, procurement]
layout: single
author_profile: false
classes: wide
toc_icon: "file-text"
excerpt: "The operative criterion was not where the system was deployed. It was who was using it."
---

#### Contents

- [I. Two Interventions, Correctly Dated](#i-two-interventions-correctly-dated)
- [What the Record Shows and What It Does Not](#what-the-record-shows-and-what-it-does-not)
- [II. Three Mechanisms, Not One](#ii-three-mechanisms-not-one)
- [III. The Criterion Was Not Geography](#iii-the-criterion-was-not-geography)
- [IV. What a Dependent Institution Actually Holds](#iv-what-a-dependent-institution-actually-holds)
- [V. The Hedge and Its Price](#v-the-hedge-and-its-price)
- [Implications](#implications)
- [Signals to Watch](#signals-to-watch)
- [Sources & Notes](#sources--notes)

*The operative criterion was not where the system was deployed. It was who was using it.*

---

## I. Two Interventions, Correctly Dated

On 12 June 2026, at 5:21 pm Eastern Time, Anthropic received an export control directive from the United States government, issued under national security authorities, suspending all access to its Fable 5 and Mythos 5 models by any foreign national, whether located outside the United States or inside it, including the company's own foreign-national employees. To comply, Anthropic disabled both models for every customer.[1]

The directive did not state the specific national security concern behind it. The company's understanding of that concern was reconstructed rather than received: it believed the government had learned of a method for bypassing the model's safeguards. The evidence supplied was verbal. Anthropic reviewed a demonstration, concluded that the vulnerabilities identified were minor and discoverable by other publicly available models without any bypass, complied with the directive, and publicly disagreed with it.[1] Export controls were lifted on 30 June and access was restored on 1 July: eighteen days from directive to lifting, nineteen to restoration.[2][3]

Ten days before that directive, on 2 June, the President had signed Executive Order 14409, "Promoting Advanced Artificial Intelligence Innovation and Security."[8] The order establishes a voluntary framework under which a developer may give the federal government access to a designated "covered frontier model" for up to thirty days before releasing it to trusted partners, and may collaborate with the government on selecting those partners. Section 3(c) states that nothing in the section authorizes the creation of a mandatory governmental licensing, preclearance, or permitting requirement for the release of new AI models, including frontier models. The order gives the Secretary of the Treasury, the Secretary of War acting through the Director of the National Security Agency, and the Secretary of Homeland Security acting through the Director of CISA, sixty days, until 1 August 2026, to design that voluntary framework and a classified benchmarking process under which the Director of the NSA determines which models are covered.

Thirteen days after the Anthropic directive, on 25 June, OpenAI told employees that GPT-5.6 would not launch broadly. The Office of the National Cyber Director and the Office of Science and Technology Policy had asked the company to stagger the release while federal agencies evaluated the model's capabilities.[4] Commerce Secretary Howard Lutnick called Sam Altman directly and warned against proceeding without sign-off from agencies beyond Commerce.[5] From 26 June, the models were available only through the API and Codex, and only to roughly twenty vetted organizations whose identities OpenAI had shared with the government. An internal memo, known through reporting by The Information, described the government as approving access customer by customer.[5][6] The Commerce Department's Center for AI Standards and Innovation completed its review, and broad availability began on 9 July.[7]

The administration then declined to describe what it had done. A White House spokesperson told CNBC that no green light, approval, or clearance had been given, that no such permission is required or granted, and that release decisions rest entirely with the companies.[7]

The obvious objection to reading these episodes as anything other than prudent governance is that a state confronting a dual-use capability of uncertain reach has both the right and the duty to intervene. That objection is correct. It does not need to be raised from outside the industry, because it has already been answered from within it. Anthropic's stated position is that government should be able to block unsafe deployments, provided it does so through a statutory process that is transparent, fair, clear, and grounded in technical facts. Its assessment of the directive it received was that "this action does not adhere to those principles."[1]

The question, then, is not whether the state had grounds to act. It is what follows for institutions downstream of an action whose criteria, procedure, duration, and appeal mechanism are written nowhere.

---

## What the Record Shows and What It Does Not

The following are documented: the dates; the extraterritorial scope of the 12 June directive and its operative criterion; the absence of a stated concern in the directive letter; the public disagreement of the company subject to it; the text of Executive Order 14409 and its sixty-day design deadline; the restriction of GPT-5.6 to vetted organizations between 26 June and 9 July; the White House denial; the existence and current composition of OpenAI's supported-country list; the publication of the Framework for Artificial Intelligence Diffusion in January 2025 and its rescission in May 2025; and the concentration of AI supercomputing capacity in a small number of jurisdictions, within the coverage limits that the underlying datasets themselves disclose.

From these facts one inference follows with reasonable confidence. A review process operated in late June against a frontier model, with the government participating in the selection of who could use it, before the framework that the governing executive order requires to be designed had been designed. Nothing was violated: participation was voluntary in law. The gap is between the declared content of the instrument and its operational effect, and Section II examines it.

Several things do not follow. There is no public indication that any Central Asian jurisdiction faces imminent reclassification of its AI access. The parallel drawn in Section IV between correspondent-banking de-risking and compute access is an analytical hypothesis about a shared logic, not a forecast that the logic will be applied. And the legal question of whether export control authority extends to live API inference delivered over the internet has been raised in commentary and remains unresolved. Nothing here should be read as asserting that it has been settled.

---

## II. Three Mechanisms, Not One

Three distinct instruments are at work in the events above. Treating them as a single system is the most common error in commentary on this subject, and the one that most weakens the resulting analysis.

The first is **model-release gating**: a relationship between the United States government and an American laboratory, conducted under an executive order that expressly disclaims any mandatory licensing or preclearance requirement, in which the timing and the initial customer set of a domestic release are nonetheless negotiated. It is new, it operated twice within a month, and it is the only one of the three that produced headlines.

The second is **API country policy**: a relationship between a private company and a foreign customer, governed by commercial terms of service written in the shadow of sanctions and export law. OpenAI operates on a default-deny basis, publishing a list of supported countries and territories and warning that access from outside it risks account suspension.[9] Uzbekistan appears on that list. Russia and Belarus are excluded from it. In mid-2024, OpenAI tightened enforcement against traffic originating in unsupported jurisdictions, including China, Russia, Iran, and North Korea.[10] Precision matters here: that was an intensification of enforcement against jurisdictions already outside the list, not a removal of jurisdictions from it. The two are different events, and they are routinely conflated.

The third is **export control over chips and model weights**: a relationship between a state and a jurisdiction. In January 2025, the outgoing administration published the Framework for Artificial Intelligence Diffusion, sorting the world into three tiers with graduated access to advanced chips and controlled model weights.[11] It drew immediate objection, including from European partners such as Portugal and Austria, assigned to the middle tier alongside most of the world, and it was rescinded in May 2025 before its compliance deadlines took effect.[12] What replaced it is not the absence of rules. It is a fragmented, bilateral policy in which export and access decisions operate as instruments of political and commercial leverage rather than as a codified standard against which a government or a company can plan.[13] For a jurisdiction in the middle tier, a published and unequal framework at least offers something to argue with. A discretionary regime negotiated case by case offers neither an argument nor a plan.

Return now to the first mechanism, because it is the one where the codified boundary can be read directly. Executive Order 14409 says that nothing in it authorizes mandatory licensing, preclearance, or permitting. It contemplates a voluntary thirty-day access period and collaborative selection of trusted partners. It does not describe approval of individual customers, and it sets 1 August 2026 as the deadline for designing the framework and the classified benchmarking process that would determine which models fall within it.

In late June, a model was withheld from broad release pending federal review, the government participated in deciding which organizations could use it during that period, an internal memo described approval proceeding customer by customer, and the administration afterwards stated that no approval had been given and that none is required. Nothing in that sequence required the creation of a mandatory regime. Participation was voluntary in law and no one was compelled. What operated was voluntary cooperation in form, and something functionally close to preclearance in effect, before the framework meant to structure it existed, against criteria that are not publicly specified, with no route of appeal.

This is the gap between declared control and operational control. The declared instrument states what the voluntary framework does not authorize: mandatory preclearance. The observed practice produced a comparable operational effect through formally voluntary cooperation, without requiring the creation of the mandatory regime the order expressly disclaims. The order was not contravened. It was, in the narrow sense that matters to a dependent institution, beside the point.

Institutional mismatch is the framework's name for the underlying condition: the categorical incompatibility between governance architectures built for slower, territorially bounded, physically verifiable systems and the velocity of what they are meant to govern. The order was signed on 2 June and gives its own drafters until 1 August to build the procedure. Two frontier models were gated in the interval. The mismatch leaves the codified boundary incomplete. Sovereign override can then operate within that incompleteness, not by breaking a finished rule, but by acting where the rule has not yet been finished.

The adjacent instrument tells the same story more slowly. On 29 January 2024, the Bureau of Industry and Security issued a proposed rule requiring American infrastructure-as-a-service providers and their foreign resellers to maintain customer identification programs, and to report transactions with foreign persons that could result in training a large AI model with capabilities usable in malicious cyber activity.[14] The comment period closed on 29 April 2024.[15] No final rule appears in the record reviewed for this analysis. Codified governance moves in institutional time. Discretionary intervention moves in operational time. Both belong to the same state.

The material substrate beneath all three mechanisms is the same. The Federal Reserve's comparative assessment places United States control of cumulative AI supercomputer capacity at roughly seventy-four percent, China at fourteen, and the European Union at under five.[16] The underlying dataset covers an estimated ten to twenty percent of global capacity, a limitation its authors state plainly, and individual country shares could differ by several percentage points.[17] The claim these figures support is therefore not that everyone else is negligible. It is narrower, and it is sufficient: for most jurisdictions, access to frontier-scale capability remains mediated by infrastructure, models, or supply chains concentrated primarily in the United States and China.

---

## III. The Criterion Was Not Geography

Return to the directive of 12 June and read what it actually did.

It did not suspend access in a country. It did not add a jurisdiction to a list or remove one from it. It suspended access for **any foreign national**, wherever located, including foreign nationals working inside the United States for the American company that built the model. The operative criterion was the nationality of the user, applied extraterritorially, without regard to where the system ran or which government held jurisdiction over the customer.

This is a documented instance of export control applied directly to access to a deployed frontier model. Its criterion was a category of person.

Two channels of exposure follow from it, and they are not the same. An Uzbek engineer employed by an American firm, and an Uzbek researcher holding credentials for the model, fell directly within the directive's stated criterion: they are foreign nationals, and the criterion names foreign nationals. An Uzbek bank running inference against the same models would have lost access through a different route. It is a legal person, not a national of anywhere. It lost access because Anthropic, unable to verify the nationality of every user in real time, disabled the models for all customers in order to comply.[1] Direct criterion exposure and compliance spillover are distinct mechanisms with a common origin, and an institution mapping its own risk needs to know which one it is subject to.

In neither case was a decision taken about Uzbekistan. No such decision was required. The mechanism did not pass through Uzbekistan at all.

Everything in the preceding sections was, to this point, an argument about concentration and dependency. This is not an argument. It is a documented event of stated scope, published by the company that complied with it. It removes the extrapolation that commentary on this subject usually requires, and it removes it in the direction of the more uncomfortable finding. The country-level access architecture that a dependent jurisdiction might reasonably plan around is not the only architecture available, and on the one occasion the instrument was used, it was not the one deployed.

A clarification is necessary here, because it determines whether this analysis is diagnosis or accusation. The structural point is not about Washington. Sovereign override capacity follows the concentration of infrastructure. Were frontier capability materially concentrated in another jurisdiction, the state holding that infrastructure would possess the corresponding capacity to condition access to it, and the analytical question would be identical. What is under examination is an architecture of dependency, not the conduct of a particular government. The distinction matters because the first is a durable structural feature and the second is a passing political fact.

This is also where the structural position that this framework defines as the Global South, understood not as a geography but as a set of four conditions (consumption without design, subordination without representation, responsibility without control, and sovereignty without material power), stops being an abstraction.[21] None of the four can be resolved unilaterally by a state occupying that position, because none of them is generated by that state's own policy.

Whether export control authority reaches live inference delivered over an API remains an open legal question. It has been raised. It has not been answered. The instrument built to address the adjacent question of foreign access to American compute has been sitting at the proposal stage since 2024, and the framework governing pre-release review of frontier models was, at the time both interventions occurred, still awaiting design. That is the state of the record, and it is the reason institutional planning cannot proceed on the assumption that the boundary is fixed.

---

## IV. What a Dependent Institution Actually Holds

There is a temptation, having established the above, to apply the enforcement test this series developed in Essay 7: real enforcement requires halt authority, independent access, and consequences for misrepresentation. Applied here, the test would find all three absent and pronounce the dependent state powerless.

The test does not belong here. It describes the conditions under which a regulator can oversee a regulated entity. A state that is a customer of a foreign provider is not that provider's regulator, and it neither has nor should be expected to have halt authority over a decision taken by another sovereign. To demand it is a category error, and category errors weaken an analytical framework faster than factual mistakes do.

The framework's own dependency architecture describes the position correctly.[24]

**Asymmetric dependency** is the relationship in which one party can exit without material cost while the other faces operational collapse, which renders the dependent party's governance claims and negotiating positions structurally non-credible. That is the position of any institution whose core process runs on a foreign frontier model.

**Exit cost** is the total institutional and operational cost of withdrawing from an adopted system: technology replacement, retraining, data loss. Higher exit cost means less real control, whatever the contract says.

**Reversibility gap** is the distance between the formal ability to deactivate a system and the institutional capacity to do so without operational collapse. It widens as dependency deepens and human competence atrophies. On 12 June, an unknown number of organizations discovered the width of their own gap without having chosen to measure it.

**Vendor dependency** is the condition in which the rights to audit, replace, or exit are defined by the provider's contractual architecture rather than by the deploying institution's own governance framework. Those rights are fixed at signature. They cannot be recovered afterward from a position of established dependence, which is the structural condition Analytical Note No. 7 of this series examined in the context of public procurement.[25]

Beneath all four sits **material predetermination**: the physical configuration of compute, energy, and fabrication infrastructure constrains the choice set before any policy deliberation begins. This is the limit Essay 10 named as the limit of matter.[22]

None of this is uniform across a country. A central bank operating a supervisory analytics function, a commercial bank running credit scoring, a ministry using generative tools for document processing, an operator of critical information infrastructure, and a university are five different risk architectures, with different contracts, different data, different substitutability, and different consequences of a two-week interruption. The useful formulation is not that Uzbekistan depends. It is that institutions in Uzbekistan acquire different forms of provider dependency according to where AI enters the operational stack, and the diagnostic must be run at that level.

One analogy, offered as an analogy and not as a prediction. Correspondent banks across the CIS have spent a decade managing de-risking and secondary-sanctions exposure that arises substantially, though not exclusively, from the status of a neighbouring jurisdiction rather than from their own conduct. The logic by which adjacency generates exposure in financial compliance is structurally similar to the logic by which nationality generated exposure on 12 June. That similarity is a reason to map the risk now. It is not evidence that any reclassification of Central Asian access is under consideration, and no public information suggests that it is.

---

## V. The Hedge and Its Price

The obvious response is diversification toward Chinese open-weight models: Qwen, DeepSeek, Kimi. Two corrections are needed before that response can be assessed.

The first is technical. Open weights can be downloaded and served on any infrastructure, including domestic infrastructure. Using a Chinese open-weight model is not the same as depending on Chinese-hosted infrastructure, and conflating the two obscures what the actual dependency is: the update cycle, the provenance and composition of the training data, the architectural decisions embedded in the weights, and the absence of any independent means of establishing what the system was optimized for. That is a different dependency from access revocation, and in one respect a deeper one, because it never announces itself by switching off.

The second is institutional. Diversification does not create technological independence, and this analysis does not recommend it as though it did. What it does is more modest and more real. It reduces single-provider exposure, lowers exit cost, creates fallback capacity, and improves the negotiating position of the buyer. In the terms of this framework, diversification does not remove structural dependency, but it can materially reduce asymmetric dependency. The distinction is worth holding. Collapsing it into a binary between independence and subjection produces analysis less useful than the situation requires.

It also carries a cost that must be stated plainly for the institutions this analysis addresses. For an Uzbek bank operating under secondary-sanctions exposure, adopting infrastructure or model provenance associated with a jurisdiction under United States scrutiny is itself a compliance event, to be assessed against the same risk register that governs correspondent relationships.

And there is an exposure that runs continuously rather than episodically, which the entire discussion of access continuity tends to displace. A bank that builds credit scoring on a foreign API and transmits customer-level data across jurisdictional boundaries is not exposed principally on the day the API is switched off. It is exposed every day that data crosses into a jurisdiction whose disclosure obligations, retention rules, and government access procedures it does not control and cannot audit. Pseudonymisation, feature minimisation, a local preprocessing layer, or a regionally hosted endpoint can narrow that exposure, and whether they do is an architectural question that most deployments never explicitly answer. Access interruption is a rare event with heavy consequences. Loss of control over cross-border data flows, where it occurs, operates every day the system runs.

There is a second-order consequence worth naming and not developing here. The concentration that determines who can provide frontier capability also shapes who can independently test the claims made about it. These are distinct dependencies. Losing access is a problem of operational continuity; lacking the capacity to verify a provider's assertions is a problem of evidence. They are distributed along much of the same infrastructure map. An institution can retain uninterrupted access to a frontier system while remaining unable to establish independently whether that system performs, fails, or changes in the ways its provider states. Access dependence and verification dependence should be treated separately, though not as unrelated. The second is examined in Analytical Note No. 10 of the Governance Briefs series.[18]

---

## Implications

For institutions in Uzbekistan and comparable jurisdictions, the operative conclusion is narrow and actionable: **access continuity belongs in the risk register as a category of its own**, distinct from the cybersecurity and data-governance categories that existing frameworks already name.

Presidential Decree No. PP-204 of 26 May 2026, on expanding the popularisation of financial services and support for small and medium-sized business, specifies cybersecurity audits and digitalization compliance audits on defined cycles.[19] Law ZRU-1115 on Artificial Intelligence, Article 7¹, establishes requirements for reliability, safety, and ethical conformity.[20] Neither instrument names the possibility that the capability underlying a deployed system becomes unavailable through a decision taken in the provider's jurisdiction, on criteria not disclosed, with no notice and no appeal. On 12 June that possibility ceased to be hypothetical, and the interruption lasted nineteen days for a company operating inside the jurisdiction that issued the directive. There is no basis for assuming a foreign customer would fare better.

A minimum composition for the category, specified at the level of a particular deployment rather than a country:

the provider's unilateral right to terminate or suspend service, and any notice period attached to it; the terms governing data processing, retention, and localization; data portability and model portability; the existence of a tested fallback provider under a different jurisdiction; periodic continuity testing rather than contractual assertion; a stated recovery time objective and recovery point objective for the dependent process; a documented minimum manual operating capacity, exercised at intervals rather than assumed; and jurisdictional exposure arising from the nationality of personnel with access to the system.

That final item appears in no continuity framework known to this author. It follows directly from the operative criterion of 12 June.

None of this constitutes governance of AI, and it should not be presented as such. It is what Essay 12 identified as the governance residual: the partial, asymmetric mechanisms that retain operational leverage after formal governance capacity has been lost, among them procurement conditions and contractual audit rights.[23] States that do not possess frontier-scale compute cannot exercise full control over the stack. They can determine how dependence on the stack is embedded in their own institutions, and how much human competence is preserved alongside it. That is a smaller claim than sovereignty. Unlike sovereignty, it is available.

The honest institutional position is not that the risk has been managed. It is that the boundary of operational control has been located, and written down.

---

## Signals to Watch

Whether the Bureau of Industry and Security finalizes the 2024 proposed rule on infrastructure-as-a-service customer identification, and whether the final text treats inference access as distinct from model training.

Whether the voluntary framework and the classified benchmarking process required by Executive Order 14409 are delivered by their 1 August 2026 deadline, and whether the published framework specifies criteria, notice, duration, and any route of appeal. A framework that arrives without those elements would leave the practice of late June as the operative precedent.

Whether any statutory process for pre-deployment blocking of frontier models is introduced, of the kind Anthropic publicly called for after receiving the directive: transparent, fair, clear, grounded in technical facts.

Whether the composition of any major laboratory's supported-country list changes for a Central Asian or CIS jurisdiction, in either direction, and whether public justification accompanies the change.

Whether Uzbek regulatory instruments, whether Central Bank, ministerial, or legislative, come to name foreign-provider access continuity as a documented risk category, in the way current frameworks already name cybersecurity and data localization.

---

## Sources & Notes

[1] Anthropic. *Statement on the US government directive to suspend access to Fable 5 and Mythos 5.* 12 June 2026. [anthropic.com](https://www.anthropic.com/news/fable-mythos-access)

[2] Reuters. *US blocks foreign access to Anthropic's most advanced AI models.* 13 June 2026. [reuters.com](https://www.reuters.com/technology/us-blocks-foreign-access-anthropics-most-advanced-ai-models-axios-reports-2026-06-13/)

[3] Reuters. *US to lift export controls on Anthropic's Fable AI model.* 30 June 2026. [reuters.com](https://www.reuters.com/business/us-lift-export-controls-anthropics-fable-ai-model-tuesday-source-says-2026-06-30/)

[4] Axios. *Trump administration asks OpenAI to limit release of GPT-5.6.* 25 June 2026. [axios.com](https://www.axios.com/2026/06/25/trump-administration-openai-gpt-model-release)

[5] The Decoder, reporting The Information. *OpenAI's GPT-5.6 rollout now requires US government approval on a customer by customer basis.* June 2026. [the-decoder.com](https://the-decoder.com/openais-gpt-5-6-rollout-now-requires-us-government-approval-on-a-customer-by-customer-basis/)

[6] The internal memo attributed to Sam Altman is known through secondary reporting of The Information. It is treated here as reported description, not as a primary document.

[7] CNBC. *OpenAI gets US regulatory approval for GPT-5.6 rollout.* 8 July 2026. [cnbc.com](https://www.cnbc.com/2026/07/08/openai-gets-us-regulatory-approval-for-gpt-5point6-rollout-axios-report.html)

[8] The White House. *Executive Order 14409, "Promoting Advanced Artificial Intelligence Innovation and Security."* 2 June 2026. Section 3(b)(ii)–(iii) and Section 3(c). [whitehouse.gov](https://www.whitehouse.gov/presidential-actions/2026/06/promoting-advanced-artificial-intelligence-innovation-and-security/) See also Skadden, Arps, Slate, Meagher & Flom. *New AI Executive Order Calls for Frontier Model Security, Early Government Access and AI-Enabled Cyber Defense.* June 2026. [skadden.com](https://www.skadden.com/insights/publications/2026/06/new-ai-executive-order)

[9] OpenAI. *Supported countries and territories.* API documentation, accessed July 2026. [developers.openai.com](https://developers.openai.com/api/docs/supported-countries)

[10] Reporting on OpenAI's mid-2024 enforcement of API restrictions against traffic from unsupported jurisdictions including China, Russia, Iran, and North Korea. [bankinfosecurity.com](https://www.bankinfosecurity.com/openai-drops-chatgpt-access-for-users-in-china-russia-iran-a-25631)

[11] Federal Register. *Framework for Artificial Intelligence Diffusion.* Bureau of Industry and Security, 15 January 2025. [federalregister.gov](https://www.federalregister.gov/documents/2025/01/15/2025-00636/framework-for-artificial-intelligence-diffusion)

[12] United States Studies Centre. *The US AI Diffusion Rule: what is it, why did the United States rescind it.* August 2025. [ussc.edu.au](https://www.ussc.edu.au/the-us-ai-diffusion-rule)

[13] International Institute for Strategic Studies. *The US pivot on regulating AI diffusion.* Strategic Comments, 8 December 2025. [iiss.org](https://www.iiss.org/publications/strategic-comments/2025/12/the-us-pivot-on-regulating-ai-diffusion/)

[14] Bureau of Industry and Security. *Commerce proposes rule to advance US national security interests: proposed requirements for Infrastructure as a Service providers.* 29 January 2024. [bis.gov](https://www.bis.gov/press-release/commerce-proposes-rule-advance-u.s.-national-security-interests-implement-biden-harris-administrations-ai)

[15] Skadden, Arps, Slate, Meagher & Flom. *Know Your Cloud Customer: Commerce Department Proposes To Regulate Foreign Access to US IaaS Products.* February 2024. Comments on the proposed rule were due 29 April 2024. No final rule appears in the record reviewed for this analysis. [skadden.com](https://www.skadden.com/insights/publications/2024/02/know-your-iaas-customer)

[16] Board of Governors of the Federal Reserve System. *The State of AI Competition in Advanced Economies.* FEDS Notes, 6 October 2025. [federalreserve.gov](https://www.federalreserve.gov/econres/notes/feds-notes/the-state-of-ai-competition-in-advanced-economies-20251006.html)

[17] Epoch AI. *The US hosts the majority of GPU cluster performance, followed by China.* AI Supercomputers dataset. The authors state that coverage is approximately ten to twenty percent of global capacity and that individual country shares could differ by five or more percentage points. [epoch.ai](https://epoch.ai/data-insights/ai-supercomputers-performance-share-by-country)

[18] Khodjaev, O. *Governance Briefs,* Analytical Note No. 10, "The Alignment Ceiling." June 2026. [okhodjaev.com](https://okhodjaev.com/governance-briefs/the-alignment-ceiling/)

[19] Republic of Uzbekistan. Presidential Decree No. PP-204, "On further measures to increase the popularisation of financial services and expand support for small and medium-sized businesses." 26 May 2026. [lex.uz](https://lex.uz/ru/docs/7409517)

[20] Republic of Uzbekistan. Law No. ZRU-1115 "On Artificial Intelligence," Article 7¹. [lex.uz](https://lex.uz/ru/docs/6600604)

[21] Khodjaev, O. *Beyond Control: Theory of Limits of AI Governance.* Essay 5, "The Colonial Pattern." March 2026. [okhodjaev.com](https://okhodjaev.com/essays/the-colonial-pattern/)

[22] Khodjaev, O. *Beyond Control: Theory of Limits of AI Governance.* Essay 10, "The Infrastructure Question." April 2026. [okhodjaev.com](https://okhodjaev.com/essays/the-infrastructure-question/)

[23] Khodjaev, O. *Beyond Control: Theory of Limits of AI Governance.* Essay 12, "Beyond Control: What Happens When the Correction Window Closes." May 2026. [okhodjaev.com](https://okhodjaev.com/essays/beyond-control/)

[24] Khodjaev, O. *Analytical Glossary: Theory of Limits of AI Governance.* Zenodo, June 2026. Terms cited: Vendor Dependency (#62), Asymmetric Dependency (#70), Reversibility Gap (#71), Exit Cost (#72), Institutional Mismatch (#106), Governance Residual (#107). [doi.org/10.5281/zenodo.20741338](https://doi.org/10.5281/zenodo.20741338)

[25] Khodjaev, O. *Governance Briefs,* Analytical Note No. 7, "The Procurement Trap." June 2026. [okhodjaev.com](https://okhodjaev.com/governance-briefs/the-procurement-trap/)

---

*Oybek Khodjaev — over 35 years of experience in banking, finance, public administration, and business in Uzbekistan and the CIS.*
*Author of the essay series "Beyond Control: Theory of Limits of AI Governance." okhodjaev.com*

*The author advises public institutions and financial organisations on AI governance, verification frameworks, and institutional readiness.*
