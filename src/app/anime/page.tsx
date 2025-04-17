import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import AnimeList from '@/components/animelist'


export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: animes } = await supabase.from('anime').select()

  return (
    <div className="flex flex-col justify-center items-center py-2 w-full">
      <h1 className="text-2xl font-bold mb-4">Anime List</h1>
      <AnimeList animes={animes || []} />
    </div>
  )
}