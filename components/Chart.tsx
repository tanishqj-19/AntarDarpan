'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const CustomTooltip = ({ payload, label, active }) => {
    const dateLabel = new Date(label).toLocaleString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    })
  
    if (active) {
      const analysis = payload[0].payload
      return (
        <div className="p-8 custom-tooltip bg-sky-200/5 shadow-md border border-black/10 rounded-lg backdrop-blur-md relative">
          <div
            className="absolute left-2 top-2 w-2 h-2 rounded-full"
            style={{ background: analysis.color }}
          ></div>
          <p className="label text-sm text-black/30">{dateLabel}</p>
          <p className="intro text-xl uppercase">{analysis.mood}</p>
        </div>
      )
    }
  
    return null
  }

const Chart = ({data}) => {
  return (
    <ResponsiveContainer width="90%" height="90%" className="mt-8 ml-[50px] px-5 py-5  bg-neutral-200 shadow-xl rounded-xl overflow-y-auto">
        <LineChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
        
          <CartesianGrid vertical={false}/>
          <XAxis dataKey="createdAt" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="sentimentScore" stroke="#0066FF"  strokeWidth={1.5}  activeDot={{ r: 8 }} />
    
        </LineChart>
      </ResponsiveContainer>
  )
}

export default Chart

// "#0066FF"