---
image: https://docs.privateai.com/assets_new/meta.png
description: Wikigraph implementation for PrivateAI.com Knowledge Graph nodes
---

# Wikigraph

### Introduction <a href="#introduction" id="introduction"></a>

The objective was to enhance the nodes within the article's knowledge graph and add an extra layer of data validation by incorporating data from Wikipedia. To achieve this, the aim was to access information for each node within the graph interface.

#### Implementation and Evaluation <a href="#implementation-and-evaluation" id="implementation-and-evaluation"></a>

1. **Incorporating Wikipedia Data**:
   - **Node Enhancement**: Each node in the knowledge graph would be enriched with relevant data from Wikipedia, providing additional context and validation.
   - **Graph Interface Integration**: Users would be able to access Wikipedia information for each node directly within the graph interface (e.g., as shown in the demo).
2. **Demo Version**:
   - A demo version was proposed to demonstrate the intended process and functionality. This would serve as a proof of concept, showcasing how Wikipedia data can be integrated into the knowledge graph and accessed through the interface.

The demo aimed to evaluate the feasibility and effectiveness of this approach, ensuring that the enriched nodes and validation layer significantly improve the quality and reliability of the knowledge graph.

### Solutions <a href="#solutions" id="solutions"></a>

#### **Data** <a href="#data" id="data"></a>

The knowledge graph obtained from article 2 was used as an example. This graph includes a variety of entities, representing both specific objects or concepts (e.g., "Man" or "Chronic diseases") and more complex phrases (e.g., "Bursting of the asset bubble and economic crisis of the 1990s").

An example of this knowledge graph is illustrated in Figure 1.

Figure 1: Example of a Knowledge graph

<!-- <figure> -->

<img src="/assets_new/GRAPHS/WikiGraph/33.jpg" alt="" />

<!-- <figcaption></figcaption></figure> -->

#### **Search for the Relevant Wikipedia Article**: <a href="#search-for-the-relevant-wikipedia-article" id="search-for-the-relevant-wikipedia-article"></a>

**Request:**

