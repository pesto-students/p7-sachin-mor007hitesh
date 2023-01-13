function getNumber(resolveCallback, rejectCallback, fulfilledCallback) {
    let randomNumber = Math.floor(Math.random() * 100);
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (randomNumber % 5 === 0) {
          reject(randomNumber);
          if (rejectCallback) rejectCallback(randomNumber);
        } else {
          resolve(randomNumber);
          if (resolveCallback) resolveCallback(randomNumber);
        }
      }, 1000);
    });
    promise
      .then(res => {
        if (fulfilledCallback) fulfilledCallback(res);
      })
      .catch(err => {
        if (rejectCallback) rejectCallback(err);
      });
    return promise;
  }
  