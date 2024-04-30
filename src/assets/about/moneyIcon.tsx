
import styled from "styled-components"

const Imagem = styled.img`
  width: 80px;
  height: 80px;
`
export const ImageMoney = () => {
  return(
    <Imagem src="data:image/png;base64,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" alt="" />
  )
}