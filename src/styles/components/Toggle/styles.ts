import styled from 'styled-components'

export const SwitchButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.bars.current};
  &:focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }
  svg {
    color: ${({ theme }) => theme.colors.bars.current};
  }
`
