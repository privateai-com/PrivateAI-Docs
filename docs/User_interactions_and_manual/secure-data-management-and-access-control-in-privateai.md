---
image: https://docs.privateai.com/assets_new/meta.png
description: >-
  The document outlines key processes where encryption is utilized in
  PrivateAI's current implementation (April 2024) and provides an overview of
  the system architecture to distribute responsibilities a
---

# Secure Data Management and Access Control in PrivateAI

#### 1. Storage & Encryption system architecture

<!-- <figure> -->

<img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Secure_Data/0.jpg" alt="" />

<!-- <figcaption></figcaption></figure> -->

The diagram above illustrates the architecture of the PrivateAI system, which includes the following components:

1. **Application Client Site (Frontend)**:
   - Interface for user interaction with the system.
2. **Application Server Side (Backend)**:
   - Handles server-side processing operations within the PrivateAI system.
3. **AI Server (Trusted Zone)**:
   - A dedicated server with a deployed AI model for extracting knowledge graphs.
   - Currently considered a trusted zone where the AI model processes unencrypted data.
4. **Encryption Server (Trusted Zone)**:
   - A dedicated server responsible for encrypting and decrypting users’ files.
   - Maintains access verifications to ensure secure data handling.
5. **Storage Server (Untrusted Zone)**:
   - A server for storing users’ articles in encrypted form.
   - Simulates the future system where each storage node will be managed by a third-party server, emphasizing the importance of encryption for data security.

#### 2. Encryption flow

#### **Upload process** <a href="#upload-process" id="upload-process"></a>

**1. Initial Upload:**

- When the data owner uploads a file on the client side, the file is transmitted via an HTTPS connection to the application backend in its original, unencrypted form.

**2. Backend Processing:**

- **File Copy**: A copy of the original file is created within the backend server.

**3. Original File Handling:**

- The original file is sent to the encryption server along with the owner's wallet address, which is stored and used as one of the article's identifiers.
- An encryption key is generated for this particular article, ensuring each article has a unique key.
- All encryption keys are securely stored on the encryption server, with no external access allowed.
- The file is encrypted with the generated key and then sent to the storage server, where it is stored in encrypted form.

**4. File Copy Handling:**

- The file copy is transmitted to the AI server for the knowledge graph extraction process.
- Once the graph extraction is completed, the file copy is deleted from the AI server.
- The extracted knowledge graph is returned to the backend server, where it is saved along with the file metadata to facilitate file searches.

**5. User Interaction:**

- The extracted knowledge graph is displayed to the data owner in the application interface, allowing for review and edits.
- After any edits are made, the updated graph is saved anew on the backend server.

#### Request Process in PrivateAI System <a href="#request-process-in-privateai-system" id="request-process-in-privateai-system"></a>

**1. Searching for Files:**

- The data searcher visits the platform and searches for files by entering keywords.
- They can examine the file structure by viewing the saved knowledge graph and request access to the file.

**2. Access Request:**

- Upon the searcher's request, the data owner grants access to the stored file.
- The wallet address of the data searcher is added to the access entity list on the encryption server.

**3. Verification:**

- The data searcher signs a special message in their MetaMask wallet.
- This signed message is sent to the encryption server for verification.
- The signed message serves as proof that the searcher indeed owns the specified wallet address.

**4. Decryption and Delivery:**

- If the message is approved, decryption is permitted.
- The file is downloaded from the storage server, decrypted using its unique encryption key by the encryption backend, and sent to the data searcher in decrypted form via HTTPS.

#### Key Takeaways <a href="#key-takeaways" id="key-takeaways"></a>

- **Encryption Management**:
  - The entire encryption process is managed within the encryption server.
- **Access Control**:
  - Access permissions to files are stored in a dedicated access control table.
  - Access is tracked using the wallet addresses of requesters.
- **Verification Requirement**:
  - Possessing access permission alone is insufficient; users must verify ownership of the specified wallet address by signing a special message with their private key.
- **Open File Access**:
  - Open files can be downloaded by anyone, but a signed message is still required to track access.
