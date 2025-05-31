import React from 'react';
import { FaArrowUp, FaArrowDown, FaListAlt, FaMoneyBillWave } from 'react-icons/fa';

const ActivityFeed = ({ categoryExpenses, transactions, className }) => {
  const totalExpenses = Object.values(categoryExpenses).reduce((sum, amount) => sum + amount, 0);
  
  const topCategories = Object.entries(categoryExpenses)
    .sort(([, amountA], [, amountB]) => amountB - amountA) // Sort by amount descending
    .slice(0, 4); // Get top 4

  const categoryColors = {
    'Personal': '#3B82F6', // blue-500
    'Home': '#10B981',     // green-500
    'Installments': '#8B5CF6', // violet-500
    'Invest': '#EF4444',   // red-500
    'Saving': '#F59E0B',   // amber-500
    'Work': '#6366F1',     // indigo-500
    'Other': '#6B7280',    // gray-500
  };

  return (
    <div className={`activity-feed ${className || ''}`}>
      <div className="summary-card bg-transparent p-0">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Top Expense Categories</h3>
        {topCategories.length > 0 ? topCategories.map(([category, amount]) => (
          <div key={category} className="mb-3">
            <div className="category-item flex justify-between items-center text-sm mb-1">
              <span className="text-gray-600 font-medium">{category}</span>
              <span className="text-gray-800 font-semibold">{amount.toLocaleString('ar-EG')} EGP</span>
            </div>
            <div className="category-bar bg-gray-200 rounded-full h-2.5">
              <div 
                className="category-progress h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ 
                  width: totalExpenses > 0 ? `${(amount / totalExpenses * 100).toFixed(0)}%` : '0%', 
                  backgroundColor: categoryColors[category] || categoryColors['Other']
                }}
              ></div>
            </div>
          </div>
        )) : (
          <div className="empty-list text-center py-4">
             <FaMoneyBillWave className="mx-auto text-3xl text-gray-400 mb-2" />
            <p className="text-sm text-gray-500">No expense categories to show.</p>
          </div>
        )}
      </div>
      
      <div className="summary-card bg-transparent p-0 mt-6">
        <h4 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
          <FaListAlt className="mr-2 text-indigo-500" /> Recent Transactions
        </h4>
        {transactions && transactions.length > 0 ? (
          <ul className="space-y-3">
            {transactions.map(transaction => (
              <li key={transaction.id} className="category-item flex justify-between items-center text-sm pb-2 border-b border-gray-200 last:border-b-0">
                <div className="flex items-center">
                   {transaction.type === 'income' 
                    ? <FaArrowUp className="mr-2 text-green-500" /> 
                    : <FaArrowDown className="mr-2 text-red-500" />
                   }
                  <span className="text-gray-700 truncate max-w-[150px] sm:max-w-xs" title={transaction.description}>{transaction.description}</span>
                </div>
                <span className={`font-semibold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.type === 'income' ? '+' : '-'}
                  {transaction.amount.toLocaleString('ar-EG')} EGP
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="empty-list text-center py-4">
            <FaListAlt className="mx-auto text-3xl text-gray-400 mb-2" />
            <p className="text-sm text-gray-500">No recent transactions.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityFeed;
