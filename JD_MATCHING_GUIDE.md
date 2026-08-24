# JD Matching Guide — Customize Without Full Rewrites

Use this guide when a new job description (JD) arrives. **Do not rebuild all three resumes.** Pick one target file, reorder/rephrase existing truthful content, and stop.

---

## 1. Pick the Target Resume

| JD signal | Use this file |
|-----------|----------------|
| Java, Spring Boot, Spring, J2EE, Hibernate/JPA emphasis | `resume-java.html` |
| Golang, Go, concurrency, microservices-in-Go, MQTT/edge | `resume-golang.html` |
| Backend / Software Engineer / API engineer with no strong language preference | `resume-backend.html` |
| Both Java and Go required equally | `resume-backend.html` (or Java if Spring is mandatory) |

If the JD lists Java as must-have and Go as nice-to-have → **Java resume**.  
If Go is must-have → **Golang resume**.

---

## 2. Extract Keywords From the JD (Checklist)

For every JD, list:

1. Must-have technical skills  
2. Preferred technical skills  
3. Backend keywords  
4. Programming languages  
5. Frameworks  
6. Database keywords  
7. DevOps keywords  
8. Testing keywords  
9. Cloud keywords  
10. Architecture keywords  
11. Soft skills  
12. Domain keywords  

Then classify each keyword:

| Label | Meaning | Resume action |
|-------|---------|----------------|
| **MATCH** | Credible evidence exists | Ensure it appears in summary, skills, or a bullet (already or by light rephrase) |
| **PARTIAL MATCH** | Related experience only | Use honest adjacent wording (e.g., MQTT for messaging; Docker for containers). **Do not claim the exact missing tool** |
| **NO MATCH** | No evidence | Leave out. Do not invent |

---

## 3. Verified Keyword Bank (Safe Vocabulary)

Only draw from this bank (and synonyms that do not invent tools).

### Languages
Java, Java 17, Golang, Go, SQL, Python, JavaScript

### Backend & APIs
Spring Boot, Spring Data JPA, Spring Security, REST APIs, RESTful services, Microservices, Maven, JWT, OpenAPI, Swagger, Backend Development, API Development, API Integration

### Golang / distributed
Goroutines, Channels, Context, Concurrency, Error Handling, Edge Computing, Device-to-Cloud, MQTT, Raspberry Pi, Distributed Systems (as framing for multi-device / multi-service production work already described)

### Data
PostgreSQL, MySQL, SQLite, SQL, Database Integration, Query Optimization, Caching

### DevOps & tooling
Docker, Jenkins, CI/CD, Git, GitHub, Version Control, Nexus, Grafana, systemd, Health Checks

### Testing & quality
JUnit, Mockito, Unit Testing, Integration Testing, Postman, Debugging, Troubleshooting, Root Cause Analysis (via crash analytics / production debugging), Code Quality, Production Support, Performance Optimization

### Process
Agile, Scrum, Jira, SDLC (as participation in delivery lifecycle — not as formal process ownership claim)

### Integrations
Meta Cloud API, WhatsApp Business API, React (API integration / onboarding)

### Soft / awards (use sparingly)
Communication, Stakeholder Communication, Leadership, Mentoring, Public Speaking, Cybersecurity Awareness

### AI-assisted development (verified for candidate)
Claude, Cursor, GitHub Copilot

**Do not present as frontend/UI skills:** React.js, Next.js, Angular, TypeScript, HTML5, CSS3, “Full Stack Developer” as primary title.

---

## Example JD triage (Java applications)

Use `resume-java.html` for Java Developer / Java Backend roles. These sample JDs show how to classify — **do not rewrite the resume into Full Stack or Node.js.**

### Sample A — Node.js / GraphQL / WebSockets heavy
| Keyword | Class | Action |
|---------|-------|--------|
| RESTful API design | MATCH | Already emphasized |
| Microservices, REST inter-service | MATCH / PARTIAL | REST + MQTT only — never claim gRPC/Kafka |
| Node.js, Express, Fastify, NestJS | NO MATCH | Skip role or apply only if Java is also accepted |
| GraphQL, WebSockets, Socket.io | NO MATCH | Do not add |
| gRPC, message brokers (Kafka-style) | NO MATCH / PARTIAL | MQTT ≠ Kafka; do not claim |

