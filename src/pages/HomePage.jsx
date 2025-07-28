import { useState } from 'react'
import { Link } from 'react-router-dom'
import QuestionCard from '../components/QuestionCard'

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('newest')
  
  // Mock data for questions
  const questions = [
    {
      id: 1,
      category: 'Technology',
      title: 'How to optimize database queries for large datasets?',
      description: 'I\'m working on a project that involves querying a large dataset, and I\'m experiencing performance issues. What are some best practices for optimizing database queries to handle large amounts of data efficiently?',
      votes: 12,
      image: 'database'
    },
    {
      id: 2,
      category: 'Programming',
      title: 'Best practices for writing clean and maintainable code',
      description: 'What are some essential principles and practices for writing code that is easy to read, understand, and maintain over time? I\'m looking for advice on code structure, naming conventions, and documentation.',
      votes: 8,
      image: 'code'
    },
    {
      id: 3,
      category: 'Design',
      title: 'How to conduct effective user research for product development?',
      description: 'I\'m planning to develop a new product and want to ensure it meets user needs. What are the best methods for conducting user research to gather valuable insights and inform the design process?',
      votes: 15,
      image: 'mobile'
    },
    {
      id: 4,
      category: 'Marketing',
      title: 'Strategies for increasing brand awareness on social media',
      description: 'I\'m looking to improve my brand\'s visibility on social media platforms. What are some effective strategies for increasing brand awareness, engaging with the audience, and driving traffic to my website?',
      votes: 20,
      image: 'social'
    }
  ]

  return (
    <div>
      <div className="mb-6">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search questions"
            className="w-full py-3 pl-10 pr-4 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('newest')}
            className={`pb-4 px-1 ${activeTab === 'newest' ? 'border-b-2 border-blue-500 font-medium text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Newest
          </button>
          <button
            onClick={() => setActiveTab('most-voted')}
            className={`pb-4 px-1 ${activeTab === 'most-voted' ? 'border-b-2 border-blue-500 font-medium text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Most Voted
          </button>
          <button
            onClick={() => setActiveTab('most-answered')}
            className={`pb-4 px-1 ${activeTab === 'most-answered' ? 'border-b-2 border-blue-500 font-medium text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Most Answered
          </button>
          <button
            onClick={() => setActiveTab('unanswered')}
            className={`pb-4 px-1 ${activeTab === 'unanswered' ? 'border-b-2 border-blue-500 font-medium text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Unanswered
          </button>
        </nav>
      </div>

      <div className="space-y-6">
        {questions.map(question => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button className="px-4 py-2 rounded-md bg-blue-500 text-white font-medium">1</button>
          <button className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">2</button>
          <button className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">3</button>
          <button className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">4</button>
          <button className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">5</button>
          <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </nav>
      </div>

      <Link to="/ask" className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
      </Link>
    </div>
  )
}

export default HomePage