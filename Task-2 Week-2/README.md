# Week-2: File Management Tool Using Node.js Core Modules

Build a file management tool using core modules.

Utilize Node.js core modules such as File System, Path, and HTTP to create a simple file management tool that can create, read, and delete files.

---

## Resources

- [Node.js Core Modules Documentation](https://nodejs.org/api/modules.html)

# Week -2: Core Modules and NPM

In Week 2, we dive deeper into Node.js by exploring its powerful **core modules** and understanding how to manage projects using **npm** (Node Package Manager). By the end of the week, you'll be able to build utilities using built-in modules and manage your project dependencies effectively.

---

## 📘 Topics Covered

### 📂 File System Module (`fs`)
- Reading and writing files
- Working with directories
- Synchronous vs Asynchronous methods

### 🌐 HTTP Module (`http`)
- Creating a web server
- Handling requests and responses
- Serving HTML or JSON content

### 🔔 Events Module (`events`)
- EventEmitter class
- Creating and handling custom events
- Event-driven architecture

### 🧰 Util Module (`util`)
- Utility functions like `util.format()`, `util.inherits()`
- Using `promisify` to convert callbacks to promises

### 📁 Path Module (`path`)
- Resolving and joining paths
- File path manipulation across different platforms

---

## 📦 NPM (Node Package Manager)

### NPM Basics and Installing Packages
- What is npm?
- Installing local and global packages
- Semantic versioning (`^`, `~`, etc.)

### Creating a Package
- Initializing with `npm init`
- Adding description, scripts, dependencies

### Version Management
- Understanding package versions
- Updating dependencies safely

### NPM Scripts
- Creating custom commands in `package.json`
- Running scripts using `npm run`

---

## ✅ Assignment

**Goal:**  
Build a **File Management Tool** using Node.js core modules.

**Tasks:**
1. Use the **File System Module** to:
   - Create files
   - Read and update contents
   - Delete files
2. Use the **Path Module** to handle file paths dynamically.
3. Emit custom events for file operations using the **Events Module**.
4. Add a simple HTTP interface (optional) using the **HTTP Module**.
5. Initialize the project using `npm init`.
6. Write an **npm script** to run the tool easily from the terminal.

**Bonus:** Package your tool as a reusable CLI app.

---

## 📁 Suggested Folder Structure

