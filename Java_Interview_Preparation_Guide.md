# Java Developer Interview Preparation Guide

**For: Java Developer Position - Pune (2-4 Years Experience)**

## 📋 Job Requirements Analysis

### ✅ Your Strengths (Already Have)

- ✅ Java Development (1.7 years production experience)
- ✅ Spring Boot & Spring frameworks
- ✅ RESTful APIs development
- ✅ PostgreSQL/MySQL (SQL databases)
- ✅ Git version control
- ✅ Maven build tool
- ✅ Docker containerization
- ✅ CI/CD with Jenkins
- ✅ OOP principles
- ✅ Problem-solving & debugging

### ⚠️ Areas to Focus On

- 🔸 **Angular/React JS** (Job requires frontend skills - you have limited exposure)
- 🔸 **DevOps** (expand beyond Docker & Jenkins)
- 🔸 **OpenShift** (containerization orchestration)
- 🔸 **Gradle** (alternative to Maven)

---

## 🎯 30-Day Preparation Plan

### Week 1: Core Java & Spring Boot Fundamentals

#### Day 1-2: Core Java Deep Dive

**Topics:**

- Collections Framework (HashMap, ArrayList, HashSet, ConcurrentHashMap)
- Java 8+ Features (Streams, Lambda, Optional, Method References)
- Exception Handling (Checked vs Unchecked)
- Multithreading basics (Thread, Runnable, ExecutorService)

**Practice Questions:**

1. Explain HashMap internal working and collision handling
2. Difference between `==` and `.equals()`, `hashCode()` contract
3. Stream API: filter, map, reduce, collect operations
4. Why is String immutable in Java?
5. volatile keyword and synchronization

#### Day 3-4: OOP & Design Principles

**Topics:**

- OOP: Encapsulation, Inheritance, Polymorphism, Abstraction
- SOLID principles
- Design patterns: Singleton, Factory, Builder, Strategy

**Practice Questions:**

1. Difference between abstract class and interface
2. Method overloading vs overriding
3. Explain Dependency Injection
4. Real-world examples of design patterns

#### Day 5-7: Spring Boot Core

**Topics:**

- IoC Container & Dependency Injection
- Annotations: @Component, @Service, @Repository, @Controller, @RestController
- Bean lifecycle and scopes (Singleton, Prototype, Request, Session)
- Auto-configuration and Spring Boot starters
- application.properties vs application.yml

**Practice Questions:**

1. How does Spring Boot auto-configuration work?
2. Difference between @Component and @Bean
3. What is @SpringBootApplication doing behind the scenes?
4. Bean scopes and their use cases
5. How to create custom auto-configuration?

---

### Week 2: REST APIs, Spring Data JPA & Databases

#### Day 8-10: REST API Development

**Topics:**

- REST principles (GET, POST, PUT, DELETE, PATCH)
- @RequestMapping, @GetMapping, @PostMapping, @PutMapping, @DeleteMapping
- @RequestBody, @PathVariable, @RequestParam, @RequestHeader
- ResponseEntity and HTTP status codes (200, 201, 400, 404, 500)
- Exception handling with @ControllerAdvice and @ExceptionHandler
- API versioning strategies
- HATEOAS concepts

**Practice Questions:**

1. What is RESTful API? What are its constraints?
2. Difference between PUT and PATCH
3. How to handle exceptions globally in Spring Boot?
4. What HTTP status codes to use for different scenarios?
5. How to validate request body with @Valid and @Validated?

**Hands-on:**
Create a simple CRUD REST API for a "Book Management System"

#### Day 11-12: Spring Data JPA

**Topics:**

- JPA annotations: @Entity, @Table, @Id, @GeneratedValue, @Column
- Relationships: @OneToOne, @OneToMany, @ManyToOne, @ManyToMany
- Cascade types and Fetch types (LAZY vs EAGER)
- JpaRepository, CrudRepository, PagingAndSortingRepository
- Custom queries with @Query (JPQL and native SQL)
- Pagination and Sorting

