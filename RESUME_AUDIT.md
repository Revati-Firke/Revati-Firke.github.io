# Resume Audit — Revati Pandharinath Firke

**Date:** 2026-08-08  
**Sources audited:** `java_resume.html`, `golang_resume.html`, `resume.html` (+ supporting `.md` drafts)  
**Constraint:** No invented experience, metrics, or technologies.

---

## 1. Current Resume Weaknesses

### Positioning
- **Java resume** leads the summary with Android, so recruiters may classify the candidate as mobile-first instead of Java backend.
- **Golang resume** title is only “Software Engineer | Backend Engineer” — Golang is not visible in the header.
- **Golang resume** features Personal Finance Tracker (Spring Boot) as the primary Key Project, undercutting Golang ownership evidence.
- **General resume** places Technical Skills after Experience/Projects — weak for 10-second scan and ATS keyword density near the top.
- Android work dominates the first experience bullet across all three versions.

### Content quality
- General resume has a grammar issue: “working on digital-signage clients…” (incomplete sentence / inconsistent tense).
- Experience years inconsistent: **1.8+** (Java/General) vs **1.7+** (Golang).
- Overlap between experience bullets and independently owned modules causes repetition.
- Soft skills / community award occupy disproportionate visual weight relative to backend signal.
- General resume forces a page break before Achievements (awkward 2nd page for little content).

### Evidence gaps vs skill lists
- Skills sections claim technologies that never appear in experience or project bullets (see Section 6).

---

## 2. ATS Issues

| Issue | Detail |
|-------|--------|
| Keyword order | Primary stack not consistently first in title/summary/skills |
| Section order | General resume: Experience → Projects → Skills (skills should be earlier) |
| Keyword walls | Java/Golang HTML skills list many adjacent tech names without supporting bullets |
| Risky claims | Kubernetes, Kafka, RabbitMQ, gRPC, OAuth2, TLS/SSL appear as skills without project proof |
| Missing common backend terms | SDLC, backend development, API integration, unit/integration testing, production support, performance optimization, version control, root cause analysis — present weakly or not at all |
| Hidden ATS blocks | Markdown drafts contain “ATS KEYWORDS” dumps; HTML versions do not (good), but skill inflation remains |
| Selectable text | HTML is selectable and single-column — good for ATS |
| Tables/icons/bars | No skill bars/stars — good; unused `.matrix-table` CSS present but unused |

---

## 3. Recruiter Readability Issues (10-Second Test Failures)

| Resume | What a recruiter currently sees first | What they should see |
|--------|----------------------------------------|----------------------|
| Java | Android + multi-language generalist | Java + Spring Boot + Backend + REST + Microservices |
| Golang | Generic backend; featured Spring Boot project | Golang + Microservices + REST + Distributed/edge systems |
| General | Backend OK, but Android-first bullet + skills late | Backend Engineer + Java + Golang + REST + Microservices |

Other scan issues:
- Independently owned Golang modules are strong but sit under a subsection that can be skipped.
- Metrics (500+, 200+, 99%, 60%) are good but buried behind Android framing.
- “Community Director” immediately follows core engineering — fine if short; currently competes for attention.

---

## 4. Missing Keywords (Truthful / Should Add Where Supported)

### Common backend (add naturally)
- Backend Development, API Development / API Integration
- Database Integration, SQL
- CI/CD, Version Control
- Unit Testing, Integration Testing (supported by JUnit/Mockito on Finance Tracker)
- Debugging, Troubleshooting, Production Support
- Performance Optimization (supported by query optimization + caching)
- Agile, Scrum, SDLC (Agile/Scrum already listed; SDLC can be phrased carefully with delivery work)
- Microservices, REST APIs (already present — reinforce in summary)

### Java-target gaps (phrasing, not new tech)
- Java 17 prominence in summary/experience framing (project has it; summary underuses it)
- Spring Boot / Spring Data JPA / Spring Security earlier and denser in experience narrative
- Maven, OpenAPI/Swagger near Java project (already in project; reinforce)

### Golang-target gaps
- Explicit “Go” alias alongside Golang
- Concurrency, Goroutines, Channels, Context in experience/project narrative (skills only today)
- Distributed systems / edge / device-to-cloud in summary and project headers
- Health checks, OpenAPI already in WhatsApp module — keep visible

---

## 5. Overused / Misordered Keywords

- **Android / Android SDK** overused as lead signal on Java and Golang resumes.
- **REST APIs / Microservices** repeated across skills + bullets without role-specific ordering.
- **Debugging / Troubleshooting / Bug Fixing** stacked as soft-core skills with little differentiation.
- **Public Speaking / Leadership / Mentoring** repeated in skills and volunteer section.
- Kafka/RabbitMQ listed as “Message Brokers” while all real messaging evidence is **MQTT** — misleading keyword density.

