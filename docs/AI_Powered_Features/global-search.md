---
image: https://docs.privateai.com/assets_new/meta.png
description: >-
  Discover how this integration offers comprehensive search capabilities and encourages contributions to new research areas, enhancing your experience on PrivateAI.
---

# Global Search

#### Purpose

When a user searches the PrivateAI database, the most relevant results from Google or another search engine are shown in a separate section. This demonstrates that PrivateAI considers the global context and sincerely helps users find valuable information, whether in its own database or elsewhere. It also highlights the uniqueness of PrivateAI documents or helps users identify gaps, potentially encouraging them to contribute papers on the subject.

#### Implementation approach

We propose integrating a Large Language Model (LLM) and a Recommendation Engine to enhance search capabilities. Here's how it works:

1. **User interaction:**
   - Users enter their search query through the frontend.
2. **Backend operations:**
   - The frontend triggers two processes:
     - The LLM generates a search query for the integrated search engine.
     - The Recommendation Engine updates user embeddings based on the search query.
3. **Result integration:**
   - The system aggregates top results from both the LLM-driven search and previous successful recommendations.
4. **Display to user:**
   - Combined results are presented in the Recommendations section of the frontend, ensuring users receive comprehensive and relevant information.
5. **Continuous improvement:**
   - Clicking on external sources triggers updates to improve future recommendations.

#### Solution

Upon implementing the Langchain interface and Recommendation Engine, additional modules for processing successful result embeddings and integrating external engines will be developed. Frontend adjustments will optimize performance, leveraging various LLM models accessible via Langchain. Our proposed approach remains flexible pending validation and approval of specific requirements.
