import styled from 'styled-components'

const colors = {
  textGrey: '#afbdcb',
  textBlack: '#242525',
  boxShadow: 'rgba(0,0,0,.1)',
  border: '#e1e4e7',
  lightblue: '#66bff1',
  buttonBlue: '#63bef1',
  hoverButtonBlue: '#39b0f3',
  freshGreen: '#47c399',
}

export const H2 = styled.h3`
  color: ${colors.lightblue};
  text-align: left;
  margin-top: 0;
`
export const H4 = styled.div`
  color: ${colors.textGrey};
  margin-bottom: 20px;
`
export const H5 = styled.div`
  color: ${colors.textGrey};
  font-style: italic;
`
export const H6 = styled.div`
  color: ${colors.freshGreen};
  font-size: 12px;
  font-weight: 600;
`
export const Regular = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin: 5px;
  color: ${colors.textBlack};
`

export const Tr = styled.tr`
  height: 240px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  box-shadow: 0 1px 4px 0 ${colors.boxShadow};
  border: 1px solid ${colors.border};
  border-radius: 10px;
  overflow: hidden;
`
export const Td = styled.td`
  font-size: 15px;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const TdLeft = styled(Td)``

export const TdRight = styled(Td)`
  display: flex;
  justify-content: space-evenly;
`
export const InnerTr = styled.tr`
  display: flex;
  justifycontent: space-evenly;
  width: 100%;
`
export const InnerTdLeft = styled.td`
  textalign: left;
  width: 50%;
  padding: 10px;
  paddingleft: 30px;
`
export const InnerTdRight = styled.td`
  text-align: right;
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const PhotoContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

export const IconAndTextContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Button = styled.button`
  width: 110px;
  height: 35px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: ${colors.buttonBlue};
  color: white;
  border: none;

  &:hover {
    cursor: pointer;
    background: ${colors.hoverButtonBlue};
  }
`
