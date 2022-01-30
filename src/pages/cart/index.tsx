import React from 'react';
import styled from '@emotion/styled';

import { DUMMY_DATA } from '../../constants/index';

interface propsData {
  datas: [
    {
      src: string;
      seller: string;
      title: string;
      price: number;
      sale: number;
      content: string;
      orderNum: number;
    }
  ];
}
const Cart = ({ datas }: propsData) => {
  const FAKE_DATA = [...[DUMMY_DATA], ...[DUMMY_DATA]];
  return (
    <Container>
      장바구니 // 브레드 컴브가 필요
      <CartContainer>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
              상품정보
            </th>
            <th>옵션</th>
            <th>상품금액</th>
            <th>배송비</th>
          </tr>
        </thead>
        <tbody>
          {FAKE_DATA &&
            FAKE_DATA.map((data) => {
              return (
                <tr>
                  <td>
                    <img src={data.imageArray[0]} />
                    <div>
                      <p>{data.seller}</p>
                      <p>{data.title}</p>
                      <p>
                        <span>
                          {data.price -
                            (data.price / 100) * data.discount_percent}
                          원
                        </span>
                        <span>{data.price}원</span>
                      </p>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              );
            })}
        </tbody>
      </CartContainer>
    </Container>
  );
};

export default Cart;
const Container = styled.section`
  width: 95%;
  margin: 10px auto;
`;

const CartContainer = styled.table`
  width: 100%;
  margin-top: 20px;
  border-top: 2px solid black;
  tr {
    display: grid;
    grid-template-columns: 4fr 3fr 1fr 1fr;
  }
  tr > th {
    padding: 20px 0;
    font-size: 16px;
    border-bottom: 1px solid #dadada;
  }
  tr > * > input {
    border: none;
  }
  tbody > tr {
    border-bottom: 1px solid #dadada;
  }
  tbody > tr > td {
    padding: 10px;
    border-right: 1px solid #dadada;
  }
  tr > td {
    display: flex;
    align-items: center;
  }
  tr > td > img {
    width: 100px;
    margin-right: 10px;
  }
  tr > td > div > p {
    font-size: 16px;
    line-height: 1.6;
    :nth-child(3) > :nth-child(2) {
      margin-left: 10px;
      color: #dadada;
      text-decoration: line-through;
    }
  }
`;
