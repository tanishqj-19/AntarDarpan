import EntryCard from "@/components/EntryCard"
import NewEntryCard from "@/components/NewEntryCard"
import Question from "@/components/Question"
import Welcome from "@/components/Welcome"
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
    },
    include:{
      analysis: true,
    }
    
  })
  
  
  return entries;
}


const JournalPage = async () => {
  const entries = await getEntries();
  
  return (
    <div className="px-5 py-5 h-full">
      <Welcome />
      <div className="mt-5">
        <Question />
      </div>
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