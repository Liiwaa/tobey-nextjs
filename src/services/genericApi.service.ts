import IServerSuccessResponse from "../server/ServerSuccessResponse";

export const getRequest = async <T>(url: string): Promise<IServerSuccessResponse<T>> => {
  const response = await fetch(url);
  return response.json();
};

export const postRequest = async <T>(url: string, payload: any): Promise<IServerSuccessResponse<T>> => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const putRequest = async <T>(url: string, payload: any): Promise<IServerSuccessResponse<T>> => {
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const deleteRequest = async <T>(url: string): Promise<IServerSuccessResponse<T>> => {
  const response = await fetch(url, { method: "DELETE" });
  return response.json();
};

export const deleteRequestWithPayload = async <T>(url: string, payload: any): Promise<IServerSuccessResponse<T>> => {
  const response = await fetch(url, {
    method: "DELETE",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const postUntrackedRequest = async <T>(url: string): Promise<IServerSuccessResponse<T>> => {
  const response = await fetch(url, { method: "POST" });
  return response.json();
};
