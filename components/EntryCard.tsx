const EntryCard = ({ entry }) => {

  const date = new Date(entry.createdAt).toDateString()
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white shadow-md ">
      <div className="px-4 py-5 sm:px-6">{date}</div>
      <div className="px-4 py-5 sm:p-6">{"Summary Mood"}</div>
      <div className="px-4 py-4 sm:px-6">{"Positive"}</div>
    </div>
  )
}

export default EntryCard