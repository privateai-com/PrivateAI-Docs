---
image: https://docs.privateai.com/assets_new/meta.png
description: Bonus system with data storing in the blockchain
---

# Initial Bonus System Implementation

**Overview**

The bonus system in PrivateAI incentivizes users to contribute valuable content to the platform by rewarding them with bonus points for each unique article they upload. These points serve as a measure of user activity and contribution.

**Key features**

1.  Earning points:

    Users receive bonus points for each unique article they publish on the platform. If the user remove an article from the web-site, his bonus point for this article will be removed.

2.  Visibility:

    The number of bonus points and uploaded articles is displayed on the user interface across all platform pages.

3.  Management:

    Users can view their bonus points and transaction history to track their contributions.

To maintain integrity, the system includes measures against abuse such as:

- Checking file hashes to prevent uploading the same content under different names.
- Converting uploaded files to a standard format for comparison.
- Implementing content similarity checks to detect minor modifications.

**Future development**

While bonus points currently serve as a virtual reward, future plans include converting these points into valuable rewards as the platform evolves. This system encourages active participation and ensures the quality of content contributed to PrivateAI.
