export interface ApiResponse {
  data?: any;
  status: boolean;
  imageUrl?: string;
  message?: string;
}

export interface ListResponse<T> {
  data: T[];
}

export interface Login {
  data?: any;
  status: boolean;
  imageUrl?: string;
  message?: string;
}
