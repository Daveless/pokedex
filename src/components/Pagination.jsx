import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../store/slices/pageNumber.slice";




const Pagination = ({postsPerPage, totalPosts}) => {
    const pageNumbers = []
for(let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++) {
pageNumbers.push(i);
}

const globalPageNumber = useSelector(state => state.pageNumber)

const dispatch = useDispatch()
const handlePagination = (pageNumber) => {
    dispatch(changePage(pageNumber))
}


  return (
    <nav className="flex list-none text-2xl mt-5 pb-10 m-auto justify-center">
        {pageNumbers.map(pageNumber => (
            <li className={`mx-3 px-5 py-2 rounded-lg ${pageNumber===globalPageNumber && 'bg-red-500 text-white'}`}  onClick={() => handlePagination(pageNumber)} key={pageNumber}>{pageNumber}</li>
        ))}
    </nav>
  )
}
export default Pagination