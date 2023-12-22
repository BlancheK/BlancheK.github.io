---
layout: page
title: Title to Success
subtitle: How to design a successful movie title?
cover-img: /assets/img/road.jpg
---

{% include carousel.html %}

How is a movie title designed? A movie title is the first thing we discover about a movie, **it is the hook that makes us want to see it**. Therefore it needs to be carefully designed. While a compelling title doesn't guarantee the success of your movie, it plays a crucial role in attracting the attention of the public. An intriguing title serves as a gateway to getting your film noticed, establishing an initial link with the audience who will be more inclined to go to the cinema to see it.


We aim to investigate the correlation bewteen a movie title and its **success**. Our initial analysis involves basic movie titles analysis and time series analysis to gain more insights on this scope. We will examine the impact of factors like length, including the protagonist's name, sementics elements, sentiment analysis on the movie success. However, the link between the success of a movie and its title is more subtle than just looking at the box office revenues and audience ratings of the movie. **Confounders** indeed have to be taken in account, such as actors and directors fame, movie production compagnies or budget dedicated to the movie. Eventually, we will try to predict the success of the title based on different paremeters.





# Insights on titles

To get familiar with title features, let's do some **preliminary analysis** ! Have the main features of movie titles changed over time?

By conducting a time series analysis of parameters such as title length, sentiment analysis across genres, and studying the presence of named entities using Natural Language Processing, we can gain valuable insights on titles. This helps us identify trends and linguistic patterns that may influence a movie's popularity. We also have to know if it is necessary to consider release years as potential confounders to have more accurate and nuanced analyses of the link between titles and success in the movie industry.


### Title length in characters

Its length is the most obvious feature of a title. It can be characterized by the number of words or of characters. We analyze here the evolution of the number of characters - as it is more precise than words - over time for all movie genre and for each movie genre.

{% include times-series-length-characters.html %}

* The title length in characters across all genres is scattered in the early 20th century. This is due to the fact that our dataset contains very few movies released between 1906 and 1928 (less than a hundred). 

* The average title length in characters across all genres is also  **fairly stable from 1928 to 2012** (very narrow confidence intervals): it remains around 17 characters.  

* For movie genres with many movies per year in our dataset, we can draw some conclusions. `Romance`, `Comedy` and `Drama` have again rather equal mean length in characters and the same variations over time. Their mean length varies little around 16.7 words over time.

### Conveyed sentiment

The movie genre and the sentiment conveyed in its title are intertwined aspects that play a significant role in shaping audience expectations and influencing the overall cinematic experience. The sentiment analysis of a movie title, whether positive, negative, or neutral, often aligns with the thematic tone of the film within its respective genre. Here's an exploration of how sentiment analysis and movie genres intersect.

{% include genres-pos-sentiment.html %}

{% include genres-neg-sentiment.html %}

* Titles in `Drama` and `Romance` genres lean towards positive or neutral sentiments to reflect the emotional and heartfelt nature of the narrative. `Sport` movie titles often carry positive sentiments to reflect the themes of triumph, teamwork, and personal growth.  Titles associated with `World cinema` often carry positive sentiments, emphasizing the diverse and enriching cultural experiences depicted in these films. `Political` movie titles may carry positive sentiments, particularly if the focus is on inspiring change, highlighting positive political movements, or celebrating leaders and figures who made a positive impact.`Historical` movie titles may carry positive sentiments, emphasizing the inspiration from historical events, heroic figures, and significant moments. Titles associated with `Art` films often carry positive sentiments, reflecting the artistic and creative nature of these films.
* `Horror` and `Thriller` titles frequently incorporate negative sentiments to create an air of suspense, mystery, or fear. The goal is to intrigue and elicit an emotional response (for instance "Psycho"). `Fiction` movie titles may carry negative sentiments if the focus is on dystopian or dark themes.

We can see that the sentiment analysis of a movie title, whether positive, negative, or neutral, often aligns with the thematic tone of the film within its respective genre. 
The following plot explore how positive and negative sentiment tones in title evolved over time.

{% include times-series-sentiment-analysis.html %}

* Movie titles convey on average the same positive and negative sentiments. The curves are intertwined throughout the time period.

