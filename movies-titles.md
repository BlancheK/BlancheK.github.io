---
layout: page
title: Title to Success
subtitle: How to design a successful movie title?
cover-img: /assets/img/road.jpg
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
We are interested in conducting an analysis to explore the relationship between the title of a movie and its success. While the title seems to be a crucial aspect since it is a the first hook, it is undoubtable that other factors, such as the cast, director, and movie studio, may exert a more significant influence on a film's success. To gain a comprehensive understanding of the impact of the title, it is essential to analyze potential confounding variables affecting success.

In this context, success is measured by both the movie revenue (box office earnings minus budget) and the ratings from IMDb. To do so, an indicator of success is calculated.


*graphs : OK*
- *actor (nb of famous actors) : bar plot -> linear regression?*
- *director : bar plot*
- *studio  : bar plot*
- *budget vs ratings (justif) : scatter plot -> linear regression?*
- *genre : bar plot*

We would like to know if the presence of famous actors influence the movie success.

{% include confounder-actors-v2.html %}

Here we are studying the influence of the cast on a movie's success, specifically exploring whether the number of renowned actors correlates with heightened success in a film. Our findings suggest a positive association between the presence of famous actors and increased movie success. This observation is interesting as renowned actors may serve as confounding variables, potentially impacting the relationship between our movie title and its success. It will be important to consider this confounding factor for future studies. Our upcoming investigations will extend beyond to explore additional factors, including the movie production studio, the director influence, and the budget.


We would like to know whether the fact that a movie was producted by a famous studio influences the success of a movie. The influence of a famous studio on the success of a movie is a multifaceted topic that involves various aspects of the film industry : brand recognition, financial backing, marketing, promotion, distribution and industrial networks... NBCUniversal, Paramount Pictures Corporation, Warner Bros Entertainment, Walt Disney Studios, Sony Pictures, RKO Pictures, United Artists, Metro-Goldwyn-Mayer, 20th Century Fox are the studios considered as the best studios today and also as the best ones over the last century.

{% include confounder-studios.html %}


We explored the impact of renowned film directors on movie success : this analysis aims to uncover insights into how distinguished directors contribute to the success of the films they helm. We selected a list of the top 50 influential directors (found on https://thecinemaarchives.com/2020/08/17/the-250-best-directors-of-all-time/) and analyse the influence on the success of the movies helmed by those directors.

{% include confounder-directors.html %}



{% include confounder-budget-distribution.html %}

{% include confounder-budget.html %}

{% include confounder-genres.html %}

## Key features

*graph title length (words, characters) : OK*

It could be argued that shorter titles are easier to remember and contribute to a movie's success. It could also be argued that longer titles can be more original and that originality also contributes to a movie's success. We will investigate the link between movie title length and different ratings.

{% include success-length-words-heatmap.html %}

{% include success-length-characters-heatmap.html %}

*graph presence of protagonist name : OK*

{% include success-protagonist.html %}


We want to investigate the lexical fields and the conotation of our titles. This would provide us useful information to link with success, time, genre. We make the naive assumption that darker, scarier movies are associated with negative sentiments, whereas comedy and romance films are associated with more positive sentiments.

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


<img src="assets/img/hollywood.png" height=682px width=1024px class="center"/>
