---
layout: page
title: Title to Success
subtitle: How to design a successful movie title?
---

How is a movie title designed? A movie title is the first thing we discover about a movie, **it is the hook that makes us want to see it**. Therefore it needs to be carefully designed.

While a compelling title doesn't guarantee the success of your movie, it plays a crucial role in attracting the attention of the public. An intriguing title serves as a gateway to getting your film noticed, establishing an initial link with the audience who will be more inclined to go to the cinema to see it.

We plan to analyze if a movie title can be linked to its **success**. We will study how explicit titles are by comparing them to plot summaries. We will examine the impact of factors like length or including the protagonist's name. Moreover, we will try to draw the different title strategies for different **movie genres**. Finally, we will do a **time series analysis**.

# Insights on titles

## Time series analysis

*graph title length evolution -> interactive: nb of movies per year visible with the cursor* 

The title length is scattered at the beginning of the 20th century. The average title length is rather stable from 1930 to 2012 (very small confidence intervals).

As very few movies were released at the beginning of the 20th century, we will plot join distributions of title length and number of movies released per year.

*graph join distributions*

## Genre analysis

Does each genre have a specific title length? Did it evolve through time?

*graph title length evolution in words (and in characters?)*

Specific vocabulary for each movie genre?

*graph positive sentiment per genre*
 
# Successful titles analysis

It could be argued that shorter titles are easier to remember and contribute to a movie's success. It could also be argued that longer titles can be more original and that originality also contributes to a movie's success. We will investigate the link between movie title length and different ratings.

## Confounders

While the title seems to be a crucial aspect since it is a the first hook, it is undoubtable that other factors, such as the **cast, director, and movie studio**, may exert a more significant influence on a film's success. To gain a comprehensive understanding of the impact of the title, it is essential to analyze potential confounding variables affecting success.

In this context, success is measured by both the movie revenue (box office earnings minus budget) and the ratings from IMDb. To do so, an indicator of success is calculated.

We would like to know if the presence of **famous actors** influence the movie success. To do so, we use a list of the 100 most famous actors to discriminate famous and not famous actors.

*graphs actor / director / studio / budget influence on success*

## Key features

What are the key features of a successful movie title? Investigate whether movie titles with certain features (e.g., length, plot summary, puns, protagonist name) are associated with higher success. 

The **title length** - in words or in characters - is the most obvious title feature. Does the title length impact the mocie ratings?

*graph title length vs 3 success indicators (ratings)*

For **short titles** (1 to 5 words), all ratings values are **less scattered** and they range around 55/100.

For **long titles** (5 to 10 words), Rotten tomatoes ratings values are **very scattered** : the confidence interval ranges from 45/100 to ~80/100 for 9-word titles. 
Critics rating are more scattered than audience ratings. Two reasons could explain this: (1) there are more ratings by audience than by critics, (2) critics are movie experts and have stronger opinions than the public, they either love or hate a movie.

*graph analyzing key features after matching*

## Prediction

# Interactive tool
