var Async = require('async');
 

var array = [1,2,3,4];
Async.map(array,
    function(data, ca) {
        data ++;
        if(data !== 4){
            //console.log(data);
            
        }else{
            return ca(data);
            //return;
        }
        ca(null, data);
        
    },
    function(err, results) {
        if(err){
            console.log(err)
        }
        console.log(results);
    }
);

/*
test = (a,ca) => {
    console.log(a);
    ca(null,a)
}

Async.parallel(
    [
        function(callback){
            // 此处查询数据库代码
            test("u1", function(err, user) {
                callback(err, user);
            });
        },
        function(callback){
            // 此处查询数据库代码
            test("t2", function(err, count){
                callback(count);
            });
        }
        // 如果还需要查询数据 继续添加方法即可
    ],
    function(err, results){
        if(err){
            console.log(err + " error---")
        }
        var user = results[0];
        var count = results[1];
        console.log(results);
    }
);

*/