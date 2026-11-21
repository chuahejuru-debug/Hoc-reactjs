const donHang={
    maDonhang: 101,
    tiente: "VND",
    tongTien: 500000,
}
function xulyDonHang({maDonhang,tiente,tongTien}){
    console.log(`Mã đơn hàng: ${maDonhang}`);
    console.log(`Tièn tệ: ${tiente}`);
    console.log(`Tổng tiền: ${tongTien}`);
}
xulyDonHang(donHang);

//tạo restrutur mặc dịnh
function xulyDonHang2({maDonhang=0,tiente="VND",tongTien=0}){
    console.log(`Mã đơn hàng: ${maDonhang}`);
    console.log(`Tièn tệ: ${tiente}`);
    console.log(`Tổng tiền: ${tongTien}`);
}
xulyDonHang2({});

//Sủ dụng rest parameter
function xulyDonHang3({maDonhang,...rest}){
    console.log(`Mã đơn hàng: ${maDonhang}`);
    console.log(rest);
}
xulyDonHang3({
    maDonhang:103,
    tiente:"USD",
    tongTien:1000,
    Khanh_hang: "Nguyễn Văn A"
})

