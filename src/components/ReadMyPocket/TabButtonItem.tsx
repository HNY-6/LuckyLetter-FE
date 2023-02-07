import TabButtonItemStyle from './TabButtonItemStyle';

interface GlobalLayoutProps {
  children?: React.ReactNode;
}

const TabButtonItem = ({ children }: GlobalLayoutProps) => {
  return <TabButtonItemStyle>{children}</TabButtonItemStyle>;
};

export default TabButtonItem;
