import React, { useState, useEffect } from 'react';
import StatsCard from './StatsCard';
import ExpenseChart from './ExpenseChart';
import ActivityFeed from './ActivityFeed';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import MonthFilter from './MonthFilter';
import Header from './Header';
import { getCurrentData, getOrCreateMonth, updateData } from '../data/expenseData';

const Dashboard = () => {
  const [allMonths, setAllMonths] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);

  // Load data on component mount
  useEffect(() => {
    const data = getCurrentData();
    setAllMonths(data.months);
    setCurrentMonth(data.months[data.months.length - 1]);
  }, []);

  // Update and save data helper
  const updateAndSave = (updatedMonths) => {
    updateData({ ...getCurrentData(), months: updatedMonths });
    setAllMonths(updatedMonths);
  };

  // Get transactions for current month
  const transactions = currentMonth 
    ? [...currentMonth.incomes, ...currentMonth.expenses]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    : [];

  const incomes = currentMonth?.incomes || [];
  const expenses = currentMonth?.expenses || [];

  // Calculate stats
  const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
  const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const monthlyBalance = totalIncome - totalExpense;
  const cashBalance = monthlyBalance - 1000;

  // Category expenses
  const categoryExpenses = expenses.reduce((acc, expense) => {
    const category = expense.category;
    if (!acc[category]) acc[category] = 0;
    acc[category] += expense.amount;
    return acc;
  }, {});

  // Add transaction
  const handleAddTransaction = (newTransaction) => {
    const transactionDate = new Date(newTransaction.date);
    const targetMonth = getOrCreateMonth(transactionDate);
    
    if (newTransaction.type === 'income') {
      targetMonth.incomes.push(newTransaction);
    } else {
      targetMonth.expenses.push(newTransaction);
    }
    
    const updatedMonths = [...getCurrentData().months];
    updateAndSave(updatedMonths);
    
    if (currentMonth.name === targetMonth.name) {
      setCurrentMonth({ ...targetMonth });
    }
    
    setShowForm(false);
    setEditingTransaction(null);
  };

  // Edit transaction
  const handleEditTransaction = (updatedTransaction) => {
    const transactionDate = new Date(updatedTransaction.date);
    const targetMonth = getOrCreateMonth(transactionDate);
    
    const updatedMonths = [...allMonths];
    const originalMonthIndex = updatedMonths.findIndex(m => 
      m.incomes.some(t => t.id === updatedTransaction.id) || 
      m.expenses.some(t => t.id === updatedTransaction.id)
    );
    
    if (originalMonthIndex >= 0) {
      const originalMonth = updatedMonths[originalMonthIndex];
      
      // Remove from original month
      if (updatedTransaction.type === 'income') {
        originalMonth.incomes = originalMonth.incomes.filter(t => t.id !== updatedTransaction.id);
      } else {
        originalMonth.expenses = originalMonth.expenses.filter(t => t.id !== updatedTransaction.id);
      }
      
      // Add to target month
      if (updatedTransaction.type === 'income') {
        targetMonth.incomes.push(updatedTransaction);
      } else {
        targetMonth.expenses.push(updatedTransaction);
      }
      
      updateAndSave(updatedMonths);
      
      // Update current month if needed
      if (currentMonth.name === targetMonth.name || currentMonth.name === originalMonth.name) {
        setCurrentMonth(
          updatedMonths.find(m => m.name === currentMonth.name) || 
          updatedMonths[updatedMonths.length - 1]
        );
      }
    }
    
    setShowForm(false);
    setEditingTransaction(null);
  };

  // Delete transaction
  const handleDeleteTransaction = (id) => {
    const updatedMonths = [...allMonths];
    const monthIndex = updatedMonths.findIndex(m => 
      m.incomes.some(t => t.id === id) || 
      m.expenses.some(t => t.id === id)
    );
    
    if (monthIndex >= 0) {
      const month = updatedMonths[monthIndex];
      month.incomes = month.incomes.filter(t => t.id !== id);
      month.expenses = month.expenses.filter(t => t.id !== id);
      
      updateAndSave(updatedMonths);
      
      if (currentMonth.name === month.name) {
        setCurrentMonth({ ...month });
      }
    }
  };

  const handleEditClick = (transaction) => {
    setEditingTransaction(transaction);
    setShowForm(true);
  };

  const handleMonthChange = (monthName) => {
    const month = allMonths.find(m => m.name === monthName);
    if (month) setCurrentMonth(month);
  };

  if (!currentMonth) return <div>Loading...</div>;

  return (
    <div className="dashboard-container">
      <Header />
      
      <main className="dashboard-main">
        <div className="page-title">
          <h2>Cash Flow for {currentMonth.name}</h2>
          <div className="controls">
            <MonthFilter 
              months={allMonths.map(m => m.name)} 
              currentMonth={currentMonth.name}
              onMonthChange={handleMonthChange}
            />
            <button 
              className="btn btn-primary" 
              onClick={() => {
                setEditingTransaction(null);
                setShowForm(true);
              }}
            >
              <i className="fas fa-plus"></i> Add Transaction
            </button>
          </div>
        </div>
        
        <div className="stats-grid">
          <StatsCard 
            title="Total Income" 
            value={`EGP ${totalIncome.toLocaleString('en-US')}`} 
            icon="💰" 
            color="#4CAF50" 
          />
          <StatsCard 
            title="Total Expenses" 
            value={`EGP ${totalExpense.toLocaleString('en-US')}`} 
            icon="💸" 
            color="#F44336" 
          />
          <StatsCard 
            title="Monthly Balance" 
            value={`EGP ${monthlyBalance.toLocaleString('en-US')}`} 
            icon="⚖️" 
            color="#2196F3" 
          />
          <StatsCard 
            title="Cash Balance" 
            value={`EGP ${cashBalance.toLocaleString('en-US')}`} 
            icon="💳" 
            color="#FFC107" 
          />
        </div>
        
        <div className="content-grid">
          <div className="chart-container">
            <h3>Expense Distribution</h3>
            <ExpenseChart expenses={expenses} />
          </div>
          
          <ActivityFeed 
            categoryExpenses={categoryExpenses} 
            transactions={transactions.slice(0, 4)} 
          />
        </div>
        
        <div className="table-section">
          <h3>Transaction History</h3>
          {transactions.length > 0 ? (
            <TransactionTable 
              transactions={transactions} 
              onEdit={handleEditClick} 
              onDelete={handleDeleteTransaction} 
            />
          ) : (
            <div className="empty-state">
              <i className="fas fa-file-invoice-dollar"></i>
              <p>No transactions found</p>
            </div>
          )}
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