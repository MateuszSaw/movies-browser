import React from  'react';
import { useQueryParameter, useReplaceQueryParameter } from '../../queryParameters';
import { Button, NextArrow, PreviousArrow, Strong, Text, Wrapper } from './styled';

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
      <PreviousArrow disabled={!disabledFirstButton}/>
      First
    </Button>
    <Button
      onClick={() => {onClickChange(+page - 1)}}
      disabled={disabledPreviousButton}
    >
       <PreviousArrow disabled={disabledPreviousButton}/>
      Previous
    </Button>
    <Text>Page <Strong>{ page || 1}</Strong> of <Strong>{totalPages}</Strong></Text>
    <Button
      onClick={() => {onClickChange(page === null ? 2 : +page + 1)}}
      disabled={disabledNextButton}
    >
      Next
      <NextArrow disabled={disabledNextButton}/>
    </Button>
    <Button
      onClick={() => {onClickChange(totalPages)}}
      disabled={disabledLastButton}
    >
      Last
      <NextArrow disabled={disabledLastButton}/>
    </Button>
  </Wrapper>
);
};