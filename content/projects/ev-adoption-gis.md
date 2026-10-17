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
  - "Spatial joins across parcels and census areas"
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

I worked from a UVM Transportation Research Center dataset originating from the Vermont DMV, containing nearly **950,000 vehicle-level records**. Filtering and preparation produced a retained sample of **77,907 households**.

I integrated vehicle locations with parcel polygons, census geography, public chargers, road conditions, EPA built-environment measures, and rural–urban classifications. The workflow included spatial joins, block-group aggregation, charger counts within an **8 km radius**, and weighted pavement-condition measures. This brought household, parcel, block-group, and census-tract information into a common analytical dataset.

## Results in brief

In sequential multinomial logistic models, **rurality remained statistically significant after accounting for the contextual variables**. Travel distance, charger access, housing tenure, and job density had different associations with ownership across vehicle categories.

## Limitations

Individual sociodemographic information was unavailable, so some measures described the surrounding area rather than the household itself. Filtering out records with missing travel distance also narrowed the sample. These gaps limit both how well the sample represents Vermont households and what the models can explain about their choices.

## Research questions and model structure

![Conceptual diagram connecting mobility, housing, social context, built environment, EV exposure, infrastructure, and rurality to vehicle adoption through a multinomial logistic model.](/uploads/ev-adoption/research-question-2.png)

Household vehicle records were linked to parcel-level housing information and neighborhood measures before the ownership models were fitted.
