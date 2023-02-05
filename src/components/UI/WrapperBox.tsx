import WrapperBoxStyle from './WrapperBoxStyle';

interface GlobalLayoutProps {
  children?: React.ReactNode;
}

const WrapperBox = (props: GlobalLayoutProps) => {
  return <WrapperBoxStyle>{props.children}</WrapperBoxStyle>;
};

export default WrapperBox;
