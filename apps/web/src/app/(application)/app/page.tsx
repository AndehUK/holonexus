import { client } from "@/lib/hono";

const AppHomePage = async () => {
  const result = await client.api.shards[":allyCode"].$get({
    param: { allyCode: "123456789" },
  });

  return <div>App Home Page {JSON.stringify((await result.json()).data)}</div>;
};

export default AppHomePage;
