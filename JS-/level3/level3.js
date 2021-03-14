// // 方法1：
// function Animal() {
//     this.species = "动物";
// }

// function Cat(name, color) {
//     Animal.apply(this, arguments);
//     this.name = name;
//     this.color = color;
// }
// var cat1 = new Cat("大毛", "黄种");
// console.log(cat1.species);

// // 方法2：拷贝
function Animal() {}
Animal.prototype.species = "动物";
function extend1(Child, Parent) {
    　　var p = Parent.prototype;
        var c = Child.prototype;
        console.log(p);
        console.log(c);
    　　for (var i in p) {
    　　　　c[i] = p[i];
    　　}
    // 　　c.uber = p;
    }
function Cat(name, color) {
    // Animal.apply(this, arguments);
    this.name = name;
    this.color = color;
}
extend1(Cat, Animal);
var cat1 = new Cat("大毛", "黄种");
console.log(cat1.species);
console.log(Animal.prototype);