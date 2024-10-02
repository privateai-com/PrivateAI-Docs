---
image: https://docs.privateai.com/assets_new/meta.png
description: >-
  The main goal is to give users the possibility to evaluate the published
  articles and identify the data with inappropriate content.
---

# Like system

### Features for the Like-Dislike System on PrivateAI Platform

**General Features:**

- **Universal Rating System**: All users can rate any open-sourced article.
- **Permission-Based Rating**: Access-restricted articles can only be rated by users with appropriate permissions.
- **Single Rating per User**: Users can like or dislike an article only once.
- **Real-Time Counters**: Like and dislike counters are updated instantly upon user actions.
- **Flexible Action Control**: Users can cancel their like or dislike at any time by clicking the respective button again.
- **Vote Adjustment**: Users can switch their rating from like to dislike or vice versa, transferring the vote accordingly.

**Display Features:**

- **Visibility**: Like and dislike counters are displayed prominently on the File Structure and Knowledge Base pages.
- **Highlighting Top and Bottom Performers**: Articles are highlighted based on their ratings:
  - **Green Highlight**: When likes exceed dislikes by 5 times and both exceed 20.
  - **Red Highlight**: When dislikes exceed likes by 5 times and both exceed 20.

#### Wireframes

**1. File structure page**

<!-- <figure> -->

<img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Like_system/0.webp" alt="" />

<!-- <figcaption></figcaption></figure> -->

The title “Article community review” and related buttons were added. The button logic and the principles of like accrual is mentioned above. The button state table is presented below.

**2. Knowledge base page**

<!-- <figure> -->

<img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Like_system/1.webp" alt="" />

<!-- <figcaption></figcaption></figure> -->

Only displaying the likes and dislikes was added. These icons are clickable, their logic is the same as stated for File structure page buttons. The examples of highlighting the best rated and worst rated articles are shown as well.

In case a user has already liked or disliked the article, the corresponding icon is filled.&#x20;

#### Button states table

|                                                  | Common article                                                                                                                                          | Most-liked article                                                                                                                                                                                                                                     | Most-disliked article                                                                                                                                                                                                                                  |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| A user has no access to the article              | <p><img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Like_system/2.png" alt="" /></p><p>- buttons are inactive</p>                                     | <p><img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Like_system/3.png" alt="" /></p><p>- buttons are inactive</p><p>- like button is outlined with green color</p>                                                                                   | <p><img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Like_system/4.png" alt="" /></p><p>- buttons are inactive</p><p>- dislike button is outlined with red color</p>                                                                                  |
| A user did not make rates of this article before | <p><img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Like_system/5.png" alt="" /></p><p>- button are active</p><p>- button are not highlighted</p>     | <p><img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Like_system/6.png" alt="" /></p><p>- buttons are active</p><p>- button are not highlighted</p><p>- like button is filled with green color</p>                                                    | <p><img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Like_system/7.png" alt="" /></p><p> buttons are active</p><p>- button are not highlighted</p><p>- dislike button is filled with red color</p>                                                    |
| A user liked the article                         | <p><img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Like_system/8.png" alt="" /></p><p>- button are active</p><p>- like button is highlighted</p>     | <p><img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Like_system/9.png" alt="" /></p><p>- buttons are active</p><p>- like button is highlighted</p><p>- like button is filled with green color</p><p>- like icon is filled with green color</p>       | <p><img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Like_system/10.png" alt="" /></p><p>- buttons are active</p><p>- like button is highlighted</p><p>- dislike button is filled with red color</p><p>- like icon is filled with gray color</p>      |
| A user disliked the article                      | <p><img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Like_system/11.png" alt="" /></p><p>- button are active</p><p>- dislike button is highlighted</p> | <p><img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Like_system/12.png" alt="" /></p><p>- buttons are active</p><p>- dislike button is highlighted</p><p>- like button is filled with green color</p><p>- dislike icon is filled with gray color</p> | <p><img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Like_system/13.png" alt="" /></p><p>- buttons are active</p><p>- dislike button is highlighted</p><p>- dislike button is filled with red color</p><p>- dislike icon is filled with red color</p> |
