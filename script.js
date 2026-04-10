const questions = [
    // DOMAIN 1: CLOUD CONCEPTS
    { id: 1, domain: "CLOUD CONCEPTS", text: "Which perspective of the AWS Cloud Adoption Framework (AWS CAF) focuses on bridging the gap between business and technology?", options: ["Governance Perspective", "Platform Perspective", "Business Perspective", "Operations Perspective"], answer: 2 },
    { id: 2, domain: "CLOUD CONCEPTS", text: "What is the ability to acquire resources quickly and discard them when they are no longer needed?", options: ["High Availability", "Agility", "Fault Tolerance", "Durability"], answer: 1 },
    { id: 3, domain: "CLOUD CONCEPTS", text: "Which benefit of the cloud refers to the ability to automatically grow and shrink resources based on demand?", options: ["Elasticity", "Scalability", "Agility", "Reliability"], answer: 0 },
    { id: 4, domain: "CLOUD CONCEPTS", text: "A company keeps some data in their on-premises data center and moves other applications to AWS. Which deployment model is this?", options: ["All-in Cloud", "Private Cloud", "Hybrid", "Multi-cloud"], answer: 2 },
    { id: 5, domain: "CLOUD CONCEPTS", text: "What does the 'Economy of Scale' in AWS mean for customers?", options: ["Customers can build their own data centers at a lower cost", "AWS achieves lower variable costs, resulting in lower prices for customers", "Customers must pay upfront for all resources", "AWS provides free technical support to all users"], answer: 1 },
    { id: 6, domain: "CLOUD CONCEPTS", text: "Which AWS CAF perspective focuses on building a scalable, cloud-native infrastructure?", options: ["Governance", "Platform", "People", "Security"], answer: 1 },
    { id: 7, domain: "CLOUD CONCEPTS", text: "What is the term for a system that can recover from hardware or service failures automatically?", options: ["Scalability", "Fault Tolerance", "Elasticity", "Efficiency"], answer: 1 },
    { id: 8, domain: "CLOUD CONCEPTS", text: "Which benefit of the AWS Cloud allows a company to deploy globally in minutes?", options: ["Speed and Agility", "Massive Economies of Scale", "Trade Capital Expense for Variable Expense", "Global Reach"], answer: 3 },
    { id: 9, domain: "CLOUD CONCEPTS", text: "Which AWS tool helps a company assess their readiness for cloud migration?", options: ["AWS Migration Hub", "AWS Snowball", "AWS Trusted Advisor", "AWS Glue"], answer: 0 },
    { id: 10, domain: "CLOUD CONCEPTS", text: "What is the primary focus of 'Right-sizing' in AWS?", options: ["Using the largest instance available to ensure performance", "Matching resource types and sizes to your workload to minimize cost", "Moving all data to cold storage", "Using only on-demand pricing"], answer: 1 },
    { id: 11, domain: "CLOUD CONCEPTS", text: "Which pillar of the AWS Well-Architected Framework focuses on the ability of a workload to perform its intended function?", options: ["Performance Efficiency", "Reliability", "Operational Excellence", "Sustainability"], answer: 1 },
    { id: 12, domain: "CLOUD CONCEPTS", text: "In the AWS CAF, which perspective handles managing and optimizing cloud services?", options: ["Operations", "Business", "Security", "Governance"], answer: 0 },
    { id: 13, domain: "CLOUD CONCEPTS", text: "What is an advantage of trading 'Capital Expense' for 'Variable Expense'?", options: ["You pay for resources before you use them", "You avoid large upfront investments in hardware", "You are required to sign a 3-year contract", "You lose the ability to scale resources"], answer: 1 },
    { id: 14, domain: "CLOUD CONCEPTS", text: "Which design principle suggests that you should not guess capacity needs?", options: ["Scalability", "Agility", "Stop guessing capacity", "Fault Tolerance"], answer: 2 },
    { id: 15, domain: "CLOUD CONCEPTS", text: "Which AWS CAF perspective focuses on risk management and compliance?", options: ["Governance", "Security", "People", "Platform"], answer: 1 },
    { id: 16, domain: "CLOUD CONCEPTS", text: "Which cloud benefit refers to the speed at which developers can experiment and innovate?", options: ["Agility", "Elasticity", "Reliability", "High Availability"], answer: 0 },

    // DOMAIN 2: SECURITY AND COMPLIANCE
    { id: 17, domain: "SECURITY AND COMPLIANCE", text: "Under the AWS Shared Responsibility Model, who is responsible for patching the Guest Operating System?", options: ["AWS", "The Customer", "Both AWS and the Customer", "Third-party vendors"], answer: 1 },
    { id: 18, domain: "SECURITY AND COMPLIANCE", text: "Which service provides centralized management and governance across multiple AWS accounts?", options: ["AWS IAM", "AWS Organizations", "AWS Shield", "AWS CloudTrail"], answer: 1 },
    { id: 19, domain: "SECURITY AND COMPLIANCE", text: "What is the purpose of the AWS IAM Identity Center?", options: ["To encrypt data at rest", "To provide single sign-on (SSO) access to accounts and apps", "To monitor API calls", "To report security abuse"], answer: 1 },
    { id: 20, domain: "SECURITY AND COMPLIANCE", text: "Which service allows you to audit and track all API activity in your account?", options: ["AWS CloudTrail", "Amazon CloudWatch", "AWS Config", "AWS Trusted Advisor"], answer: 0 },
    { id: 21, domain: "SECURITY AND COMPLIANCE", text: "According to the Shared Responsibility Model, AWS is responsible for security ______ the cloud.", options: ["In", "Of", "Around", "Above"], answer: 1 },
    { id: 22, domain: "SECURITY AND COMPLIANCE", text: "Which of the following is a customer responsibility?", options: ["Protecting data center physical security", "Managing data encryption and firewall configurations", "Disposing of failed storage drives", "Patching the virtualization software"], answer: 1 },
    { id: 23, domain: "SECURITY AND COMPLIANCE", text: "Which service provides automatic DDoS protection for all AWS customers?", options: ["AWS Shield Standard", "AWS WAF", "Amazon GuardDuty", "AWS Firewall Manager"], answer: 0 },
    { id: 24, domain: "SECURITY AND COMPLIANCE", text: "A user needs to store and rotate database passwords securely. Which service should they use?", options: ["AWS KMS", "AWS Secrets Manager", "AWS Artifact", "Amazon Macie"], answer: 1 },
    { id: 25, domain: "SECURITY AND COMPLIANCE", text: "Which service uses Machine Learning to discover and protect sensitive data in S3?", options: ["Amazon Macie", "Amazon GuardDuty", "Amazon Inspector", "AWS Shield"], answer: 0 },
    { id: 26, domain: "SECURITY AND COMPLIANCE", text: "What is the document that defines permissions for an IAM role?", options: ["IAM Group", "IAM Policy", "IAM Credential", "IAM Multi-factor device"], answer: 1 },
    { id: 27, domain: "SECURITY AND COMPLIANCE", text: "Where can a customer find official AWS compliance reports, such as SOC or PCI?", options: ["AWS Trusted Advisor", "AWS Artifact", "AWS Shield", "AWS CloudTrail"], answer: 1 },
    { id: 28, domain: "SECURITY AND COMPLIANCE", text: "Which principle states that users should have only the access required for their jobs?", options: ["Root Access", "Least Privilege", "Open Access", "Shared Responsibility"], answer: 1 },
    { id: 29, domain: "SECURITY AND COMPLIANCE", text: "Which service provides intelligent threat detection for your AWS accounts and workloads?", options: ["Amazon GuardDuty", "Amazon Inspector", "AWS WAF", "AWS Shield"], answer: 0 },
    { id: 30, domain: "SECURITY AND COMPLIANCE", text: "What is the best practice for securing the AWS root user?", options: ["Use the root user for all daily tasks", "Share the root password with all admins", "Enable MFA and use IAM users instead", "Delete the root user account"], answer: 2 },
    { id: 31, domain: "SECURITY AND COMPLIANCE", text: "Which AWS service is a firewall for web applications to protect against common exploits?", options: ["AWS Shield", "AWS WAF", "Amazon GuardDuty", "AWS Direct Connect"], answer: 1 },
    { id: 32, domain: "SECURITY AND COMPLIANCE", text: "Who should you contact if you suspect AWS resources are being used for harmful activities?", options: ["AWS Support Center", "AWS Trust and Safety (Abuse) Team", "AWS Solutions Architect", "AWS Technical Account Manager"], answer: 1 },
    { id: 33, domain: "SECURITY AND COMPLIANCE", text: "Which service allows you to track configuration changes of your AWS resources?", options: ["AWS CloudTrail", "AWS Config", "Amazon CloudWatch", "AWS Trusted Advisor"], answer: 1 },
    { id: 34, domain: "SECURITY AND COMPLIANCE", text: "What allows a service like EC2 to access an S3 bucket without using long-term credentials?", options: ["IAM User", "IAM Role", "IAM Group", "IAM Policy"], answer: 1 },
    { id: 35, domain: "SECURITY AND COMPLIANCE", text: "Which service provides automated vulnerability scans for EC2 and container images?", options: ["Amazon Inspector", "Amazon Macie", "AWS Shield", "AWS WAF"], answer: 0 },

    // DOMAIN 3: TECHNOLOGY
    { id: 36, domain: "TECHNOLOGY", text: "Which compute service runs code in response to events and is fully serverless?", options: ["Amazon EC2", "AWS Lambda", "AWS Fargate", "Amazon Lightsail"], answer: 1 },
    { id: 37, domain: "TECHNOLOGY", text: "What are AWS Wavelength Zones designed for?", options: ["Long-term archiving", "Low-latency applications on 5G networks", "High-performance computing", "Government compliance"], answer: 1 },
    { id: 38, domain: "TECHNOLOGY", text: "Which storage service provides a shared file system that can be mounted by many EC2 instances?", options: ["Amazon EBS", "Amazon EFS", "Amazon S3", "Amazon Glacier"], answer: 1 },
    { id: 39, domain: "TECHNOLOGY", text: "Which service is used to run and manage Kubernetes on AWS?", options: ["Amazon ECS", "Amazon EKS", "AWS Fargate", "AWS App Runner"], answer: 1 },
    { id: 40, domain: "TECHNOLOGY", text: "Which service helps you migrate databases to AWS while keeping the source DB live?", options: ["AWS Snowball", "AWS Database Migration Service (DMS)", "AWS DataSync", "AWS Glue"], answer: 1 },
    { id: 41, domain: "TECHNOLOGY", text: "What is the primary use case for Amazon ElastiCache?", options: ["Relational database storage", "In-memory caching for faster performance", "Data warehousing", "Long-term storage"], answer: 1 },
    { id: 42, domain: "TECHNOLOGY", text: "Which service allows you to create a logically isolated section of the AWS Cloud?", options: ["AWS Direct Connect", "Amazon VPC", "AWS Route 53", "Amazon CloudFront"], answer: 1 },
    { id: 43, domain: "TECHNOLOGY", text: "Which service is a Content Delivery Network (CDN) that speeds up data delivery?", options: ["Amazon CloudFront", "AWS Global Accelerator", "Amazon Route 53", "AWS Shield"], answer: 0 },
    { id: 44, domain: "TECHNOLOGY", text: "Which AWS database service is a fully managed NoSQL key-value store?", options: ["Amazon RDS", "Amazon DynamoDB", "Amazon Redshift", "Amazon Aurora"], answer: 1 },
    { id: 45, domain: "TECHNOLOGY", text: "What is the purpose of AWS Local Zones?", options: ["To store data in different countries", "To place compute closer to users in specific cities", "To provide DDoS protection", "To manage DNS records"], answer: 1 },
    { id: 46, domain: "TECHNOLOGY", text: "Which service allows you to provision infrastructure using JSON or YAML templates?", options: ["AWS CloudFormation", "AWS OpsWorks", "AWS Systems Manager", "AWS Elastic Beanstalk"], answer: 0 },
    { id: 47, domain: "TECHNOLOGY", text: "What is Amazon Route 53?", options: ["A storage service", "A managed Domain Name System (DNS) service", "A database service", "A monitoring service"], answer: 1 },
    { id: 48, domain: "TECHNOLOGY", text: "Which service is used to build, train, and deploy machine learning models?", options: ["Amazon Lex", "Amazon SageMaker", "Amazon Rekognition", "Amazon Polly"], answer: 1 },
    { id: 49, domain: "TECHNOLOGY", text: "Which service provides message queuing to decouple microservices?", options: ["Amazon SNS", "Amazon SQS", "Amazon SES", "Amazon Connect"], answer: 1 },
    { id: 50, domain: "TECHNOLOGY", text: "Which storage service provides persistent block storage for EC2 instances?", options: ["Amazon S3", "Amazon EBS", "Amazon EFS", "Amazon Glacier"], answer: 1 },
    { id: 51, domain: "TECHNOLOGY", text: "Which AWS service is a fast, fully managed data warehouse?", options: ["Amazon RDS", "Amazon Redshift", "Amazon DynamoDB", "Amazon Aurora"], answer: 1 },
    { id: 52, domain: "TECHNOLOGY", text: "What is the AWS Command Line Interface (CLI)?", options: ["A visual management tool", "A text-based tool to manage AWS services", "A mobile application", "A hardware device"], answer: 1 },
    { id: 53, domain: "TECHNOLOGY", text: "Which service allows you to run containers serverlessly without managing EC2 instances?", options: ["Amazon EC2", "AWS Fargate", "Amazon Lightsail", "AWS Outposts"], answer: 1 },
    { id: 54, domain: "TECHNOLOGY", text: "Which service converts text into natural-sounding human speech?", options: ["Amazon Polly", "Amazon Lex", "Amazon Transcribe", "Amazon Translate"], answer: 0 },
    { id: 55, domain: "TECHNOLOGY", text: "Which tool allows you to visualize and manage your AWS costs over time?", options: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "Amazon CloudWatch"], answer: 0 },
    { id: 56, domain: "TECHNOLOGY", text: "Which service is used for relational databases like MySQL and SQL Server?", options: ["Amazon DynamoDB", "Amazon RDS", "Amazon Redshift", "Amazon ElastiCache"], answer: 1 },
    { id: 57, domain: "TECHNOLOGY", text: "Which option provides a dedicated physical connection between your data center and AWS?", options: ["AWS VPN", "AWS Direct Connect", "Amazon VPC Peering", "AWS Transit Gateway"], answer: 1 },

    // DOMAIN 4: BILLING, PRICING, AND SUPPORT
    { id: 58, domain: "BILLING AND SUPPORT", text: "Which pricing model has no long-term commitment and is paid by the hour or second?", options: ["Reserved Instances", "On-Demand Instances", "Spot Instances", "Savings Plans"], answer: 1 },
    { id: 59, domain: "BILLING AND SUPPORT", text: "Which support plan includes 24/7 access to support engineers via phone and chat?", options: ["Basic", "Developer", "Business", "Enterprise"], answer: 2 },
    { id: 60, domain: "BILLING AND SUPPORT", text: "Where can you find and buy third-party software that runs on AWS?", options: ["AWS Marketplace", "AWS Artifact", "AWS Organizations", "AWS AppSync"], answer: 0 },
    { id: 61, domain: "BILLING AND SUPPORT", text: "Which service allows you to set custom alerts when your costs exceed a threshold?", options: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Trusted Advisor"], answer: 1 },
    { id: 62, domain: "BILLING AND SUPPORT", text: "What is the main role of a Technical Account Manager (TAM)?", options: ["To write code for customers", "To provide technical guidance for Enterprise support customers", "To manage billing across multiple accounts", "To sell AWS software licenses"], answer: 1 },
    { id: 63, domain: "BILLING AND SUPPORT", text: "Which pricing model offers the highest discount for workloads that can be interrupted?", options: ["On-Demand", "Reserved Instances", "Spot Instances", "Dedicated Hosts"], answer: 2 },
    { id: 64, domain: "BILLING AND SUPPORT", text: "What is a key benefit of Consolidated Billing in AWS Organizations?", options: ["It increases the total cost of accounts", "It allows for volume discounts across all accounts", "It replaces the need for IAM", "It restricts account spending automatically"], answer: 1 },
    { id: 65, domain: "BILLING AND SUPPORT", text: "Which tool provides recommendations across cost, performance, and security categories?", options: ["Amazon CloudWatch", "AWS Trusted Advisor", "AWS Config", "AWS Systems Manager"], answer: 1 }
];

