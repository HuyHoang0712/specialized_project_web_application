export interface User {
  id: string;
  username: string;
  password: string;
  [key: string]: any;
}

export interface Credential {
  username: string;
  password: string;
}

export interface Issue {
  id: number;
  title: string;
  description: string;
  date_time: string;
  status: number;
  label: string;
  creator: string | null;
}

export interface Plan {
  id: number;
  date: string;
  total_order: number;
  pending_order: number;
  completed_order: number;
  in_progress_order: number;
  cancel_order: number;
  issue_count: number;
}
