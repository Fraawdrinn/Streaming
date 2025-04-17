import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import type { Metadata } from 'next'
import Image from 'next/image'

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: anime } = await supabase
    .from('anime')
    .select('nom')
    .eq('id_anime', params)
    .single()

  return {
    title: anime?.nom || 'Anime',
  }
}

export default async function AnimeDetailPage({ params }: { params: { id: string } }) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  // Fetch the specific anime by ID
  const { data: anime, error } = await supabase
    .from('anime')
    .select('id_anime, nom, synopsis, image') 
    .eq('id_anime', params.id)  // Use the dynamic 'id' from the route
    .single()  // We expect one anime based on the ID

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <h1>{anime?.nom}</h1>
      <Image
        src={anime?.image || '/placeholder.jpg'}  // Use a placeholder if image is not available
        alt={anime?.nom}
        width={400}
        height={600}
        className="rounded-md" />
      <p>{anime?.synopsis}</p>
      {/* Display more anime details as needed */}
    </div>
  )
}
