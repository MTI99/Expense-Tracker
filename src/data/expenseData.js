const STORAGE_KEY = 'expenseTrackerData';

// دالة لتحميل البيانات من localStorage
const loadData = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  return savedData ? JSON.parse(savedData) : null;
};

const defaultData = {
  months: [
    {
      name: "ديسمبر 2024",
      summary: {
        totalIncome: 19000,
        totalExpenses: 15890,
        netBalance: 3110,
        currency: "EGP"
      },
      incomes: [
        { id: 1, date: "2024-12-01", description: "جزء من مرتب شهر 11", amount: 1400, category: "Work" },
        { id: 2, date: "2024-12-02", description: "جهاز السيريس اس", amount: 13400, category: "Other" },
        { id: 3, date: "2024-12-03", description: "باقي المرتب", amount: 2350, category: "Work" },
        { id: 4, date: "2024-12-04", description: "رد سلفة مصطفي", amount: 800, category: "Personal" },
        { id: 5, date: "2024-12-05", description: "بدل مصاريف الشغل", amount: 1020, category: "Work" },
        { id: 6, date: "2024-12-06", description: "ظبط فرق فلوس", amount: 30, category: "Other" }
      ],
      expenses: [
        { id: 7, date: "2024-12-07", description: "ماما", amount: 200, category: "Home" },
        { id: 8, date: "2024-12-08", description: "بنزين", amount: 50, category: "Personal" },
        { id: 9, date: "2024-12-09", description: "متفرقات", amount: 200, category: "Personal" },
        { id: 10, date: "2024-12-10", description: "فاتورة مياة", amount: 10, category: "Work" },
        { id: 11, date: "2024-12-11", description: "حساب العمارة", amount: 180, category: "Work" },
        { id: 12, date: "2024-12-12", description: "مصطفي", amount: 500, category: "Personal" },
        { id: 13, date: "2024-12-13", description: "ترزي", amount: 60, category: "Personal" },
        { id: 14, date: "2024-12-14", description: "علاج", amount: 65, category: "Home" },
        { id: 15, date: "2024-12-15", description: "رفاهيات", amount: 50, category: "Personal" },
        { id: 16, date: "2024-12-16", description: "بنزين", amount: 50, category: "Personal" },
        { id: 17, date: "2024-12-17", description: "رد سلفة من الفيزا الاحتياطية", amount: 2700, category: "Invest" },
        { id: 18, date: "2024-12-18", description: "بن", amount: 60, category: "Work" },
        { id: 19, date: "2024-12-19", description: "بنزين", amount: 50, category: "Personal" },
        { id: 20, date: "2024-12-20", description: "اكل يومين", amount: 50, category: "Personal" },
        { id: 21, date: "2024-12-21", description: "مصاريف للبيت", amount: 60, category: "Home" },
        { id: 22, date: "2024-12-22", description: "جمعية", amount: 2000, category: "Installments" },
        { id: 23, date: "2024-12-23", description: "قسط التليفون", amount: 1000, category: "Installments" },
        { id: 24, date: "2024-12-24", description: "سكر", amount: 30, category: "Work" },
        { id: 25, date: "2024-12-25", description: "بن", amount: 55, category: "Home" },
        { id: 26, date: "2024-12-26", description: "رفاهيات", amount: 265, category: "Personal" },
        { id: 27, date: "2024-12-27", description: "فاتورة النت", amount: 340, category: "Home" },
        { id: 28, date: "2024-12-28", description: "شحن رصيد", amount: 60, category: "Home" },
        { id: 29, date: "2024-12-29", description: "بنزين", amount: 50, category: "Personal" },
        { id: 30, date: "2024-12-30", description: "اكل ومصاريف جانبية", amount: 150, category: "Personal" },
        { id: 31, date: "2024-12-31", description: "دراعات اكس بوكس", amount: 6100, category: "Invest" },
        { id: 32, date: "2024-12-31", description: "مصطفي", amount: 500, category: "Personal" },
        { id: 33, date: "2024-12-31", description: "كورة", amount: 20, category: "Personal" },
        { id: 34, date: "2024-12-31", description: "علاج", amount: 135, category: "Home" },
        { id: 35, date: "2024-12-31", description: "مصروف غير محدد (كان علامة ؟)", amount: 255, category: "Personal" },
        { id: 36, date: "2024-12-31", description: "بنزين", amount: 150, category: "Personal" },
        { id: 37, date: "2024-12-31", description: "اكل ومصاريف جانبية", amount: 200, category: "Personal" },
        { id: 38, date: "2024-12-31", description: "شحن نت", amount: 340, category: "Home" },
        { id: 39, date: "2024-12-31", description: "بن", amount: 25, category: "Personal" },
        { id: 40, date: "2024-12-31", description: "منظفات وبن ولزق", amount: 100, category: "Work" },
        { id: 41, date: "2024-12-31", description: "قبض مصطفي", amount: 500, category: "Work" },
        { id: 42, date: "2024-12-31", description: "العمارة شهر 12", amount: 180, category: "Work" },
        { id: 43, date: "2024-12-31", description: "غاز وكهربا", amount: 60, category: "Work" }
      ]
    },
    {
      name: "يناير 2025",
      summary: {
        totalIncome: 11150,
        totalExpenses: 11140,
        netBalance: 10,
        currency: "EGP"
      },
      incomes: [
        { id: 44, date: "2025-01-01", description: "مرتب شهر 12", amount: 5500, category: "Work" },
        { id: 45, date: "2025-01-02", description: "فائض شهر 12", amount: 2200, category: "Other" },
        { id: 46, date: "2025-01-03", description: "بيع دراع ون اس", amount: 1500, category: "Other" },
        { id: 47, date: "2025-01-04", description: "بيع مكنتين وغطابين انالوج", amount: 400, category: "Other" },
        { id: 48, date: "2025-01-05", description: "بدل مصاريف شغل AGS", amount: 450, category: "Work" },
        { id: 49, date: "2025-01-06", description: "نسبة بيع جهاز سيريس اكس", amount: 1100, category: "Other" }
      ],
      expenses: [
        { id: 50, date: "2025-01-07", description: "اكل", amount: 60, category: "Personal" },
        { id: 51, date: "2025-01-08", description: "جوانتي", amount: 140, category: "Personal" },
        { id: 52, date: "2025-01-09", description: "علاج", amount: 70, category: "Home" },
        { id: 53, date: "2025-01-10", description: "اكل عصافير", amount: 50, category: "Personal" },
        { id: 54, date: "2025-01-11", description: "علاج", amount: 60, category: "Home" },
        { id: 55, date: "2025-01-12", description: "مكنتين وغطابين انالوج", amount: 200, category: "Invest" },
        { id: 56, date: "2025-01-13", description: "مصاريف نقل الاجهزة", amount: 450, category: "Work" },
        { id: 57, date: "2025-01-14", description: "اكل وكورة", amount: 150, category: "Personal" },
        { id: 58, date: "2025-01-15", description: "جمعيات", amount: 5000, category: "Installments" },
        { id: 59, date: "2025-01-16", description: "قسط التليفون", amount: 1000, category: "Installments" },
        { id: 60, date: "2025-01-17", description: "؟ (غير محدد)", amount: 160, category: "Personal" },
        { id: 61, date: "2025-01-18", description: "جمعية احمد", amount: 1000, category: "Installments" },
        { id: 62, date: "2025-01-19", description: "اكل ومصاريف جانبية", amount: 200, category: "Personal" },
        { id: 63, date: "2025-01-20", description: "فواتير كهربا وموبايل للبيت", amount: 100, category: "Home" },
        { id: 64, date: "2025-01-21", description: "مصاريف بيت", amount: 150, category: "Home" },
        { id: 65, date: "2025-01-22", description: "؟ (غير محدد)", amount: 190, category: "Personal" },
        { id: 66, date: "2025-01-23", description: "كوتشي ترتان", amount: 400, category: "Personal" },
        { id: 67, date: "2025-01-24", description: "مصاريف جانبية", amount: 480, category: "Personal" },
        { id: 68, date: "2025-01-25", description: "فاتورة النت", amount: 340, category: "Home" },
        { id: 69, date: "2025-01-26", description: "سويت شيرت", amount: 250, category: "Personal" },
        { id: 70, date: "2025-01-27", description: "مصاريف جانبية و أكل وكورة وبن", amount: 300, category: "Home" },
        { id: 71, date: "2025-01-28", description: "بنزين", amount: 50, category: "Personal" },
        { id: 72, date: "2025-01-29", description: "فاتورة النت", amount: 340, category: "Home" }
      ]
    },
    {
      name: "فبراير 2025",
      summary: {
        totalIncome: 19400,
        totalExpenses: 16840,
        netBalance: 2560,
        currency: "EGP"
      },
      incomes: [
        { id: 73, date: "2025-02-01", description: "مرتب شهر يناير", amount: 8000, category: "Work" },
        { id: 74, date: "2025-02-02", description: "دراع ون اس", amount: 1400, category: "Other" }
      ],
      expenses: [
        { id: 75, date: "2025-02-03", description: "رحمة", amount: 200, category: "Home" },
        { id: 76, date: "2025-02-04", description: "زيت موتسيكل", amount: 200, category: "Personal" },
        { id: 77, date: "2025-02-05", description: "بنزين", amount: 50, category: "Personal" },
        { id: 78, date: "2025-02-06", description: "مصاريف جانبية", amount: 150, category: "Personal" },
        { id: 79, date: "2025-02-07", description: "صيانة دراعات بغدادي", amount: 175, category: "Invest" },
        { id: 80, date: "2025-02-08", description: "شلبي", amount: 720, category: "Personal" },
        { id: 81, date: "2025-02-09", description: "علاج", amount: 140, category: "Home" },
        { id: 82, date: "2025-02-10", description: "جمعية أم أسماء", amount: 3000, category: "Installments" },
        { id: 83, date: "2025-02-11", description: "طلبات للبيت", amount: 150, category: "Home" },
        { id: 84, date: "2025-02-12", description: "اكل", amount: 30, category: "Personal" },
        { id: 85, date: "2025-02-13", description: "جمعية أم سيف", amount: 800, category: "Installments" },
        { id: 86, date: "2025-02-14", description: "رامات للكومبيوتر", amount: 275, category: "Personal" },
        { id: 87, date: "2025-02-15", description: "صيانة كومبيوتر أحمد", amount: 225, category: "Home" },
        { id: 88, date: "2025-02-16", description: "شحن دراع ون اس", amount: 100, category: "Invest" },
        { id: 89, date: "2025-02-17", description: "فاتورة النت", amount: 340, category: "Home" },
        { id: 90, date: "2025-02-18", description: "باقة اتصالات بابا", amount: 55, category: "Home" },
        { id: 91, date: "2025-02-19", description: "شحن وتفعيل خط اتصالات", amount: 170, category: "Personal" },
        { id: 92, date: "2025-02-20", description: "بنزين", amount: 50, category: "Personal" },
        { id: 93, date: "2025-02-21", description: "ماما", amount: 200, category: "Personal" },
        { id: 94, date: "2025-02-22", description: "كورة واكل", amount: 100, category: "Home" },
        { id: 95, date: "2025-02-23", description: "مصاريف جانبية", amount: 100, category: "Personal" },
        { id: 96, date: "2025-02-24", description: "بنزين", amount: 50, category: "Personal" }
      ]
    },
    {
      name: "مارس 2025",
      summary: {
        totalIncome: 13790,
        totalExpenses: 10795,
        netBalance: 2995,
        currency: "EGP"
      },
      incomes: [
        { id: 97, date: "2025-03-01", description: "مرتب شهر فبراير", amount: 6000, category: "Work" },
        { id: 98, date: "2025-03-02", description: "مكافات شهر فبراير", amount: 2000, category: "Work" },
        { id: 99, date: "2025-03-03", description: "عمرو جيم ستور", amount: 375, category: "Other" },
        { id: 100, date: "2025-03-04", description: "مكافات شهر فبراير (منافسات)", amount: 2000, category: "Work" },
        { id: 101, date: "2025-03-05", description: "فلوس بابا", amount: 1000, category: "Personal" },
        { id: 102, date: "2025-03-06", description: "شحن جهاز الون اس", amount: 200, category: "Invest" },
        { id: 103, date: "2025-03-07", description: "رد فلوس محفظة", amount: 100, category: "Personal" },
        { id: 104, date: "2025-03-08", description: "دراع ون اكس", amount: 1300, category: "Other" },
        { id: 105, date: "2025-03-09", description: "عمرو جيم ستور", amount: 815, category: "Other" }
      ],
      expenses: [
        { id: 106, date: "2025-03-10", description: "ترنتجات", amount: 950, category: "Personal" },
        { id: 107, date: "2025-03-11", description: "فاتورة نت", amount: 350, category: "Home" },
        { id: 108, date: "2025-03-12", description: "فاتورة الخط الارضي", amount: 130, category: "Home" },
        { id: 109, date: "2025-03-13", description: "مصاريف الموتسيكل (تيل + إشارة + بلي + مصنع)", amount: 490, category: "Personal" },
        { id: 110, date: "2025-03-14", description: "مصاريف للبيت (سحور وطلبات أخرى جانبية)", amount: 500, category: "Home" },
        { id: 111, date: "2025-03-15", description: "احمد", amount: 350, category: "Home" },
        { id: 112, date: "2025-03-16", description: "جمعية أم سيف", amount: 1000, category: "Installments" },
        { id: 113, date: "2025-03-17", description: "جمعية أم أسماء", amount: 3000, category: "Installments" },
        { id: 114, date: "2025-03-18", description: "ريموتين", amount: 80, category: "Home" },
        { id: 115, date: "2025-03-19", description: "بن ومصاريف جانبية", amount: 50, category: "Personal" },
        { id: 116, date: "2025-03-20", description: "بنزين", amount: 150, category: "Personal" },
        { id: 117, date: "2025-03-21", description: "ماما", amount: 100, category: "Home" },
        { id: 118, date: "2025-03-22", description: "؟ (غير محدد)", amount: 100, category: "Personal" },
        { id: 119, date: "2025-03-23", description: "سفرية كفر الشيخ", amount: 450, category: "Personal" },
        { id: 120, date: "2025-03-24", description: "علاج", amount: 100, category: "Home" },
        { id: 121, date: "2025-03-25", description: "فاتورة نت", amount: 340, category: "Home" },
        { id: 122, date: "2025-03-26", description: "بنزين", amount: 50, category: "Personal" },
        { id: 123, date: "2025-03-27", description: "علاج", amount: 150, category: "Home" },
        { id: 124, date: "2025-03-28", description: "اكل للسحور", amount: 200, category: "Home" },
        { id: 125, date: "2025-03-29", description: "ماما", amount: 200, category: "Home" },
        { id: 126, date: "2025-03-30", description: "علاج شخصي", amount: 250, category: "Personal" },
        { id: 127, date: "2025-03-31", description: "اكل وسحور", amount: 150, category: "Home" },
        { id: 128, date: "2025-03-31", description: "كارت الكهربا", amount: 100, category: "Home" },
        { id: 129, date: "2025-03-31", description: "احمد", amount: 100, category: "Home" },
        { id: 130, date: "2025-03-31", description: "؟ (غير محدد)", amount: 330, category: "Personal" },
        { id: 131, date: "2025-03-31", description: "شحن اكونت بوسطة", amount: 250, category: "Work" },
        { id: 132, date: "2025-03-31", description: "مصاريف موتسيكل نور وفرامل", amount: 775, category: "Personal" },
        { id: 133, date: "2025-03-31", description: "بنزين", amount: 50, category: "Personal" },
        { id: 134, date: "2025-03-31", description: "قهوة وبيض", amount: 50, category: "Personal" }
      ]
    },
    {
      name: "ابريل 2025",
      summary: {
        totalIncome: 14975,
        totalExpenses: 14975,
        netBalance: 0,
        currency: "EGP"
      },
      incomes: [
        { id: 135, date: "2025-04-01", description: "فائض شهر مارس قبل العيد", amount: 2995, category: "Other" },
        { id: 136, date: "2025-04-02", description: "مرتب شهر مارس", amount: 6000, category: "Work" },
        { id: 137, date: "2025-04-03", description: "دراعين اكس بوكس", amount: 2500, category: "Other" },
        { id: 138, date: "2025-04-04", description: "بطاريات", amount: 480, category: "Other" },
        { id: 139, date: "2025-04-05", description: "مكافات شهر مارس", amount: 3000, category: "Work" }
      ],
      expenses: [
        { id: 140, date: "2025-04-06", description: "إدخار في الفيزا الاحتياطية", amount: 5000, category: "Invest" },
        { id: 141, date: "2025-04-07", description: "ملابس", amount: 1775, category: "Personal" },
        { id: 142, date: "2025-04-08", description: "بنزين", amount: 150, category: "Personal" },
        { id: 143, date: "2025-04-09", description: "مشوار جهاد", amount: 250, category: "Home" },
        { id: 144, date: "2025-04-10", description: "عيدية رحمة", amount: 100, category: "Home" },
        { id: 145, date: "2025-04-11", description: "طلبات اكل للبيت", amount: 200, category: "Home" },
        { id: 146, date: "2025-04-12", description: "مصاريف للبيت للعيد", amount: 340, category: "Home" },
        { id: 147, date: "2025-04-13", description: "نثريات شخصية", amount: 200, category: "Personal" },
        { id: 148, date: "2025-04-14", description: "علاج", amount: 100, category: "Home" },
        { id: 149, date: "2025-04-15", description: "مصاريف شخصية", amount: 100, category: "Personal" },
        { id: 150, date: "2025-04-16", description: "مصاريف اكل", amount: 100, category: "Home" },
        { id: 151, date: "2025-04-17", description: "شحن بابا", amount: 60, category: "Home" },
        { id: 152, date: "2025-04-18", description: "شحن اتصالات", amount: 90, category: "Personal" },
        { id: 153, date: "2025-04-19", description: "خروجة", amount: 200, category: "Personal" },
        { id: 154, date: "2025-04-20", description: "ماما", amount: 100, category: "Home" },
        { id: 155, date: "2025-04-21", description: "رقية", amount: 100, category: "Home" },
        { id: 156, date: "2025-04-22", description: "بنزين", amount: 100, category: "Personal" },
        { id: 157, date: "2025-04-23", description: "؟ (غير محدد)", amount: 200, category: "Personal" },
        { id: 158, date: "2025-04-24", description: "مشوار دمياط", amount: 400, category: "Personal" },
        { id: 159, date: "2025-04-25", description: "شحن كهربا", amount: 100, category: "Home" },
        { id: 160, date: "2025-04-26", description: "اكل وعلاج للبيت", amount: 200, category: "Home" },
        { id: 161, date: "2025-04-27", description: "فاتورة النت", amount: 340, category: "Home" },
        { id: 162, date: "2025-04-28", description: "لحام الموتسيكل", amount: 50, category: "Personal" },
        { id: 163, date: "2025-04-29", description: "؟ (مصروف كبير غير محدد)", amount: 900, category: "Personal" },
        { id: 164, date: "2025-04-30", description: "؟ (غير محدد)", amount: 190, category: "Personal" },
        { id: 165, date: "2025-04-30", description: "إدخار في الفيزا الاحتياطية", amount: 2000, category: "Invest" },
        { id: 166, date: "2025-04-30", description: "علاج", amount: 250, category: "Home" },
        { id: 167, date: "2025-04-30", description: "نثريات شخصية", amount: 35, category: "Home" },
        { id: 168, date: "2025-04-30", description: "شحن", amount: 200, category: "Personal" },
        { id: 169, date: "2025-04-30", description: "شحن كهربا", amount: 100, category: "Home" },
        { id: 170, date: "2025-04-30", description: "بنزين", amount: 100, category: "Personal" },
        { id: 171, date: "2025-04-30", description: "مصاريف للبيت", amount: 200, category: "Home" },
        { id: 172, date: "2025-04-30", description: "مصاريف شخصية", amount: 745, category: "Personal" }
      ]
    },
    {
      name: "مايو 2025",
      summary: {
        totalIncome: 13325,
        totalExpenses: 13325,
        netBalance: 0,
        currency: "EGP"
      },
      incomes: [
        { id: 173, date: "2025-05-01", description: "مرتب شهر ابريل", amount: 10000, category: "Work" },
        { id: 174, date: "2025-05-02", description: "فائض شهر مارس", amount: 1000, category: "Other" },
        { id: 175, date: "2025-05-03", description: "بيع جهازون اس", amount: 325, category: "Other" },
        { id: 176, date: "2025-05-04", description: "مكافأة منافسات", amount: 2000, category: "Work" }
      ],
      expenses: [
        { id: 177, date: "2025-05-05", description: "فواتير كهربا + مديونية", amount: 600, category: "Home" },
        { id: 178, date: "2025-05-06", description: "بنزين", amount: 100, category: "Personal" },
        { id: 179, date: "2025-05-07", description: "نت", amount: 350, category: "Home" },
        { id: 180, date: "2025-05-08", description: "احمد", amount: 1000, category: "Home" },
        { id: 181, date: "2025-05-09", description: "ملابس (كورفا)", amount: 350, category: "Personal" },
        { id: 182, date: "2025-05-10",description: "علاج", amount: 200, category: "Home" },
        { id: 183, date: "2025-05-11", description: "نوتة", amount: 160, category: "Personal" },
        { id: 184, date: "2025-05-12", description: "نثريات", amount: 175, category: "Personal" },
        { id: 185, date: "2025-05-13", description: "تصليح مروحة", amount: 50, category: "Personal" },
        { id: 186, date: "2025-05-14", description: "كهربا", amount: 150, category: "Home" },
        { id: 187, date: "2025-05-15", description: "بنزين", amount: 100, category: "Personal" },
        { id: 188, date: "2025-05-16", description: "فاتورة تليفون", amount: 135, category: "Personal" },
        { id: 189, date: "2025-05-17", description: "مصطفى", amount: 1000, category: "Personal" },
        { id: 190, date: "2025-05-18", description: "اشتراك الريسيفر", amount: 75, category: "Home" },
        { id: 191, date: "2025-05-19", description: "رحمة", amount: 100, category: "Home" },
        { id: 192, date: "2025-05-20", description: "نثريات", amount: 280, category: "Personal" },
        { id: 193, date: "2025-05-21", description: "مصاريف موتسيكل", amount: 500, category: "Personal" },
        { id: 194, date: "2025-05-22", description: "إدخار مع الجمعية", amount: 6500, category: "Invest" },
        { id: 195, date: "2025-05-23", description: "شحن كهربا", amount: 300, category: "Home" },
        { id: 196, date: "2025-05-24", description: "خروجة", amount: 300, category: "Personal" },
        { id: 197, date: "2025-05-25", description: "بن وعيش", amount: 100, category: "Home" },
        { id: 198, date: "2025-05-26", description: "فاتورة النت", amount: 340, category: "Home" },
        { id: 199, date: "2025-05-27", description: "علاج", amount: 85, category: "Home" },
        { id: 200, date: "2025-05-28", description: "حلويات", amount: 110, category: "Personal" },
        { id: 201, date: "2025-05-29", description: "تصليح مروحة", amount: 100, category: "Personal" },
        { id: 202, date: "2025-05-30", description: "بنزين", amount: 40, category: "Personal" },
        { id: 203, date: "2025-05-31", description: "نثريات", amount: 95, category: "Personal" }
      ]
    }
  ]
};


// تهيئة البيانات
let expenseData = loadData() || defaultData;

// دالة لحفظ البيانات في localStorage
const saveData = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenseData));
};

// دالة لإضافة شهر جديد مع الحفظ التلقائي
export const addNewMonth = (monthName) => {
  const newMonth = {
    name: monthName,
    incomes: [],
    expenses: []
  };
  
  expenseData.months.push(newMonth);
  saveData(); // حفظ التغييرات
  return newMonth;
};

// دالة للحصول على الشهر الحالي مع إنشائه إذا لم يكن موجوداً
export const getOrCreateMonth = (date) => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const monthName = `${month} ${year}`;
  
  const existingMonth = expenseData.months.find(m => m.name === monthName);
  if (existingMonth) return existingMonth;
  
  return addNewMonth(monthName);
};

// دالة لتصدير البيانات الحالية
export const getCurrentData = () => expenseData;

// دالة لتحديث البيانات
export const updateData = (newData) => {
  expenseData = newData;
  saveData();
};

export default expenseData;