import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function SharedAppLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}
export default SharedAppLayout