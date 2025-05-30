// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import StatsCard from './StatsCard';
import ExpenseChart from './ExpenseChart';
import ActivityFeed from './ActivityFeed';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import MonthFilter from './MonthFilter';
import Header from './Header';
import expenseData from '../data/expenseData';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(expenseData.months[1]); // مايو 2025 افتراضيًا
  const [allMonths] = useState(expenseData.months);

  useEffect(() => {
    // دمج الإيرادات والمصروفات
    const allTransactions = [...currentMonth.incomes, ...currentMonth.expenses];
    
    // ترتيب المعاملات حسب التاريخ (من الأحدث إلى الأقدم)
    const sortedTransactions = allTransactions.sort((a, b) => 
      new Date(b.date) - new Date(a.date)
    );
    
    setTransactions(sortedTransactions);
    setIncomes(currentMonth.incomes);
    setExpenses(currentMonth.expenses);
  }, [currentMonth]);

  // حساب الإحصائيات
  const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
  const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const monthlyBalance = totalIncome - totalExpense;
  const cashBalance = monthlyBalance - 1000; // قيمة تقديرية

  // معالجة المعاملات
  const handleAddTransaction = (newTransaction) => {
    const updatedTransactions = [newTransaction, ...transactions];
    setTransactions(updatedTransactions);
    
    if (newTransaction.type === 'income') {
      setIncomes([...incomes, newTransaction]);
    } else {
      setExpenses([...expenses, newTransaction]);
    }
    
    setShowForm(false);
    setEditingTransaction(null);
  };

  const handleEditTransaction = (updatedTransaction) => {
    const updatedTransactions = transactions.map(transaction =>
      transaction.id === updatedTransaction.id ? updatedTransaction : transaction
    );
    
    setTransactions(updatedTransactions);
    
    if (updatedTransaction.type === 'income') {
      setIncomes(incomes.map(inc => 
        inc.id === updatedTransaction.id ? updatedTransaction : inc
      ));
    } else {
      setExpenses(expenses.map(exp => 
        exp.id === updatedTransaction.id ? updatedTransaction : exp
      ));
    }
    
    setShowForm(false);
    setEditingTransaction(null);
  };

  const handleDeleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransactions(updatedTransactions);
    setIncomes(incomes.filter(inc => inc.id !== id));
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const handleEditClick = (transaction) => {
    setEditingTransaction(transaction);
    setShowForm(true);
  };

  const handleMonthChange = (monthName) => {
    const month = allMonths.find(m => m.name === monthName);
    if (month) {
      setCurrentMonth(month);
    }
  };

  // تجميع المصروفات حسب الفئة
  const categoryExpenses = expenses.reduce((acc, expense) => {
    const category = expense.category;
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += expense.amount;
    return acc;
  }, {});

  return (
    <div className="dashboard-container">
      <Header />
      
      <main className="dashboard-main">
        <div className="page-title">
          <h2>التدفق النقدي لشهر {currentMonth.name}</h2>
          <div className="controls">
            <MonthFilter 
              months={allMonths.map(m => m.name)} 
              currentMonth={currentMonth.name}
              onMonthChange={handleMonthChange}
            />
            <button 
              className="btn btn-success" 
              onClick={() => {
                setEditingTransaction(null);
                setShowForm(true);
              }}
            >
              <i className="fas fa-plus"></i> إضافة معاملة جديدة
            </button>
          </div>
        </div>
        
        <div className="stats-grid">
          <StatsCard 
            title="إجمالي الإيرادات" 
            value={`EGP ${totalIncome.toLocaleString('en-US')}`} 
            icon="💰" 
            color="#4CAF50" 
          />
          <StatsCard 
            title="إجمالي المصروفات" 
            value={`EGP ${totalExpense.toLocaleString('en-US')}`} 
            icon="💸" 
            color="#F44336" 
          />
          <StatsCard 
            title="الرصيد الشهري" 
            value={`EGP ${monthlyBalance.toLocaleString('en-US')}`} 
            icon="⚖️" 
            color="#2196F3" 
          />
          <StatsCard 
            title="الرصيد النقدي" 
            value={`EGP ${cashBalance.toLocaleString('en-US')}`} 
            icon="💳" 
            color="#FFC107" 
          />
        </div>
        
        <div className="content-grid">
          <div className="chart-container">
            <h3>توزيع المصروفات حسب الفئة</h3>
            <ExpenseChart expenses={expenses} />
          </div>
          
          <ActivityFeed 
            categoryExpenses={categoryExpenses} 
            transactions={transactions.slice(0, 4)} 
          />
        </div>
        
        <div className="table-section">
          <h3>سجل المعاملات</h3>
          <TransactionTable 
            transactions={transactions} 
            onEdit={handleEditClick} 
            onDelete={handleDeleteTransaction} 
          />
        </div>
      </main>
      
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <TransactionForm 
              onAdd={handleAddTransaction} 
              onEdit={handleEditTransaction} 
              onCancel={() => setShowForm(false)} 
              transaction={editingTransaction} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;