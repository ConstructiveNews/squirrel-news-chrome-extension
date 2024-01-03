export default function Theme() {
  return (
    <div>
      <select className="px-2 py-1 text-sm rounded-md bg-gray-100 dark:bg-gray-800 dark:text-gray-100">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  )
}