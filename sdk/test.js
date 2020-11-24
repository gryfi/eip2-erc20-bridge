/*
(async () => {
    let arr = [1,2,3,4,5]
    let res = await arr.map(async (item) => {
        await x(item)
    })
    console.log(res)
  })();


  async function x(item){
    console.log(item+'执行')
    // map并发执行
    await new Promise(resolve=>{
        setTimeout(()=>{
          console.log(item+'结束');
          resolve();
        },2000)
    })
    return 10

  }
*/
console.log("-----------------");
/*
(async () => { 
    let arr1 = [1,2,3,4,5]
    let newArr = [];
    let res = await Promise.all(arr1.map(async (item) => {
        console.log("start=> ", item)
        await new Promise(resolve=>{
            setTimeout(() => {
                console.log(item + '内结束');
                resolve();
            }, 2000)
        })
        newArr.push(item)
    }));

    //sync here
    console.log(newArr)
})()
*/

(async () => {
    new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("First");
        resolve();
    }, 1000);
}).then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Second");
            resolve();
        }, 4000);
    });
}).then(function () {
    setTimeout(function () {
        console.log("Third");
    }, 3000);
});
})()

