---
image: https://docs.privateai.com/assets_new/meta.png
description: What is PrivateAI
---

# What is PrivateAI

Decentralized AI platform that facilitates the storage, management, sharing, transfer and monetization of high value, patent-ready and IP-rich scientific data assets in a highly secured environment.

## Data storage

Users upload their data to PrivateAI via a user-friendly interface or API integration. The data is then encrypted by a trusted server, ensuring high security from unauthorized access.

After encryption, the data is transmitted to PrivateAI's decentralized storage network. This network, composed of nodes distributed across various locations, enhances security and redundancy. Nodes are incentivized to ensure the infrastructure remains robust and reliable.

PrivateAI's network supports Gen3 and Gen4 SSDs, ensuring data is securely stored and readily accessible. The data remains encrypted throughout the process, with a separate encryption server adding an extra layer of security.

The decentralized system leverages distributed technology for a scalable and resilient storage solution. Incentivizing node participation keeps the network efficient and capable of handling large data volumes while maintaining high security and availability.

## Data processing

PrivateAI employs advanced AI solutions to extract structured knowledge graphs from raw data, prioritizing data integrity and confidentiality throughout the process. Initially, raw data undergoes meticulous pre-processing and optimization using proprietary algorithms. This step ensures data uniformity and prepares it for integration into the knowledge graph ecosystem.

Once pre-processed, the data is transformed into a visual representation that enhances interpretability and facilitates detailed analysis. This visualized data is then integrated into PrivateAI's secure private Large Language Model (LLM). This model is specifically engineered to handle sensitive intellectual property securely, maintaining data integrity and confidentiality.

Key criteria for constructing an effective graph include readability, ensuring that the graph is easily interpretable and analyzable. After processing the graph is optimized to manage complexity, typically containing 30-50 links per average article. Clarity is maintained by avoiding loops and multiple edges, which simplifies analysis. Informativity ensures that the graph presents essential information concisely, enhancing its utility. Connectivity is balanced to maximize information retrieval without overwhelming complexity.

PrivateAI also emphasizes adherence to open-source principles and utilizes Transformer architecture for scalability and compatibility. This architecture supports the platform's evolution from initial testing with a minimal model version to full-scale production with a larger model, ensuring robust performance across diverse applications.

By integrating the knowledge graph with the private LLM, PrivateAI enables efficient data management and utilization. Users benefit from enhanced analytical capabilities while ensuring the protection of proprietary information. This approach underscores PrivateAI's commitment to leveraging AI technologies for secure and effective knowledge management.

## Knowledge graph formation

The formation of knowledge graphs involves several systematic steps that transform raw, unfiltered data into a structured, analyzable format:

- #### Text Interpretation:

  A custom file reader is used to read the raw article or a document and convert it into clarified text. This text is then processed through a Spacy model, which tags the text and generates a doc object containing linguistic annotations.

- #### Entity Preparation:

  A Python script performs verbal and non-verbal analysis on the tagged text. This involves identifying verbs and their constructions, as well as marking entities (such as names, locations, and other significant terms) within the text. This step gives a list of verb constructions and a list of marked entities.

- #### Link Construction:

  These lists undergo dependency analysis using dependency analysis. This step examines the grammatical structure of the sentences to understand how words are related, specifically focusing on subjects, verbs (links), and objects. This analysis results in an initial list of triplets.

- #### Additional Processing:

  The initial triplet list is refined through several steps:

  - Error Processing: identifying and correcting any errors in the triplets.

  - Clause Processing: handling complex sentence structures to ensure accurate triplet extraction.

  - Homogeneous Word Processing: standardizing terms to ensure consistency across the triplets.

- #### Graph Construction:

  - Corrected triplet list is transformed into a knowledge graph using graph picturing. This involves creating nodes for subjects and objects, and directed edges representing the relationships between them. The graph undergoes filtration processes such as node merging and low-connected node deletion to simplify and enhance the graph.

### Triplets formation

Triplets play a crucial role in the creation of knowledge graphs. They convert unstructured text into a structured format, facilitating better data analysis and insight generation. The process includes several steps:

Named Entity Recognition (NER): identifies and classifies entities such as names, locations, and organizations within the text.

Relation Extraction (RE): determines the relationships between the identified entities.

Dependency Parsing: analyzes the grammatical structure to identify subjects, verbs, and objects, and understand their relationships.

Triplet Formation: combines the outputs of NER, RE, and dependency parsing to form triplets in the [subject, link, object] format.

These triplets serve as the fundamental building blocks for creating knowledge graphs, providing a clear and organized representation of data.

## Data Monetization in PrivateAI

PrivateAI offers a comprehensive data marketplace where users can buy and sell data in various formats, including raw data, knowledge graphs, and large language models (LLMs). The platform features both an intuitive user interface and an API, facilitating seamless data transactions, continuous data collection, and real-time retrieval.

Users of the PrivateAI platform can choose from subscription plans tailored to different needs, ranging from basic access to advanced usage limits and integration support. Clients subscribe to AI models and pay in PGPT tokens, which further monetizes the data through advanced analytics. Additionally, clients pay for data queries using PGPT tokens, ensuring transparent monetization.

#### Engaging Data Contributors:

All contributors participate in a sophisticated data monetization system designed for all ecosystem providersю. Contributors earn PGPT tokens for providing datasets and computational resources for AI model training, encouraging active participation and the expansion of public knowledge graphs.

Federated Storage Network Nodes are responsible for data storage. Node owners stake PGPT tokens as collateral and receive rewards based on data usage and demand. This system ensures that data transactions on PrivateAI are secure, efficient, and beneficial for all participants.
