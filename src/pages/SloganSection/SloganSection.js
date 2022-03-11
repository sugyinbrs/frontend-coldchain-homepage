import React from "react";
import styled from "styled-components";

const SloganSection = () => {
  return (
    <SloganContainer>
      <SloganUpperContent>대한민국 No.1 Cold-Chain Platform</SloganUpperContent>
      <SloganLowerContent>
        팀프레시는 국내 유일 Door to Door Cold Chain 통합물류 서비스를
        제공합니다. 입출고 – 주문처리 - 새벽배송 전 과정에 신선도 유지를 위한
        설비/역량을 보유하고 있습니다.
      </SloganLowerContent>
    </SloganContainer>
  );
};

export default SloganSection;

const SloganContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 100px;
  background-color: #172d4c;
  line-height: 1.4;
`;

const SloganUpperContent = styled.p`
  margin-bottom: 16px;
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

const SloganLowerContent = styled.p`
  margin-bottom: 16px;
  color: #fff;
  text-align: center;
  font-size: 19px;
`;