- **AI Assistant Access**:
  - The AI assistant has default access to all stored files to ensure it can correctly function and analyze the content of these files.

### 3. User flow <a href="#id-3.-user-flow" id="id-3.-user-flow"></a>

The sequence of user actions on the PrivateAI platform is as follows:

1. **File Owner Connects Wallet**:
   - The file owner connects their wallet to the platform, enabling the ability to upload files.
2. **File Owner Uploads File**:
   - The file owner uploads a file to the platform.
3. **Data Searcher Requests Access**:
   - A data searcher requests access to the file.
4. **File Owner Receives Notification**:
   - The file owner receives a notification about the new access request.
5. **File Owner Grants Access**:
   - The file owner grants access to the requested file.
6. **File Owner Identity Verification**:
   - The file owner is prompted to sign a message in their MetaMask wallet to prove their identity.
7. **Access Granted Notification**:
   - The data searcher is notified that access rights have been granted.
8. **Data Searcher Initiates Download**:
   - The data searcher initiates the download of the file.
9. **Data Searcher Identity Verification**:
   - The data searcher is prompted to sign a message in their MetaMask wallet to prove their identity.

This user flow is illustrated in the screenshots from the PrivateAI platform.

#### **1. Profile page (File owner)** <a href="#id-1.-profile-page-file-owner" id="id-1.-profile-page-file-owner"></a>

<!-- <figure> -->

<img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Secure_Data/1.jpg" alt="" />

<!-- <figcaption></figcaption></figure> -->

To connect the wallet, follow these steps:

1. **Navigate to Profile Page**:
   - Go to the profile page on the platform.
2. **Click "Link your wallet" Button**:
   - Click on the “Link your wallet” button as shown in the illustration.

#### **2. Connect the wallet (File owner)** <a href="#id-2.-connect-the-wallet-file-owner" id="id-2.-connect-the-wallet-file-owner"></a>

<!-- <figure> -->

<img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Secure_Data/2.jpg" alt="" />

<!-- <figcaption></figcaption></figure> -->

1. **Sign the Request**:
   - After clicking "Link your wallet," a request will appear in the MetaMask wallet extension.
   - Sign the request in the MetaMask wallet extension to proceed.
2. **Select the Sepolia Test Network**:
   - Ensure that the network selected in the MetaMask extension is the Sepolia test network.
   - If the Sepolia test network is not selected, the wallet will not be connected.

#### **3. Upload the file (File owner)** <a href="#id-3.-upload-the-file-file-owner" id="id-3.-upload-the-file-file-owner"></a>

<!-- <figure> -->

<img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Secure_Data/3.jpg" alt="" />

<!-- <figcaption></figcaption></figure> -->

1. **Wallet Linked**:
   - Once the wallet is linked to the account, the user can proceed to upload files to the platform.
2. **Navigate to Upload Activity Page**:
   - Go to the "Upload activity" page.
3. **Upload a File**:
   - Click on the “Upload file” button.
   - Select a file from the local directory.
   - Once the file is selected, it will begin uploading.
4. **Monitor Upload Progress**:
   - The user can see the upload progress displayed on the screen.

#### **4. Knowledge base (Data searcher)** <a href="#id-4.-knowledge-base-data-searcher" id="id-4.-knowledge-base-data-searcher"></a>

<!-- <figure> -->

<img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Secure_Data/4.jpg" alt="" />

<!-- <figcaption></figcaption></figure> -->

1. **Search for Files**:
   - After the data owner uploads a file, a data searcher can search for this file on the “Knowledge base” page.
