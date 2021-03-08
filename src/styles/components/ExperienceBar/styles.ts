import styled from 'styled-components'

export const ExperienceBar = styled.header`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  > span {
    color: ${({ theme }) => theme.colors.bars.current};
  }
  span {
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    text-align: center;

    font-size: 1.4rem;
    margin: 0 1.4rem;
  }
`
export const ExperienceFinalBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;

  height: 0.4rem;
  border-radius: 0.4rem;
  background: ${({ theme }) => theme.colors.bars.final};
  opacity: background 0.5;
  position: relative;
`
export const ExperienceBarGreen = styled.span<{ percent: number }>`
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  align-items: center;
  width: ${(props) => props.percent}%;
  position: absolute;
  height: 0.4rem;
  border-radius: 0.4rem;
  background: ${({ theme }) => theme.colors.bars.current};
  transform: translateX(-1.3rem);
`

export const CurrentExperienceBar = styled.span<{ percent: number }>`
  background-color: ${({ theme }) => theme.colors.bars.current};
  color: white;
  padding: 0.4rem 0.5rem;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  align-items: center;

  left: ${(props) => props.percent}%;
  bottom: 1.2rem;
  position: absolute;
  transform: translateX(-80%);

  z-index: 1000;
  opacity: 1;

  &:before {
    content: '';
    display: block;
    position: absolute;
    border-right: 1.2rem solid transparent;
    border-left: 1.2rem solid transparent;
    border-top: 1rem solid ${({ theme }) => theme.colors.bars.current};
    border-radius: 5rem 5rem;
    margin-top: 1.9rem;
    margin-bottom: -2.2rem;
  }
`
