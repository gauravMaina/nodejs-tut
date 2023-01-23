const a = 10
let b = 0

const waitData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20)
  }, 2000)
});
(async () => {
  b = await waitData
  console.log(a + b)
})()
// waitData.then(data => {
//   console.log(a + data)
// })
