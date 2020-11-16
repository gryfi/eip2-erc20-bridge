const bnb = require('./bnb.js')
print = (a) => {
    console.log('ps\n');
    console.log(a.data);
    console.log('pe\n')
}


console.log('start')

//bnb.test(console.log)
//bnb.getFees(print)
console.log('end')

/*
bnb.getFees((err, feesData) => {
    if(err) {
      console.log(err)
      return callback(err, 500)
    }

    const fees = feesData.data
    console.log(fees)
})
*/
/*
keyName = 'fromapp1234567890'
password = 'fromapp1234'
bnb.createKey(keyName, password, (err, keyData) => {
    if(err) {
      console.log(err)
      callback(err)
    }

    console.log('==============')
    console.log(keyData)
    console.log('==============')
  })

  */
 privateKey = bnb.createAccountWithMneomnic('1').privateKey;
 password = '12345678' ;


 console.log(bnb.generateKeyStore(privateKey, password))