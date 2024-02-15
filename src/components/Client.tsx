"use client";

import { useSession } from "@/lib/auth/SessionContext";

export const ClientComponent = () => {
  const session = useSession();

  return <pre>{JSON.stringify(session, null, 2)}</pre>;
};
