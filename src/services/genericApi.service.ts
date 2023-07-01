import IServerSuccessResponse from "../server/ServerSuccessResponse";

const BaseURL = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:8000";

const checkResponse = async (response: Response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json() as IServerSuccessResponse<any>;
};

export const getRequest = async <T>(url: string): Promise<IServerSuccessResponse<T>> => {
  const response = await fetch(BaseURL + url, {
    headers: {
      "Accept": "application/json"
    },
  });
  return checkResponse(response);
};

export const postRequest = async <T>(url: string, payload: any): Promise<IServerSuccessResponse<T>> => {
  const response = await fetch(BaseURL + url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
  });
  return checkResponse(response);
};

export const putRequest = async <T>(url: string, payload: any): Promise<IServerSuccessResponse<T>> => {
  const response = await fetch(BaseURL + url, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
  });
  return checkResponse(response);
};

export const deleteRequest = async <T>(url: string): Promise<IServerSuccessResponse<T>> => {
  const response = await fetch(BaseURL + url, {
    method: "DELETE",
    headers: {
      "Accept": "application/json"
    },
  });
  return checkResponse(response);
};

export const deleteRequestWithPayload = async <T>(url: string, payload: any): Promise<IServerSuccessResponse<T>> => {
  const response = await fetch(BaseURL + url, {
    method: "DELETE",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
  });
  return checkResponse(response);
};

export const postUntrackedRequest = async <T>(url: string): Promise<IServerSuccessResponse<T>> => {
  const response = await fetch(BaseURL + url, {
    method: "POST",
    headers: {
      "Accept": "application/json"
    },
  });
  return checkResponse(response);
};
