---
image: https://docs.privateai.com/assets_new/meta.png
description: >-
  Explore our AI-based recommendation system designed to elevate your experience
  on PrivateAI.
---

# Recommendation system

#### Purpose

Introducing an AI-powered recommendation system within PrivateAI aims to significantly boost user retention rates by delivering personalized content suggestions. By analyzing recent search queries, liked articles, and user profile information, the system ensures that users are continuously exposed to relevant publications during their search process. This proactive approach enhances user satisfaction and increases engagement with the platform's offerings.

### Implementation approach

<!-- <figure> -->

<img src="/assets_new/AI_POWERED_FEATURES/Recommendation_system/0.png" alt="" />
<!-- <figcaption></figcaption></figure> -->

To implement this recommendation system, leveraging readily available APIs and libraries such as froomle.com or TensorFlow Recommenders (TFRS) is proposed. The integration scheme involves:

1. **Item API module:**
   - Maintains a catalog of publicly available publications on the PrivateAI platform, facilitating seamless updates to the recommendation engine without exposing private details.
2. **User profile integration:**
   - Provides user profile data to generate user embeddings, enhancing the accuracy of personalized recommendations.
3. **Events API and recommendations API:**
   - Establishes an event flow from the PrivateAI frontend to the recommendation engine, enabling continuous training and real-time recommendation updates based on user interactions.

#### Solution

For recommending PrivateAI network items, a two-tower model (Yi et al.) is suggested, leveraging TensorFlow Recommenders (TFRS) for its robustness and flexibility. This model utilizes a dot product operation to predict user-article affinity, ensuring efficient matching between user preferences and available publications.

**Simplified schema of the Two-Tower model:**

<!-- <figure> -->

<img src="/assets_new/AI_POWERED_FEATURES/Recommendation_system/1.png" alt="" />

<!-- <figcaption></figcaption></figure> -->

**Key Features:**

1. **Model training and deployment:**
   - The recommendation model is trained and updated based on user events and catalog changes, ensuring relevance and timeliness of recommendations.
2. **Data privacy:**
   - Only publicly available articles are included in the recommendation catalog, and user details are used solely for feature generation without sharing with third parties.
3. **User interaction:**
   - Users have the option to evaluate recommendations, providing feedback to enhance the model's accuracy over time.

**Implementation Flexibility:** While TFRS is the primary recommendation engine proposed, alternatives may be considered based on implementation timelines and specific requirements. This approach underscores the commitment to improving user experience through relevant and timely content recommendations, supporting researchers and users in navigating a vast data store effectively.
