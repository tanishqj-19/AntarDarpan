import Editor from "@/components/Editor"
import { getUserByClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db"

const getEntry = async (id) => {
  const user = await getUserByClerkId()

  const entry = await prisma.journalEntry.findUnique({
    where:{
      userId_id: {
        id,
        userId: user.id,
      },
    }
  })

  return entry;
}

const EntryPage = async ({  params }) => {

  const my_entry =  await getEntry(params.id)
  
  return (
    <div>
      <Editor entry={my_entry}/>
    </div>
  )
}

export default EntryPage