---

## 6. Unsupported / Risky Technologies (Category B → Treat as Unsupported Unless Proven)

| Technology | Where claimed | Evidence in bullets/projects | Decision |
|------------|---------------|------------------------------|----------|
| Kubernetes | Java & Golang HTML skills | None | **Remove** |
| Kafka | Java & Golang HTML / MD | None (MQTT only) | **Remove** |
| RabbitMQ | Java & Golang HTML / MD | None (MQTT only) | **Remove** |
| gRPC | Java & Golang HTML / MD | None | **Remove** |
| OAuth2 | Skills / MD | JWT yes; OAuth2 not shown | **Remove** |
| TLS/SSL | Skills | Not described | **Remove** |
| Device Certificates | Skills | Not described | **Remove** |
| Cypress | Skills | No project evidence | **Remove** |
| AWS / Cloud platforms | Not in HTML skills | None | **Do not add** |
| FastAPI, Angular, Selenium, GitLab | Interview notes / external | None on resume | **Do not add** |
| Spring MVC / Hibernate as separate claims | MD only | Spring Data JPA / Boot only | **Do not invent**; JPA via Spring Data JPA is OK |
| 40% response-time / 70% deployment improvement | Mentioned in optimization brief | **Not in any resume** | **Do not use** |

### AI Tools (Cursor, GitHub Copilot)
Present only on general `resume.html`. Not relevant for backend ATS matching; **omit** from targeted resumes.

---

## 7. Verified Skills Inventory

### CATEGORY A — Verified / Safe to Use
Supported by experience bullets, owned modules, projects, and/or certifications already on the resumes:

- **Languages:** Java, Java 17, Golang/Go, SQL, Python (cert), JavaScript (React integration context)
- **Java backend:** Spring Boot, Spring Data JPA, Spring Security, REST APIs, Microservices, Maven, JWT, OpenAPI/Swagger, Flyway
- **Golang backend:** REST APIs, Microservices, Goroutines/Channels/Context (claimed with concurrency framing on Golang resume — keep only as Go concurrency skills tied to edge sync/MQTT work already described; do not invent separate gRPC/Kafka work)
- **Data:** PostgreSQL, MySQL, SQLite, database integration, query optimization, caching
- **Messaging / distributed:** MQTT, Edge Computing, Device-to-Cloud, Raspberry Pi, Digital Signage, systemd
- **APIs / integrations:** Meta Cloud API, WhatsApp Business API, React onboarding integration
- **DevOps:** Docker, Jenkins, CI/CD, Git, GitHub, Nexus, Grafana, health checks
- **Testing / QA tools:** JUnit, Mockito, Postman, Go unit testing (package-level; keep modest)
- **Process:** Jira, Agile/Scrum
- **Mobile (supporting, not primary):** Android SDK (Java) — production maintenance on 500+ devices
- **Soft / awards:** Communication, public speaking, leadership, mentoring; State Level Best Community Director
- **Certifications present:** Java, Python, ASP.NET (Java/General), Golang (Golang resume), Cybersecurity Essentials

### CATEGORY B — Only If Clearly Supported (Currently Not Clear Enough)
Kubernetes, Kafka, RabbitMQ, gRPC, OAuth2, TLS/SSL, Device Certificates, Cypress, AWS.

### CATEGORY C — Unsupported (Do Not Add)
FastAPI, Angular, Selenium, GitLab, AWS, invented cloud/K8s/testing frameworks, fabricated metrics (40%, 70%).

---

## 8. Measurable Achievements (Existing Only)

| Metric | Context |
|--------|---------|
| 1.8 years (approx.) / resumes also say 1.7+–1.8+ | Tenure framing |
| 500+ devices | Android production fleet |
| 200+ displays | Digital signage / Raspberry Pi deployment scale |
| 99% uptime | Production REST APIs / services |
| 60% production bug reduction | Crash analytics + debugging on Android apps |

**Not found in resumes (do not invent):** 40% response-time improvement, 70% deployment improvement.

---

## 9. Technologies Across Resumes

### Appear in multiple resumes
Java, Golang, SQL, Python, JavaScript, Spring Boot, Spring Data JPA, Spring Security, REST APIs, Microservices, Maven, JWT, OpenAPI/Swagger, PostgreSQL, MySQL, SQLite, Docker, Jenkins, Git, GitHub, Grafana, Nexus, MQTT, Raspberry Pi, Android SDK, JUnit, Mockito, Postman, Jira, Agile/Scrum, Flyway, Meta Cloud API, WhatsApp Business API, systemd, React (integration)

