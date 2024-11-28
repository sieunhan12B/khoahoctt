import { useEffect, useState } from "react";
import "./App.css";
import { khoaHocService } from "./services/khoaHoc.service";

function App() {
  const [dsKhoaHoc, setDanhSachKhoaHoc] = useState([]);
  useEffect(() => {
    khoaHocService
      .getCourse()
      .then((res) => {
        console.log(res);
        setDanhSachKhoaHoc(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <style>
        {`
          table {
            border-collapse: collapse;
            width: 100%;
          }
          th, td {
            border: 1px solid black;
            padding: 8px;
          }
        `}
      </style>

      <table>
        <thead>
          <tr>
            <th>Mã khóa học</th>
            <th>Bí danh</th>
            <th>Tên khóa học</th>
            <th>Mô tả</th>
            <th>Lượt xem</th>
            <th>Ngày tạo</th>
            <th>Người tạo</th>
          </tr>
        </thead>
        <tbody>
          {dsKhoaHoc.map((khoaHoc) => (
            <tr key={khoaHoc.maKhoaHoc}>
              <td>{khoaHoc.maKhoaHoc}</td>
              <td>{khoaHoc.biDanh}</td>
              <td>{khoaHoc.tenKhoaHoc}</td>
              <td>{khoaHoc.moTa}</td>
              <td>{khoaHoc.luotXem}</td>
              <td>{khoaHoc.ngayTao}</td>
              <td>{khoaHoc.nguoiTao.hoTen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
