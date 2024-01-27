'use client';

import { Card } from 'flowbite-react';

const EntryCard = ({ entry }) => {

  const date = new Date(entry.createdAt).toDateString()
  const mood = entry.analysis?.mood.charAt(0).toUpperCase() + entry.analysis?.mood.slice(1);
  const subject = entry.analysis?.subject.charAt(0).toUpperCase() + entry.analysis?.subject.slice(1);
  const summary = entry.analysis.summary + ".";

  
  return (
    <Card className="max-w-sm hover:bg-gray-300 hover:border-white/10">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {subject}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {summary}
      </p>
      <div className='flex justify-between text-gray-500'>
        <p className='text-black text-sm'>
          {`Mood: ${mood}`}
        </p>
        <p className='text-black text-sm'>
          {date}
        </p>
      </div>
    </Card>
    // <div className="overflow-hidden rounded-xl bg-white shadow-2xl ">
    //   <div className="px-4 py-5 text-black font-semibold">{date}</div>
    //   <div className="px-4 py-5 text-gray-700 font-sans ">{entry.analysis?.summary}</div>
    //   <div className="px-4 py-4 ">{mood}</div>
    // </div>
  )
}

export default EntryCard