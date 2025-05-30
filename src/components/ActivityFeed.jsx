// src/components/ActivityFeed.jsx
import React from 'react';

const ActivityFeed = ({ categoryExpenses, transactions }) => {
  // حساب إجمالي المصروفات
  const totalExpenses = Object.values(categoryExpenses).reduce((sum, amount) => sum + amount, 0);
  
  // تحديد أعلى 4 فئات
  const topCategories = Object.entries(categoryExpenses)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4);

  // ألوان الفئات
  const categoryColors = {
    'شخصي': '#3498db',
    'منزلي': '#2ecc71',
    'عمل': '#9b59b6',
    'استثمار': '#e74c3c',
    'أقساط': '#f1c40f',
    'أخرى': '#1abc9c'
  };

  return (
    <div className="activity-feed">
      <h3>توزيع المصروفات حسب الفئة</h3>
      <div className="summary-card">
        {topCategories.map(([category, amount]) => (
          <React.Fragment key={category}>
            <div className="category-item">
              <span>{category}</span>
              <span>{amount.toLocaleString('ar-SA')} ر.س</span>
            </div>
            <div className="category-bar">
              <div 
                className="category-progress" 
                style={{ 
                  width: `${(amount / totalExpenses * 100).toFixed(0)}%`, 
                  backgroundColor: categoryColors[category] || '#3498db'
                }}
              ></div>
            </div>
          </React.Fragment>
        ))}
      </div>
      
      <div className="summary-card">
        <h4>آخر المعاملات <i className="fas fa-history"></i></h4>
        {transactions.slice(0, 4).map(transaction => (
          <div key={transaction.id} className="category-item">
            <span>{transaction.description}</span>
            <span style={{ color: transaction.type === 'income' ? '#4CAF50' : '#F44336' }}>
              {transaction.type === 'income' ? '+' : '-'}
              {transaction.amount.toLocaleString('ar-SA')} ر.س
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;