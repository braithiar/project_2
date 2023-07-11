import "bootstrap/dist/css/bootstrap.min.css";
import './globals.css'
import { NextAuthProvider } from "./providers";
import Navbar from '@/components/navbar/Navbar';


export const metadata = {
  title: "P2 Banking",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  async function getData() {
    try {
      const res = await fetch(`${process.env.API_URL}/mybank`, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZG9vbHo1MUBhb2wuY29tIiwiaWQiOjIyLCJyb2xlIjoiQ3VzdG9tZXIiLCJmaXJzdF9uYW1lIjoiUnlhbiIsImxhc3RfbmFtZSI6IkRvb2xleSIsImlhdCI6MTY4OTA3NDYyOCwiZXhwIjoxNjg5MDc1MjI4fQ.aVTzIF1cV3jQIyEp0MB_vehXcPGW3OZrgq5ql8yjW5NuX2w5GtYxnt3ckAIuk4QVliASLsIqbE9GeS4Sr9PUig",
          'Content-Type': 'application/json'
        }
      })
      if(res.ok) {
        const data = await res.json();
        return data;
      }
    } catch (e) {
      console.error('no bank')
      return null;
    }
  }
  const data = await getData();
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <Navbar {...data} />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}