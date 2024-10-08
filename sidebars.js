/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],
  // But you can create a sidebar manually

  docsSidebar: [
    {
      type: "category",
      label: "Get Started",
      items: ["README", "what-is-privateai"],
    },
    {
      type: "category",
      label: "Graphs",
      items: [
        "Graphs/graph-manifest",
        "Graphs/what-is-knowledge-graph",
        "Graphs/graphical-data-analysis",
        "Graphs/graph-formation",
        "Graphs/wikigraph",
        "Graphs/use-cases",
      ],
    },
    {
      type: "category",
      label: "AI-powered features",
      items: [
        "AI_Powered_Features/integration-of-llm",
        "AI_Powered_Features/search-assistant",
        "AI_Powered_Features/recommendation-system",
        "AI_Powered_Features/global-search",
        "AI_Powered_Features/the-potential-of-openbiollm-70b",
      ],
    },
    {
      type: "category",
      label: "Privacy & Security",
      items: [
        "Privacy_and_security/privacy-and-security-in-privateai",
        "Privacy_and_security/fhe",
        "Privacy_and_security/federated-learning",
        "Privacy_and_security/additional-data-security-and-privacy-measures",
      ],
    },
    {
      type: "category",
      label: "Ecosystem",
      items: [
        "Ecosystem/interaction-overview",
        "Ecosystem/fsn-nodes",
        "Ecosystem/psn-nodes",
        "Ecosystem/initial-bonus-system-implementation",
        "Ecosystem/anti-plagiarism",
        "Ecosystem/privateai-treasury",
        "Ecosystem/staking",
        "Ecosystem/subscription-plans",
      ],
    },
    {
      type: "category",
      label: "User Interactions and Manual",
      items: [
        "User_interactions_and_manual/user-manual",
        "User_interactions_and_manual/secure-data-management-and-access-control-in-privateai",
        "User_interactions_and_manual/like-system",
        "User_interactions_and_manual/comment-system-wireframes",
        "User_interactions_and_manual/assistant-interaction-guide",
      ],
    },
    {
      type: "category",
      label: "Public API",
      items: [
        "Public_API/purpose",
        "Public_API/requirements",
        "Public_API/wireframes",
      ],
    },
    {
      type: "category",
      label: "Tokenomics",
      items: ["Tokenomics/distribution", "Tokenomics/utilities"],
    },
    {
      type: "category",
      label: "Future",
      items: [
        "Future/sharing-feature",
        "Future/article-access-management",
        "Future/future-ecosystem",
        "Future/roadmap",
      ],
    },
    {
      type: "category",
      label: "Additional information",
      items: [
        "Additional_Information/new-features",
        "Additional_Information/questions-and-answers",
        "Additional_Information/glossary",
      ],
    },
  ],
};

export default sidebars;
