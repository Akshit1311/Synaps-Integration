import Image from "next/image";
import Modal from "./_components/Modal";

export default async function Home() {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "insomnia/9.3.3",
      "Api-Key": process.env.SYNAPS_API_KEY ?? "",
    },
    body: '{"alias":"MY_ALIAS"}',
  };

  const response = await fetch(
    "https://api.synaps.io/v4/session/init/",
    options
  );

  const { session_id } = await response.json();

  console.log({ session_id });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Modal sessionId={session_id} />
    </main>
  );
}
