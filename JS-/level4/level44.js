//方法一：递归
function deepClone(data) {
    const targetObj = data.constructor === Array ? [] : {};
    for (let key in data) {
        if (Object.prototype.toString.call(data[key]) === '[object Array]' || Object.prototype.toString.call(
                data[key]) === '[object Object]') {
            targetObj[key] = deepClone(data[key]);
        } else if(Object.prototype.toString.call(data[key]) ==='[object Set]'){
            targetObj[key] = new Set(data[key]);
        }
        else {
            targetObj[key] = data[key];
        }
    }
    return targetObj;
}
var data1 = {
    age: 18,
    name: "liuruchao",
    education: ["小学", "初中", "高中", "大学", undefined, null],
    likesFood: new Set(["fish", "banana"]),
    friends: [{
            name: "summer",
            sex: "woman"
        },
        {
            name: "daWen",
            sex: "woman"
        },
        {
            name: "yang",
            sex: "man"
        }
    ],
    work: {
        time: "2019",
        project: {
            name: "test",
            obtain: ["css", "html", "js"]
        }
    },
    play: function () {
        console.log("玩滑板");
    }   
}
var data2 = deepClone(data1);
console.log(data1 === data2);
console.log(data1.likesFood === data2.likesFood);
console.log(data1);
// for (k in data1) {
//     console.log(Object.prototype.toString.call(data1[k]));
// }
// for (k in data1) {
//     console.log(Object.prototype.toString.call(data1[k]) === '[object Array]');
// }
console.log(data2);
data2.work.time = '2020';
console.log(data1);
console.log(Object.prototype.toString.call(data1.likesFood));
for (k in data1) {
    console.log(data1[k] === data2[k]);
}