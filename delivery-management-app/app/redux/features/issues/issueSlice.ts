import {
  createDraftSafeSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Issue } from "@/app/lib/types";

interface IssueState {
  issueList: Issue[];
}

const initialState: IssueState = {
  issueList: [],
};

const issueSlice = createSlice({
  name: "issue",
  initialState,
  reducers: {
    setIssues: (state, action: PayloadAction<Issue[]>) => {
      state.issueList = action.payload;
    },
  },
});

export const { setIssues } = issueSlice.actions;

const selectIssues = (state: any) => state?.issue;
export const selectIssuesList = createDraftSafeSelector(
  selectIssues,
  (issue) => issue.issueList
);

export default issueSlice.reducer;