2. **Demonstration of Search**:
   - For demonstration, log in to another account (e.g., Archonaut#2593) to verify the file's availability.
   - Ensure the file is the same by checking its name and author.
3. **Permission Needed**:
   - Notice that the file has a “Permission needed” status, indicating that access must be requested before downloading.
4. **Requesting Access**:
   - Click on the file name to navigate to the file page.
   - From the file page, the data searcher can request access to the file.

#### **5. File page (Data searcher)** <a href="#id-5.-file-page-data-searcher" id="id-5.-file-page-data-searcher"></a>

<!-- <figure> -->

<img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Secure_Data/5.jpg" alt="" />

<!-- <figcaption></figcaption></figure> -->

1. **View File Details**:
   - On the file page, a data searcher can view various details about the selected file.
2. **Inactive Download Buttons**:
   - The “Download” buttons are inactive because the user does not yet have permission to access the file.
3. **Requesting Access**:
   - The data searcher can request access to the file by clicking on either of the highlighted buttons (e.g., “Request read-only access” or “Request full access”).

#### **6. Request confirmation (Data searcher)** <a href="#id-6.-request-confirmation-data-searcher" id="id-6.-request-confirmation-data-searcher"></a>

<!-- <figure> -->

<img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Secure_Data/6.jpg" alt="" />

<!-- <figcaption></figcaption></figure> -->

1. **Confirm Request**:
   - After clicking the access request button, the data searcher should confirm their request in the additional modal window that appears.
   - This step ensures that the request is intentional and allows the user to proceed with the access request.

#### **7. Access requests (File owner)** <a href="#id-7.-access-requests-file-owner" id="id-7.-access-requests-file-owner"></a>

<!-- <figure> -->

<img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Secure_Data/7.jpg" alt="" />

<!-- <figcaption></figcaption></figure> -->

1. **Log in to Data Owner Account**:
   - Switch back to the data owner account.
2. **Navigate to Requests Page**:
   - Go to the "Requests" page.
3. **View New Request**:
   - On the "Requests" page, observe the new request from the data searcher (second account).
4. **Grant Access**:
   - Grant access to the file by clicking on the corresponding button next to the request.

#### **8. Metamask verification (File owner)** <a href="#id-8.-metamask-verification-file-owner" id="id-8.-metamask-verification-file-owner"></a>

<!-- <figure> -->

<img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Secure_Data/8.jpg" alt="" />

<!-- <figcaption></figcaption></figure> -->

1. **Sign the Message**:
   - After granting access, the data owner is prompted to sign a message in the MetaMask extension.
   - This step verifies the identity of the data owner and confirms the access permission.
2. **Completion**:
   - Once the message is signed, the data searcher will be granted access to the file.

#### **9. Access granted (Data searcher)** <a href="#id-9.-access-granted-data-searcher" id="id-9.-access-granted-data-searcher"></a>

<!-- <figure> -->

<img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Secure_Data/9.jpg" alt="" />

<!-- <figcaption></figcaption></figure> -->

1. **Log in to Data Searcher Account**:
   - Switch back to the data searcher account.
2. **Check Access Status**:
   - Confirm that access has been granted by verifying the notification or status update.
3. **Navigate to File Page**:
   - Return to the file page where the previously requested file is located.
4. **Access File**:
   - With access granted, the data searcher should now see active download buttons and be able to proceed with downloading or viewing the file as permitted.

#### **10. Download possibility (Data searcher)** <a href="#id-10.-download-possibility-data-searcher" id="id-10.-download-possibility-data-searcher"></a>

<!-- <figure> -->

<img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Secure_Data/10.jpg" alt="" />

<!-- <figcaption></figcaption></figure> -->

1. **Active Download Button**:
   - On the file page, the "Download" button is now active, indicating that access has been granted.
2. **Download the File**:
   - Click the "Download" button to begin downloading the file.

#### **11. Metamask verification (Data searcher)** <a href="#id-11.-metamask-verification-data-searcher" id="id-11.-metamask-verification-data-searcher"></a>

<!-- <figure> -->

<img src="/assets_new/USER_INTERACTIONS_AND_MANUAL/Secure_Data/11.jpg" alt="" />

<!-- <figcaption></figcaption></figure> -->

1. **Sign Message for Verification**:
   - Before the download starts, the data searcher will be prompted to sign a message in the MetaMask wallet to verify their identity.
2. **Provide Signature**:
   - Sign the message using the MetaMask wallet extension.
3. **Download the File**:
   - Once the signature is verified, the file download will commence.

By following these steps, the data searcher successfully gains access and downloads the file after receiving permission from the data owner.
