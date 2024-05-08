import React from "react";

import OrderDetailContainer from "@/app/components/Containers/Order/OrderDetailContainer";

const OrderDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div className="content-container flex-row">
      <OrderDetailContainer id={id} />
    </div>
  );
};

export default OrderDetailPage;
