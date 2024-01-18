import Chart from "@/components/Chart";
import { getUserByClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db";


const getScore = async () => {
    const user = await getUserByClerkId();
    const analyses = await prisma.analysis.findMany({
        where:{
            userId: user.id,
        },
        orderBy:{
            createdAt: 'asc',
        }
    })
    const sum = analyses.reduce((all, curr) => {return all + curr.sentimentScore}, 0);
    const avg = Math.round(sum/analyses.length);
    return {analyses, avg};
}
const History = async () => {
    const {analyses, avg} = await getScore();
   
    return (
        <div className="w-full h-full overflow-y-auto">
            <div className="ml-12 mt-2 text-purple-600 font-semibold ">{`Average Sentiment Score: ${avg}`}</div>
            <div className="w-full h-[90%] overflow-hidden">
                <Chart  data={analyses}/>
            </div>

        </div>
    )
}

export default History