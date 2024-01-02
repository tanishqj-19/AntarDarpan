import EntryCard from "@/components/EntryCard"
import NewEntryCard from "@/components/NewEntryCard"
import { getUserByClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db"
import Link from "next/link"


 
const getEntries = async () => {
  const user  = await getUserByClerkId()
  const entries = await prisma.journalEntry.findMany({
    where:{
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    }
  })

  return entries;
}

const JournalPage = async () => {
  const entries = await getEntries();
  
  return (
    <div className="px-5 py-5h-full">
      
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