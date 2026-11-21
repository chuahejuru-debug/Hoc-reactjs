//cách viết object truyền thống
/*const user={
    name: "LAn",
    age:70,
    "Giới tịnh": "Nam",
    xinChao(){
        console.log("xin chao ban.");
    }
}
user.xinChao();
console.log(user.age);
console.log(user["Giới tịnh"]);
console.log(user.xinChao);
*/
//class
class User{
    constructor(name,age){
        this.ten=name;
        this.tuoi=age;
    }
    getten(){return this.ten}
    gettuoi(){return this.tuoi}
}
let user1=new User("Thai ",18);
console.log(user1.getten()+"\n"+user1.gettuoi());