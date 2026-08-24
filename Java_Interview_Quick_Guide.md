# Java Developer Interview - Quick Guide

**Top Frequently Asked Questions (Citi Bank & Similar Companies)**

---

## 🔥 Core Java (Must Know)

### 1. Difference between `==` and `.equals()`

- `==` compares **references** (memory address)
- `.equals()` compares **content** (must override for custom classes)

```java
String s1 = new String("Java");
String s2 = new String("Java");
s1 == s2        // false (different objects)
s1.equals(s2)   // true (same content)
```

### 2. HashMap Internal Working

- Uses **hash function** to compute bucket index
- Stores key-value in **array of nodes**
- **Collision handling**: Separate chaining (LinkedList → TreeNode if size > 8)
- Load factor: 0.75, capacity doubles when threshold exceeded

```java
// Hash calculation
index = hash(key) & (n-1)  // n = array length
```

### 3. Why String is Immutable?

- **Security**: Used in network connections, file paths
- **Thread safety**: Multiple threads can share without synchronization
- **String pool**: Memory optimization
- **HashCode caching**: Can be cached since value doesn't change

### 4. Java 8 Features

- **Lambda expressions**: `(a, b) -> a + b`
- **Stream API**: `list.stream().filter().map().collect()`
- **Optional**: Avoid null checks
- **Default methods** in interfaces
- **Method references**: `String::toUpperCase`

### 5. Collections - ArrayList vs LinkedList

| Feature       | ArrayList     | LinkedList                  |
| ------------- | ------------- | --------------------------- |
| Structure     | Dynamic array | Doubly linked list          |
| Access        | O(1)          | O(n)                        |
| Insert/Delete | O(n)          | O(1)                        |
| Memory        | Less          | More (node overhead)        |
| Use when      | Random access | Frequent insertion/deletion |

### 6. Exception Handling

- **Checked**: Must handle (IOException, SQLException) - compile time
- **Unchecked**: Runtime exceptions (NullPointerException, ArrayIndexOutOfBounds)
- **try-catch-finally**: finally always executes
- **try-with-resources**: Auto-close resources

```java
try (FileReader fr = new FileReader("file.txt")) {
    // Auto-closed
} catch (IOException e) {
    e.printStackTrace();
}
```

### 7. final, finally, finalize

- **final**: Constant variable, prevent inheritance/override
- **finally**: Block that always executes
- **finalize()**: Called by GC before object destruction (deprecated in Java 9)

### 8. Interface vs Abstract Class

| Feature     | Interface                | Abstract Class               |
| ----------- | ------------------------ | ---------------------------- |
| Methods     | Abstract (before Java 8) | Abstract + Concrete          |
| Variables   | public static final      | Any type                     |
| Inheritance | Multiple                 | Single                       |
| Constructor | No                       | Yes                          |
| Use when    | Contract/capability      | Common base with shared code |

### 9. Multithreading - Create Thread

```java
// Method 1: Extend Thread
class MyThread extends Thread {
    public void run() { System.out.println("Thread running"); }
}
new MyThread().start();

// Method 2: Implement Runnable (preferred)
class MyRunnable implements Runnable {
    public void run() { System.out.println("Thread running"); }
}
new Thread(new MyRunnable()).start();

// Method 3: ExecutorService
ExecutorService executor = Executors.newFixedThreadPool(5);
executor.submit(() -> System.out.println("Task"));
```

### 10. synchronized Keyword

- Ensures only **one thread** accesses method/block at a time
- Prevents **race conditions**

```java
public synchronized void increment() {
    count++;
}
```

---

## 🍃 Spring Boot (Critical)

### 11. What is Spring Boot? Why use it?

- Framework to **quickly build production-ready** applications
- **Auto-configuration**: Automatic bean creation based on classpath
- **Embedded server**: No need for external Tomcat
- **Starter dependencies**: Pre-configured dependency bundles
- **Less boilerplate**: No XML configuration needed

### 12. @SpringBootApplication Annotation

Combines three annotations:

```java
@SpringBootApplication =
    @Configuration +           // Java-based configuration
    @EnableAutoConfiguration + // Auto-configure beans
    @ComponentScan             // Scan for components
```

