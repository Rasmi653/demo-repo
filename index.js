const myPromise = new Promise((resl, rej) => {

  const success = true;
  if (success) {
    resl("RESOLVED...")
  } else {
    rej("REJECTED...")
  }
});

myPromise.then((message) => {
  console.log("SUCCESS", message);
  return 100;
}).then((number) => {
  console.log("NUMBER:", number);

}).catch((error) => {
  console.log(error);

})
