import Editor from "@/components/Editor"
import { getUserByClerkId } from "@/utils/auth"


const getEntry = async (id) => {
  const user = await getUserByClerkId()

  const entry = await prisma.journalEntry.findUnique({
    where:{
      id,
      userId: user.id,
    }
  })
}

const EntryPage = ({  params }) => {
  
  return (
    <div>
      <Editor entry={params}/>
    </div>
  )
}

export default EntryPage