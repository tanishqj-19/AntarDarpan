import EntryCard from "@/components/EntryCard"
import NewEntryCard from "@/components/NewEntryCard"
import { getUserByClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db"


 
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
    <div className="px-10 py-5h-full">
      <h2 className="text-3xl mb-8 px-10 font-bold leading-relaxed text-sky-500"> Journal </h2>
      <div className="grid grid-cols-3 gap-4 p-10">
          <NewEntryCard />
          {entries.map((entry) => (
            <EntryCard key = {entry.id} entry={entry} />
          ))}
      </div>
    </div>
  )
}

export default JournalPage