---
layout: page
title: Title to Success
subtitle: How to design a successful movie title?
cover-img: /assets/img/road.jpg

carousels:
  - images: 
      - image: /assets/spotless.jpg
      - image: /assets/img/slider/coucou.jpg
      - image: /assets/img/slider/SilenceOfTheLambs.jpg
  - images: 
      - image: /assets/img/slider/ThereWillBeBlood.jpg
      - image: /assets/img/slider/ApocalypseNow.jpg
      - image: /assets/img/slider/Wolf.jpg
      - image: /assets/img/slider/RagingBull.jpg
---



{% include carousel.html height="50" unit="%" duration="7" number="1" %}

{% include carousel.html height="50" unit="%" duration="7" number="2" %}


![image-title-here](/assets/img/slider/RagingBull.jpg){:class="img-responsive"}

How is a movie title designed? A movie title is the first thing we discover about a movie, **it is the hook that makes us want to see it**. Therefore it needs to be carefully designed.

While a compelling title doesn't guarantee the success of your movie, it plays a crucial role in attracting the attention of the public. An intriguing title serves as a gateway to getting your film noticed, establishing an initial link with the audience who will be more inclined to go to the cinema to see it.

Here we seek to analyze whether the title of a movie can be linked to its **success**. We will study how explicit titles are by comparing them to plot summaries. We will examine the impact of factors like length or including the protagonist's name. Moreover, we will try to draw the different title strategies for different **movie genres**. Finally, we will do a **time series analysis**.

# Insights on titles

To get familiar with title features, let's do a **time series analysis** !

Have the main features of movie titles changed over time?

## Title length in characters

Its length is the most obvious feature of a title. It can be characterized by the number of words or of characters. We analyze here the evolution of the number of characters - as it is more precise than words - over time for all movie genre and for each movie genre.

{% include times-series-length-characters.html %}

* The title length in characters across all genres is scattered in the early 20th century. This is due to the fact that our dataset contains very few movies released between 1906 and 1928 (less than a hundred). 

* The average title length in characters across all genres is also  **fairly stable from 1928 to 2012** (very narrow confidence intervals): it remains around 17 characters.  

* For movie genres with many movies per year in our dataset, we can draw some conclusions. `Romance`, `Comedy` and `Drama` have again rather equal mean length in characters and the same variations over time. Their mean length varies little around 16.7 words over time.

## Conveyed sentiment

The movie genre and the sentiment conveyed in its title are intertwined aspects that play a significant role in shaping audience expectations and influencing the overall cinematic experience. The sentiment analysis of a movie title, whether positive, negative, or neutral, often aligns with the thematic tone of the film within its respective genre. Here's an exploration of how sentiment analysis and movie genres intersect.

{% include genres-pos-sentiment.html %}

{% include genres-neg-sentiment.html %}

* Titles in drama and romance genres lean towards positive or neutral sentiments to reflect the emotional and heartfelt nature of the narrative. 
* Horror and thriller titles frequently incorporate negative sentiments to create an air of suspense, mystery, or fear. The goal is to intrigue and elicit an emotional response. Example: "Psycho"
* Sport movie titles often carry positive sentiments to reflect the themes of triumph, teamwork, and personal growth. Positive sentiments contribute to the inspirational and uplifting nature of these films.
* Titles associated with world cinema often carry positive sentiments, emphasizing the diverse and enriching cultural experiences depicted in these films. 
* Political movie titles may carry positive sentiments, particularly if the focus is on inspiring change, highlighting positive political movements, or celebrating leaders and figures who made a positive impact.
* Historical movie titles may carry positive sentiments, emphasizing the inspiration from historical events, heroic figures, and significant moments.
* Fictional movie titles may carry negative sentiments if the focus is on dystopian or dark themes.
* Titles associated with art films often carry positive sentiments, reflecting the artistic and creative nature of these films.

