---
sortDate: "2025-12-01"
dateLabel: "2025 · provisional"
title: "Neural networks and machine learning for EV adoption"
summary: "Compared counter-propagation networks, self-organizing maps, and random forests using Vermont DMV household data and contextual attributes."
status: "ANN course · Group project"
year: 2025
tags: ["UVM", "Graduate", "Coursework", "Transportation", "ANN", "Machine Learning", "Data Analysis", "DMV Data"]
image: "/uploads/ev-adoption-ann/som-clusters.png"
imageAlt: "Self-organizing map with household vehicle-category proportions across prototype nodes after 5,000 epochs."
highlights:
  - "Counter-propagation networks & self-organizing maps"
  - "Random forests & feature-group comparisons"
  - "156,284 households in the cleaned RF dataset"
relatedProjects: ["ev-adoption-gis", "vehicle-geostatistics"]
featured: false
order: 4
draft: false
---
## Objective

Explore how household fleet characteristics, travel, charger access, and neighborhood context predict electric vehicle ownership—and what different modeling approaches reveal about the same problem.

This ANN-class project was presented jointly by **Binaya Rajbanshi, Nazmus Sakib, and Shekwobagwu Paul Galadima**. The presentation records the team's methods and results; individual task assignments are not specified.

## Working with a large DMV dataset

The project used Vermont DMV registration data supplied through the UVM Transportation Research Center, transformed into household fleet attributes and combined with contextual information. Inputs included vehicle type and weight class, travel distance, charger proximity, education, income, household size, and regional voting patterns.

The random-forest dataset retained **156,284 households** after dropping missing values from 192,435 initial households. A stricter dataset of **4,758 households** was also documented for the neural-model work. These are different analytical samples, not interchangeable counts.

## Methods used

- **Random forests:** weighted classification, repeated train/test splits, permutation-based feature importance, and staged comparisons of fleet, usage, access, and contextual predictors.
- **Counter-propagation networks:** prototype-neuron experiments, min–max and robust scaling, convergence checks, and confusion matrices to assess household-group separation.
- **Self-organizing maps:** unsupervised mapping of mixed household features, with quantization/topographic error checks, U-matrices, and vehicle-category composition across nodes.

## Main findings

**Fleet attributes carried most of the random forest's predictive information.** Adding broader contextual predictors produced only a small increase in overall accuracy in the reported feature-group comparison.

**Counter-propagation struggled to separate vehicle-ownership groups.** Robust scaling gave training and testing accuracy around 50%, and increasing the number of prototypes did not resolve the overlap.

**Self-organizing maps provided a visual account of household structure.** The mapped vehicle-category mixtures supported exploratory comparison of clusters rather than a claim of clean, validated separation.

## A closer look at the models

<details>
<summary>Random-forest comparison</summary>

![Feature-group comparison across 20 iterations, reporting similar overall accuracies for fleet-only and fuller-context random-forest models.](/uploads/ev-adoption-ann/random-forest-comparison.png)

The reported comparison shows why adding more contextual variables did not substantially change overall accuracy for this experiment.

</details>

<details>
<summary>Counter-propagation diagnostics</summary>

![Counter-propagation diagnostics showing accuracy by prototype count, RMSE convergence, activation patterns, and confusion matrices under robust scaling.](/uploads/ev-adoption-ann/counterprop-diagnostics.png)

The diagnostics show that convergence did not guarantee useful class separation.

</details>

## Limitations

The broad dataset was highly imbalanced: about 96% of retained households were in the conventional-vehicle class. Overall accuracy therefore needs to be read alongside class-specific errors. Early random-forest experiments included leakage-prone variables that were removed in subsequent models. Different filtering rules and samples prevent a simple like-for-like performance ranking across all three approaches.

This was an exploratory course project. The slides do not establish causal effects or independent external validation.
