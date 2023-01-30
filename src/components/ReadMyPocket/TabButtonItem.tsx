import TabButtonItemStyle from "./TabButtonItemStyle";

interface GlobalLayoutProps {
  children?: React.ReactNode;
  key: string;
  // onClick: () => void;
}

const TabButtonItem = (props: GlobalLayoutProps) => {
  return <TabButtonItemStyle>{props.children}</TabButtonItemStyle>;
};

export default TabButtonItem;
