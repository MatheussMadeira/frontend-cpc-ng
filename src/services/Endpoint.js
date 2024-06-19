import api from "./Api";

export async function postEventos(body) {
  const { data } = await api.post("/eventos", body);
  return data;
}
export async function getEventos() {
  const { data } = await api.get("/eventos");
  return data;
}
export async function updateEventos(data) {
  const { data } = await api.put(`/eventos/${data.id}`, data.body);
  return data;
}
export async function deleteEventos(id) {
  const { data } = await api.delete(`/eventos/${id}`);
  return data;
}
