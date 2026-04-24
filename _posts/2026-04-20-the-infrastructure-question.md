---
title: "The Infrastructure Question: Who Controls the Compute Controls the Future"
date: 2026-04-20
permalink: /essays/the-infrastructure-question/
description: "The physical configuration of the compute stack — fabs, tools, data centres, and grids — pre-determines the choice space for most jurisdictions before any sovereign decision is taken. This is not a prediction. It is a description of the present."
tags: [AI governance, compute, semiconductors, export controls, infrastructure, structural dependency, Global South]
layout: single
author_profile: false
classes: wide
toc_icon: "file-text"
excerpt: "The region could do everything correctly. The region could not alter the frame within which 'correctly' had been defined."
---

#### Contents

- [I. The Shape of the Substrate](#i-the-shape-of-the-substrate)
- [II. Export Controls as Infrastructure Governance](#ii-export-controls-as-infrastructure-governance)
- [III. Compute as the Cotton of the Twenty-First Century](#iii-compute-as-the-cotton-of-the-twenty-first-century)
- [IV. Pre-Decisional Compression](#iv-pre-decisional-compression)
- [Implications](#implications)
- [Signals to Watch](#signals-to-watch)
- [The Questions That Remain Open](#the-questions-that-remain-open)
- [Sources & Notes](#sources--notes)

*An office in the Samarkand regional administration, 2021. On the table lies the road map for the next phase of cotton and textile sector reform. Beside it, the recently adopted decision of the European Union granting Uzbekistan GSP+ status, extending tariff preferences on textiles and garments. Further along the table, documentation on Better Cotton standards, through which the country's clusters are gaining access to large international buyers. Around the table, the directors of the clusters operating in the region. They are speaking about capacity, about ginneries, about spinning lines, about contracts. I listen, and I understand that we are doing exactly what any textbook on development economics would prescribe: moving away from raw-material export, building processing capacity, climbing the value chain, reaching international markets with finished goods. By the end of that year, the share of finished textile products in Uzbekistan's textile exports will for the first time exceed the share of yarn. The sector will formally pass the point of inflection between raw material and finished product.*

*And yet none of the conditions that make this trajectory possible was drafted in that office. GSP+ was decided in Brussels. The sustainability standards were written in the international secretariat of Better Cotton. The buyers sat in Europe and East Asia. The logistics corridors ran through Iran and the Caucasus on terms we accepted but did not write. The region could do everything correctly. The region could not alter the frame within which "correctly" had been defined.*

That gap between effort and frame is the subject of this essay. The previous essay in this series examined the limit of sovereign will — the point at which every enforcement architecture meets a state invoking strategic interest and does not survive the encounter. That limit operates through decision. This essay examines a different limit, one that does not answer to decision at all. It operates through matter: through fabs, through tools, through grids, through the physical configuration of where frontier compute can be produced and where it can be used. For the great majority of jurisdictions, this second limit has already closed the option set before any sovereign choice is taken. A state can declare any policy it likes. Its room to carry it out is set by the substrate on which the declaration lands.

Uzbekistan's experience after 2017 is worth recording precisely because it represents not a failure of the effort to escape dependency but a structural ceiling on what the effort can reach. The country deliberately eliminated the export of raw cotton fibre. By 2023 it had built the capacity to process the entire domestic crop into yarn inside its own borders [1]. Textile and garment exports reached roughly three billion dollars by 2022 and account for about ten to eleven per cent of total exports in recent data [1, 7]. This is not the cotton dependency of the early 1990s. It is vertical integration, technological modernisation, and a conscious climb up the value chain. And it is still inside a frame whose walls were built elsewhere. That is the point.

## I. The Shape of the Substrate

A frontier AI system is the product of a stack whose elements are unusually concentrated. Leading-edge chips are manufactured on process nodes at five and three nanometres, in fabrication plants that cost tens of billions of dollars and take years to build. TSMC is widely estimated to produce on the order of ninety per cent of the world's chips at seven nanometres and below — the category that includes the GPUs on which frontier training runs depend [2]. Its advanced nodes (three, five, and seven nanometre) together account for roughly three quarters of its wafer revenue [2]. A small number of other firms operate at or near the leading edge; none at comparable scale.

The fabs themselves are produced by a narrower layer still. Extreme ultraviolet lithography tools, without which the most advanced nodes cannot be patterned, come from a single supplier in the Netherlands. High-bandwidth memory, which governs whether a frontier chip can be fed data fast enough to matter, is produced by a handful of firms in South Korea and the United States. Electronic design automation software, without which no modern chip can be laid out, is dominated by three American companies [6]. The industry is not merely globalised. It is threaded through a small number of chokepoints, each of which can be governed through a small number of legal instruments.

Once fabricated, accelerators are deployed in data centres whose power requirements are increasingly difficult to meet. One recent assessment by the International Energy Agency projects global data-centre electricity consumption to rise from about 415 terawatt-hours in 2024 to roughly 945 terawatt-hours by 2030, with the United States and China accounting for around eighty per cent of the incremental demand [3]. Goldman Sachs research places the increase at up to 165 per cent over 2023 levels by the end of the decade [4]. These are not marginal adjustments to existing grids. They imply tens of gigawatts of additional dedicated capacity, new transmission corridors, long permitting cycles, and contested decisions about water and land at every site. Where these conditions cannot be met, frontier compute cannot be hosted — regardless of who would like to host it.

## II. Export Controls as Infrastructure Governance

The chokepoint structure is not a neutral feature of the landscape. Since October 2022, the United States has operated a sequence of export controls explicitly designed to constrain the flow of advanced AI hardware and the tools to produce it [5]. The initial rules restricted direct exports of top-tier accelerators such as NVIDIA's A100 and H100 to China and limited sales of less advanced variants above thresholds based on processing power and interconnect bandwidth. Revisions in October 2023 and March 2024 closed loopholes and extended the scope to additional configurations and end uses [5]. In 2024, restrictions were extended to high-bandwidth memory at HBM2E and above for Chinese customers — a recognition that AI performance depends on memory bandwidth as much as on raw compute [5].

Analysts inside the United States have described this approach as "small yard, high fence": rather than governing the whole semiconductor ecosystem, policy focuses on the narrow set of technologies in which American and allied firms hold chokepoint dominance [6]. The Foreign Direct Product Rule has been broadened to cover chips manufactured abroad using American tools or intellectual property when destined for restricted entities, extending the jurisdictional reach of a national export regime to facilities on other continents [5]. Coordination with the Netherlands, Japan, South Korea, and Taiwan has aligned their domestic regimes with the same objectives [6].

The mechanism visible here is worth naming precisely. A small coalition of states has converted physical concentration into legal authority. Access to frontier compute is no longer just a commercial transaction between willing parties. It is a governed privilege, mediated through export licences, entity lists, and end-use conditions that can be revised at any time. A jurisdiction that imports accelerators from this coalition operates within that regime whether or not it has formally joined it. The hardware arrives subject to compliance conditions. The conditions travel with the hardware.

## III. Compute as the Cotton of the Twenty-First Century

The analogy with cotton is structural, not rhetorical. In both cases, a single input whose supply is concentrated in a small number of external actors becomes the channel through which an entire development trajectory must pass. In both cases, the price, the quantity, and the access conditions are determined outside the jurisdiction that needs the input. In both cases, large durable fixed investments — irrigation and ginneries on one side, fabs and data centres on the other — lock the surrounding system into a particular pattern for multi-decade horizons. The difference is speed. Cotton dependence played out across generations. Compute dependence plays out across product cycles.

Uzbekistan's cluster reform after 2017 is instructive precisely because it shows what the upper bound of escape from raw-material dependency looks like. The government eliminated production quotas in 2020, transferred procurement and financing functions from the state to private vertically integrated clusters, and by 2022 was processing close to the entire domestic cotton crop inside the country. Textile exports grew from roughly 1.1 billion dollars in 2017 to about 3.2 billion by 2022, with the share of finished garments and knitwear rising past the share of yarn for the first time [7]. This is the best available mid-stack specialisation strategy, executed at national scale. It is also the structural ceiling. The EU GSP+ framework that opens European markets, the Better Cotton standards that govern access to large buyers, the international logistics corridors, the currencies in which contracts settle — none of these were drafted in Tashkent or Samarkand. The climb up the value chain is real. The frame that defines the value chain is not under local control.

For a non-frontier jurisdiction in the compute domain, the configuration compresses the strategic option set before any domestic policy debate opens. Three patterns are visible across the states that now operate within the AI substrate. The aligned adopter, typically a security ally of the producing coalition, gains relatively reliable access to frontier chips and cloud regions in exchange for accepting its export-control and security priorities. The dual-track balancer, trying to arbitrage between Western and Chinese ecosystems, holds a position that tightening entity lists and licensing regimes make progressively harder to sustain. The peripheral consumer, lacking the weight to secure privileged access, operates on commoditised or previous-generation hardware delivered through global clouds whose service conditions are set abroad.

None of these positions is a sovereign choice in the ordinary sense. Each is the shape taken by the option set after the material substrate has been accounted for. A country with no realistic path to hosting a leading-edge fab, limited transmission capacity, and a weak local grid will not seriously debate full hardware autarky. It will debate which external arrangement to enter, on what terms, with which partner. The sovereign decision is real. It is made inside a corridor whose walls were already built.

## IV. Pre-Decisional Compression

The central finding of this essay can be stated without ornament. The physical configuration of the compute stack — fabs, tools, data centres, and grids — pre-determines the choice space for most jurisdictions before any sovereign decision is taken. This is not a prediction. It is a description of the present.

Pre-decisional compression does not eliminate agency. Investment in grid reliability and low-carbon generation can shift the geography of where data centres can plausibly be hosted. Specialisation in packaging, testing, or application-layer work can produce niches whose bargaining power grows with time. Procurement policy, data-localisation rules, and the design of public-sector cloud contracts can shape whether domestic institutions lock into a single external provider or maintain multihoming across ecosystems. These are meaningful levers. None of them alters the underlying fact that the frontier is not locally reachable.

What the compression does eliminate is the frame in which AI governance is often discussed — the frame that assumes each jurisdiction confronts the technology as a blank policy canvas. It does not. The canvas is pre-drawn. Uzbekistan did not choose its cotton architecture in 1991; it inherited the irrigation, the ginneries, the labour specialisation, and the fiscal arrangements that made cotton the least reversible element of its economy. The reforms after 2017 modified that architecture substantially but did not escape its external frame — the buyers, the standards, the tariff regimes, the certification systems. Non-frontier jurisdictions in 2026 do not choose their compute architecture either; they inherit a global production structure assembled over the previous two decades through decisions in which they did not participate.

Essay 9 identified the limit of will — the sovereign override that no enforcement architecture designed without it can survive. Essay 10 identifies the limit of matter — the physical configuration that closes the option set before will is exercised. The two limits are distinct, and they are both operative.

*Any governance framework that ignores either will measure its own intent rather than its effect.*

## Implications

**First:** the sovereign choice set in AI strategy is narrowed by physical infrastructure before any formal decision is taken. Frameworks that treat jurisdictional autonomy as the starting point will misread the terrain they are working on.

**Second:** export controls are not an exception to global AI governance. For jurisdictions outside the producing coalition, they are global AI governance — the instrument through which access conditions are set, revised, and enforced.

**Third:** energy and grid capacity are the second substrate. A country without transmission headroom cannot host frontier compute regardless of policy intent, and transmission headroom cannot be built on the timescale on which frontier compute scales.

**Fourth:** for non-frontier jurisdictions, the meaningful strategic question is no longer whether to have an AI policy. It is which dependency pattern to enter, on what terms, and with which safeguards against sudden revision of access conditions.

## Signals to Watch

- Further extensions of the Foreign Direct Product Rule and entity listings that tighten the circle of permitted access to frontier accelerators.

- Grid connection queues and permitting timelines for new hyperscale data centres in the United States, the European Union, and East Asia — the binding constraint on where AI capacity can physically be built in the next five years.

- Sovereign arrangements for cross-border access to frontier compute by non-producing states, and the conditions attached to such arrangements.

- Investment flows into advanced packaging, high-bandwidth memory, and leading-edge lithography — the narrow layers where chokepoint dominance is currently held.

- Further upward revisions to data-centre power-demand forecasts by the IEA, EPRI, and major investment-bank research desks, and the associated revisions to grid expansion plans.

## The Questions That Remain Open

The limit of will and the limit of matter are both now visible. The question that follows from placing them side by side is whether any existing institution is structurally capable of holding the function that an AI governance framework would need to perform. The question is not which institution should be chosen. It is whether the combination of public-law legitimacy, technical access, and cross-border enforcement jurisdiction can exist inside any currently available institutional form. The next essay in this series examines that question without prescribing an answer.

A second question sits beneath the first. If physical dependency is pre-decisional for most jurisdictions, and if sovereign override is operative for those that are not dependent, what remains of the idea that AI governance is a collective project? Is it a collective project at all, or is it a bilateral relation between the small number of states that host the substrate and the larger number that receive its outputs? This essay does not answer that question. It records that the question is now unavoidable.

---

## Sources & Notes

**[1]** World Bank. *Cotton Textile Clusters in Uzbekistan: Status and Outlook.* Policy Dialogue on Agriculture Modernization, May 2020. [worldbank.org](https://www.worldbank.org/) See also: USDA Foreign Agricultural Service. *Uzbekistan — Cotton and Products Annual.* 2023–2024. [fas.usda.gov](https://fas.usda.gov/)

**[2]** Center for Security and Emerging Technology (CSET), Georgetown University. *The Semiconductor Supply Chain: Assessing National Competitiveness.* 2024. [cset.georgetown.edu](https://cset.georgetown.edu/) — primary source for leading-edge logic dominance estimates. See also: Taiwan Semiconductor Manufacturing Company. *2024 Annual Report.* 2025. [tsmc.com](https://www.tsmc.com/) — source for the structure of wafer revenue by node (advanced nodes ≈ three quarters of wafer revenue).

**[3]** International Energy Agency. *Energy and AI.* IEA, Paris, 2024. [iea.org](https://www.iea.org/) See also: IEA. *Electricity 2024 — Analysis and Forecast to 2026.* 2024.

**[4]** Goldman Sachs Research. "AI, data centers and the coming US power demand surge." 2024. [goldmansachs.com](https://www.goldmansachs.com/)

**[5]** U.S. Department of Commerce, Bureau of Industry and Security. *Export Controls on Advanced Computing and Semiconductor Manufacturing Items to the People's Republic of China.* Federal Register, 7 October 2022; revisions 17 October 2023 and 29 March 2024; HBM controls December 2024. [bis.doc.gov](https://www.bis.doc.gov/)

**[6]** Allen, G. *Choking Off China's Access to the Future of AI.* Center for Strategic and International Studies, October 2022. [csis.org](https://www.csis.org/) See also: Miller, C. *Chip War: The Fight for the World's Most Critical Technology.* Scribner, 2022.

**[7]** State Statistics Committee of the Republic of Uzbekistan. Textile export data, 2022–2024. [stat.uz](https://stat.uz/) See also: Uztekstilprom Association. Industry review materials, 2022. European Commission. Decision on GSP+ beneficiary status for Uzbekistan, 2021. [ec.europa.eu](https://ec.europa.eu/)

**[8]** Electric Power Research Institute. *Powering Intelligence: Analyzing Artificial Intelligence and Data Center Energy Consumption.* EPRI, 2024. [epri.com](https://www.epri.com/) See also updated scenarios in *Powering Intelligence 2026*, which revise U.S. data-centre electricity share upward to 9–17 per cent of national consumption by 2030.

---

Full essay and updated sources: [okhodjaev.com/essays/the-infrastructure-question/](https://okhodjaev.com/essays/the-infrastructure-question/)

---

**Cite this work:** Khodjaev, O. (2026). *The Infrastructure Question: Who Controls the Compute Controls the Future.* Zenodo. <a href="https://doi.org/10.5281/zenodo.19664876" target="_blank">doi.org/10.5281/zenodo.19664876</a>

---

*Oybek Khodjaev: systems transformation analyst, Founder & CEO of INVEXI LLC. Former Deputy Governor (Deputy Khokim) of Samarkand Region. Previously, Treasury Director and Deputy Chairman of the Management Board at JSC UzAgroIndustrialBank. More than thirty years' experience in economics, banking, finance, and business across Uzbekistan and the CIS.*

**Published** April 20, 2026

<a href="https://okhodjaev.substack.com" target="_blank">Substack</a> · <a href="https://x.com/O_Khodjaev" target="_blank">X.com</a> · <a href="https://www.linkedin.com/in/oybek-khodjaev/" target="_blank">LinkedIn</a>
