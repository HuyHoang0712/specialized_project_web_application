const EMPLOYEE_STATUS = [
  {
    label: "Inactive",
    value: 0,
  },
  {
    label: "Available",
    value: 2,
  },
  {
    label: "On Leave",
    value: 3,
  },
];

const VEHICLE_STATUS = [
  {
    label: "Repairing",
    value: 0,
  },
  {
    label: "Available",
    value: 2,
  },
  {
    label: "Delivering",
    value: 1,
  },
  {
    label: "Unavailable",
    value: 3,
  },
];

const ORDER_STATUS = [
  {
    label: "Pending",
    value: 0,
  },
  {
    label: "In-Progress",
    value: 1,
  },
  {
    label: "Completed",
    value: 2,
  },
  {
    label: "Cancelled",
    value: 3,
  },
];

const ISSUE_STATUS = [
  {
    label: "Pending",
    value: 0,
  },
  {
    label: "Approved",
    value: 2,
  },
  {
    label: "Denied",
    value: 3,
  },
  {
    label: "Cancelled",
    value: 4,
  },
];

export { EMPLOYEE_STATUS, VEHICLE_STATUS, ORDER_STATUS, ISSUE_STATUS };