The sentiment analysis of a movie title, whether positive, negative, or neutral, often aligns with the thematic tone of the film within its respective genre. The following plot explore how positive and negative sentiment tones in title evolved over time.

{% include times-series-sentiment-analysis.html %}

* Movie titles convey on average the same positive and negative sentiments. The curves are intertwined throughout the time period.

* Mean values for positive and negative sentiment conveyed by title after 1980 remain between 0.0 and 0.2 over time. 


## Presence of proper nouns

The presence of a protagonist name or of a specific place in a movie title could influence its success. A part-of-speech NLP analysis enables us to analyze the evolution of the presence of proper nouns over time.

As only the `Person` and `Organization` proper nouns are well represented in title, only those types are kept for the analysis.

{% include times-series-part-of-speech.html %}

* From 1980, around 50% of the movie titles include an organization or a person proper noun, the values range between 40% and 60%. It means that one movie title out of 2 contains an organization or a person proper noun.


# Successful titles analysis

{% include success-indicator-distribution.html %}

## Confounders
We are interested in conducting an analysis to explore the relationship between the title of a movie and its success. While the title seems to be a crucial aspect since it is a the first hook, it is undoubtable that other factors, such as the cast, director, and movie studio, may exert a more significant influence on a film's success. To gain a comprehensive understanding of the impact of the title, it is essential to analyze potential confounding variables affecting success.

In this context, success is measured by both the movie revenue (box office earnings minus budget) and the ratings from IMDb. To do so, an indicator of success is calculated.


We would like to know if the presence of famous actors influence the movie success.

{% include confounder-actors-v2.html %}

Here we are studying the influence of the cast on a movie's success, specifically exploring whether the number of renowned actors correlates with heightened success in a film.  Famous actors can draw audiences based on their star power, fan following, and perceived acting skills. A well-known cast can enhance a film's marketability and contribute to its initial box office performance.

Our findings suggest a positive association between the presence of famous actors and increased movie success. The number of famous actors and their chemistry on screen can also affect the film's appeal. Ensemble casts may attract a diverse audience, especially if each actor has a substantial fan base. This observation is interesting as renowned actors may serve as confounding variables, potentially impacting the relationship between our movie title and its success. 

It will be important to consider this confounding factor for future studies. Our upcoming investigations will extend beyond to explore additional factors, including the movie production studio, the director influence, and the budget.


We would like to know whether the fact that a movie was producted by a famous studio influences the success of a movie. The influence of a famous studio on the success of a movie is a multifaceted topic that involves various aspects of the film industry : brand recognition, financial backing, marketing, promotion, distribution and industrial networks... The reputation and track record of the movie production company can influence audience expectations. Established production companies with a history of successful films may attract more attention and generate anticipation for their projects.
NBCUniversal, Paramount Pictures Corporation, Warner Bros Entertainment, Walt Disney Studios, Sony Pictures, RKO Pictures, United Artists, Metro-Goldwyn-Mayer, 20th Century Fox are the studios considered as the best studios today and also as the best ones over the last century.

{% include confounder-studios.html %}


