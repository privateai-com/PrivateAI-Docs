# Privacy and Security in PrivateAI

## Prioritization

Ensuring the security of users' data is a paramount goal of the PrivateAI project. The project employs a multi-layered approach to data security, incorporating various measures to protect sensitive information from unauthorized access, breaches, and other potential threats.

First, the project implements robust encryption techniques to safeguard data at rest and in transit. Encryption algorithms are used to convert data into an unreadable format, making it virtually impossible for unauthorized individuals to decipher the information. This ensures that even if data is intercepted or accessed without authorization, it remains unintelligible and unusable.

Access control mechanisms are also implemented to restrict data access to authorized individuals only. This prevents unauthorized individuals from gaining entry to the system and ensures that only authorized personnel can view or manipulate the data.

Furthermore, the project incorporates robust network security measures to protect data during transmission. Secure communication protocols are utilized to establish encrypted connections between users and the project's servers. This prevents eavesdropping and ensures that data remains confidential and secure while in transit.

## Demo Case Security

### Encryption

To ensure the security of users' data in the demo case, the PrivateAI project will implement standard and verified encryption mechanisms, such as RSA encryption and encryption for specific user groups.

RSA encryption is a widely used and trusted encryption algorithm that provides secure communication and data protection. It utilizes asymmetric key encryption, where each user has a public key for encryption and a private key for decryption. This ensures that only authorized users with the corresponding private key can access and decrypt the encrypted data.

Despite the use of a reliable encryption protocol, it is always important to make sure that the partner's public key has not been stolen and misused. To achieve it, in the PrivateAI system each key certificate stores signatures from other members of the network of trust, confirming the authenticity of the key owner. It is necessary to note that it is not the key itself that is signed, but the user ID associated with this key. So, one can always be sure that a person really uses one of the emails associated with the key, and not know anything about his other emails. The level of confidence that the key certificate is indeed issued by its owner is calculated from the number of signatures and the level of trust in these signatures. Having received from a new correspondence partner a public key signed by people whose keys are marked as trusted, we increase our confidence in the reliability of the received key.

Also, the PrivateAI system will use so-called multikey encryption - a protocol that allows encrypting a file with several public keys, so after that it can be decrypted by any of the corresponding private keys. This mechanism can provide flexibility in granting access to encrypted data to multiple recipients. And it will help to avoid a situation where the file owner should firstly decrypt the stored file with his private key before passing it to the data searcher who is permitted to download this file.

### Transfer Protocols

The communication between the application client and backend server is maintained by the most standard HTTPS protocol, which has been widely adopted and trusted for secure data transportation over the years. HTTPS (Hypertext Transfer Protocol Secure) is an extension of the HTTP protocol that adds an extra layer of security through the use of SSL (Secure Sockets Layer) or its successor, TLS (Transport Layer Security). Usage of SSL/TLS certificates provides two main principles that guarantee the security of data transportation:
