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

I worked with **Amine Barzegar Tilenoie, Hallie Hinchman, and Binaya Rajbanshi** on this **Fall 2024** geostatistics project.

## Data and methods

The source was the **2023 Vermont DMV registration dataset**, obtained through the UVM Transportation Research Center, containing **992,094 vehicle registration records** before project-specific filtering.

We compared hybrid, plug-in hybrid, and battery-electric vehicle groups; checked mileage distributions and transformations; and used **400-point random subsamples** to manage the computational cost of variogram analysis. **ArcGIS road-network buffers** supplied a secondary measure of local accessibility.

- **Semivariograms** examined how differences in mileage changed with separation distance.
- **Cross-semivariograms** explored the joint spatial structure of mileage and road length.
- **Co-kriging** produced illustrative mileage surfaces and associated error-variance maps for a limited Chittenden County area.

## Findings in brief

The visually fitted variograms suggested different spatial ranges across vehicle groups: approximately **50 miles for BEVs**, **28 miles for PHEVs**, and **12 miles for HEVs**. The curves were fitted visually to small subsamples, so the estimated ranges are approximate.

Road length had only a weak negative relationship with travel, limiting its usefulness as a secondary predictor. Co-kriging produced mileage estimates and uncertainty maps, but **some BEV predictions were negative**, indicating that the model needed further work.

## Prediction and uncertainty

![Error-variance surface corresponding to the hybrid-vehicle co-kriging mileage estimates.](/uploads/vehicle-geostatistics/hev-error-variance.png)

The HEV mileage estimates and this error-variance map cover a limited study area in Chittenden County.

<details>
<summary>View an example semivariogram</summary>

![Battery-electric vehicle semivariogram with a visually fitted Gaussian curve and an approximately 50-mile range.](/uploads/vehicle-geostatistics/bev-semivariogram.png)

</details>

## Limitations

Variogram models were selected visually and fitted on small subsamples. Road length was a weak proxy for rurality, and vehicle records do not capture how travel is distributed within multi-vehicle households. The project write-up also has inconsistencies in its mileage units and buffer-radius descriptions, which make the numerical results difficult to interpret precisely.
