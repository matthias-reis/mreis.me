export function GET() {
  return new Response(null, {
    status: 204,
    headers: {
      "Content-Type": "application/json",
      // Verhindert, dass Browser den Ping cachen und zukünftige Pings nicht senden
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
}