### 13. Dependency Injection (Most Important!)

- **IoC**: Spring container manages object creation
- **Types**: Constructor (recommended), Setter, Field injection

```java
@Service
public class UserService {
    private final UserRepository repository;

    // Constructor injection (best practice)
    public UserService(UserRepository repository) {
        this.repository = repository;
    }
}
```

**Why DI?** Loose coupling, easier testing, better maintainability

### 14. @Component vs @Service vs @Repository vs @Controller

- **@Component**: Generic stereotype
- **@Service**: Business logic layer (same as @Component, semantic difference)
- **@Repository**: Data access layer + exception translation
- **@Controller**: Web layer, returns views
- **@RestController**: @Controller + @ResponseBody, returns JSON

### 15. Bean Scopes

- **Singleton** (default): One instance per Spring container
- **Prototype**: New instance every time requested
- **Request**: One per HTTP request (web apps)
- **Session**: One per HTTP session (web apps)

### 16. @Bean vs @Component

- **@Component**: Class-level, auto-detected by component scanning
- **@Bean**: Method-level in @Configuration, explicit bean creation

```java
@Component
public class MyService { }  // Auto-detected

@Configuration
public class AppConfig {
    @Bean
    public DataSource dataSource() { return new DataSource(); }  // Manual
}
```

### 17. @Autowired - How it works?

- Spring automatically **injects** dependencies
- Matching: By type → By name → @Qualifier

```java
@Autowired
private UserService userService;  // Field injection

@Autowired  // Constructor injection (best)
public UserController(UserService userService) {
    this.userService = userService;
}
```

### 18. Spring Boot Auto-Configuration

- Looks at **classpath** and existing beans
- Conditionally creates beans using **@Conditional** annotations
- Example: Sees H2 on classpath → auto-configures DataSource
- Can disable: `@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})`

### 19. application.properties vs application.yml

```properties
# application.properties
server.port=8080
spring.datasource.url=jdbc:mysql://localhost/db
```

```yaml
# application.yml (preferred, more readable)
server:
  port: 8080
spring:
  datasource:
    url: jdbc:mysql://localhost/db
```

### 20. @Transactional Annotation

- Manages **database transactions**
- **ACID** properties ensured
- **Rollback**: On RuntimeException by default
- **Propagation**: REQUIRED (default), REQUIRES_NEW, MANDATORY

```java
@Transactional
public void transferMoney(Long from, Long to, Double amount) {
    debit(from, amount);   // If this fails, both rollback
    credit(to, amount);
}
```

---

## 🌐 REST API (Very Important for Banking)

### 21. What is REST?

**RE**presentational **S**tate **T**ransfer

- Architectural style for web services
- **Stateless**: Each request independent
- **HTTP methods**: GET, POST, PUT, DELETE, PATCH
- **Resource-based**: /users, /accounts, /transactions

### 22. HTTP Methods & Status Codes

| Method | Purpose          | Status Code    |
| ------ | ---------------- | -------------- |
| GET    | Retrieve         | 200 OK         |
| POST   | Create           | 201 Created    |
| PUT    | Update (full)    | 200 OK         |
| PATCH  | Update (partial) | 200 OK         |
| DELETE | Remove           | 204 No Content |

**Error Codes:**

- **400** Bad Request (validation failed)
- **401** Unauthorized (not authenticated)
- **403** Forbidden (not authorized)
- **404** Not Found
- **500** Internal Server Error

### 23. PUT vs PATCH

- **PUT**: Replace **entire** resource
- **PATCH**: Update **part** of resource

```java
PUT /users/1    { "name": "John", "email": "john@mail.com" }   // Full update
PATCH /users/1  { "email": "newemail@mail.com" }               // Partial update
```

### 24. @RequestBody vs @RequestParam vs @PathVariable

```java
@PostMapping("/users")
public User create(@RequestBody User user) { }  // JSON body

@GetMapping("/users")
public List<User> search(@RequestParam String name) { }  // ?name=John

@GetMapping("/users/{id}")
public User getById(@PathVariable Long id) { }  // /users/123
```

### 25. Exception Handling in REST API

