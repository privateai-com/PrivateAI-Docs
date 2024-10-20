---
image: https://docs.privateai.com/assets_new/meta.png
description: >-
  Criteria for selecting a suitable Large Language Model for text analysis and
  triplet extraction, focusing on open-source models with Transformer
  architecture.
---

# Integration of LLM

### LLM selection

To effectively integrate a Large Language Model (LLM) for text analysis and triplet extraction in PrivateAI, it is crucial to select an appropriate model based on several criteria. We will evaluate open-source models with Transformer architecture, focusing on key aspects such as the Named Entity Recognition (NER) task, triplet extraction, and solution comparison.

#### Integration of LLM

**Our criteria for selecting a suitable Large Language Model:**

1. **Open-source models with Transformer architecture:** These models offer flexibility and are typically well-supported by the community.
2. **NER task with explicit label specification:** The model handles common categorized entities (e.g., person, location) effectively.
3. **NER task without label specification for PrivateAI:** The model extracts all entities without requiring predefined labels.
4. **Subject-link-object approach:** This method is essential for effectively extracting triplet components.

#### Solution comparison

**Criteria for evaluation:**

1. **Development time**
2. **Development complexity**
3. **Configurability**
4. **Potential triplet quality**
5. **Triplet processing capabilities**
6. **Reproducibility**

| Criteria                            | Spacy + Python Script (Current Solution)                           | Mistral/Mixtral                                                 | spaCy_llm                                                                                                                                                  |
| ----------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Development time**                | Low                                                                | High                                                            | Medium                                                                                                                                                     |
| **Development complexity**          | Low                                                                | Medium                                                          | Low                                                                                                                                                        |
| **Configurability**                 | Medium                                                             | High                                                            | High                                                                                                                                                       |
| **Potential triplet quality**       | Low                                                                | Medium                                                          | High                                                                                                                                                       |
| **Triplet processing capabilities** | Low                                                                | High                                                            | High                                                                                                                                                       |
| **Reproducibility**                 | High                                                               | Low                                                             | Medium                                                                                                                                                     |
| **Overall evaluation**              | Demo-appropriate solution. Quick solution with low output quality. | Thorough and long solution with potential for perfect triplets. | Out-of-box solution with valuable functionalities for entity and relation extractions, bringing many possibilities. Most stable solution at current stage. |

#### Conclusion

Integrating knowledge graph case studies and AI model training into PrivateAI's development reveals promising enhancements in data analysis and representation. By selecting the appropriate LLM and leveraging spaCy_llm, we enhance the quality of triplet extraction and overall data insights for PrivateAI. This approach ensures a balance between development efficiency and the quality of output, paving the way for advanced data analysis capabilities.