let currentIdx = 0;
let userAnswers = Array(65).fill(null);
let flagged = Array(65).fill(false);
let timeLeft = 5400;

const timerEl = document.getElementById('timer');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const qMap = document.getElementById('question-map');
const progressText = document.getElementById('progress-text');

function init() {
    renderMap();
    renderQuestion();
    startTimer();
}

function renderMap() {
    qMap.innerHTML = '';
    questions.forEach((q, i) => {
        const div = document.createElement('div');
        div.className = `map-item ${userAnswers[i] !== null ? 'answered' : ''} ${flagged[i] ? 'flagged' : ''} ${currentIdx === i ? 'active' : ''}`;
        div.textContent = i + 1;
        div.onclick = () => { currentIdx = i; renderQuestion(); renderMap(); };
        qMap.appendChild(div);
    });
}

function renderQuestion() {
    const q = questions[currentIdx];
    document.getElementById('question-number').textContent = `Question ${q.id} of 65`;
    document.getElementById('domain-label').textContent = q.domain;
    questionTextEl.textContent = q.text;
    progressText.textContent = `${userAnswers.filter(a => a !== null).length}/65`;

    optionsContainer.innerHTML = '';
    q.options.forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = `option-item ${userAnswers[currentIdx] === i ? 'selected' : ''}`;
        div.innerHTML = `<span style="margin-right:15px; font-weight:bold">${String.fromCharCode(65+i)}.</span> ${opt}`;
        div.onclick = () => { userAnswers[currentIdx] = i; renderQuestion(); renderMap(); };
        optionsContainer.appendChild(div);
    });

    document.getElementById('prev-btn').disabled = currentIdx === 0;
    document.getElementById('next-btn').textContent = currentIdx === 64 ? 'Review & Submit' : 'Next';
}

