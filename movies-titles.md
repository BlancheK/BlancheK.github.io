---
layout: page
title: Title to Success
subtitle: How to design a successful movie title?
---

How is a movie title designed? A movie title is the first thing we discover about a movie, **it is the hook that makes us want to see it**. Therefore it needs to be carefully designed.

While a compelling title doesn't guarantee the success of your movie, it plays a crucial role in attracting the attention of the public. An intriguing title serves as a gateway to getting your film noticed, establishing an initial link with the audience who will be more inclined to go to the cinema to see it.

Here we seek to analyze whether the title of a movie can be linked to its **success**. We will study how explicit titles are by comparing them to plot summaries. We will examine the impact of factors like length or including the protagonist's name. Moreover, we will try to draw the different title strategies for different **movie genres**. Finally, we will do a **time series analysis**.

# Insights on titles

## Time series analysis

*graph title length evolution : OK*

{% include time-series-length-words.html %}

*graph join distributions : OK*

{% include time-series-joint-distributions-filtered.html %}

{% include time-series-heatmap.html %}

## Genre analysis

*graph title length evolution in words : OK*

{% include genres-length-words.html %}

{% include genres-length-words-v3.html %}

*graph positive sentiment per genre : OK but issue with mean values equal to zero*

{% include genres-pos-sentiment.html %}

{% include genres-neg-sentiment.html %}
 
# Successful titles analysis

{% include success-indicator-distribution.html %}

## Confounders

*graphs : OK*
- *actor (nb of famous actors) : bar plot -> linear regression?*
- *director : bar plot*
- *studio  : bar plot*
- *budget vs ratings (justif) : scatter plot -> linear regression?*
- *genre : bar plot*

{% include confounder-actors-v2.html %}

{% include confounder-directors.html %}

{% include confounder-studios.html %}

{% include confounder-budget-distribution.html %}

{% include confounder-budget.html %}

{% include confounder-genres.html %}

## Key features

*graph title length (words, characters) : OK*

{% include success-length-words-heatmap.html %}

{% include success-length-characters-heatmap.html %}

*graph presence of protagonist name : OK*

{% include success-protagonist.html %}

*graph part-of-speech : grammatical (verbs, adjective) : OK*

{% include success-grammatical-tag.html %}

*graph part-of-speech : proper nouns (characters, dates, location) : OK*

{% include success-org-nouns.html %}

{% include success-person-nouns.html %}

{% include success-NER.html %}

*graph sentiment analysis : OK*

{% include success-pos-sent-heatmap.html %}

{% include success-neg-sent-heatmap.html %}

## Prediction

*graph qui explique comment on prend en compte ces paramètres pour la prédiction (pie chart)*

*examples from real movies between 2012 and 2022*

# Interactive tool
