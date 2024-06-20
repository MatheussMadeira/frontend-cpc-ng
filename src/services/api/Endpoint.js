import api from "./Api";

export async function postEvents(body) {
  const { data } = await api.post(`/eventos`, body);
  return data;
}
export async function getEvents() {
  const { data } = await api.get(`/eventos`);
  return data;
}
export async function updateEvents(data) {
  const { data1 } = await api.put(`/eventos/${data.id}`, data.body);
  return data1;
}
export async function deleteEvents(id) {
  const { data } = await api.delete(`/eventos/${id}`);
  return data;
}
