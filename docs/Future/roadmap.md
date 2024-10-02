# Roadmap

#### Last revised: 09/06/2024

PrivateAI addresses application of AI and blockchain technologies to big data inference based on Knowledge Graph use cases, which have been proven an effective tool for data analysis. Data representation in the form of knowledge graphs enables unique business cases: drugs repurposing, clinical trial redesign, drug evaluation, personalized medicine, research hypothesis generation, etc.&#x20;

To acquire valuable applications of Knowledge Graphs usually significant efforts of a multi-discipline team of experts are required. PrivateAI makes these insights more available to wider audience by providing:

- **AI tools** which enhance knowledge graph design and acquisition,
- **A cooperative environment**, where expert teams can develop Data Pipelines, contribute data, or knowledge to deliver valuable use cases to end users - medical researchers, analysts in pharmaceutical companies, investors, and wider audience.&#x20;
- **A decentralized data product marketplace**, where contributions can be traded and rewarded for participation in delivery of particular use cases.

To deliver value to end users, three types of components have to be combined in a **Data Pipeline**:

- Reliable, well-structured **dataset**, from which the data is gathered.
- Mindful **graph scheme**, which defines case-dependent data representation,
- And **user interface (GUI)** which is clear, simple to use, and task-specific

<!-- <figure> -->

<img src="/assets_new/FUTURE/Roadmap/0.png" alt="" />

<!-- <figcaption></figcaption></figure> -->

Each of these components requires domain expertise, and the task becomes a cross-field enterprise, which is very difficult to fulfill for a single team. So cooperation is the key.

‍

PrivateAI creates a marketplace of data products, where each of these components can be maintained by a team of experts, and provided to the community as a well-positioned product; and and environment which helps maintaining and developing data products with integrated AI tools, data protection, and decentralized provably fair income distribution.

General stages of PrivateAI roadmap are:

**I. PrivateAI demo app completion** - Display the demo data product, able to onboard new knowledge, generate knowledge graphs, and enable their exploration.

**II. Scaling business use cases** - extension of integrated datasets, to enable wider range of business use cases, like drugs repurposing, therapeutic assistance, hypothesis research - to involve expert users in testing and economy evaluation.&#x20;

**III. Marketplace public launch** - an open marketplace which everyone can join, to represent and trade own data products. Expansion from medico-biological use cases to wider application will come with community growth and further development of AI supporting tools, and use case provision pipelines.‍

### I. PRIVATEAI DEMO APP COMPLETION - 1-3 MONTHS

Completion of PrivateAI demo app - a first implementation of user app based on PrivateAI data pipeline, with full scale knowledge graph exploration, systems of knowledge quality assurance, and basic economics.

Features that can be expected, in addition to current version of PrivateAI app:

- **Biomedical chatbot (alpha version)**

Integration of Llama-3 based OpenBioLLM by Saama AI Labs that enables advanced AI assistance in biomedical use cases, i.e. interpretation of medical research results.

- **Multi-layered graph (alpha version)**‍

Upgrade of NER & RE modules of graph acquisition algorithm with NLP library spaCy v3.7.4 for improved text tokenization, and spaCy LLM package v.0.7.1 for built-in NER and RE tasks with the availability of few-shot prompting, caching the processed articles;