We explored the impact of renowned film directors on movie success : this analysis aims to uncover insights into how distinguished directors contribute to the success of the films they helm.  Director's reputation and fame can significantly influence a film's success. Directors known for their artistic vision, storytelling prowess, or box office track record may attract audiences who have come to associate quality with their work. We selected a list of the [top 50 influential directors](https://thecinemaarchives.com/2020/08/17/the-250-best-directors-of-all-time/) and analyse the influence on the success of the movies helmed by those directors.

{% include confounder-directors.html %}


{% include confounder-budget.html %}

The budget of a movie affects its production quality, scale, and marketing efforts. A higher budget can allow for top-notch production values, impressive special effects, and extensive promotional campaigns. Blockbusters like "Avatar" (2009) with a high budget demonstrated how substantial financial investments can lead to groundbreaking visuals and widespread appeal.

{% include confounder-genres.html %}

## Key features

### Title length

The length of a movie title plays a crucial role in shaping audience expectations, establishing tone, and contributing to a film's overall marketing strategy. A well-crafted title can pique curiosity, evoke emotions, and even serve as a memorable brand for the film. Whether brief and explicit or long and intriguing, a title can contribute significantly to a film's success by resonating with its target audience and conveying the essence of the cinematic experience it offers.


Two contrasting examples that highlight the impact of title length and style are "Alien" and "Eternal Sunshine of the Spotless Mind." "Alien", directed by Ridley Scott, is a short explicit title that immediately conveys a sense of mystery and suspense. The simplicity of the title contributes to the film's effectiveness in marketing, making it easy to remember and creating a strong, lasting impression. The brevity of "Alien" might be ideal for the science fiction and horror genres, emphasizing the enigmatic nature of the extraterrestrial threat and appealing to an audience seeking an adrenaline-fueled experience. On the other hand, "Eternal Sunshine of the Spotless Mind," directed by Michel Gondry, presents a lengthy and poetic title that sparks curiosity and suggests a more complex narrative. The title, derived from a line in Alexander Pope's poem, implies a blend of romance, philosophy, and introspection. The deliberate choice of a longer and more intricate title aligns with the film's exploration of memory, relationships, and the human psyche. This approach caters to an audience interested in thought-provoking and emotionally resonant stories, setting the tone for a more nuanced viewing experience.

{% include success-length-characters-heatmap.html %}

### Presence of protagonist name

{% include success-protagonist.html %}


The inclusion of the protagonist's name in a movie title can be a strategic storytelling choice that immediately centers the narrative around a specific character. This approach serves multiple purposes in shaping audience expectations and marketing the film.


Firstly, featuring the protagonist's name in the title establishes a clear focal point for the audience. It signals that the story revolves around this central character, offering a glimpse into their journey, struggles, or triumphs. This clarity can attract viewers who are drawn to character-driven narratives and are interested in following the personal development of the main character. Secondly, the protagonist's name in the title provides a straightforward identifier, making it easier for audiences to recall the movie. This can be especially effective in building a franchise or series around a particular character, creating a recognizable brand.
Examples of movies that incorporate the protagonist's name into the title include "Forrest Gump," , "Rocky",“Annie Hall”, “John Wick” …



We want to investigate the lexical fields and the conotation of our titles. This would provide us useful information to link with success, time, genre. We make the naive assumption that darker, scarier movies are associated with negative sentiments, whereas comedy and romance films are associated with more positive sentiments.

### Part-of-speech : grammatical (verbs, adjective)

{% include success-grammatical-tag.html %}

### Part-of-speech : proper nouns (characters, dates, location)

{% include success-org-nouns.html %}

{% include success-person-nouns.html %}

{% include success-NER.html %}


### Sentiment analysis

A positively framed title can generate enthusiasm and attract viewers with the promise of an uplifting or enjoyable experience. For example, titles like "Happy Feet" or "The pursuit of Happiness" evoke positive emotions and may attract audiences seeking a feel-good or heartwarming cinematic experience. These titles create an expectation of positivity and may contribute to the film's success, especially if the content aligns with the sentiment conveyed by the title.


Conversely, a negatively framed title might generate intrigue or set a darker tone, potentially attracting audiences interested in suspense, thrill, or drama. Movies like "Requiem for a dream" or "No Country for Old Men" use negative sentiments in their titles to signal intense, suspenseful narratives. In these cases, the negative sentiment may contribute to the film's success by attracting audiences who appreciate more challenging or intense storytelling.

{% include success-pos-sent-heatmap.html %}

{% include success-neg-sent-heatmap.html %}

## Prediction

*graph qui explique comment on prend en compte ces paramètres pour la prédiction (pie chart)*

*examples from real movies between 2012 and 2022*

# Interactive tool

blablabla

<img src="assets/img/hollywood.png"/>

-------------
