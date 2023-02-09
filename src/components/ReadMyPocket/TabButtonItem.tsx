import * as S from './styles/ReadMyPocket.styled';

interface GlobalLayoutProps {
  children?: React.ReactNode;
}

const TabButtonItem = ({ children }: GlobalLayoutProps) => {
  return <S.TabButtonItem>{children}</S.TabButtonItem>;
};

export default TabButtonItem;
