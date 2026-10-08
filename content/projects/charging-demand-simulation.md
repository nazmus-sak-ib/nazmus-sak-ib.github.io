---
sortDate: "2026-05-04"
dateLabel: "May 2026"
title: "Simulating routine fast-charging demand"
summary: "A vehicle-day simulation testing how home-charging access, housing, rural travel, and winter shape DC fast-charging need—with a Vermont planning application."
status: "Final course research paper · May 2026"
year: 2026
tags: ["UVM", "Graduate", "Coursework", "Transportation", "Simulation", "Charging Demand", "NEVI", "NHTS Data", "Academic Work"]
image: "/uploads/charging-demand/scenario-results.png"
imageAlt: "Four scenario results showing simulated shares of active vehicle-days requiring fast charging: 1.5%, 3.8%, 2.3%, and 4.0%."
highlights:
  - "6,879 active vehicle-days · NHTS 2022"
  - "Four charging-access & winter scenarios"
  - "Demand simulation with NEVI planning implications"
spotlight: true
featured: false
order: 2
relatedProjects: ["charging-policy-white-paper"]
scenarios:
  - { label: "A · Universal home access", assumption: "All households charge at home; standard efficiency.", rate: "1.5%" }
  - { label: "B · No home access", assumption: "No households charge at home; standard efficiency.", rate: "3.8%" }
  - { label: "C · Housing-based access", assumption: "Only single-family owners charge at home; standard efficiency.", rate: "2.3%" }
  - { label: "D · Winter stress", assumption: "Housing-based access with lower winter efficiency.", rate: "4.0%" }
draft: false
---
## Abstract

Off-corridor fast-charging planning needs to consider how people travel and whether they can charge at home. I constructed active vehicle-days from observed trip diaries, simulated battery depletion and charging under four scenarios, and examined how need varies across rurality and housing groups. The results point to a concentration of vulnerability where longer rural travel coincides with limited residential charging access.

This final research paper was completed for **Advanced Transportation Planning and Demand Modeling**, May 4, 2026. It extends the planning questions developed in my earlier NEVI white paper.

## Research question

How does routine DC fast-charging need vary across rurality and housing segments under different home-charging assumptions, and what does that imply for Vermont planning?

## Data and simulation

I linked the **2022 National Household Travel Survey** trip, vehicle, and household tables, preparing **19,922 cleaned trips** and **6,879 active vehicle-days**. Each vehicle-day was simulated as a stylized battery-electric vehicle, with trips processed in time order and battery state of charge tracked through driving and charging opportunities.

Two passes separated charging-event counts from feasibility: one allowed fast charging, while the other flagged days that could not be completed above a 10% reserve without it. Core assumptions included a 70 kWh battery, standard efficiency of 3.0 miles/kWh, winter efficiency of 2.2 miles/kWh, and different starting charge levels for households with and without home access.

Survey-weighted estimates and logistic regression accounted for household clustering and survey strata. Sensitivity tests varied starting charge, battery size, winter conditions, and workplace charging.

<details>
<summary>View the scenario design and simulation parameters</summary>

![Slide explaining the four scenarios, battery-state-of-charge simulation, two simulation passes, and reference vehicle and charging parameters.](/uploads/charging-demand/scenario-design.png)

</details>

## Findings

**Removing home access more than doubled simulated routine need:** the share of active vehicle-days infeasible without fast charging rose from **1.5% to 3.8%**. This contrast varies starting charge as well as home-charging opportunities, so it describes a scenario package rather than an isolated causal effect.

**Winter amplified housing-related vulnerability.** Housing-based access produced 2.3% overall infeasibility; the winter scenario raised it to 4.0%. Within the rural constrained-housing segment, the reported rate rose from 9.2% to **23.1%**, although that segment contained only 133 vehicle-days. Rural renters were also a small group, with 82 vehicle-days.

![Scenario results by rurality and housing, highlighting higher simulated need among rural renters and constrained-housing households and its increase under winter conditions.](/uploads/charging-demand/housing-rurality-results.png)

The concentration matters more for planning than the statewide average alone. These small-cell estimates are directional, not precise forecasts.

## Vermont application and NEVI relevance

I reweighted national housing-segment results using Vermont housing composition from ACS B25032. Under the housing-based scenario, this yielded **2.38%** of active vehicle-days infeasible without fast charging and **3.2 simulated charging events per 100 vehicle-days**.

The application is a **statewide composition adjustment**, not a spatial forecast or recommended station count. It provides a demand-side screening logic for the off-corridor NEVI planning context discussed in the paper: combine travel exposure and residential charging constraints with existing feasibility, traffic, and equity criteria.

## Limitations and next steps

Single-day diaries omit longer-term variation and rare demanding days. The simulation assumes fast charging is available when required; it does not model station locations, queues, detours, or reliability. Home access is assigned through housing categories, and results depend strongly on starting charge assumptions.

Vermont is not separately identified in the public NHTS data. A next step is to spatialize rurality and housing constraints at tract or hex-grid level before evaluating specific siting priorities.