```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {
        ErrorResponse error = new ErrorResponse(404, ex.getMessage());
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGeneral(Exception ex) {
        ErrorResponse error = new ErrorResponse(500, "Internal error");
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
```

### 26. Request Validation

```java
public class User {
    @NotNull(message = "Name is required")
    @Size(min = 2, max = 50)
    private String name;

    @Email
    private String email;

    @Min(18)
    private Integer age;
}

@PostMapping("/users")
public ResponseEntity<User> create(@Valid @RequestBody User user) {
    // If validation fails → 400 Bad Request
}
```

### 27. REST API Best Practices

- ✅ Use nouns for resources: `/users`, not `/getUsers`
- ✅ Use HTTP methods correctly
- ✅ Versioning: `/api/v1/users`
- ✅ Proper status codes
- ✅ Pagination for lists: `?page=0&size=10`
- ✅ Filter & sort: `?sort=name,asc&filter=status:active`
- ✅ Secure with authentication (JWT)
- ✅ Document with Swagger/OpenAPI

---

## 💾 Spring Data JPA (Banking Applications)

### 28. JPA vs Hibernate

- **JPA**: Specification (interface/standard)
- **Hibernate**: Implementation of JPA (most popular)
- Other implementations: EclipseLink, OpenJPA

### 29. JPA Annotations

```java
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Account> accounts;
}
```

### 30. JPA Relationships

```java
// One-to-Many (User → Accounts)
@OneToMany(mappedBy = "user")
private List<Account> accounts;

// Many-to-One (Account → User)
@ManyToOne
@JoinColumn(name = "user_id")
private User user;

// Many-to-Many (Student ↔ Course)
@ManyToMany
@JoinTable(name = "student_course",
    joinColumns = @JoinColumn(name = "student_id"),
    inverseJoinColumns = @JoinColumn(name = "course_id"))
private Set<Course> courses;
```

### 31. LAZY vs EAGER Loading

- **LAZY**: Load related entities **when accessed** (default for @OneToMany, @ManyToMany)
- **EAGER**: Load related entities **immediately** (default for @OneToOne, @ManyToOne)

```java
@OneToMany(fetch = FetchType.LAZY)  // Loaded when accessed
private List<Account> accounts;
```

**Best Practice**: Use LAZY, fetch explicitly when needed

### 32. N+1 Query Problem

**Problem**: 1 query to fetch users + N queries to fetch each user's accounts

```java
// Bad - N+1 queries
List<User> users = userRepository.findAll();  // 1 query
for (User user : users) {
    user.getAccounts();  // N queries (one per user)
}
```

**Solutions:**

```java
// Solution 1: JOIN FETCH
@Query("SELECT u FROM User u LEFT JOIN FETCH u.accounts")
List<User> findAllWithAccounts();

// Solution 2: @EntityGraph
@EntityGraph(attributePaths = {"accounts"})
List<User> findAll();
```

### 33. JpaRepository Methods

```java
public interface UserRepository extends JpaRepository<User, Long> {
    // Derived query methods (auto-implemented)
    List<User> findByName(String name);
    List<User> findByEmailAndStatus(String email, String status);
    List<User> findByAgeGreaterThan(Integer age);

    // Custom query - JPQL
    @Query("SELECT u FROM User u WHERE u.email = :email")
    Optional<User> findByEmail(@Param("email") String email);

    // Native SQL
    @Query(value = "SELECT * FROM users WHERE status = ?1", nativeQuery = true)
    List<User> findByStatusNative(String status);
}
```

### 34. @Transactional in JPA

```java
@Service
public class BankService {
    @Transactional  // Critical for financial transactions!
    public void transferFunds(Long fromAccount, Long toAccount, Double amount) {
        Account from = accountRepo.findById(fromAccount).orElseThrow();
        Account to = accountRepo.findById(toAccount).orElseThrow();

        from.setBalance(from.getBalance() - amount);
        to.setBalance(to.getBalance() + amount);

        accountRepo.save(from);
        accountRepo.save(to);
        // If any operation fails, entire transaction rolls back
    }
}
```

---

## 🗄️ SQL & Database (Banking Sector)

### 35. SQL JOINs

