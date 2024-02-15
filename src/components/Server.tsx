import { validateRequest } from "@/lib/auth/lucia";

export const ServerComponent = async () => {
  const session = await validateRequest();

  return <pre>{JSON.stringify(session, null, 2)}</pre>;
};
