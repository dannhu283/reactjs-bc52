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

// Component: là một function return về cú pháp JSX mô tả giao diện sẽ được hiển thị
function App() {
  // JSX: Javascript XML là một cú pháp đặc biệt cho phép viết HTML bên trong Javascript
  return (
    // <>
    //   <h1>Hello BC52</h1>
    //   <Welcome />
    //   <Welcome />
    //   <Profile />
    // </>
    // <Events />
    // <Render />
    // <RenderList />
    // <Props />
    // <State />
    // <Form />
    // <Effect />

    //bài tập
    // <Home />
    // <Shop />
    // <ShoeShop />
    // <StateCar />
    // <Shopping />
    <UserManagement />
  );
}

export default App;
