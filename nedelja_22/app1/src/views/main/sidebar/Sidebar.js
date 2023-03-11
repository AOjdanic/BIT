import SidebarMembers from "./SidebarMembers.js";

import SidebarActions from "./SidebarActions.js";

export default function Sidebar() {
  return (
    <div>
      Ovo je sidebar
      <SidebarActions></SidebarActions>
      <SidebarMembers></SidebarMembers>
    </div>
  );
}
