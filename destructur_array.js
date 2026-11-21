//Giúp giảm cú pháp khi lấy giá trị trong mảng
const userName=["Toan","Ha","Huy"];
const [user1,user2,user3]=userName;
console.log(user1,user2,user3);

//Có thể bỏ qua phần tử không cần thiết bằng cách để dấu phẩy
const [,user4,user5]=userName;
console.log(user4,user5);


const [user6,...abc]=userName;
console.log(user6);
console.log(abc);//chứa các phần tử còn lại trong mảng

//Lấy thuộc tính trong đối tượng qua destructuring
const user={
    name: "Toàn",
    age: 20
}
const {name: ten,age: tuoi}=user; //Tên biến phải trùng tên thuộc tính của đối tượng hoặc sử dụng bí danh
console.log(ten,"\n",tuoi);
