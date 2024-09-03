function increaseMajorGC() {
    const largeArray = [];
    
    // Allocate a large amount of memory
    for (let i = 0; i < 1e6; i++) {
        largeArray.push(new Array(1000).join('x'));
    }

    console.log("Allocated a large amount of memory.");

    // Clear the allocated memory
    largeArray.length = 0;

    console.log("Memory cleared, prompting garbage collection.");

    // Force GC if possible (for testing only, requires --expose-gc)
    if (global.gc) {
        console.log("Triggering manual garbage collection...");
        global.gc();
        console.log("Garbage collection completed.");
    } else {
        console.log("Garbage collection is not exposed. Start Node.js with the '--expose-gc' flag.");
    }
}

// Example usage: Call this function to increase the chance of a major GC.
increaseMajorGC();