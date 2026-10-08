---
sortDate: "2024-12-01"
dateLabel: "Fall 2024"
title: "Geostatistics and co-kriging of vehicle travel"
summary: "Explored spatial dependence in Vermont vehicle mileage and used road-network context for co-kriging estimates and uncertainty maps."
status: "Geostatistics course · Group project"
year: 2024
tags: ["UVM", "Graduate", "Coursework", "Transportation", "GIS", "Geostatistics", "DMV Data"]
image: "/uploads/vehicle-geostatistics/hev-interpolation.png"
imageAlt: "Illustrative co-kriging surface of annual mileage for hybrid electric vehicles in a Chittenden County study area."
highlights:
  - "Semivariograms, cross-semivariograms & co-kriging"
  - "992,094 records in the source DMV dataset"
  - "400-point subsamples for variogram analysis"
relatedProjects: ["ev-adoption-gis", "ev-adoption-ann"]
featured: false
order: 6
draft: false
---
## Objective

Explore how vehicle mileage varies spatially across Vermont and whether surrounding road-network characteristics help estimate travel at unobserved locations.

This **Fall 2024 group project** was completed with **Amine Barzegar Tilenoie, Hallie Hinchman, and Binaya Rajbanshi**. The report documents shared results without specifying individual task assignments.

## Data and methods

The source was the **2023 Vermont DMV registration dataset**, obtained through the UVM Transportation Research Center, containing **992,094 vehicle registration records** before project-specific filtering. That count describes the source, not the fitted sample.

The team compared hybrid, plug-in hybrid, and battery-electric vehicle groups; checked mileage distributions and transformations; and used **400-point random subsamples** to manage the computational cost of variogram analysis. **ArcGIS road-network buffers** supplied a secondary measure of local accessibility.

- **Semivariograms** examined how differences in mileage changed with separation distance.
- **Cross-semivariograms** explored the joint spatial structure of mileage and road length.
- **Co-kriging** produced illustrative mileage surfaces and associated error-variance maps for a limited Chittenden County area.

## Findings in brief

The visually fitted variograms suggested different spatial ranges across vehicle groups: approximately **50 miles for BEVs**, **28 miles for PHEVs**, and **12 miles for HEVs**. These are exploratory fitted ranges, not validated causal explanations of driving behavior.

Road length had only a weak negative relationship with travel, limiting its usefulness as a secondary predictor. Interpolation demonstrated a workflow for mapping estimates alongside uncertainty, but **BEV predictions included unrealistic negative mileage** and required further model refinement.

## Prediction and uncertainty

![Error-variance surface corresponding to the hybrid-vehicle co-kriging mileage estimates.](/uploads/vehicle-geostatistics/hev-error-variance.png)

The thumbnail shows the HEV prediction surface; this companion map shows modeled uncertainty. Both are exploratory outputs, not validated statewide forecasts.

<details>
<summary>View an example semivariogram</summary>

![Battery-electric vehicle semivariogram with a visually fitted Gaussian curve and an approximately 50-mile range.](/uploads/vehicle-geostatistics/bev-semivariogram.png)

</details>

## Limitations

Variogram models were selected visually and fitted on small subsamples. Road length was a weak proxy for rurality, and vehicle records do not capture how travel is distributed within multi-vehicle households. The report alternates between annual and daily mileage terminology and gives inconsistent buffer-radius descriptions; these details should be reconciled before reusing the analysis quantitatively.

The main value of this project is practical experience with spatial dependence, interpolation, and uncertainty assessment—including recognizing implausible model output.
