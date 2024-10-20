---
image: https://docs.privateai.com/assets_new/meta.png
description: Enhancing data privacy on PrivateAI with a two-level access system.
---

# Article Access Management

### Description

In the current implementation of the PrivateAI demo version, the data owner can make his files private and allow only certain persons to view and download them.

However, it does not solve all the issues related to data privacy. Any user can copy the file in view mode or download and publish someone else’s article to which he/she was granted access.

Therefore, we introduce an updated article access system requirements described below.

**Two-leveled access system**

The new system is two-leveled in contrast to the current one-level solution. At the moment all private files are either fully accessible for the user or not available at all.

The proposed new approach is more granular. When the data owner grants some user access to a file, he can choose one of two options:

1. Read-only access. In this case, the user is able to view the file content, but can not download or copy it.
2. Full access. The user is permitted to download the file as well.

**Reader requirements**

To make the read-only mode more valuable and full-functional, we must also guarantee the following principles:

- we will not redirect the user to a third-party service for file reading to avoid dependency on the privacy measures of those services;
- the files opened in the implemented file reader must be copy-proof, i.e. a user will not be able to select the text and copy it into another resource;
- the files must be resistible to parsing, i.e. its content can not be viewed by using any third-party tools for collecting and analyzing the textual data.

These requirements must be fulfilled for all the formats of documents supported by PrivateAI - .pdf, .docx, .txt.

### Wireframes

**Knowledge base page**

**Current version**

<!-- <!-- <figure> -->

<img src="/assets_new/FUTURE/Article_Access_Management/0.webp" alt="" />

<!-- <figcaption></figcaption></figure> -->

**New version**

<!-- <!-- <figure> -->

<img src="/assets_new/FUTURE/Article_Access_Management/1.jpg" alt="" />

<!-- <figcaption></figcaption></figure> -->

- Instead of “Permission needed” clickable title, there will be two clickable subtitles “Request read-only access” and “Request full access”;
- After clicking on either of them, they become inactive, and the status of the file changes to “Access request pending”;
- When the access is granted, it will be displayed which access it is - “Read-only access granted” or “Full access granted” statuses.

### **Requests**

**Current version**

<!-- <figure> -->

<img src="/assets_new/FUTURE/Article_Access_Management/2.webp" alt="" />

<!-- <figcaption></figcaption></figure> -->

**New version**

- The data owner can see which access type the user has requested.
- The data owner can either provide read-only access, full access, or decline the request no matter which type of request he considers.

### **Requests_Profile details**

**Current version**

<!-- <figure> -->

<img src="/assets_new/FUTURE/Article_Access_Management/3.webp" alt="" />

<!-- <figcaption></figcaption></figure> -->

**New version**

- The data requester can request access of a specified type - “full access” or “read-only”.
- The status change:
- Permission required&#x20;

1. “Download” button is inactive;&#x20;
2. “Request full access” and “Request read-only” buttons are available;

- Full permission requested or read-only permission requested&#x20;

1. The status is changed depending on which access the user has requested;
2. All three buttons become inactive;

- Read-only permission granted&#x20;

1. “Download” button is still inactive;
2. 2\. “Request read-only” button is changed to “View” button;
3. 3\. The user can click on it and read the article in a separate tab;

- “Request full access” button is available;

1. &#x20;The user can click on it, and the status will change to “Full permission requested”, but the “View” button is still active.

- Full permission granted&#x20;

1. “Download” button is active;&#x20;
2. “Request read-only” button is changed to “View” button and is active;
3. “Request full access” button is inactive;

- Read-only permission denied&#x20;

1. “Download” button is inactive;&#x20;
2. “Request full access” and “Request read-only” buttons are available;

- Full permission denied&#x20;

1. “Download” button is inactive;&#x20;
2. “Request full access” button is available;&#x20;
3. “Request read-only” is available or changed to “View” if read-only access is already granted.

**Reference status scheme**

<!-- <figure> -->

<img src="/assets_new/FUTURE/Article_Access_Management/4.jpg" alt="" />

<!-- <figcaption></figcaption></figure> -->