To enrich knowledge graph data with information from Wikipedia, the most convenient method is to use the official Wikipedia API on the client side. Due to potential errors or paraphrases in node names, it is essential to locate the appropriate Wikipedia article first. This is done by executing a search query[4](https://docs.google.com/document/d/1AnoN-d6kyK7RET_TpcX3XtpqCxDf4OaFOdAgnngfsEc/edit#heading=h.3dy6vkm):

```
GET: https://en.wikipedia.org/w/api.php
Params:
action: 'query'
format: 'json'
list: 'search'
utf8: 1
srsearch: <node label>  # For example "Chronic diseases"
```

**Example**: For the node label "Chronic diseases," the search query retrieves the nearest relevant article, such as "Chronic condition."

#### **Retrieve a Summary of the Article**: <a href="#retrieve-a-summary-of-the-article" id="retrieve-a-summary-of-the-article"></a>

**Request:**

```
GET: https://en.wikipedia.org/w/api.php
Params:
format: "json"
action: "query"
prop: "extracts"
exintro: ""
explaintext: ""
redirects: 1
titles: <title>  # Title from the previous request
```

**Example:**

For the article title "Chronic condition," the query retrieves a short excerpt from the Wikipedia article.

By following these steps, you can effectively enrich the nodes in your knowledge graph with summarized Wikipedia data, enhancing the depth and reliability of the information represented.

(https://en.wikipedia.org/wiki/Chronic\_condition) with the following content:

> A chronic condition (also known as chronic disease or chronic illness) is a health condition or disease that is persistent or otherwise long-lasting in its effects or a disease that comes with time. The term chronic is often applied when the course of the disease lasts for more than three months. Common chronic diseases include diabetes, functional gastrointestinal disorder, eczema, arthritis, asthma, chronic obstructive pulmonary disease, autoimmune diseases, genetic disorders and some viral diseases such as hepatitis C and acquired immunodeﬁciency syndrome. An illness which is lifelong because it ends in death is a terminal illness. It is possible and not unexpected for an illness to change in deﬁnition from terminal to chronic. Diabetes and HIV for example were once terminal yet are now considered chronic due to the availability of insulin for diabetics and daily drug treatment for individuals with HIV which allow these individuals to live while managing symptoms.
>
> In medicine, chronic conditions are distinguished from those that are acute. An acute condition typically affects one portion of the body and responds to treatment. A chronic condition, on the other hand, usually affects multiple areas of the body, is not fully responsive to treatment, and persists for an extended period of time.
>
> Chronic conditions may have periods of remission or relapse where the disease temporarily goes away, or subsequently reappears. Periods of remission and relapse are commonly discussed when referring to substance abuse disorders which some consider to fall under the category of chronic condition.
>
> Chronic conditions are often associated with non-communicable diseases which are distinguished by their non-infectious causes. Some chronic conditions though, are caused by transmissible infections such as HIV/AIDS. 63% of all deaths worldwide are from chronic conditions. Chronic diseases constitute a major cause of mortality, and the World Health Organization (WHO) attributes 38 million deaths a year to non-communicable diseases. In the United States approximately 40% of adults have at least two chronic conditions. Living with two or more chronic conditions is referred to as multimorbidity.

### Challenges and Solutions for Accessing Wikipedia Data <a href="#challenges-and-solutions-for-accessing-wikipedia-data" id="challenges-and-solutions-for-accessing-wikipedia-data"></a>

#### **Challenges** <a href="#challenges" id="challenges"></a>

Sometimes a node can be a lengthy text, such as "Bursting of the asset bubble and economic crisis of the 1990s," and there may not be a corresponding Wikipedia page. This can lead to irrelevant Wikipedia articles being displayed. For example, a node named "Figure 5A" (link to the figure in the text) might return the article "Northrop F-5" (a family of supersonic light fighter aircraft).

#### **Potential Solutions** <a href="#potential-solutions" id="potential-solutions"></a>

1. **Title Matching by Similarity**:
   - **Description**: Display the Wikipedia article only if its title matches the node title by a certain percentage.
   - **Implementation**: Use the Levenshtein distance to calculate the match percentage.
   - **Example**: For a node titled "Chronic Diseases," the article "Chronic Condition" might be considered relevant if the match percentage is high enough.
2. **Word Match Check**:
   - **Description**: Ensure that a certain percentage of words in the article title match the words in the node name.
   - **Example**: For the node "Chronic Diseases," check if a certain number of words ("Chronic" and "Diseases") match with the title "Chronic Condition."

#### **Drawbacks** <a href="#drawbacks" id="drawbacks"></a>

- These methods might introduce a coarse cutoff. For instance, the article "Chronic Condition" could be appropriate for the node "Chronic Diseases," but might be excluded by strict matching criteria.
- However, these methods help reduce the display of unreliable or incorrect data and are relatively simple to implement.

### **Conclusion** <a href="#conclusion" id="conclusion"></a>

Providing users with access to information from Wikipedia can enhance their experience. In many cases, searching for a Wikipedia article will yield relevant information, but there can be instances of incorrect or irrelevant results. This issue can be addressed either by relying on user judgment or by implementing filtering mechanisms to exclude irrelevant articles. By carefully balancing accuracy and ease of implementation, these methods can significantly improve the reliability of the data presented.

### References <a href="#references" id="references"></a>

1. Demo: [https://wikigraph.netlify.app](https://wikigraph.netlify.app/) Source: [https://github.com/lee-janice/wikigraph](https://github.com/lee-janice/wikigraph)
2. Ruckstuhl, M.M., Bischof, E., Blatch, D., Buhayer, A., Goldhahn, J., Battegay, E., Tichelli, A., Ewald, C.Y.: Translational longevity medicine: a Swiss perspective in an ageing country. Swiss Med Wkly. 153, 40088 (2023). [https://smw.ch/index.php/smw/article/view/3348](https://smw.ch/index.php/smw/article/view/3348)
3. MediaWiki Action API: [https://www.mediawiki.org/wiki/API:Main_page](https://www.mediawiki.org/wiki/API:Main_page)
4. MediaWiki API:Search: [https://www.mediawiki.org/wiki/API:Search](https://www.mediawiki.org/wiki/API:Search)
5. MediaWiki API:Query: [https://www.mediawiki.org/wiki/API:Query](https://www.mediawiki.org/wiki/API:Query)
6. Levenshtein distance: [https://en.wikipedia.org/wiki/Levenshtein_distance](https://en.wikipedia.org/wiki/Levenshtein_distance)
