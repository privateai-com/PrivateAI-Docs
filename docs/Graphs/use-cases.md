---
image: https://docs.privateai.com/assets_new/meta.png
description: >-
  Overview of knowledge graph case studies: application to bank cybersecurity,
  and to clinical trials dataset inference. The document contains suggestions on
  how the aforementioned case studies
---

# Use cases

Traditional Big Data representation has the following disadvantages:

- Context is absent
- Data structure is difficult to analyze
- No intelligence on data
- No readily available insights

The reviewed cases demonstrate how these disadvantages can be mitigated by restructuring data into knowledge graphs. Knowledge graphs also open new opportunities for data analysis that are not possible with other types of data representation. Both cases illustrate a similar process of building practically useful knowledge graphs:

1. Graphs are built on top of existing sets of structured/semistructured data (e.g., ACCT database, and multiple data sources in bank IT systems).
2. Graph Schemes are designed by Domain Experts (e.g., bank’s analytics department, and research team). These schemes define use cases that can be implemented.
3. A pipeline or algorithm is created to convert the datasets into designed graphs.
4. End users can perform specific analytical tasks on the graphs.
5. Business value is generated as a result of end users’ analytical activities, not by the graph itself.

### Standard chartered cybersecurity & neo4j

#### Practical application

The application is very specific to cybersecurity and the particular bank. However, the data pipeline architecture can be reused to extract value from graphs. First, data is collected from the bank's data lake, analytical tools, and applications. Then, data is streamed into Dataiku, where the graph is constructed using automated pipelines. Graphs are stored in the Neo4j database. The bank’s analytical app SCypher, a no-code graph insight engine, with modular GUI tools, is intuitive enough to serve not just analysts but all end users.

#### Takeaways

1. Data pipeline architectural scheme (Figure 1):
   - Separate layers assigned for data acquisition, data storage, data structuration and representation, and tools for end-users.
2. Tech stack for high-load graph-based applications: Dataiku, Neo4j.
3. Modular, extendable, and flexible approach in building UI for end users—specific tools for each use case.

#### Possible use cases for knowledge graphs over big databases

1. Graph Schema: Structures the data to get insights from a certain perspective.
2. Intelligent search: Node-based or relation-based search.
3. Path analysis: To get insights about available variations for a particular path.
4. Nearest Neighbours analysis: To explore relations of a node.
5. Focal point analysis: Shared nodes of multiple graphs to predict most possible outcomes.
6. Graph exploration: To get acquainted with data.
7. Custom graph schemas: To enable custom data visualization and structurization.

### CTKG study

#### Overview

The research team created a graph-structured layer on top of the public ACCT database and identified several practical applications.

#### Practical applications

1. **Drug repurposing**: Identifies new uses for existing drugs by analyzing relationships between drugs and conditions.
2. **Clinical trial optimization**: Aids in designing more effective clinical trials by integrating diverse medical data.
3. **Personalized medicine**: Enhances personalized treatment plans by providing detailed insights into drug efficacy and patient responses.
4. **Pharmaceutical research**: Supports pharmaceutical companies in identifying new drug targets and understanding complex biological interactions.

#### Takeaways

1. Graphs significantly improve data analysis by incorporating complex relations between entities.
2. Graph Schemas are essential to facilitate practical use cases.
3. Graph Schemas must be designed by domain experts. Entities and relations are defined in advance and then applied to the dataset to be useful for analysts.
4. Ease of use is essential in application adoption.
5. Functionality can be added in modules, each representing complete and separate use case scenarios.
6. There is a unified pipeline for practical usage of graphs, which should be applied.
7. Graphs can provide substantial benefits to business and researchers, but expert design of Graph Schemas and elaborated UI design are required for a successful product.

### Insights to apply in PrivateAI

