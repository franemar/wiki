# AWS Certified Cloud Practitioner

## AWS Cloud Economics

 ```ditaa {cmd=true args=["-E"]}

                    +-----------+
                    |   Cloud   |  
         +----------+ Economics +----------------------+     
         |          |           |                      |            
         |          +-----------+                      |
         |                                             |
     +---+----+                                +-------+-------+
 +-->|Business|                                +  Cloud Value  |
 |   | Value  |                                |   Framework   |
 |   +--------+                                +-------+-------+
 |   **(TCO) Total Cost                                |
 |    of Ownership                                     |
 |                                                     |
 +---(Pre)sales conversations                          |
                                                       |
                       +----------------------+--------+------------------+----------------+
                       |                               |                  |                |     
                   +---+---+                   +-------+-----+     +------+------+    +----+-----+  
                   | Costs |                   |   Staff     |     | Operational |    | Business |  
                   |Savings|                   |Productivity |     | Resilience  |    | Agility  |
                   +-------+                   +-------------+     +-------------+    +----------+
          **Cost Savings Analysis
          **Traditional Infraestructure Costs
          vs. AWS Costs. 60 to 80% lower costs.
                       |  
              +--------+------+---------------+
              |               |               |    
       +------+------+ +------+------+ +------+-------+       
       | Consumption | | AWS Pricing | |    Costs     |  
       | based Model | |    Model    | | Productivity |
       +-------------+ +-------------+ +--------------+

  ```

___

***ENSURE DEPENDENT GROUP***

- Migration Costs Formula:

```latex
                  Costs Savings
    ROI = ________________________________ 

            Sunk Costs + Migration Costs 
```

**Sunk Costs:** evaluate amortization and recovery value.

___

OPEX
: An operating expense is an expense a business incurs through its normal business operations. Operating expenses include rent, equipment, inventory costs, marketing, payroll, insurance, step costs, and funds allocated for research and development.

CapEx
: Capital expenditures (CapEx) are funds used by a company to acquire, upgrade, and maintain physical assets such as property, plants, buildings, technology, or equipment. CapEx is often used to undertake new projects or investments by a company.

___

Interaction process last from 4 to 6 weeks aproximately.  Steps:

1. Kick-off meeting (scope of analysis) --> develop a timeline.
2. Roles.
3. Data Gathering (2-4 weeks).
4. Initial Assesment.
5. Full Assesment.
6. Iterate (return to point 3).
7. Finish.

MPA - Migration Portfolio Assessment
: Detailed portfolio assessment (server right-sizing, pricing, TCO comparisons, migration cost analysis) as well as migration planning (application data analysis and data collection, application grouping, migration prioritization, and wave planning) can be done online using Migration Portfolio Assessment. The service is available free of charge to all AWS consultants and AWS Partner consultants. Configuration management database (CMDB) and application portfolio data in varied formats can be imported into MPA with a web-based data ingestion process. MPA offers extensive configurability and enables experienced consultants to model customers’ scenarios and generate data for business case analysis and migration planning --> MPA Tool.

TSO Logic
: analytics for costs migration evaluation.

___

### Cloud Value Framework

Key control areas:

#### Cost Savings (TCO) - Cost Impact

Infrastructure cost savings/ avoidance from moving to the cloud. Example: 50%+ reduction in TCO (GE Oil & Gas Case Study).

#### Staff Productivity - Cost Impact

Efficiency improvement by function on a task-by-task basis. Tipical functions of the staff: server, networking, storage, application, facilities and security.  Example: over 500 hours per year of server configuration time saved (Sage Software Case Study).

#### Operational Resilience - Value Impact

Benefit of improved availability, security, and compliance. Example: Critical workloads run in multiple AZs and Regions for robust DR (Expedia Group Case Study).

#### Business Agility - Value Impact

Deploying new features/ applications faster and reducing errors. Example: launch of new products 75% faster(Unilever Case Study).

___

### Cloud Financial Management

Transform your business with cost transparency, control, forecasting, and optimization.

1. Measurement and Accountability: establishing cost transparency and accountability into expenses.
2. Planning and Forecasting: understanding current and future costs and IT needs, driving accurate planning.
3. Costs Optimization: identifying waste, building cloud-friendly architectures, improving cost efficiency.
4. Cloud Finantial Operation: identifying and investing in people, processes, tools, and automation.

**Cost Optimization pillars:**

- Right size of the instances.  Use metrics from Amazon Cloudwatch or custom metrics.
- Increase application elasticity.
- Choose the right pricing model: analize the use of reserved instances (IR), Regional IRs, capacity reservations, convertible IRs and EC2 Spot Instances. 1) **On-Demand**, pay for compute capacity by the second with no long-term commitments; 2) **Reserved Instances (RI)**, make a 1 or 3-year commitment for a significant discount - best for steady-state workloads and; 3) **Spot Instances**, spare EC2 capacity, best for fault-tolerant, flexible and stateless workloads.
- Optimize storage.  Example Amazon S3 Intelligent-tiering.
- Continue (iterate) optimization.

AWS Costs Explorer (Tool)
: Cost Explorer is a tool that enables you to view and analyze your costs and usage. You can explore your usage and costs using the main graph, the Cost Explorer cost and usage reports, or the Cost Explorer RI reports. You can view data for up to the last 12 months, forecast how much you're likely to spend for the next 12 months, and get recommendations for what Reserved Instances to purchase.
