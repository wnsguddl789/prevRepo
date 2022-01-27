import styled from "@emotion/styled"

export const Card = () => {
  const CardData = {
    src: "./images/라인꽃반지.jpg",
    label: "라인 꽃 반지",
    price: 160000,
    sale: 18,
    content: "아기자기한 꽃과 블링한 다이아가 조화롭게 선을 이룬 반지입니다. 가드링으로 착용하시기 좋고, 쌍가락지로 착용하기도 좋습니다.",
  }

  const salePrice = (CardData.price*(100-CardData.sale)*0.01).toLocaleString(undefined);
  const OriginPrice = CardData.price.toLocaleString(undefined);

  return (
    <Container>
      <img src={CardData.src} alt={CardData.label} />
      <Label>[HeartRing] {CardData.label}</Label>
      <PriceContainer>
      <SalePrice>{salePrice}원</SalePrice>
      <Price>{OriginPrice}원</Price>
      <Sale>{CardData.sale}%</Sale>
      </PriceContainer>
      <Content>{CardData.content}</Content>
    </Container>
    )
}

const Container = styled.article`
  width: 100%;
`;
const Label = styled.h3`
  font-weight: 700;
  margin-top: 10px;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;
const SalePrice = styled.span`
  font-weight: 700;
`;
const Price = styled.span`
position: relative;
  font-size: 14px;
  opacity: 0.5;
  margin: 0 10px 0 5px;
  &::before{
    content: '';
    position: absolute;
    top: 10px;
    left: 2px;
    width: 100%;
    height: 1px;
    background-color: #000;
  }
`;
const Sale = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #A26F59;
`;
const Content = styled.p`
  opacity: 0.4;
`;