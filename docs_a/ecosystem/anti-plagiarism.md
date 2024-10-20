---
image: https://docs.privateai.com/assets_new/meta.png
description: >-
  PrivateAI's efforts to enhance its knowledge base by tackling two key
  challenges: data duplication and devaluation.
---

# Anti-plagiarism

The primary objective of PrivateAI's anti-plagiarism system is to ensure that the knowledge base remains clear and informative. This system addresses two significant issues:

1.  **Data duplication:**

    The repeated upload of identical articles or sections by different users reduces the proportion of unique and valuable information in the knowledge base.

2.  **Data devaluation:**

    The submission of low-quality or nonsensical articles diminishes the overall quality of the knowledge base.

These issues often arise from attempts to exploit the bonus system, increase profile activity, or from malicious intent. To mitigate these problems, PrivateAI employs a like-dislike system allowing users to flag low-quality content for review and potential removal. Additionally, an automated anti-plagiarism system will detect undesirable content during the upload process.

**Key abuse cases and proposed solutions:**

- Modifying entire files:\
  Solution: Compare the hashes of the uploaded file with existing files. If the hashes match, the files are identical and the upload is blocked.
- Uploading the same file in different formats:\
  Solution: Convert all documents to .txt format upon upload and compare them with the user's existing uploads.
- Minor modifications:

  Solution: Implement algorithms to detect slight changes that do not significantly alter the content, ensuring the core information remains unchanged.

- Changing keyboard layout/text case/text encoding:

  Solution: Develop detection mechanisms for these technical modifications to identify unchanged core content despite superficial alterations.

- Merging and splitting files:

  Solution: Identify and flag documents that are mere combinations of existing texts without adding new, valuable information.

- Random file generation**:**\
  Solution: Use content analysis to detect and block files that lack meaningful or coherent information.
- Overusing citations:

  Solution: Detect files that consist mostly of citations and provide little original content, ensuring they do not diminish the platform's value.

- Paraphrasing:

  Solution: Identify and flag paraphrased content that replicates existing information without adding new insights.

**Important considerations**

1.  **Internal comparison:**

    All files will be compared only within the PrivateAI system. This approach is crucial in the early stages to gather as many unique articles as possible. External comparisons would require complex identity recognition systems, which are planned for future implementation.

2.  **Plagiarism threshold:**

    A plagiarism threshold will be established, such as 10%. Articles with a small percentage of duplicated text may be allowed, but those exceeding the threshold will be blocked from publication.

3.  **Citations:**

    The system will distinguish between original content and citations. It will allow a certain volume of citations, blocking articles that overuse them to ensure a high standard of original content on the platform.