### Sample B — Full Stack (HeapTrace-style) with Java as one backend option
| Keyword | Class | Action |
|---------|-------|--------|
| Java backend, RESTful APIs, SQL, MySQL/PostgreSQL | MATCH | Lead with these |
| Git, CI/CD, Docker, Agile/Scrum, debugging, performance optimization | MATCH | Already present |
| Unit/integration tests, production troubleshooting, communication | MATCH | Already present |
| AI tools (Copilot, Cursor, Claude) | MATCH | Listed under AI-Assisted Development |
| React/Next/Angular, HTML5, CSS3, TypeScript as frontend expertise | NO MATCH | Do not claim UI development |
| AWS/Azure/GCP | NO MATCH | Meta Cloud API ≠ cloud platform experience |
| Kubernetes, MongoDB, Node.js, Django | NO MATCH | Do not add |
| “Full Stack” title | NO MATCH for positioning | Keep **Java Developer / Java Backend Engineer**; apply only if backend Java path is acceptable |

---

## 4. Forbidden Claims (Unless New Evidence Is Added Later)

Do **not** add or imply hands-on production use of:

- Kubernetes, Kafka, RabbitMQ, gRPC  
- OAuth2, TLS/SSL, Device Certificates (unless you implement and document them)  
- AWS / GCP / Azure  
- FastAPI, Angular, Selenium, GitLab CI (unless true)  
- Cypress  
- Fake metrics (including any % not already on the resume)

---

## 5. Per-Resume Tuning Moves (5–15 Minutes)

### A. Java JD → `resume-java.html`

1. Confirm header still reads Java Developer / Java Backend Engineer.  
2. Ensure summary starts with **Java + Spring Boot**.  
3. Move any JD-matching Spring/SQL/testing phrases into the **first two** experience bullets.  
4. Keep Personal Finance Tracker as featured project; mirror JD terms like “REST API,” “JPA,” “security,” “Docker.”  
5. Keep Golang modules short — proof of backend breadth, not the lead.  
6. Android stays last / one line max.

### B. Golang JD → `resume-golang.html`

1. Confirm header includes Golang / Go.  
2. Summary must lead with **Golang + microservices + REST**.  
3. Promote Raspberry Pi + WhatsApp modules (already in Key Projects).  
4. Emphasize concurrency, MQTT, Docker, CI/CD, MySQL, JWT, health checks if JD asks.  
5. Java/Spring remains supporting.  
6. Android stays minimal.

### C. Generic Backend JD → `resume-backend.html`

1. Keep balanced Java + Golang in title/summary.  
2. Prefer bullets that say “production REST APIs,” “microservices,” “CI/CD,” “SQL,” “monitoring.”  
3. Include one Java project + one Golang production module.  
4. Mirror JD language for “backend services,” “API integration,” “production support.”

---

## 6. Rephrase Patterns (Truth-Preserving)

| JD says | You may write (if true) | Do not write |
|---------|-------------------------|--------------|
| RESTful web services | production REST APIs | GraphQL APIs |
| Message queues | MQTT-based messaging / sync | Kafka / RabbitMQ |
| Containerization | Dockerized services | Kubernetes orchestration |
| Auth / security | JWT authentication, Spring Security | OAuth2 / SSO (unless built) |
| Observability | Grafana monitoring | Prometheus/ELK (unless used) |
| Cloud APIs | Meta Cloud API integration | AWS cloud engineer |
| Testing | JUnit, Mockito, unit testing | Selenium / Cypress |
| Agile environment | Agile/Scrum with Jira | SAFe / PI Planning owner |

---

## 7. Ordering Rules (Recruiter 10-Second Test)

Within 10 seconds, the chosen resume must show:

1. Name + target role title  
2. Primary language/stack  
3. ~1.8 years experience  
4. Backend focus  
5. Production systems + scale metrics already earned  
6. Core tools (DB, Docker/Jenkins, Git)

**Do not** bury the primary stack below Android or volunteer work.

---

## 8. Length & Formatting Guardrails

- Keep **1 page preferred**, 2 pages max.  
- Single column; standard headings: SUMMARY, TECHNICAL SKILLS, PROFESSIONAL EXPERIENCE, KEY PROJECTS, EDUCATION, CERTIFICATIONS / ACHIEVEMENTS.  
- No skill bars, icons-as-text, or keyword dump footers.  
- Export via browser Print → Save as PDF; verify selectable text.

---

## 9. Workflow Template (Copy Per JD)

```text
JD title / company:
Target resume: [java | golang | backend]

Top 10–15 keywords:
1.
2.
...

Classification:
MATCH: ...
PARTIAL: ...
NO MATCH: ...

Edits made:
- [ ] Summary tweak
- [ ] Bullet reorder / rephrase
- [ ] Skills order tweak
- [ ] Project emphasis
- [ ] No new unsupported tech added

Interview defense notes:
- Ready to explain every MATCH keyword with a module/project story
```

---

## 10. When to Create a Fourth Variant

Only if you repeatedly see a niche JD family (e.g., “Android + Java backend”) that fights the three positionings. Otherwise, stick to the three files and light customization.
