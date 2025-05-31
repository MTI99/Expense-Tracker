import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'expense_tracker_data';

const defaultData = {
  months: [{
    name: new Date().toLocaleString('default', { month: 'long', year: 'numeric' }),
    incomes: [],
    expenses: []
  }]
};

export const getCurrentData = () => {
  const storedData = localStorage.getItem(STORAGE_KEY);
  return storedData ? JSON.parse(storedData) : defaultData;
};

export const updateData = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const getOrCreateMonth = (date) => {
  const monthName = date.toLocaleString('default', { month: 'long', year: 'numeric' });
  const data = getCurrentData();
  
  let month = data.months.find(m => m.name === monthName);
  
  if (!month) {
    month = {
      name: monthName,
      incomes: [],
      expenses: []
    };
    data.months.push(month);
    updateData(data);
  }
  
  return month;
};