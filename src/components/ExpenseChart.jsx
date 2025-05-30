// src/components/ExpenseChart.jsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ExpenseChart = ({ expenses }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current && expenses.length > 0) {
      // تجميع المصروفات حسب الفئة
      const categories = expenses.reduce((acc, expense) => {
        const category = expense.category;
        if (!acc[category]) {
          acc[category] = 0;
        }
        acc[category] += expense.amount;
        return acc;
      }, {});
      
      const labels = Object.keys(categories);
      const data = Object.values(categories);
      
      const backgroundColors = [
        '#3498db', '#2ecc71', '#9b59b6', '#e74c3c', '#f1c40f', '#1abc9c', 
        '#d35400', '#34495e', '#8e44ad', '#c0392b', '#16a085', '#27ae60'
      ];
      
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            data: data,
            backgroundColor: backgroundColors.slice(0, labels.length),
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'left',
              rtl: true,
              labels: {
                font: {
                  size: 14
                }
              }
            }
          }
        }
      });
    }
    
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [expenses]);

  return (
    <div className="chart-placeholder">
      <canvas ref={chartRef} id="expenseChart"></canvas>
    </div>
  );
};

export default ExpenseChart;