```sql
-- INNER JOIN: Only matching records
SELECT u.name, a.account_number
FROM users u
INNER JOIN accounts a ON u.id = a.user_id;

-- LEFT JOIN: All from left + matching from right
SELECT u.name, a.account_number
FROM users u
LEFT JOIN accounts a ON u.id = a.user_id;

-- RIGHT JOIN: All from right + matching from left
-- FULL OUTER JOIN: All from both
```

### 36. GROUP BY & HAVING

```sql
-- Find users with more than 2 accounts
SELECT user_id, COUNT(*) as account_count
FROM accounts
GROUP BY user_id
HAVING COUNT(*) > 2;

-- WHERE filters before grouping, HAVING filters after
```

### 37. Common SQL Queries

```sql
-- Second highest salary
SELECT MAX(salary) FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);

-- Nth highest salary (N=3)
SELECT salary FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 2;

-- Find duplicates
SELECT email, COUNT(*)
FROM users
GROUP BY email
HAVING COUNT(*) > 1;

-- Delete duplicates (keep one)
DELETE FROM users
WHERE id NOT IN (
    SELECT MIN(id) FROM users GROUP BY email
);
```

### 38. Indexes

- **Purpose**: Speed up data retrieval (like book index)
- **Trade-off**: Faster reads, slower writes
- **When to use**: Columns in WHERE, JOIN, ORDER BY

```sql
CREATE INDEX idx_email ON users(email);
CREATE UNIQUE INDEX idx_account_number ON accounts(account_number);
```

### 39. ACID Properties (Critical for Banking!)

- **Atomicity**: All or nothing (transaction completes fully or not at all)
- **Consistency**: Data moves from one valid state to another
- **Isolation**: Concurrent transactions don't interfere
- **Durability**: Committed data persists even after system failure

### 40. Normalization

- **1NF**: No repeating groups, atomic values
- **2NF**: 1NF + No partial dependencies
- **3NF**: 2NF + No transitive dependencies
- **Goal**: Reduce redundancy, prevent anomalies

---

## 🔐 Spring Security (Banking Must-Have)

### 41. Authentication vs Authorization

- **Authentication**: Who are you? (Login verification)
- **Authorization**: What can you do? (Access control)

### 42. JWT (JSON Web Token) - Flow

1. User logs in with username/password
2. Server validates credentials
3. Server generates JWT token (signed)
4. Client stores token (localStorage/cookie)
5. Client sends token in header: `Authorization: Bearer <token>`
6. Server validates token for each request
7. Server extracts user info from token

```java
// JWT structure: header.payload.signature
{
  "sub": "user123",
  "role": "ADMIN",
  "exp": 1628000000
}
```

### 43. Spring Security Configuration

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

### 44. Password Encoding

```java
@Service
public class UserService {
    @Autowired
    private PasswordEncoder passwordEncoder;

    public void registerUser(String username, String password) {
        String encoded = passwordEncoder.encode(password);
        // Store encoded password in DB
    }
}
```

**Never store plain passwords!** Use BCrypt (slow, adaptive, includes salt)

### 45. Role-Based Access Control

```java
@RestController
@RequestMapping("/api")
public class BankController {

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/admin/users")
    public List<User> getAllUsers() { }

    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    @GetMapping("/accounts")
    public List<Account> getMyAccounts() { }
}
```

---

## 🧪 Testing (Important!)

### 46. Unit Testing with JUnit & Mockito

```java
@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    void shouldFindUserById() {
        // Given
        User user = new User(1L, "John");
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));

        // When
        User result = userService.findById(1L);

        // Then
        assertEquals("John", result.getName());
        verify(userRepository).findById(1L);
    }

    @Test
    void shouldThrowExceptionWhenUserNotFound() {
        when(userRepository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class,
            () -> userService.findById(1L));
    }
}
```

### 47. Testing REST APIs

```java
@WebMvcTest(UserController.class)
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Test
    void shouldReturnUser() throws Exception {
        User user = new User(1L, "John");
        when(userService.findById(1L)).thenReturn(user);

        mockMvc.perform(get("/api/users/1"))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$.name").value("John"));
    }
}
```

---

## 🐳 Docker & DevOps (Frequently Asked)

### 48. What is Docker?

