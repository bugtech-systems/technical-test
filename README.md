# Node.js Backend Developer Test

## 1. Why `{ a: 1 } === { a: 1 }` is false in JavaScript
In JavaScript, objects are compared by reference, not by value. `{ a: 1 }` creates a new object each time it is used, so `{ a: 1 } === { a: 1 }` compares two different object references, which results in `false`.

## 2. Runtime Differences: `for await` vs `forEach` with `async`
- `for await (const a of [p1, p2, p3]) { ... }`: This runs each promise sequentially, waiting for each to resolve before proceeding to the next.
- `[p1, p2, p3].forEach(async (p) { await p })`: This starts all promises concurrently but doesn't wait for each promise to finish before starting the next. The `await` inside `forEach` does not delay the loop execution as intended.

## 3. Difference Between Node.js and V8
- **Node.js**: A runtime environment that allows JavaScript to run on the server-side. It provides APIs for file systems, networking, and other server-side tasks.
- **V8**: A JavaScript engine developed by Google that compiles JavaScript into native machine code. Node.js uses V8 to execute JavaScript code.

## 4. TypeScript: Enum vs Object
- **Enum**: A TypeScript-specific construct used to define a set of named constants. Enums provide a way to name sets of numeric or string values.
- **Object**: A standard JavaScript construct that can be used to store keyed collections of various types of data. Objects are more flexible but lack the compile-time type checking that enums offer.

## 5. TypeScript Variable Declaration
To ensure `a` is a property name of object `b`:
```typescript

let a: keyof typeof b;
```

## 6. Drawbacks or Pitfalls of TypeScript in Large Applications

1. **Complexity**: TypeScript can introduce complexity with its strict typing system, leading to more verbose code.

2. **Learning Curve**: Developers unfamiliar with static typing may find it challenging to adapt.

3. **Compilation Overhead**: TypeScript requires a compilation step, which can slow down development and complicate build processes.

4. **Third-Party Library Support**: Not all JavaScript libraries have TypeScript definitions, requiring developers to write their own or use workarounds.


## 7. Simple HTTP Server in Node.js

### Requirements
- Use only built-in Node.js modules.
- Do not use the HTTP, HTTP/2, or HTTPS modules.
- Implement a GET `/time` route that returns the current time in JSON.
- Implement a GET `/data` route that returns any data after 1 second.
- Use correct HTTP headers.
- Ensure compatibility with industry-standard HTTP traffic generator tools.


### Code Example

You can find the implementation in `index.js`. To run the server, execute `npm start`.

### Thought Process

### Built-in Modules
Utilizes the `net` module to create a TCP server, which allows handling of raw socket connections. This approach is chosen to avoid using the `http`, `http/2`, or `https` modules.

### Request Handling
The server reads incoming data and determines the request type based on the starting content of the request data. This approach allows for efficient request parsing and response handling.

### Routes
- **GET /time**: Returns the current server time in JSON format. This request is handled immediately upon receipt.
- **GET /data**: Returns an array `[1, 2, 3]` after a delay of 1 second to simulate asynchronous processing. This delay helps demonstrate handling asynchronous operations.

### HTTP Headers
Correct headers (`Content-Type: application/json`) are used for responses to ensure proper content handling by clients. This ensures that clients can interpret the response data correctly.

### Traffic Handling
Designed to handle industry-standard HTTP traffic by adhering to basic HTTP request-response principles. The server is built to be robust and compatible with standard HTTP traffic generator tools.


## 8. Demonstrating Major Garbage Collection in Node.js

### Code Sample

You can find the sample code for demonstrating major garbage collection in the `gc.js` file. This example includes a function that triggers major garbage collection.

### Running the Test

To run the test and observe the behavior:

1. **Ensure you start Node.js with the `--expose-gc` flag** to expose the `global.gc()` function.

2. **Execute the script** by running the following command:

   ```bash
   npm run gc
   ```
    This command will execute the gc.js script and demonstrate the effect of manually triggering major garbage        collection.

### Explanation

- **Memory Pressure**: The function creates a large array to put pressure on the memory, making it more likely for garbage collection to reclaim unused memory.
- **Manual GC Trigger**: The `global.gc()` function is called to explicitly trigger the garbage collector. This is only available when Node.js is started with the `--expose-gc` flag.
- **Check GC Exposure**: The script checks if `global.gc` is available and logs an error if it is not, ensuring you are aware that GC needs to be exposed.

## 9. Jest Mock for a Class with fetchAllRecords Function

### Code Sample

You can find the sample codes in the `fetchRecords.js` and `fetchRecords.test.js`. This files demonstrates how to create a Jest mock for a class with a `fetchAllRecords` function. The mock will return a resolved promise with the array `[1, 2, 3]`.

### Running the Test

**Execute the test  ** by running the following command:

   ```bash
   npm run test
   ```
   