### Appear in only one (or unevenly)
| Item | Where |
|------|--------|
| Collections / Streams / Lambda / Multithreading | Java HTML mainly |
| gRPC, Kubernetes, Kafka, RabbitMQ, OAuth2, TLS/SSL | Java & Golang HTML (not General) |
| Cypress | Java & Golang HTML |
| AI Tools | General only |
| ASP.NET cert | Java & General |
| Golang cert | Golang only |
| Skills section placement | Late on General only |

---

## 10. Inconsistencies Between the Three Resumes

1. Experience length: 1.8+ vs 1.7+
2. Header titles differ and Golang branding is weak
3. Skill risk-set differs (General is more conservative — good)
4. Certification lists differ (ASP.NET vs Golang)
5. General summary underplays Spring Boot depth; Java summary underplays backend-first story
6. Featured project wrong for Golang targeting
7. Grammar / tense inconsistency in General experience
8. Section order inconsistency (Skills position)

---

## 11. Java Resume Changes (Planned → Implemented)

- Title: **Java Developer | Java Backend Engineer**
- Summary: lead with Java, Spring Boot, REST APIs, Microservices, ~1.8 years, production metrics
- Skills: Java first; remove Category B risks; Android as supporting only
- Experience: Spring Boot/Java backend bullets first; Android last and shorter
- Key Projects: Personal Finance Tracker featured (Java 17 + Spring stack)
- Golang modules: retained as supporting distributed/backend advantage, not the lead
- Weave: CI/CD, unit testing, database integration, production support, performance optimization

---

## 12. Golang Resume Changes (Planned → Implemented)

- Title: **Golang Developer | Golang Backend Engineer**
- Summary: lead with Golang/Go, REST APIs, Microservices, distributed/edge systems
- Skills: Golang first; concurrency keywords; remove Category B risks
- Experience: Golang microservices / MQTT / edge first; Java as supporting backend
- Key Projects: Raspberry Pi Digital Signage Player + WhatsApp Business Messaging Gateway featured; Finance Tracker secondary/supporting
- De-emphasize Android

---

## 13. General Backend Resume Changes (Planned → Implemented)

- Title: **Backend Software Engineer | Backend Developer**
- Summary: Backend Engineering + Java + Golang + REST + Microservices
- Skills moved above Experience
- Balanced bullets and project mix (Finance Tracker + one Golang production module)
- Remove AI Tools; keep conservative verified skills only
- Fix grammar; unify experience to 1.8 years

---

## 14. JD Matching Strategy

See `JD_MATCHING_GUIDE.md`.

Rules:
1. Map JD → one target resume (Java / Golang / General).
2. Reorder existing evidence; do not invent tech.
3. Mirror JD terminology only where truthful (e.g., “REST APIs” ↔ “RESTful web services”).
4. Top 10–15 JD keywords: verify MATCH / PARTIAL / NO MATCH before any edit.
5. Keep 1–2 pages.

---

## 15. Technologies Intentionally NOT Added (and Why)

| Tech | Why excluded |
|------|----------------|
| Kubernetes | Listed historically with zero implementation evidence |
| Kafka / RabbitMQ | No usage described; MQTT is the real broker |
| gRPC | Skills-only claim |
| OAuth2 / TLS/SSL / Device Certificates | No concrete implementation narrative |
| Cypress | No automation project/evidence |
| AWS / GCP / Azure | No cloud project evidence |
| FastAPI / Angular / Selenium / GitLab | Not on existing resumes |
| 40% / 70% metrics | Not present in source resumes |

---

## 16. Recommended Future Improvements (Honest Upskilling — Not Resume Fiction)

1. Add a small production-like note only after real work: e.g., actual Kafka consumer, gRPC service, or K8s deploy.
2. Expand Personal Finance Tracker bullets with real test counts / endpoints only if measurable.
3. If Spring Security is JWT-only, keep JWT; add OAuth2 only after implementing it.
4. Capture deployment metrics (build time, release frequency) if measured at Lemma.
5. Align LinkedIn headline with the resume variant used per application.
6. Keep a private evidence log (PR links, module ownership) for interview defense of every skill line.

---

## 17. Deliverables After This Audit

| File | Purpose |
|------|---------|
| `resume-java.html` | Java / Java Backend targeting |
| `resume-golang.html` | Golang / Golang Backend targeting |
| `resume-backend.html` | Generic Backend Software Engineer targeting |
| `JD_MATCHING_GUIDE.md` | Per-JD customization without full rewrites |
