---
sortDate: "2025-12-01"
dateLabel: "December 2025"
title: "Bayesian modeling of heart-rate variability"
summary: "A group course project examining physiological variation and pregnancy-outcome classification with hierarchical, latent-variable, and Bayesian logistic models."
status: "Bayesian course · Group project"
year: 2025
tags: ["UVM", "Graduate", "Coursework", "Bayesian Statistics", "Data Analysis", "Physiological Data"]
image: "/uploads/bayesian-hrv/prior-posterior.png"
imageAlt: "Aggregate prior and posterior predictive class proportions compared with the observed distribution for the weak-prior classification model."
highlights:
  - "Hierarchical & latent-variable modeling"
  - "Prior and posterior predictive checks"
  - "Methods drafting, interpretation & presentation"
featured: false
order: 5
draft: false
---
## Objective

Explore whether pre-pregnancy heart-rate variability offers useful information about later pregnancy outcomes, while accounting for measurement noise, repeated observations, and individual differences.

Completed in **December 2025** with **Niharika Singh and Benjamin Wilson**, this Bayesian course project used physiological recordings collected at UVM Medical Center. It is separate from my transportation and DMV-data projects.

## My contribution

I contributed to the introduction, discussion, and conclusion, prepared an initial methods draft for the hierarchical and latent-variable models, and created a full rough draft of the presentation. Benjamin Wilson developed the hierarchical and latent-variable models; Niharika Singh developed the logistic classifier and its visualizations.

## Methods in brief

The team analyzed heart-rate features under rest and three physiological challenges, comparing pregnancy-outcome groups. The workflow included:

- **Hierarchical Bayesian modeling:** partial pooling across individuals, activities, and outcome groups, with beat-count-dependent measurement uncertainty.
- **Latent-variable modeling:** a shared factor summarizing individual physiological responses across challenge conditions.
- **Bayesian multiclass logistic regression:** comparison of weak and literature-informed priors for outcome classification.

Models were fitted in **Stan through CmdStanPy**, with **ArviZ** diagnostics, MCMC convergence checks, and prior/posterior predictive evaluation.

## Findings

The hierarchical model captured substantial activity-related and individual variation in heart-rate variability. The latent model summarized differences in responsiveness across challenges.

Classification was less successful: the weak-prior model achieved **59.1% test accuracy**, compared with **54.5%** for literature-informed priors. The test set contained only **22 participants**, including 14 controls; neither accuracy exceeded the roughly **63.6%** obtained by predicting the majority class for everyone. Good sampler convergence therefore did not establish useful classification performance.

## One view of the model checks

![Observed SDNN distribution and replicated distributions from the latent-variable model, showing broadly similar central shape and spread.](/uploads/bayesian-hrv/posterior-predictive.png)

This posterior predictive check assesses whether the model can reproduce the observed variability distribution. It does not demonstrate accurate prediction of clinical outcomes. Figure from the team's report.

## Limitations

The cohort was small and outcome classes were imbalanced. Physiological features overlapped across groups, and stronger priors did not improve classification on this test set. These exploratory course-project results do not establish a validated clinical screening method.
