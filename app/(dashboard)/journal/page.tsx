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
    <div className="px-5 py-5 h-full">
      <h2 className="text-5xl px-8 font-bold leading-[1.15] 
      bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Journal</h2>
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