**Practice Questions:**

1. Difference between JPA and Hibernate
2. N+1 query problem and how to solve it
3. @Transactional annotation and propagation levels
4. Difference between LAZY and EAGER loading
5. How to write custom queries in Spring Data JPA?

#### Day 13-14: SQL & Database Concepts

**Topics:**

- CRUD operations (INSERT, SELECT, UPDATE, DELETE)
- JOINs: INNER, LEFT, RIGHT, FULL OUTER
- GROUP BY, HAVING, ORDER BY
- Indexes and query optimization
- ACID properties
- Normalization (1NF, 2NF, 3NF)
- Transactions and isolation levels

**Practice Questions:**

1. Write a query to find second highest salary
2. Difference between WHERE and HAVING
3. What are indexes and when to use them?
4. Explain ACID properties with examples
5. Difference between DELETE, TRUNCATE, and DROP

**SQL Practice:**

```sql
-- Practice these on PostgreSQL/MySQL
-- 1. Find employees with salary > average salary
-- 2. Find duplicate records
-- 3. Join multiple tables
-- 4. Group and aggregate data
```

---

### Week 3: Spring Security, Testing & Build Tools

#### Day 15-17: Spring Security & JWT

**Topics:**

- Authentication vs Authorization
- Spring Security architecture
- UserDetailsService and PasswordEncoder (BCrypt)
- JWT (JSON Web Token) implementation
- @PreAuthorize, @Secured annotations
- CORS configuration
- OAuth2 basics

**Practice Questions:**

1. How does Spring Security work internally?
2. Explain JWT authentication flow
3. How to secure REST APIs with JWT?
4. Difference between authentication and authorization
5. What is BCrypt and why use it for passwords?

**Hands-on:**
Add JWT authentication to your CRUD API

#### Day 18-19: Testing (JUnit & Mockito)

**Topics:**

- JUnit 5 annotations: @Test, @BeforeEach, @AfterEach, @DisplayName
- Assertions: assertEquals, assertNotNull, assertTrue, assertThrows
- Mockito: @Mock, @InjectMocks, when().thenReturn()
- @SpringBootTest, @WebMvcTest, @DataJpaTest
- MockMvc for testing REST APIs
- Test coverage and best practices

**Practice Questions:**

1. What is unit testing vs integration testing?
2. How to mock dependencies in JUnit?
3. How to test REST APIs with MockMvc?
4. What is test-driven development (TDD)?
5. How to test exception scenarios?

**Code Example:**

```java
@WebMvcTest(BookController.class)
class BookControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private BookService bookService;

    @Test
    void shouldReturnAllBooks() throws Exception {
        // Given
        List<Book> books = Arrays.asList(new Book(1L, "Java"));
        when(bookService.getAllBooks()).thenReturn(books);

        // When & Then
        mockMvc.perform(get("/api/books"))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$[0].title").value("Java"));
    }
}
```

#### Day 20-21: Maven & Gradle

**Topics:**

- Maven: pom.xml structure, dependencies, plugins, lifecycle (clean, compile, test, package)
- Gradle: build.gradle, dependencies, tasks
- Dependency management and version conflicts
- Multi-module projects
- Creating executable JARs

**Practice Questions:**

1. What is Maven and how does it work?
2. Explain Maven build lifecycle phases
3. Difference between Maven and Gradle
4. How to add dependencies in pom.xml?
5. What is Maven repository (local, central, remote)?

---

### Week 4: DevOps, Docker & Interview Prep

#### Day 22-23: Docker & Containerization

**Topics:**

- Docker basics: Images, Containers, Dockerfile
- Common commands: docker build, docker run, docker ps, docker exec
- Docker Compose for multi-container apps
- Dockerfile best practices
- Docker volumes and networking
- OpenShift basics (Kubernetes-based platform)

**Practice Questions:**

1. What is Docker and why use it?
2. Difference between Docker image and container
3. How to create a Dockerfile for Spring Boot app?
4. What is Docker Compose?
5. Difference between Docker and Kubernetes/OpenShift

