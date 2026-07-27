## About
Prakarsh Srivastava is a Backend & Data Engineer based in Debrecen, Hungary. He builds backend systems, APIs, and data-driven products where correctness, state, and deployment details matter — from server-enforced game state to Redis-cached telemetry pipelines to distributed job queues. He is a final-year-turned-graduate Computer Science student who enjoys replacing gut-feel with evidence: a well-tuned SQL query, a load-tested API, a cache that actually cuts latency. He is currently deep-diving into REST API design — idempotency and versioning strategies — as of July 2026.

## Contact
Email: prakarshsrivastava2004@gmail.com
Phone: +36 70 678 8671
Portfolio: portfolio-rzpb.vercel.app
LinkedIn: linkedin.com/in/prakarsh-srivastava-2352412a7
GitHub: github.com/PrakarshSrivastav
LeetCode: leetcode.com/u/prakarshsrivastav

## Target Roles
Prakarsh is looking for backend and data engineering roles, including: Junior/Backend Software Engineer (Java, Spring Boot), Backend Software Engineer (FastAPI/Python), Data Engineer, and roles focused on APIs, state management, and data systems. His core stack is Java, FastAPI, and PostgreSQL. He is currently open to full-time opportunities, particularly in Hungary and Europe, and is starting a Master's in Vienna in September 2026.

## Experience — Aid Global Foundation (Backend Developer, Feb 2026 – Present)
Remote, NGO. Refactored a TypeScript/Node.js backend supporting 10,000+ monthly active users, decoupling monolithic logic into modular services to improve maintainability and independent deployability. Engineered Supabase integrations for media storage and campaign publishing using parallelized execution, cutting upload processing latency by 35%. Built a fault-tolerant image processing pipeline handling 500+ monthly uploads, reducing storage footprint by 30% through automated compression while preserving full-fidelity content. Enforced schema validation and data contracts across backend services, eliminating a recurring class of data inconsistency bugs and reducing related production incidents.

## Experience — Hungarian Startup University Program (Software Developer Intern, Mar 2025 – Sep 2025)
University of Debrecen, Debrecen, Hungary. Built a real-time chat backend using JWT/OAuth2 and WebSockets, load-tested to 50 concurrent users with stateless session handling designed for horizontal scalability. Introduced Redis caching for session management and frequent queries, reducing database query latency by 40% and cutting round-trip time to sub-50ms under sustained concurrent traffic. Containerized the chat service with Docker across two environment-based profiles (local, staging), cutting deployment setup time by 30%. Worked within an Agile/Scrum environment (sprint planning, code reviews, iterative delivery). Received the HSUP Scholarship for innovation, leadership, and entrepreneurial excellence as Team Lead.

## Experience — Research Assistant, Object Detection (Apr 2025 – Jun 2025)
University of Debrecen, Faculty of Informatics. Created and validated a dataset of 5,000+ annotated satellite and microscopy images to support training of YOLO-based object detection models. Integrated curated datasets into automated detection pipelines for machine learning experiments.

## Featured Project — Distributed Job Queue Engine
Jan 2026 – Mar 2026. Java, Spring Boot, Redis, PostgreSQL. Architected a distributed job engine with priority queuing and exactly-once execution across 3 worker nodes using PostgreSQL advisory locks. Engineered fault-tolerant lifecycle management with exponential backoff retry, dead-letter queue, and full audit logging, reducing failed-job recovery time by 40%. Optimized throughput with Redis caching for queue metrics and WebSocket push for live status updates, cutting UI update latency to under 100ms. Containerized with Docker Compose and automated via GitHub Actions CI/CD.

## Featured Project — High-Performance RAG API
Jul 2025 – Sep 2025. FastAPI, FAISS, Go. Built a concurrent FastAPI backend with FAISS vector indexing, achieving under 200ms semantic search latency across 700+ documents with async request handling. Developed a concurrent file-based storage engine in Go with per-collection mutex locking and atomic writes, sustaining zero data races under concurrent access in load testing.

## Featured Project — Cardle
Daily blackjack guessing game with authenticated, server-enforced state. Production JWT auth, server-enforced daily game state, zero client-trust design. Stack: FastAPI, PostgreSQL, JWT, React, TypeScript. Live and on GitHub.

## Featured Project — AsteroidWatch
NEO (near-Earth object) monitoring dashboard with cached NASA telemetry and collision-risk scoring. Custom physics-based risk engine with Torino scale approximation, Redis-cached telemetry pulled from the NASA NeoWs API. Stack: FastAPI, Redis, Python, risk modeling. Live and on GitHub.

