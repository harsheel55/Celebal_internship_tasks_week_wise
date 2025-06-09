# Week -3: Asynchronous Programming in Node.js

Asynchronous programming is a core concept in Node.js that allows for non-blocking I/O operations. In this week, you will learn how to work with callbacks, promises, and async/await to handle asynchronous code effectively.

---

## 📘 Topics Covered

### 1. Callback Functions
- What are callbacks?
- Writing and using callback functions
- Nested callbacks (callback hell)

### 2. Handling Errors in Callbacks
- Error-first callback pattern
- Checking and handling errors

### 3. Promises
- Creating and consuming promises
- `resolve`, `reject`, and `then()`
- Introduction to `catch()`

### 4. Async/Await
- Writing asynchronous code using `async` and `await`
- Clean and readable async flow

### 5. Event Loop
- Understanding the Node.js Event Loop
- Call stack, callback queue, and microtasks

### 6. Handling Asynchronous Operations
- Using timers (`setTimeout`, `setInterval`)
- Asynchronous I/O with `fs`, `http`, etc.

### 7. File System with Promises
- Using `fs.promises` module
- Reading/writing files with promises

### 8. Promise Chaining
- Sequential async operations
- Avoiding nested `then()` blocks

### 9. Error Handling in Async/Await
- Using `try...catch` for error handling
- Propagating and managing errors

---

## ✅ Assignment

**Goal:**  
Refactor existing Node.js code that uses callbacks into Promises and Async/Await.

**Tasks:**
1. Take a sample callback-based file operation code.
2. Convert it to use **Promises**.
3. Then refactor the same code using **Async/Await**.
4. Handle errors gracefully in both versions.
5. Document the differences and advantages of each approach in comments or a separate markdown file.

**Bonus:** Use `fs.promises` to demonstrate asynchronous file handling.

---


