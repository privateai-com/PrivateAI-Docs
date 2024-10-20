# Requirements

**API requirements**

1. **Usage of API keys:**
   * Users must provide their API key before accessing the PrivateAI API; otherwise, access is denied.
   * Each user can generate an API key on their profile page.
   * Users can regenerate their API key, invalidating the old one.
   * API keys are generated server-side without requiring admin permission.
   * API keys are free and do not expire.
2. **API limitations:**
   * Each user account can have only one API key.
   * An API key can manage only one account.
   * All API keys are equal and grant access to the same API endpoints.
   * API usage is limited to 30 requests per minute per account.

**Available API endpoints**

The PrivateAI API provides the following endpoints to interact with various aspects of the platform:

* **Article endpoints:**
  * `POST /articles/create`: Upload a new article.
  * `PUT /articles/update`: Update the name and field of a specified article.
  * `PUT /articles/publish`: Publish an article.
  * `DELETE /articles/delete`: Delete an article by ID.
  * `GET /articles/my-articles`: Retrieve information about all articles stored for a specific account.
  * `GET /articles/article`: Retrieve information about an article by ID.
* **Graph endpoints:**
  * `GET /graph`: Retrieve the graph of an article with a specified ID.
* **Request endpoints:**
  * `GET /requests/requests-to-me`: Obtain a list of requests addressed to the user's files.
  * `PUT /requests/answer`: Approve or decline access requests to the user's articles.
* **Profile endpoints:**
  * `GET /profile`: Retrieve information about the user's profile.
  * `PUT /profile/update`: Update information in the user's profile.
  * `POST /profile/upload-avatar`: Upload an avatar for the user's profile.
  * `POST /profile/add-wallet`: Add a wallet address to the user's profile.
