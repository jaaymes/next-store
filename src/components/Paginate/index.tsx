
interface IPaginate {
  nextPage: () => void
  prevPage: () => void
  totalPages: number
  setPage: (num: number) => void
  page: number
}

export function Paginate({ nextPage, prevPage, totalPages, setPage, page }: IPaginate) {
  return (
    <ul className="inline-flex items-center -space-x-px">
      <li>
        <a onClick={prevPage} className={
          `${page === 1 && "disabled:pointer-events-none bg-gray-200"}
          block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
          <span className="sr-only">Anterior</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
        </a>
      </li>
      <li>
        {
          // @ts-ignore
          [...Array(totalPages).keys()].map(item => {
            return (
              <a
                key={item}
                onClick={() => setPage(item + 1)}
                className={
                  `py-2 px-3 
                leading-tight
                ${page === item + 1 && "text-blue-600 bg-blue-50"}
                border border-gray-300
              hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400
                dark:hover:bg-gray-700 dark:hover:text-white`}
              >{item + 1}</a>
            )
          })
        }

      </li>
      <li>
        <a onClick={nextPage} className={
          `
          ${totalPages === page && "disabled:pointer-events-none bg-gray-200"}
          block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
          <span className="sr-only">Proximo</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        </a>
      </li>
    </ul>
  )
}