import VideoPage from "@/components/videoPage";

export default async function Page({ searchParams }: { searchParams: Promise<{ code?: string; city?: string }> }) {
  const { code, city } = await searchParams;

  return <VideoPage code={code ?? ""} city={city ?? ""} />
}
