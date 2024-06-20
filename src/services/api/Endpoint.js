import api from "./Api";

export async function postEvents(body) {
  const { data } = await api.post(`/events`, body);
  return data;
}
export async function getEvents() {
  const { data } = await api.get(`/events`);
  return data;
}
export async function updateEvents(data) {
  const { data1 } = await api.put(`/events/${data.id}`, data.body);
  return data1;
}
export async function deleteEvents(id) {
  const { data } = await api.delete(`/events/${id}`);
  return data;
}
