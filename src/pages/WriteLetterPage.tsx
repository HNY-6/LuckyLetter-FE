import {
  SelctPocketTitle,
  SelectPocketWrapper,
} from "@/components/SelectPocket/index.style";
import DefaultButton from "@/components/UI/Button";
import styled from "styled-components";

const WriteLetterPage = () => {
  return (
    <>
      <SelectPocketWrapper>
        <SelctPocketTitle></SelctPocketTitle>
        <DefaultButton label={`다음`} />
      </SelectPocketWrapper>
    </>
  );
};

export default WriteLetterPage;
