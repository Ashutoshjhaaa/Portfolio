import { Question } from './types';

export const SQL_QUESTIONS: Question[] = [
  {
    "id": "sql-01",
    "number": "01",
    "question": "What is SQL and what is it used for?",
    "difficulty": "easy",
    "section": "SQL Basics",
    "answer": {
      "simple": "SQL stands for <strong>Structured Query Language</strong>. It is the standard language for talking to relational databases. You use it to store, read, update, and delete data in tables.",
      "example": "Think of a database like an Excel spreadsheet. SQL is the set of commands you use to ask it questions: \"Show me all users from last month\" or \"Delete orders older than 1 year\".",
      "code": "-- The 4 core SQL operations (CRUD)\nSELECT * FROM users;                                         -- Read\nINSERT INTO users (name, email) VALUES ('Alice', 'a@b.com'); -- Create\nUPDATE users SET name = 'Bob' WHERE id = 1;                  -- Update\nDELETE FROM users WHERE id = 1;                              -- Delete"
    }
  },
  {
    "id": "sql-02",
    "number": "02",
    "question": "What is a relational database?",
    "difficulty": "easy",
    "section": "SQL Basics",
    "answer": {
      "simple": "A relational database stores data in <strong>tables</strong> (rows and columns), and tables can be linked together using <strong>keys</strong>. This makes it easy to avoid duplicate data and connect related information.",
      "note": "<strong>Table</strong> = grid of data. <strong>Row</strong> = one record. <strong>Column</strong> = one attribute. <strong>Primary key</strong> = unique ID. <strong>Foreign key</strong> = column pointing to another table's PK.",
      "code": "-- users table\n| id | name  | email       |\n|----|-------|-------------|\n|  1 | Alice | a@gmail.com |\n|  2 | Bob   | b@gmail.com |\n\n-- orders table linked to users via user_id\n| id | user_id | product  | amount |\n|----|---------|----------|--------|\n|  1 |       1 | Laptop   |   999  |\n|  2 |       2 | Mouse    |    29  |\n\n-- Relationship: orders.user_id → users.id"
    }
  },
  {
    "id": "sql-03",
    "number": "03",
    "question": "What is the difference between DDL, DML, DCL, and TCL?",
    "difficulty": "easy",
    "section": "SQL Basics",
    "answer": {
      "simple": "SQL commands are grouped by what they do. <strong>DDL</strong> creates/changes structure. <strong>DML</strong> works with data. <strong>DCL</strong> controls permissions. <strong>TCL</strong> manages transactions.",
      "code": "-- DDL (Data Definition Language) — structure\nCREATE TABLE users (id INT, name TEXT);\nALTER TABLE users ADD COLUMN age INT;\nDROP TABLE users;\nTRUNCATE TABLE users;           -- delete all rows, keep structure\n\n-- DML (Data Manipulation Language) — data\nSELECT * FROM users;\nINSERT INTO users VALUES (1, 'Alice');\nUPDATE users SET name = 'Bob' WHERE id = 1;\nDELETE FROM users WHERE id = 1;\n\n-- DCL (Data Control Language) — permissions\nGRANT SELECT ON users TO analyst_role;\nREVOKE INSERT ON users FROM guest_role;\n\n-- TCL (Transaction Control Language) — transactions\nBEGIN;  COMMIT;  ROLLBACK;  SAVEPOINT my_point;"
    }
  },
  {
    "id": "sql-04",
    "number": "04",
    "question": "What is the SELECT statement and how does it work?",
    "difficulty": "easy",
    "section": "SQL Basics",
    "answer": {
      "simple": "SELECT is used to retrieve data from a table. You tell it which columns you want, which table to look in, and optionally filter with WHERE. It is the most commonly used SQL command.",
      "code": "SELECT * FROM employees;                           -- all columns\nSELECT first_name, salary FROM employees;          -- specific columns\nSELECT * FROM employees WHERE salary > 50000;      -- with filter\nSELECT first_name AS name, salary AS pay FROM employees; -- aliases\nSELECT DISTINCT department FROM employees;         -- remove duplicates\nSELECT * FROM employees ORDER BY salary DESC;      -- sorted\nSELECT * FROM employees LIMIT 10;                  -- first 10 rows"
    }
  },
  {
    "id": "sql-05",
    "number": "05",
    "question": "What is the WHERE clause and what operators can you use?",
    "difficulty": "easy",
    "section": "SQL Basics",
    "answer": {
      "simple": "WHERE filters rows — only rows matching the condition are returned. You can use comparison, logical, and special operators like BETWEEN, IN, LIKE, and IS NULL.",
      "example": "Never use <code>= NULL</code> — it always returns nothing. Always use <code>IS NULL</code> or <code>IS NOT NULL</code>.",
      "code": "WHERE salary > 100                       -- greater than\nWHERE salary != 100                      -- not equal (or <>)\nWHERE dept = 'Sales' AND salary > 50000  -- both must be true\nWHERE dept = 'Sales' OR dept = 'IT'      -- either is true\nWHERE NOT dept = 'HR'                    -- negation\nWHERE salary BETWEEN 10 AND 100          -- inclusive range\nWHERE dept IN ('Sales', 'IT', 'Finance') -- any in list\nWHERE name LIKE 'A%'                     -- starts with A\nWHERE name LIKE '%son'                   -- ends with son\nWHERE name LIKE '%ar%'                   -- contains ar\nWHERE manager_id IS NULL                 -- no manager\nWHERE manager_id IS NOT NULL             -- has a manager"
    }
  },
  {
    "id": "sql-06",
    "number": "06",
    "question": "What are aggregate functions and what is GROUP BY?",
    "difficulty": "easy",
    "section": "SQL Basics",
    "answer": {
      "simple": "Aggregate functions crunch many rows into one number. <code>COUNT</code>, <code>SUM</code>, <code>AVG</code>, <code>MIN</code>, <code>MAX</code> are the main ones. <code>GROUP BY</code> groups rows so you can aggregate each group separately.",
      "code": "SELECT COUNT(*) FROM employees;           -- total rows\nSELECT COUNT(email) FROM employees;       -- non-null emails only\nSELECT SUM(salary) FROM employees;        -- total payroll\nSELECT AVG(salary) FROM employees;        -- average salary\nSELECT MIN(salary), MAX(salary) FROM employees;\n\n-- GROUP BY: aggregate per department\nSELECT department, COUNT(*) AS headcount, AVG(salary) AS avg_pay\nFROM employees\nGROUP BY department;\n\n-- Result:\n-- department | headcount | avg_pay\n-- Sales      |        12 |   55000\n-- IT         |         8 |   72000"
    }
  },
  {
    "id": "sql-07",
    "number": "07",
    "question": "What is the difference between WHERE and HAVING?",
    "difficulty": "medium",
    "section": "SQL Basics",
    "answer": {
      "simple": "WHERE filters rows BEFORE grouping. HAVING filters groups AFTER grouping. You cannot use aggregate functions in WHERE — use HAVING for that.",
      "example": "WHERE = filter rows → GROUP → HAVING = filter groups. WHERE happens early, HAVING happens late.",
      "code": "-- WHERE filters rows first, then GROUP BY runs\nSELECT department, AVG(salary) AS avg_salary\nFROM employees\nWHERE salary > 30000          -- only rows above 30k qualify\nGROUP BY department;\n\n-- HAVING filters groups after GROUP BY\nSELECT department, AVG(salary) AS avg_salary\nFROM employees\nGROUP BY department\nHAVING AVG(salary) > 60000;  -- only show high-paying departments\n\n-- Using both together\nSELECT department, COUNT(*) AS cnt, AVG(salary) AS avg_sal\nFROM employees\nWHERE status = 'active'       -- row-level filter (runs first)\nGROUP BY department\nHAVING COUNT(*) >= 5          -- group-level filter (runs after)\nORDER BY avg_sal DESC;"
    }
  },
  {
    "id": "sql-08",
    "number": "08",
    "question": "In what order does SQL execute clauses?",
    "difficulty": "easy",
    "section": "SQL Basics",
    "answer": {
      "simple": "SQL clauses are written in one order but executed differently. Understanding this explains why you can't use SELECT aliases in WHERE.",
      "code": "-- Written order:\nSELECT department, COUNT(*) AS cnt\nFROM employees\nWHERE salary > 40000\nGROUP BY department\nHAVING COUNT(*) > 3\nORDER BY cnt DESC\nLIMIT 5;\n\n-- Actual execution order:\n-- 1. FROM        — which table?\n-- 2. JOIN        — combine tables\n-- 3. WHERE       — filter rows\n-- 4. GROUP BY    — group rows\n-- 5. HAVING      — filter groups\n-- 6. SELECT      — pick columns (aliases created HERE)\n-- 7. DISTINCT    — remove duplicates\n-- 8. ORDER BY    — sort (aliases available now)\n-- 9. LIMIT       — restrict rows\n\n-- Why this matters:\n-- ❌ Wrong: WHERE annual > 500000 (alias not created yet)\n-- ✅ Right: WHERE salary * 12 > 500000"
    }
  },
  {
    "id": "sql-09",
    "number": "09",
    "question": "What is a JOIN and what are the different types?",
    "difficulty": "easy",
    "section": "JOINs (Deep Dive)",
    "answer": {
      "simple": "A JOIN combines rows from two tables based on a related column. Main types: <strong>INNER</strong> (matching only), <strong>LEFT</strong> (all left + matches), <strong>RIGHT</strong> (all right + matches), <strong>FULL OUTER</strong> (everything from both).",
      "code": "-- INNER JOIN — only rows that match in BOTH tables\nSELECT e.name, d.dept_name\nFROM employees e\nINNER JOIN departments d ON e.dept_id = d.id;\n-- Employees without a dept are EXCLUDED\n\n-- LEFT JOIN — all employees, even those without a dept\nSELECT e.name, d.dept_name\nFROM employees e\nLEFT JOIN departments d ON e.dept_id = d.id;\n-- dept_name is NULL for employees with no dept\n\n-- RIGHT JOIN — all departments, even empty ones\nSELECT e.name, d.dept_name\nFROM employees e\nRIGHT JOIN departments d ON e.dept_id = d.id;\n-- name is NULL for depts with no employees\n\n-- FULL OUTER JOIN — everything from both tables\nSELECT e.name, d.dept_name\nFROM employees e\nFULL OUTER JOIN departments d ON e.dept_id = d.id;\n-- NULLs on either side where no match"
    }
  },
  {
    "id": "sql-10",
    "number": "10",
    "question": "What is a SELF JOIN and when do you use it?",
    "difficulty": "medium",
    "section": "JOINs (Deep Dive)",
    "answer": {
      "simple": "A SELF JOIN joins a table to itself. Useful when a table has a relationship within itself — like an employees table where each row has a <code>manager_id</code> pointing to another row in the same table.",
      "code": "-- employees: id, name, manager_id (references same table)\n| id | name  | manager_id |\n|----|-------|------------|\n|  1 | Alice | NULL       |  ← CEO\n|  2 | Bob   | 1          |  ← reports to Alice\n|  3 | Carol | 1          |  ← reports to Alice\n|  4 | Dave  | 2          |  ← reports to Bob\n\n-- Self JOIN: get employee + their manager name\nSELECT\n  e.name AS employee,\n  m.name AS manager\nFROM employees e\nLEFT JOIN employees m ON e.manager_id = m.id;\n\n-- Result:\n-- employee | manager\n-- Alice    | NULL\n-- Bob      | Alice\n-- Carol    | Alice\n-- Dave     | Bob"
    }
  },
  {
    "id": "sql-11",
    "number": "11",
    "question": "What is a CROSS JOIN?",
    "difficulty": "medium",
    "section": "JOINs (Deep Dive)",
    "answer": {
      "simple": "A CROSS JOIN returns every possible combination of rows from two tables — the Cartesian product. If table A has 3 rows and table B has 4 rows, the result has 3 × 4 = 12 rows.",
      "code": "-- sizes: S, M, L (3 rows)\n-- colors: Red, Blue (2 rows)\n\nSELECT s.size, c.color\nFROM sizes s\nCROSS JOIN colors c;\n\n-- Result (3 × 2 = 6 rows):\n-- S | Red\n-- S | Blue\n-- M | Red\n-- M | Blue\n-- L | Red\n-- L | Blue\n\n-- Use case: generate all date + product combos for a report\n-- even for dates with no sales"
    }
  },
  {
    "id": "sql-12",
    "number": "12",
    "question": "JOIN vs subquery — what's the difference and when to use which?",
    "difficulty": "hard",
    "section": "JOINs (Deep Dive)",
    "answer": {
      "simple": "JOINs combine tables side-by-side and are generally faster. Subqueries nest one query inside another and are more natural when filtering on aggregate results.",
      "code": "-- Same result: employees in New York departments\n\n-- Using JOIN (usually faster, cleaner)\nSELECT e.name\nFROM employees e\nJOIN departments d ON e.dept_id = d.id\nWHERE d.city = 'New York';\n\n-- Using subquery\nSELECT name FROM employees\nWHERE dept_id IN (\n  SELECT id FROM departments WHERE city = 'New York'\n);\n\n-- Subquery shines here: salary above company average\nSELECT name, salary FROM employees\nWHERE salary > (SELECT AVG(salary) FROM employees);\n\n-- Correlated subquery: salary above their OWN department average\nSELECT name, salary FROM employees e\nWHERE salary > (\n  SELECT AVG(salary) FROM employees WHERE dept_id = e.dept_id\n);"
    }
  },
  {
    "id": "sql-13",
    "number": "13",
    "question": "What is a Primary Key?",
    "difficulty": "easy",
    "section": "Keys, Constraints & Data Integrity",
    "answer": {
      "simple": "A Primary Key is a column (or combination) that uniquely identifies every row. It must be UNIQUE and NOT NULL. Every table should have one.",
      "code": "-- Single column primary key\nCREATE TABLE users (\n  id SERIAL PRIMARY KEY,   -- auto-incrementing unique ID\n  email TEXT NOT NULL,\n  name TEXT\n);\n\n-- Composite primary key (two columns together = unique)\nCREATE TABLE order_items (\n  order_id INT,\n  product_id INT,\n  quantity INT,\n  PRIMARY KEY (order_id, product_id)\n);"
    }
  },
  {
    "id": "sql-14",
    "number": "14",
    "question": "What is a Foreign Key and how does it enforce data integrity?",
    "difficulty": "easy",
    "section": "Keys, Constraints & Data Integrity",
    "answer": {
      "simple": "A Foreign Key is a column in one table that points to the Primary Key of another table. It enforces referential integrity — you can't insert a value that doesn't exist in the referenced table.",
      "code": "CREATE TABLE departments (id SERIAL PRIMARY KEY, name TEXT);\n\nCREATE TABLE employees (\n  id SERIAL PRIMARY KEY,\n  name TEXT NOT NULL,\n  dept_id INT REFERENCES departments(id)\n    ON DELETE CASCADE   -- delete employee when dept deleted\n    -- ON DELETE SET NULL  -- set to NULL instead\n    -- ON DELETE RESTRICT  -- block deletion (default)\n);\n\n-- Test it:\nINSERT INTO employees (name, dept_id) VALUES ('Alice', 999);\n-- ❌ ERROR: dept_id 999 doesn't exist in departments"
    }
  },
  {
    "id": "sql-15",
    "number": "15",
    "question": "What are the different SQL constraints?",
    "difficulty": "easy",
    "section": "Keys, Constraints & Data Integrity",
    "answer": {
      "simple": "Constraints are rules applied to columns to control what data can go in. They automatically enforce data quality at the database level.",
      "code": "CREATE TABLE products (\n  id SERIAL PRIMARY KEY,          -- unique + not null + auto-increment\n  name TEXT NOT NULL,             -- cannot be empty/null\n  price DECIMAL(10,2) NOT NULL,\n  stock INT DEFAULT 0,            -- default value if not provided\n  sku TEXT UNIQUE,                -- no two products can share a SKU\n  category TEXT CHECK (category IN ('Electronics','Books','Clothing')),\n  discount DECIMAL CHECK (discount >= 0 AND discount <= 100)\n);\n\n-- Summary:\n-- PRIMARY KEY — unique + not null\n-- FOREIGN KEY — references another table\n-- UNIQUE      — no duplicates (nulls allowed)\n-- NOT NULL    — value must be provided\n-- CHECK       — custom condition must be true\n-- DEFAULT     — value if none provided"
    }
  },
  {
    "id": "sql-16",
    "number": "16",
    "question": "What is the difference between UNIQUE and PRIMARY KEY?",
    "difficulty": "medium",
    "section": "Keys, Constraints & Data Integrity",
    "answer": {
      "simple": "Both enforce uniqueness, but PRIMARY KEY also enforces NOT NULL and can only appear once per table. A table can have many UNIQUE constraints. UNIQUE columns can hold NULL values.",
      "code": "CREATE TABLE users (\n  id SERIAL PRIMARY KEY,       -- unique + NOT NULL, only one per table\n  email TEXT UNIQUE,           -- unique but NULL is allowed\n  phone TEXT UNIQUE,           -- another unique column\n  username TEXT UNIQUE NOT NULL -- unique + not null (but still not PK)\n);\n\n-- UNIQUE allows multiple NULLs:\nINSERT INTO users (email) VALUES (NULL);  -- ✅ OK\nINSERT INTO users (email) VALUES (NULL);  -- ✅ another NULL is fine\nINSERT INTO users (email) VALUES ('a@b.com');\nINSERT INTO users (email) VALUES ('a@b.com'); -- ❌ duplicate!\n\n-- PRIMARY KEY never allows NULL:\nINSERT INTO users (id) VALUES (NULL); -- ❌ always an error"
    }
  },
  {
    "id": "sql-17",
    "number": "17",
    "question": "What an index and how does it speed up queries?",
    "difficulty": "medium",
    "section": "Indexes & Performance",
    "answer": {
      "simple": "An index is a separate data structure built on a column. Like the index at the back of a book — instead of scanning every row (full table scan), the database jumps directly to matching rows. Speeds up SELECT but slightly slows INSERT/UPDATE/DELETE.",
      "code": "-- Without index: scans ALL rows to find the email\nSELECT * FROM users WHERE email = 'alice@gmail.com'; -- slow on large table\n\n-- Create an index on email\nCREATE INDEX idx_users_email ON users (email);\n\n-- Now it's fast — uses the index to jump to matching rows\nSELECT * FROM users WHERE email = 'alice@gmail.com'; -- fast!\n\n-- Various index types:\nCREATE INDEX idx_name ON employees (last_name);\nCREATE UNIQUE INDEX idx_email ON users (email);\nCREATE INDEX idx_multi ON orders (customer_id, order_date); -- composite\nCREATE INDEX idx_partial ON orders (status) WHERE status = 'pending'; -- partial\n\nDROP INDEX idx_name; -- remove an index"
    }
  },
  {
    "id": "sql-18",
    "number": "18",
    "question": "What is a composite index and the left prefix rule?",
    "difficulty": "hard",
    "section": "Indexes & Performance",
    "answer": {
      "simple": "A composite index covers multiple columns. The <strong>left prefix rule</strong> means the index can only be used if your query filters starting from the leftmost column. An index on (A, B, C) helps A, A+B, or A+B+C — but NOT B alone or C alone.",
      "code": "CREATE INDEX idx_dept_salary ON employees (dept_id, salary);\n\n-- ✅ These USE the index:\nSELECT * FROM employees WHERE dept_id = 5;\nSELECT * FROM employees WHERE dept_id = 5 AND salary > 50000;\nSELECT * FROM employees WHERE dept_id = 5 ORDER BY salary;\n\n-- ❌ These do NOT use the index fully:\nSELECT * FROM employees WHERE salary > 50000; -- not left prefix!\n\n-- Choose column order wisely:\n-- 1. Put equality filter columns first (=)\n-- 2. Put range filter / ORDER BY columns last\n-- 3. High cardinality (many unique values) columns first"
    }
  },
  {
    "id": "sql-19",
    "number": "19",
    "question": "What is EXPLAIN / EXPLAIN ANALYZE and how do you use it?",
    "difficulty": "hard",
    "section": "Indexes & Performance",
    "answer": {
      "simple": "EXPLAIN shows the query execution plan — how the database plans to run your query. EXPLAIN ANALYZE actually runs it and shows real timing. This is the #1 tool for diagnosing slow queries.",
      "code": "-- EXPLAIN — shows plan without running query\nEXPLAIN SELECT * FROM employees WHERE dept_id = 5;\n\n-- EXPLAIN ANALYZE — runs query AND shows actual timing\nEXPLAIN ANALYZE SELECT * FROM employees WHERE dept_id = 5;\n\n-- Sample output:\n-- Index Scan using idx_dept_id on employees (cost=0.28..8.30 rows=5)\n--   Index Cond: (dept_id = 5)\n-- Planning Time: 0.15 ms\n-- Execution Time: 0.08 ms\n\n-- Key terms:\n-- Seq Scan       = full table scan (no index — investigate!)\n-- Index Scan     = used an index ✅\n-- Index Only Scan = super fast (reads only the index, not the table)\n-- cost=X..Y      = X is startup cost, Y is total cost\n-- rows=N         = estimated rows returned"
    }
  },
  {
    "id": "sql-20",
    "number": "20",
    "question": "When should you NOT add an index?",
    "difficulty": "medium",
    "section": "Indexes & Performance",
    "answer": {
      "simple": "Indexes are not always helpful. They take disk space, slow writes, and the DB must maintain them. Sometimes a full scan is actually faster.",
      "example": "\n<strong>1. Small tables</strong> — full scan is faster for <1,000 rows.<br><br>\n<strong>2. Low cardinality</strong> — a column like <code>gender</code> (2 values) or <code>status</code> (3 values) still returns half the table — not helpful.<br><br>\n<strong>3. Heavily written tables</strong> — thousands of inserts per second? Every index slows each write.<br><br>\n<strong>4. Rarely queried columns</strong> — don't index every column \"just in case\".<br><br>\n<strong>5. SELECT-only columns</strong> — indexes help WHERE, JOIN, ORDER BY — not SELECT itself."
    }
  },
  {
    "id": "sql-21",
    "number": "21",
    "question": "What is a subquery and what are the different types?",
    "difficulty": "medium",
    "section": "Subqueries, CTEs & Views",
    "answer": {
      "simple": "A subquery is a SELECT query nested inside another query. Types: Scalar (one value), Table (many rows used in FROM), Multi-row (used with IN/ANY/ALL), and Correlated (references outer query).",
      "code": "-- Scalar subquery — returns one single value\nSELECT name, salary,\n  (SELECT AVG(salary) FROM employees) AS company_avg\nFROM employees;\n\n-- Table subquery — in FROM clause (derived table)\nSELECT dept, avg_salary FROM (\n  SELECT department AS dept, AVG(salary) AS avg_salary\n  FROM employees GROUP BY department\n) AS dept_avgs\nWHERE avg_salary > 60000;\n\n-- Multi-row with IN\nSELECT name FROM employees\nWHERE dept_id IN (SELECT id FROM departments WHERE city = 'NYC');\n\n-- Correlated subquery — runs once per row of outer query\nSELECT name, salary FROM employees e\nWHERE salary > (\n  SELECT AVG(salary) FROM employees WHERE department = e.department\n);"
    }
  },
  {
    "id": "sql-22",
    "number": "22",
    "question": "What is a CTE and why use it over a subquery?",
    "difficulty": "medium",
    "section": "Subqueries, CTEs & Views",
    "answer": {
      "simple": "A CTE (WITH clause) is a named temporary result set you can reference in the main query. It's like giving a name to a subquery — cleaner, reusable, and can be recursive.",
      "code": "-- Without CTE — hard to read\nSELECT * FROM (\n  SELECT dept, AVG(salary) AS avg_sal FROM employees GROUP BY dept\n) AS d WHERE avg_sal > 60000;\n\n-- With CTE — clean and readable\nWITH dept_averages AS (\n  SELECT dept, AVG(salary) AS avg_sal\n  FROM employees GROUP BY dept\n)\nSELECT * FROM dept_averages WHERE avg_sal > 60000;\n\n-- Multiple CTEs\nWITH\n  active_users AS (SELECT id, name FROM users WHERE status = 'active'),\n  user_orders AS (SELECT user_id, COUNT(*) AS cnt FROM orders GROUP BY user_id)\nSELECT u.name, o.cnt\nFROM active_users u\nJOIN user_orders o ON u.id = o.user_id\nWHERE o.cnt > 5;\n\n-- Recursive CTE — query org charts, trees\nWITH RECURSIVE org AS (\n  SELECT id, name, manager_id, 0 AS level\n  FROM employees WHERE manager_id IS NULL       -- start: CEO\n  UNION ALL\n  SELECT e.id, e.name, e.manager_id, o.level + 1\n  FROM employees e JOIN org o ON e.manager_id = o.id\n)\nSELECT level, name FROM org ORDER BY level;"
    }
  },
  {
    "id": "sql-23",
    "number": "23",
    "question": "What is a View and when should you use it?",
    "difficulty": "medium",
    "section": "Subqueries, CTEs & Views",
    "answer": {
      "simple": "A View is a saved SELECT query you can query like a table. It doesn't store data — the underlying SQL runs every time. Use it to simplify complex queries, hide sensitive columns, and give clean interfaces to other users.",
      "code": "-- Create a view\nCREATE VIEW active_user_summary AS\nSELECT u.id, u.name, u.email,\n  COUNT(o.id) AS order_count,\n  SUM(o.total) AS lifetime_value\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nWHERE u.status = 'active'\nGROUP BY u.id, u.name, u.email;\n\n-- Query it like a table\nSELECT * FROM active_user_summary WHERE lifetime_value > 1000;\n\n-- Update or drop\nCREATE OR REPLACE VIEW active_user_summary AS ...;\nDROP VIEW active_user_summary;"
    }
  },
  {
    "id": "sql-24",
    "number": "24",
    "question": "What are window functions and how are they different from GROUP BY?",
    "difficulty": "hard",
    "section": "Window Functions (Deep Dive)",
    "answer": {
      "simple": "Window functions perform calculations across related rows WITHOUT collapsing them (unlike GROUP BY). Each row keeps its identity while also seeing aggregate info about its \"window\" (partition).",
      "example": "GROUP BY shows only the class average. Window functions write each student's grade AND the class average on the same report card — everyone keeps their row.",
      "code": "-- GROUP BY collapses rows — you get one row per department\nSELECT department, AVG(salary) AS avg_salary\nFROM employees GROUP BY department;\n\n-- Window function keeps ALL rows + adds aggregate info per row\nSELECT\n  name, salary, department,\n  AVG(salary) OVER (PARTITION BY department) AS dept_avg,\n  salary - AVG(salary) OVER (PARTITION BY department) AS diff_from_avg\nFROM employees;\n\n-- Result (all rows kept!):\n-- Alice | 80000 | IT    | 75000 | +5000\n-- Bob   | 70000 | IT    | 75000 | -5000\n-- Carol | 60000 | Sales | 55000 | +5000\n-- Dave  | 50000 | Sales | 55000 | -5000"
    }
  },
  {
    "id": "sql-25",
    "number": "25",
    "question": "What are ROW_NUMBER, RANK, and DENSE_RANK?",
    "difficulty": "hard",
    "section": "Window Functions (Deep Dive)",
    "answer": {
      "simple": "All three assign a number to each row based on ordering. The difference is how they handle ties. ROW_NUMBER = always unique. RANK = skips numbers after ties. DENSE_RANK = never skips numbers.",
      "code": "SELECT name, salary,\n  ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num,\n  RANK()       OVER (ORDER BY salary DESC) AS rank,\n  DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rank\nFROM employees;\n\n-- salary | row_num | rank | dense_rank\n-- 90000  |       1 |    1 |          1\n-- 80000  |       2 |    2 |          2\n-- 80000  |       3 |    2 |          2  ← tie: same rank\n-- 70000  |       4 |    4 |          3  ← RANK skips 3, DENSE_RANK doesn't\n\n-- Classic interview: top 3 salaries per department\nSELECT * FROM (\n  SELECT name, salary, department,\n    DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dr\n  FROM employees\n) ranked\nWHERE dr <= 3;"
    }
  },
  {
    "id": "sql-26",
    "number": "26",
    "question": "What are LAG and LEAD window functions?",
    "difficulty": "hard",
    "section": "Window Functions (Deep Dive)",
    "answer": {
      "simple": "<code>LAG</code> accesses the value of a previous row. <code>LEAD</code> accesses the value of a next row. Perfect for month-over-month comparisons and day-over-day changes — no complex self-join needed.",
      "code": "SELECT\n  month, revenue,\n  LAG(revenue)  OVER (ORDER BY month) AS prev_month,\n  LEAD(revenue) OVER (ORDER BY month) AS next_month,\n  revenue - LAG(revenue) OVER (ORDER BY month) AS change,\n  ROUND(\n    100.0 * (revenue - LAG(revenue) OVER (ORDER BY month))\n    / LAG(revenue) OVER (ORDER BY month), 2\n  ) AS pct_change\nFROM monthly_sales;\n\n-- Result:\n-- 2024-01 | 50000 | NULL  | 60000 | NULL  | NULL\n-- 2024-02 | 60000 | 50000 | 55000 | 10000 | 20.00\n-- 2024-03 | 55000 | 60000 | NULL  | -5000 | -8.33\n\n-- LAG with offset and default:\nLAG(revenue, 2, 0)  OVER (ORDER BY month) -- 2 rows back, default 0\nLEAD(revenue, 1, 0) OVER (ORDER BY month) -- 1 row forward, default 0"
    }
  },
  {
    "id": "sql-27",
    "number": "27",
    "question": "What are FIRST_VALUE, LAST_VALUE, and NTILE?",
    "difficulty": "hard",
    "section": "Window Functions (Deep Dive)",
    "answer": {
      "simple": "<code>FIRST_VALUE</code> gets the first value in the window. <code>LAST_VALUE</code> gets the last. <code>NTILE(n)</code> divides rows into n equal buckets — like quartiles or deciles.",
      "code": "SELECT name, salary, department,\n  FIRST_VALUE(salary) OVER (\n    PARTITION BY department ORDER BY salary DESC\n  ) AS highest_in_dept,\n  LAST_VALUE(salary) OVER (\n    PARTITION BY department ORDER BY salary DESC\n    ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING\n    -- ⚠️ LAST_VALUE needs explicit frame to see all rows!\n  ) AS lowest_in_dept\nFROM employees;\n\n-- NTILE — divide into buckets (quartiles, deciles)\nSELECT name, salary,\n  NTILE(4)  OVER (ORDER BY salary) AS quartile, -- 1=bottom 25%\n  NTILE(10) OVER (ORDER BY salary) AS decile\nFROM employees;\n\n-- Find top 25% earners\nSELECT * FROM (\n  SELECT name, salary, NTILE(4) OVER (ORDER BY salary DESC) AS q\n  FROM employees\n) ranked WHERE q = 1;"
    }
  },
  {
    "id": "sql-28",
    "number": "28",
    "question": "What are ACID properties?",
    "difficulty": "medium",
    "section": "Transactions & ACID Properties",
    "answer": {
      "simple": "ACID = Atomicity, Consistency, Isolation, Durability. These four properties guarantee that database transactions are reliable — even when multiple things happen at once or the system crashes.",
      "example": "<strong>Atomicity</strong> — All or nothing. Either all steps of a transaction complete, or none do. (Bank transfer: debit AND credit both happen, or neither.)<br><br>\n<strong>Consistency</strong> — The database moves from one valid state to another. All constraints remain satisfied.<br><br>\n<strong>Isolation</strong> — Transactions don't interfere with each other. Each behaves as if it's the only one running.<br><br>\n<strong>Durability</strong> — Once committed, data is saved permanently — even if the server crashes immediately after.",
      "code": "-- Classic ACID example: bank transfer\nBEGIN;\n  UPDATE accounts SET balance = balance - 500 WHERE id = 1; -- debit\n  UPDATE accounts SET balance = balance + 500 WHERE id = 2; -- credit\nCOMMIT; -- both happen together, or neither does\n\n-- If error occurs between the two updates:\nROLLBACK; -- first update is also undone ← Atomicity!"
    }
  },
  {
    "id": "sql-29",
    "number": "29",
    "question": "What are transaction isolation levels?",
    "difficulty": "hard",
    "section": "Transactions & ACID Properties",
    "answer": {
      "simple": "Isolation levels control how visible one transaction's changes are to others running at the same time. Higher isolation = safer but slower. There are 4 standard levels.",
      "code": "-- The 4 isolation levels (weakest → strongest):\n-- READ UNCOMMITTED — can read dirty (uncommitted) data\n-- READ COMMITTED   — only reads committed data (default in most DBs)\n-- REPEATABLE READ  — same row read returns same data within a txn\n-- SERIALIZABLE     — transactions appear to run one at a time (safest)\n\n-- Anomalies prevented:\n-- Level             | Dirty | Non-repeatable | Phantom\n-- READ UNCOMMITTED  |  NO   |      NO        |   NO\n-- READ COMMITTED    |  YES  |      NO        |   NO\n-- REPEATABLE READ   |  YES  |      YES       |   NO (usually)\n-- SERIALIZABLE      |  YES  |      YES       |   YES\n\n-- Set in PostgreSQL:\nBEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;\nBEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nBEGIN TRANSACTION ISOLATION LEVEL READ COMMITTED; -- default"
    }
  },
  {
    "id": "sql-30",
    "number": "30",
    "question": "What is a SAVEPOINT?",
    "difficulty": "medium",
    "section": "Transactions & ACID Properties",
    "answer": {
      "simple": "A SAVEPOINT creates a bookmark inside a transaction that you can roll back to — without undoing the entire transaction. It's like partial undo within a bigger transaction.",
      "code": "BEGIN;\n  INSERT INTO orders (product, amount) VALUES ('Laptop', 999);\n  SAVEPOINT after_laptop;       -- bookmark here\n\n  INSERT INTO orders (product, amount) VALUES ('Phone', 599);\n  SAVEPOINT after_phone;\n\n  INSERT INTO orders (product, amount) VALUES ('Tablet', 799);\n  -- Oops, tablet is out of stock!\n\nROLLBACK TO SAVEPOINT after_phone; -- undo only the tablet\n-- Laptop and Phone inserts are still alive\n\nCOMMIT; -- saves laptop and phone"
    }
  },
  {
    "id": "sql-31",
    "number": "31",
    "question": "What is normalization? Explain 1NF, 2NF, and 3NF.",
    "difficulty": "medium",
    "section": "Normalization & Database Design",
    "answer": {
      "simple": "Normalization organizes a database to reduce redundancy and improve data integrity by splitting data across related tables. The normal forms (1NF, 2NF, 3NF) are increasingly strict rules.",
      "note": "Boyce-Codd Normal Form is stricter than 3NF. In practice, most production databases target 3NF. Sometimes denormalization (intentional redundancy) is used for performance.",
      "code": "-- UNNORMALIZED — everything in one row (bad!)\n| order_id | customer_name | product1 | product2 | city |\n-- Problems: repeating groups, duplicate customer info everywhere\n\n-- 1NF — each cell has ONE value, no repeating groups\n| order_id | customer_id | product_id |\n\n-- 2NF — no partial dependency (for composite PKs)\n-- All non-key columns depend on the ENTIRE PK, not just part of it\n\n-- 3NF — no transitive dependency\n-- Non-key columns depend ONLY on the PK, not on other non-key columns\n-- If zip_code determines city → move them to their own table\n\n-- Result: three clean tables\n-- customers(id, name, email)\n-- orders(id, customer_id, date)\n-- products(id, name, price)"
    }
  },
  {
    "id": "sql-32",
    "number": "32",
    "question": "What is denormalization and when is it used?",
    "difficulty": "medium",
    "section": "Normalization & Database Design",
    "answer": {
      "simple": "Denormalization is intentionally adding redundancy to make reads faster. Instead of joining many tables on every query, you store pre-computed or duplicate data in one place. Trade-off: faster reads, harder to keep consistent.",
      "code": "-- Normalized: need joins to get order info\nSELECT o.id, c.name, SUM(oi.price * oi.qty) AS total\nFROM orders o\nJOIN customers c ON o.customer_id = c.id\nJOIN order_items oi ON oi.order_id = o.id\nGROUP BY o.id, c.name;\n\n-- Denormalized: store customer_name and total directly\n| order_id | customer_name | order_total |\n-- No join needed for basic order display!\nSELECT order_id, customer_name, order_total FROM orders;\n\n-- When denormalization makes sense:\n-- 1. Read-heavy reporting / analytics tables\n-- 2. Data warehouses (star schema)\n-- 3. High-traffic queries too slow even with indexes\n-- 4. Caching computed values (totals, counts)\n\n-- Modern solution: Materialized Views (best of both worlds)"
    }
  },
  {
    "id": "sql-33",
    "number": "33",
    "question": "What is the difference between UNION, UNION ALL, INTERSECT, and EXCEPT?",
    "difficulty": "medium",
    "section": "Advanced SQL Concepts",
    "answer": {
      "simple": "These set operators combine results from two SELECT queries. UNION removes duplicates. UNION ALL keeps them (faster). INTERSECT returns only rows in BOTH. EXCEPT returns rows in first but NOT second.",
      "code": "-- UNION — combine, remove duplicates\nSELECT email FROM customers\nUNION\nSELECT email FROM newsletter_subscribers;\n\n-- UNION ALL — combine, keep duplicates (faster)\nSELECT email FROM customers\nUNION ALL\nSELECT email FROM newsletter_subscribers;\n\n-- INTERSECT — only rows in BOTH queries\nSELECT email FROM customers\nINTERSECT\nSELECT email FROM newsletter_subscribers;\n\n-- EXCEPT — in first but NOT in second\nSELECT email FROM customers\nEXCEPT\nSELECT email FROM newsletter_subscribers;\n\n-- Rule: both SELECT must have same number of columns and compatible types"
    }
  },
  {
    "id": "sql-34",
    "number": "34",
    "question": "What is the difference between EXISTS and IN?",
    "difficulty": "medium",
    "section": "Advanced SQL Concepts",
    "answer": {
      "simple": "Both check if related rows exist. <code>IN</code> builds a list and checks membership. <code>EXISTS</code> stops as soon as it finds ONE match — faster for large result sets. <code>NOT IN</code> with NULLs is dangerous — prefer <code>NOT EXISTS</code>.",
      "code": "-- IN — gets all matching IDs first, then checks each customer\nSELECT name FROM customers\nWHERE id IN (SELECT customer_id FROM orders WHERE total > 1000);\n\n-- EXISTS — stops at first match per row — faster on large datasets\nSELECT name FROM customers c\nWHERE EXISTS (\n  SELECT 1 FROM orders o\n  WHERE o.customer_id = c.id AND o.total > 1000\n);\n\n-- ⚠️ NOT IN trap with NULLs:\n-- If orders.customer_id has ANY NULL value, NOT IN returns NO rows!\nSELECT name FROM customers\nWHERE id NOT IN (SELECT customer_id FROM orders); -- broken if nulls exist!\n\n-- ✅ Safe alternative — NOT EXISTS:\nSELECT name FROM customers c\nWHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id);"
    }
  },
  {
    "id": "sql-35",
    "number": "35",
    "question": "What is a PIVOT / CROSSTAB query?",
    "difficulty": "hard",
    "section": "Advanced SQL Concepts",
    "answer": {
      "simple": "A PIVOT turns rows into columns. It's used in reporting to transform data from tall format (one row per value) to wide format (one column per category).",
      "code": "-- Original data (tall):     -- Goal (wide/pivot):\n-- year | quarter | revenue   -- year | Q1  | Q2  | Q3  | Q4\n-- 2024 | Q1      | 100000    -- 2024 | 100k| 120k| 110k| 130k\n-- 2024 | Q2      | 120000\n\n-- Manual PIVOT using CASE WHEN (works in all databases)\nSELECT\n  year,\n  SUM(CASE WHEN quarter = 'Q1' THEN revenue ELSE 0 END) AS Q1,\n  SUM(CASE WHEN quarter = 'Q2' THEN revenue ELSE 0 END) AS Q2,\n  SUM(CASE WHEN quarter = 'Q3' THEN revenue ELSE 0 END) AS Q3,\n  SUM(CASE WHEN quarter = 'Q4' THEN revenue ELSE 0 END) AS Q4\nFROM sales\nGROUP BY year;"
    }
  },
  {
    "id": "sql-36",
    "number": "36",
    "question": "What are stored procedures and functions?",
    "difficulty": "medium",
    "section": "Advanced SQL Concepts",
    "answer": {
      "simple": "A stored procedure is a named block of SQL saved in the database that you can call by name. A function is similar but returns a value. Both let you reuse logic, add security, and reduce network trips.",
      "code": "-- PostgreSQL function (returns a value)\nCREATE OR REPLACE FUNCTION get_employee_count(dept_name TEXT)\nRETURNS INT AS $$\n  SELECT COUNT(*)::INT FROM employees WHERE department = dept_name;\n$$ LANGUAGE sql;\n\nSELECT get_employee_count('Engineering'); -- call it\n\n-- PostgreSQL procedure (no return, can use transactions)\nCREATE OR REPLACE PROCEDURE transfer_funds(\n  from_id INT, to_id INT, amount DECIMAL\n) AS $$\nBEGIN\n  UPDATE accounts SET balance = balance - amount WHERE id = from_id;\n  UPDATE accounts SET balance = balance + amount WHERE id = to_id;\nEND;\n$$ LANGUAGE plpgsql;\n\nCALL transfer_funds(1, 2, 500.00); -- call it\n\n-- PL/pgSQL with IF/ELSE logic\nCREATE OR REPLACE FUNCTION get_bonus(salary DECIMAL)\nRETURNS DECIMAL AS $$\nBEGIN\n  IF salary > 100000 THEN RETURN salary * 0.20;\n  ELSIF salary > 60000 THEN RETURN salary * 0.15;\n  ELSE RETURN salary * 0.10;\n  END IF;\nEND;\n$$ LANGUAGE plpgsql;"
    }
  },
  {
    "id": "sql-37",
    "number": "37",
    "question": "What are triggers in SQL?",
    "difficulty": "hard",
    "section": "Advanced SQL Concepts",
    "answer": {
      "simple": "A trigger is code that automatically runs BEFORE or AFTER an INSERT, UPDATE, or DELETE. Use them for audit logging, enforcing complex rules, or automatically updating related data.",
      "code": "-- Step 1: Audit table\nCREATE TABLE employee_audit (\n  id SERIAL PRIMARY KEY,\n  employee_id INT,\n  old_salary DECIMAL, new_salary DECIMAL,\n  changed_at TIMESTAMP DEFAULT NOW(),\n  changed_by TEXT DEFAULT current_user\n);\n\n-- Step 2: Trigger function\nCREATE OR REPLACE FUNCTION log_salary_change()\nRETURNS TRIGGER AS $$\nBEGIN\n  IF OLD.salary != NEW.salary THEN\n    INSERT INTO employee_audit (employee_id, old_salary, new_salary)\n    VALUES (OLD.id, OLD.salary, NEW.salary);\n  END IF;\n  RETURN NEW;\nEND;\n$$ LANGUAGE plpgsql;\n\n-- Step 3: Attach trigger to the table\nCREATE TRIGGER salary_audit\n  AFTER UPDATE ON employees\n  FOR EACH ROW EXECUTE FUNCTION log_salary_change();\n\n-- Now every UPDATE on employees auto-logs salary changes!\nUPDATE employees SET salary = 80000 WHERE id = 1;\nSELECT * FROM employee_audit; -- audit row created automatically"
    }
  },
  {
    "id": "sql-38",
    "number": "38",
    "question": "What are COALESCE, NULLIF, and ISNULL?",
    "difficulty": "medium",
    "section": "Advanced SQL Concepts",
    "answer": {
      "simple": "<code>COALESCE</code> returns the first non-NULL value from a list. <code>NULLIF</code> returns NULL if two values are equal (avoids division by zero). <code>IFNULL</code>/<code>ISNULL</code> are database-specific shortcuts for two-value COALESCE.",
      "code": "-- COALESCE — return first non-NULL\nSELECT COALESCE(phone, mobile, email, 'No contact') AS contact\nFROM users;\n\n-- NULLIF — return NULL if equal (prevents division by zero!)\nSELECT total_sales / NULLIF(total_returns, 0) AS ratio FROM report;\n-- Returns NULL instead of ÷0 error\n\n-- Practical: fill in missing data with a default\nSELECT COALESCE(middle_name, '') AS middle FROM users;\n\n-- NULL arithmetic: any math with NULL = NULL\nSELECT 5 + NULL;     -- NULL\nSELECT NULL * 10;    -- NULL\nSELECT 'hi' || NULL; -- NULL (PostgreSQL: concat with NULL = NULL)"
    }
  },
  {
    "id": "sql-39",
    "number": "39",
    "question": "What is the CASE expression?",
    "difficulty": "easy",
    "section": "Advanced SQL Concepts",
    "answer": {
      "simple": "CASE is SQL's if-else logic. It evaluates conditions in order and returns a value when the first condition is true. Use it to create labels, categories, or conditional calculations directly in SELECT.",
      "code": "-- Simple CASE (like switch)\nSELECT name,\n  CASE status\n    WHEN 'A' THEN 'Active'\n    WHEN 'I' THEN 'Inactive'\n    ELSE 'Unknown'\n  END AS status_label\nFROM users;\n\n-- Searched CASE (like if-else)\nSELECT name, salary,\n  CASE\n    WHEN salary >= 100000 THEN 'Senior'\n    WHEN salary >= 70000  THEN 'Mid-level'\n    WHEN salary >= 40000  THEN 'Junior'\n    ELSE 'Entry'\n  END AS salary_band\nFROM employees;\n\n-- CASE in ORDER BY — custom sort order\nSELECT name, priority FROM tasks\nORDER BY CASE priority\n  WHEN 'Critical' THEN 1\n  WHEN 'High' THEN 2\n  WHEN 'Low' THEN 3\nEND;\n\n-- CASE in aggregate — conditional counts\nSELECT\n  COUNT(CASE WHEN status = 'active'   THEN 1 END) AS active_count,\n  COUNT(CASE WHEN status = 'inactive' THEN 1 END) AS inactive_count\nFROM users;"
    }
  },
  {
    "id": "sql-40",
    "number": "40",
    "question": "What is the difference between TRUNCATE, DELETE, and DROP?",
    "difficulty": "easy",
    "section": "Advanced SQL Concepts",
    "answer": {
      "simple": "DELETE removes specific rows (can have WHERE), is logged, and can be rolled back. TRUNCATE removes ALL rows instantly. DROP removes the entire table structure and all data.",
      "code": "-- DELETE — remove specific rows (or all rows slowly)\nDELETE FROM orders WHERE created_at < '2020-01-01'; -- filtered\nDELETE FROM temp_data;     -- all rows (slow on large tables)\n-- Can rollback: BEGIN; DELETE ...; ROLLBACK; ✅\n\n-- TRUNCATE — removes all rows, very fast, resets auto-increment\nTRUNCATE TABLE temp_data;\n-- In PostgreSQL, CAN be rolled back if inside a transaction!\n\n-- DROP — removes the entire table (structure + data + indexes)\nDROP TABLE temp_data;\nDROP TABLE IF EXISTS temp_data; -- no error if missing\n\n-- Summary:\n-- DELETE   = remove some rows | filterable | slower | triggers fire\n-- TRUNCATE = remove ALL rows  | no filter  | faster | no triggers\n-- DROP     = remove the table | no filter  | fastest| table is gone!"
    }
  },
  {
    "id": "sql-41",
    "number": "41",
    "question": "What makes PostgreSQL different from other databases?",
    "difficulty": "easy",
    "section": "PostgreSQL — Specific Features",
    "answer": {
      "simple": "PostgreSQL is a powerful open-source relational database known for being fully ACID-compliant, highly extensible, and supporting advanced data types — like JSON, arrays, and full-text search — built right in."
    }
  },
  {
    "id": "sql-42",
    "number": "42",
    "question": "What data types does PostgreSQL support?",
    "difficulty": "easy",
    "section": "PostgreSQL — Specific Features",
    "answer": {
      "simple": "PostgreSQL has a much richer set of data types than most databases — including JSON, arrays, UUID, network address types, and geometric types.",
      "code": "-- Numeric\nSMALLINT / INT / BIGINT          -- 2, 4, 8 byte integers\nDECIMAL(p,s) / NUMERIC           -- exact (use for money!)\nREAL / DOUBLE PRECISION          -- floating point (avoid for money)\n\n-- Auto-increment\nSERIAL / BIGSERIAL               -- integer + auto-sequence\nGENERATED ALWAYS AS IDENTITY     -- modern SQL standard\n\n-- Text\nCHAR(n)    -- fixed length, padded\nVARCHAR(n) -- variable, max n chars\nTEXT       -- unlimited (preferred in PostgreSQL!)\n\n-- Date / Time\nDATE / TIME / TIMESTAMP          -- no timezone\nTIMESTAMPTZ                      -- with timezone (USE THIS!)\nINTERVAL                         -- duration: '2 years 3 months'\n\n-- Boolean\nBOOLEAN                          -- true / false / null\n\n-- PostgreSQL special types\nUUID         -- 550e8400-e29b-41d4-a716-446655440000\nJSON / JSONB -- JSONB is binary, indexed, preferred\nARRAY        -- int[], text[], etc.\nINET / CIDR  -- IP address / network\nPOINT, LINE, POLYGON -- geometric types"
    }
  },
  {
    "id": "sql-43",
    "number": "43",
    "question": "How do you work with JSONB in PostgreSQL?",
    "difficulty": "medium",
    "section": "PostgreSQL — Specific Features",
    "answer": {
      "simple": "JSONB stores JSON in binary format — fast to query and indexable. PostgreSQL lets you store flexible JSON documents AND query them with SQL. Best of both relational and document worlds.",
      "code": "CREATE TABLE products (id SERIAL PRIMARY KEY, name TEXT, attributes JSONB);\n\nINSERT INTO products (name, attributes) VALUES\n('Laptop', '{\"brand\":\"Apple\",\"ram\":16,\"colors\":[\"silver\",\"gray\"]}'),\n('Phone',  '{\"brand\":\"Samsung\",\"ram\":8,\"colors\":[\"black\"]}');\n\n-- -> returns JSON,  ->> returns text\nSELECT attributes -> 'brand' AS brand_json;  -- \"Apple\"\nSELECT attributes ->> 'brand' AS brand_text; -- Apple\nSELECT (attributes ->> 'ram')::INT AS ram;   -- 16 (integer)\n\n-- Nested access\nSELECT attributes -> 'colors' -> 0 AS first_color; -- \"silver\"\n\n-- Filter by JSON value\nSELECT name FROM products WHERE attributes ->> 'brand' = 'Apple';\nSELECT name FROM products WHERE (attributes ->> 'ram')::INT > 12;\nSELECT name FROM products WHERE attributes ? 'colors';  -- has key?\nSELECT name FROM products WHERE attributes @> '{\"brand\":\"Apple\"}'; -- contains\n\n-- Index JSONB for performance\nCREATE INDEX idx_brand ON products ((attributes ->> 'brand'));\nCREATE INDEX idx_attrs ON products USING GIN (attributes);"
    }
  },
  {
    "id": "sql-44",
    "number": "44",
    "question": "How do arrays work in PostgreSQL?",
    "difficulty": "medium",
    "section": "PostgreSQL — Specific Features",
    "answer": {
      "simple": "PostgreSQL lets you store arrays directly in a column — like a list of tags or phone numbers — without a separate join table. Arrays can be queried, indexed, and modified with special operators.",
      "code": "CREATE TABLE posts (\n  id SERIAL PRIMARY KEY,\n  title TEXT,\n  tags TEXT[],       -- array of text\n  ratings INT[]      -- array of integers\n);\n\nINSERT INTO posts (title, tags) VALUES\n('SQL Tips', '{SQL, database, tutorial}');\n\n-- Access elements (1-indexed!)\nSELECT tags[1] FROM posts;              -- first tag: 'SQL'\nSELECT tags[1:2] FROM posts;            -- slice: first two\nSELECT array_length(tags, 1) FROM posts;\n\n-- Array operators\nSELECT * FROM posts WHERE 'SQL' = ANY(tags);          -- contains\nSELECT * FROM posts WHERE tags @> ARRAY['SQL'];       -- superset\nSELECT * FROM posts WHERE tags && ARRAY['SQL','Py'];  -- overlap\n\n-- Unnest array into rows\nSELECT id, UNNEST(tags) AS tag FROM posts;\n\n-- Aggregate into array\nSELECT user_id, ARRAY_AGG(product_id) AS products FROM orders GROUP BY user_id;\n\n-- Index for fast array search\nCREATE INDEX idx_tags ON posts USING GIN(tags);"
    }
  },
  {
    "id": "sql-45",
    "number": "45",
    "question": "What is full-text search in PostgreSQL?",
    "difficulty": "hard",
    "section": "PostgreSQL — Specific Features",
    "answer": {
      "simple": "Full-text search in PostgreSQL handles plurals, stemming, and ranking — far more powerful than LIKE. It uses <code>tsvector</code> (indexed document) and <code>tsquery</code> (search query) types.",
      "code": "-- Basic full-text search (the @@ operator means \"matches\")\nSELECT title FROM articles\nWHERE to_tsvector('english', body) @@ to_tsquery('english', 'database');\n\n-- Multi-word: & = AND, | = OR, ! = NOT\nWHERE to_tsvector('english', body) @@ to_tsquery('SQL & database');\nWHERE to_tsvector('english', body) @@ to_tsquery('SQL | NoSQL');\nWHERE to_tsvector('english', body) @@ to_tsquery('!boring & SQL');\nWHERE to_tsvector('english', body) @@ plainto_tsquery('SQL tips database');\n\n-- Rank results by relevance\nSELECT title, ts_rank(to_tsvector('english', body),\n                      to_tsquery('database')) AS rank\nFROM articles\nWHERE to_tsvector('english', body) @@ to_tsquery('database')\nORDER BY rank DESC;\n\n-- Store tsvector column for performance\nALTER TABLE articles ADD COLUMN search_vector tsvector;\nUPDATE articles SET search_vector = to_tsvector('english', title || ' ' || body);\nCREATE INDEX idx_fts ON articles USING GIN(search_vector);"
    }
  },
  {
    "id": "sql-46",
    "number": "46",
    "question": "What are sequences in PostgreSQL?",
    "difficulty": "medium",
    "section": "PostgreSQL — Specific Features",
    "answer": {
      "simple": "A sequence is a database object that generates unique numbers. It powers auto-incrementing primary keys. SERIAL is a shortcut that creates a sequence automatically.",
      "code": "-- SERIAL (old way)\nCREATE TABLE users (id SERIAL PRIMARY KEY);\n\n-- IDENTITY (modern SQL standard — preferred)\nCREATE TABLE users (\n  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY\n);\n\n-- Create a custom sequence\nCREATE SEQUENCE invoice_num_seq\n  START WITH 100000 INCREMENT BY 1 MAXVALUE 999999 CYCLE;\n\n-- Use it\nINSERT INTO invoices (number) VALUES (nextval('invoice_num_seq'));\nSELECT currval('invoice_num_seq'); -- current value in this session\nSELECT nextval('invoice_num_seq'); -- advance and get next\n\n-- Reset\nALTER SEQUENCE invoice_num_seq RESTART WITH 100000;"
    }
  },
  {
    "id": "sql-47",
    "number": "47",
    "question": "What is MVCC (Multi-Version Concurrency Control) in PostgreSQL?",
    "difficulty": "hard",
    "section": "PostgreSQL — Specific Features",
    "answer": {
      "simple": "MVCC lets multiple users read and write simultaneously without blocking each other. Instead of locking rows, PostgreSQL keeps multiple versions of each row. Readers see a consistent snapshot without waiting for writers.",
      "example": "When you UPDATE a row, PostgreSQL doesn't overwrite it — it marks the old version as expired and creates a new one. Transactions running at the same time continue seeing the old version (their snapshot). This is why reads never block writes in PostgreSQL.<br><br><strong>Consequence:</strong> Old row versions accumulate → VACUUM must clean them up.",
      "code": "-- Session 1: Long-running update\nBEGIN;\nUPDATE products SET price = price * 1.1; -- updating all prices\n\n-- Session 2 (running at the same time): reads are NOT blocked!\nSELECT * FROM products; -- reads OLD prices (consistent snapshot)\n\n-- VACUUM — cleans dead row versions\nVACUUM products;\nVACUUM ANALYZE products;   -- vacuum + update statistics\nVACUUM FULL products;      -- full rewrite (needs exclusive lock)\n\n-- Check dead tuples\nSELECT relname, n_live_tup, n_dead_tup\nFROM pg_stat_user_tables;"
    }
  },
  {
    "id": "sql-48",
    "number": "48",
    "question": "What is table partitioning in PostgreSQL?",
    "difficulty": "hard",
    "section": "PostgreSQL — Specific Features",
    "answer": {
      "simple": "Partitioning splits a large table into smaller physical pieces based on a column value. Queries that filter on the partition key only scan the relevant partition — dramatically faster for huge tables.",
      "code": "-- Partition by date range\nCREATE TABLE orders (\n  id BIGINT, order_date DATE NOT NULL,\n  customer_id INT, total DECIMAL\n) PARTITION BY RANGE (order_date);\n\nCREATE TABLE orders_2023 PARTITION OF orders\n  FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');\nCREATE TABLE orders_2024 PARTITION OF orders\n  FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');\n\n-- Query the parent — PostgreSQL routes to the right partition\nSELECT * FROM orders WHERE order_date >= '2024-01-01'; -- only scans 2024!\n\n-- Partition types:\n-- RANGE  — numeric/date ranges (by year, month)\n-- LIST   — specific values: country IN ('US', 'UK', 'EU')\n-- HASH   — distributes evenly by hash (by user_id)\n\n-- List partitioning example\nCREATE TABLE events PARTITION BY LIST (region);\nCREATE TABLE events_us PARTITION OF events FOR VALUES IN ('US', 'CA', 'MX');\nCREATE TABLE events_eu PARTITION OF events FOR VALUES IN ('DE', 'FR', 'UK');"
    }
  },
  {
    "id": "sql-49",
    "number": "49",
    "question": "What are PostgreSQL roles and permissions?",
    "difficulty": "medium",
    "section": "PostgreSQL — Specific Features",
    "answer": {
      "simple": "PostgreSQL uses roles (which can be users or groups) for access control. You GRANT permissions to roles and REVOKE them. Row Level Security (RLS) can restrict users to only their own data.",
      "code": "-- Create roles\nCREATE ROLE readonly_user LOGIN PASSWORD 'secure123';\nCREATE ROLE analyst;    -- group role (no LOGIN)\n\n-- Grant membership (like adding to a group)\nGRANT analyst TO readonly_user;\n\n-- Grant table permissions\nGRANT SELECT ON users TO readonly_user;\nGRANT SELECT, INSERT, UPDATE ON orders TO app_user;\nGRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO admin;\n\n-- Revoke\nREVOKE INSERT ON orders FROM app_user;\n\n-- Row Level Security — users only see their own data!\nALTER TABLE orders ENABLE ROW LEVEL SECURITY;\nCREATE POLICY user_own_orders ON orders\n  FOR ALL TO app_user\n  USING (customer_id = current_setting('app.user_id')::INT);"
    }
  },
  {
    "id": "sql-50",
    "number": "50",
    "question": "What are PostgreSQL extensions?",
    "difficulty": "medium",
    "section": "PostgreSQL — Specific Features",
    "answer": {
      "simple": "Extensions add extra functionality to PostgreSQL without changing the core. Install with <code>CREATE EXTENSION</code>. They add new data types, functions, operators, and index types.",
      "code": "CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";     -- UUID generation\nCREATE EXTENSION IF NOT EXISTS pg_trgm;         -- fuzzy/trigram search\nCREATE EXTENSION IF NOT EXISTS unaccent;        -- strip accents for search\nCREATE EXTENSION IF NOT EXISTS tablefunc;       -- crosstab/pivot\nCREATE EXTENSION IF NOT EXISTS pg_stat_statements; -- query performance stats\nCREATE EXTENSION IF NOT EXISTS postgis;         -- geospatial data\n\n-- uuid-ossp usage\nSELECT uuid_generate_v4(); -- random UUID\nCREATE TABLE users (id UUID DEFAULT uuid_generate_v4() PRIMARY KEY);\n\n-- pg_trgm — fuzzy search (handles typos!)\nSELECT * FROM products WHERE name % 'laptpo'; -- finds 'laptop' ✅\nSELECT * FROM products ORDER BY similarity(name, 'laptpo') DESC LIMIT 5;\nCREATE INDEX idx_trgm ON products USING GIN (name gin_trgm_ops);\n\n-- pg_stat_statements — find your slowest queries\nSELECT query, calls, mean_exec_time\nFROM pg_stat_statements ORDER BY mean_exec_time DESC LIMIT 10;"
    }
  },
  {
    "id": "sql-51",
    "number": "51",
    "question": "What is LISTEN/NOTIFY in PostgreSQL?",
    "difficulty": "hard",
    "section": "PostgreSQL — Specific Features",
    "answer": {
      "simple": "LISTEN/NOTIFY is PostgreSQL's built-in pub/sub messaging system. One session publishes a message with NOTIFY, and other sessions listening on that channel receive it instantly — great for real-time notifications without polling.",
      "code": "-- Session 1 (subscriber)\nLISTEN order_updates;\n-- ...waiting for messages...\n\n-- Session 2 (publisher)\nNOTIFY order_updates, '{\"order_id\": 42, \"status\": \"shipped\"}';\n-- Session 1 instantly receives the message!\n\n-- Common pattern: trigger + NOTIFY for real-time app updates\nCREATE OR REPLACE FUNCTION notify_order_change()\nRETURNS TRIGGER AS $$\nBEGIN\n  PERFORM pg_notify('order_updates',\n    json_build_object('id', NEW.id, 'status', NEW.status)::text);\n  RETURN NEW;\nEND;\n$$ LANGUAGE plpgsql;\n\nCREATE TRIGGER order_status_change\n  AFTER UPDATE ON orders\n  FOR EACH ROW EXECUTE FUNCTION notify_order_change();\n-- Now any app LISTEN-ing gets real-time order updates!"
    }
  },
  {
    "id": "sql-52",
    "number": "52",
    "question": "What is UPSERT (INSERT ON CONFLICT) in PostgreSQL?",
    "difficulty": "medium",
    "section": "PostgreSQL — Specific Features",
    "answer": {
      "simple": "UPSERT means \"insert or update\" — if the row doesn't exist, insert it; if it does, update it. PostgreSQL uses <code>INSERT ... ON CONFLICT</code>. Very useful when syncing data where you don't know if a record exists yet.",
      "code": "-- ON CONFLICT DO NOTHING — skip if duplicate, no error\nINSERT INTO users (email, name) VALUES ('alice@gmail.com', 'Alice')\nON CONFLICT (email) DO NOTHING;\n\n-- ON CONFLICT DO UPDATE — update if duplicate exists (true UPSERT)\nINSERT INTO users (email, name, last_login)\nVALUES ('alice@gmail.com', 'Alice', NOW())\nON CONFLICT (email) DO UPDATE SET\n  last_login = EXCLUDED.last_login, -- EXCLUDED = the row we tried to insert\n  name = EXCLUDED.name;\n\n-- Real-world: sync product inventory\nINSERT INTO inventory (product_id, stock, updated_at)\nVALUES (101, 50, NOW())\nON CONFLICT (product_id) DO UPDATE SET\n  stock = EXCLUDED.stock,\n  updated_at = EXCLUDED.updated_at\nWHERE inventory.updated_at < EXCLUDED.updated_at; -- only update if newer"
    }
  },
  {
    "id": "sql-53",
    "number": "53",
    "question": "What is pg_dump and how do you backup PostgreSQL?",
    "difficulty": "medium",
    "section": "PostgreSQL — Specific Features",
    "answer": {
      "simple": "pg_dump creates a backup of a single PostgreSQL database. pg_dumpall backs up everything. pg_restore restores from a backup. These are the standard tools for PostgreSQL backups.",
      "code": "-- pg_dump — backup one database\npg_dump mydb > backup.sql               -- SQL text format\npg_dump -Fc mydb > backup.dump          -- custom format (compressed)\npg_dump -t users -t orders mydb > partial.sql  -- specific tables\npg_dump -s mydb > schema_only.sql       -- schema only (no data)\npg_dump -a mydb > data_only.sql         -- data only (no schema)\n\n-- pg_dumpall — backup ALL databases + roles + globals\npg_dumpall > full_backup.sql\n\n-- pg_restore — restore from custom format\npg_restore -d mydb backup.dump\npg_restore -d mydb -t users backup.dump -- restore one table\n\n-- psql — restore SQL format\npsql mydb < backup.sql\n\n-- Cron job: daily backup at 2 AM\n0 2 * * * pg_dump -Fc mydb > /backups/mydb_$(date +%Y%m%d).dump"
    }
  },
  {
    "id": "sql-54",
    "number": "54",
    "question": "What are PostgreSQL schemas?",
    "difficulty": "medium",
    "section": "PostgreSQL — Specific Features",
    "answer": {
      "simple": "A schema is a namespace inside a database — like a folder containing tables, views, functions, and other objects. The default schema is <code>public</code>. Multiple schemas let you organize objects and control access per schema.",
      "code": "-- Create schemas\nCREATE SCHEMA sales;\nCREATE SCHEMA hr;\n\n-- Create tables in specific schemas\nCREATE TABLE sales.orders (...);\nCREATE TABLE hr.employees (...);\n\n-- Query with schema prefix\nSELECT * FROM sales.orders;\n\n-- Set search path (skip typing schema prefix)\nSET search_path TO sales, public;\nSELECT * FROM orders; -- finds sales.orders first\n\n-- Grant schema access to roles\nGRANT USAGE ON SCHEMA sales TO sales_team;\nGRANT ALL ON ALL TABLES IN SCHEMA sales TO sales_manager;\n\n-- List schemas\nSELECT schema_name FROM information_schema.schemata;\n\\dn  -- in psql\n\n-- Use cases:\n-- Multi-tenant apps: one schema per customer\n-- Separation: app tables vs analytics tables\n-- Security: restrict users to specific schemas"
    }
  },
  {
    "id": "sql-55",
    "number": "55",
    "question": "What is logical replication in PostgreSQL?",
    "difficulty": "hard",
    "section": "PostgreSQL — Specific Features",
    "answer": {
      "simple": "Logical replication copies changes (INSERT/UPDATE/DELETE) from one PostgreSQL server (primary) to replicas at the SQL level — flexibly, for specific tables or rows. Different from physical replication which copies raw bytes.",
      "code": "-- On PRIMARY: create a publication\nALTER SYSTEM SET wal_level = 'logical';  -- enable, then restart\nCREATE PUBLICATION my_pub FOR TABLE users, orders, products;\n-- Or: FOR ALL TABLES\n\n-- On REPLICA: create a subscription\nCREATE SUBSCRIPTION my_sub\n  CONNECTION 'host=primary-db port=5432 user=replicator dbname=mydb' \n  PUBLICATION my_pub;\n-- Replica now automatically syncs all changes!\n\n-- Physical vs Logical:\n-- Physical: byte-for-byte copy of WAL stream → exact standby/failover\n-- Logical:  row-level changes → selective tables, cross-version, CDC\n\n-- Monitor replication\nSELECT * FROM pg_stat_replication;   -- on primary\nSELECT * FROM pg_stat_subscription;  -- on replica"
    }
  },
  {
    "id": "sql-56",
    "number": "56",
    "question": "What are the most common causes of slow SQL queries?",
    "difficulty": "hard",
    "section": "Query Optimization & Performance",
    "answer": {
      "simple": "Slow queries usually have one of these root causes: missing indexes (full table scans), functions on indexed columns (breaks index use), N+1 queries, returning too many rows, or stale statistics.",
      "example": "\n<strong>1. No index on filtered columns</strong> — <code>WHERE email = 'x'</code> without an index does a full scan.<br><br>\n<strong>2. Function on indexed column</strong> — <code>WHERE UPPER(email) = 'X'</code> — index on email can't be used!<br><br>\n<strong>3. SELECT *</strong> — fetching columns you don't need means more I/O.<br><br>\n<strong>4. N+1 query problem</strong> — 1 query to get a list, then N more for each item. Use JOIN instead.<br><br>\n<strong>5. No LIMIT</strong> — fetching 1M rows when you display only 20.<br><br>\n<strong>6. Stale statistics</strong> — run ANALYZE so the planner knows the true table size.",
      "code": "-- ❌ Function breaks index use\nSELECT * FROM users WHERE LOWER(email) = 'alice@gmail.com';\n\n-- ✅ Use a functional index instead\nCREATE INDEX idx_email_lower ON users (LOWER(email));\nSELECT * FROM users WHERE LOWER(email) = 'alice@gmail.com'; -- fast!\n\n-- ❌ N+1 problem (51 queries for 50 departments)\nSELECT id FROM departments; -- then in app:\n-- for dept: SELECT * FROM employees WHERE dept_id = ?\n\n-- ✅ Fix with one JOIN\nSELECT d.name, e.name FROM departments d JOIN employees e ON e.dept_id = d.id;"
    }
  },
  {
    "id": "sql-57",
    "number": "57",
    "question": "What are covering indexes and index-only scans?",
    "difficulty": "hard",
    "section": "Query Optimization & Performance",
    "answer": {
      "simple": "A covering index includes all columns needed by a query — both the filter columns AND the select columns. This enables an \"index-only scan\" where PostgreSQL never touches the actual table. Extremely fast.",
      "code": "-- Regular index — fetches index, then table for other columns\nCREATE INDEX idx_dept ON employees (dept_id);\nSELECT name, salary FROM employees WHERE dept_id = 5;\n-- Plan: Index Scan (reads index → then fetches name/salary from table)\n\n-- Covering index — everything is in the index\nCREATE INDEX idx_dept_cover ON employees (dept_id) INCLUDE (name, salary);\n\nSELECT name, salary FROM employees WHERE dept_id = 5;\n-- Plan: Index Only Scan (never touches the table!) ⚡\n\n-- Verify in EXPLAIN\nEXPLAIN ANALYZE SELECT name, salary FROM employees WHERE dept_id = 5;\n-- Look for \"Index Only Scan\" in the output"
    }
  },
  {
    "id": "sql-58",
    "number": "58",
    "question": "How do you paginate results efficiently?",
    "difficulty": "medium",
    "section": "Query Optimization & Performance",
    "answer": {
      "simple": "LIMIT/OFFSET is simple but slow for large page numbers. Cursor-based pagination (using the last seen ID) is much faster and scales to any depth.",
      "code": "-- OFFSET pagination (simple but slow for deep pages)\nSELECT * FROM posts ORDER BY id DESC LIMIT 20 OFFSET 0;   -- page 1\nSELECT * FROM posts ORDER BY id DESC LIMIT 20 OFFSET 20;  -- page 2\nSELECT * FROM posts ORDER BY id DESC LIMIT 20 OFFSET 980; -- page 50\n-- ❌ OFFSET 980 scans 1000 rows then discards 980!\n\n-- Cursor-based / keyset pagination (fast at any depth)\n-- First page:\nSELECT * FROM posts ORDER BY id DESC LIMIT 20;\n-- → Returns IDs: 1000, 999, ..., 981\n\n-- Next page (use last seen ID as cursor):\nSELECT * FROM posts WHERE id < 981 ORDER BY id DESC LIMIT 20;\n-- → Only scans 20 rows! ✅ No wasted work regardless of depth"
    }
  },
  {
    "id": "sql-59",
    "number": "59",
    "question": "What is VACUUM and ANALYZE in PostgreSQL and why are they important?",
    "difficulty": "hard",
    "section": "Query Optimization & Performance",
    "answer": {
      "simple": "VACUUM cleans up dead row versions (from MVCC) so space can be reused. ANALYZE updates statistics the query planner uses to make decisions. Without these, queries slow down and tables grow without limit.",
      "code": "-- VACUUM — clean dead tuples, reclaim space\nVACUUM users;              -- standard (non-blocking)\nVACUUM FULL users;         -- full rewrite (needs exclusive lock!)\nVACUUM ANALYZE users;      -- vacuum + update statistics\n\n-- ANALYZE — update query planner statistics\nANALYZE;                   -- all tables\nANALYZE users;             -- specific table\n\n-- Check table health\nSELECT relname, n_live_tup, n_dead_tup,\n  ROUND(100.0 * n_dead_tup / NULLIF(n_live_tup + n_dead_tup, 0), 1) AS dead_pct,\n  last_autovacuum, last_autoanalyze\nFROM pg_stat_user_tables ORDER BY dead_pct DESC NULLS LAST;\n\n-- Tune autovacuum for high-write tables\nALTER TABLE high_write_table SET (\n  autovacuum_vacuum_scale_factor = 0.01,   -- vacuum when 1% rows dead\n  autovacuum_analyze_scale_factor = 0.005  -- analyze when 0.5% change\n);"
    }
  },
  {
    "id": "sql-60",
    "number": "60",
    "question": "How do you monitor slow queries in PostgreSQL?",
    "difficulty": "hard",
    "section": "Query Optimization & Performance",
    "answer": {
      "simple": "Use <code>pg_stat_statements</code> to track query performance, <code>pg_stat_activity</code> to see running queries, and <code>log_min_duration_statement</code> to log slow queries to the log file.",
      "code": "-- Enable slow query logging (postgresql.conf):\n-- log_min_duration_statement = 1000  (log queries > 1 second)\n\n-- pg_stat_statements — top slow queries\n-- First: CREATE EXTENSION pg_stat_statements;\nSELECT left(query, 80) AS short_query, calls,\n  ROUND(mean_exec_time::numeric, 0) AS avg_ms,\n  ROUND(max_exec_time::numeric, 0) AS max_ms\nFROM pg_stat_statements\nORDER BY mean_exec_time DESC LIMIT 10;\n\n-- pg_stat_activity — currently running queries\nSELECT pid, usename, state, NOW() - query_start AS duration,\n  left(query, 100) AS short_query\nFROM pg_stat_activity\nWHERE state != 'idle' ORDER BY duration DESC NULLS LAST;\n\n-- Kill a long-running query\nSELECT pg_cancel_backend(pid);    -- graceful cancel\nSELECT pg_terminate_backend(pid); -- force kill\n\n-- Reset stats\nSELECT pg_stat_statements_reset();"
    }
  },
  {
    "id": "sql-61",
    "number": "61",
    "question": "How do you find duplicate rows in a table?",
    "difficulty": "medium",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Use GROUP BY with HAVING COUNT(*) > 1 to find duplicated values. Join back to get full rows. Use ROW_NUMBER to delete duplicates while keeping one.",
      "code": "-- Find which emails appear more than once\nSELECT email, COUNT(*) AS count FROM users\nGROUP BY email HAVING COUNT(*) > 1;\n\n-- Get ALL duplicate rows (with their IDs)\nSELECT * FROM users\nWHERE email IN (\n  SELECT email FROM users GROUP BY email HAVING COUNT(*) > 1\n)\nORDER BY email;\n\n-- Delete duplicates, keep the one with lowest ID\nDELETE FROM users WHERE id NOT IN (\n  SELECT MIN(id) FROM users GROUP BY email\n);\n\n-- PostgreSQL elegant way (ROW_NUMBER):\nDELETE FROM users WHERE id IN (\n  SELECT id FROM (\n    SELECT id, ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS rn\n    FROM users\n  ) t WHERE rn > 1  -- delete all but first occurrence\n);"
    }
  },
  {
    "id": "sql-62",
    "number": "62",
    "question": "How do you find the second (or Nth) highest salary?",
    "difficulty": "medium",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "A classic SQL interview question with multiple solutions. DENSE_RANK is the most flexible — just change the number to get any Nth salary.",
      "code": "-- Method 1: DENSE_RANK (best — works for any N)\nSELECT salary FROM (\n  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk\n  FROM employees\n) ranked WHERE rnk = 2; -- change to 3 for 3rd highest\n\n-- Method 2: Subquery (classic)\nSELECT MAX(salary) FROM employees\nWHERE salary < (SELECT MAX(salary) FROM employees);\n\n-- Method 3: LIMIT + OFFSET\nSELECT DISTINCT salary FROM employees\nORDER BY salary DESC LIMIT 1 OFFSET 1; -- skip 1, take 1\n\n-- Get employees WITH the 2nd highest salary\nSELECT name, salary FROM employees\nWHERE salary = (\n  SELECT salary FROM (\n    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk\n    FROM employees\n  ) r WHERE rnk = 2\n);"
    }
  },
  {
    "id": "sql-63",
    "number": "63",
    "question": "How do you find employees who earn more than their manager?",
    "difficulty": "medium",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Use a self-join — join the employees table to itself. One alias for the employee, another for the manager. Compare their salaries.",
      "code": "-- employees: id, name, salary, manager_id\nSELECT\n  e.name AS employee_name,\n  e.salary AS employee_salary,\n  m.name AS manager_name,\n  m.salary AS manager_salary\nFROM employees e\nJOIN employees m ON e.manager_id = m.id  -- self join!\nWHERE e.salary > m.salary;               -- employee earns more\n\n-- Result:\n-- employee_name | emp_salary | manager_name | mgr_salary\n-- Dave          |      95000 | Bob          |      80000"
    }
  },
  {
    "id": "sql-64",
    "number": "64",
    "question": "How do you get the top N products per category?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "\"Top N per group\" is one of the most common SQL interview questions. Use DENSE_RANK() with PARTITION BY to rank within each group, then filter on rank.",
      "code": "-- Get top 3 products by revenue PER category\nSELECT category, name, revenue, rank FROM (\n  SELECT\n    category, name, revenue,\n    DENSE_RANK() OVER (\n      PARTITION BY category       -- rank within each category\n      ORDER BY revenue DESC       -- highest revenue = rank 1\n    ) AS rank\n  FROM products\n) ranked\nWHERE rank <= 3\nORDER BY category, rank;\n\n-- Result:\n-- Electronics | Laptop Pro   | 50000 | 1\n-- Electronics | Smartphone X | 40000 | 2\n-- Electronics | Tablet S     | 30000 | 3\n-- Books       | SQL Mastery  | 10000 | 1\n-- Books       | Python Guide |  8000 | 2"
    }
  },
  {
    "id": "sql-65",
    "number": "65",
    "question": "How do you calculate a running total / cumulative sum?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Use SUM() as a window function with ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW. This adds up all values from the beginning up to the current row.",
      "code": "SELECT\n  date,\n  amount AS daily_sales,\n  SUM(amount) OVER (ORDER BY date) AS running_total,\n  -- Explicit frame (same result, more readable):\n  SUM(amount) OVER (\n    ORDER BY date\n    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW\n  ) AS running_total_v2\nFROM daily_sales;\n\n-- Result:\n-- 2024-01 | 10000 | 10000\n-- 2024-02 | 15000 | 25000\n-- 2024-03 | 12000 | 37000\n\n-- Running total within a partition (per category)\nSELECT category, month, revenue,\n  SUM(revenue) OVER (PARTITION BY category ORDER BY month) AS cat_running_total\nFROM sales;"
    }
  },
  {
    "id": "sql-66",
    "number": "66",
    "question": "How do you find users who have never placed an order?",
    "difficulty": "medium",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Three approaches: LEFT JOIN + IS NULL (most common), NOT EXISTS (most efficient), or NOT IN (watch out for NULLs). All find users with no matching orders.",
      "code": "-- Method 1: LEFT JOIN + IS NULL\nSELECT u.id, u.name\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nWHERE o.id IS NULL; -- no order row was matched → user has no orders\n\n-- Method 2: NOT EXISTS (most readable and efficient)\nSELECT id, name FROM users u\nWHERE NOT EXISTS (\n  SELECT 1 FROM orders o WHERE o.user_id = u.id\n);\n\n-- Method 3: NOT IN (⚠️ breaks if orders.user_id has NULLs!)\nSELECT id, name FROM users\nWHERE id NOT IN (\n  SELECT DISTINCT user_id FROM orders WHERE user_id IS NOT NULL\n);"
    }
  },
  {
    "id": "sql-67",
    "number": "67",
    "question": "How do you solve the gaps and islands problem?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Gaps and islands means finding consecutive sequences (islands) and breaks between them (gaps). The trick: subtract ROW_NUMBER from the ordered value — consecutive values always get the same group number.",
      "code": "-- User was active: Jan 1-3, then gap, then Jan 7-8\n-- active_days: user_id, date\n\nWITH numbered AS (\n  SELECT date,\n    date - ROW_NUMBER() OVER (ORDER BY date) * INTERVAL '1 day' AS grp\n    -- Consecutive dates get the SAME grp value (the \"island\")\n  FROM active_days WHERE user_id = 1\n)\nSELECT\n  MIN(date) AS island_start,\n  MAX(date) AS island_end,\n  COUNT(*) AS days_in_island\nFROM numbered\nGROUP BY grp ORDER BY island_start;\n\n-- Result:\n-- island_start | island_end  | days\n-- 2024-01-01   | 2024-01-03  | 3   ← first island\n-- 2024-01-07   | 2024-01-08  | 2   ← second island after gap"
    }
  },
  {
    "id": "sql-68",
    "number": "68",
    "question": "How do you calculate a moving average?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Use AVG() as a window function with a ROWS BETWEEN frame to define a sliding window. A 7-day moving average looks at the current day plus 6 days before it.",
      "code": "SELECT\n  date, revenue,\n  ROUND(AVG(revenue) OVER (\n    ORDER BY date\n    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW  -- 7-day window\n  ), 2) AS moving_avg_7d,\n  ROUND(AVG(revenue) OVER (\n    ORDER BY date\n    ROWS BETWEEN 29 PRECEDING AND CURRENT ROW -- 30-day window\n  ), 2) AS moving_avg_30d\nFROM daily_revenue;\n\n-- Result:\n-- date     | revenue | 7d_avg  | 30d_avg\n-- 2024-01  |   10000 |   10000 |   10000  (only 1 day)\n-- 2024-07  |   12000 |   11000 |   10500  (7 days of data)\n-- 2024-31  |   15000 |   13000 |   12500  (full 30 days)"
    }
  },
  {
    "id": "sql-69",
    "number": "69",
    "question": "How do you find the median value in SQL?",
    "difficulty": "medium",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "There's no standard SQL MEDIAN function. PostgreSQL has <code>PERCENTILE_CONT(0.5)</code> for the exact median and <code>PERCENTILE_DISC(0.5)</code> which returns an actual data value.",
      "code": "-- PostgreSQL ordered-set aggregate functions\nSELECT\n  PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY salary) AS median_salary,\n  -- Continuous: interpolates between two middle values if even count\n  PERCENTILE_DISC(0.5) WITHIN GROUP (ORDER BY salary) AS median_disc,\n  -- Discrete: picks the actual middle value from the data\n  PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY salary) AS q1,\n  PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY salary) AS q3\nFROM employees;\n\n-- Portable way (no PostgreSQL-specific functions):\nWITH ranked AS (\n  SELECT salary,\n    ROW_NUMBER() OVER (ORDER BY salary) AS rn,\n    COUNT(*) OVER () AS total\n  FROM employees\n)\nSELECT AVG(salary) AS median FROM ranked\nWHERE rn IN (FLOOR((total + 1) / 2.0), CEIL((total + 1) / 2.0));"
    }
  },
  {
    "id": "sql-70",
    "number": "70",
    "question": "How do you find customers who bought ALL products in a category?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "This is \"relational division\" — finding customers whose purchase set contains ALL products in a set. Count how many target products each customer bought, keep those who bought all of them.",
      "code": "-- Find customers who bought ALL Electronics products\nWITH electronics AS (\n  SELECT id FROM products WHERE category = 'Electronics'\n),\ncustomer_electronics AS (\n  SELECT o.customer_id, COUNT(DISTINCT o.product_id) AS bought_count\n  FROM orders o JOIN electronics e ON o.product_id = e.id\n  GROUP BY o.customer_id\n)\nSELECT customer_id FROM customer_electronics\nWHERE bought_count = (SELECT COUNT(*) FROM electronics);\n\n-- Alternative with NOT EXISTS (relational division):\nSELECT DISTINCT customer_id FROM orders o1\nWHERE NOT EXISTS (\n  SELECT id FROM products WHERE category = 'Electronics'\n  EXCEPT\n  SELECT product_id FROM orders o2 WHERE o2.customer_id = o1.customer_id\n);\n-- \"No electronics product that this customer hasn't bought\""
    }
  },
  {
    "id": "sql-71",
    "number": "71",
    "question": "How do you detect missing numbers in a sequence?",
    "difficulty": "medium",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Generate all expected numbers in the range, then LEFT JOIN to your table. Where the join produces NULL, you found a gap.",
      "code": "-- invoices: 1, 2, 4, 5, 8 (missing: 3, 6, 7)\n\n-- PostgreSQL: use generate_series to create all expected numbers\nSELECT gs.num AS missing_number\nFROM generate_series(\n  (SELECT MIN(invoice_number) FROM invoices),\n  (SELECT MAX(invoice_number) FROM invoices)\n) AS gs(num)\nLEFT JOIN invoices i ON gs.num = i.invoice_number\nWHERE i.invoice_number IS NULL;  -- no match = gap!\n\n-- Result: 3, 6, 7\n\n-- Alternative using LAG:\nSELECT invoice_number,\n  LAG(invoice_number) OVER (ORDER BY invoice_number) AS prev,\n  invoice_number - LAG(invoice_number) OVER (ORDER BY invoice_number) - 1 AS gap_size\nFROM invoices;"
    }
  },
  {
    "id": "sql-72",
    "number": "72",
    "question": "How do you efficiently insert or update millions of rows?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Inserting one row at a time is extremely slow for bulk operations. Use batch inserts, the COPY command, or staging tables for high-performance bulk loading.",
      "code": "-- ❌ Slow: one INSERT per row (repeat 1M times = very slow)\nINSERT INTO users VALUES (1, 'Alice');\n\n-- ✅ Fast: multi-row INSERT batch (one round trip)\nINSERT INTO users (id, name) VALUES\n  (1, 'Alice'), (2, 'Bob'), (3, 'Carol'), (4, 'Dave');\n\n-- ✅ Fastest: PostgreSQL COPY (loads from file at millions/sec)\nCOPY users (id, name, email) FROM '/data/users.csv' CSV HEADER;\n\n-- COPY to export\nCOPY (SELECT * FROM users WHERE status = 'active') TO '/tmp/active.csv' CSV HEADER;\n\n-- Bulk update via staging table\nCREATE TEMP TABLE users_staging (LIKE users);\nCOPY users_staging FROM '/data/updates.csv' CSV HEADER;\n\n-- Set-based UPDATE (much faster than row-by-row)\nUPDATE users u SET name = s.name, email = s.email\nFROM users_staging s WHERE u.id = s.id;\n\n-- INSERT new rows only\nINSERT INTO users SELECT * FROM users_staging s\nWHERE NOT EXISTS (SELECT 1 FROM users u WHERE u.id = s.id);"
    }
  },
  {
    "id": "sql-73",
    "number": "73",
    "question": "What is the RETURNING clause in PostgreSQL?",
    "difficulty": "medium",
    "section": "PostgreSQL — Specific Features",
    "answer": {
      "simple": "RETURNING lets you get the modified rows back from an INSERT, UPDATE, or DELETE — without a separate SELECT. Saves a round trip and avoids race conditions.",
      "code": "-- INSERT: get the auto-generated ID back\nINSERT INTO users (name, email) VALUES ('Alice', 'alice@gmail.com')\nRETURNING id, created_at;\n-- No separate SELECT needed!\n\n-- UPDATE: see what changed\nUPDATE employees SET salary = salary * 1.10\nWHERE department = 'Engineering'\nRETURNING id, name, salary AS new_salary;\n\n-- DELETE: get what was deleted (for audit logging)\nDELETE FROM sessions WHERE expires_at < NOW()\nRETURNING id, user_id, created_at;\n\n-- Use with CTE for complex operations\nWITH deleted AS (\n  DELETE FROM orders WHERE status = 'cancelled' RETURNING *\n)\nINSERT INTO order_archive SELECT * FROM deleted;\n-- Atomically move cancelled orders to archive!"
    }
  },
  {
    "id": "sql-74",
    "number": "74",
    "question": "What are string functions in SQL?",
    "difficulty": "medium",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "SQL has many built-in functions for working with text — changing case, finding substrings, replacing text, measuring length, and combining strings.",
      "code": "SELECT UPPER('hello');                      -- 'HELLO'\nSELECT LOWER('WORLD');                      -- 'world'\nSELECT LENGTH('hello');                     -- 5\nSELECT TRIM('  hello  ');                   -- 'hello'\nSELECT SUBSTRING('hello world', 7);         -- 'world'\nSELECT SUBSTRING('hello world', 1, 5);      -- 'hello'\nSELECT REPLACE('hello world', 'world', 'SQL'); -- 'hello SQL'\nSELECT CONCAT('hello', ' ', 'world');       -- 'hello world'\nSELECT POSITION('world' IN 'hello world'); -- 7\n\n-- PostgreSQL extras\nSELECT LEFT('hello world', 5);    -- 'hello'\nSELECT RIGHT('hello world', 5);   -- 'world'\nSELECT REVERSE('hello');          -- 'olleh'\nSELECT REPEAT('ab', 3);           -- 'ababab'\nSELECT LPAD('42', 5, '0');         -- '00042'\nSELECT SPLIT_PART('a,b,c', ',', 2); -- 'b'\nSELECT STRING_AGG(name, ', ') FROM users; -- 'Alice, Bob, Carol'"
    }
  },
  {
    "id": "sql-75",
    "number": "75",
    "question": "What are date and time functions in SQL?",
    "difficulty": "easy",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Date and time functions let you work with timestamps — getting current time, extracting parts (year, month, day), adding/subtracting intervals, and formatting output.",
      "code": "-- Current date/time\nSELECT NOW();               -- 2024-01-15 14:30:00+00\nSELECT CURRENT_DATE;        -- 2024-01-15\nSELECT CURRENT_TIME;        -- 14:30:00+00\n\n-- Extract parts\nSELECT EXTRACT(YEAR FROM NOW());   -- 2024\nSELECT EXTRACT(MONTH FROM NOW());  -- 1\nSELECT EXTRACT(DOW FROM NOW());    -- 1 (0=Sunday, 1=Monday)\nSELECT DATE_PART('hour', NOW());   -- 14\n\n-- Truncate (round down to nearest unit)\nSELECT DATE_TRUNC('month', NOW()); -- 2024-01-01 00:00:00\nSELECT DATE_TRUNC('week',  NOW()); -- start of current week\n\n-- Arithmetic with intervals\nSELECT NOW() + INTERVAL '7 days';  -- 7 days from now\nSELECT NOW() - INTERVAL '1 month'; -- 1 month ago\nSELECT AGE(NOW(), '1990-01-15');    -- age calculation\n\n-- Format\nSELECT TO_CHAR(NOW(), 'YYYY-MM-DD');       -- '2024-01-15'\nSELECT TO_CHAR(NOW(), 'Month DD, YYYY');   -- 'January 15, 2024'\nSELECT TO_CHAR(salary, '$999,999.00');     -- format numbers too"
    }
  },
  {
    "id": "sql-76",
    "number": "76",
    "question": "What is the difference between CHAR, VARCHAR, and TEXT?",
    "difficulty": "easy",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "CHAR is fixed-length (padded with spaces). VARCHAR has a maximum length. TEXT is unlimited. In PostgreSQL, TEXT is usually the best choice — no performance difference, no need to pick a max length upfront.",
      "code": "CHAR(10)    -- 'Alice' stored as 'Alice     ' (padded to 10!)\n            -- Good for fixed codes: country codes, state abbreviations\n\nVARCHAR(100) -- 'Alice' stored as 'Alice' (no padding)\n             -- Error if you store more than 100 characters\n\nTEXT        -- 'Alice' stored as 'Alice'\n            -- No maximum — grows as needed\n            -- In PostgreSQL: identical performance to VARCHAR ✅\n\n-- PostgreSQL recommendation: use TEXT everywhere\n-- Add CHECK constraint if you need a limit:\nname TEXT CHECK (LENGTH(name) <= 100)\n\n-- CHAR comparison trims spaces automatically:\nSELECT 'hello   ' = 'hello'; -- TRUE in CHAR columns"
    }
  },
  {
    "id": "sql-77",
    "number": "77",
    "question": "What are range types in PostgreSQL?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Range types store a range of values (like \"from Monday to Friday\") as a single column. PostgreSQL has special operators to check overlaps, containment, and adjacency — great for scheduling and availability.",
      "code": "-- Built-in range types\nINT4RANGE   -- integer range: [1, 10]\nDATERANGE   -- date range: [2024-01-01, 2024-12-31)\nTSTZRANGE   -- timestamp range with timezone\n\n-- Room booking system\nCREATE TABLE bookings (\n  id SERIAL PRIMARY KEY,\n  room_id INT,\n  reserved TSTZRANGE  -- when the room is booked\n);\n\nINSERT INTO bookings (room_id, reserved)\nVALUES (101, '[2024-01-15 14:00, 2024-01-15 16:00)');\n-- [ = inclusive, ) = exclusive\n\n-- Check if a time is within a booking\nSELECT * FROM bookings WHERE reserved @> NOW(); -- @> = \"contains\"\n\n-- Find overlapping bookings\nSELECT * FROM bookings\nWHERE reserved && '[2024-01-15 13:00, 2024-01-15 15:00)'; -- && = overlap\n\n-- EXCLUDE constraint: prevent double-booking!\nCREATE TABLE bookings (\n  room_id INT, reserved TSTZRANGE,\n  EXCLUDE USING GIST (room_id WITH =, reserved WITH &&)\n  -- Two rows conflict if same room AND periods overlap\n);"
    }
  },
  {
    "id": "sql-78",
    "number": "78",
    "question": "What is the WAL (Write-Ahead Log) in PostgreSQL?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "WAL is PostgreSQL's transaction journal. Every change is written to the WAL before it's applied to the actual data files. If the server crashes, PostgreSQL replays the WAL to recover. WAL is also the foundation for replication.",
      "example": "\n<strong>Write:</strong> UPDATE a row → PostgreSQL writes a WAL record first, then modifies data in memory.<br><br>\n<strong>Crash recovery:</strong> On restart, PostgreSQL re-applies any changes from the WAL that didn't make it to disk. Durability guaranteed!<br><br>\n<strong>Replication:</strong> Standby servers receive the WAL stream and apply it — staying in sync with the primary in real time.\n",
      "code": "-- WAL levels (postgresql.conf):\n-- minimal  — crash recovery only\n-- replica  — + streaming replication\n-- logical  — + logical replication (decode to SQL events)\n\n-- Configure WAL\nwal_level = logical\nmax_wal_size = 1GB\nmin_wal_size = 80MB\n\n-- Current WAL position\nSELECT pg_current_wal_lsn();\nSELECT pg_walfile_name(pg_current_wal_lsn()); -- current WAL filename"
    }
  },
  {
    "id": "sql-79",
    "number": "79",
    "question": "What is the GENERATE_SERIES function in PostgreSQL?",
    "difficulty": "medium",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "<code>generate_series</code> produces a sequence of numbers or timestamps. Extremely useful for creating date ranges, filling gaps, generating test data, and building calendar reports without a calendar table.",
      "code": "SELECT generate_series(1, 5);          -- 1, 2, 3, 4, 5\nSELECT generate_series(0, 10, 2);      -- 0, 2, 4, 6, 8, 10 (step 2)\n\n-- Generate monthly dates\nSELECT generate_series(\n  '2024-01-01'::DATE, '2024-12-31'::DATE, '1 month'::INTERVAL\n) AS month;\n-- Returns: Jan 1, Feb 1, ..., Dec 1\n\n-- Find days with no sales (gaps in data)\nSELECT d::DATE AS date\nFROM generate_series('2024-01-01', '2024-12-31', '1 day'::INTERVAL) AS d\nLEFT JOIN daily_sales ON daily_sales.date = d::DATE\nWHERE daily_sales.date IS NULL;\n\n-- Generate 1000 test rows\nINSERT INTO products (name, price)\nSELECT 'Product ' || gs, ROUND((RANDOM() * 1000)::NUMERIC, 2)\nFROM generate_series(1, 1000) AS gs;\n\n-- Hour-by-hour report (show 0 for hours with no orders)\nSELECT hour, COALESCE(order_count, 0) AS orders\nFROM generate_series(0, 23) AS hour\nLEFT JOIN (\n  SELECT EXTRACT(HOUR FROM created_at) AS h, COUNT(*) AS order_count\n  FROM orders WHERE DATE(created_at) = CURRENT_DATE GROUP BY h\n) daily ON hour = daily.h;"
    }
  },
  {
    "id": "sql-80",
    "number": "80",
    "question": "What is advisory locking in PostgreSQL?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Advisory locks are application-level locks you manage manually. PostgreSQL doesn't apply them automatically — you call functions to acquire and release them. Perfect for ensuring only one process runs a job at a time across multiple servers.",
      "code": "-- Try to get lock (returns true if got it, false if busy)\nSELECT pg_try_advisory_lock(12345);\n\n-- Pattern: distributed job lock\nDO $$\nBEGIN\n  IF pg_try_advisory_lock(42) THEN\n    -- Got the lock! Run the job\n    PERFORM process_pending_emails();\n    PERFORM pg_advisory_unlock(42);\n  ELSE\n    RAISE NOTICE 'Job already running on another server, skipping';\n  END IF;\nEND;\n$$;\n\n-- Transaction-level lock (auto-released on COMMIT/ROLLBACK)\nSELECT pg_try_advisory_xact_lock(42);\n\n-- Named locks using hashtext\nSELECT pg_try_advisory_lock(hashtext('process_invoices'));\n\n-- Check who holds advisory locks\nSELECT * FROM pg_locks WHERE locktype = 'advisory';"
    }
  },
  {
    "id": "sql-81",
    "number": "81",
    "question": "What is locking and how do you handle deadlocks?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Locks prevent two transactions from modifying the same data simultaneously. A deadlock happens when Transaction A waits for B while B waits for A — both stuck forever. PostgreSQL detects deadlocks and kills one transaction automatically.",
      "code": "-- Explicit row locking\nBEGIN;\nSELECT * FROM accounts WHERE id = 1 FOR UPDATE; -- lock this row\n-- Other transactions trying FOR UPDATE on id=1 will wait\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nCOMMIT; -- lock released\n\n-- FOR UPDATE SKIP LOCKED — great for job queues!\nSELECT id, task FROM job_queue\nWHERE status = 'pending'\nORDER BY created_at LIMIT 1\nFOR UPDATE SKIP LOCKED; -- skip any row another worker has locked\n\n-- Deadlock example:\n-- Txn A: locks row 1, then tries to lock row 2 → waits for Txn B\n-- Txn B: locks row 2, then tries to lock row 1 → waits for Txn A\n-- DEADLOCK! PostgreSQL kills one: \"ERROR: deadlock detected\"\n\n-- ✅ Prevention: always lock rows in the SAME order\n-- Both transactions: lock id=1 first, then id=2\n\n-- Check waiting locks\nSELECT pid, locktype, mode, granted\nFROM pg_locks WHERE NOT granted;"
    }
  },
  {
    "id": "sql-82",
    "number": "82",
    "question": "How do you handle hierarchical data in SQL?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Hierarchical data (org charts, categories, file systems) can be stored several ways. Adjacency list (parent_id column) is simplest. Closure table is fastest for reads. PostgreSQL's ltree extension makes tree queries elegant.",
      "code": "-- Adjacency list (simple, most common)\n-- categories: id, name, parent_id\n-- Navigate with recursive CTE (see Q22)\n\n-- PostgreSQL ltree extension (most elegant)\nCREATE EXTENSION ltree;\nCREATE TABLE categories (id SERIAL, name TEXT, path LTREE);\n\nINSERT INTO categories VALUES\n(1, 'Electronics', 'Electronics'),\n(2, 'Phones', 'Electronics.Phones'),\n(3, 'iPhones', 'Electronics.Phones.iPhones');\n\n-- Find all descendants\nSELECT * FROM categories WHERE path <@ 'Electronics.Phones';\n-- Find ancestors\nSELECT * FROM categories WHERE path @> 'Electronics.Phones.iPhones';\n-- Create index\nCREATE INDEX idx_path ON categories USING GIST(path);\n\n-- Closure table (fast reads)\nCREATE TABLE category_closure (ancestor_id INT, descendant_id INT, depth INT);\n-- Get all subcategories in one query (no recursion):\nSELECT c.* FROM categories c\nJOIN category_closure cl ON c.id = cl.descendant_id\nWHERE cl.ancestor_id = 10;"
    }
  },
  {
    "id": "sql-83",
    "number": "83",
    "question": "What are one-to-one, one-to-many, and many-to-many relationships?",
    "difficulty": "medium",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Cardinality describes \"how many\" of each side in a relationship. These three types cover all real-world data relationships.",
      "example": "\n<strong>One-to-One (1:1)</strong> — Each user has exactly one profile. FK + UNIQUE constraint.<br><br>\n<strong>One-to-Many (1:N)</strong> — One customer can have many orders. Most common type. Orders table has customer_id FK.<br><br>\n<strong>Many-to-Many (M:N)</strong> — Students take many courses, each course has many students. Requires a junction table with two FKs.\n",
      "code": "-- One-to-Many: customer has many orders\nCREATE TABLE customers (id SERIAL PRIMARY KEY, name TEXT);\nCREATE TABLE orders (id SERIAL PRIMARY KEY, customer_id INT REFERENCES customers(id));\n\n-- Many-to-Many: students ↔ courses via enrollment junction table\nCREATE TABLE students (id SERIAL PRIMARY KEY, name TEXT);\nCREATE TABLE courses  (id SERIAL PRIMARY KEY, title TEXT);\nCREATE TABLE enrollments (\n  student_id INT REFERENCES students(id),\n  course_id  INT REFERENCES courses(id),\n  enrolled_at TIMESTAMP DEFAULT NOW(),\n  PRIMARY KEY (student_id, course_id) -- composite PK prevents duplicates\n);\n\n-- One-to-One: user has one profile\nCREATE TABLE profiles (\n  user_id INT PRIMARY KEY REFERENCES users(id), -- PK + FK = 1:1\n  bio TEXT, avatar_url TEXT\n);"
    }
  },
  {
    "id": "sql-84",
    "number": "84",
    "question": "Where should JOIN conditions go — ON or WHERE?",
    "difficulty": "medium",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "For INNER JOINs, ON vs WHERE gives the same result. But for LEFT/RIGHT JOINs, placement matters — ON filters before joining (keeps all left rows), WHERE filters after (can turn a LEFT JOIN into an INNER JOIN).",
      "code": "-- LEFT JOIN: placement CHANGES the result!\n\n-- ON condition: filter before joining (keeps all employees)\nSELECT e.name, d.dept_name\nFROM employees e\nLEFT JOIN departments d ON e.dept_id = d.id AND d.city = 'NYC';\n-- ✅ All employees returned; dept_name is NULL for non-NYC employees\n\n-- WHERE condition: filter after joining (drops non-matched rows)\nSELECT e.name, d.dept_name\nFROM employees e\nLEFT JOIN departments d ON e.dept_id = d.id\nWHERE d.city = 'NYC';\n-- ❌ Now acts like INNER JOIN — only employees in NYC departments!\n\n-- Rule: in OUTER JOINs, conditions on the right/outer table\n-- should go in ON (not WHERE)"
    }
  },
  {
    "id": "sql-85",
    "number": "85",
    "question": "What are the most important PostgreSQL configuration settings?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "PostgreSQL's postgresql.conf has hundreds of settings. These are the most impactful ones for performance and reliability.",
      "code": "-- Memory (most impactful for performance)\nshared_buffers = 25% of RAM       -- PostgreSQL's data cache\neffective_cache_size = 75% of RAM -- hint to planner (OS + PG cache)\nwork_mem = 64MB                   -- per-operation memory (sorts, joins)\n                                  -- careful: high × many connections = OOM\nmaintenance_work_mem = 256MB      -- for VACUUM, CREATE INDEX\n\n-- WAL settings\nwal_level = replica               -- or 'logical' for CDC/replication\nmax_wal_size = 2GB\ncheckpoint_completion_target = 0.9\n\n-- Connection settings\nmax_connections = 100             -- keep low, use PgBouncer!\n\n-- Query planner (important for SSDs)\nrandom_page_cost = 1.1            -- default 4 is for HDDs\neffective_io_concurrency = 200    -- default 1 is for HDDs\n\n-- Logging\nlog_min_duration_statement = 1000 -- log queries > 1 second\n\n-- View current settings\nSHOW shared_buffers;\nSELECT name, setting, unit FROM pg_settings WHERE name = 'shared_buffers';"
    }
  },
  {
    "id": "sql-86",
    "number": "86",
    "question": "What is logical decoding and Change Data Capture (CDC)?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Logical decoding reads PostgreSQL's WAL and decodes it into a stream of data changes (INSERT/UPDATE/DELETE). CDC uses this to synchronize data to other systems like Kafka, Elasticsearch, or data warehouses in real-time.",
      "code": "-- Create a logical replication slot\nSELECT * FROM pg_create_logical_replication_slot('my_slot', 'pgoutput');\n\n-- Consume changes from the slot\nSELECT * FROM pg_logical_slot_get_changes('my_slot', NULL, NULL,\n  'proto_version', '1', 'publication_names', 'my_pub');\n\n-- Popular CDC tools for PostgreSQL:\n-- Debezium: reads WAL → publishes to Apache Kafka\n-- pglogical: extension for logical replication\n-- pg_recvlogical: CLI tool to read WAL stream\n\n-- Typical CDC architecture:\n-- PostgreSQL WAL → Debezium → Kafka → Elasticsearch / Data Warehouse\n\n-- Real-world use cases:\n-- Sync PostgreSQL to Elasticsearch (for fast full-text search)\n-- Replicate to BigQuery / Snowflake / Redshift\n-- Invalidate app caches when data changes\n-- Audit trail of every database change\n\n-- Monitor replication slots (don't let them fall behind!)\nSELECT slot_name, active, pg_size_pretty(\n  pg_wal_lsn_diff(pg_current_wal_lsn(), confirmed_flush_lsn)\n) AS replication_lag\nFROM pg_replication_slots;"
    }
  },
  {
    "id": "sql-87",
    "number": "87",
    "question": "What are the most useful psql commands?",
    "difficulty": "medium",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "psql is the command-line interface for PostgreSQL. It has backslash commands for exploring the database structure quickly. Essential for every PostgreSQL developer.",
      "code": "-- Connection\n\\c mydb              -- connect to database\n\\c mydb alice        -- connect as user\n\n-- Exploration\n\\l                   -- list all databases\n\\dt                  -- list all tables in current schema\n\\d tablename         -- describe table (columns, types, constraints)\n\\d+ tablename        -- detailed description (with sizes)\n\\di                  -- list indexes\n\\dv                  -- list views\n\\df                  -- list functions\n\\dn                  -- list schemas\n\\du                  -- list all roles/users\n\\dx                  -- list installed extensions\n\n-- Output control\n\\x                   -- toggle expanded (vertical) display\n\\timing              -- show query execution time\n\n-- Execute files\n\\i /path/to/file.sql -- run a SQL file\n\\o output.txt        -- save results to file\n\n-- Help\n\\h SELECT            -- SQL command help\n\\?                   -- psql command help\n\\q                   -- quit psql"
    }
  },
  {
    "id": "sql-88",
    "number": "88",
    "question": "What is connection pooling and why does it matter?",
    "difficulty": "medium",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Each database connection uses ~5-10MB of RAM. High-traffic apps creating thousands of connections would need gigabytes just for connections. Connection pooling (PgBouncer) reuses a small pool of real connections — critical for production.",
      "code": "-- Problem: 1000 app servers, each opening 10 connections\n-- = 10,000 PostgreSQL connections × 5MB = 50GB RAM just for connections!\n\n-- Solution: PgBouncer sits between app and database\n-- App → PgBouncer (port 6432) → 20-50 real DB connections\n-- 1000 app connections → only 50 actual DB connections ✅\n\n-- pgBouncer modes:\n-- Session mode    — one pool connection per session (least pooling)\n-- Transaction mode — pool per transaction (most common in production)\n-- Statement mode  — pool per statement (restrictive, some features break)\n\n-- Check active connections in PostgreSQL\nSELECT count(*) FROM pg_stat_activity;\nSELECT client_addr, state, query FROM pg_stat_activity WHERE state != 'idle';\n\n-- Terminate idle connections older than 30 minutes\nSELECT pg_terminate_backend(pid) FROM pg_stat_activity\nWHERE state = 'idle' AND query_start < NOW() - INTERVAL '30 minutes';"
    }
  },
  {
    "id": "sql-89",
    "number": "89",
    "question": "What are the most important SQL interview query patterns to master?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Mastering these patterns will cover 90% of technical SQL interview questions.",
      "code": "-- 1. Employees with salary above department average (correlated subquery)\nSELECT name, salary, department FROM employees e\nWHERE salary > (\n  SELECT AVG(salary) FROM employees WHERE department = e.department\n);\n\n-- 2. Top N per group (window function pattern)\nSELECT * FROM (\n  SELECT *, DENSE_RANK() OVER (PARTITION BY category ORDER BY sales DESC) AS dr\n  FROM products\n) r WHERE dr <= 3;\n\n-- 3. Month-over-month growth (LAG pattern)\nSELECT month, revenue,\n  ROUND(100.0 * (revenue - LAG(revenue) OVER (ORDER BY month))\n    / LAG(revenue) OVER (ORDER BY month), 1) AS growth_pct\nFROM monthly_revenue;\n\n-- 4. Cumulative distribution / percentile\nSELECT name, salary,\n  CUME_DIST() OVER (ORDER BY salary) AS percentile\nFROM employees;\n-- 0.95 = employee is in the top 5%\n\n-- 5. Pivot with CASE WHEN\nSELECT dept,\n  SUM(CASE WHEN EXTRACT(MONTH FROM date) = 1 THEN revenue ELSE 0 END) AS jan,\n  SUM(CASE WHEN EXTRACT(MONTH FROM date) = 2 THEN revenue ELSE 0 END) AS feb\nFROM sales GROUP BY dept;\n\n-- 6. Recursive CTE for hierarchical data\nWITH RECURSIVE tree AS (\n  SELECT id, name, parent_id, 0 AS depth FROM cats WHERE parent_id IS NULL\n  UNION ALL\n  SELECT c.id, c.name, c.parent_id, t.depth + 1\n  FROM cats c JOIN tree t ON c.parent_id = t.id\n)\nSELECT * FROM tree ORDER BY depth, name;"
    }
  },
  {
    "id": "sql-90",
    "number": "90",
    "question": "What common SQL mistakes should you avoid in interviews?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Common pitfalls include forgetting NULL handling, using wrong JOIN types, and neglecting performance implications of large datasets.",
      "note": "Always check for NULLs when using NOT IN, use aliases for readability, and prefer JOINs over subqueries where possible for better performance."
    }
  },
  {
    "id": "sql-91",
    "number": "91",
    "question": "What is the MERGE statement in SQL?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "MERGE performs INSERT, UPDATE, and DELETE in a single statement based on whether a matching row exists. Added in SQL:2003, now available in PostgreSQL 15+.",
      "code": "-- PostgreSQL 15+ MERGE statement\nMERGE INTO products AS target\nUSING new_prices AS source ON target.product_id = source.product_id\nWHEN MATCHED AND source.price IS NOT NULL THEN\n  UPDATE SET price = source.price, updated_at = NOW()\nWHEN MATCHED AND source.price IS NULL THEN\n  DELETE\nWHEN NOT MATCHED THEN\n  INSERT (product_id, name, price, created_at)\n  VALUES (source.product_id, source.name, source.price, NOW());\n\n-- This single MERGE:\n-- Updates rows that exist in both (when price provided)\n-- Deletes rows where source marks them for deletion (null price)\n-- Inserts new rows that only exist in source\n\n-- Before PostgreSQL 15, use INSERT ON CONFLICT instead:\nINSERT INTO products (product_id, name, price)\nSELECT product_id, name, price FROM new_prices\nON CONFLICT (product_id) DO UPDATE SET\n  price = EXCLUDED.price, updated_at = NOW();"
    }
  },
  {
    "id": "sql-92",
    "number": "92",
    "question": "What are best practices for database schema design?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Good schema design focuses on data integrity, minimal redundancy (normalization), and performance optimization through proper indexing and data type selection.",
      "example": "\n🏗️ <strong>Use surrogate PKs</strong> — SERIAL/UUID. Natural keys (email, SSN) change over time and break FK chains.<br><br>\n📅 <strong>Always include created_at and updated_at</strong> — you'll always want to know when records changed.<br><br>\n🔑 <strong>Define all foreign keys</strong> — enforce referential integrity at the DB level, not just in app code.<br><br>\n📝 <strong>Use CHECK constraints</strong> for business rules — the database is the last line of defense.<br><br>\n🚫 <strong>Never store comma-separated values</strong> — use arrays or a junction table.<br><br>\n🕒 <strong>Use TIMESTAMPTZ not TIMESTAMP</strong> — always store with timezone to avoid DST bugs.<br><br>\n💵 <strong>Use NUMERIC for money, not FLOAT</strong> — floating point has rounding errors.\n",
      "code": "-- Good table design example\nCREATE TABLE orders (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),  -- surrogate PK\n  customer_id INT NOT NULL REFERENCES customers(id) ON DELETE RESTRICT,\n  status TEXT NOT NULL DEFAULT 'pending'\n    CHECK (status IN ('pending','confirmed','shipped','delivered','cancelled')),\n  subtotal NUMERIC(12,2) NOT NULL CHECK (subtotal >= 0),  -- money: NUMERIC\n  tax      NUMERIC(12,2) NOT NULL DEFAULT 0 CHECK (tax >= 0),\n  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),           -- with timezone!\n  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),\n  created_by INT REFERENCES users(id),\n  notes TEXT\n);"
    }
  },
  {
    "id": "sql-93",
    "number": "93",
    "question": "How do you safely run database migrations in production?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Database migrations in production require careful planning — the wrong migration can lock your table for minutes, causing downtime. Some operations are instant, others require special handling.",
      "code": "-- ✅ SAFE: adding a nullable column (instant, no rewrite)\nALTER TABLE orders ADD COLUMN tracking_number TEXT;\n\n-- ❌ RISKY: adding NOT NULL column forces table rewrite\nALTER TABLE orders ADD COLUMN required_field TEXT NOT NULL DEFAULT '';\n-- On large tables, this can lock for minutes!\n\n-- ✅ SAFE way to add NOT NULL:\n-- Step 1: Add nullable column (instant)\nALTER TABLE orders ADD COLUMN required_field TEXT;\n-- Step 2: Backfill existing rows (batched, no full lock)\nUPDATE orders SET required_field = '' WHERE required_field IS NULL;\n-- Step 3: Add NOT NULL constraint (quick if no nulls remain)\nALTER TABLE orders ALTER COLUMN required_field SET NOT NULL;\n\n-- ✅ SAFE: create index without locking table\nCREATE INDEX CONCURRENTLY idx_orders_customer ON orders (customer_id);\n-- Takes longer but NO table lock — safe in production!\n\n-- ❌ RISKY: regular index creation locks writes\nCREATE INDEX idx_orders_customer ON orders (customer_id); -- locks!\n\n-- ✅ SAFE: rename via alias, not directly\n-- Step 1: add new column with new name\n-- Step 2: backfill it\n-- Step 3: update app to use new column\n-- Step 4: drop old column in a later migration"
    }
  },
  {
    "id": "sql-94",
    "number": "94",
    "question": "What are table statistics and how do they affect query planning?",
    "difficulty": "hard",
    "section": "PostgreSQL — Specific Features",
    "answer": {
      "simple": "PostgreSQL tracks detailed statistics about every table and index. The query planner uses these to estimate costs and choose the best execution plan. Stale statistics = wrong estimates = slow queries.",
      "code": "-- View column statistics\nSELECT tablename, attname AS column,\n  n_distinct,        -- estimated distinct values (-1 = high cardinality)\n  correlation,       -- physical sort order (1=perfect, 0=random)\n  most_common_vals,  -- most common values\n  most_common_freqs  -- their frequencies\nFROM pg_stats WHERE tablename = 'orders';\n\n-- Find tables with high seq scans (missing indexes!)\nSELECT relname, seq_scan, idx_scan FROM pg_stat_user_tables\nORDER BY seq_scan DESC;\n\n-- Find unused indexes (wasting space + slowing writes)\nSELECT schemaname, tablename, indexname, idx_scan AS times_used\nFROM pg_stat_user_indexes WHERE idx_scan = 0;\n\n-- Increase statistics target for important columns\nALTER TABLE orders ALTER COLUMN customer_id SET STATISTICS 500;\n-- Default=100. Higher = more accurate estimates but slower ANALYZE\n\n-- Extended statistics (correlated columns — e.g. city + state)\nCREATE STATISTICS stat_city_state ON city, state FROM addresses;\nANALYZE addresses;\n-- Planner now knows city and state are correlated!"
    }
  },
  {
    "id": "sql-95",
    "number": "95",
    "question": "How do you implement soft deletes?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Soft deletes mark records as deleted without physically removing them — using a <code>deleted_at</code> timestamp or an <code>is_deleted</code> flag. Data is preserved for audit/recovery but hidden from normal queries.",
      "code": "-- Add soft delete column\nALTER TABLE users ADD COLUMN deleted_at TIMESTAMPTZ;\n\n-- \"Delete\" a user (mark as deleted, don't remove the row)\nUPDATE users SET deleted_at = NOW() WHERE id = 42;\n\n-- Recover a deleted user\nUPDATE users SET deleted_at = NULL WHERE id = 42;\n\n-- Always filter active users in queries\nSELECT * FROM users WHERE deleted_at IS NULL;\n\n-- Create a view to simplify this\nCREATE VIEW active_users AS\n  SELECT * FROM users WHERE deleted_at IS NULL;\n\n-- Add a partial index for performance (only indexes active rows!)\nCREATE INDEX idx_users_active ON users (email)\n  WHERE deleted_at IS NULL;\n\n-- Useful columns to add:\n-- deleted_at TIMESTAMPTZ (nullable timestamp — NULL = active)\n-- deleted_by INT REFERENCES users(id) (who deleted it)\n-- is_deleted BOOLEAN DEFAULT FALSE (simpler but less info)"
    }
  },
  {
    "id": "sql-96",
    "number": "96",
    "question": "What is optimistic vs pessimistic locking?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Pessimistic locking locks the row immediately (FOR UPDATE) and keeps other writers waiting. Optimistic locking doesn't lock — instead it checks if data changed since you last read it, and retries if it did. Optimistic is better for low-contention scenarios."
    }
  },
  {
    "id": "sql-97",
    "number": "97",
    "question": "How do you implement audit logging in SQL?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Audit logging records every change made to sensitive data — who changed what, when, and what it looked like before and after. Use triggers for automatic capture at the database level.",
      "code": "-- Create a generic audit table\nCREATE TABLE audit_log (\n  id BIGSERIAL PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  operation TEXT NOT NULL CHECK (operation IN ('INSERT','UPDATE','DELETE')),\n  row_id BIGINT,\n  old_data JSONB,       -- what it looked like before\n  new_data JSONB,       -- what it looks like after\n  changed_at TIMESTAMPTZ DEFAULT NOW(),\n  changed_by TEXT DEFAULT current_user,\n  application_user INT  -- set by app: SET LOCAL app.user_id = 42\n);\n\n-- Generic audit trigger function\nCREATE OR REPLACE FUNCTION audit_trigger_function()\nRETURNS TRIGGER AS $$\nBEGIN\n  INSERT INTO audit_log (table_name, operation, row_id, old_data, new_data, application_user)\n  VALUES (\n    TG_TABLE_NAME, TG_OP,\n    COALESCE(NEW.id, OLD.id),\n    CASE WHEN TG_OP != 'INSERT' THEN to_jsonb(OLD) END,\n    CASE WHEN TG_OP != 'DELETE' THEN to_jsonb(NEW) END,\n    current_setting('app.user_id', true)::INT\n  );\n  RETURN COALESCE(NEW, OLD);\nEND;\n$$ LANGUAGE plpgsql;\n\n-- Attach to any sensitive table\nCREATE TRIGGER audit_orders AFTER INSERT OR UPDATE OR DELETE ON orders\n  FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();"
    }
  },
  {
    "id": "sql-98",
    "number": "98",
    "question": "How do you design a job queue in SQL?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "PostgreSQL can serve as a reliable job queue using SKIP LOCKED — a worker atomically picks and locks a job row, processes it, then deletes or marks it done. Multiple workers can run in parallel safely."
    }
  },
  {
    "id": "sql-99",
    "number": "99",
    "question": "What makes great SQL for large production databases?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Production SQL focuses on scalability, reliability, and observability. It avoids long locks and prioritizes indexed access paths.",
      "example": "\n🔍 <strong>Measure before optimizing</strong> — use EXPLAIN ANALYZE and pg_stat_statements to find actual bottlenecks. Don't guess.<br><br>\n📑 <strong>Index strategically</strong> — index what's filtered, joined, or ordered. Remove unused indexes. Use covering indexes for hot queries.<br><br>\n🔄 <strong>Use connection pooling</strong> (PgBouncer) — never let apps create thousands of direct connections.<br><br>\n📦 <strong>Partition large tables</strong> — tables over 100GB benefit greatly from range/list partitioning on date or region.<br><br>\n💾 <strong>Automate backups and test restores</strong> — a backup you've never restored is untested.<br><br>\n📊 <strong>Monitor key metrics</strong> — dead tuple %, cache hit rate, lock waits, replication lag, slow queries.<br><br>\n🔒 <strong>Plan every migration</strong> — use CONCURRENTLY for indexes, avoid long locks, test on staging first.\n",
      "code": "-- Cache hit rate (should be > 99%)\nSELECT\n  SUM(heap_blks_hit) / NULLIF(SUM(heap_blks_hit + heap_blks_read), 0) AS cache_hit\nFROM pg_statio_user_tables;\n\n-- Long-running transactions (can block VACUUM!)\nSELECT pid, usename, NOW() - query_start AS duration, left(query, 80)\nFROM pg_stat_activity\nWHERE state != 'idle' AND NOW() - query_start > INTERVAL '5 minutes'\nORDER BY duration DESC;\n\n-- ✅ Safe index creation in production (no table lock!)\nCREATE INDEX CONCURRENTLY idx_orders_customer ON orders (customer_id);\n\n-- ✅ Safe column addition (instant — nullable column)\nALTER TABLE orders ADD COLUMN tracking_number TEXT;\n-- ❌ Unsafe: ALTER TABLE ... SET NOT NULL on large table (locks!)"
    }
  },
  {
    "id": "sql-100",
    "number": "100",
    "question": "What are the final tips for acing a SQL interview?",
    "difficulty": "hard",
    "section": "Common Interview Patterns & Problems",
    "answer": {
      "simple": "Final interview success depends on both technical correctness and clear communication of your thought process.",
      "example": "\n<strong>1. Think out loud</strong> — interviewers want to see your reasoning, not just the answer. Narrate your approach before writing.<br><br>\n<strong>2. Clarify before you code</strong> — ask \"Should I handle NULLs?\" or \"Do you want exact matches or partial?\" Shows maturity.<br><br>\n<strong>3. Start simple, then optimize</strong> — write a working query first, then add indexes/CTEs/window functions.<br><br>\n<strong>4. Know your window functions</strong> — ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, SUM OVER, AVG OVER come up constantly.<br><br>\n<strong>5. Know the NULL traps</strong> — <code>= NULL</code>, NOT IN with NULLs, NULL in arithmetic. These trip up many candidates.<br><br>\n<strong>6. Explain trade-offs</strong> — \"I could use a subquery or a JOIN here. The JOIN is usually faster because...\"<br><br>\n<strong>7. Test with edge cases</strong> — \"What if there are no orders? The LEFT JOIN handles that by returning NULL.\"<br><br>\n<strong>8. Know EXPLAIN ANALYZE</strong> — showing you use this demonstrates real-world production experience.\n",
      "code": "-- Core window function patterns every interview expects you to know:\n\n-- Top N per group\nSELECT * FROM (\n  SELECT *, DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS dr\n  FROM employees\n) r WHERE dr <= 3;\n\n-- Running total\nSELECT date, SUM(revenue) OVER (ORDER BY date) AS running_total FROM sales;\n\n-- Month-over-month change\nSELECT month, revenue,\n  revenue - LAG(revenue) OVER (ORDER BY month) AS change\nFROM monthly_sales;\n\n-- Finding users with no orders (LEFT JOIN + IS NULL pattern)\nSELECT u.* FROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nWHERE o.id IS NULL;\n\n-- Employees earning above their department average\nSELECT name, salary FROM employees e\nWHERE salary > (\n  SELECT AVG(salary) FROM employees WHERE department = e.department\n);"
    }
  }
];
