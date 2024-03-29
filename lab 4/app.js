
//tạo class Student có các constructor id, first_name, last_name, class_id, email, phone_number, dob
  class Student {
constructor(id, first_name, last_name, class_id, email, phone_number, dob) {
this.id = id;
this.first_name = first_name;
this.last_name = last_name;
this.class_id = class_id;
this.email = email;
this.phone_number = phone_number;
this.dob = dob;
}

getFullName() {
return this.last_name+" "+this.first_name;//hàm getFullName trả về giá trị last name + first name 
}

getAgeByYear() {
const dob = new Date(this.dob);
const diff_ms = Date.now() - dob.getTime();
const age_dt = new Date(diff_ms);

return Math.abs(age_dt.getUTCFullYear() - 1970);//phương thức tính tuổi theo năm 
}

getAgeByDay() {
const dob = new Date(this.dob);
const diff_ms = Date.now() - dob.getTime();
const age_day = Math.floor(diff_ms / (1000 * 60 * 60 * 24));

return age_day;//phương thức tính tuổi theo ngày 
}
}

const students = [
new Student(1, 'Linh', 'Van', 1, 'vanlinh@gmail.com', '0868114373', '2004/01/01'),
new Student(2, 'Hau', 'Nguyen', 1, 'haung@gmail.com', '0901234568', '2004/03/02'),
new Student(3, 'Loc', 'Nguyen', 1, 'locnv@gmail.com', '0901234569', '2004/05/03'),
new Student(4, 'Trang', 'Le', 1, 'trangle@gmail.com', '0901234570', '2004/10/04'),
new Student(5, 'Thao', 'Phan', 1, 'thaopn@gmail.com', '0901234571', '2004/12/05')
];// tên các thuộc tính cho student 

students.sort((a, b) => a.getAgeByDay() - b.getAgeByDay());//sắp xếp student theo ngày tuổi 

console.log('Danh sách sinh viên theo thứ tự số tuổi (tính theo ngày) từ thấp đến cao: ');
students.forEach(student => {
console.log(
`ID: ${student.id}, Họ và tên: ${student.getFullName()}, Tuổi (theo năm): ${student.getAgeByYear()}, Tuổi (theo ngày): ${student.getAgeByDay()}`
);//in danh sách ra màn hình console
});
var width = window.innerWidth;
var height = window.innerHeight;//bom để hiển thị độ dài w và h của browser
document.write(width+"px"+" "+height+"px");// hiển thị ta document 