**Hands-on:**

```dockerfile
# Create Dockerfile for your Spring Boot app
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/myapp.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

#### Day 24-25: CI/CD & Jenkins

**Topics:**

- CI/CD concepts and benefits
- Jenkins pipeline basics
- Jenkinsfile (declarative and scripted)
- Build, test, deploy stages
- Integration with Git, Maven, Docker
- GitHub Actions basics

**Practice Questions:**

1. What is CI/CD and why is it important?
2. Explain Jenkins pipeline stages
3. How to create a Jenkins pipeline for Spring Boot app?
4. Difference between continuous delivery and deployment
5. What is GitOps?

#### Day 26-27: Frontend Basics (Angular/React)

**Since the job requires frontend skills:**

**Angular Basics:**

- Components, Modules, Services
- Data binding, Directives, Pipes
- HTTP Client for API calls
- Routing basics

**React Basics:**

- Components (Functional and Class)
- Props and State
- Hooks (useState, useEffect)
- Axios for API calls
- React Router

**What to Tell Interviewer:**
"While my primary expertise is in backend Java development, I have worked with React (in Raspberry Pi onboarding app) and am currently learning Angular/React for full-stack capabilities. I'm comfortable with REST API integration and can quickly pick up frontend frameworks."

#### Day 28-30: Mock Interviews & Project Review

**Prepare to Explain Your Projects:**

**1. Personal Finance Tracker:**

- Architecture: Layered (Controller → Service → Repository)
- Technologies: Spring Boot, Spring Data JPA, PostgreSQL, Flyway, Docker
- Features: Expense tracking, category summaries, budget alerts, CSV export
- Security: Spring Security with JWT
- Testing: JUnit & Mockito

**Key Questions:**

- How did you design the database schema?
- How did you handle monthly category summaries?
- How did you implement budget alerts?
- What challenges did you face?

**2. WhatsApp Business Messaging Gateway:**

- Independently designed microservice
- Integrated Meta Cloud API
- JWT-secured REST APIs
- MySQL persistence
- Docker containerization

**3. Raspberry Pi Digital Signage Player:**

- Edge module in Golang
- MQTT for real-time sync
- Offline caching
- CI/CD with Jenkins

---

## 🔥 Top 50 Interview Questions

### Java Core (10 Questions)

1. **What is the difference between `==` and `.equals()` in Java?**
   - `==` compares references (memory addresses)
   - `.equals()` compares object content (must be overridden)

2. **Explain HashMap internal working**
   - Uses hash function to compute index
   - Stores key-value pairs in buckets (linked list/tree)
   - Handles collisions with separate chaining
   - Java 8+ uses TreeNode when bucket size > 8

3. **Why is String immutable in Java?**
   - Security (used in network connections, database URLs)
   - Thread safety
   - String pool optimization
   - HashCode caching

4. **What are Java 8 features?**
   - Lambda expressions
   - Stream API
   - Optional class
   - Default methods in interfaces
   - Method references
   - Functional interfaces

5. **Difference between ArrayList and LinkedList**
   - ArrayList: Dynamic array, fast random access O(1), slow insertion/deletion O(n)
   - LinkedList: Doubly linked list, slow access O(n), fast insertion/deletion O(1)

6. **What is multithreading? How to create threads?**
   - Executing multiple threads concurrently
   - Methods: Extend Thread class, Implement Runnable, use ExecutorService

7. **Explain Exception Handling**
   - Checked exceptions: Must be caught (IOException, SQLException)
   - Unchecked exceptions: Runtime exceptions (NullPointerException)
   - try-catch-finally blocks
   - Custom exceptions

8. **What is the difference between final, finally, and finalize?**
   - `final`: Keyword for constants, prevent inheritance/override
   - `finally`: Block that always executes after try-catch
   - `finalize()`: Method called by GC before object destruction (deprecated)

9. **What is garbage collection in Java?**
   - Automatic memory management
   - Removes unused objects from heap
   - Types: Serial, Parallel, CMS, G1GC, ZGC

10. **Difference between interface and abstract class**
    - Interface: 100% abstraction (pre-Java 8), multiple inheritance
    - Abstract class: Partial abstraction, single inheritance, can have state

### Spring Boot (15 Questions)

11. **What is Spring Boot? Why use it?**
    - Framework for building production-ready applications quickly
    - Auto-configuration, embedded servers, starter dependencies
    - Reduces boilerplate code

12. **What is @SpringBootApplication?**
    - Combines @Configuration, @EnableAutoConfiguration, @ComponentScan

13. **Explain Dependency Injection**
    - Design pattern for achieving IoC (Inversion of Control)
    - Spring container manages object creation and dependencies
    - Types: Constructor injection, Setter injection, Field injection

14. **Difference between @Component, @Service, @Repository, @Controller**
    - All are stereotypes for Spring beans
    - @Component: Generic
    - @Service: Business logic layer
    - @Repository: Data access layer (adds exception translation)
    - @Controller: Web layer

15. **What are bean scopes in Spring?**
    - Singleton (default): One instance per container
    - Prototype: New instance every time
    - Request: One per HTTP request (web)
    - Session: One per HTTP session (web)

16. **How does Spring Boot auto-configuration work?**
    - @EnableAutoConfiguration scans classpath
    - Conditionally creates beans based on presence of classes
    - Uses @Conditional annotations

17. **What is @RestController?**
    - Combines @Controller and @ResponseBody
    - Returns JSON/XML instead of views

18. **How to handle exceptions in Spring Boot?**
    - @ControllerAdvice with @ExceptionHandler
    - ResponseStatusException
    - Custom error responses

19. **What is @Transactional?**
    - Manages database transactions
    - Propagation levels: REQUIRED, REQUIRES_NEW, MANDATORY
    - Rollback on runtime exceptions

20. **Difference between @RequestParam and @PathVariable**
    - @RequestParam: Query parameters (?name=value)
    - @PathVariable: URI path variables (/users/{id})

21. **How to configure multiple databases in Spring Boot?**
    - Multiple DataSource beans
    - Separate EntityManagerFactory for each
    - Use @Primary for default

22. **What is actuator in Spring Boot?**
    - Production-ready features for monitoring
    - Endpoints: /health, /metrics, /info

23. **How to create custom starter in Spring Boot?**
    - Create auto-configuration class
    - Add spring.factories in META-INF
    - Package as dependency

24. **What is Spring AOP?**
    - Aspect-Oriented Programming
    - Cross-cutting concerns (logging, security)
    - Advice types: Before, After, Around

25. **Difference between @Bean and @Component**
    - @Component: Class-level, auto-detected by scanning
    - @Bean: Method-level, explicit bean creation

### REST API (8 Questions)

26. **What is REST?**
    - REpresentational State Transfer
    - Architectural style for web services
    - Stateless, client-server, cacheable

27. **REST API best practices**
    - Use proper HTTP methods
    - Meaningful URIs (/users, /users/{id})
    - Proper status codes
    - Versioning (/api/v1/users)
    - HATEOAS for discoverability

28. **Difference between PUT and PATCH**
    - PUT: Replace entire resource
    - PATCH: Partial update

29. **What HTTP status codes to use?**
    - 200 OK: Successful GET/PUT/PATCH
    - 201 Created: Successful POST
    - 204 No Content: Successful DELETE
    - 400 Bad Request: Invalid input
    - 401 Unauthorized: Not authenticated
    - 403 Forbidden: Not authorized
    - 404 Not Found: Resource doesn't exist
    - 500 Internal Server Error: Server error

30. **How to validate request body?**
    - Use @Valid with @RequestBody
    - Bean Validation: @NotNull, @NotEmpty, @Size, @Email
    - Custom validators

31. **What is idempotency?**
    - Same request can be made multiple times with same result
    - GET, PUT, DELETE are idempotent
    - POST is not idempotent

32. **How to implement pagination?**
    - Use Pageable parameter
    - Return Page<T> or Slice<T>
    - Example: /users?page=0&size=10&sort=name,asc

33. **What is CORS?**
    - Cross-Origin Resource Sharing
    - Browser security feature
    - Configure with @CrossOrigin or WebMvcConfigurer

### Database & JPA (8 Questions)

34. **Difference between JPA and Hibernate**
    - JPA: Specification (interface)
    - Hibernate: Implementation of JPA

35. **What is N+1 query problem?**
    - One query to get entities, N queries for related entities
    - Solutions: @EntityGraph, JOIN FETCH, batch size

36. **Difference between LAZY and EAGER loading**
    - LAZY: Load related entities when accessed
    - EAGER: Load related entities immediately
    - Default: @OneToMany and @ManyToMany are LAZY

37. **What are cascade types?**
    - ALL, PERSIST, MERGE, REMOVE, REFRESH, DETACH
    - Propagate operations to related entities

38. **How to write native queries?**

    ```java
    @Query(value = "SELECT * FROM users WHERE status = ?1", nativeQuery = true)
    List<User> findByStatus(String status);
    ```

39. **What is difference between save() and saveAndFlush()?**
    - save(): Persists entity, may not flush immediately
    - saveAndFlush(): Persists and flushes to DB immediately

40. **What are indexes in databases?**
    - Data structure for fast data retrieval
    - Trade-off: Faster reads, slower writes
    - Types: B-Tree, Hash, Bitmap

41. **Explain ACID properties**
    - Atomicity: All or nothing
    - Consistency: Valid state transitions
    - Isolation: Concurrent transactions don't interfere
    - Durability: Committed data persists

### Spring Security (5 Questions)

42. **How does Spring Security work?**
    - Filter chain intercepts requests
    - Authentication Manager validates credentials
    - Authorization Manager checks permissions

43. **Explain JWT authentication flow**
    - User logs in with credentials
    - Server generates JWT token
    - Client sends token in Authorization header
    - Server validates token for each request

44. **What is BCrypt?**
    - Password hashing algorithm
    - Adaptive (can increase complexity)
    - Includes salt automatically

45. **How to implement role-based access control?**
    - Create roles (ROLE_USER, ROLE_ADMIN)
    - Use @PreAuthorize("hasRole('ADMIN')")
    - Configure in SecurityFilterChain

46. **What is OAuth2?**
    - Authorization framework
    - Delegate authentication to third party
    - Used for social login (Google, Facebook)

### Testing (4 Questions)

47. **What is unit testing vs integration testing?**
    - Unit: Test individual components in isolation
    - Integration: Test multiple components together

48. **How to mock dependencies in tests?**

    ```java
    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    void testFindById() {
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        User result = userService.findById(1L);
        assertEquals("John", result.getName());
    }
    ```

49. **What is @SpringBootTest?**
    - Loads full application context
    - Used for integration tests
    - Slower than unit tests

50. **What is test coverage?**
    - Percentage of code executed by tests
    - Tools: JaCoCo
    - Aim for 80%+ coverage

---

## 💼 Behavioral Questions Preparation

### STAR Method (Situation, Task, Action, Result)

**1. Tell me about yourself**
"I'm a Java Developer with 1.7 years of production experience at Lemma Technologies. I've built enterprise Android apps, REST APIs, and microservices using Java, Spring Boot, PostgreSQL, and Docker. I've independently owned modules like the Raspberry Pi Digital Signage Player and WhatsApp Business Gateway. I'm passionate about backend development and building scalable systems. In my personal time, I developed a Personal Finance Tracker using Spring Boot to strengthen my skills. I'm excited about this opportunity because it aligns with my backend expertise and offers growth in full-stack development."

**2. Tell me about a challenging bug you fixed**
**Situation:** In production, our digital signage displays were randomly freezing  
**Task:** Diagnose and fix the issue affecting 200+ devices  
**Action:** Analyzed logs, identified memory leak in the media player, implemented proper resource cleanup  
**Result:** Reduced production bugs by 60%, improved system stability

**3. Describe a time you worked in a team**
**Situation:** Building WhatsApp messaging gateway that other teams would use  
**Task:** Design API that meets all teams' requirements  
**Action:** Conducted requirement gathering, designed flexible REST APIs, documented with OpenAPI  
**Result:** Successfully deployed as shared gateway used by multiple products

**4. How do you handle tight deadlines?**

- Prioritize critical features
- Break down into smaller tasks
- Communicate early if delays expected
- Example: Delivered Raspberry Pi player on schedule by focusing MVP first

**5. Why do you want to join our company?**

- Excited about [mention specific company projects/tech]
- Growth opportunities
- Team culture
- Work on challenging problems

---

## 🚀 Quick Revision Checklist (Day Before Interview)

### Core Java

- [ ] Collections: HashMap, ArrayList, HashSet
- [ ] Streams and Lambda
- [ ] Exception Handling
- [ ] OOP concepts

### Spring Boot

- [ ] Dependency Injection
- [ ] Annotations: @Component, @Service, @Repository, @RestController
- [ ] Bean scopes
- [ ] Auto-configuration

### REST API

- [ ] HTTP methods and status codes
- [ ] @RequestBody, @PathVariable, @RequestParam
- [ ] Exception handling with @ControllerAdvice

### JPA

- [ ] @Entity, @Id, @GeneratedValue
- [ ] JpaRepository methods
- [ ] Relationships: @OneToMany, @ManyToOne
- [ ] LAZY vs EAGER loading

### Spring Security

- [ ] JWT authentication flow
- [ ] UserDetailsService
- [ ] Password encoding

### Testing

- [ ] JUnit basics
- [ ] Mockito: @Mock, when().thenReturn()
- [ ] Testing REST APIs

### DevOps

- [ ] Docker basics
- [ ] CI/CD concepts
- [ ] Jenkins pipeline

---

## 📚 Resources

### Books

- "Effective Java" by Joshua Bloch
- "Spring in Action" by Craig Walls

### Online Platforms

- **Practice Coding:** LeetCode (Easy/Medium Java problems)
- **Spring Boot:** spring.io/guides
- **Docker:** Docker's official tutorials
- **SQL:** HackerRank SQL challenges

### YouTube Channels

- Java Brains (Spring Boot tutorials)
- Telusko (Java concepts)
- Amigoscode (Spring Boot projects)

---

## 🎯 Day of Interview Tips

1. **Be on time** (join 5 minutes early for virtual interviews)
2. **Have projects ready** to share screen and explain
3. **Ask clarifying questions** before solving coding problems
4. **Think aloud** while solving problems
5. **Be honest** about what you don't know
6. **Show enthusiasm** and willingness to learn
7. **Prepare 2-3 questions** to ask interviewer:
   - "What does a typical day look like for this role?"
   - "What technologies does the team use?"
   - "What are the biggest challenges the team is facing?"
   - "What opportunities are there for learning and growth?"

---

## ✨ Your Competitive Advantages

1. **Production Experience:** 1.7 years with real production systems (500+ devices)
2. **End-to-End Ownership:** Independently built and released modules
3. **Problem Solver:** Reduced production bugs by 60%
4. **Full Stack Understanding:** Backend + some frontend + DevOps
5. **Learning Agility:** Self-taught new technologies (Golang, MQTT)
6. **Personal Projects:** Shows initiative beyond work

---

## 🎓 Final Words

**Remember:**

- You already have strong Java Spring Boot experience ✅
- Your production experience is valuable ✅
- You've independently owned modules ✅
- Focus on explaining your projects clearly
- Be confident but humble
- Show willingness to learn (especially Angular/React)

**You've got this! All the best! 🚀**

---

_Created: August 3, 2026_  
_Last Updated: August 3, 2026_
