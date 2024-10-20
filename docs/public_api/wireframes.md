# Wireframes

The wireframes outline the user interface flow for managing API keys within the PrivateAI platform. They provide a structured approach for users to:

- Navigate to their profile settings and access API management.
- Generate new API keys or view existing ones.
- Copy generated API keys for integration purposes.
- Revoke API keys if they are no longer needed, with a confirmation step to prevent accidental revocation.

**1. Profile page**

- API settings button:

        * On the profile page, there is an "API settings" button.
        * Clicking on this button redirects the user to manage their API keys.



        <!-- <figure> -->

  <img src="/assets_new/PUBLIC_API/Wireframes/0.webp" alt="" />
  <!-- <figcaption></figcaption></figure> -->

**2. New key**

- Back to profile page:
  - From the API settings section, there is a link to return to the profile page.
- Generate API key:
  - There is a button labeled "Generate API key".
  - Clicking on this button allows the user to generate a new API key.
- View revoke page:

        * Users have the option to view the "Revoke" page to manage existing API keys.



        <!-- <figure> -->

  <img src="/assets_new/PUBLIC_API/Wireframes/1.webp" alt="" />
  <!-- <figcaption></figcaption></figure> -->

**3. Revoke**

- Copy API key:
  - Once a new API key is generated or an existing one is viewed, users can copy the displayed API key by clicking on a corresponding link.
- Revoke API key:

        * There is a link to revoke the API key.
        * Clicking on this link brings up a modal window for confirmation (see next section).



        <!-- <figure> -->

  <img src="/assets_new/PUBLIC_API/Wireframes/2.webp" alt="" />
  <!-- <figcaption></figcaption></figure> -->

**4. Modal window**

- Confirmation modal:
  - When the user chooses to revoke their API key, a modal window appears.
  - This modal window prompts the user to confirm their decision to revoke the API key.
- After revoke:

        * After confirming the revoke action in the modal window, the user is redirected back to the "New Key" screen to manage API keys again.

        <!-- <figure> -->

  <img src="/assets_new/PUBLIC_API/Wireframes/3.webp" alt="" />
  <!-- <figcaption></figcaption></figure> -->
