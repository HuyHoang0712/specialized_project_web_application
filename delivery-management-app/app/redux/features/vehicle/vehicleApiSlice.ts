import { create } from "domain";
import { apiSlice } from "../../apiSlice";
import URLS from "@/app/lib/urls";

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
        url: URLS.VEHICLE_URL + "create_vehicle/",
        method: "POST",
        body: data,
      }),
    }),
    getVehicleById: builder.query({
      query: (id: string) =>
        URLS.VEHICLE_URL + "get_vehicle_by_license/?license_plate=" + id,
    }),
  }),
});

export const {
  useGetVehiclesQuery,
  useGetVehicleBrandsQuery,
  useCreateVehicleMutation,
  useGetVehicleByIdQuery,
} = vehicleApiSlice;
