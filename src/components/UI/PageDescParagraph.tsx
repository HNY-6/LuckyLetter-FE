import PageDescParagraphStyle from './PageDescParagraphStyle';

interface GlobalLayoutProps {
  children?: React.ReactNode;
}

const PageDescParagraph = (props: GlobalLayoutProps) => {
  return <PageDescParagraphStyle>{props.children}</PageDescParagraphStyle>;
};

export default PageDescParagraph;