- **Containerization** platform
- Package application + dependencies in **container**
- **Benefits**: Consistency across environments, isolation, portability

### 49. Docker Commands

```bash
# Build image
docker build -t myapp:1.0 .

# Run container
docker run -d -p 8080:8080 --name myapp-container myapp:1.0

# List containers
docker ps

# View logs
docker logs myapp-container

# Stop/Remove
docker stop myapp-container
docker rm myapp-container
```

### 50. Dockerfile for Spring Boot

```dockerfile
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/myapp.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

### 51. CI/CD Basics

- **CI (Continuous Integration)**: Automatically build & test on code push
- **CD (Continuous Deployment)**: Automatically deploy to production
- **Tools**: Jenkins, GitHub Actions, GitLab CI
- **Pipeline**: Build → Test → Deploy

---

## 💡 Behavioral & Situational

### 52. Tell me about yourself (STAR method)

"I'm a Java Developer with 1.7 years of experience at Lemma Technologies, where I built enterprise applications and microservices using Java, Spring Boot, and PostgreSQL. I've independently owned critical modules like the WhatsApp Business Gateway and Raspberry Pi Digital Signage Player, serving 500+ devices in production. I'm passionate about backend development, and I built a Personal Finance Tracker in my free time using Spring Boot to strengthen my skills. I'm excited about this opportunity at [Company] because it aligns with my expertise and offers growth in building scalable financial systems."

### 53. Challenging Problem You Solved

**Situation**: Production system had performance issues - API response time > 5 seconds  
**Task**: Identify and fix the bottleneck  
**Action**: Analyzed slow queries, added database indexes, implemented caching with Redis  
**Result**: Reduced response time to < 500ms, improved user experience

### 54. How do you handle tight deadlines?

- Break down into smaller tasks
- Prioritize critical features (MVP first)
- Communicate early if blockers arise
- Focus and minimize distractions
- Example: Delivered Raspberry Pi player on time by focusing on core functionality first

### 55. Why should we hire you?

- **Production experience**: 1.7 years building real systems
- **Problem solver**: Reduced bugs by 60%, improved performance
- **Quick learner**: Self-taught new technologies (Golang, MQTT)
- **Ownership**: Independently built and released modules
- **Passionate**: Built personal projects to improve skills

---

## 🎯 Quick Tips for Interview

### Before Interview

- ✅ Review your resume thoroughly
- ✅ Prepare 3 projects to discuss in detail
- ✅ Practice coding on whiteboard/paper
- ✅ Test your camera/mic (for virtual interviews)

### During Interview

- ✅ Ask clarifying questions before solving
- ✅ Think aloud while coding
- ✅ Explain your approach first
- ✅ Write clean, readable code
- ✅ Test your code with examples
- ✅ Be honest about what you don't know

### Questions to Ask Interviewer

1. "What does a typical day look like in this role?"
2. "What technologies does the team currently use?"
3. "What are the biggest challenges the team is facing?"
4. "What opportunities are there for learning and growth?"
5. "What's the deployment process like?"

---

## 🚨 Common Mistakes to Avoid

- ❌ Not understanding your own projects
- ❌ Memorizing answers without understanding
- ❌ Jumping to code without understanding problem
- ❌ Ignoring edge cases in coding problems
- ❌ Being defensive about mistakes
- ❌ Not asking questions when stuck
- ❌ Speaking negatively about previous employer

---

## ✅ Final Checklist

**Day Before:**

- [ ] Review these 55 questions
- [ ] Practice 2-3 LeetCode Easy problems
- [ ] Prepare your projects explanation
- [ ] Set up interview environment
- [ ] Get good sleep!

**Your Strengths:**

- ✅ 1.7 years production experience
- ✅ Spring Boot + REST APIs
- ✅ Docker + CI/CD
- ✅ Problem-solving skills
- ✅ Independent ownership

**Remember:**

- Be confident but humble
- Show willingness to learn
- You have real production experience - that's valuable!
- Banking companies value reliability and attention to detail

---

## 🎓 You've Got This! 💪

Focus on understanding concepts, not memorizing. Be yourself. Show enthusiasm. Good luck! 🚀

_Created: August 3, 2026_