* Mean values for positive and negative sentiment conveyed by title after 1980 remain between 0.0 and 0.2 over time. 


### Presence of named entities

The presence of a protagonist name or of a specific place in a movie title could influence its success. A part-of-speech NLP analysis enables us to analyze the evolution of the presence of named entities over time.

As only the `Person` and `Organization` entities are well represented in title, only those types are kept for the analysis.

{% include times-series-part-of-speech.html %}

* From 1980, around 50% of the movie titles include an organization or a person proper noun, the values range between 40% and 60%. It means that one movie title out of 2 contains an organization or a person entity.


Before to switch to success analysis of the movies and their link to the movie title, here are some fun facts about movie titles:

{% include carousel.html %}

# Successful titles analysis

To dig into the impact of the title on a movie's success, we first need a success indicator. We suggest that the success is measured by both the movie revenue (box office earnings minus budget) and the ratings from IMdB. Accordingly to this, the indicator of success is calculated thanks to our additional dataset.

{% include success-indicator-distribution.html %}

## Confounders of success
We are interested in conducting an analysis to explore the relationship between the title of a movie and its success. While the title seems to be a crucial aspect since it is a the first hook, it is undoubtable that other factors, such as the cast, the director, the movie studio, the budget or the movie genre may exert a more significant influence on a film's success. To obtain a knowledgeable understanding of the impact of the title, it is essential to analyze potential confounding variables affecting success. 

Here, we firstly give a visual representation of some potential confounders, and then assess their weight in a movie's success by performing statistical test


#### Famous actors 
We are studying the influence of the cast on a movie's success, specifically exploring whether the number of renowned actors correlates with heightened success in a film.  Famous actors can draw audiences based on their star power, fan following, or their acting skills. A well-known cast can enhance a film's marketability and contribute to its initial box office performance.
![image-title-here](/assets/img/actors.jpg){:class="img-responsive"}

{% include confounder-actors.html %}

Our findings suggest a positive correlation between the presence of famous actors and increased movie success: the success indicator increases in average by '0.22' for 1 famous actor casted in the movie. This observation is interesting as renowned actors may serve as confounding variables, potentially impacting the relationship between our movie title and its success. 

#### Famous movie studios 

The influence of a famous studio on the success of a movie is a multifaceted topic that involves various aspects of the film industry : brand recognition, financial backing, marketing, promotion, distribution and industrial networks... Established production companies with a history of successful films may attract more attention and generate anticipation for their projects.

NBCUniversal, Paramount Pictures Corporation, Warner Bros Entertainment, Walt Disney Studios, Sony Pictures, RKO Pictures, United Artists, Metro-Goldwyn-Mayer, 20th Century Fox are the studios considered as the best studios today and also as the best ones over the last century.
![image-title-here](/assets/img/studios.jpg){:class="img-responsive"}

{% include confounder-studios.html %}

Our result seems to clearly attribute an advantage for movies produced by famous studios. The success indicator increases in average by '2.1' for famous studios. This may confirm our naive hypothesis that the production studio is another confounder to take into account for our further analysis.

#### Famous directors 

