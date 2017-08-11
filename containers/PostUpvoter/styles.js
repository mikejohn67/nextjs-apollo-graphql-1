import * as T from '~/components/Theme';

// eslint-disable-next-line import/prefer-default-export
export const UpvoteButton = T.Button.extend`
  display: inline-block;
  background-color: transparent;
  border: 1px solid #e4e4e4;
  color: #000;

  &:active {
    background-color: transparent;
  }

  &:before {
    content: "▲";
    margin-right: 7px;
  }
`;
