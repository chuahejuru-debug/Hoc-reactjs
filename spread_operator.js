//1.spread operator với mảng
//Danh sách sở thích hiện tại 
let soThich=["đọc sách","nghe nhạc"];

//Sở thích mới muốn thêm
const soThichMoi=" đi du lịch"; 
const soThichMoi1=[" chơi game"," leo núi"]
//Cập nhật danh sách sở thích
soThich=[...soThich,"abc",soThichMoi,...soThichMoi1];
//console.log(`Danh sách sở thích khi thêm:${soThich}`);


//2.spread operator với Object
let user={
    id:1,
    name:"Nguyễn Văn A",
    email: "vana@gmail.com"
}
let updates={
    address:"123 Đường ABC",
    role: "Admin"
}
user={...user,...updates};
console.log(user);