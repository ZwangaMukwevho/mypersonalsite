const workData = [
  {
    company: 'Tripco',
    role: [
      {
        title: 'Fullstack Developer',
        monthYearStart: 'Sep 2023',
        monthYearEnd: 'Present',
        jobDescription: [
          'Designed and implemented a robust image upload system through a front-end interface, seamlessly transferring images to Amazon S3 cloud storage. Implemented caching using IMGIX mechanisms to ensure rapid image retrieval for optimal user experience.',
          'Built a Python 3 service to ingest proof-of-payment emails, validate 1,000+ EFT payments/day, and archive results to AWS S3.',
          'Maintained a C++ price management service to quickly aggregate pricing data from a MySQL database and external platforms, ensuring fast updates for rapidly changing prices', 
          'Developed a TCP/IP SFTP PHP service via proxy to fetch 500+ monthly cost statements for financial analysis and reconciliation.', 
          'Built and containerized services with Docker, orchestrated with Nomad, secured secrets with Vault, and automated CI/CD using GitHub Actions.',
          'Migrated an old application from PHP, MySQL, and Vue (JavaScript)  to the Laravel framework, with the front-end rebuilt in React (Typescript).'
        ],
      },
    ],
  },
  {
    company: 'Allan Gray',
    role: [
      {
        title: ' Software Enginner',
        monthYearStart: 'Jan 2022',
        monthYearEnd: 'Aug 2023',
        jobDescription: [
          'Migrated infrastructure management from on-prem Ansible to cloud-based Terraform, boosting scalability and cutting provisioning time by 30%',
          'Monitored application uptime in Grafana (fed by Prometheus metrics) and centralized logs with the ELK (Elastic, Logstash, Kibana)  stack',
          'Set up CI/CD pipelines in GitLab for building, testing, and deploying artifacts to Artifactory, enabling containerization with Docker and deployment to Kubernetes',
          'Leveraged Rancher for in-depth investigation and troubleshooting of services running on Docker within a microservices architecture.',
          'Migrated a MongoDB dataset of over 10,000 documents from on-premises to AWS, enabling secure access via an EC2 jump box (bastion host).',
          'Migrated APIs from Scala to Golang in an event-driven RabbitMQ setup, shrinking Docker images by 40 % and accelerating Helm-managed Kubernetes start-up times.'
        ],
      },
    ],
  },
  {
    company: 'Thinkst Canary',
    role: [
      {
        title: 'Intern Software Engineer',
        monthYearStart: 'Jun 2019',
        monthYearEnd: 'Jul 2019',
        jobDescription: [
          'I was responsible for the development of a CI/CD pipeline within AWS CodePipeline. This pipeline was designed to automatically create and build a new Docker image and subsequently push it to AWS Elastic Container Registry (ECR) following a successful build and merge. Additionally, it facilitated the deployment of the newly generated Docker container to the target environment',
        ],
      },
    ],
  },
  {
    company: 'F-Secure',
    role: [
      {
        title: 'Intern Software Engineer',
        monthYearStart: 'Nov 2019',
        monthYearEnd: 'Dec 2019',
        jobDescription: [
          'Contributed to an internal project that leveraged Python ECR libraries for efficient text extraction. Implemented Redis for rapid caching and incorporated Elasticsearch for optimization during search operations.',
        ],
      },
    ],
  },
]

export default workData
