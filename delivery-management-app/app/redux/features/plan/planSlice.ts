import {
  createSlice,
  PayloadAction,
  createDraftSafeSelector,
} from "@reduxjs/toolkit";
import { Plan } from "@/app/lib/types";
interface PlanState {
  planList: Plan[];
}

const initialState: PlanState = {
  planList: [],
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setPlanList: (state, action: PayloadAction<Plan[]>) => {
      state.planList = action.payload;
    },
  },
});

export const { setPlanList } = planSlice.actions;
const selectPlanState = (state: any) => state.plan;
export const selectPlanList = createDraftSafeSelector(
  selectPlanState,
  (state) => state.planList
);

export default planSlice.reducer;
