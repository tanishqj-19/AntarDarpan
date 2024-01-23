const EntryCard = ({ entry }) => {

  const date = new Date(entry.createdAt).toDateString()
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white shadow-2xl ">
      <div className="px-4 py-5 ">{date}</div>
      <div className="px-4 py-5 ">{entry.analysis?.summary}</div>
      <div className="px-4 py-4 ">{entry.analysis?.mood}</div>
    </div>
  )
}

export default EntryCard