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
   await analyze(`I'm going to give you a journal entry, I want you to analyze for a few things. 
                  I need the mood, a summary, what the subject is, and a color representing the mood.
                  You need to respond back with formatted JSON like so:
                    {"mood": "", "subject": "", "color": "", "negative": ""}.`);
  
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