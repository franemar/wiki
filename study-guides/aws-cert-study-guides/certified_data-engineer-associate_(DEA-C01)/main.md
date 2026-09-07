# DEA-C01 AWS Certified Data Engineer (Associate)

## Storage

### S3

S3 can virtually handle unlimited amounts of data, commonly referred to as *infinite scaling*. 

- **Buckets**: are defined at the region level and their names must be unique across all AWS accounts in all the AWS Regions within a *partition* (A *partition* is a grouping of Regions. AWS currently has three partitions: } `aws` (Standard Regions), `aws-cn` (China Regions), and `aws-us-gov` (AWS GovCloud (US))[^1]. It's recommended to create a *GUID: Globally Unique Identifier*.*
  - **Objects**: if a file larger that 5GB needs to be uploaded, then multi-part upload should be used for.

- S3 Lifecycle policies
- S3 Glacier Flexible Retrieval storage class
- S3 Glacier Deep Archive
- S3 Intelligent-Tiering

### Others

Amazon Elastic File System (Amazon EFS, **Review**)
: Is a scalable file system used with AWS Cloud services and on-premises resources. As you add and remove files, Amazon EFS grows and shrinks automatically. It can scale on demand to petabytes without disrupting applications. Amazon EFS is a regional service. It stores data in and across multiple Availability Zones. Additionally, on-premises servers can access Amazon EFS using *AWS Direct Connect*.

## ETL/ELT

### AppFlow

## AWS Streaming Data

#### Non-monotonic Operations

- [ ] Tumbling Windows (Aggregations Using ```GROUP BY```): each of the resulting windows processed by a query in a non-overlapping manner. In this case, each record on an in-application stream belongs to a specific window. It is processed only once (when the query processes the window to which the record belongs).  ⚡Its recommended to do the exercises⚡ --> [Tumbling Windows](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/tumbling-window-concepts.html)
- [ ] Sliding Windows
- [ ] Session Windows

#### Unbounded Queries

- [ ] Session Windows

#### Order of Events

- [ ] Event Time
- [ ] Processing Time

- [ ] Apache Flink Watermarks
- [ ] Perfect Watermarks
- [ ] Heuristic Watermarks and Allowed Lateness

### Kinesis Data Streams

- Parallelization factor
- IteratorAge
- Enhanced fan-out consumers.

## Databases

### Redshift

- SUPER data type
- PartiQL
- Data sharing
- Amazon Redshift Serverless

## Machine Learning

### OpenSearch

### Macie

## Orchestrators

### Amazon SQS

- Amazon SQS visibility timeout

## Containers

### Amazon EKS
___
[^1]: [Bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html)
