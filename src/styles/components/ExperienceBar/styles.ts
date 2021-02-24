import styled from 'styled-components'

export const ExperienceBar = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1.4rem;
    margin: 0 1.4rem;
  }
  div {
    flex: 1;
    height: 0.4rem;
    border-radius: 0.4rem;
    background: ${({ theme }) => theme.colors.grayLine};

    position: relative;

    div {
      height: 0.4rem;
      border-radius: 0.4rem;
      background: ${({ theme }) => theme.colors.green};
    }
  }
`

export const CurrentExperienceBar = styled.span`
  position: absolute;
  top: 1.2rem;
  transform: translateX(-50%);
`
