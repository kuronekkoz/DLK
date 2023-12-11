import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import "swiper/scss";

import Register from "components/form/RegisterForm";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import DatLichKhamPage from "pages/DatLichKhamPage";
import HomePage from "pages/HomePage";
import Main from "components/layout/Main";
import LienHePage from "pages/LienHePage";
import DropDown from "components/dropdown/Dropdown";
import GioiThieuPage from "pages/GioiThieuPage";
import NavBar2 from "components/layout/NavBar2";
import DichVuPage from "pages/DichVuPage";
import HeadDown from "components/layout/HeadDown";
import KhamVsDieuTri from "pages/DichVuPages/KhamVsDieuTri";
import Dashboard from "dashboard/Dashboard";
import DatLichKhamForm from "components/form/DatLichKhamForm";

import CustomDatePicker from "components/DatePicker/CustomDatePicker";

function App() {
  return (
    <Fragment>
      {/* <Routes>
        <Route path="/" element={<Main></Main>}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path="DatLichKhamPage" element={<DatLichKhamPage />}></Route>
          <Route path="LienHePage" element={<LienHePage />}></Route>
          <Route path="GioiThieuPage" element={<GioiThieuPage />}></Route>
          <Route path="DichVu">
            <Route index element={<DichVuPage />}></Route>
            <Route path="Kham-va-dieu-tri" element={<KhamVsDieuTri />}></Route>
          </Route>
        </Route>
      </Routes> */}

      {/* <DropDown></DropDown> */}
      {/* <Header></Header> */}
      {/* <NavBar2></NavBar2> */}
      {/* <HeadDown></HeadDown> */}
      {/* <DichVuPage></DichVuPage> */}
      {/* <Dashboard></Dashboard> */}
      {/* <CustomDatePicker></CustomDatePicker> */}
      <DatLichKhamForm></DatLichKhamForm>
    </Fragment>
  );
}

export default App;
