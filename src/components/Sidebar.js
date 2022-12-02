import SidebarItem from "./SidebarItem"
import items from "../data/sidebar.json"


export default function Sidebar(){
    return (
        <div className="sidebar">
            <div className="logo">
                <img src="logo.png" alt="Logo" />
            </div>
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}