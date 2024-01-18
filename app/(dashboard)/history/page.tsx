import { getUserByClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db";


const getScore = async () => {
    const user = await getUserByClerkId();
    const analyses = await prisma.analysis.findMany({
        where:{
            userId: user.id,
        },
        select:{
            sentimentScore: true,
        }
    })
    const sum = analyses.reduce((all, curr) => {return all + curr.sentimentScore}, 0);
    const avg = Math.round(sum/analyses.length);
    return {analyses, avg};
}
const History = async () => {
    const {analyses, avg} = await getScore();
   
    console.log(analyses)

  return (
    
    <div>History {avg}</div>
  )
}

export default History