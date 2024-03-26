import React from "react";
import CreateModal from "@/app/components/Modals/CreateModal";
import CustomerList from "@/app/components/Lists/CustomerList";
const CustomersPage = () => {
  const create_customer_btn_props = {
    title: "Add a New Customer",
    type: "Customer",
  };

  return (
    <div className="content-container">
      <div className="self-end">
        <CreateModal {...create_customer_btn_props} />
      </div>
      <div className="flex h-[90%] bg-white p-3 rounded-xl">
        <CustomerList />
      </div>
    </div>
  );
};

export default CustomersPage;
