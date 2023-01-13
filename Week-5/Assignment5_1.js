// Async/Await function
async function asyncCallbackHandler() {
  try {
    await doTask1();
    await doTask2();
    await doTask3();
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

// Generator function
function* generatorCallbackHandler() {
  try {
    yield doTask1();
    yield doTask2();
    yield doTask3();
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

// Helper function to execute generator function
function executeGenerator(gen) {
  let generator = gen();
  (function execute(val) {
    let next = generator.next(val);
    if (!next.done) {
      next.value.then(execute);
    }
  })();
}

// Example usage
executeGenerator(generatorCallbackHandler);
asyncCallbackHandler();
