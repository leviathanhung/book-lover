import React from "react";
import {
  StyleBody,
  StyleNameProduct,
  WrapperCardStyle,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReportText,
} from "./style";
import { StarFilled } from "@ant-design/icons";

const CardComponent = () => {
  return (
    <StyleBody>
      <WrapperCardStyle
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <StyleNameProduct>Iphone</StyleNameProduct>
        <WrapperReportText>
          <span style={{ marginRight: "6px" }}>
            <span>4.96 </span>
            <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          </span>
          <span> | Da ban 1000+ </span>
        </WrapperReportText>
        <WrapperPriceText>
          1.000.000đ
          <WrapperDiscountText>-5%</WrapperDiscountText>
        </WrapperPriceText>
      </WrapperCardStyle>
    </StyleBody>
  );
};

export default CardComponent;
