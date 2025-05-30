// src/data/expenseData.js
const expenseData = {
  months: [
    {
      name: "ديسمبر 2024",
      incomes: [
        { id: 1, date: "2024-12-01", description: "جزء من مرتب شهر 11", amount: 1400, category: "عمل" },
        { id: 2, date: "2024-12-05", description: "جهاز السيريس اس", amount: 13400, category: "استثمار" },
        { id: 3, date: "2024-12-10", description: "باقي المرتب", amount: 2350, category: "عمل" },
        { id: 4, date: "2024-12-15", description: "رد سلفة مصطفي", amount: 800, category: "أخرى" },
        { id: 5, date: "2024-12-20", description: "بدل مصاريف الشغل", amount: 1020, category: "عمل" },
        { id: 6, date: "2024-12-25", description: "ظبط فرق فلوس", amount: 30, category: "أخرى" }
      ],
      expenses: [
        { id: 7, date: "2024-12-01", description: "ماما", amount: 200, category: "منزلي" },
        { id: 8, date: "2024-12-02", description: "بنزين", amount: 50, category: "شخصي" },
        { id: 9, date: "2024-12-03", description: "متفرقات", amount: 200, category: "شخصي" },
        { id: 10, date: "2024-12-04", description: "فاتورة مياة", amount: 10, category: "منزلي" },
        { id: 11, date: "2024-12-05", description: "حساب العمارة", amount: 180, category: "منزلي" },
        { id: 12, date: "2024-12-06", description: "مصطفي", amount: 500, category: "شخصي" },
        { id: 13, date: "2024-12-07", description: "ترزي", amount: 60, category: "شخصي" },
        { id: 14, date: "2024-12-08", description: "علاج", amount: 65, category: "منزلي" },
        { id: 15, date: "2024-12-09", description: "رفاهيات", amount: 50, category: "شخصي" },
        { id: 16, date: "2024-12-10", description: "بنزين", amount: 50, category: "شخصي" },
        { id: 17, date: "2024-12-11", description: "رد سلفة من الفيزا الاحتياطية", amount: 2700, category: "استثمار" },
        { id: 18, date: "2024-12-12", description: "بن", amount: 60, category: "منزلي" },
        { id: 19, date: "2024-12-13", description: "بنزين", amount: 50, category: "شخصي" },
        { id: 20, date: "2024-12-14", description: "اكل يومين", amount: 50, category: "شخصي" },
        { id: 21, date: "2024-12-15", description: "مصاريف للبيت", amount: 60, category: "منزلي" },
        { id: 22, date: "2024-12-16", description: "جمعية", amount: 2000, category: "أقساط" },
        { id: 23, date: "2024-12-17", description: "قسط التليفون", amount: 1000, category: "أقساط" },
        { id: 24, date: "2024-12-18", description: "سكر", amount: 30, category: "منزلي" },
        { id: 25, date: "2024-12-19", description: "بن", amount: 55, category: "منزلي" },
        { id: 26, date: "2024-12-20", description: "رفاهيات", amount: 265, category: "شخصي" },
        { id: 27, date: "2024-12-21", description: "فاتورة النت", amount: 340, category: "منزلي" },
        { id: 28, date: "2024-12-22", description: "شحن رصيد", amount: 60, category: "منزلي" },
        { id: 29, date: "2024-12-23", description: "بنزين", amount: 50, category: "شخصي" },
        { id: 30, date: "2024-12-24", description: "اكل ومصاريف جانبية", amount: 150, category: "شخصي" },
        { id: 31, date: "2024-12-25", description: "دراعات اكس بوكس", amount: 6100, category: "استثمار" },
        { id: 32, date: "2024-12-26", description: "مصطفي", amount: 500, category: "شخصي" },
        { id: 33, date: "2024-12-27", description: "كورة", amount: 20, category: "شخصي" },
        { id: 34, date: "2024-12-28", description: "علاج", amount: 135, category: "منزلي" },
        { id: 35, date: "2024-12-29", description: "?", amount: 255, category: "شخصي" },
        { id: 36, date: "2024-12-30", description: "بنزين", amount: 150, category: "شخصي" },
        { id: 37, date: "2024-12-31", description: "اكل ومصاريف جانبية", amount: 200, category: "شخصي" }
      ]
    },
    {
      name: "يناير 2025",
      incomes: [
        { id: 38, date: "2025-01-05", description: "مرتب شهر 12", amount: 5500, category: "عمل" },
        { id: 39, date: "2025-01-10", description: "فائض شهر 12", amount: 2200, category: "أخرى" },
        { id: 40, date: "2025-01-15", description: "بيع دراع ون اس", amount: 1500, category: "استثمار" },
        { id: 41, date: "2025-01-20", description: "بيع مكنتين وغطايين انالوج", amount: 400, category: "استثمار" },
        { id: 42, date: "2025-01-25", description: "بدل مصاريف شغل AGS", amount: 450, category: "عمل" },
        { id: 43, date: "2025-01-30", description: "نسبة بيع جهاز سيريس اكس", amount: 1100, category: "استثمار" }
      ],
      expenses: [
        { id: 44, date: "2025-01-01", description: "اكل", amount: 60, category: "شخصي" },
        { id: 45, date: "2025-01-03", description: "جوانتي", amount: 140, category: "شخصي" },
        { id: 46, date: "2025-01-05", description: "علاج", amount: 70, category: "منزلي" },
        { id: 47, date: "2025-01-07", description: "اكل عصافير", amount: 50, category: "شخصي" },
        { id: 48, date: "2025-01-10", description: "علاج", amount: 60, category: "منزلي" },
        { id: 49, date: "2025-01-12", description: "مكنتين وغطايين انالوج", amount: 200, category: "استثمار" },
        { id: 50, date: "2025-01-15", description: "مصاريف نقل الاجهزة", amount: 450, category: "عمل" },
        { id: 51, date: "2025-01-18", description: "اكل وكورة", amount: 150, category: "شخصي" },
        { id: 52, date: "2025-01-20", description: "جمعيات", amount: 5000, category: "أقساط" },
        { id: 53, date: "2025-01-22", description: "قسط التليفون", amount: 1000, category: "أقساط" },
        { id: 54, date: "2025-01-25", description: "؟", amount: 160, category: "شخصي" },
        { id: 55, date: "2025-01-27", description: "جمعية احمد", amount: 1000, category: "أقساط" },
        { id: 56, date: "2025-01-29", description: "اكل ومصاريف جانبية", amount: 200, category: "شخصي" },
        { id: 57, date: "2025-01-30", description: "فواتير كهربا وموبايل للبيت", amount: 100, category: "منزلي" },
        { id: 58, date: "2025-01-31", description: "مصاريف بيت", amount: 150, category: "منزلي" }
      ]
    },
    {
      name: "فبراير 2025",
      incomes: [
        { id: 59, date: "2025-02-05", description: "مرتب شهر يناير", amount: 8000, category: "عمل" },
        { id: 60, date: "2025-02-10", description: "دراع ون اس", amount: 1400, category: "استثمار" }
      ],
      expenses: [
        { id: 61, date: "2025-02-01", description: "رحمة", amount: 200, category: "منزلي" },
        { id: 62, date: "2025-02-03", description: "زيت موتسيكل", amount: 200, category: "شخصي" },
        { id: 63, date: "2025-02-05", description: "بنزين", amount: 50, category: "شخصي" },
        { id: 64, date: "2025-02-07", description: "مصاريف جانبية", amount: 150, category: "شخصي" },
        { id: 65, date: "2025-02-10", description: "صيانة دراعات بغدادي", amount: 175, category: "استثمار" },
        { id: 66, date: "2025-02-12", description: "شلبي", amount: 720, category: "شخصي" },
        { id: 67, date: "2025-02-15", description: "علاج", amount: 140, category: "منزلي" },
        { id: 68, date: "2025-02-18", description: "جمعية أم أسماء", amount: 3000, category: "أقساط" },
        { id: 69, date: "2025-02-20", description: "طلبات للبيت", amount: 150, category: "منزلي" },
        { id: 70, date: "2025-02-22", description: "اكل", amount: 30, category: "شخصي" },
        { id: 71, date: "2025-02-25", description: "جمعية أم سيف", amount: 800, category: "أقساط" },
        { id: 72, date: "2025-02-27", description: "رامات للكومبيوتر", amount: 275, category: "شخصي" }
      ]
    },
    {
      name: "مارس 2025",
      incomes: [
        { id: 73, date: "2025-03-05", description: "مرتب شهر فبراير", amount: 6000, category: "عمل" },
        { id: 74, date: "2025-03-10", description: "مكافآت شهر فبراير", amount: 2000, category: "عمل" },
        { id: 75, date: "2025-03-15", description: "عمرو جيم ستور", amount: 375, category: "عمل" },
        { id: 76, date: "2025-03-20", description: "مكافآت شهر فبراير(منافسات)", amount: 2000, category: "عمل" },
        { id: 77, date: "2025-03-25", description: "فلوس بابا", amount: 1000, category: "أخرى" },
        { id: 78, date: "2025-03-28", description: "شحن جهاز الون اس", amount: 200, category: "استثمار" },
        { id: 79, date: "2025-03-30", description: "رد فلوس محفظة", amount: 100, category: "أخرى" },
        { id: 80, date: "2025-03-31", description: "دراع ون اكس", amount: 1300, category: "استثمار" }
      ],
      expenses: [
        { id: 81, date: "2025-03-01", description: "ترينجات", amount: 950, category: "شخصي" },
        { id: 82, date: "2025-03-05", description: "فاتورة نت", amount: 350, category: "منزلي" },
        { id: 83, date: "2025-03-10", description: "فاتورة الخط الارضي", amount: 130, category: "منزلي" },
        { id: 84, date: "2025-03-15", description: "مصاريف الموتسيكل(تيل + إشارة + بلي + مصنعية)", amount: 490, category: "شخصي" },
        { id: 85, date: "2025-03-20", description: "مصاريف للبيت (سحور وطلبات اخرى جانبية)", amount: 500, category: "منزلي" },
        { id: 86, date: "2025-03-22", description: "احمد", amount: 350, category: "منزلي" },
        { id: 87, date: "2025-03-25", description: "جمعية ام سيف", amount: 1000, category: "أقساط" },
        { id: 88, date: "2025-03-28", description: "جمعية ام اسماء", amount: 3000, category: "أقساط" },
        { id: 89, date: "2025-03-30", description: "ريموتين", amount: 80, category: "منزلي" }
      ]
    },
    {
      name: "أبريل 2025",
      incomes: [
        { id: 90, date: "2025-04-05", description: "فائض شهر مارس قبل العيد", amount: 2995, category: "أخرى" },
        { id: 91, date: "2025-04-10", description: "مرتب شهر مارس", amount: 6000, category: "عمل" },
        { id: 92, date: "2025-04-15", description: "دراعين اكس بوكس", amount: 2500, category: "استثمار" },
        { id: 93, date: "2025-04-20", description: "بطاريات", amount: 480, category: "استثمار" },
        { id: 94, date: "2025-04-25", description: "مكافآت شهر مارس", amount: 3000, category: "عمل" }
      ],
      expenses: [
        { id: 95, date: "2025-04-20", description: "دفعة أولى من فلوس العفش", amount: 40000, category: "فرح" },
        { id: 96, date: "2025-04-01", description: "ملابس", amount: 1775, category: "شخصي" },
        { id: 97, date: "2025-04-03", description: "بنزين", amount: 150, category: "شخصي" },
        { id: 98, date: "2025-04-05", description: "مشوارجهاد", amount: 250, category: "منزلي" },
        { id: 99, date: "2025-04-10", description: "عيدية رحمة", amount: 100, category: "منزلي" },
        { id: 100, date: "2025-04-15", description: "طلبات اكل للبيت", amount: 200, category: "منزلي" },
        { id: 101, date: "2025-04-18", description: "مصاريف للبيت للعيد", amount: 340, category: "منزلي" },
        { id: 102, date: "2025-04-20", description: "نثريات شخصية", amount: 200, category: "شخصي" },
        { id: 103, date: "2025-04-22", description: "علاج", amount: 100, category: "منزلي" },
        { id: 104, date: "2025-04-25", description: "مصاريف شخصية", amount: 100, category: "شخصi" },
        { id: 105, date: "2025-04-28", description: "شحن بابا", amount: 60, category: "منزلي" }
      ]
    },
    {
      name: "مايو 2025",
      incomes: [
        { id: 106, date: "2025-05-05", description: "مرتب شهر ابريل", amount: 10000, category: "عمل" },
        { id: 107, date: "2025-05-10", description: "فائض شهر مارس", amount: 1000, category: "أخرى" },
        { id: 108, date: "2025-05-15", description: "بيع جهاز ون اس", amount: 325, category: "استثمار" },
        { id: 109, date: "2025-05-20", description: "مكافأة منافسات", amount: 2000, category: "عمل" }
      ],
      expenses: [
        { id: 110, date: "2025-05-01", description: "هدوم (ترينجات و تراكات شتوي)", amount: 2470, category: "شخصي" },
        { id: 111, date: "2025-05-05", description: "فواتير كهربا + مديونية", amount: 600, category: "منزلي" },
        { id: 112, date: "2025-05-10", description: "بنزين", amount: 100, category: "شخصي" },
        { id: 113, date: "2025-05-12", description: "نت", amount: 350, category: "منزلي" },
        { id: 114, date: "2025-05-15", description: "احمد", amount: 1000, category: "منزلي" },
        { id: 115, date: "2025-05-18", description: "ملابس (كورفا)", amount: 350, category: "شخصي" },
        { id: 116, date: "2025-05-20", description: "علاج", amount: 200, category: "منزلي" },
        { id: 117, date: "2025-05-22", description: "نوتة", amount: 160, category: "منزلي" },
        { id: 118, date: "2025-05-24", description: "نثريات", amount: 175, category: "شخصي" },
        { id: 119, date: "2025-05-26", description: "تصليح مروحة", amount: 50, category: "شخصي" },
        { id: 120, date: "2025-05-28", description: "كهربا", amount: 150, category: "منزلي" },
        { id: 121, date: "2025-05-30", description: "بنزين", amount: 100, category: "شخصي" }
      ]
    }
  ],
  categories: [
    "شخصي", "منزلي", "عمل", "استثمار", "أقساط", "أخرى", "فرح"
  ]
};

// دالة لإضافة شهر جديد
export const addNewMonth = (monthName) => {
  const newMonth = {
    name: monthName,
    incomes: [],
    expenses: []
  };
  
  expenseData.months.push(newMonth);
  return newMonth;
};

// دالة للحصول على الشهر الحالي
export const getCurrentMonth = () => {
  const now = new Date();
  const monthNames = [
    "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
    "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
  ];
  
  const monthName = monthNames[now.getMonth()] + " " + now.getFullYear();
  
  // إذا لم يكن الشهر موجودًا، ننشئه
  const existingMonth = expenseData.months.find(m => m.name === monthName);
  if (!existingMonth) {
    return addNewMonth(monthName);
  }
  
  return existingMonth;
};

export default expenseData;