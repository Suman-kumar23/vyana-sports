import { useState } from "react";
import { Drawer } from "react-native-paper";
const Sidebar = () => {
  const [active, setActive] = useState("");
  return (
    <Drawer.Section title="some title">
      <Drawer.Item
        label="First Item"
        active={active === "first"}
        onPress={() => setActive("first")}
      />
      <Drawer.Item
        label="Second Item"
        active={active === "second"}
        onPress={() => setActive("second")}
      />
    </Drawer.Section>
  );
};

export default Sidebar;
