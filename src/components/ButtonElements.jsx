import styled from 'styled-components';
import {Link} from 'react-scroll'

export const Button = styled(Link)`
  border-radius: 50px;
  border: 2px solid #fff;
  background: ${({primary}) => (primary ?  '#01bf7100' : '#010606')};
  white-space: nowrap;
  padding: ${({big}) =>  (big ? '14px  48px' : '12px 30px')};
  color: ${({dark}) =>  (dark ? 'white' : 'white')};
  font-size:${({fontBig}) =>  (fontBig ? '20px' : '16px')};
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ?  'white' : 'black')};
    color: black;
  }
`