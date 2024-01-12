import EntryCard from "@/components/EntryCard"
import NewEntryCard from "@/components/NewEntryCard"
import Welcome from "@/components/Welcome"
import { analyze } from "@/utils/ai"
import { getUserByClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db"
import Link from "next/link"



 
const getEntries = async () => {
  const dbuser  = await getUserByClerkId()

 
  const entries = await prisma.journalEntry.findMany({
    where:{
      userId: dbuser.id,
    },
    orderBy: {
      createdAt: 'desc',
    }
  })
  //  await analyze(`
  //  Today was a rollercoaster of emotions, 
  //  a symphony of highs and lows. The morning sun brought a warm sense of optimism, 
  //  yet by midday, frustration clouded my thoughts like a sudden storm. 
  //  Despite the challenges, an unexpected kindness from a stranger turned my day around, 
  //  leaving me with a grateful heart. As the sun set, a tinge of melancholy settled in, 
  //  a reminder that even amidst chaos, moments of beauty can emerge. Tonight, 
  //  I lay down with a mix of exhaustion and contentment, embracing the unpredictable dance of emotions that life orchestrates.`);
  
  return entries;
}

const JournalPage = async () => {
  const entries = await getEntries();
  
  return (
    <div className="px-5 py-5 h-full">
      <Welcome />
      <div className="grid grid-cols-3 gap-4 p-10">
          <NewEntryCard />
          {entries.map((entry) => (
            <Link href={`/journal/${entry.id}`}>
              <EntryCard key = {entry.id} entry={entry} />
            </Link>
          ))}
      </div>
  
    </div>
  )
}

export default JournalPage