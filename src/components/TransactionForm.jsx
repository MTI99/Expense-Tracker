// src/components/TransactionForm.jsx
import React, { useState, useEffect } from 'react';
import { FaSave, FaTimes } from 'react-icons/fa';

const TransactionForm = ({ onAdd, onEdit, onCancel, transaction }) => {
  const [formData, setFormData] = useState({
    type: 'income',
    date: new Date().toISOString().split('T')[0],
    amount: '',
    category: 'personal',
    description: ''
  });
  
  const categories = {
    income: [
      { value: 'عمل', label: 'عمل' },
      { value: 'استثمار', label: 'استثمار' },
      { value: 'هدية', label: 'هدية' },
      { value: 'أخرى', label: 'أخرى' }
    ],
    expense: [
      { value: 'شخصي', label: 'شخصي' },
      { value: 'منزلي', label: 'منزلي' },
      { value: 'عمل', label: 'عمل' },
      { value: 'استثمار', label: 'استثمار' },
      { value: 'أقساط', label: 'أقساط' },
      { value: 'أخرى', label: 'أخرى' }
    ]
  };
  
  useEffect(() => {
    if (transaction) {
      setFormData({
        id: transaction.id,
        type: transaction.type || 'income',
        date: transaction.date || new Date().toISOString().split('T')[0],
        amount: transaction.amount || '',
        category: transaction.category || 'personal',
        description: transaction.description || ''
      });
    } else {
      setFormData({
        type: 'income',
        date: new Date().toISOString().split('T')[0],
        amount: '',
        category: 'personal',
        description: ''
      });
    }
  }, [transaction]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // التحقق من صحة البيانات
    if (!formData.description || !formData.amount || formData.amount <= 0) {
      alert('الرجاء إدخال بيانات صحيحة');
      return;
    }
    
    const transactionData = {
      ...formData,
      id: formData.id || Date.now(), // إنشاء معرف جديد إذا لم يكن موجودًا
      amount: parseFloat(formData.amount)
    };
    
    if (transaction) {
      onEdit(transactionData);
    } else {
      onAdd(transactionData);
    }
  };

  return (
    <div className="transaction-form">
      <div className="form-header">
        <h3>{transaction ? 'تعديل المعاملة' : 'إضافة معاملة جديدة'}</h3>
        <button className="close-btn" onClick={onCancel}>
          <FaTimes />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="transactionType">نوع المعاملة</label>
            <select 
              id="transactionType" 
              name="type" 
              value={formData.type} 
              onChange={handleChange}
            >
              <option value="income">إيراد</option>
              <option value="expense">مصروف</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="transactionDate">التاريخ</label>
            <input 
              type="date" 
              id="transactionDate" 
              name="date" 
              value={formData.date} 
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="transactionAmount">المبلغ (EGP)</label>
            <input 
              type="number" 
              id="transactionAmount" 
              name="amount" 
              value={formData.amount} 
              onChange={handleChange}
              placeholder="أدخل المبلغ" 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="transactionCategory">الفئة</label>
            <select 
              id="transactionCategory" 
              name="category" 
              value={formData.category} 
              onChange={handleChange}
            >
              {(formData.type === 'income' 
                ? categories.income 
                : categories.expense
              ).map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group" style={{ gridColumn: 'span 2' }}>
            <label htmlFor="transactionDescription">الوصف</label>
            <input 
              type="text" 
              id="transactionDescription" 
              name="description" 
              value={formData.description} 
              onChange={handleChange}
              placeholder="أدخل وصف المعاملة" 
            />
          </div>
        </div>
        
        <div className="form-actions">
          <button type="submit" className="btn btn-success">
            <FaSave /> حفظ المعاملة
          </button>
          <button type="button" className="btn btn-danger" onClick={onCancel}>
            <FaTimes /> إلغاء
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;