import { Outlet } from "react-router";
import MenuBar from "../components/MenuBar";

export default function LayoutAdmin() {
  return (
    <>
    <MenuBar/>
    <Outlet/>
    </>
  )
}