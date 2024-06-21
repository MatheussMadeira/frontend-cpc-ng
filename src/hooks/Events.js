import { useMutation, useQuery } from "@tanstack/react-query";
import {
  deleteEvents,
  postEvents,
  getEvents,
  updateEvents,
} from "../services/api/Endpoint";

export function useGetEvents({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ["eventos"],
    queryFn: getEvents,
    onError,
    onSuccess,
  });
}
export function usePostEvents({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: postEvents,
    onSuccess,
    onError,
  });
}
export function useDeleteEvents({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: deleteEvents,
    onError,
    onSuccess,
  });
}
export function useUpdateEvents({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: updateEvents,
    onError,
    onSuccess,
  });
}
