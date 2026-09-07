# Amazon Web Services (AWS)

___

## TOC --> Move

- [Amazon Web Services (AWS)](#amazon-web-services-aws)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Introducción](#introducción)
    - [Advantages of cloud computing](#advantages-of-cloud-computing)
  - [Informática](#informática)
    - [Amazon EC2](#amazon-ec2)
      - [Amazon Machine Images (AMI)](#amazon-machine-images-ami)
    - [AWS Lambda](#aws-lambda)
      - [Use SAM CLI and AWS Cloud9 to Deploy Lambda Functions (Tutorial)](#use-sam-cli-and-aws-cloud9-to-deploy-lambda-functions-tutorial)
    - [Containers](#containers)
  - [Infraestructura](#infraestructura)
    - [AWS Command Line Interface](#aws-command-line-interface)
  - [Networking](#networking)
    - [Subnets](#subnets)
      - [Network traffic in a VPC](#network-traffic-in-a-vpc)
  - [Seguridad, identidad y conformidad](#seguridad-identidad-y-conformidad)
    - [Amazon Identity and Access Management (IAM)](#amazon-identity-and-access-management-iam)
    - [AWS Key Management Service (KMS)](#aws-key-management-service-kms)
    - [AWS Organizations](#aws-organizations)
    - [AWS Compliance](#aws-compliance)
    - [Amazon Inspector](#amazon-inspector)
    - [DDoS Attacks](#ddos-attacks)
      - [AWS Shield](#aws-shield)
  - [Application Integration](#application-integration)
  - [Administración y gobierno](#administración-y-gobierno)
    - [Bases de datos](#bases-de-datos)
      - [Amazon Redshift](#amazon-redshift)
      - [Amazon Aurora](#amazon-aurora)
    - [Additional Databases Services and Accelerators](#additional-databases-services-and-accelerators)
  - [Monitoring and Analytics](#monitoring-and-analytics)
    - [Amazon Cloudwatch](#amazon-cloudwatch)
    - [Trusted Advisor](#trusted-advisor)
  - [Pricing](#pricing)
    - [Billing and Cost Management](#billing-and-cost-management)
    - [AWS Support Plans](#aws-support-plans)
  - [Migration and Innovation](#migration-and-innovation)
    - [AWS Cloud Adoption Framework (AWS CAF)](#aws-cloud-adoption-framework-aws-caf)
    - [6 strategies for migration](#6-strategies-for-migration)
    - [The AWS Snow Family](#the-aws-snow-family)
    - [Innovate with AWS Services](#innovate-with-aws-services)
      - [Artificial intelligence](#artificial-intelligence)
  - [Análisis](#análisis)
    - [Amazon Athena](#amazon-athena)
    - [Amazon Glue](#amazon-glue)
      - [Components](#components)
        - [References](#references)
      - [AWS Data Exchange (DE)](#aws-data-exchange-de)
      - [Amazon EMR](#amazon-emr)
      - [Amazon RDS Snapshot Export](#amazon-rds-snapshot-export)
      - [Migration Roadmap (ALSO)](#migration-roadmap-also)
    - [AWS Data Lake Formation](#aws-data-lake-formation)
    - [Machine Learning](#machine-learning)
    - [Data visualization](#data-visualization)
  - [Generales](#generales)
    - [Entrenamiento y certificaciones](#entrenamiento-y-certificaciones)
    - [Anexos](#anexos)

### TOC --> Move

___

## Introducción

[Introducción a AWS](https://aws.amazon.com/es/getting-started/).

[Overview of Amazon Web Services - AWS Whitepaper](https://d1.awsstatic.com/whitepapers/aws-overview.pdf?sc_channel=em&sc_campaign=GLOBAL_TRAINCERT_LN_2-certification-exam-prep-nurture_20210301_.2-Prep%20-%20Documentation&sc_medium=em_&sc_content=PA_ln_traincert&sc_geo=mult&sc_country=mult&sc_outcome=pa&trk=em_).  **Nota:** futura integración y/o sustitución con este documento.

Política de Uso Aceptable
: señala los usos prohibidos  de los servicios web ofrecidos por Amazon Web Services Inc. y sus filiales y el sitio web ubicado en [aws.amazon.com](http://aws.amazon.com).

[AWS Management Console](https://aws.amazon.com/console/).

___

### Advantages of cloud computing

Operating in the AWS Cloud offers many benefits over computing in on-premises or hybrid environments. The six advantages of cloud computing:

- Trade upfront expense for variable expense: upfront expenses include data centers, physical servers, and other resources that you would need to invest in before using computing resources. Instead of investing heavily in data centers and servers before you know how you’re going to use them, you can pay only when you consume computing resources.
- Benefit from massive economies of scale: by using cloud computing, you can achieve a lower variable cost than you can get on your own. Because usage from hundreds of thousands of customers aggregates in the cloud, providers such as AWS can achieve higher economies of scale. Economies of scale translate into lower pay-as-you-go prices.
- Stop guessing capacity: with cloud computing, you don’t have to predict how much infrastructure capacity you will need before deploying an application.
- Increase speed and agility: the flexibility of cloud computing makes it easier for you to develop and deploy applications.
- Stop spending money running and maintaining data centers: cloud computing in data centers often requires you to spend more money and time managing infrastructure and servers.
- Go global in minutes: the AWS Cloud global footprint enables you to quickly deploy applications to customers around the world, while providing them with low latency.

___

## Informática

### Amazon EC2

Elastic Load Balancing
: Is the AWS service that automatically distributes incoming application traffic across multiple resources, such as Amazon EC2 instances. A load balancer acts as a single point of contact for all incoming web traffic to your Auto Scaling group.

AWS Instance Scheduler
: es una solución de AWS que permite a los clientes configurar con facilidad una programación personalizada de inicio y detención para sus instancias de Amazon Elastic Compute Cloud (Amazon EC2) y Amazon Relational Database Service (Amazon RDS). [AWS Instance Scheduler](https://aws.amazon.com/es/solutions/implementations/instance-scheduler/).

#### Amazon Machine Images (AMI)

An Amazon Machine Image (AMI) provides the information required to launch an instance. You must specify an AMI when you launch an instance. You can launch multiple instances from a single AMI when you need multiple instances with the same configuration. You can use different AMIs to launch instances when you need instances with different configurations. An AMI includes the following: 

- One or more Amazon Elastic Block Store (Amazon EBS) snapshots, or, for instance-store-backed AMIs, a template for the root volume of the instance (for example, an operating system, an application server, and applications).
- Launch permissions that control which AWS accounts can use the AMI to launch instances.
- A block device mapping that specifies the volumes to attach to the instance when it's launched.

___

### AWS Lambda

Los permisos de invocar la función se establecen con IAM Resource Policy/Function Policy y los de ejecutar la función con IAM Execution Role.  De existir una VPC: you must provide additional VPC-specific configuration information, which includes VPC subnet IDs and security group IDs.  Lambda provides a permissions policy named AWSLambdaVPCAccessExecutionRole which is an execution role with permissions to create, describe, and delete elastic network interfaces. [Configuring a Lambda Function to Access Resources in a VPC](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html)

[Using Resource-Based Policies for AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html)

- [Landing page for the serverless platform](http://aws.amazon.com/serverless/)
- [AWS Lambda - Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
- [AWS Lambda Runtimes in the AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html).  [Custom runtimes](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-custom.html).
- [SAM and SAM Cli](https://github.com/awslabs/serverless-application-model)
- [Tutorial: Using AWS Lambda with Amazon S3](https://docs.aws.amazon.com/lambda/latest/dg/with-s3-example.html).  **Nota**: en este tutorial no se indica que se debe iniciar el paquete (*npm init* antes de *npm install sharp*).
- [Lambda Power Tuning](https://github.com/alexcasalboni/aws-lambda-power-tuning)

#### Use SAM CLI and AWS Cloud9 to Deploy Lambda Functions (Tutorial)

**Nota:** Este tutorial fue creado con la versión anterior a nov. 2020 de Cloud9, donde existía la sección AWS Resources la cual fue sustituida por AWS Toolkit --> ver [Lamdba Toolkit](https://docs.aws.amazon.com/cloud9/latest/user-guide/lambda-toolkit.html).  Es recomendable deshabilitar el Toolkit si no se desea invertir tiempo en el aprendizaje del uso del mismo (aunque es lo que debería hacerse) [deshabilitar Toolkit](https://docs.aws.amazon.com/cloud9/latest/user-guide/toolkit-welcome.html#disable-toolkit).

[Archivo zip del tutorial](Tutoriales/LambdaC9Env.zip)

1. Crear una función Lambda local si es posible con un blueprint vacío.  Esta acción además de crear la carpeta de la aplicación también crea los archivos template.yaml e index.js.
2. Se debe configurar el Test Payload para que las ejecuciones puedan informar por consola (o ser ejecutadas).  Este Payload debe generarse invocando el comando del servicio u operación deseada desde una terminal y con el prefijo "sam local generate-event".
3. Los recursos con los que se desea interactuar (S3, DynamoDB, etc.) deben agregarse a la plantilla template.yaml en la sección "Resources".  **Nota:** siempre que se realicen cambios en la plantilla, se debe ejecutar el comando *sam validate*.
4. En la misma plantilla template.yaml, se debe agregar la información de los *eventos* de los recursos agregados a la sección "Resources", tomando la sintaxis desde AWS Serverless Application Model (SAM).  Referenciar los recursos con !Ref <nombre_recurso>.
5. Las políticas de permisos deben ser agregadas a la función.
6. Una vez finalizada todas las ediciones sobre template.yaml, se debe desplegar la función haciendo clic derecho sobre la misma y luego sobre "Deploy" (sección "Lambda" --> "Local functions").
7. Verificar el despliegue de la función en la consola de Lambda.
8. Verificar que los recursos han sido creados (si aplica, S3, DynamoDB, etc.)
9. En index.js, si se desea registrar la información de los eventos, se debe copiar la sintaxis de AWS Developer Guide "Event Message Structure".  Tambien se debe referir a la AWS Developer Guide SDK del lenguaje que se esté usando para por ejemplo, escribir valores en una tabla. **Nota:** pueden aparecer algunos mensajes de advertencia indicando que *x variable* no está definida, en el principio, hacer caso omiso.

**Nota:** cuando la función se crea manualmente, deben crearse también la política de IAM y el rol de ejecución (véase el tutorial *Tutorial: Using AWS Lambda with Amazon S3*).

___

### Containers

Amazon Elastic Container Service (Amazon ECS)
: Is a highly scalable, high-performance container management system that enables you to run and scale containerized applications on AWS. Amazon ECS supports Docker containers.

Amazon Elastic Kubernetes Service (Amazon EKS)
: Is a fully managed service that you can use to run Kubernetes on AWS. *Kubernetes* is open-source software that enables you to deploy and manage containerized applications at scale.

AWS Fargate
: Is a serverless compute engine for containers. It works with both Amazon ECS and Amazon EKS. When using AWS Fargate, you do not need to provision or manage servers, AWS Fargate manages your server infrastructure for you.

___

## Infraestructura

[Infraestructura global de AWS](https://www.infrastructure.aws/).

Edge location
: Is a site that Amazon CloudFront uses to store cached copies of your content closer to your customers for faster delivery (CDN: Content Delivery Network).

With **AWS Elastic Beanstalk**, you provide code and configuration settings, and Elastic Beanstalk deploys the resources necessary to perform the following tasks:

- Adjust capacity
- Load balancing
- Automatic scaling
- Application health monitoring

With **AWS CloudFormation**, you can treat your infrastructure as code. This means that you can build an environment by writing lines of code instead of using the AWS Management Console to individually provision resources.

AWS Outposts
: Is a fully managed service that extends AWS infrastructure, services, APIs, and tools to customer premises. An Outpost is a pool of AWS compute and storage capacity deployed at a customer site. AWS operates, monitors, and manages this capacity as part of an AWS Region.

___

### AWS Command Line Interface

[Installing, updating, and uninstalling the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html).

___

## Networking

Internet gateway
: To allow public traffic from the internet to access your VPC, you attach an internet gateway to the VPC. An internet gateway is a connection between a VPC and the internet. Without an internet gateway, no one can access the resources within your VPC.

Virtual private gateway
: To access private resources in a VPC, you can use a virtual private gateway. The virtual private gateway is the component that allows protected internet traffic to enter into the VPC. It acts like a virtual private network (VPN) connection that encrypts (or protects) your internet traffic from all the other requests around it. A virtual private gateway enables you to establish a virtual private network (VPN) connection between your VPC and a private network, such as an on-premises data center or internal corporate network. A virtual private gateway allows traffic into the VPC only if it is coming from an approved network.

AWS Direct Connect
: Is a service that enables you to establish a dedicated private connection between your data center and a VPC.

### Subnets

A subnet is a section of a VPC in which you can group resources based on security or operational needs. Subnets can be public or private. **Public subnets** contain resources that need to be accessible by the public, such as an online store’s website. **Private subnets** contain resources that should be accessible only through your private network, such as a database that contains customers’ personal information and order histories. In a VPC, subnets can communicate with each other.

#### Network traffic in a VPC

The package enters into a VPC through an internet gateway. Before a packet can enter into a subnet or exit from a subnet, it checks for permissions. These permissions indicate who sent the packet and how the packet is trying to communicate with the resources in a subnet. The VPC component that checks packet permissions for subnets is a network access control list (ACL).

Network access control lists (ACLs)
: A network access control list (ACL) is a virtual firewall that controls inbound and outbound traffic at the subnet level. Network ACLs perform *stateless* packet filtering and allows all inbound and outbound traffic. They remember nothing and check packets that cross the subnet border each way: inbound and outbound. When a packet response for that request comes back to the subnet, the network ACL does not remember your previous request. The network ACL checks the packet response against its list of rules to determine whether to allow or deny.

Security group
: Is a virtual firewall that controls inbound and outbound traffic for an Amazon EC2 instance. By default, a security group denies all inbound traffic and allows all outbound traffic. You can add custom rules to configure which traffic to allow or deny. If you have multiple Amazon EC2 instances within a subnet, you can associate them with the same security group or use different security groups for each instance. Security groups perform *stateful* packet filtering. They remember previous decisions made for incoming packets. When a packet response for that request returns to the instance, the security group remembers your previous request. The security group allows the response to proceed, regardless of inbound security group rules.

Amazon Route 53
: is a DNS web service. It connects user requests to infrastructure running in AWS (such as Amazon EC2 instances and load balancers). It can route users to infrastructure outside of AWS. Another feature of Route 53 is the ability to manage the DNS records for domain names. You can register new domain names directly in Route 53. You can also transfer DNS records for existing domain names managed by other domain registrars. This enables you to manage all of your domain names within a single location.

## Storage

Amazon Elastic Block Store (Amazon EBS)
: Is a service that provides block-level storage volumes that you can use with Amazon EC2 instances. If you stop or terminate an Amazon EC2 instance, all the data on the attached EBS volume remains available. An *Amazon EBS volume* stores data in a single Availability Zone. To attach an Amazon EC2 instance to an EBS volume, both the Amazon EC2 instance and the EBS volume must reside within the same Availability Zone.

Amazon EBS snapshots
: You can take incremental backups of EBS volumes.  An EBS snapshot is an incremental backup.

Amazon Elastic File System (Amazon EFS)
: Is a scalable file system used with AWS Cloud services and on-premises resources. As you add and remove files, Amazon EFS grows and shrinks automatically. It can scale on demand to petabytes without disrupting applications. Amazon EFS is a regional service. It stores data in and across multiple Availability Zones. Additionally, on-premises servers can access Amazon EFS using *AWS Direct Connect*.

___

## Seguridad, identidad y conformidad

### Amazon Identity and Access Management (IAM)

Los roles son accesos temporales, los permisos se encuentran en las "Policy Docs".

### AWS Key Management Service (KMS)

AWS KMS enables you to perform encryption operations through the use of cryptographic keys. You can use AWS KMS to create, manage, and use cryptographic keys. You can also control the use of keys across a wide range of services and in your applications.

With AWS KMS, you can choose the specific levels of access control that you need for your keys. For example, you can specify which IAM users and roles are able to manage keys. Alternatively, you can temporarily disable keys so that they are no longer in use by anyone. Your keys never leave AWS KMS, and you are always in control of them.

Go:

- [AWS re:Inforce 2019: Protect Customer Privacy with AWS (GRC351)](https://www.youtube.com/watch?reload=9&v=9yfh3JJ5A8I).
- [Programas de conformidad de AWS](https://aws.amazon.com/es/compliance/).

### AWS Organizations

You can use them to consolidate and manage multiple AWS accounts within a central location.  When you create an organization, AWS Organizations automatically creates a root, which is the parent container for all the accounts in your organization.

Service Control Policies (SCPs)
: By using SCPs in AWS Organizations, you can centrally control permissions for the accounts in your organization. SCPs enable you to place restrictions on the AWS services, resources, and individual API actions that users and roles in each account can access.

Organizational units (OUs)
: In AWS Organizations, you can group accounts into OUs to make it easier to manage accounts with similar business or security requirements. When you apply a policy to an OU, all the accounts in the OU automatically inherit the permissions specified in the policy.  By organizing separate accounts into OUs, you can more easily isolate workloads or applications that have specific security requirements.

### AWS Compliance

Risk management, control environment and information security. [Customer Compliance Center.](https://aws.amazon.com/compliance/customer-center/)

AWS Artifact
: Is a service that provides on-demand access to AWS security and compliance reports and select online agreements. AWS Artifact consists of two main sections: AWS Artifact Agreements and AWS Artifact Reports.

AWS Artifact Agreements
: You can review, accept, and manage agreements for an individual account and for all your accounts in AWS Organizations. Different types of agreements are offered to address the needs of customers who are subject to specific regulations, such as the Health Insurance Portability and Accountability Act (HIPAA).

AWS Artifact Reports
: Provide compliance reports from third-party auditors. These auditors have tested and verified that AWS is compliant with a variety of global, regional, and industry-specific security standards and regulations. AWS Artifact Reports remains up to date with the latest reports released.
___

### Amazon Inspector

Amazon Inspector tests the network accessibility of your Amazon EC2 instances and the security state of your applications that run on those instances. It assesses applications for exposure, vulnerabilities, and deviations from best practices. After performing an assessment, it produces a detailed list of security findings that is organized by level of severity.

With Amazon Inspector, you can automate security vulnerability assessments throughout your development and deployment pipelines or for static production systems. This allows you to make security testing a regular part of development and IT operations.

Amazon Inspector also offers predefined software called an agent that you can optionally install in the operating system of the EC2 instances that you want to assess. The agent monitors the behavior of the EC2 instances, including network, file system, and process activity. It also collects a wide set of behavior and configuration data (telemetry).
___

### DDoS Attacks

#### AWS Shield

Protector Agent against DDoS attacks. Provides two levels of protection: Standard and Advanced.

- AWS Shield Standard
: Automatically protects all AWS customers at no cost. It protects your AWS resources from the most common, frequently occurring types of DDoS attacks. As network traffic comes into your applications, AWS Shield Standard uses a variety of analysis techniques to detect malicious traffic in real time and automatically mitigates it.

- AWS Shield Advanced
: Is a paid service that provides detailed attack diagnostics and the ability to detect and mitigate sophisticated DDoS attacks. It also integrates with other services such as Amazon CloudFront, Amazon Route 53, and Elastic Load Balancing. Additionally, you can integrate AWS Shield with *AWS WAF* by writing custom rules to mitigate complex DDoS attacks.

AWS WAF
: Is a web application firewall that lets you monitor network requests that come into your web applications. AWS WAF works together with Amazon CloudFront and an Application Load Balancer. Recall the network access control, AWS WAF works in a similar way to block or allow traffic. However, it does this by using a web access control list (ACL) to protect your AWS resources.

Amazon GuardDuty
: is a service that provides intelligent threat detection for your AWS infrastructure and resources. It identifies threats by continually monitoring the network activity and account behavior within your AWS environment.

___

## Application Integration

- Step Functions
  : Distributed applications coordinator. Doc--> [AWS Step Functions Documentation](https://docs.aws.amazon.com/step-functions/index.html), [Amazon States Language](https://states-language.net/spec.html).

- Amazon SNS:
  : Simple Notification Service.

- Amazon EventBridge
  : es un bus de eventos sin servidor que conecta los datos de sus propias aplicaciones, aplicaciones de SaaS y servicios AWS. [Documentación](https://aws.amazon.com/es/eventbridge/).

___

## Administración y gobierno

1. [Centro de arquitectura de AWS](https://aws.amazon.com/es/architecture/).
2. [AWS Architecture Icons](https://aws.amazon.com/es/architecture/icons/).
3. Well Architected Framework: helps you understand how to design and operate reliable, secure, efficient, and cost-effective systems in the AWS Cloud. It provides a way for you to consistently measure your architecture against best practices and design principles and identify areas for improvement.  The Well-Architected Framework is based on the next five pillars:
   1. Operational excellence: is the ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures.  
   2. Security: this pillar is the ability to protect information, systems, and assets while delivering business value through risk assessments and mitigation strategies. When considering the security of your architecture, apply these best practices: automate security best practices when possible, apply security at all layers, protect data in transit and at rest.
   3. Reliability: is the ability of a system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, mitigate disruptions such as misconfigurations or transient network issues. It includes testing recovery procedures, scaling horizontally to increase aggregate system availability, and automatically recovering from failure.
   4. Performance efficiency: is the ability to use computing resources efficiently to meet system requirements and to maintain that efficiency as demand changes and technologies evolve.
   5. Cost optimization is the ability to run systems to deliver business value at the lowest price point.
4. [Well Architected Framework](https://aws.amazon.com/es/architecture/well-architected/?achp_wa1&wa-lens-whitepapers.sort-by=item.additionalFields.sortDate&wa-lens-whitepapers.sort-order=desc).
5. [AWS Well-Architected Framework (PDF)](https://d0.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf).
6. [Well Architected Analytics Lens](https://d1.awsstatic.com/whitepapers/architecture/wellarchitected-Analytics-Lens.pdf).

AWS Cloud Management Tools Competency Partners
: AWS Partner offerings supporting all phases of cloud management. The AWS Cloud Management Tools (CMT) Competency helps customers identify solutions that enable their cloud strategy by delivering operations and governance best practices. IT organizations balance delivering the benefits of a cloud strategy—agility, scale, resiliency, and cost savings—while maintaining governance, compliance, and efficient use of resources. AWS CMT Partners have proven customer success in delivering solutions that support all three.

___

### Bases de datos

Ver --> [Bases de datos en AWS](https://aws.amazon.com/es/products/databases/).

#### Amazon Redshift

- Base de datos Columnar.
- **Arquitectura distribuida:** Nodo Líder --> Nodos de cómputo (máx. 128 nodos de cómputo).
- Los nodos de cómputo poseen slices.
- **Resize del cluster:** elástico y clásico. En el **Elástico** se ejecuta en dos fases y se tiene una detención aproximada en minutos, mientras que en el **Clásico** la detención demora mínimo 1 hora.

-**Tipos de Instancia:** DS2 HDD y DC2 SSD (recomendado < 1TB), ambas escalan cómputo y almacenamiento al mismo tiempo y; las RA3 (recomendado > 1TB) que tienen el cómputo y el almacenamiento de forma separada y facturada así.

Amazon Redshift Lake House
: Redshift + Datalake sin realizar transformaciones y extensible con Aurora.

Amazon Redshift Spectrum
: Servicio para dwh gigantes, permite hacer queries sobre Redshift Lake House y S3.

#### Amazon Aurora

Motor de base de datos auto-gestionado que se ofrece como servicio y que es compatible con MySQL y PostgreSQL. It replicates six copies of your data across three Availability Zones and continuously backs up your data to Amazon S3.

Federated Query
: permite realizar consultas analíticas sobre dwh's, data lakes y oltp's, sin necesidad de mover datos (RDS/Aurora).

### Additional Databases Services and Accelerators

Amazon DocumentDB
: Is a document database service that supports MongoDB workloads.

Amazon Neptune
: Is a graph database service. You can use Amazon Neptune to build and run applications that work with highly connected datasets, such as recommendation engines, fraud detection, and knowledge graphs.

Amazon Quantum Ledger Database (Amazon QLDB)
: Is a ledger database service. You can use Amazon QLDB to review a complete history of all the changes that have been made to your application data.

Amazon Managed Blockchain
: Is a service that you can use to create and manage blockchain networks with open-source frameworks.

Amazon ElastiCache
: Is a service that adds caching layers on top of your databases to help improve the read times of common requests. It supports two types of data stores: Redis and Memcached.

Amazon DynamoDB Accelerator (DAX)
: Is an in-memory cache for DynamoDB. It helps improve response times from single-digit milliseconds to microseconds.

___

## Monitoring and Analytics

___

### Amazon Cloudwatch

Es un servicio de monitorización y observación creado para ingenieros de DevOps, desarrolladores, ingenieros de fiabilidad de sitio (SRE) y administradores de TI. Ofrece datos e información procesable para monitorizar sus aplicaciones, responder a cambios de rendimiento que afectan a todo el sistema, optimizar el uso de recursos y lograr una vista unificada del estado de las operaciones.

[Amazon Cloudwatch](https://aws.amazon.com/es/cloudwatch/).

- [awslogs](https://github.com/jorgebastida/awslogs): is a simple command line tool for querying groups, streams and events from Amazon CloudWatch logs.

Cloudtrail
: API log. Within CloudTrail, you can also enable CloudTrail Insights: this optional feature allows CloudTrail to automatically detect unusual API activities in your AWS account.

### Trusted Advisor

Trusted Advisor compares its findings to AWS best practices in five categories: cost optimization, performance, security, fault tolerance, and service limits. For the checks in each category, Trusted Advisor offers a list of recommended actions and additional resources to learn more about AWS best practices.

[Trusted Advisor](https://aws.amazon.com/es/premiumsupport/technology/trusted-advisor/)

___

## Pricing

___

- [How AWS Pricing Works - AWS Whitepaper](https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/how-aws-pricing-works.pdf#welcome)
- [AWS Pricing Calculator](https://calculator.aws/#/)
- [The Price List Service API](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/price-changes.html). The Price List Service API (AKA the Query API) and AWS Price List API (AKA the Bulk API) enable you to query for the prices of AWS services using either JSON (with the Price List Service API) or HTML (with the AWS Price List API). You can also subscribe to Amazon Simple Notification Service (Amazon SNS) notifications to get alerts when prices for the services change.

### Billing and Cost Management

- [AWS Billing & Cost Management dashboard](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html)
- [Analyzing your costs with Cost Explorer](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html). Cost Explorer is a tool that enables you to view and analyze your costs and usage. You can explore your usage and costs using the main graph, the Cost Explorer cost and usage reports, or the Cost Explorer RI reports. [Previsión de costos mejorada](https://aws.amazon.com/es/about-aws/whats-new/2018/11/enhanced-forecasting-now-available-in-aws-cost-explorer/).

Consolidated billing
: Feature of AWS Organizations that enables you to receive a single bill for all AWS accounts in your organization.

AWS Budgets
: In AWS Budgets, you can create budgets to plan your service usage, service costs, and instance reservations. The information in AWS Budgets updates three times a day. You can also set custom alerts when your usage exceeds (or is forecasted to exceed) the budgeted amount.

### AWS Support Plans

AWS Personal Health Dashboard
: Is a tool that provides alerts and remediation guidance when AWS is experiencing events that may affect you.

Technical Account Management (TAM, Enterprise Support Plan)
: The TAM is your primary point of contact at AWS. They provide guidance, architectural reviews, and ongoing communication with your company as you plan, deploy, and optimize your applications.

AWS Support Concierge
: Account assistance at not technical level.

___

## Migration and Innovation

___

### AWS Cloud Adoption Framework (AWS CAF)

Organizes guidance into six areas of focus, called Perspectives. Each Perspective addresses distinct responsibilities. The planning process helps the right people across the organization prepare for the changes ahead.

In general, the Business, People, and Governance Perspectives focus on business capabilities, whereas the Platform, Security, and Operations Perspectives focus on technical capabilities.

Business Perspective
: The Business Perspective ensures that IT aligns with business needs and that IT investments link to key business results.

  Common roles in the Business Perspective include:

  - Business managers
  - Finance managers
  - Budget owners
  - Strategy stakeholders
  
People Perspective
: The People Perspective supports development of an organization-wide change management strategy for successful cloud adoption. Use the People Perspective to evaluate organizational structures and roles, new skill and process requirements, and identify gaps.

  Common roles in the People Perspective include:

  - Human resources
  - Staffing
  - People managers

Governance Perspective
: The Governance Perspective focuses on the skills and processes to align IT strategy with business strategy. Use the Governance Perspective to understand how to update the staff skills and processes necessary to ensure business governance in the cloud. Manage and measure cloud investments to evaluate business outcomes.

  Common roles in the Governance Perspective include:

  - Chief Information Officer (CIO)
  - Program managers
  - Enterprise architects
  - Business analysts
  - Portfolio managers

Platform Perspective
: The Platform Perspective includes principles and patterns for implementing new solutions on the cloud, and migrating on-premises workloads to the cloud.  Use a variety of architectural models to understand and communicate the structure of IT systems and their relationships. Describe the architecture of the target state environment in detail.

  Common roles in the Platform Perspective include:

  - Chief Technology Officer (CTO)
  - IT managers
  - Solutions architects

Security Perspective
: The Security Perspective ensures that the organization meets security objectives for visibility, auditability, control, and agility.

  Common roles in the Security Perspective include:

  - Chief Information Security Officer (CISO)
  - IT security managers
  - IT security analysts

Operations Perspective
: The Operations Perspective helps you to enable, run, use, operate, and recover IT workloads to the level agreed upon with your business stakeholders.

  Common roles in the Operations Perspective include:

  - IT operations managers
  - IT support managers

___

### 6 strategies for migration

When migrating applications to the cloud, six of the most common migration strategies that you can implement are:

Re-hosting
: It's also known as “lift-and-shift”, involves moving applications without changes.

Re-platforming
: It's also known as “lift, tinker, and shift,” involves making a few cloud optimizations to realize a tangible benefit. Optimization is achieved without changing the core architecture of the application.

Refactoring/re-architecting
: It involves reimagining how an application is architected and developed by using cloud-native features.

Re-purchasing
: It involves moving from a traditional license to a software-as-a-service model.

Retaining
: It consists of keeping applications that are critical for the business in the source environment.

Retiring
: It's the process of removing applications that are no longer needed.

___

### The AWS Snow Family

It's a collection of physical devices that help to physically transport up to exabytes of data into and out of AWS. AWS Snow Family is composed of AWS Snowcone, AWS Snowball, and AWS Snowmobile. These devices offer different capacity points, and most include built-in computing capabilities. AWS owns and manages the Snow Family devices and integrates with AWS security, monitoring, storage management, and computing capabilities.  

To learn about each category, select each tab.

AWS SNOWCONE
: It features 2 CPUs, 4 GB of memory, and 8 TB of usable storage.

AWS Snowball
: It offers two types of devices.
  **Snowball Edge Storage Optimized devices** are well suited for large-scale data migrations and recurring transfer workflows, in addition to local computing with higher capacity needs. Storage: 80 TB of hard disk drive (HDD) capacity for block volumes and Amazon S3 compatible object storage, and 1 TB of SATA solid state drive (SSD) for block volumes. Compute: 40 vCPUs, and 80 GiB of memory to support Amazon EC2 sbe1 instances (equivalent to C5). **Snowball Edge Compute Optimized** provides powerful computing resources for use cases such as machine learning, full motion video analysis, analytics, and local computing stacks. Storage: 42-TB usable HDD capacity for Amazon S3 compatible object storage or Amazon EBS compatible block volumes and 7.68 TB of usable NVMe SSD capacity for Amazon EBS compatible block volumes. Compute: 52 vCPUs, 208 GiB of memory, and an optional NVIDIA Tesla V100 GPU. Devices run Amazon EC2 sbe-c and sbe-g instances, which are equivalent to C5, M5a, G3, and P3 instances.

AWS Snowmobile
: It's an exabyte-scale data transfer service used to move large amounts of data to AWS. You can transfer up to 100 petabytes of data per Snowmobile, a 45-foot long ruggedized shipping container, pulled by a semi trailer truck.

___

### Innovate with AWS Services

#### Artificial intelligence

AWS offers a variety of services powered by artificial intelligence (AI).  Examples:

- Convert speech to text with **Amazon Transcribe**.
- Discover patterns in text with **Amazon Comprehend**.
- Identify potentially fraudulent online activities with **Amazon Fraud Detector**.
- Build voice and text chatbots with **Amazon Lex**.
- **Amazon Textract** is a machine learning service that automatically extracts text and data from scanned documents.
- **AWS DeepRacer** is an autonomous 1/18 scale race car that you can use to test reinforcement learning models.
- **Amazon Augmented AI (Amazon A2I)** provides built-in human review workflows for common machine learning use cases, such as content moderation and text extraction from documents

___

## Análisis

___

### Amazon Athena

It's a serverless service that can query Amazon S3 or almost any other source directly using the Structured Query Language (SQL).

La sintaxis SQL está basada en [Apache Hive]([https://link](https://cwiki.apache.org/confluence/display/Hive/Home)) y en [Presto 0.217](https://prestodb.io/docs/0.217/index.html).

[Amazon Athena](https://docs.aws.amazon.com/athena/latest/ug/what-is.html).

- [Con "Apache Hudi"](https://docs.aws.amazon.com/athena/latest/ug/querying-hudi.html).
- [Tutorial incremental data processing (Hudi)](https://incremental-data-processing-on-amazonemr.workshop.aws/en/10-basics.html), [git repo](https://github.com/andresmaopal/hudi_palacan_demos).  **Nota:** tutorial importante ya que muestra como deben realizarse los comandos sobre hudi, simular la actualización de datos random sobre las fuentes, las instancias EMR, etc.  Lamentablemente además de ser un poco confuso, no se pudo configurar el usuario IAM solicitado por lo que tuvo que realizarse con acceso root.  Sería recomendable revisar si se puede hacer el siguiente--> [Apply record level changes from relational databases to Amazon S3 data lake using Apache Hudi on Amazon EMR and AWS Database Migration Service](https://aws.amazon.com/es/blogs/big-data/apply-record-level-changes-from-relational-databsiases-to-amazon-s3-data-lake-using-apache-hudi-on-amazon-emr-and-aws-database-migration-service/)

___

### Amazon Glue

It's an auto-managed ETL.  It's recommended to use "Glue Studio".  It's based on Hive.

#### Components

- **Dynamic Frame**: a dynamic frame is similar to an Apache Spark dataframe, which is a data abstraction used to organize data into rows and columns, except that each record is self-describing so no schema is required initially. With dynamic frames, you get schema flexibility and a set of advanced transformations specifically designed for dynamic frames.
- Web Crawlers: [AWS PartnerCast - How to Use Glue Crawlers Efficiently to Build Your Data Lake Quickly – Tips, Tricks, and Best Practices
](https://www.aws.training/Details/Video?id=54818)

==Glue Crawler --> Glue Catalog (mejorar)==

##### References

- [General Doc](https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html).
- [AWS Glue FAQ, or How to Get Things Done](https://github.com/aws-samples/aws-glue-samples/blob/master/FAQ_and_How_to.md).
- [AWS Glue ETL Code Samples](https://github.com/aws-samples/aws-glue-samples/#examples).
- [AWS Glue open-source Python libraries](https://github.com/awslabs/aws-glue-libs).
- [AWS Glue service libraries](https://github.com/awslabs/aws-glue-libs).
- [Notebook Zeppelinlocal](https://docs.aws.amazon.com/glue/latest/dg/dev-endpoint-tutorial-local-notebook.html).
  
==Completar "Data Flywheel".== **Nota:** revisar ubicación.
___

#### AWS Data Exchange (DE)

 Permite integrar y analizar datos de terceros.

#### Amazon EMR

Combinado con Amazon Glue implementa el framework de Hadoop para procesar grandes cantidades de datos a altas velocidades. Usa HDFS o Elastic MapReduce File System (EMRFS).

#### Amazon RDS Snapshot Export

Permite exportar a S3 Snapshots de RSD en formato Parquet.

___

#### Migration Roadmap (ALSO)

- **AWS Schema Convertion Tool (SCT):** complementa a Amazon DMS permitiendo extraer la metadata desde dwh's on-premises.
  
___

### AWS Data Lake Formation

Capa de seguridad y de gobierno de datos. (trad.) **Makes** it easy to ingest, clean, catalog, transform, and secure your data and make it available for analysis and machine learning.

==Investigar DIDL==
==Investigar "Blueprints".==

___

### Machine Learning

- Amazon Macie

  : ML over S3 and other sources.

- SakeMaker.

___

### Data visualization

- [Tableau Public]([https://link](https://public.tableau.com/en-us/s/)).

- **Quicksight:** también aplica ALSO --> Implementacion Plannig.  Ver Workload Qualification Framework (WQF).

___

## Generales

- [News blog](https://aws.amazon.com/es/blogs/aws/).
- [AWS Quick Starts (implementaciones automatizadas)](https://aws.amazon.com/es/quickstart/?quickstart-all.sort-by=item.additionalFields.sortDate&quickstart-all.sort-order=desc&awsf.quickstart-homepage-filter=categories%23databases).
- [Herramientas para crear en AWS - Herramientas para desarrollar y administrar aplicaciones en AWS](https://aws.amazon.com/es/tools/)
- [AWS Marketplace](https://aws.amazon.com/marketplace/). It's a digital catalog that includes thousands of software listings from independent software vendors. You can use AWS Marketplace to find, test, and buy software that runs on AWS. You can also explore software solutions by industry and use case. AWS Marketplace offers products in several categories, such as Infrastructure Products, Business Applications, Data Products, and DevOps.
- [AWS Video Catalog](https://awsvideocatalog.com/).
- [Capa gratuita de AWS](https://aws.amazon.com/es/free/?nc2=h_ql_pr_ft&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc).
- [Herramientas para administradores y desarrolladores](https://aws.amazon.com/es/tools/).
- [Centro de ahorro de la nube (economía)](https://aws.amazon.com/es/economics/).

___

### Entrenamiento y certificaciones

1. [AWS Partner Network](https://partnercentral.awspartner.com/)
2. [Programa de Competencias de AWS](https://aws.amazon.com/es/partners/competencies/).
3. [AWS Partner Learning Path](https://pages.awscloud.com/AWS-Partner-Learning-Path-Tool.html#) y [AWS Partner Techical Learning Path](https://aws.amazon.com/es/partners/training/path-tech-pro/).
4. [AWS Ramp-up Guide](https://pages.awscloud.com/AWS-Traincert_Ramp-up_Guides.html).
5. [Quicklabs](https://amazon.qwiklabs.com/).
6. [Certification Preparation](https://aws.amazon.com/es/certification/certification-prep/).

- Bigliografía:
   1. [AWS Certified Solutions Architect Official Study Guide](https://www.amazon.com/Certified-Solutions-Architect-Official-Study/dp/1119138558/ref=sr_1_1?s=books&ie=UTF8&qid=1527625749&sr=1-1&keywords=architecting+on+aws).
   2. [Ahead in the Cloud: Best Practices for Navigating the Future of Enterprise IT](https://www.amazon.com/-/es/Stephen-Orban-ebook-dp-B07BYQTGJ7/dp/B07BYQTGJ7/ref=mt_other?_encoding=UTF8&me=&qid=1527625580).

### Anexos

- [Librería Python boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html)
- [Python Data Wrangler](https://aws-data-wrangler.readthedocs.io/en/stable/index.html).  **Nota:** en Lambda, Glue, Pyspark debe configurarse el layer, path, etc. antes de que pueda ser usada.  [Instructivo, ejemplos y tutoriales](https://github.com/awslabs/aws-data-wrangler)
- [AWS Serverless Datalake Framework](https://sdlf.readthedocs.io/en/latest/overview.html)

___
