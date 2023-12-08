import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const useMyReviews = () => {
const {user} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure();
  const { data, refetch } = useQuery({
    queryKey: ["MyReviews", user?.email],
    enabled : !!user?.email,
    queryFn: async () => {
      try {
        const response = await axiosSecure.get(`/my-reviews?email=${user?.email}`);
        return response.data;
      } catch (error) {
        throw new Error("Error fetching delivery man data");
      }
    },
  });
  return [data, refetch];
};

export default useMyReviews;
