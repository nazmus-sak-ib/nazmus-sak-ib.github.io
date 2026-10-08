---
sortDate: "2025-12-01"
dateLabel: "2025 · provisional"
title: "Spatial analysis of electric vehicle adoption"
summary: "Linked a large Vermont DMV dataset with housing, charging infrastructure, and neighborhood context to study EV adoption."
status: "Course project"
year: 2025
tags: ["UVM", "Graduate", "Coursework", "Transportation", "GIS", "Data Analysis", "DMV Data"]
image: "/uploads/ev-adoption/research-question-1.png"
imageAlt: "Schematic linking vehicle records with infrastructure, housing, and neighborhood variables for an EV-adoption study."
highlights:
  - "GIS integration across multiple spatial scales"
  - "~950,000 source vehicle records"
  - "77,907 households retained for analysis"
relatedProjects: ["ev-adoption-ann", "vehicle-geostatistics"]
featured: false
order: 3
draft: false
---
## Objective

Examine how travel patterns, housing, infrastructure, and rurality relate to individual electric vehicle adoption in Vermont, using observed vehicle ownership rather than stated intentions.

## Research goals

- Test associations between EV adoption and contextual factors such as housing, public chargers, and the built environment.
- Assess whether rurality adds explanatory information after accounting for those factors.

## GIS and data work

I worked from a UVM Transportation Research Center dataset originating from the Vermont DMV, containing nearly **950,000 vehicle-level records**. Filtering and preparation produced a retained sample of **77,907 households**; the source count is not the final modeling sample.

I integrated vehicle locations with parcel polygons, census geography, public chargers, road conditions, EPA built-environment measures, and rural–urban classifications. The workflow included spatial joins, block-group aggregation, charger counts within an **8 km radius**, and weighted pavement-condition measures. This brought household, parcel, block-group, and census-tract information into a common analytical dataset.

## Results in brief

Using sequential multinomial logistic models, the presentation reports that **rurality remained statistically significant after contextual controls**. Associations with travel distance, charger access, housing tenure, and job density differed by vehicle category. These are observational associations, not causal effects.

## Limitations

Some contextual measures were proxies, and individual sociodemographic characteristics were unavailable. Filtering records with missing travel-distance information may limit representativeness. The supplied report describes the methods but does not include final coefficient tables; this brief results summary comes from the presentation.

## Research questions and model structure

![Conceptual diagram connecting mobility, housing, social context, built environment, EV exposure, infrastructure, and rurality to vehicle adoption through a multinomial logistic model.](/uploads/ev-adoption/research-question-2.png)

The diagram shows how variables from different geographic scales were organized into the model.
