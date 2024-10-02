---
image: https://docs.privateai.com/assets_new/meta.png
description: >-
  This section provides an overview of the knowledge graphs that are to be built
  for the PrivateAi project.
---

# Graph Manifest

_Manifest is probably and likely going to be edited and updated further taking into account the experience gained during the development._

### Notes about result reproducibility

In any research, reproducibility is a critical parameter. It refers to the ability to achieve the same results when the same inputs are used. In our context, the reproducibility degree of a constructed graph is proportional to the number of limitations set during its construction.

### Current approach

We currently combine the SpaCy model with a custom script that applies the maximum number of limitations to the graph construction process. This script is a strict algorithm that ensures consistent outputs for the same inputs. However, this approach has some disadvantages:

- **Complexity of high-quality triplet extraction:** Extracting high-quality triplets requires accounting for numerous linguistic cases, necessitating either extensive theoretical research or a less efficient trial-and-error method of modification and issue correction until achieving satisfactory results.
- **Mechanistic nature:** This mechanistic approach is not fully aligned with the criteria detailed later in this document.

### Alternative approach

Conversely, eliminating all limitations on the text processing model results in unpredictable outcomes, differing with each attempt. This is also not ideal, as it prevents understanding how to improve the model for better results.

### Balanced solution

To avoid these extremes, we introduce the following criteria to guide a balanced approach. These criteria allow for flexibility in choosing alternatives or correcting the approach while ensuring high-quality results and reproducibility.

### Criteria for a correct graph

1. **Readability/Interpretation possibility:**
   - The primary criterion is the readability and analyzability of the graph. Since the product is designed for scientists, the graph should facilitate quick analysis and information gathering.
2. **Size:**
   - The graph should be manageable in size. Typically, an article comprises 5-10 pages of text, often including tables and charts, resulting in fewer pages of actual text. The corresponding number of links should be 30-50 at maximum.
3. **Clarity:**
   - Avoid loops (edges that begin and end at the same node) and multiple edges (more than one edge between the same nodes). Such graphs are easier to analyze, so similar cases should be minimized.
4. **Certainty:**
   - Avoid pronouns, as they lack context and complicate graph review. Entities should have consistent naming or be processed to ensure clarity.
5. **Informativity:**
   - The graph should contain only relevant information, minimizing incomprehensible or unnecessary entities. While informativity is subjective, it is essential to strive for clarity from a human perspective.
6. **Connectivity:**
   - Balance connectivity to avoid highly-connected unreadable graphs and low-connected graphs that fragment into subgraphs. Minimize the number of graph components and separate non-connected edges.
7. **Duplication-free:**
   - Merge similar nodes to reduce their number. For example, "Vitamin C" and "concentration of Vitamin C" should be combined into "Vitamin C."
8. **Contextity:**
   - Extract links not only from grammatical structures but also by analyzing the context and meaning of sentences and paragraphs. Contextual links are more valuable.
