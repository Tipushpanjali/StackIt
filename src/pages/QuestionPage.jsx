import { useState } from 'react'
import { useParams } from 'react-router-dom'

const QuestionPage = () => {
  const { id } = useParams()
  const [answer, setAnswer] = useState('')
  
  // Mock data for a single question
  const question = {
    id: 1,
    title: 'How to use StackIt?',
    body: "I'm new to StackIt and I'm not sure how to use it. Can someone help me?",
    upvotes: 12,
    downvotes: 2,
    comments: 5,
    author: {
      name: 'Anonymous User',
      avatar: 'https://via.placeholder.com/40'
    },
    createdAt: '2 days ago'
  }
  
  // Mock data for answers
  const answers = [
    {
      id: 1,
      body: "To use StackIt, you can start by asking a question or searching for existing questions. If you have a question, click the 'Ask Question' button and provide a clear and concise description of your problem. If you're looking for answers, use the search bar to find relevant topics. You can also browse questions by tags or categories. Once you find a question, you can read the answers provided by other users and upvote or downvote them based on their helpfulness. If you have an answer to a question, you can post it by clicking the 'Answer' button. Remember to follow the community guidelines and be respectful of other users.",
      upvotes: 8,
      downvotes: 1,
      author: {
        name: 'Alex Turner',
        avatar: 'https://via.placeholder.com/40'
      },
      createdAt: '2 days ago'
    },
    {
      id: 2,
      body: "StackIt is a great platform for getting help with technical issues. Make sure to provide as much detail as possible when asking a question, including any error messages or code snippets. This will help others understand your problem better and provide more accurate answers. Also, don't forget to mark the best answer as 'Accepted' once your question is resolved. This helps other users find the solution more easily.",
      upvotes: 5,
      downvotes: 0,
      author: {
        name: 'Sophia Clark',
        avatar: 'https://via.placeholder.com/40'
      },
      createdAt: '1 day ago'
    }
  ]
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would submit the answer to an API
    console.log('Submitting answer:', answer)
    setAnswer('')
  }
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{question.title}</h1>
        <p className="text-gray-600 mb-6">{question.body}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
              </svg>
              <span>{question.upvotes}</span>
            </button>
            <button className="flex items-center space-x-1">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              <span>{question.downvotes}</span>
            </button>
            <button className="flex items-center space-x-1">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              <span>{question.comments}</span>
            </button>
          </div>
          
          <div className="flex items-center">
            <img src={question.author.avatar} alt={question.author.name} className="w-8 h-8 rounded-full mr-2" />
            <div>
              <div className="text-sm font-medium text-gray-900">{question.author.name}</div>
              <div className="text-xs text-gray-500">Asked {question.createdAt}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Answers</h2>
        
        {answers.map(answer => (
          <div key={answer.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-4">
            <p className="text-gray-700 mb-4">{answer.body}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                  </svg>
                  <span>{answer.upvotes}</span>
                </button>
                <button className="flex items-center space-x-1">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                  <span>{answer.downvotes}</span>
                </button>
              </div>
              
              <div className="flex items-center">
                <img src={answer.author.avatar} alt={answer.author.name} className="w-8 h-8 rounded-full mr-2" />
                <div>
                  <div className="text-sm font-medium text-gray-900">{answer.author.name}</div>
                  <div className="text-xs text-gray-500">Answered {answer.createdAt}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Answer</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              rows="6"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Write your answer"
            ></textarea>
          </div>
          
          <div className="flex items-center">
            <button
              type="button"
              className="mr-2 p-2 text-gray-500 hover:text-gray-700"
              title="Format code"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </button>
            
            <button
              type="submit"
              className="ml-auto px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Post Your Answer
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default QuestionPage