import { create } from "domain";
import { apiSlice } from "../../apiSlice";
import URLS from "@/app/lib/urls";
import { employeeApiSlice } from "../employee/employeeApiSlice";
export const vehicleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVehicles: builder.query({
      query: () => URLS.VEHICLE_URL,
    }),
    getVehicleBrands: builder.query({
      query: () => URLS.VEHICLE_URL + "get_vehicle_brands/",
    }),
    createVehicle: builder.mutation({
      query: (data) => ({
        headers: { "Content-Type": "application/json" },
        url: URLS.VEHICLE_URL + "create_vehicle/",
        method: "POST",
        body: JSON.stringify(data),
      }),
    }),
    getVehicleById: builder.query({
      query: (id: string) =>
        URLS.VEHICLE_URL + "get_vehicle_by_license/?license_plate=" + id,
    }),
    assignDriver: builder.mutation({
      query: (data) => ({
        headers: { "Content-Type": "application/json" },
        url: URLS.VEHICLE_URL + "assign_driver/",
        method: "POST",
        body: JSON.stringify(data),
      }),
      onQueryStarted: async (
        { license_plate, driver_id },
        { dispatch, queryFulfilled }
      ) => {
        try {
          const res = await queryFulfilled;
          dispatch(
            vehicleApiSlice.util.prefetch("getVehicleById", license_plate, {
              force: true,
            })
          );
          dispatch(
            employeeApiSlice.util.prefetch("getUnassignedEmployees", "", {
              force: true,
            })
          );
        } catch (error) {
          throw error;
        }
      },
    }),
  }),
});

export const {
  useGetVehiclesQuery,
  useGetVehicleBrandsQuery,
  useCreateVehicleMutation,
  useGetVehicleByIdQuery,
  useAssignDriverMutation,
} = vehicleApiSlice;
