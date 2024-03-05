export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request): Promise<Response> {
  console.log("Received request");
  return new Response("Hello world!");
}
