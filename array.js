const traicay=["cam","xoai","nho"];
const mang=[1,"hello",true,null,undefined,[1,2,3]];
console.log(mang[5][0]);
console.log(mang[5][1]);
//push: thêm phần tử vào cuói mảng
traicay.push("dứa");
console.log(traicay);

//map():tạo mảng mới từ mảng cũ
const so=[1,2,3,4,5];
console.log(so);
const so2=so.map((item)=> item*2);
console.log(so2);

//biến đổi phần tử của mảng 
const so3=so.map((item)=>({so:item}));
console.log(so3);

//findindex: trả về vị trí của phần tử đầu tiên nhìn thấy(nếu ko tìm thấy trả về -1)
const kq=traicay.findIndex((item)=>{
    return item==="cam";
})
console.log(kq)
