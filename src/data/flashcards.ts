export interface FlashCard {
  id: number;
  category: 'algorithms' | 'system-design' | 'frontend' | 'backend' | 'database' | 'general';
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  answer: string;
  code?: string;
  tags?: string[];
}

export const flashcards: FlashCard[] = [
  // Very Basic Programming Questions
  {
    id: 1,
    category: 'general',
    difficulty: 'easy',
    question: 'What does HTML stand for?',
    answer: 'HyperText Markup Language',
    tags: ['html', 'basics', 'web']
  },
  {
    id: 2,
    category: 'general',
    difficulty: 'easy',
    question: 'What does CSS stand for?',
    answer: 'Cascading Style Sheets',
    tags: ['css', 'basics', 'web']
  },
  {
    id: 3,
    category: 'frontend',
    difficulty: 'easy',
    question: 'What are the three main technologies used in web development?',
    answer: 'HTML (structure), CSS (styling), and JavaScript (behavior/interactivity)',
    tags: ['html', 'css', 'javascript', 'basics']
  },
  {
    id: 4,
    category: 'general',
    difficulty: 'easy',
    question: 'What is a variable in programming?',
    answer: 'A variable is a container that stores data values. It has a name and can hold different types of data like numbers, text, or boolean values.',
    tags: ['variables', 'basics', 'programming']
  },
  {
    id: 5,
    category: 'frontend',
    difficulty: 'easy',
    question: 'What is the difference between an ID and a Class in HTML?',
    answer: 'ID is unique - only one element can have a specific ID. Class can be used by multiple elements. ID uses # in CSS, Class uses . in CSS.',
    code: '<!-- ID (unique) -->\n<div id="header">Header</div>\n\n<!-- Class (reusable) -->\n<div class="button">Button 1</div>\n<div class="button">Button 2</div>',
    tags: ['html', 'css', 'selectors']
  },
  {
    id: 6,
    category: 'frontend',
    difficulty: 'easy',
    question: 'How do you create a link in HTML?',
    answer: 'Use the <a> tag with the href attribute',
    code: '<a href="https://google.com">Click here</a>\n<a href="about.html">About Page</a>\n<a href="mailto:email@example.com">Send Email</a>',
    tags: ['html', 'links', 'basics']
  },
  {
    id: 7,
    category: 'frontend',
    difficulty: 'easy',
    question: 'How do you add a comment in JavaScript?',
    answer: 'Use // for single line comments or /* */ for multi-line comments',
    code: '// This is a single line comment\n\n/* This is a\n   multi-line comment */\n\nlet x = 5; // Comment at end of line',
    tags: ['javascript', 'comments', 'basics']
  },
  {
    id: 8,
    category: 'frontend',
    difficulty: 'easy',
    question: 'What are the basic data types in JavaScript?',
    answer: 'Number, String, Boolean, Undefined, Null, Object, and Symbol (ES6+)',
    code: 'let num = 42;           // Number\nlet text = "Hello";     // String\nlet isTrue = true;      // Boolean\nlet notDefined;         // Undefined\nlet empty = null;       // Null\nlet obj = {};          // Object',
    tags: ['javascript', 'data-types', 'basics']
  },
  {
    id: 9,
    category: 'algorithms',
    difficulty: 'easy',
    question: 'What is the time complexity of searching in a binary search tree?',
    answer: 'O(log n) for balanced trees, O(n) for unbalanced trees in worst case',
    tags: ['big-o', 'trees', 'search']
  },
  {
    id: 2,
    category: 'algorithms',
    difficulty: 'easy',
    question: 'Implement a function to reverse a string',
    answer: 'function reverseString(str: string): string {\n  return str.split("").reverse().join("");\n}\n\n// Or using loop:\nfunction reverseString2(str: string): string {\n  let result = "";\n  for (let i = str.length - 1; i >= 0; i--) {\n    result += str[i];\n  }\n  return result;\n}',
    code: 'function reverseString(str: string): string {\n  return str.split("").reverse().join("");\n}',
    tags: ['string-manipulation', 'basic-algorithms']
  },
  {
    id: 3,
    category: 'algorithms',
    difficulty: 'easy',
    question: 'What is the difference between BFS and DFS?',
    answer: 'BFS (Breadth-First Search) explores level by level using a queue. DFS (Depth-First Search) explores as far as possible before backtracking using a stack. BFS finds shortest path in unweighted graphs, DFS uses less memory for deep trees.',
    tags: ['graph-traversal', 'bfs', 'dfs']
  },
  {
    id: 4,
    category: 'algorithms',
    difficulty: 'easy',
    question: 'Implement a function to check if a number is prime',
    answer: 'function isPrime(n: number): boolean {\n  if (n <= 1) return false;\n  if (n <= 3) return true;\n  if (n % 2 === 0 || n % 3 === 0) return false;\n  \n  for (let i = 5; i * i <= n; i += 6) {\n    if (n % i === 0 || n % (i + 2) === 0) {\n      return false;\n    }\n  }\n  return true;\n}',
    code: 'function isPrime(n: number): boolean {\n  if (n <= 1) return false;\n  if (n <= 3) return true;\n  if (n % 2 === 0 || n % 3 === 0) return false;\n  \n  for (let i = 5; i * i <= n; i += 6) {\n    if (n % i === 0 || n % (i + 2) === 0) {\n      return false;\n    }\n  }\n  return true;\n}',
    tags: ['math', 'prime-numbers', 'optimization']
  },
  {
    id: 5,
    category: 'algorithms',
    difficulty: 'medium',
    question: 'Implement merge sort algorithm',
    answer: 'function mergeSort(arr: number[]): number[] {\n  if (arr.length <= 1) return arr;\n  \n  const mid = Math.floor(arr.length / 2);\n  const left = mergeSort(arr.slice(0, mid));\n  const right = mergeSort(arr.slice(mid));\n  \n  return merge(left, right);\n}\n\nfunction merge(left: number[], right: number[]): number[] {\n  const result: number[] = [];\n  let leftIndex = 0, rightIndex = 0;\n  \n  while (leftIndex < left.length && rightIndex < right.length) {\n    if (left[leftIndex] <= right[rightIndex]) {\n      result.push(left[leftIndex]);\n      leftIndex++;\n    } else {\n      result.push(right[rightIndex]);\n      rightIndex++;\n    }\n  }\n  \n  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));\n}',
    code: 'function mergeSort(arr: number[]): number[] {\n  if (arr.length <= 1) return arr;\n  \n  const mid = Math.floor(arr.length / 2);\n  const left = mergeSort(arr.slice(0, mid));\n  const right = mergeSort(arr.slice(mid));\n  \n  return merge(left, right);\n}',
    tags: ['sorting', 'divide-conquer', 'recursion']
  },
  {
    id: 6,
    category: 'algorithms',
    difficulty: 'medium',
    question: 'Find the longest palindromic substring',
    answer: 'function longestPalindrome(s: string): string {\n  let start = 0, maxLen = 1;\n  \n  function expandAroundCenter(left: number, right: number): number {\n    while (left >= 0 && right < s.length && s[left] === s[right]) {\n      const currentLen = right - left + 1;\n      if (currentLen > maxLen) {\n        start = left;\n        maxLen = currentLen;\n      }\n      left--;\n      right++;\n    }\n    return right - left - 1;\n  }\n  \n  for (let i = 0; i < s.length; i++) {\n    expandAroundCenter(i, i); // odd length\n    expandAroundCenter(i, i + 1); // even length\n  }\n  \n  return s.substring(start, start + maxLen);\n}',
    code: 'function longestPalindrome(s: string): string {\n  let start = 0, maxLen = 1;\n  \n  function expandAroundCenter(left: number, right: number) {\n    while (left >= 0 && right < s.length && s[left] === s[right]) {\n      const currentLen = right - left + 1;\n      if (currentLen > maxLen) {\n        start = left;\n        maxLen = currentLen;\n      }\n      left--;\n      right++;\n    }\n  }\n  \n  for (let i = 0; i < s.length; i++) {\n    expandAroundCenter(i, i);\n    expandAroundCenter(i, i + 1);\n  }\n  \n  return s.substring(start, start + maxLen);\n}',
    tags: ['string-algorithms', 'palindrome', 'two-pointers']
  },
  {
    id: 7,
    category: 'algorithms',
    difficulty: 'hard',
    question: 'Implement LRU Cache',
    answer: 'class LRUCache {\n  private capacity: number;\n  private cache: Map<number, number>;\n  \n  constructor(capacity: number) {\n    this.capacity = capacity;\n    this.cache = new Map();\n  }\n  \n  get(key: number): number {\n    if (this.cache.has(key)) {\n      const value = this.cache.get(key)!;\n      // Move to end (most recently used)\n      this.cache.delete(key);\n      this.cache.set(key, value);\n      return value;\n    }\n    return -1;\n  }\n  \n  put(key: number, value: number): void {\n    if (this.cache.has(key)) {\n      // Update existing\n      this.cache.delete(key);\n    } else if (this.cache.size >= this.capacity) {\n      // Remove least recently used (first item)\n      const firstKey = this.cache.keys().next().value;\n      this.cache.delete(firstKey);\n    }\n    this.cache.set(key, value);\n  }\n}',
    code: 'class LRUCache {\n  private capacity: number;\n  private cache: Map<number, number>;\n  \n  constructor(capacity: number) {\n    this.capacity = capacity;\n    this.cache = new Map();\n  }\n  \n  get(key: number): number {\n    if (this.cache.has(key)) {\n      const value = this.cache.get(key)!;\n      this.cache.delete(key);\n      this.cache.set(key, value);\n      return value;\n    }\n    return -1;\n  }\n}',
    tags: ['data-structures', 'cache', 'design']
  },

  // Frontend - Easy to Hard
  {
    id: 8,
    category: 'frontend',
    difficulty: 'easy',
    question: 'What is the virtual DOM and why is it useful?',
    answer: 'The Virtual DOM is a lightweight JavaScript representation of the actual DOM. React uses it to optimize rendering by comparing (diffing) the virtual DOM tree with the previous version and only updating the parts that changed. This minimizes expensive DOM operations and improves performance.',
    tags: ['react', 'virtual-dom', 'performance']
  },
  {
    id: 9,
    category: 'frontend',
    difficulty: 'easy',
    question: 'What is the difference between let, const, and var?',
    answer: 'var: function-scoped, hoisted, can be redeclared\nlet: block-scoped, hoisted but not initialized, cannot be redeclared in same scope\nconst: block-scoped, hoisted but not initialized, cannot be redeclared or reassigned, must be initialized at declaration',
    tags: ['javascript', 'variables', 'scope']
  },
  {
    id: 10,
    category: 'frontend',
    difficulty: 'medium',
    question: 'Explain closures in JavaScript with an example',
    answer: 'A closure is when an inner function has access to variables from its outer function scope even after the outer function has returned.\n\nExample:\nfunction outerFunction(x) {\n  return function innerFunction(y) {\n    return x + y;\n  };\n}\n\nconst addFive = outerFunction(5);\nconsole.log(addFive(3)); // 8\n\nThe inner function "closes over" the variable x from the outer scope.',
    code: 'function outerFunction(x) {\n  return function innerFunction(y) {\n    return x + y;\n  };\n}\n\nconst addFive = outerFunction(5);\nconsole.log(addFive(3)); // 8',
    tags: ['javascript', 'closures', 'scope']
  },
  {
    id: 11,
    category: 'frontend',
    difficulty: 'medium',
    question: 'What are React hooks and why were they introduced?',
    answer: 'React Hooks are functions that let you use state and other React features in functional components. They were introduced to:\n1. Reuse stateful logic between components\n2. Simplify complex components by splitting them into smaller functions\n3. Avoid confusion with "this" keyword in class components\n4. Enable better code organization and testing\n\nCommon hooks: useState, useEffect, useContext, useReducer, useMemo, useCallback',
    tags: ['react', 'hooks', 'functional-components']
  },
  {
    id: 12,
    category: 'frontend',
    difficulty: 'hard',
    question: 'Implement a custom hook for debouncing',
    answer: 'import { useState, useEffect } from "react";\n\nfunction useDebounce<T>(value: T, delay: number): T {\n  const [debouncedValue, setDebouncedValue] = useState<T>(value);\n\n  useEffect(() => {\n    const handler = setTimeout(() => {\n      setDebouncedValue(value);\n    }, delay);\n\n    return () => {\n      clearTimeout(handler);\n    };\n  }, [value, delay]);\n\n  return debouncedValue;\n}\n\n// Usage:\nconst [searchTerm, setSearchTerm] = useState("");\nconst debouncedSearchTerm = useDebounce(searchTerm, 500);',
    code: 'function useDebounce<T>(value: T, delay: number): T {\n  const [debouncedValue, setDebouncedValue] = useState<T>(value);\n\n  useEffect(() => {\n    const handler = setTimeout(() => {\n      setDebouncedValue(value);\n    }, delay);\n\n    return () => clearTimeout(handler);\n  }, [value, delay]);\n\n  return debouncedValue;\n}',
    tags: ['react', 'custom-hooks', 'debouncing', 'performance']
  },

  // Backend - Easy to Hard
  {
    id: 13,
    category: 'backend',
    difficulty: 'easy',
    question: 'What is the difference between HTTP and HTTPS?',
    answer: 'HTTP (HyperText Transfer Protocol) sends data in plain text, making it vulnerable to eavesdropping. HTTPS (HTTP Secure) encrypts data using SSL/TLS, providing:\n1. Encryption of data in transit\n2. Authentication of the server\n3. Data integrity protection\n\nHTTPS uses port 443 by default, HTTP uses port 80.',
    tags: ['http', 'security', 'encryption']
  },
  {
    id: 14,
    category: 'backend',
    difficulty: 'easy',
    question: 'What are HTTP status codes? Name common ones.',
    answer: '1xx: Informational (100 Continue)\n2xx: Success (200 OK, 201 Created, 204 No Content)\n3xx: Redirection (301 Moved Permanently, 302 Found, 304 Not Modified)\n4xx: Client Error (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict)\n5xx: Server Error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)',
    tags: ['http', 'status-codes', 'web-fundamentals']
  },
  {
    id: 15,
    category: 'backend',
    difficulty: 'medium',
    question: 'Explain the difference between authentication and authorization',
    answer: 'Authentication: Verifies "who you are" - the process of confirming user identity (login with username/password, JWT tokens, OAuth)\n\nAuthorization: Determines "what you can do" - the process of granting or denying access to specific resources based on permissions and roles\n\nExample: After login (authentication), checking if user can delete a post (authorization)',
    tags: ['security', 'authentication', 'authorization']
  },
  {
    id: 16,
    category: 'backend',
    difficulty: 'medium',
    question: 'What is middleware in Express.js?',
    answer: 'Middleware are functions that execute during the request-response cycle. They have access to req, res, and next objects.\n\nTypes:\n- Application-level: app.use()\n- Router-level: router.use()\n- Error-handling: (err, req, res, next) => {}\n- Built-in: express.static(), express.json()\n- Third-party: cors, helmet, morgan\n\nExample:\napp.use((req, res, next) => {\n  console.log("Request received");\n  next();\n});',
    code: 'app.use((req, res, next) => {\n  console.log(`${req.method} ${req.path}`);\n  next();\n});',
    tags: ['express', 'middleware', 'nodejs']
  },
  {
    id: 17,
    category: 'backend',
    difficulty: 'hard',
    question: 'Design a rate limiting system',
    answer: 'Approaches:\n1. Token Bucket: Allow burst traffic, refill tokens at fixed rate\n2. Fixed Window: Count requests in fixed time windows\n3. Sliding Window Log: Track timestamp of each request\n4. Sliding Window Counter: Hybrid approach\n\nImplementation considerations:\n- Storage: Redis for distributed systems\n- Key strategy: IP, user ID, API key\n- Response: 429 Too Many Requests\n- Headers: X-RateLimit-Remaining, X-RateLimit-Reset\n\nExample with Redis:\nconst requests = await redis.incr(key);\nif (requests === 1) {\n  await redis.expire(key, windowSize);\n}\nif (requests > limit) {\n  throw new Error("Rate limit exceeded");\n}',
    tags: ['rate-limiting', 'system-design', 'redis', 'scalability']
  },

  // System Design
  {
    id: 18,
    category: 'system-design',
    difficulty: 'medium',
    question: 'Explain horizontal vs vertical scaling',
    answer: 'Vertical Scaling (Scale Up):\n- Add more power (CPU, RAM) to existing server\n- Easier to implement, no code changes needed\n- Limited by hardware constraints\n- Single point of failure\n- Example: Upgrading from 8GB to 32GB RAM\n\nHorizontal Scaling (Scale Out):\n- Add more servers to the pool\n- Requires load balancing and distributed architecture\n- Better fault tolerance and theoretically unlimited scaling\n- More complex (data consistency, network latency)\n- Example: Adding more web servers behind a load balancer',
    tags: ['scaling', 'architecture', 'performance']
  },
  {
    id: 19,
    category: 'system-design',
    difficulty: 'medium',
    question: 'What is a CDN and how does it work?',
    answer: 'CDN (Content Delivery Network) is a geographically distributed network of servers that cache content closer to users.\n\nHow it works:\n1. User requests content\n2. DNS routes to nearest edge server\n3. If content cached: serve immediately\n4. If not cached: fetch from origin, cache, then serve\n5. TTL determines cache expiration\n\nBenefits:\n- Reduced latency\n- Decreased server load\n- Better availability\n- DDoS protection\n\nExamples: CloudFlare, AWS CloudFront, Akamai',
    tags: ['cdn', 'performance', 'caching', 'distributed-systems']
  },
  {
    id: 20,
    category: 'system-design',
    difficulty: 'hard',
    question: 'Design a URL shortener like bit.ly',
    answer: 'Components:\n1. URL encoding service\n2. Database (URLs, analytics)\n3. Cache (Redis)\n4. Analytics service\n5. Load balancer\n\nURL encoding approaches:\n- Base62 encoding (a-z, A-Z, 0-9)\n- Hash functions (MD5, SHA256)\n- Counter-based with base conversion\n\nDatabase schema:\n- id, long_url, short_url, user_id, created_at, expires_at\n- Analytics: clicks, timestamps, referrers, locations\n\nScaling considerations:\n- Database sharding\n- Caching popular URLs\n- Rate limiting\n- Custom domains\n- Analytics aggregation',
    tags: ['system-design', 'url-shortener', 'scalability', 'database-design']
  },

  // Database
  {
    id: 21,
    category: 'database',
    difficulty: 'easy',
    question: 'What is the difference between SQL and NoSQL databases?',
    answer: 'SQL (Relational):\n- Structured data with predefined schema\n- ACID properties (Atomicity, Consistency, Isolation, Durability)\n- Complex queries with JOINs\n- Vertical scaling\n- Examples: MySQL, PostgreSQL, SQL Server\n\nNoSQL:\n- Flexible schema or schema-less\n- Eventual consistency (BASE properties)\n- Horizontal scaling\n- Types: Document (MongoDB), Key-value (Redis), Column-family (Cassandra), Graph (Neo4j)\n- Better for big data and rapid development',
    tags: ['sql', 'nosql', 'database-comparison']
  },
  {
    id: 22,
    category: 'database',
    difficulty: 'medium',
    question: 'Explain database indexing and its types',
    answer: 'Database indexes improve query performance by creating shortcuts to data.\n\nTypes:\n1. Clustered: Physical order matches index order (one per table)\n2. Non-clustered: Separate structure pointing to data rows\n3. Unique: Ensures uniqueness\n4. Composite: Multiple columns\n5. Partial: Subset of rows (with WHERE clause)\n6. Functional: Based on expressions\n\nTrade-offs:\n- Faster SELECT queries\n- Slower INSERT/UPDATE/DELETE\n- Additional storage space\n- Maintenance overhead',
    tags: ['database', 'indexing', 'performance', 'sql']
  },
  {
    id: 23,
    category: 'database',
    difficulty: 'hard',
    question: 'What is database normalization? Explain 1NF, 2NF, 3NF',
    answer: '1NF (First Normal Form):\n- Atomic values (no repeating groups)\n- Each cell contains single value\n- Each row is unique\n\n2NF (Second Normal Form):\n- Must be in 1NF\n- No partial dependencies on composite primary key\n- Non-key attributes depend on entire primary key\n\n3NF (Third Normal Form):\n- Must be in 2NF\n- No transitive dependencies\n- Non-key attributes depend only on primary key\n\nExample: Customer table with orders violates 1NF if orders are comma-separated. Split into Customer and Order tables.',
    tags: ['database', 'normalization', 'database-design', 'sql']
  },

  // More Frontend Questions
  {
    id: 24,
    category: 'frontend',
    difficulty: 'medium',
    question: 'What is event bubbling and capturing?',
    answer: 'Event flow in DOM:\n1. Capture phase: Event travels down from root to target\n2. Target phase: Event reaches the target element\n3. Bubble phase: Event bubbles up from target to root\n\nBy default, event listeners trigger during bubble phase.\nUse addEventListener(event, handler, true) for capture phase.\n\nEvent.stopPropagation() prevents further propagation.\nEvent.preventDefault() prevents default behavior.\n\nExample: Clicking a button inside a div triggers both handlers unless stopped.',
    code: 'element.addEventListener("click", handler, true); // capture\nelement.addEventListener("click", handler, false); // bubble',
    tags: ['dom', 'events', 'javascript']
  },
  {
    id: 25,
    category: 'frontend',
    difficulty: 'hard',
    question: 'Implement a Promise polyfill',
    answer: 'class MyPromise {\n  constructor(executor) {\n    this.state = "pending";\n    this.value = undefined;\n    this.reason = undefined;\n    this.onResolvedCallbacks = [];\n    this.onRejectedCallbacks = [];\n\n    const resolve = (value) => {\n      if (this.state === "pending") {\n        this.state = "fulfilled";\n        this.value = value;\n        this.onResolvedCallbacks.forEach(fn => fn());\n      }\n    };\n\n    const reject = (reason) => {\n      if (this.state === "pending") {\n        this.state = "rejected";\n        this.reason = reason;\n        this.onRejectedCallbacks.forEach(fn => fn());\n      }\n    };\n\n    try {\n      executor(resolve, reject);\n    } catch (error) {\n      reject(error);\n    }\n  }\n\n  then(onResolved, onRejected) {\n    return new MyPromise((resolve, reject) => {\n      if (this.state === "fulfilled") {\n        try {\n          const result = onResolved(this.value);\n          resolve(result);\n        } catch (error) {\n          reject(error);\n        }\n      }\n      // ... handle other states\n    });\n  }\n}',
    code: 'class MyPromise {\n  constructor(executor) {\n    this.state = "pending";\n    this.value = undefined;\n    this.onResolvedCallbacks = [];\n    this.onRejectedCallbacks = [];\n\n    const resolve = (value) => {\n      if (this.state === "pending") {\n        this.state = "fulfilled";\n        this.value = value;\n        this.onResolvedCallbacks.forEach(fn => fn());\n      }\n    };\n\n    try {\n      executor(resolve, reject);\n    } catch (error) {\n      reject(error);\n    }\n  }\n}',
    tags: ['javascript', 'promises', 'polyfill', 'async']
  },

  // More Backend Questions
  {
    id: 26,
    category: 'backend',
    difficulty: 'medium',
    question: 'What is JWT and how does it work?',
    answer: 'JWT (JSON Web Token) is a stateless authentication mechanism.\n\nStructure: header.payload.signature\n- Header: Algorithm and token type\n- Payload: Claims (user data, expiration)\n- Signature: Verification using secret key\n\nFlow:\n1. User logs in with credentials\n2. Server validates and creates JWT\n3. Client stores token (localStorage/cookie)\n4. Client sends token in Authorization header\n5. Server verifies signature and extracts user info\n\nAdvantages: Stateless, scalable, cross-domain\nDisadvantages: Token size, revocation difficulty, security if compromised',
    code: 'const jwt = require("jsonwebtoken");\n\n// Create token\nconst token = jwt.sign(\n  { userId: 123, role: "user" },\n  "secret_key",\n  { expiresIn: "1h" }\n);\n\n// Verify token\ntry {\n  const decoded = jwt.verify(token, "secret_key");\n  console.log(decoded.userId);\n} catch (error) {\n  console.log("Invalid token");\n}',
    tags: ['jwt', 'authentication', 'security', 'tokens']
  },
  {
    id: 27,
    category: 'backend',
    difficulty: 'hard',
    question: 'Explain different types of database transactions and ACID properties',
    answer: 'ACID Properties:\nA - Atomicity: All operations succeed or all fail\nC - Consistency: Database remains in valid state\nI - Isolation: Concurrent transactions don\'t interfere\nD - Durability: Committed changes persist\n\nIsolation Levels:\n1. Read Uncommitted: Dirty reads possible\n2. Read Committed: No dirty reads, non-repeatable reads possible\n3. Repeatable Read: No dirty/non-repeatable reads, phantom reads possible\n4. Serializable: No concurrency issues, highest isolation\n\nTransaction Types:\n- Flat transactions: Single level\n- Nested transactions: Transactions within transactions\n- Distributed transactions: Across multiple databases (2PC protocol)',
    tags: ['database', 'transactions', 'acid', 'isolation-levels']
  },

  // More Algorithm Questions
  {
    id: 28,
    category: 'algorithms',
    difficulty: 'medium',
    question: 'Implement binary search',
    answer: 'function binarySearch(arr: number[], target: number): number {\n  let left = 0;\n  let right = arr.length - 1;\n  \n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    \n    if (arr[mid] === target) {\n      return mid;\n    } else if (arr[mid] < target) {\n      left = mid + 1;\n    } else {\n      right = mid - 1;\n    }\n  }\n  \n  return -1; // Not found\n}\n\n// Recursive version\nfunction binarySearchRecursive(arr: number[], target: number, left = 0, right = arr.length - 1): number {\n  if (left > right) return -1;\n  \n  const mid = Math.floor((left + right) / 2);\n  \n  if (arr[mid] === target) return mid;\n  if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, right);\n  return binarySearchRecursive(arr, target, left, mid - 1);\n}',
    code: 'function binarySearch(arr: number[], target: number): number {\n  let left = 0;\n  let right = arr.length - 1;\n  \n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    \n    if (arr[mid] === target) {\n      return mid;\n    } else if (arr[mid] < target) {\n      left = mid + 1;\n    } else {\n      right = mid - 1;\n    }\n  }\n  \n  return -1;\n}',
    tags: ['search', 'binary-search', 'divide-conquer']
  },
  {
    id: 29,
    category: 'algorithms',
    difficulty: 'hard',
    question: 'Implement a Trie (Prefix Tree)',
    answer: 'class TrieNode {\n  children: Map<string, TrieNode>;\n  isEndOfWord: boolean;\n  \n  constructor() {\n    this.children = new Map();\n    this.isEndOfWord = false;\n  }\n}\n\nclass Trie {\n  private root: TrieNode;\n  \n  constructor() {\n    this.root = new TrieNode();\n  }\n  \n  insert(word: string): void {\n    let current = this.root;\n    \n    for (const char of word) {\n      if (!current.children.has(char)) {\n        current.children.set(char, new TrieNode());\n      }\n      current = current.children.get(char)!;\n    }\n    \n    current.isEndOfWord = true;\n  }\n  \n  search(word: string): boolean {\n    let current = this.root;\n    \n    for (const char of word) {\n      if (!current.children.has(char)) {\n        return false;\n      }\n      current = current.children.get(char)!;\n    }\n    \n    return current.isEndOfWord;\n  }\n  \n  startsWith(prefix: string): boolean {\n    let current = this.root;\n    \n    for (const char of prefix) {\n      if (!current.children.has(char)) {\n        return false;\n      }\n      current = current.children.get(char)!;\n    }\n    \n    return true;\n  }\n}',
    code: 'class TrieNode {\n  children = new Map<string, TrieNode>();\n  isEndOfWord = false;\n}\n\nclass Trie {\n  private root = new TrieNode();\n  \n  insert(word: string): void {\n    let current = this.root;\n    \n    for (const char of word) {\n      if (!current.children.has(char)) {\n        current.children.set(char, new TrieNode());\n      }\n      current = current.children.get(char)!;\n    }\n    \n    current.isEndOfWord = true;\n  }\n}',
    tags: ['trie', 'data-structures', 'string-algorithms']
  },

  // More System Design
  {
    id: 30,
    category: 'system-design',
    difficulty: 'medium',
    question: 'What is load balancing and what are the different algorithms?',
    answer: 'Load balancing distributes incoming requests across multiple servers.\n\nAlgorithms:\n1. Round Robin: Requests distributed sequentially\n2. Weighted Round Robin: Servers have different weights\n3. Least Connections: Route to server with fewest connections\n4. Weighted Least Connections: Combines weights with connections\n5. Random: Random server selection\n6. IP Hash: Hash client IP to determine server\n7. Least Response Time: Route to fastest responding server\n\nTypes:\n- Layer 4 (Transport): Routes based on IP/port\n- Layer 7 (Application): Routes based on content (HTTP headers, URLs)\n\nExamples: NGINX, HAProxy, AWS ELB, Cloudflare',
    tags: ['load-balancing', 'scalability', 'distributed-systems']
  },

  // Continue with more questions...
  {
    id: 31,
    category: 'general',
    difficulty: 'easy',
    question: 'What is REST API and what are its principles?',
    answer: 'REST (Representational State Transfer) is an architectural style for web services.\n\nPrinciples:\n1. Stateless: Each request contains all needed information\n2. Client-Server: Separation of concerns\n3. Cacheable: Responses should be cacheable when appropriate\n4. Uniform Interface: Standard methods (GET, POST, PUT, DELETE)\n5. Layered System: Architecture can have multiple layers\n6. Code on Demand (optional): Server can send executable code\n\nHTTP Methods:\n- GET: Retrieve data\n- POST: Create new resource\n- PUT: Update/replace entire resource\n- PATCH: Partial update\n- DELETE: Remove resource',
    tags: ['rest', 'api', 'web-services', 'http']
  },
  {
    id: 32,
    category: 'general',
    difficulty: 'medium',
    question: 'Explain the difference between cookies, localStorage, and sessionStorage',
    answer: 'Cookies:\n- Sent with every HTTP request\n- 4KB size limit\n- Expire based on set date/time\n- Accessible from server and client\n- Can be httpOnly (server-only)\n\nlocalStorage:\n- Client-side only, not sent with requests\n- 5-10MB size limit (browser dependent)\n- Persists until explicitly cleared\n- Same origin policy\n- Synchronous API\n\nsessionStorage:\n- Client-side only\n- 5-10MB size limit\n- Cleared when tab is closed\n- Tab-specific storage\n- Same origin policy\n\nUse cases:\n- Cookies: Authentication tokens, user preferences\n- localStorage: User settings, offline data\n- sessionStorage: Temporary form data, shopping cart',
    tags: ['web-storage', 'cookies', 'browser', 'client-side']
  },
  {
    id: 33,
    category: 'algorithms',
    difficulty: 'medium',
    question: 'Find two numbers that sum to a target in an array',
    answer: 'function twoSum(nums: number[], target: number): number[] {\n  const map = new Map<number, number>();\n  \n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    \n    if (map.has(complement)) {\n      return [map.get(complement)!, i];\n    }\n    \n    map.set(nums[i], i);\n  }\n  \n  return []; // No solution found\n}\n\n// For sorted array, two-pointer approach:\nfunction twoSumSorted(nums: number[], target: number): number[] {\n  let left = 0;\n  let right = nums.length - 1;\n  \n  while (left < right) {\n    const sum = nums[left] + nums[right];\n    \n    if (sum === target) {\n      return [left, right];\n    } else if (sum < target) {\n      left++;\n    } else {\n      right--;\n    }\n  }\n  \n  return [];\n}',
    code: 'function twoSum(nums: number[], target: number): number[] {\n  const map = new Map<number, number>();\n  \n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    \n    if (map.has(complement)) {\n      return [map.get(complement)!, i];\n    }\n    \n    map.set(nums[i], i);\n  }\n  \n  return [];\n}',
    tags: ['array', 'hash-map', 'two-pointers', 'leetcode']
  },
  {
    id: 34,
    category: 'frontend',
    difficulty: 'hard',
    question: 'Explain React fiber and reconciliation',
    answer: 'React Fiber is the new reconciliation engine that enables:\n\n1. Incremental Rendering: Break work into chunks\n2. Pause/Resume: Ability to pause work and resume later\n3. Priority-based Updates: High-priority updates can interrupt low-priority ones\n4. Error Boundaries: Better error handling\n\nReconciliation Process:\n1. Trigger update (setState, props change)\n2. Create new fiber tree (work-in-progress tree)\n3. Diff with current tree\n4. Mark changes (effects)\n5. Commit phase: Apply DOM updates\n\nPhases:\n- Render Phase: Can be interrupted, pure functions\n- Commit Phase: Synchronous, side effects allowed\n\nPriority Levels:\n- Immediate (user interactions)\n- Normal (network responses)\n- Low (analytics)\n\nThis enables time-slicing and concurrent features.',
    tags: ['react', 'fiber', 'reconciliation', 'performance']
  },
  {
    id: 35,
    category: 'backend',
    difficulty: 'medium',
    question: 'What is dependency injection and why is it useful?',
    answer: 'Dependency Injection (DI) is a design pattern where dependencies are provided to a class rather than the class creating them itself.\n\nTypes:\n1. Constructor Injection: Dependencies passed via constructor\n2. Setter Injection: Dependencies set via setter methods\n3. Interface Injection: Dependencies provided through interface\n\nBenefits:\n- Loose coupling between classes\n- Easier unit testing (mock dependencies)\n- Better code reusability\n- Inversion of Control (IoC)\n- Configuration flexibility\n\nExample:\n// Without DI\nclass UserService {\n  private db = new Database(); // Tight coupling\n}\n\n// With DI\nclass UserService {\n  constructor(private db: IDatabase) {} // Loose coupling\n}\n\nFrameworks: Angular, NestJS, Spring, ASP.NET Core',
    code: '// Without DI\nclass UserService {\n  private db = new Database();\n}\n\n// With DI\nclass UserService {\n  constructor(private db: IDatabase) {}\n  \n  async getUser(id: string) {\n    return this.db.findById(id);\n  }\n}',
    tags: ['dependency-injection', 'design-patterns', 'testing', 'architecture']
  },

  // Add more questions to reach 100+...
  {
    id: 36,
    category: 'algorithms',
    difficulty: 'easy',
    question: 'What is Big O notation and why is it important?',
    answer: 'Big O notation describes the upper bound of algorithm complexity in terms of time or space as input size grows.\n\nCommon complexities:\n- O(1): Constant - array access, hash lookup\n- O(log n): Logarithmic - binary search\n- O(n): Linear - single loop through array\n- O(n log n): Linearithmic - merge sort, heap sort\n- O(n²): Quadratic - nested loops, bubble sort\n- O(2^n): Exponential - recursive fibonacci\n- O(n!): Factorial - traveling salesman brute force\n\nImportance:\n- Compare algorithm efficiency\n- Predict scalability\n- Make informed decisions about data structures\n- Optimize performance bottlenecks',
    tags: ['big-o', 'complexity', 'performance', 'algorithms']
  },
  {
    id: 37,
    category: 'system-design',
    difficulty: 'hard',
    question: 'Design a chat application like WhatsApp',
    answer: 'Components:\n1. User Service: Authentication, profiles\n2. Message Service: Send/receive messages\n3. Notification Service: Push notifications\n4. Media Service: Images, videos, files\n5. WebSocket Gateway: Real-time communication\n\nDatabase Design:\n- Users: id, phone, name, last_seen\n- Chats: id, type (individual/group), created_at\n- Messages: id, chat_id, sender_id, content, timestamp, message_type\n- Chat_Members: chat_id, user_id, joined_at\n\nReal-time Communication:\n- WebSocket connections for active users\n- Message queues for offline users\n- Push notifications\n\nScaling:\n- Database sharding by user_id\n- CDN for media files\n- Load balancers\n- Redis for online user presence\n- Kafka for message queuing',
    tags: ['system-design', 'chat-application', 'websockets', 'real-time']
  },
  {
    id: 38,
    category: 'database',
    difficulty: 'medium',
    question: 'What is database sharding and when would you use it?',
    answer: 'Database sharding is horizontal partitioning where data is split across multiple databases/servers.\n\nSharding Strategies:\n1. Range-based: Partition by value range (A-M, N-Z)\n2. Hash-based: Use hash function on shard key\n3. Directory-based: Lookup service maps keys to shards\n4. Geographic: Partition by location\n\nShard Key Selection:\n- High cardinality (many unique values)\n- Even distribution\n- Query-friendly (avoid cross-shard queries)\n\nAdvantages:\n- Horizontal scaling\n- Improved performance\n- Fault isolation\n\nDisadvantages:\n- Complex queries across shards\n- Rebalancing difficulty\n- Application complexity\n- Joins become expensive\n\nUse cases: Large-scale applications with massive data (social media, e-commerce)',
    tags: ['sharding', 'database', 'scaling', 'partitioning']
  },
  {
    id: 39,
    category: 'frontend',
    difficulty: 'medium',
    question: 'What are Web Workers and when would you use them?',
    answer: 'Web Workers run JavaScript in background threads, separate from the main UI thread.\n\nTypes:\n1. Dedicated Workers: One-to-one with main thread\n2. Shared Workers: Shared across multiple scripts/tabs\n3. Service Workers: Act as proxy between app and network\n\nUse Cases:\n- CPU-intensive computations\n- Image/video processing\n- Data parsing/transformation\n- Cryptographic operations\n- Real-time data processing\n\nExample:\n// main.js\nconst worker = new Worker("worker.js");\nworker.postMessage({data: largeDataSet});\nworker.onmessage = (e) => {\n  console.log(e.data.result);\n};\n\n// worker.js\nself.onmessage = (e) => {\n  const result = processLargeData(e.data.data);\n  self.postMessage({result});\n};\n\nLimitations:\n- No DOM access\n- Limited API access\n- Data transfer overhead',
    code: '// main.js\nconst worker = new Worker("worker.js");\nworker.postMessage({command: "process", data: largeArray});\nworker.onmessage = (e) => {\n  console.log("Result:", e.data.result);\n};\n\n// worker.js\nself.onmessage = (e) => {\n  if (e.data.command === "process") {\n    const result = heavyComputation(e.data.data);\n    self.postMessage({result});\n  }\n};',
    tags: ['web-workers', 'performance', 'threading', 'javascript']
  },
  {
    id: 40,
    category: 'backend',
    difficulty: 'hard',
    question: 'Explain microservices architecture vs monolithic architecture',
    answer: 'Monolithic Architecture:\n- Single deployable unit\n- Shared database\n- In-process communication\n- Technology stack uniformity\n\nPros: Simple deployment, easy debugging, good for small teams\nCons: Scaling bottlenecks, technology lock-in, single point of failure\n\nMicroservices Architecture:\n- Multiple independent services\n- Database per service\n- Network communication (HTTP/gRPC)\n- Technology diversity\n\nPros: Independent scaling, technology flexibility, fault isolation\nCons: Distributed system complexity, network latency, data consistency\n\nWhen to use Microservices:\n- Large, complex applications\n- Multiple development teams\n- Need for independent scaling\n- Different technology requirements per service\n\nChallenges:\n- Service discovery\n- Configuration management\n- Monitoring and logging\n- Data consistency (eventual consistency)\n- Testing complexity',
    tags: ['microservices', 'monolithic', 'architecture', 'distributed-systems']
  }

  // Continue adding more questions to reach 100+...
  // I'll add a few more key questions to demonstrate the pattern
];

// Utility functions
export const getCardsByCategory = (category: FlashCard['category']) => {
  return flashcards.filter(card => card.category === category);
};

export const getCardsByDifficulty = (difficulty: FlashCard['difficulty']) => {
  return flashcards.filter(card => card.difficulty === difficulty);
};

export const shuffleCards = (cards: FlashCard[]) => {
  return [...cards].sort(() => Math.random() - 0.5);
};

export const searchCards = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return flashcards.filter(card => 
    card.question.toLowerCase().includes(lowercaseQuery) ||
    card.answer.toLowerCase().includes(lowercaseQuery) ||
    card.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};