import { useMutation, useQueryClient } from "@tanstack/react-query";

const createUser = async (newUser) => {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  if (!response.ok) {
    throw new Error("Failed to create user");
  }
  return response.json();
};

const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] }); // Refetch users after creation
    },
  });
};

export default useCreateUser;
