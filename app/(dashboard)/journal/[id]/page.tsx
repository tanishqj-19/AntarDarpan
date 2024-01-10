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

  const analysisData = [
    {name: 'Summary', value:''},
    {name: 'Subject', value:''},
    {name: 'Mood', value:''},
    {name: 'Negative', value:'False'},
    

  ]
  
  return (
    <div className="h-full w-full grid grid-cols-3">
      <div className="col-span-2">
        <Editor entry={my_entry}/>
      </div>
      <div className="">
        <div className="bg-[#B0C4DE] px-6 py-10 rounded shadow-md">
          <h2 className="text-2xl">Analysis</h2>
        </div>

        <div>
            <ul>
              {
                analysisData.map(item => (
                  <li className="flex items-center justify-between px-2 py-4 text-gray-800 border-b  border-black/10 shadom-md">
                    <span className="text-lg font-semibold ">{item.name}</span>
                    <span className="">{item.value}</span>

                  </li>
                ))
              }
            </ul>
          </div>
        
      </div>
    </div>
  )
}

export default EntryPage