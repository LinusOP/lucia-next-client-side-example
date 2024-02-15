import { FakeAuthActions } from "@/components/FakeAuthActions";
import { ClientComponent } from "@/components/Client";
import { ServerComponent } from "@/components/Server";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4 gap-8">
      <h1 className="text-2xl">Lucia example for getting session client-side in NextJS</h1>
      <FakeAuthActions />
      <div className="flex gap-3">
        <div className="rounded-md border p-4 shadow">
          <span>I&apos;m a client component</span>
          <ClientComponent />
        </div>
        <div className="rounded-md border p-4 shadow">
          <span>I&apos;m a server component</span>
          <ServerComponent />
        </div>
      </div>
    </main>
  );
}