App frontend will be upgraded with Common Knowledge Graph with multi-layered representation, and a customizable graph scheme guided by user requests. \[[more details](https://docs.google.com/document/d/1CwSLi5yS__tTvNo-iRlhNa8LQ9RShIKVOPIW4psFwGs/edit#heading=h.3dm9l8z5o49r)]

- [**arxiv.org**](http://arxiv.org/) **database integration**

PrivateAI has a comparatively small community of contributors, which causes the knowledge base being short on many topics which could benefit the researchers. Integration of arXiv database search allows users to get results from both PrivateAI knowledge base, and arXiv.org website. That significantly extends the utility of the platform as a source of knowledge. \[[more details](https://docs.google.com/document/d/1G8zlsN9mg659sDYEfNbN3XCyleaTWE0th8AF-_NeTaQ/edit#heading=h.rkjj2g1lcccr)]‍

- **Improved access control**

With the growth of knowledge base, necessity to more fractured access control appeared. ‘Read-only’ access level introduces an intermediate state when an article is made available to read in the PrivateAI internal reader, which restricts copying, parsing, and export. This gives data owners a possibility to share the article without risk of giving it out. \[[more details](https://docs.google.com/document/d/1SswyGjc1MiHaeIZylrW-48ws7BTmccqjQ8y1kASwS68/edit#heading=h.6b6kemef43ng)]

- **Input quality control**

Ability to freely upload materials on the platform brings a certain number of misuse and abuse cases. Malicious actors may upload the same materials to abuse the rewarding system, or infringe intellectual property to gain some benefits on the platform. Integration of anti-plagiarism and filtering aims to protect users and the platform from malicious attempts. \[[more details](https://docs.google.com/document/d/1MFeb8swvRnWyP2RLhwWQlvL4yjtkLV0WmjdP4InMfoE/edit#heading=h.sjuzxnbgh159)]

- **Migration to own infrastructure**‍

Current deployment on AWS cloud infrastructure imposes certain limitations on platform performance, in particular it limits the input size, and limits deployment of own AI models which are demanding to computational resources. Migration to dedicated infrastructure in Latvia or Germany located data centers will enable us to have a wider input range, and increase overall platform performance.

- **Utility token & rewarding system**

Bonus points to incentivize users, based on Soligity ERC20 smart contracts, and at first located on one of EVM-compatible blockchains. The Reward system will be used as a prototype of a research group economy, and as a part of a more general economy of the marketplace. Bonus balances will be stored in data maps to be later migrated on PrivateAI's own blockchain. \[[more details](https://docs.google.com/document/d/1Wfiwgdqa16Brtf0fuYQTQ61vkvVba9EZ4lejmRVqj_g/edit?usp=sharing)]

### II. SCALING BUSINESS USE CASES - 6 MONTHS

Further improvement of PrivateAI's first app, refactoring of UI into modular paradigm, and introduction of new use case modules based on new graph schemes and datasets. Pilot projects of new types of data products - graph schemes, GUI modules, and datasets. First implementation of Data Product’s development and distribution group management.&#x20;

Features that can be expected:

- **AI-based peer-review (alpha version)**

Introduction of peer-review use cases and economics. Unrestricted upload of articles eases demonstration of platform’s abilities but causes lowering quality of the content. To amend that, and to increase platform credibility, AI models including advanced large-language models, will be applied to automate new articles reviewing to the extent which current technology can provide. Later, this feature will be converted into a Peer-review Assistant to help experts reviewing articles.&#x20;

- **PrivateAI multi-user editing / open graph**

Exploration of collaborative graph editing and exploration, with possible use cases of AI-guided conflicts and inconsistencies identification, collective resolution via voting on DAO smart contracts.

- **Extension of biomedical datasets**‍

Research of possibilities to integrate wide biomedical open databases like ACCT \[[3](https://docs.google.com/document/d/1I3hV0utXGMwkvtJbssbGzOxHLtfxLnFS3-xmb-7kVK0/edit#bookmark=kix.b0frqkmwmrc9)], and its graph representation .&#x20;

- **Modular use case GUI**

Dedicated user interface modules for each of the practical use cases have demonstrated efficiency in high-load and high complexity systems as shown in \[[1](https://docs.google.com/document/d/1I3hV0utXGMwkvtJbssbGzOxHLtfxLnFS3-xmb-7kVK0/edit#bookmark=kix.w2mmllxfkg5b)]. It makes PrivateAI very flexible and adaptable to emerging needs and necessity to upgrade applications. Current PrivateAI interface will be refactored into the first set of GUI modules. Following modules were suggested by the CTKG research team \[[_2_](https://docs.google.com/document/d/1I3hV0utXGMwkvtJbssbGzOxHLtfxLnFS3-xmb-7kVK0/edit#bookmark=kix.fmw5sa8m0kg3)] and include:&#x20;

- Drugs repurposing,&#x20;
- Clinical trials design improvement,&#x20;
- Personalized medication, and&#x20;
- Research hypothesis exploration.&#x20;
- **CosmWasm smart contracts development to facilitate Data Product Marketplace economics.** Set of smart contracts compatible with Cosmos SDK CosmWasm module will be developed to handle data product administration. Expected output is to get a functional model of data product and data providers group contracts to be scaled across the marketplace.
- Research of FHE and other data protection techniques to integrate into the marketplace
- **Data product user interface**

Development of web-interface to facilitate trades among data providers and data consumers. Distribute and test data product development across multiple data consumer groups. Integration with prototype CosmWasm smart contracts. Data storage will be developed in parallel, as a separate service which does not affect the operation of the marketplace.

Pilot data provider groups keep being rewarded for their contribution with bonus points that later will be converted into marketplace coins or other valuable rewards.

- Expert review role

### III. MARKETPLACE PUBLIC LAUNCH - 12 MONTHS

Public platform to develop and share Data Products, guided with AI tools and incentivized with blockchain economy.‍

Features that can be expected:

- **Launch of PrivateAI blockchain as Marketplace operational layer.**

Development of necessary infrastructure - marketplace web wallets, blockchain explorer, public dashboard - to launch a public testnet, and introduce data products navigation, and access. This will be integration tests of the whole ecosystem before going into production and integrating into the real economy.

Next step is generalization of data products management contracts logic to formulate common marketplace policy, and implement it as a blockchain built on Cosmos SDK framework. On that stage we develop PrivateAI PSN nodes, which create the first layer of the chain responsible for asset transfers and enforcement of smart contracts.&#x20;

Output is validator nodes, network consensus adjustments to implement marketplace general policies, and a common transactional layer for trades among data providers and data consumers, and votes inside a data provider group.

- **PrivateAI APIs for Domain Experts, Data Providers, Developers, and End Users.**‍

Community-maintained clusters of CosmosSDK nodes that provide access to the platform via RestAPI web serverswebservers.

- **GDPR & etc. compliant data storage and processing**

Refactoring of data storage and use cases to comply with international and local standards.

### Disclaimer

The roadmap is under active development and is subject to change without prior notice.
