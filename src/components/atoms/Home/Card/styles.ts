import styled from 'styled-components'

export const CardContainer  = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: 4px;
  padding: 0.625rem  0.688rem;

  display: flex;
  flex-direction: column;
  text-align: center;

  img {
    align-self: center;
    width: 147px;
    height: 188px;
  }

`
export const CardTitle  = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme['gray-500']};
  line-height: 16.4px;
  margin-top: 10px;
`
export const CardPrice  = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color:  ${(props) => props.theme.background};
  margin: 10px 0;
`

export const AddCharButton  = styled.button`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  border: 0;
  border-radius: 4px;
  padding: 11px 0;


  background-color: ${(props) => props.theme['blue-500']};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;

  img {
    width: 14px;
    height: 14px;
    margin-right: 5px;
  }

  span {
    font-size: 12px;
    font-weight: 400;
  }
`