We explored the impact of renowned film directors on movie success : this analysis aims to uncover insights into how distinguished directors contribute to the movie revenue and ratings. Directors known for their artistic vision, storytelling prowess, or box office track record may attract audiences who have come to associate quality with their work.
 We selected a list of the [top 50 influential directors](https://thecinemaarchives.com/2020/08/17/the-250-best-directors-of-all-time/) and analyse the influence on the success of the movies helmed by those directors.

![image-title-here](/assets/img/directors.jpg){:class="img-responsive"}

{% include confounder-directors.html %}

Movies produced by the top 50 influential directors have a higher average success indicator, compare to other movies. The success indicator increases i average by '0.54' for movies directed by famous directors. Whether links to cinematographic quality or to pure commercial and trend effects, the director of a movie seems to influence its success, and might be added to the list of significant confounders.

#### Movie budget 

The budget of a movie affects its production quality, scale, and marketing efforts. A higher budget can allow for top-notch production values, impressive special effects, and extensive promotional campaigns. Blockbusters like "Avatar" (2009) with a high budget demonstrated how substantial financial investments can lead to groundbreaking visuals and widespread appeal. For all these reasons, the budget of a movie might have a crucial weight in our success indicator.

{% include confounder-budget.html %}

It appears that there is an potential positive correlation between movie's budget and the movie's success indicator. However, we need to dig into the data and the statistical relevance of the correlation to confirm the confounding effect of the budget. 

#### Movie genre

Is the genre of the movie crucial for its success? Depending on the public’s preference, it is reasonable to think that the general background of the movie will influence its success. The last superhero movie will surely attract more people than a documentary movie, and thus have higher box office income. Besides, a comedy movie may obtain a lot of bad rating, as humor is very personal, and it is not easy to make everyone laugh…

{% include confounder-genres.html %}

Again, we might have found another confounder. Average success indicators seems to be considerably impacted by the genre. Because of the high variability of some groups, deeper analysis have to be realized on our data.

### What about statistical tests?

Visually, all these potential confounders showed great impact on the success. Let’s test this hypothesis. We chose to perform multilinear regression for the movie budget, the number of famous actors, the fame of the studio and the fame of the director, and a non-parametric ANOVA 1 (Kruskal Wallis) for the genres.

![image-title-here](/assets/img/Confounders.png){:class="img-responsive"}

The results of these tests confirm our fears… All these parameters influence significantly our success indicator! Matching the dataset is not possible in this case, as it required a binary condition for success (treated and non-treated group). Thus, we should keep in mind these confounders for our further analysis and be careful with our conclusions.

## Key features

We delve into the analysis of key title features, including length, grammatical structure, named entities, and the presence of the protagonist's name, aiming to discern their potential impact on a movie's success. By scrutinizing these parameters, we seek to uncover patterns and correlations that contribute to the overall success of a film.

### Title length

The length of a movie title plays a crucial role in shaping audience expectations, establishing tone, and contributing to a film's overall marketing strategy. A well-crafted title can pique curiosity, evoke emotions, and even serve as a memorable brand for the film. Whether brief and explicit or long and intriguing, a title can contribute significantly to a film's success by resonating with its target audience and conveying the essence of the cinematic experience it offers.


Two contrasting examples that highlight the impact of title length and style are "Alien" and "Eternal Sunshine of the Spotless Mind." "Alien", directed by Ridley Scott, is a short explicit title that immediately conveys a sense of mystery and suspense. The simplicity of the title contributes to the film's effectiveness in marketing, making it easy to remember and creating a strong, lasting impression. The brevity of "Alien" might be ideal for the science fiction and horror genres, emphasizing the enigmatic nature of the extraterrestrial threat and appealing to an audience seeking an adrenaline-fueled experience. On the other hand, "Eternal Sunshine of the Spotless Mind," directed by Michel Gondry, presents a lengthy and poetic title that sparks curiosity and suggests a more complex narrative. The title, derived from a line in Alexander Pope's poem, implies a blend of romance, philosophy, and introspection. The deliberate choice of a longer and more intricate title aligns with the film's exploration of memory, relationships, and the human psyche. This approach caters to an audience interested in thought-provoking and emotionally resonant stories, setting the tone for a more nuanced viewing experience.

{% include success-length-characters-heatmap.html %}

Upon plotting the number of characters in movie titles against the success of the movies, we observe a heavy-tailed distribution with a maximum for 11 characters, and no discernible correlation. This suggests that the length of movie titles, in terms of character count, does not inherently influence their level of success.


### Part-of-speech tagging : an insight on grammatical structure of the title (verbs, adjective)

Moving on to the grammatical construction of titles and its association with movie success, we use Part-of-Speech tagging. This analysis helps us unravel the potential impact of specific parts of speech, including verbs, adjectives, nouns, and more, on the overall success of the movie.

{% include success-grammatical-tag.html %}

There is a strong success indicator for films containing 'adjectives', 'adverbs' and 'conjunctions' (the success indicator is greater thatn '0.79'). However, films with nouns seem to have a null success indicator which seems strange. We checked wheter this low success associated with 'nouns' was not an artefact. When looking at each tag occurence, we count  2620 'nouns'. The variance is thus quite low and it is reliable to assert that nouns do not influence the success of the movie title. 

We also need to look at the number of films in each categories to see if comparing the error bars is relevant or not. For instance the number of movie titles containing 'adverbs' is lower than other tags categories (187 titles contain adverbs vs 2620 titles contain nouns). This results in higher variance for the adverb tag. 


### Named Entity Recognition:

The inclusion of a named entity in a movie title can be a strategic storytelling choice that immediately centers the narrative around specific topics. This approach serves multiple purposes in shaping audience expectations and marketing the film. That's why we used Named Entity Recognition to unravel the influence of having 'Person', 'Location' or 'Date' objects in the title on success.

We first tried to see the influence of 'Organization' and 'Person' occurences on the movie success. 

{% include success-org-pers-ner.html %}

We see that the number of 'Organisation' and 'Person' entities influence the success indicator. 'Organisation': the success is maximum for 2 occurences and minimum for 3. 'Person': the success is maximum for 3 occurences and zero for 0 to 2 occurences. However, we think that the high succes of titles with 2 'Organization' NER or 3 'Person' NER might be due to a low number of occurences in the dataset, hence creating high variance.

Instead of looking at the number of occurences of 'Person' and 'Organization', we can decide to compare movie titles with at least one 'Person' or one 'Organization' entity. If the title contains both types, it will be considered in both categories.

According to this plot, having a named entity 'Organization' or 'Person' in the movie title influences the success of the movie (almost multiplied by '3'). We don't see much difference between the 'Organization' and the 'Person' type. However, we must nuance those results by taking into account the previous plots, the difference with titles that contain no 'Organisation' or 'Person' item might be significant because of the few titles that contain more than one occurence.


### Presence of protagonist name


Featuring the protagonist's name in the title establishes a clear focal point for the audience. It signals that the story revolves around this central character, offering a glimpse into their journey, struggles, or triumphs. This clarity can attract viewers who are drawn to character-driven narratives and are interested in following the personal development of the main character. Secondly, the protagonist's name in the title provides a straightforward identifier, making it easier for audiences to recall the movie. This can be especially effective in building a franchise or series around a particular character, creating a recognizable brand.
Examples of movies that incorporate the protagonist's name into the title include "Forrest Gump," , "Rocky",“Annie Hall”, “John Wick” …


{% include success-protagonist.html %}


Based on this plot, the presence of the 'Protagonist name' in the title is associated with a lower success: the 'Success indicator' decreases in average by '0.22' . Movie titles that explicitly mention the protagonist's name may reveal too much about the plot, leaving little room for audience curiosity, or on the contrary not tell enough about the movie theme. This is surprising but it will have not be very important since only negligeable part of the movies (49/2412 = 0.2%) have the 'Protagonist name' in the title, and it might bring too much variance to our analysis. 



### Sentiment analysis

We want to investigate the lexical fields and the conotation of our titles. This would provide us useful information to link with success, time, genre. We make the naive assumption that darker, scarier movies are associated with negative sentiments, whereas comedy and romance films are associated with more positive sentiments.

A positively framed title can generate enthusiasm and attract viewers with the promise of an uplifting or enjoyable experience. For example, titles like "Happy Feet" or "The pursuit of Happiness" evoke positive emotions and may attract audiences seeking a feel-good or heartwarming cinematic experience. These titles create an expectation of positivity and may contribute to the film's success, especially if the content aligns with the sentiment conveyed by the title.


Conversely, a negatively framed title might generate intrigue or set a darker tone, potentially attracting audiences interested in suspense, thrill, or drama. Movies like "Requiem for a dream" or "No Country for Old Men" use negative sentiments in their titles to signal intense, suspenseful narratives. In these cases, the negative sentiment may contribute to the film's success by attracting audiences who appreciate more challenging or intense storytelling.

{% include success-sentiments.html %}

The 'Sentiment score' does not seem to have a significant influence on the 'Success indicator'. When looking at the distribution of movies according to sentiment analysis, both scores are centered on 0, meaning most titles do not convey any sentiment. 

## Prediction

### Genre classification 

A movie genre classification system was developed through two distinct but complementary approaches to predict the movie genre based on the movie title. A vocabulary lists for each genre was generated with the assistance of **generative AI** and a **classifier** was trained using movie summaries to capture genre-specific vocabulary. Movie titles were subsequently tested against this combined vocabulary for genre classification. 

{% include precision-recall.html %}

{% include precision-recall-0-1.html %}
The accuracy of our model remained low at '6%', with a precision of '29%'. We can see that some genres are predicted more or less efficicently, for instance romance and thriller movies seems to be better predicted, while adventure, documentary or world-cinema are are to predict. 
Movie titles are designed with the intention of **catching attention** and providing a glimpse into the theme of the movie. However, they might not always encapsulate the intricate details and nuances of a genre : titles are **inherently concise**, aiming to be memorable. This brevity often leads to abstractness and ambiguity, making it **challenging** to extract relevant genre-related information and eading to diverse genre predictions.


### Prediction of the movie success

We first wanted to have a look at how the features of a the title could contribute to it's success. We built a machine learing algorithm, a 'Random Forest Regressor', to look into it and try to predict the success of movies using only the title and the features we extracted (part of speech, title length, sentiment analysis...). We choosed the main features from our key features analysis about titles and only removed the few one that were present in very few or no movies (such as Interjections), and the genre classification as it has a very low accuracy. Here we tested it on movies realeased before (20% of the initial dataset; first graph) and after 2012 (second graph). The training set used consitsted of 80% of the dataset.

{% include Actual_vs_predicted_SI_before_2012.html %}

{% include Actual_vs_predicted_SI_after2012.html %}

The predictability is very low (mean squarred error = 0.89 for movies before 2012), there is no correlation between the Predicted Success indicator and the Actual Sucess indicator. The components of titles analysed here seems to have a very low influence on the success of movies. Maybe some other features should be taken into account, or maybe titles are not so important for the success of movies... We still tried to look at the contribution of each features to our model, to have an idea of the importance of each of them.

{% include Pie_chart_features_contrib_title_only.html %}

The main features are here the features that have a large range of values for each movies allowing the model to be more discriminative and more precise (the title length in number of words or charachters). Some other features may be more discriminative but are only represented by few movies and do not appear here as such important features.

To continue further our analysis we tried to look into the predictability taking into account other features and cofounders that not always related to the title such as the movie runtime, the main genre, the presence of famous actors and so on.

{% include Actual_vs_predicted_SI_all.html %}

The preditability is increased but still remains low (mean squarred error = 0.74). Among all these features, Movie_runtime, Movie_countries, Famous_actor_count, Movie_main_genre, and Movie_release_date are the most important features to take into account (these five features alone contrbute to more than 60% of all the features contributions to the Random Forest Regressor). The features that have a broader range of values are on average contributing more than the other features. The ones that are less contributing are features for which only few movies have a different values from the others (such as Conjunctions, Adjectives, Verbs, Protagonist in title...).

{% include Pie_chart_features_contrib.html %}


Before the conclude this analysis, here are some more fun facts about movie titles :

{% include carousel_2.html %}


## Conclusion 

The complexity of predicting a movie's success arises from the multifaceted nature of the movie industry. While a title can capture attention and generate initial interest or lasting memories, it is often overshadowed by several influential factors. Renowned actors, considerable movie production studio and famous directors bring a built-in audience, enhancing the film's marketability. Moreover, intrinsic movie features, such as runtime, release date, the countries it reaches, and its genre, contribute significantly to its reception. Therefore, the success of a movie is a complex outcome influenced by various factors, with the title being just one aspect amid a more intricate interplay of elements.


![image-title-here](/assets/img/designers.png){:class="img-responsive"}
We found the 2023 net worth of title designers, the most important being those of Kyle Cooper (Spider Man), Pablo Ferro (Dr. Strangelove) and Maurice Binder (James Bond). Our study actually suggests that movie producers may find more substantial returns by investing in stellar actors, accomplished directors, and other critical features. 

Still, some titles will forever remain in our memory. 

Now you know more about movie road to success !

![image-title-here](/assets/img/hollywood.png){:class="img-responsive"}


-------------