## Featured Project — Chatly
Real-time chat app with persistent WebSocket connections and Redis-backed activity state. Real-time bidirectional messaging over WebSockets with Redis-backed state. Stack: Spring Boot, WebSockets, DragonflyDB, Redis, Docker. On GitHub.

## Featured Project — VedAI
RAG (retrieval-augmented generation) chatbot for Bhagavad Gita teachings with persistent chat context. Built a FAISS-based semantic search pipeline over a scripture corpus, with persistent user session memory and personalized recommendations, optimized for lightweight and scalable inference. Stack: Python, FastAPI, RAG, FAISS, NLP. On GitHub.

## Other Projects
Expense-o-meter: Java/Spring Boot/PostgreSQL personal finance tracker with budgets, recurring expenses, JWT/OAuth-based authentication and RBAC, JPA/Hibernate aggregation, and automated weekly email summaries. Improved user financial tracking efficiency by 35%.
Premier League Player Stats App: Spring Boot/Thymeleaf FPL (Fantasy Premier League) stats analysis tool. Scraped FPL stats with BeautifulSoup (price, points, form) and stored in PostgreSQL; achieved 50% faster squad analysis through dynamic filtering and pagination.
Resume Screening Application: Python/Flask/NLP tool for resume categorization and job-matching.
AutoInsight: React + D3.js analytics dashboard for automotive KPIs, with configurable outlier detection (rolling z-score and IQR methods) and batch pipelines for faster exploratory data analysis.

## Open Source Contributions
JReleaser (Java, Maven): Fixed a JDK download timeout bug affecting CI builds, updating dependencies and propagating readTimeout configuration.
OWASP VulnerableApp (Java, Spring Boot): Fixed a clickjacking vulnerability and contributed Docker-based testing automation, cutting local dev setup time by 20%.

## Editorial & Community Work
Flying High Magazine (2020–2021), Indian Language School — Developer & Editorial Team Member. Part of the 5-member core student development team that created the first-ever digital edition of the school magazine during the COVID-19 pandemic, contributing to over 20,000 lines of code and 400+ hours of work, spanning both coding and proofreading.
Aid Global Foundation (2025) — Backend Developer, Admin Dashboard. Contributed to the Aid Global Foundation website, focusing on backend development for the admin dashboard to help manage and streamline organizational operations, as an open-source contribution to an NGO platform.

## Education
Master of Science in Computer Science, Specialization: Software Architecture & Systems Design — University of Vienna, Austria. September 2026 – August 2028 (upcoming).
Bachelor of Science in Computer Science — University of Debrecen, Hungary. September 2022 – January 2026 (graduated). GPA 4.5/5.0, Top 10% of cohort. Relevant coursework: Data Structures and Algorithms, Database Systems, Machine Learning, Artificial Intelligence, Probability and Statistics, Data Mining, Software Engineering, Linear Algebra.

## Certifications
Accenture – Data Analytics and Visualization (Sep 2024)
Citi – ICG Technology Software Development (Oct 2024)
NVIDIA – Fundamentals of Accelerated Data Science (Nov 2024)
NVIDIA – Fundamentals of Deep Learning (Dec 2024)
Microsoft – Security, Compliance, and Identity Fundamentals (Jan 2025)
Certiport – IT Specialist: Python

## Technical Skills
Core Languages: Java (17/21), Python, TypeScript, JavaScript, SQL
Backend Frameworks: Spring Boot, Spring Security, FastAPI, Node.js, Hibernate/JPA, REST APIs, WebSockets, Microservices
Databases & Data: PostgreSQL, MySQL, Oracle, Redis, FAISS, Firebase
Data Engineering: Azure Data Factory, Azure Data Lake, Databricks, ETL/ELT pipelines, data cleaning, data transformation, data modeling, Pandas, NumPy, PySpark
DevOps & Tooling: Git, Docker, Kubernetes, Maven, Postman, pgAdmin, Jira, Vercel, Railway, AWS, GitHub Actions (CI/CD), Azure DevOps, JUnit, Mockito, Linux

## Leadership & Soft Skills
Captain, University Football Team — led and motivated a diverse team in university tournaments, promoting teamwork, discipline, and strategic execution under pressure.
Founding President, Student Clubs Council, University of Debrecen — established and led the university's first student clubs organization, fostering collaboration, event management, and student engagement across faculties.
Team Lead, Hungarian Startup University Program (HSUP) — directed a multidisciplinary team designing and documenting a real-time chat application; received the HSUP Scholarship for innovation, leadership, and entrepreneurial excellence.
Generally described as a proactive, adaptable, and empathetic team player with strong problem-solving, project management, and conflict-resolution skills.

## Languages Spoken
English (Fluent), Hindi (Native), French (Intermediate/Conversational), Hungarian (Conversational/Beginner), German (Beginner/Learning).