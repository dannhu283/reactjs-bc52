import Welcome from "./1_Components/Welcome";
import Profile from "./2_JSX/Profile";
import Events from "./3_Events/Events";
import Render from "./4_ConditionalRendering/Render";
import RenderList from "./5_RenderList/RenderList";
import Props from "./6_Props/Props";
import State from "./7_State/State";
import Home from "./Ex_HomeLayout/Home";
import Shop from "./Ex_ShopLayout/Shop";
import ShoeShop from "./Ex_ShoesShop/ShoeShop";
import StateCar from "./EX_StateCar/StateCar";
import Shopping from "./Ex_Shopping/Shopping";
import Form from "./8_Form/Form";
import Effect from "./9_Effect/Effect";
import UserManagement from "./EX_UserManagement/UserManagement";
import Ref from "./10_Ref/Ref";
import CustomHooks from "./11_CustomHooks/CustomHooks";
import Redux from "./12_Redux/Redux";
import BookTicket from "./EX_BookTicket/BookTicket";
import ReduxThunk from "./13_ReduxThunk/ReduxThunk";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import PostList from "./14_Router/PostList";
import PostDetails from "./14_Router/PostDetails";
import Styles from "./15_Styles/Styles";
// Component: là một function return về cú pháp JSX mô tả giao diện sẽ được hiển thị
function App() {
  // JSX: Javascript XML là một cú pháp đặc biệt cho phép viết HTML bên trong Javascript
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shopping />} />
          <Route path="user" element={<UserManagement />} />

          <Route path="posts" element={<PostList />} />
          {/* Dynamic segment */}
          <Route path="posts/:id" element={<PostDetails />} />

          <Route path="styles" element={<Styles />} />
        </Route>

        {/* trang not found phaỉ nằm dưới cùng */}
        <Route path="*" element={<h1>Not Found...</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
