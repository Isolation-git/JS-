//方法1：(递归)
var ary = [1, [2, [3, [4, 5]]], 6];
function even(arr) {
    let res = [];
    let fn=function (arr) {
        for (let i = 0; i < arr.length; i++)
        {
        
            if (typeof arr[i] != 'number')
            {
                fn(arr[i]);
            } else {
            res.push(arr[i]);
            }
        }
    }
    fn(arr);
    return res;
}
console.log(ary);
console.log(even(ary));;
//方法2：
// var ary = [1, [2, [3, [4, 5]]], 6];
// function even(arr) {
//     return arr.toString().split(',').map(Number);
// }
// console.log(ary);
// console.log(even(ary));