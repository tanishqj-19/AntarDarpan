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
      
    },
    include: {
      analysis: true,
    } 
  })

  return entry;
}

const EntryPage = async ({  params }) => {

  const my_entry =  await getEntry(params.id)
  var {mood, summary, color, subject, negative} = my_entry?.analysis;

  const analysisData = [
    {name: 'Summary', value: summary},
    {name: 'Subject', value: subject},
    {name: 'Mood', value: mood},
    {name: 'Negative', value: negative ? 'True' : 'False'},
    

  ]
  
  return (
    <div className="h-full w-full grid grid-cols-3">
      <div className="col-span-2">
        <Editor entry={my_entry}/>
      </div>
      <div className="mt-5">
        <div className='px-6 py-10 rounded-tl-lg rounded-bl-lg shadow-md' style={{backgroundColor: color}}>
          <h2 className="text-2xl">Analysis</h2>
        </div>

        <div className="rounded-tl-lg rounded-bl-lg py-4 ">
            <ul>
              {
                analysisData.map(item => (
                  <li className=" flex items-center justify-between px-2 py-5 text-gray-800 border-b shadow-lg rounded-tl-lg rounded-bl-lg   border-white/10 shadom-md">
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