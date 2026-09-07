# Storage

## S3

### S3 Performance

Maximum requests: 3,500 for `PUT/COPY/POST/DELETE` and 5,500 for `GET/HEAD` request per second, per prefix. With this in mind, you can maximize your requests by spreading your operations across multiple prefixes. e.g. If you use 4 prefixes for read requests, you would achive 22k requests per second.

#### Limitations using KMS

When you are using SSE-KMS to encrypt your files, you must consider the encryption and decryption internal api calls, because this operations count towards the KMS quota. This quota is region-specific and it is either 5,500, 10,000 or 30,000 request per second and you cannot request a quota increase.

#### Multipart upload

It is required for files over 5 GB and recommended for files over 100 MB.

#### S3 Byte-Range fetches

Parallelize downloads by specifying *byte-range*. Typical sizes for byte-range requests are 8 MB or 16 MB. If there's a failure in the download, only the affected byte ranges are lost.  Can be used to speed up downloads or to download different parts of the file.

### S3 Object Lock

Allows objects to be stored using the *WORM* model (write one, read many).  Prevents objects or across the bucket from being deleted or modified, under the following conditions:

- For a defined period of time, called *Retention Period*.
- Locked indefinitely.
- Until the condition , called *Legal Hold*, is removed.  Users who want to place or remove the condition on objects must have the `s3:PutObjectLegalHold` permission.


#### Governance Mode

It is the mode where only authorized users can delete the object or modify its lock settings.

#### Compliance Mode

It is the mode in wich not even the root user can modify or delete the objects, and they are only released when their retention period ends.

### Glacier Vault Lock

Allows you to deploy and enforce compliance controls for individual s3 Glacier vaults storage (*legacy*) with a vault policy: *WORM* can be used.  Once locked, the policy can no longer be changed.
