import { Link } from 'react-router-dom'

const QuestionCard = ({ question }) => {
  // Function to get the appropriate icon based on the question category
  const getIcon = (image) => {
    switch(image) {
      case 'database':
        return (
          <div className="bg-teal-800 p-4 rounded-md flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
            </svg>
          </div>
        )
      case 'code':
        return (
          <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
          </div>
        )
      case 'mobile':
        return (
          <div className="bg-blue-100 p-4 rounded-md flex items-center justify-center">
            <svg className="w-12 h-12 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
          </div>
        )
      case 'social':
        return (
          <div className="bg-blue-700 p-4 rounded-md flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
            </svg>
          </div>
        )
      default:
        return (
          <div className="bg-gray-200 p-4 rounded-md flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
        )
    }
  }

  return (
    <Link to={`/questions/${question.id}`} className="block">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
        <div className="p-6 flex">
          <div className="flex-shrink-0 mr-6">
            {getIcon(question.image)}
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-500 mb-1">{question.category}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{question.title}</h3>
            <p className="text-gray-600 mb-4">{question.description}</p>
            <div className="flex items-center">
              <button className="flex items-center text-gray-500 hover:text-blue-500">
                <span className="font-medium mr-1">Vote ({question.votes})</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default QuestionCard