1. **Involve domain experts**: Elaborate Graph Schemas tailored to a particular dataset can create valuable applications. PrivateAI can incentivize users who can create useful graph schemas to structure data for end-user applications, as the CTKG team did with the ACCT database.
2. **Integrate ACCT database & CTKG**: Integrate these as a data product on PrivateAI, as it may bring many users since the current public implementation of CTKG seems to be unavailable.
3. **Develop specific GUI modules**: Develop specific GUI modules for particular use cases instead of trying to build a complex all-in-one interface. This increases scalability, extendability, and reduces complexity, all of which are good for faster and easier adoption by end users. Initial modules can include the current PrivateAI case with articles and CTKG analytics.
4. **Techstack suggestions**:
   - DGL-KE library implementation to get analytical tools over the graph node embeddings.
   - Neo4j: Evaluate its application for graph embeddings storage.
5. **Graph-Based analytical tools marketplace architecture**: Knowledge graphs can provide unique business value but only as a result of end-users' activity via graph analysis tools. This creates a fund flow from businesses who pay for valuable use cases to those who support the infrastructure to deliver these use cases. This can be applied to refactor PrivateAI marketplace architecture.

#### Scheme description

**User roles**

- **End user**: Utilizes and pays for one or many of PrivateAI's use cases. Inside a use case, the user can choose compatible graph schemes or datasets.
- **Developer**: Provides software modules that implement GUI for valuable use cases.
- **Domain expert**: Develops and constructs graph schemes to explore PrivateAI database. Receives a share of end-user payments for the usage of their graph schemes.
- **Data provider**: Develops and maintains a dataset on top of which graphs are built and analytics performed. Receives a share of end-user payments for the usage of their data.
- **PrivateAI marketplace**: Receives a share of payments for maintenance of API gateways and all necessary infrastructure for marketplace operation, including blockchain parts.

**Scheme components**

- **Use case**: Particular use case with clearly defined flow, inputs, and expected business outputs.
- **GUI module**: Specialized software that implements a particular use case, compatible with various graph schemes and datasets.
- **Graph scheme**: An abstract structure of a knowledge graph, oriented on one or multiple use cases.
- **Dataset**: Specialized datasets maintained by data providers, structured to enable graph schemes. Access is possible via PrivateAI APIs, and usage is measured to calculate rewards distribution.
- **PrivateAI API hubs**: Clusters of infrastructural components that provide access to graph schemes and datasets, measuring throughput, monitoring performance, and distributing rewards.

### Steps to Implement LLaMA 3 or Mistral Model with Knowledge Graphs

#### Step 1: Run a model

Ensure you have installed the required libraries to work with LLaMA 3 or Mistral models using pip:

```bash
bashCopy codepip install transformers
```

Load the pre-trained LLaMA 3 or Mistral model using the transformers library:

```python
pythonCopy codefrom transformers import AutoModelForCausalLM, AutoTokenizer

model_name = "LLaMA/llama-base-3"  # or "Mistral/mistral-base"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)
```

#### Step 2: Get dataset from privateAI

Register on the PrivateAI platform and download the Data.

#### Step 3: Feed the dataset into the model

Ensure the data is in a format supported by your model. If not, transform the data into a format suitable for model training.

```python
pythonCopy codefrom datasets import load_dataset

dataset = load_dataset('path_to_your_data')
```

#### Step 4: Train the model

Configure the training parameters for the model. Begin the model training process.

```python
pythonCopy codefrom transformers import Trainer, TrainingArguments

training_args = TrainingArguments(
    output_dir='./results',
    evaluation_strategy="epoch",
    learning_rate=2e-5,
    per_device_train_batch_size=8,
    num_train_epochs=3,
    weight_decay=0.01,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_datasets['train'],
    eval_dataset=tokenized_datasets['validation'],
)
```

#### Step 5: Check the results by asking relevant questions

Evaluate the model by assessing the quality of the trained model using the test dataset.

```python
pythonCopy codetrainer.evaluate()
```

Test the model by asking it relevant questions and evaluating the responses.

```python
pythonCopy codeinputs = tokenizer("Your question here", return_tensors="pt")
outputs = model.generate(**inputs)
print(tokenizer.decode(outputs[0]))
```
