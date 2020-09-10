let inputdiemToan;
let inputdiemLy;
let inputdiemHoa;

inputdiemToan = prompt('Nhap diem Toan');
inputdiemLy = prompt('Nhap diem Ly');
inputdiemHoa = prompt('NhapdiemHoa');

let diemToan= parseInt(inputdiemToan);
let diemLy= parseInt(inputdiemLy);
let diemHoa= parseInt(inputdiemHoa);

let diemtb=(diemToan + diemLy + diemHoa)/3;
parseInt(diemtb);
document.write('diemtb cua ban Hai la ' + diemtb);
