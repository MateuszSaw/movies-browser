import React from  'react';
import { useQueryParameter, useReplaceQueryParameter } from '../../queryParameters';
import { Button, ButtonText, NextArrow, NextArrowContainer, PrevioustArrowContainer, PreviousArrow, Strong, Text, Wrapper } from './styled';

export const Pagination = ({ totalPages }) => {
  const replaceQueryParameter = useReplaceQueryParameter();
  const page = useQueryParameter("page");

  const onClickChange = (page) => {
    replaceQueryParameter({
      key: "page",
      value: page.toString(),
    });
  };

  const disabledFirstButton = +page > 1 && "disabled";
  const disabledPreviousButton = +page < 2 && "disabled";
  const disabledNextButton = +page >= totalPages && "disabled";
  const disabledLastButton = +page === totalPages && "disabled";

return (
  <Wrapper>
    <Button
      onClick={() => { onClickChange(1) }}
      disabled={!disabledFirstButton}
    >
      <PrevioustArrowContainer disabled={!disabledFirstButton}>
      <PreviousArrow />
      <PreviousArrow />
      </PrevioustArrowContainer>
      <ButtonText>First</ButtonText>
    </Button>
    <Button
      onClick={() => {onClickChange(+page - 1)}}
      disabled={disabledPreviousButton}
    >
      <PrevioustArrowContainer disabled={disabledPreviousButton}>
        <PreviousArrow />
      </PrevioustArrowContainer>
       <ButtonText>Previous</ButtonText>
    </Button>
    <Text>Page <Strong>{ page || 1}</Strong> of <Strong>{totalPages}</Strong></Text>
    <Button
      onClick={() => {onClickChange(page === null ? 2 : +page + 1)}}
      disabled={disabledNextButton}
    >
      <ButtonText>Next</ButtonText>
      <NextArrowContainer >
      <NextArrow disabled={disabledNextButton}/>
      </NextArrowContainer>
    </Button>
    <Button
      onClick={() => {onClickChange(totalPages)}}
      disabled={disabledLastButton}
    >
      <ButtonText>Last</ButtonText>
      <NextArrowContainer >
      <NextArrow disabled={disabledLastButton}/>
      <NextArrow disabled={disabledLastButton}/>
      </NextArrowContainer>

    </Button>
  </Wrapper>
);
};