function startTimer() {
    const interval = setInterval(() => {
        timeLeft--;
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        timerEl.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        if (timeLeft <= 0) { clearInterval(interval); submitExam(); }
    }, 1000);
}

document.getElementById('next-btn').onclick = () => {
    if (currentIdx < 64) { currentIdx++; renderQuestion(); renderMap(); }
    else { document.getElementById('submit-exam-btn').click(); }
};

document.getElementById('prev-btn').onclick = () => {
    if (currentIdx > 0) { currentIdx--; renderQuestion(); renderMap(); }
};

document.getElementById('flag-btn').onclick = () => {
    flagged[currentIdx] = !flagged[currentIdx];
    renderMap();
};

document.getElementById('submit-exam-btn').onclick = () => {
    const unanswered = userAnswers.filter(a => a === null).length;
    let msg = "Are you sure you want to submit your assessment?";
    if (unanswered > 0) msg = `You have ${unanswered} unanswered questions. Submit anyway?`;
    if(confirm(msg)) submitExam();
};

function submitExam() {
    document.getElementById('results-screen').classList.remove('hidden');
    let correct = 0;
    userAnswers.forEach((ans, i) => { if(ans === questions[i].answer) correct++; });
    const percent = Math.round((correct / 65) * 100);
    document.getElementById('final-score-percent').textContent = percent + "%";
    document.getElementById('pass-fail-msg').textContent = percent >= 70 ? "Result: PASS" : "Result: FAIL (Passing: 70%)";
}

init();
