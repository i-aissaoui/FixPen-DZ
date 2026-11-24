export type DeliveryType = "stopDesk" | "home";

export type Wilaya = {
  id: string;
  nameFr: string;
  nameAr: string;
  isNew: boolean;
  motherId: string;
  motherNameFr: string;
  communeCount: number;
  stopDesk: number;
  home: number;
};

export type Commune = {
  id: string;
  nameFr: string;
  nameAr: string;
  dairaAr: string;
};

export const WILAYAS: Wilaya[] = [
  {
    "id": "01",
    "nameFr": "Adrar",
    "nameAr": "أدرار",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 16,
    "stopDesk": 600,
    "home": 1100
  },
  {
    "id": "02",
    "nameFr": "Chlef",
    "nameAr": "الشلف",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 35,
    "stopDesk": 400,
    "home": 700
  },
  {
    "id": "03",
    "nameFr": "Laghouat",
    "nameAr": "الأغواط",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 12,
    "stopDesk": 500,
    "home": 900
  },
  {
    "id": "04",
    "nameFr": "Oum El Bouaghi",
    "nameAr": "أم البواقي",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 29,
    "stopDesk": 400,
    "home": 790
  },
  {
    "id": "05",
    "nameFr": "Batna",
    "nameAr": "باتنة",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 53,
    "stopDesk": 400,
    "home": 790
  },
  {
    "id": "06",
    "nameFr": "Béjaïa",
    "nameAr": "بجاية",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 52,
    "stopDesk": 400,
    "home": 690
  },
  {
    "id": "07",
    "nameFr": "Biskra",
    "nameAr": "بسكرة",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 22,
    "stopDesk": 500,
    "home": 900
  },
  {
    "id": "08",
    "nameFr": "Béchar",
    "nameAr": "بشار",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 12,
    "stopDesk": 600,
    "home": 1100
  },
  {
    "id": "09",
    "nameFr": "Blida",
    "nameAr": "البليدة",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 25,
    "stopDesk": 250,
    "home": 500
  },
  {
    "id": "10",
    "nameFr": "Bouira",
    "nameAr": "البويرة",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 45,
    "stopDesk": 400,
    "home": 650
  },
  {
    "id": "11",
    "nameFr": "Tamanrasset",
    "nameAr": "تمنراست",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 5,
    "stopDesk": 800,
    "home": 1400
  },
  {
    "id": "12",
    "nameFr": "Tébessa",
    "nameAr": "تبسة",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 24,
    "stopDesk": 400,
    "home": 790
  },
  {
    "id": "13",
    "nameFr": "Tlemcen",
    "nameAr": "تلمسان",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 49,
    "stopDesk": 400,
    "home": 790
  },
  {
    "id": "14",
    "nameFr": "Tiaret",
    "nameAr": "تيارت",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 36,
    "stopDesk": 400,
    "home": 700
  },
  {
    "id": "15",
    "nameFr": "Tizi Ouzou",
    "nameAr": "تيزي وزو",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 67,
    "stopDesk": 350,
    "home": 630
  },
  {
    "id": "16",
    "nameFr": "Alger",
    "nameAr": "الجزائر",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 57,
    "stopDesk": 200,
    "home": 380
  },
  {
    "id": "17",
    "nameFr": "Djelfa",
    "nameAr": "الجلفة",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 18,
    "stopDesk": 400,
    "home": 790
  },
  {
    "id": "18",
    "nameFr": "Jijel",
    "nameAr": "جيجل",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 28,
    "stopDesk": 390,
    "home": 690
  },
  {
    "id": "19",
    "nameFr": "Sétif",
    "nameAr": "سطيف",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 60,
    "stopDesk": 390,
    "home": 690
  },
  {
    "id": "20",
    "nameFr": "Saïda",
    "nameAr": "سعيدة",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 16,
    "stopDesk": 400,
    "home": 790
  },
  {
    "id": "21",
    "nameFr": "Skikda",
    "nameAr": "سكيكدة",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 38,
    "stopDesk": 390,
    "home": 700
  },
  {
    "id": "22",
    "nameFr": "Sidi Bel Abbès",
    "nameAr": "سيدي بلعباس",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 52,
    "stopDesk": 390,
    "home": 690
  },
  {
    "id": "23",
    "nameFr": "Annaba",
    "nameAr": "عنابة",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 12,
    "stopDesk": 390,
    "home": 700
  },
  {
    "id": "24",
    "nameFr": "Guelma",
    "nameAr": "قالمة",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 34,
    "stopDesk": 390,
    "home": 700
  },
  {
    "id": "25",
    "nameFr": "Constantine",
    "nameAr": "قسنطينة",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 12,
    "stopDesk": 390,
    "home": 700
  },
  {
    "id": "26",
    "nameFr": "Médéa",
    "nameAr": "المدية",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 43,
    "stopDesk": 390,
    "home": 600
  },
  {
    "id": "27",
    "nameFr": "Mostaganem",
    "nameAr": "مستغانم",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 32,
    "stopDesk": 390,
    "home": 690
  },
  {
    "id": "28",
    "nameFr": "M'Sila",
    "nameAr": "المسيلة",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 24,
    "stopDesk": 400,
    "home": 650
  },
  {
    "id": "29",
    "nameFr": "Mascara",
    "nameAr": "معسكر",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 47,
    "stopDesk": 390,
    "home": 690
  },
  {
    "id": "30",
    "nameFr": "Ouargla",
    "nameAr": "ورقلة",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 8,
    "stopDesk": 600,
    "home": 1100
  },
  {
    "id": "31",
    "nameFr": "Oran",
    "nameAr": "وهران",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 26,
    "stopDesk": 390,
    "home": 690
  },
  {
    "id": "32",
    "nameFr": "El Bayadh",
    "nameAr": "البيض",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 15,
    "stopDesk": 500,
    "home": 900
  },
  {
    "id": "33",
    "nameFr": "Illizi",
    "nameAr": "إليزي",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 4,
    "stopDesk": 790,
    "home": 1300
  },
  {
    "id": "34",
    "nameFr": "Bordj Bou Arréridj",
    "nameAr": "برج بوعريريج",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 34,
    "stopDesk": 390,
    "home": 690
  },
  {
    "id": "35",
    "nameFr": "Boumerdès",
    "nameAr": "بومرداس",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 32,
    "stopDesk": 350,
    "home": 590
  },
  {
    "id": "36",
    "nameFr": "El Tarf",
    "nameAr": "الطارف",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 24,
    "stopDesk": 390,
    "home": 700
  },
  {
    "id": "37",
    "nameFr": "Tindouf",
    "nameAr": "تندوف",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 2,
    "stopDesk": 600,
    "home": 1100
  },
  {
    "id": "38",
    "nameFr": "Tissemsilt",
    "nameAr": "تيسمسيلت",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 22,
    "stopDesk": 400,
    "home": 700
  },
  {
    "id": "39",
    "nameFr": "El Oued",
    "nameAr": "الوادي",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 22,
    "stopDesk": 600,
    "home": 1100
  },
  {
    "id": "40",
    "nameFr": "Khenchela",
    "nameAr": "خنشلة",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 21,
    "stopDesk": 400,
    "home": 790
  },
  {
    "id": "41",
    "nameFr": "Souk Ahras",
    "nameAr": "سوق أهراس",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 26,
    "stopDesk": 400,
    "home": 790
  },
  {
    "id": "42",
    "nameFr": "Tipaza",
    "nameAr": "تيبازة",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 28,
    "stopDesk": 250,
    "home": 500
  },
  {
    "id": "43",
    "nameFr": "Mila",
    "nameAr": "ميلة",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 32,
    "stopDesk": 390,
    "home": 690
  },
  {
    "id": "44",
    "nameFr": "Aïn Defla",
    "nameAr": "عين الدفلى",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 36,
    "stopDesk": 400,
    "home": 650
  },
  {
    "id": "45",
    "nameFr": "Naâma",
    "nameAr": "النعامة",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 12,
    "stopDesk": 600,
    "home": 1100
  },
  {
    "id": "46",
    "nameFr": "Aïn Témouchent",
    "nameAr": "عين تموشنت",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 28,
    "stopDesk": 390,
    "home": 690
  },
  {
    "id": "47",
    "nameFr": "Ghardaïa",
    "nameAr": "غرداية",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 10,
    "stopDesk": 500,
    "home": 900
  },
  {
    "id": "48",
    "nameFr": "Relizane",
    "nameAr": "غليزان",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 38,
    "stopDesk": 400,
    "home": 700
  },
  {
    "id": "49",
    "nameFr": "Timimoun",
    "nameAr": "تيميمون",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 10,
    "stopDesk": 600,
    "home": 1100
  },
  {
    "id": "50",
    "nameFr": "Bordj Badji Mokhtar",
    "nameAr": "برج باجي مختار",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 2,
    "stopDesk": 800,
    "home": 1400
  },
  {
    "id": "51",
    "nameFr": "Ouled Djellal",
    "nameAr": "أولاد جلال",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 6,
    "stopDesk": 500,
    "home": 900
  },
  {
    "id": "52",
    "nameFr": "Béni Abbès",
    "nameAr": "بني عباس",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 9,
    "stopDesk": 600,
    "home": 1100
  },
  {
    "id": "53",
    "nameFr": "In Salah",
    "nameAr": "عين صالح",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 3,
    "stopDesk": 790,
    "home": 1300
  },
  {
    "id": "54",
    "nameFr": "In Guezzam",
    "nameAr": "عين قزام",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 2,
    "stopDesk": 800,
    "home": 1400
  },
  {
    "id": "55",
    "nameFr": "Touggourt",
    "nameAr": "تقرت",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 13,
    "stopDesk": 600,
    "home": 1100
  },
  {
    "id": "56",
    "nameFr": "Djanet",
    "nameAr": "جانت",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 2,
    "stopDesk": 790,
    "home": 1300
  },
  {
    "id": "57",
    "nameFr": "El Mghair",
    "nameAr": "المغير",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 8,
    "stopDesk": 600,
    "home": 1100
  },
  {
    "id": "58",
    "nameFr": "El Menia",
    "nameAr": "المنيعة",
    "isNew": false,
    "motherId": "",
    "motherNameFr": "",
    "communeCount": 3,
    "stopDesk": 600,
    "home": 1100
  },
  {
    "id": "59",
    "nameFr": "Aflou",
    "nameAr": "أفلو",
    "isNew": true,
    "motherId": "03",
    "motherNameFr": "Laghouat",
    "communeCount": 12,
    "stopDesk": 500,
    "home": 900
  },
  {
    "id": "60",
    "nameFr": "Barika",
    "nameAr": "بريكة",
    "isNew": true,
    "motherId": "05",
    "motherNameFr": "Batna",
    "communeCount": 8,
    "stopDesk": 400,
    "home": 790
  },
  {
    "id": "61",
    "nameFr": "El Kantara",
    "nameAr": "القنطرة",
    "isNew": true,
    "motherId": "07",
    "motherNameFr": "Biskra",
    "communeCount": 5,
    "stopDesk": 500,
    "home": 900
  },
  {
    "id": "62",
    "nameFr": "Bir El Ater",
    "nameAr": "بئر العاتر",
    "isNew": true,
    "motherId": "12",
    "motherNameFr": "Tébessa",
    "communeCount": 4,
    "stopDesk": 400,
    "home": 790
  },
  {
    "id": "63",
    "nameFr": "El Aricha",
    "nameAr": "العريشة",
    "isNew": true,
    "motherId": "13",
    "motherNameFr": "Tlemcen",
    "communeCount": 4,
    "stopDesk": 400,
    "home": 790
  },
  {
    "id": "64",
    "nameFr": "Ksar Chellala",
    "nameAr": "قصر الشلالة",
    "isNew": true,
    "motherId": "14",
    "motherNameFr": "Tiaret",
    "communeCount": 6,
    "stopDesk": 400,
    "home": 700
  },
  {
    "id": "65",
    "nameFr": "Aïn Ouessara",
    "nameAr": "عين وسارة",
    "isNew": true,
    "motherId": "17",
    "motherNameFr": "Djelfa",
    "communeCount": 10,
    "stopDesk": 400,
    "home": 700
  },
  {
    "id": "66",
    "nameFr": "Messaad",
    "nameAr": "مسعد",
    "isNew": true,
    "motherId": "17",
    "motherNameFr": "Djelfa",
    "communeCount": 8,
    "stopDesk": 500,
    "home": 900
  },
  {
    "id": "67",
    "nameFr": "Ksar El Boukhari",
    "nameAr": "قصر البخاري",
    "isNew": true,
    "motherId": "26",
    "motherNameFr": "Médéa",
    "communeCount": 21,
    "stopDesk": 390,
    "home": 600
  },
  {
    "id": "68",
    "nameFr": "Bou Saâda",
    "nameAr": "بوسعادة",
    "isNew": true,
    "motherId": "28",
    "motherNameFr": "M'Sila",
    "communeCount": 23,
    "stopDesk": 400,
    "home": 790
  },
  {
    "id": "69",
    "nameFr": "El Abiodh Sidi Cheikh",
    "nameAr": "الأبيض سيدي الشيخ",
    "isNew": true,
    "motherId": "32",
    "motherNameFr": "El Bayadh",
    "communeCount": 7,
    "stopDesk": 600,
    "home": 1100
  }
];

export const COMMUNES_BY_WILAYA: Record<string, Commune[]> = {
  "01": [
    {
      "id": "01-0001",
      "nameFr": "أدرار",
      "nameAr": "أدرار",
      "dairaAr": "أدرار"
    },
    {
      "id": "01-0013",
      "nameFr": "أولاد أحمد تيمي",
      "nameAr": "أولاد أحمد تيمي",
      "dairaAr": "أدرار"
    },
    {
      "id": "01-0004",
      "nameFr": "أولف",
      "nameAr": "أولف",
      "dairaAr": "أولف"
    },
    {
      "id": "01-0010",
      "nameFr": "إن زغمير",
      "nameAr": "إن زغمير",
      "dairaAr": "زاوية كنتة"
    },
    {
      "id": "01-0002",
      "nameFr": "اقبلي",
      "nameAr": "اقبلي",
      "dairaAr": "أولف"
    },
    {
      "id": "01-0018",
      "nameFr": "السبع",
      "nameAr": "السبع",
      "dairaAr": "تسابيت"
    },
    {
      "id": "01-0006",
      "nameFr": "بودة",
      "nameAr": "بودة",
      "dairaAr": "أدرار"
    },
    {
      "id": "01-0021",
      "nameFr": "تامست",
      "nameAr": "تامست",
      "dairaAr": "فنوغيل"
    },
    {
      "id": "01-0020",
      "nameFr": "تامنطيط",
      "nameAr": "تامنطيط",
      "dairaAr": "فنوغيل"
    },
    {
      "id": "01-0027",
      "nameFr": "تسابيت",
      "nameAr": "تسابيت",
      "dairaAr": "تسابيت"
    },
    {
      "id": "01-0026",
      "nameFr": "تيت",
      "nameAr": "تيت",
      "dairaAr": "أولف"
    },
    {
      "id": "01-0022",
      "nameFr": "تيمقتن",
      "nameAr": "تيمقتن",
      "dairaAr": "أولف"
    },
    {
      "id": "01-0016",
      "nameFr": "رقان",
      "nameAr": "رقان",
      "dairaAr": "رقان"
    },
    {
      "id": "01-0028",
      "nameFr": "زاوية كنتة",
      "nameAr": "زاوية كنتة",
      "dairaAr": "زاوية كنتة"
    },
    {
      "id": "01-0017",
      "nameFr": "سالي",
      "nameAr": "سالي",
      "dairaAr": "رقان"
    },
    {
      "id": "01-0009",
      "nameFr": "فنوغيل",
      "nameAr": "فنوغيل",
      "dairaAr": "فنوغيل"
    }
  ],
  "02": [
    {
      "id": "02-0029",
      "nameFr": "أبو الحسن",
      "nameAr": "أبو الحسن",
      "dairaAr": "أبو الحسن"
    },
    {
      "id": "02-0054",
      "nameFr": "أم الدروع",
      "nameAr": "أم الدروع",
      "dairaAr": "الشلف"
    },
    {
      "id": "02-0052",
      "nameFr": "أولاد بن عبد القادر",
      "nameAr": "أولاد بن عبد القادر",
      "dairaAr": "أولاد بن عبد القادر"
    },
    {
      "id": "02-0051",
      "nameFr": "أولاد عباس",
      "nameAr": "أولاد عباس",
      "dairaAr": "وادي الفضة"
    },
    {
      "id": "02-0053",
      "nameFr": "أولاد فارس",
      "nameAr": "أولاد فارس",
      "dairaAr": "أولاد فارس"
    },
    {
      "id": "02-0046",
      "nameFr": "الأبيض مجاجة",
      "nameAr": "الأبيض مجاجة",
      "dairaAr": "أولاد فارس"
    },
    {
      "id": "02-0041",
      "nameFr": "الحجاج",
      "nameAr": "الحجاج",
      "dairaAr": "أولاد بن عبد القادر"
    },
    {
      "id": "02-0063",
      "nameFr": "الزبوجة",
      "nameAr": "الزبوجة",
      "dairaAr": "الزبوجة"
    },
    {
      "id": "02-0038",
      "nameFr": "الشطية",
      "nameAr": "الشطية",
      "dairaAr": "أولاد فارس"
    },
    {
      "id": "02-0039",
      "nameFr": "الشلف",
      "nameAr": "الشلف",
      "dairaAr": "الشلف"
    },
    {
      "id": "02-0058",
      "nameFr": "الصبحة",
      "nameAr": "الصبحة",
      "dairaAr": "بوقادير"
    },
    {
      "id": "02-0040",
      "nameFr": "الظهرة",
      "nameAr": "الظهرة",
      "dairaAr": "تاوقريت"
    },
    {
      "id": "02-0042",
      "nameFr": "الكريمية",
      "nameAr": "الكريمية",
      "dairaAr": "الكريمية"
    },
    {
      "id": "02-0043",
      "nameFr": "المرسى",
      "nameAr": "المرسى",
      "dairaAr": "المرسى"
    },
    {
      "id": "02-0045",
      "nameFr": "الهرانفة",
      "nameAr": "الهرانفة",
      "dairaAr": "عين مران"
    },
    {
      "id": "02-0037",
      "nameFr": "بريرة",
      "nameAr": "بريرة",
      "dairaAr": "بني حواء"
    },
    {
      "id": "02-0031",
      "nameFr": "بنايرية",
      "nameAr": "بنايرية",
      "dairaAr": "الزبوجة"
    },
    {
      "id": "02-0032",
      "nameFr": "بني بوعتاب",
      "nameAr": "بني بوعتاب",
      "dairaAr": "الكريمية"
    },
    {
      "id": "02-0033",
      "nameFr": "بني حواء",
      "nameAr": "بني حواء",
      "dairaAr": "بني حواء"
    },
    {
      "id": "02-0034",
      "nameFr": "بني راشد",
      "nameAr": "بني راشد",
      "dairaAr": "وادي الفضة"
    },
    {
      "id": "02-0036",
      "nameFr": "بوزغاية",
      "nameAr": "بوزغاية",
      "dairaAr": "الزبوجة"
    },
    {
      "id": "02-0035",
      "nameFr": "بوقادير",
      "nameAr": "بوقادير",
      "dairaAr": "بوقادير"
    },
    {
      "id": "02-0059",
      "nameFr": "تاجنة",
      "nameAr": "تاجنة",
      "dairaAr": "أبو الحسن"
    },
    {
      "id": "02-0061",
      "nameFr": "تاوقريت",
      "nameAr": "تاوقريت",
      "dairaAr": "تاوقريت"
    },
    {
      "id": "02-0060",
      "nameFr": "تلعصة",
      "nameAr": "تلعصة",
      "dairaAr": "أبو الحسن"
    },
    {
      "id": "02-0062",
      "nameFr": "تنس",
      "nameAr": "تنس",
      "dairaAr": "تنس"
    },
    {
      "id": "02-0044",
      "nameFr": "حرشون",
      "nameAr": "حرشون",
      "dairaAr": "الكريمية"
    },
    {
      "id": "02-0055",
      "nameFr": "سنجاس",
      "nameAr": "سنجاس",
      "dairaAr": "الشلف"
    },
    {
      "id": "02-0056",
      "nameFr": "سيدي عبد الرحمن",
      "nameAr": "سيدي عبد الرحمن",
      "dairaAr": "تنس"
    },
    {
      "id": "02-0057",
      "nameFr": "سيدي عكاشة",
      "nameAr": "سيدي عكاشة",
      "dairaAr": "تنس"
    },
    {
      "id": "02-0030",
      "nameFr": "عين مران",
      "nameAr": "عين مران",
      "dairaAr": "عين مران"
    },
    {
      "id": "02-0047",
      "nameFr": "مصدق",
      "nameAr": "مصدق",
      "dairaAr": "المرسى"
    },
    {
      "id": "02-0048",
      "nameFr": "وادي الفضة",
      "nameAr": "وادي الفضة",
      "dairaAr": "وادي الفضة"
    },
    {
      "id": "02-0050",
      "nameFr": "وادي سلي",
      "nameAr": "وادي سلي",
      "dairaAr": "بوقادير"
    },
    {
      "id": "02-0049",
      "nameFr": "وادي قوسين",
      "nameAr": "وادي قوسين",
      "dairaAr": "بني حواء"
    }
  ],
  "03": [
    {
      "id": "03-0079",
      "nameFr": "الأغواط",
      "nameAr": "الأغواط",
      "dairaAr": "الأغواط"
    },
    {
      "id": "03-0072",
      "nameFr": "الحويطة",
      "nameAr": "الحويطة",
      "dairaAr": "عين ماضي"
    },
    {
      "id": "03-0077",
      "nameFr": "الخنق",
      "nameAr": "الخنق",
      "dairaAr": "عين ماضي"
    },
    {
      "id": "03-0070",
      "nameFr": "العسافية",
      "nameAr": "العسافية",
      "dairaAr": "سيدي مخلوف"
    },
    {
      "id": "03-0068",
      "nameFr": "بن ناصر بن شهرة",
      "nameAr": "بن ناصر بن شهرة",
      "dairaAr": "قصر الحيران"
    },
    {
      "id": "03-0086",
      "nameFr": "تاجرونة",
      "nameAr": "تاجرونة",
      "dairaAr": "عين ماضي"
    },
    {
      "id": "03-0085",
      "nameFr": "تاجموت",
      "nameAr": "تاجموت",
      "dairaAr": "عين ماضي"
    },
    {
      "id": "03-0075",
      "nameFr": "حاسي الدلاعة",
      "nameAr": "حاسي الدلاعة",
      "dairaAr": "حاسي الرمل"
    },
    {
      "id": "03-0076",
      "nameFr": "حاسي الرمل",
      "nameAr": "حاسي الرمل",
      "dairaAr": "حاسي الرمل"
    },
    {
      "id": "03-0084",
      "nameFr": "سيدي مخلوف",
      "nameAr": "سيدي مخلوف",
      "dairaAr": "سيدي مخلوف"
    },
    {
      "id": "03-0065",
      "nameFr": "عين ماضي",
      "nameAr": "عين ماضي",
      "dairaAr": "عين ماضي"
    },
    {
      "id": "03-0078",
      "nameFr": "قصر الحيران",
      "nameAr": "قصر الحيران",
      "dairaAr": "قصر الحيران"
    }
  ],
  "04": [
    {
      "id": "04-0112",
      "nameFr": "أم البواقي",
      "nameAr": "أم البواقي",
      "dairaAr": "أم البواقي"
    },
    {
      "id": "04-0110",
      "nameFr": "أولاد حملة",
      "nameAr": "أولاد حملة",
      "dairaAr": "عين مليلة"
    },
    {
      "id": "04-0111",
      "nameFr": "أولاد زواي",
      "nameAr": "أولاد زواي",
      "dairaAr": "سوق نعمان"
    },
    {
      "id": "04-0109",
      "nameFr": "أولاد قاسم",
      "nameAr": "أولاد قاسم",
      "dairaAr": "عين مليلة"
    },
    {
      "id": "04-0100",
      "nameFr": "البلالة",
      "nameAr": "البلالة",
      "dairaAr": "مسكيانة"
    },
    {
      "id": "04-0101",
      "nameFr": "الجازية",
      "nameAr": "الجازية",
      "dairaAr": "الضلعة"
    },
    {
      "id": "04-0103",
      "nameFr": "الحرملية",
      "nameAr": "الحرملية",
      "dairaAr": "عين كرشة"
    },
    {
      "id": "04-0113",
      "nameFr": "الرحية",
      "nameAr": "الرحية",
      "dairaAr": "مسكيانة"
    },
    {
      "id": "04-0116",
      "nameFr": "الزرق",
      "nameAr": "الزرق",
      "dairaAr": "عين البيضاء"
    },
    {
      "id": "04-0098",
      "nameFr": "الضلعة",
      "nameAr": "الضلعة",
      "dairaAr": "الضلعة"
    },
    {
      "id": "04-0099",
      "nameFr": "العامرية",
      "nameAr": "العامرية",
      "dairaAr": "سيقوس"
    },
    {
      "id": "04-0102",
      "nameFr": "الفجوج بوغرارة سعودي",
      "nameAr": "الفجوج بوغرارة سعودي",
      "dairaAr": "عين فكرون"
    },
    {
      "id": "04-0097",
      "nameFr": "بئر الشهداء",
      "nameAr": "بئر الشهداء",
      "dairaAr": "سوق نعمان"
    },
    {
      "id": "04-0095",
      "nameFr": "بحير الشرقي",
      "nameAr": "بحير الشرقي",
      "dairaAr": "مسكيانة"
    },
    {
      "id": "04-0096",
      "nameFr": "بريش",
      "nameAr": "بريش",
      "dairaAr": "عين البيضاء"
    },
    {
      "id": "04-0115",
      "nameFr": "سوق نعمان",
      "nameAr": "سوق نعمان",
      "dairaAr": "سوق نعمان"
    },
    {
      "id": "04-0114",
      "nameFr": "سيقوس",
      "nameAr": "سيقوس",
      "dairaAr": "سيقوس"
    },
    {
      "id": "04-0089",
      "nameFr": "عين البيضاء",
      "nameAr": "عين البيضاء",
      "dairaAr": "عين البيضاء"
    },
    {
      "id": "04-0090",
      "nameFr": "عين الديس",
      "nameAr": "عين الديس",
      "dairaAr": "عين ببوش"
    },
    {
      "id": "04-0094",
      "nameFr": "عين الزيتون",
      "nameAr": "عين الزيتون",
      "dairaAr": "أم البواقي"
    },
    {
      "id": "04-0088",
      "nameFr": "عين ببوش",
      "nameAr": "عين ببوش",
      "dairaAr": "عين ببوش"
    },
    {
      "id": "04-0091",
      "nameFr": "عين فكرون",
      "nameAr": "عين فكرون",
      "dairaAr": "عين فكرون"
    },
    {
      "id": "04-0092",
      "nameFr": "عين كرشة",
      "nameAr": "عين كرشة",
      "dairaAr": "عين كرشة"
    },
    {
      "id": "04-0093",
      "nameFr": "عين مليلة",
      "nameAr": "عين مليلة",
      "dairaAr": "عين مليلة"
    },
    {
      "id": "04-0104",
      "nameFr": "فكيرينة",
      "nameAr": "فكيرينة",
      "dairaAr": "فكيرينة"
    },
    {
      "id": "04-0106",
      "nameFr": "قصر الصباحي",
      "nameAr": "قصر الصباحي",
      "dairaAr": "قصر الصباحي"
    },
    {
      "id": "04-0107",
      "nameFr": "مسكيانة",
      "nameAr": "مسكيانة",
      "dairaAr": "مسكيانة"
    },
    {
      "id": "04-0105",
      "nameFr": "هنشير تومغني",
      "nameAr": "هنشير تومغني",
      "dairaAr": "عين كرشة"
    },
    {
      "id": "04-0108",
      "nameFr": "وادي نيني",
      "nameAr": "وادي نيني",
      "dairaAr": "فكيرينة"
    }
  ],
  "05": [
    {
      "id": "05-0120",
      "nameFr": "أريس",
      "nameAr": "أريس",
      "dairaAr": "أريس"
    },
    {
      "id": "05-0160",
      "nameFr": "أولاد سلام",
      "nameAr": "أولاد سلام",
      "dairaAr": "رأس العيون"
    },
    {
      "id": "05-0161",
      "nameFr": "أولاد سي سليمان",
      "nameAr": "أولاد سي سليمان",
      "dairaAr": "أولاد سي سليمان"
    },
    {
      "id": "05-0158",
      "nameFr": "أولاد عوف",
      "nameAr": "أولاد عوف",
      "dairaAr": "عين التوتة"
    },
    {
      "id": "05-0159",
      "nameFr": "أولاد فاضل",
      "nameAr": "أولاد فاضل",
      "dairaAr": "تيمقاد"
    },
    {
      "id": "05-0142",
      "nameFr": "إشمول",
      "nameAr": "إشمول",
      "dairaAr": "إشمول"
    },
    {
      "id": "05-0143",
      "nameFr": "إينوغيسن",
      "nameAr": "إينوغيسن",
      "dairaAr": "إشمول"
    },
    {
      "id": "05-0134",
      "nameFr": "الحاسي",
      "nameAr": "الحاسي",
      "dairaAr": "عين جاسر"
    },
    {
      "id": "05-0163",
      "nameFr": "الرحبات",
      "nameAr": "الرحبات",
      "dairaAr": "رأس العيون"
    },
    {
      "id": "05-0130",
      "nameFr": "الشمرة",
      "nameAr": "الشمرة",
      "dairaAr": "الشمرة"
    },
    {
      "id": "05-0139",
      "nameFr": "القصبات",
      "nameAr": "القصبات",
      "dairaAr": "رأس العيون"
    },
    {
      "id": "05-0140",
      "nameFr": "القيقبة",
      "nameAr": "القيقبة",
      "dairaAr": "رأس العيون"
    },
    {
      "id": "05-0135",
      "nameFr": "المعذر",
      "nameAr": "المعذر",
      "dairaAr": "المعذر"
    },
    {
      "id": "05-0123",
      "nameFr": "باتنة",
      "nameAr": "باتنة",
      "dairaAr": "باتنة"
    },
    {
      "id": "05-0124",
      "nameFr": "بني فضالة الحقانية",
      "nameAr": "بني فضالة الحقانية",
      "dairaAr": "عين التوتة"
    },
    {
      "id": "05-0129",
      "nameFr": "بوزينة",
      "nameAr": "بوزينة",
      "dairaAr": "بوزينة"
    },
    {
      "id": "05-0126",
      "nameFr": "بولهيلات",
      "nameAr": "بولهيلات",
      "dairaAr": "الشمرة"
    },
    {
      "id": "05-0127",
      "nameFr": "بومقر",
      "nameAr": "بومقر",
      "dairaAr": "نقاوس"
    },
    {
      "id": "05-0128",
      "nameFr": "بومية",
      "nameAr": "بومية",
      "dairaAr": "المعذر"
    },
    {
      "id": "05-0171",
      "nameFr": "تازولت",
      "nameAr": "تازولت",
      "dairaAr": "تازولت"
    },
    {
      "id": "05-0170",
      "nameFr": "تاكسلانت",
      "nameAr": "تاكسلانت",
      "dairaAr": "أولاد سي سليمان"
    },
    {
      "id": "05-0169",
      "nameFr": "تالخمت",
      "nameAr": "تالخمت",
      "dairaAr": "رأس العيون"
    },
    {
      "id": "05-0174",
      "nameFr": "تغرغار",
      "nameAr": "تغرغار",
      "dairaAr": "منعة"
    },
    {
      "id": "05-0168",
      "nameFr": "تكوت",
      "nameAr": "تكوت",
      "dairaAr": "تكوت"
    },
    {
      "id": "05-0173",
      "nameFr": "تيغانمين",
      "nameAr": "تيغانمين",
      "dairaAr": "أريس"
    },
    {
      "id": "05-0176",
      "nameFr": "تيمقاد",
      "nameAr": "تيمقاد",
      "dairaAr": "تيمقاد"
    },
    {
      "id": "05-0172",
      "nameFr": "ثنية العابد",
      "nameAr": "ثنية العابد",
      "dairaAr": "ثنية العابد"
    },
    {
      "id": "05-0132",
      "nameFr": "جرمة",
      "nameAr": "جرمة",
      "dairaAr": "المعذر"
    },
    {
      "id": "05-0141",
      "nameFr": "حيدوسة",
      "nameAr": "حيدوسة",
      "dairaAr": "مروانة"
    },
    {
      "id": "05-0164",
      "nameFr": "رأس العيون",
      "nameAr": "رأس العيون",
      "dairaAr": "رأس العيون"
    },
    {
      "id": "05-0177",
      "nameFr": "زانة البيضاء",
      "nameAr": "زانة البيضاء",
      "dairaAr": "سريانة"
    },
    {
      "id": "05-0167",
      "nameFr": "سريانة",
      "nameAr": "سريانة",
      "dairaAr": "سريانة"
    },
    {
      "id": "05-0165",
      "nameFr": "سفيان",
      "nameAr": "سفيان",
      "dairaAr": "نقاوس"
    },
    {
      "id": "05-0131",
      "nameFr": "شير",
      "nameAr": "شير",
      "dairaAr": "ثنية العابد"
    },
    {
      "id": "05-0118",
      "nameFr": "عين التوتة",
      "nameAr": "عين التوتة",
      "dairaAr": "عين التوتة"
    },
    {
      "id": "05-0117",
      "nameFr": "عين جاسر",
      "nameAr": "عين جاسر",
      "dairaAr": "عين جاسر"
    },
    {
      "id": "05-0119",
      "nameFr": "عين ياقوت",
      "nameAr": "عين ياقوت",
      "dairaAr": "المعذر"
    },
    {
      "id": "05-0162",
      "nameFr": "عيون العصافير",
      "nameAr": "عيون العصافير",
      "dairaAr": "تازولت"
    },
    {
      "id": "05-0138",
      "nameFr": "غسيرة",
      "nameAr": "غسيرة",
      "dairaAr": "تكوت"
    },
    {
      "id": "05-0136",
      "nameFr": "فسديس",
      "nameAr": "فسديس",
      "dairaAr": "باتنة"
    },
    {
      "id": "05-0137",
      "nameFr": "فم الطوب",
      "nameAr": "فم الطوب",
      "dairaAr": "إشمول"
    },
    {
      "id": "05-0145",
      "nameFr": "قصر بلزمة",
      "nameAr": "قصر بلزمة",
      "dairaAr": "مروانة"
    },
    {
      "id": "05-0144",
      "nameFr": "كيمل",
      "nameAr": "كيمل",
      "dairaAr": "تكوت"
    },
    {
      "id": "05-0146",
      "nameFr": "لارباع",
      "nameAr": "لارباع",
      "dairaAr": "بوزينة"
    },
    {
      "id": "05-0147",
      "nameFr": "لازرو",
      "nameAr": "لازرو",
      "dairaAr": "سريانة"
    },
    {
      "id": "05-0148",
      "nameFr": "لمسان",
      "nameAr": "لمسان",
      "dairaAr": "أولاد سي سليمان"
    },
    {
      "id": "05-0152",
      "nameFr": "مروانة",
      "nameAr": "مروانة",
      "dairaAr": "مروانة"
    },
    {
      "id": "05-0150",
      "nameFr": "معافة",
      "nameAr": "معافة",
      "dairaAr": "عين التوتة"
    },
    {
      "id": "05-0151",
      "nameFr": "منعة",
      "nameAr": "منعة",
      "dairaAr": "منعة"
    },
    {
      "id": "05-0153",
      "nameFr": "نقاوس",
      "nameAr": "نقاوس",
      "dairaAr": "نقاوس"
    },
    {
      "id": "05-0154",
      "nameFr": "وادي الشعبة",
      "nameAr": "وادي الشعبة",
      "dairaAr": "باتنة"
    },
    {
      "id": "05-0156",
      "nameFr": "وادي الطاقة",
      "nameAr": "وادي الطاقة",
      "dairaAr": "ثنية العابد"
    },
    {
      "id": "05-0155",
      "nameFr": "وادي الماء",
      "nameAr": "وادي الماء",
      "dairaAr": "مروانة"
    }
  ],
  "06": [
    {
      "id": "06-0178",
      "nameFr": "أدكار",
      "nameAr": "أدكار",
      "dairaAr": "أدكار"
    },
    {
      "id": "06-0181",
      "nameFr": "أقبو",
      "nameAr": "أقبو",
      "dairaAr": "أقبو"
    },
    {
      "id": "06-0182",
      "nameFr": "أكفادو",
      "nameAr": "أكفادو",
      "dairaAr": "شميني"
    },
    {
      "id": "06-0183",
      "nameFr": "أمالو",
      "nameAr": "أمالو",
      "dairaAr": "صدوق"
    },
    {
      "id": "06-0184",
      "nameFr": "أميزور",
      "nameAr": "أميزور",
      "dairaAr": "أميزور"
    },
    {
      "id": "06-0203",
      "nameFr": "أوزلاقن",
      "nameAr": "أوزلاقن",
      "dairaAr": "إفري أوزلاقن"
    },
    {
      "id": "06-0185",
      "nameFr": "أوقاس",
      "nameAr": "أوقاس",
      "dairaAr": "أوقاس"
    },
    {
      "id": "06-0180",
      "nameFr": "أيت إسماعيل",
      "nameAr": "أيت إسماعيل",
      "dairaAr": "درقينة"
    },
    {
      "id": "06-0179",
      "nameFr": "أيت رزين",
      "nameAr": "أيت رزين",
      "dairaAr": "إغيل علي"
    },
    {
      "id": "06-0204",
      "nameFr": "إغيل علي",
      "nameAr": "إغيل علي",
      "dairaAr": "إغيل علي"
    },
    {
      "id": "06-0205",
      "nameFr": "اغرم",
      "nameAr": "اغرم",
      "dairaAr": "أقبو"
    },
    {
      "id": "06-0199",
      "nameFr": "الفلاي",
      "nameAr": "الفلاي",
      "dairaAr": "سيدي عيش"
    },
    {
      "id": "06-0200",
      "nameFr": "القصر",
      "nameAr": "القصر",
      "dairaAr": "القصر"
    },
    {
      "id": "06-0187",
      "nameFr": "بجاية",
      "nameAr": "بجاية",
      "dairaAr": "بجاية"
    },
    {
      "id": "06-0186",
      "nameFr": "برباشة",
      "nameAr": "برباشة",
      "dairaAr": "برباشة"
    },
    {
      "id": "06-0188",
      "nameFr": "بني جليل",
      "nameAr": "بني جليل",
      "dairaAr": "أميزور"
    },
    {
      "id": "06-0189",
      "nameFr": "بني كسيلة",
      "nameAr": "بني كسيلة",
      "dairaAr": "أدكار"
    },
    {
      "id": "06-0191",
      "nameFr": "بني معوش",
      "nameAr": "بني معوش",
      "dairaAr": "بني معوش"
    },
    {
      "id": "06-0190",
      "nameFr": "بني مليكش",
      "nameAr": "بني مليكش",
      "dairaAr": "تازملت"
    },
    {
      "id": "06-0192",
      "nameFr": "بو جليل",
      "nameAr": "بو جليل",
      "dairaAr": "تازملت"
    },
    {
      "id": "06-0193",
      "nameFr": "بوحمزة",
      "nameAr": "بوحمزة",
      "dairaAr": "صدوق"
    },
    {
      "id": "06-0194",
      "nameFr": "بوخليفة",
      "nameAr": "بوخليفة",
      "dairaAr": "تيشي"
    },
    {
      "id": "06-0222",
      "nameFr": "تازمالت",
      "nameAr": "تازمالت",
      "dairaAr": "تازملت"
    },
    {
      "id": "06-0221",
      "nameFr": "تاسكريوت",
      "nameAr": "تاسكريوت",
      "dairaAr": "درقينة"
    },
    {
      "id": "06-0217",
      "nameFr": "تالة حمزة",
      "nameAr": "تالة حمزة",
      "dairaAr": "تيشي"
    },
    {
      "id": "06-0219",
      "nameFr": "تامريجت",
      "nameAr": "تامريجت",
      "dairaAr": "سوق الإثنين"
    },
    {
      "id": "06-0218",
      "nameFr": "تامقرة",
      "nameAr": "تامقرة",
      "dairaAr": "أقبو"
    },
    {
      "id": "06-0220",
      "nameFr": "تاوريرت إغيل",
      "nameAr": "تاوريرت إغيل",
      "dairaAr": "أدكار"
    },
    {
      "id": "06-0229",
      "nameFr": "توجة",
      "nameAr": "توجة",
      "dairaAr": "القصر"
    },
    {
      "id": "06-0228",
      "nameFr": "تيزي نبربر",
      "nameAr": "تيزي نبربر",
      "dairaAr": "أوقاس"
    },
    {
      "id": "06-0224",
      "nameFr": "تيشي",
      "nameAr": "تيشي",
      "dairaAr": "تيشي"
    },
    {
      "id": "06-0225",
      "nameFr": "تيفرة",
      "nameAr": "تيفرة",
      "dairaAr": "سيدي عيش"
    },
    {
      "id": "06-0226",
      "nameFr": "تيمزريت",
      "nameAr": "تيمزريت",
      "dairaAr": "تيمزريت"
    },
    {
      "id": "06-0227",
      "nameFr": "تينبدار",
      "nameAr": "تينبدار",
      "dairaAr": "سيدي عيش"
    },
    {
      "id": "06-0207",
      "nameFr": "خراطة",
      "nameAr": "خراطة",
      "dairaAr": "خراطة"
    },
    {
      "id": "06-0197",
      "nameFr": "درقينة",
      "nameAr": "درقينة",
      "dairaAr": "درقينة"
    },
    {
      "id": "06-0198",
      "nameFr": "ذراع القايد",
      "nameAr": "ذراع القايد",
      "dairaAr": "خراطة"
    },
    {
      "id": "06-0214",
      "nameFr": "سمعون",
      "nameAr": "سمعون",
      "dairaAr": "أميزور"
    },
    {
      "id": "06-0216",
      "nameFr": "سوق اوفلا",
      "nameAr": "سوق اوفلا",
      "dairaAr": "شميني"
    },
    {
      "id": "06-0215",
      "nameFr": "سوق لإثنين",
      "nameAr": "سوق لإثنين",
      "dairaAr": "سوق الإثنين"
    },
    {
      "id": "06-0212",
      "nameFr": "سيدي عياد",
      "nameAr": "سيدي عياد",
      "dairaAr": "سيدي عيش"
    },
    {
      "id": "06-0213",
      "nameFr": "سيدي عيش",
      "nameAr": "سيدي عيش",
      "dairaAr": "سيدي عيش"
    },
    {
      "id": "06-0195",
      "nameFr": "شلاطة",
      "nameAr": "شلاطة",
      "dairaAr": "أقبو"
    },
    {
      "id": "06-0196",
      "nameFr": "شميني",
      "nameAr": "شميني",
      "dairaAr": "شميني"
    },
    {
      "id": "06-0211",
      "nameFr": "صدوق",
      "nameAr": "صدوق",
      "dairaAr": "صدوق"
    },
    {
      "id": "06-0223",
      "nameFr": "طيبان",
      "nameAr": "طيبان",
      "dairaAr": "شميني"
    },
    {
      "id": "06-0202",
      "nameFr": "فرعون",
      "nameAr": "فرعون",
      "dairaAr": "أميزور"
    },
    {
      "id": "06-0201",
      "nameFr": "فناية الماثن",
      "nameAr": "فناية الماثن",
      "dairaAr": "القصر"
    },
    {
      "id": "06-0206",
      "nameFr": "كنديرة",
      "nameAr": "كنديرة",
      "dairaAr": "برباشة"
    },
    {
      "id": "06-0209",
      "nameFr": "مالبو",
      "nameAr": "مالبو",
      "dairaAr": "سوق الإثنين"
    },
    {
      "id": "06-0208",
      "nameFr": "مسيسنة",
      "nameAr": "مسيسنة",
      "dairaAr": "صدوق"
    },
    {
      "id": "06-0210",
      "nameFr": "وادي غير",
      "nameAr": "وادي غير",
      "dairaAr": "بجاية"
    }
  ],
  "07": [
    {
      "id": "07-0257",
      "nameFr": "أورلال",
      "nameAr": "أورلال",
      "dairaAr": "أورلال"
    },
    {
      "id": "07-0256",
      "nameFr": "أوماش",
      "nameAr": "أوماش",
      "dairaAr": "أورلال"
    },
    {
      "id": "07-0243",
      "nameFr": "الحاجب",
      "nameAr": "الحاجب",
      "dairaAr": "بسكرة"
    },
    {
      "id": "07-0244",
      "nameFr": "الحوش",
      "nameAr": "الحوش",
      "dairaAr": "سيدي عقبة"
    },
    {
      "id": "07-0242",
      "nameFr": "الغروس",
      "nameAr": "الغروس",
      "dairaAr": "فوغالة"
    },
    {
      "id": "07-0241",
      "nameFr": "الفيض",
      "nameAr": "الفيض",
      "dairaAr": "زريبة الوادي"
    },
    {
      "id": "07-0253",
      "nameFr": "المزيرعة",
      "nameAr": "المزيرعة",
      "dairaAr": "زريبة الوادي"
    },
    {
      "id": "07-0234",
      "nameFr": "برج بن عزوز",
      "nameAr": "برج بن عزوز",
      "dairaAr": "طولقة"
    },
    {
      "id": "07-0233",
      "nameFr": "بسكرة",
      "nameAr": "بسكرة",
      "dairaAr": "بسكرة"
    },
    {
      "id": "07-0235",
      "nameFr": "بوشقرون",
      "nameAr": "بوشقرون",
      "dairaAr": "طولقة"
    },
    {
      "id": "07-0248",
      "nameFr": "خنقة سيدي ناجي",
      "nameAr": "خنقة سيدي ناجي",
      "dairaAr": "زريبة الوادي"
    },
    {
      "id": "07-0262",
      "nameFr": "زريبة الوادي",
      "nameAr": "زريبة الوادي",
      "dairaAr": "زريبة الوادي"
    },
    {
      "id": "07-0260",
      "nameFr": "سيدي عقبة",
      "nameAr": "سيدي عقبة",
      "dairaAr": "سيدي عقبة"
    },
    {
      "id": "07-0238",
      "nameFr": "شتمة",
      "nameAr": "شتمة",
      "dairaAr": "سيدي عقبة"
    },
    {
      "id": "07-0261",
      "nameFr": "طولقة",
      "nameAr": "طولقة",
      "dairaAr": "طولقة"
    },
    {
      "id": "07-0230",
      "nameFr": "عين الناقة",
      "nameAr": "عين الناقة",
      "dairaAr": "سيدي عقبة"
    },
    {
      "id": "07-0247",
      "nameFr": "فوغالة",
      "nameAr": "فوغالة",
      "dairaAr": "فوغالة"
    },
    {
      "id": "07-0249",
      "nameFr": "ليشانة",
      "nameAr": "ليشانة",
      "dairaAr": "طولقة"
    },
    {
      "id": "07-0250",
      "nameFr": "ليوة",
      "nameAr": "ليوة",
      "dairaAr": "أورلال"
    },
    {
      "id": "07-0252",
      "nameFr": "مخادمة",
      "nameAr": "مخادمة",
      "dairaAr": "أورلال"
    },
    {
      "id": "07-0251",
      "nameFr": "مشونش",
      "nameAr": "مشونش",
      "dairaAr": "مشونش"
    },
    {
      "id": "07-0254",
      "nameFr": "مليلي",
      "nameAr": "مليلي",
      "dairaAr": "أورلال"
    }
  ],
  "08": [
    {
      "id": "08-0263",
      "nameFr": "العبادلة",
      "nameAr": "العبادلة",
      "dairaAr": "العبادلة"
    },
    {
      "id": "08-0272",
      "nameFr": "القنادسة",
      "nameAr": "القنادسة",
      "dairaAr": "القنادسة"
    },
    {
      "id": "08-0277",
      "nameFr": "المريجة",
      "nameAr": "المريجة",
      "dairaAr": "القنادسة"
    },
    {
      "id": "08-0264",
      "nameFr": "بشار",
      "nameAr": "بشار",
      "dairaAr": "بشار"
    },
    {
      "id": "08-0267",
      "nameFr": "بني ونيف",
      "nameAr": "بني ونيف",
      "dairaAr": "بني ونيف"
    },
    {
      "id": "08-0268",
      "nameFr": "بوكايس",
      "nameAr": "بوكايس",
      "dairaAr": "لحمر"
    },
    {
      "id": "08-0281",
      "nameFr": "تاغيت",
      "nameAr": "تاغيت",
      "dairaAr": "تاغيت"
    },
    {
      "id": "08-0280",
      "nameFr": "تبلبالة",
      "nameAr": "تبلبالة",
      "dairaAr": "تبلبالة"
    },
    {
      "id": "08-0270",
      "nameFr": "عرق فراج",
      "nameAr": "عرق فراج",
      "dairaAr": "العبادلة"
    },
    {
      "id": "08-0275",
      "nameFr": "لحمر",
      "nameAr": "لحمر",
      "dairaAr": "لحمر"
    },
    {
      "id": "08-0276",
      "nameFr": "مشرع هواري بومدين",
      "nameAr": "مشرع هواري بومدين",
      "dairaAr": "العبادلة"
    },
    {
      "id": "08-0278",
      "nameFr": "موغل",
      "nameAr": "موغل",
      "dairaAr": "لحمر"
    }
  ],
  "09": [
    {
      "id": "09-0306",
      "nameFr": "أولاد يعيش",
      "nameAr": "أولاد يعيش",
      "dairaAr": "أولاد يعيش"
    },
    {
      "id": "09-0300",
      "nameFr": "الأربعاء",
      "nameAr": "الأربعاء",
      "dairaAr": "الأربعاء"
    },
    {
      "id": "09-0288",
      "nameFr": "البليدة",
      "nameAr": "البليدة",
      "dairaAr": "البليدة"
    },
    {
      "id": "09-0293",
      "nameFr": "الشبلي",
      "nameAr": "الشبلي",
      "dairaAr": "بوعينان"
    },
    {
      "id": "09-0295",
      "nameFr": "الشريعة",
      "nameAr": "الشريعة",
      "dairaAr": "أولاد يعيش"
    },
    {
      "id": "09-0294",
      "nameFr": "الشفة",
      "nameAr": "الشفة",
      "dairaAr": "موزاية"
    },
    {
      "id": "09-0308",
      "nameFr": "الصومعة",
      "nameAr": "الصومعة",
      "dairaAr": "بوفاريك"
    },
    {
      "id": "09-0297",
      "nameFr": "العفرون",
      "nameAr": "العفرون",
      "dairaAr": "العفرون"
    },
    {
      "id": "09-0305",
      "nameFr": "اولاد سلامة",
      "nameAr": "اولاد سلامة",
      "dairaAr": "بوقرة"
    },
    {
      "id": "09-0287",
      "nameFr": "بن خليل",
      "nameAr": "بن خليل",
      "dairaAr": "وادي العلايق"
    },
    {
      "id": "09-0286",
      "nameFr": "بني تامو",
      "nameAr": "بني تامو",
      "dairaAr": "وادي العلايق"
    },
    {
      "id": "09-0285",
      "nameFr": "بني مراد",
      "nameAr": "بني مراد",
      "dairaAr": "أولاد يعيش"
    },
    {
      "id": "09-0289",
      "nameFr": "بوعرفة",
      "nameAr": "بوعرفة",
      "dairaAr": "البليدة"
    },
    {
      "id": "09-0292",
      "nameFr": "بوعينان",
      "nameAr": "بوعينان",
      "dairaAr": "بوعينان"
    },
    {
      "id": "09-0290",
      "nameFr": "بوفاريك",
      "nameAr": "بوفاريك",
      "dairaAr": "بوفاريك"
    },
    {
      "id": "09-0291",
      "nameFr": "بوقرة",
      "nameAr": "بوقرة",
      "dairaAr": "بوقرة"
    },
    {
      "id": "09-0296",
      "nameFr": "جبابرة",
      "nameAr": "جبابرة",
      "dairaAr": "مفتاح"
    },
    {
      "id": "09-0299",
      "nameFr": "حمام ملوان",
      "nameAr": "حمام ملوان",
      "dairaAr": "بوقرة"
    },
    {
      "id": "09-0307",
      "nameFr": "صوحان",
      "nameAr": "صوحان",
      "dairaAr": "الأربعاء"
    },
    {
      "id": "09-0284",
      "nameFr": "عين الرمانة",
      "nameAr": "عين الرمانة",
      "dairaAr": "موزاية"
    },
    {
      "id": "09-0298",
      "nameFr": "قرواو",
      "nameAr": "قرواو",
      "dairaAr": "بوفاريك"
    },
    {
      "id": "09-0301",
      "nameFr": "مفتاح",
      "nameAr": "مفتاح",
      "dairaAr": "مفتاح"
    },
    {
      "id": "09-0302",
      "nameFr": "موزاية",
      "nameAr": "موزاية",
      "dairaAr": "موزاية"
    },
    {
      "id": "09-0304",
      "nameFr": "وادي العلايق",
      "nameAr": "وادي العلايق",
      "dairaAr": "وادي العلايق"
    },
    {
      "id": "09-0303",
      "nameFr": "وادي جر",
      "nameAr": "وادي جر",
      "dairaAr": "العفرون"
    }
  ],
  "10": [
    {
      "id": "10-0352",
      "nameFr": "آث منصور",
      "nameAr": "آث منصور",
      "dairaAr": "مشد الله"
    },
    {
      "id": "10-0316",
      "nameFr": "أعمر",
      "nameAr": "أعمر",
      "dairaAr": "القادرية"
    },
    {
      "id": "10-0309",
      "nameFr": "أغبالو",
      "nameAr": "أغبالو",
      "dairaAr": "مشد الله"
    },
    {
      "id": "10-0339",
      "nameFr": "أمشدالة",
      "nameAr": "أمشدالة",
      "dairaAr": "مشد الله"
    },
    {
      "id": "10-0310",
      "nameFr": "أهل القصر",
      "nameAr": "أهل القصر",
      "dairaAr": "بشلول"
    },
    {
      "id": "10-0344",
      "nameFr": "أولاد راشد",
      "nameAr": "أولاد راشد",
      "dairaAr": "بشلول"
    },
    {
      "id": "10-0315",
      "nameFr": "أيت لعزيز",
      "nameAr": "أيت لعزيز",
      "dairaAr": "البويرة"
    },
    {
      "id": "10-0338",
      "nameFr": "الأخضرية",
      "nameAr": "الأخضرية",
      "dairaAr": "الأخضرية"
    },
    {
      "id": "10-0328",
      "nameFr": "الأسنام",
      "nameAr": "الأسنام",
      "dairaAr": "بشلول"
    },
    {
      "id": "10-0321",
      "nameFr": "البويرة",
      "nameAr": "البويرة",
      "dairaAr": "البويرة"
    },
    {
      "id": "10-0331",
      "nameFr": "الحاكمية",
      "nameAr": "الحاكمية",
      "dairaAr": "سور الغزلان"
    },
    {
      "id": "10-0334",
      "nameFr": "الحجرة الزرقاء",
      "nameAr": "الحجرة الزرقاء",
      "dairaAr": "برج أوخريص"
    },
    {
      "id": "10-0330",
      "nameFr": "الخبوزية",
      "nameAr": "الخبوزية",
      "dairaAr": "بئر غبالو"
    },
    {
      "id": "10-0324",
      "nameFr": "الدشمية",
      "nameAr": "الدشمية",
      "dairaAr": "سور الغزلان"
    },
    {
      "id": "10-0327",
      "nameFr": "العجيبة",
      "nameAr": "العجيبة",
      "dairaAr": "بشلول"
    },
    {
      "id": "10-0341",
      "nameFr": "المعمورة",
      "nameAr": "المعمورة",
      "dairaAr": "سور الغزلان"
    },
    {
      "id": "10-0332",
      "nameFr": "المقراني",
      "nameAr": "المقراني",
      "dairaAr": "سوق الخميس"
    },
    {
      "id": "10-0329",
      "nameFr": "الهاشمية",
      "nameAr": "الهاشمية",
      "dairaAr": "الهاشمية"
    },
    {
      "id": "10-0318",
      "nameFr": "بئر غبالو",
      "nameAr": "بئر غبالو",
      "dairaAr": "بئر غبالو"
    },
    {
      "id": "10-0319",
      "nameFr": "برج أوخريص",
      "nameAr": "برج أوخريص",
      "dairaAr": "برج أوخريص"
    },
    {
      "id": "10-0317",
      "nameFr": "بشلول",
      "nameAr": "بشلول",
      "dairaAr": "بشلول"
    },
    {
      "id": "10-0320",
      "nameFr": "بودربالة",
      "nameAr": "بودربالة",
      "dairaAr": "الأخضرية"
    },
    {
      "id": "10-0322",
      "nameFr": "بوكرم",
      "nameAr": "بوكرم",
      "dairaAr": "الأخضرية"
    },
    {
      "id": "10-0350",
      "nameFr": "تاغزوت",
      "nameAr": "تاغزوت",
      "dairaAr": "الحيزر"
    },
    {
      "id": "10-0351",
      "nameFr": "تاقديت",
      "nameAr": "تاقديت",
      "dairaAr": "برج أوخريص"
    },
    {
      "id": "10-0326",
      "nameFr": "جباحية",
      "nameAr": "جباحية",
      "dairaAr": "القادرية"
    },
    {
      "id": "10-0336",
      "nameFr": "حنيف",
      "nameAr": "حنيف",
      "dairaAr": "مشد الله"
    },
    {
      "id": "10-0335",
      "nameFr": "حيزر",
      "nameAr": "حيزر",
      "dairaAr": "الحيزر"
    },
    {
      "id": "10-0325",
      "nameFr": "ديرة",
      "nameAr": "ديرة",
      "dairaAr": "سور الغزلان"
    },
    {
      "id": "10-0345",
      "nameFr": "روراوة",
      "nameAr": "روراوة",
      "dairaAr": "بئر غبالو"
    },
    {
      "id": "10-0346",
      "nameFr": "ريدان",
      "nameAr": "ريدان",
      "dairaAr": "سور الغزلان"
    },
    {
      "id": "10-0353",
      "nameFr": "زبربر",
      "nameAr": "زبربر",
      "dairaAr": "الأخضرية"
    },
    {
      "id": "10-0347",
      "nameFr": "سحاريج",
      "nameAr": "سحاريج",
      "dairaAr": "مشد الله"
    },
    {
      "id": "10-0349",
      "nameFr": "سور الغزلان",
      "nameAr": "سور الغزلان",
      "dairaAr": "سور الغزلان"
    },
    {
      "id": "10-0348",
      "nameFr": "سوق الخميس",
      "nameAr": "سوق الخميس",
      "dairaAr": "سوق الخميس"
    },
    {
      "id": "10-0323",
      "nameFr": "شرفة",
      "nameAr": "شرفة",
      "dairaAr": "مشد الله"
    },
    {
      "id": "10-0313",
      "nameFr": "عين الترك",
      "nameAr": "عين الترك",
      "dairaAr": "البويرة"
    },
    {
      "id": "10-0311",
      "nameFr": "عين الحجر",
      "nameAr": "عين الحجر",
      "dairaAr": "عين بسام"
    },
    {
      "id": "10-0312",
      "nameFr": "عين العلوي",
      "nameAr": "عين العلوي",
      "dairaAr": "عين بسام"
    },
    {
      "id": "10-0314",
      "nameFr": "عين بسام",
      "nameAr": "عين بسام",
      "dairaAr": "عين بسام"
    },
    {
      "id": "10-0337",
      "nameFr": "قادرية",
      "nameAr": "قادرية",
      "dairaAr": "القادرية"
    },
    {
      "id": "10-0333",
      "nameFr": "قرومة",
      "nameAr": "قرومة",
      "dairaAr": "الأخضرية"
    },
    {
      "id": "10-0342",
      "nameFr": "مزدور",
      "nameAr": "مزدور",
      "dairaAr": "برج أوخريص"
    },
    {
      "id": "10-0340",
      "nameFr": "معلة",
      "nameAr": "معلة",
      "dairaAr": "الأخضرية"
    },
    {
      "id": "10-0343",
      "nameFr": "وادي البردي",
      "nameAr": "وادي البردي",
      "dairaAr": "الهاشمية"
    }
  ],
  "11": [
    {
      "id": "11-0359",
      "nameFr": "أدلس",
      "nameAr": "أدلس",
      "dairaAr": "تاظروك"
    },
    {
      "id": "11-0354",
      "nameFr": "ابلسة",
      "nameAr": "ابلسة",
      "dairaAr": "سيلت"
    },
    {
      "id": "11-0362",
      "nameFr": "تاظروك",
      "nameAr": "تاظروك",
      "dairaAr": "تاظروك"
    },
    {
      "id": "11-0361",
      "nameFr": "تمنراست",
      "nameAr": "تمنراست",
      "dairaAr": "تمنراست"
    },
    {
      "id": "11-0355",
      "nameFr": "عين امقل",
      "nameAr": "عين امقل",
      "dairaAr": "تمنراست"
    }
  ],
  "12": [
    {
      "id": "12-0387",
      "nameFr": "أم علي",
      "nameAr": "أم علي",
      "dairaAr": "أم علي"
    },
    {
      "id": "12-0383",
      "nameFr": "الحمامات",
      "nameAr": "الحمامات",
      "dairaAr": "بئر مقدم"
    },
    {
      "id": "12-0380",
      "nameFr": "الحويجبات",
      "nameAr": "الحويجبات",
      "dairaAr": "الماء الابيض"
    },
    {
      "id": "12-0372",
      "nameFr": "الشريعة",
      "nameAr": "الشريعة",
      "dairaAr": "الشريعة"
    },
    {
      "id": "12-0377",
      "nameFr": "العقلة",
      "nameAr": "العقلة",
      "dairaAr": "العقلة"
    },
    {
      "id": "12-0379",
      "nameFr": "العوينات",
      "nameAr": "العوينات",
      "dairaAr": "العوينات"
    },
    {
      "id": "12-0373",
      "nameFr": "الكويف",
      "nameAr": "الكويف",
      "dairaAr": "الكويف"
    },
    {
      "id": "12-0374",
      "nameFr": "الماء الابيض",
      "nameAr": "الماء الابيض",
      "dairaAr": "الماء الابيض"
    },
    {
      "id": "12-0375",
      "nameFr": "المريج",
      "nameAr": "المريج",
      "dairaAr": "الونزة"
    },
    {
      "id": "12-0376",
      "nameFr": "المزرعة",
      "nameAr": "المزرعة",
      "dairaAr": "العقلة"
    },
    {
      "id": "12-0386",
      "nameFr": "الونزة",
      "nameAr": "الونزة",
      "dairaAr": "الونزة"
    },
    {
      "id": "12-0367",
      "nameFr": "بئر الذهب",
      "nameAr": "بئر الذهب",
      "dairaAr": "مرسط"
    },
    {
      "id": "12-0368",
      "nameFr": "بئر مقدم",
      "nameAr": "بئر مقدم",
      "dairaAr": "بئر مقدم"
    },
    {
      "id": "12-0365",
      "nameFr": "بجن",
      "nameAr": "بجن",
      "dairaAr": "العقلة"
    },
    {
      "id": "12-0366",
      "nameFr": "بكارية",
      "nameAr": "بكارية",
      "dairaAr": "الكويف"
    },
    {
      "id": "12-0370",
      "nameFr": "بوخضرة",
      "nameAr": "بوخضرة",
      "dairaAr": "العوينات"
    },
    {
      "id": "12-0371",
      "nameFr": "بولحاف الدير",
      "nameAr": "بولحاف الدير",
      "dairaAr": "الكويف"
    },
    {
      "id": "12-0390",
      "nameFr": "تبسة",
      "nameAr": "تبسة",
      "dairaAr": "تبسة"
    },
    {
      "id": "12-0391",
      "nameFr": "ثليجان",
      "nameAr": "ثليجان",
      "dairaAr": "الشريعة"
    },
    {
      "id": "12-0389",
      "nameFr": "سطح قنطيس",
      "nameAr": "سطح قنطيس",
      "dairaAr": "العقلة"
    },
    {
      "id": "12-0388",
      "nameFr": "صفصاف الوسرى",
      "nameAr": "صفصاف الوسرى",
      "dairaAr": "أم علي"
    },
    {
      "id": "12-0364",
      "nameFr": "عين الزرقاء",
      "nameAr": "عين الزرقاء",
      "dairaAr": "الونزة"
    },
    {
      "id": "12-0382",
      "nameFr": "قريقر",
      "nameAr": "قريقر",
      "dairaAr": "بئر مقدم"
    },
    {
      "id": "12-0384",
      "nameFr": "مرسط",
      "nameAr": "مرسط",
      "dairaAr": "مرسط"
    }
  ],
  "13": [
    {
      "id": "13-0430",
      "nameFr": "أولاد رياح",
      "nameAr": "أولاد رياح",
      "dairaAr": "الحناية"
    },
    {
      "id": "13-0429",
      "nameFr": "أولاد ميمون",
      "nameAr": "أولاد ميمون",
      "dairaAr": "أولاد ميمون"
    },
    {
      "id": "13-0421",
      "nameFr": "الحناية",
      "nameAr": "الحناية",
      "dairaAr": "الحناية"
    },
    {
      "id": "13-0431",
      "nameFr": "الرمشي",
      "nameAr": "الرمشي",
      "dairaAr": "الرمشي"
    },
    {
      "id": "13-0438",
      "nameFr": "السواحلية",
      "nameAr": "السواحلية",
      "dairaAr": "الغزوات"
    },
    {
      "id": "13-0439",
      "nameFr": "السواني",
      "nameAr": "السواني",
      "dairaAr": "باب العسة"
    },
    {
      "id": "13-0415",
      "nameFr": "العزايل",
      "nameAr": "العزايل",
      "dairaAr": "بني سنوس"
    },
    {
      "id": "13-0419",
      "nameFr": "الغزوات",
      "nameAr": "الغزوات",
      "dairaAr": "الغزوات"
    },
    {
      "id": "13-0416",
      "nameFr": "الفحول",
      "nameAr": "الفحول",
      "dairaAr": "الرمشي"
    },
    {
      "id": "13-0400",
      "nameFr": "باب العسة",
      "nameAr": "باب العسة",
      "dairaAr": "باب العسة"
    },
    {
      "id": "13-0408",
      "nameFr": "بن سكران",
      "nameAr": "بن سكران",
      "dairaAr": "بن سكران"
    },
    {
      "id": "13-0401",
      "nameFr": "بني بهدل",
      "nameAr": "بني بهدل",
      "dairaAr": "بني سنوس"
    },
    {
      "id": "13-0402",
      "nameFr": "بني بوسعيد",
      "nameAr": "بني بوسعيد",
      "dairaAr": "بني بوسعيد"
    },
    {
      "id": "13-0403",
      "nameFr": "بني خلاد",
      "nameAr": "بني خلاد",
      "dairaAr": "هنين"
    },
    {
      "id": "13-0407",
      "nameFr": "بني سنوس",
      "nameAr": "بني سنوس",
      "dairaAr": "بني سنوس"
    },
    {
      "id": "13-0406",
      "nameFr": "بني صميل",
      "nameAr": "بني صميل",
      "dairaAr": "أولاد ميمون"
    },
    {
      "id": "13-0404",
      "nameFr": "بني مستر",
      "nameAr": "بني مستر",
      "dairaAr": "منصورة"
    },
    {
      "id": "13-0405",
      "nameFr": "بني وارسوس",
      "nameAr": "بني وارسوس",
      "dairaAr": "الرمشي"
    },
    {
      "id": "13-0409",
      "nameFr": "بوحلو",
      "nameAr": "بوحلو",
      "dairaAr": "صبرة"
    },
    {
      "id": "13-0443",
      "nameFr": "تلمسان",
      "nameAr": "تلمسان",
      "dairaAr": "تلمسان"
    },
    {
      "id": "13-0442",
      "nameFr": "تيانت",
      "nameAr": "تيانت",
      "dairaAr": "الغزوات"
    },
    {
      "id": "13-0441",
      "nameFr": "تيرني بني هديل",
      "nameAr": "تيرني بني هديل",
      "dairaAr": "منصورة"
    },
    {
      "id": "13-0413",
      "nameFr": "جبالة",
      "nameAr": "جبالة",
      "dairaAr": "ندرومة"
    },
    {
      "id": "13-0420",
      "nameFr": "حمام بوغرارة",
      "nameAr": "حمام بوغرارة",
      "dairaAr": "مغنية"
    },
    {
      "id": "13-0412",
      "nameFr": "دار يغمراسن",
      "nameAr": "دار يغمراسن",
      "dairaAr": "الغزوات"
    },
    {
      "id": "13-0444",
      "nameFr": "زناتة",
      "nameAr": "زناتة",
      "dairaAr": "الحناية"
    },
    {
      "id": "13-0434",
      "nameFr": "سبدو",
      "nameAr": "سبدو",
      "dairaAr": "سبدو"
    },
    {
      "id": "13-0433",
      "nameFr": "سبعة شيوخ",
      "nameAr": "سبعة شيوخ",
      "dairaAr": "الرمشي"
    },
    {
      "id": "13-0440",
      "nameFr": "سوق الثلاثاء",
      "nameAr": "سوق الثلاثاء",
      "dairaAr": "باب العسة"
    },
    {
      "id": "13-0435",
      "nameFr": "سيدي العبدلي",
      "nameAr": "سيدي العبدلي",
      "dairaAr": "بن سكران"
    },
    {
      "id": "13-0437",
      "nameFr": "سيدي مجاهد",
      "nameAr": "سيدي مجاهد",
      "dairaAr": "بني بوسعيد"
    },
    {
      "id": "13-0411",
      "nameFr": "شتوان",
      "nameAr": "شتوان",
      "dairaAr": "شتوان"
    },
    {
      "id": "13-0432",
      "nameFr": "صبرة",
      "nameAr": "صبرة",
      "dairaAr": "صبرة"
    },
    {
      "id": "13-0399",
      "nameFr": "عمير",
      "nameAr": "عمير",
      "dairaAr": "شتوان"
    },
    {
      "id": "13-0395",
      "nameFr": "عين الكبيرة",
      "nameAr": "عين الكبيرة",
      "dairaAr": "فلاوسن"
    },
    {
      "id": "13-0396",
      "nameFr": "عين النحالة",
      "nameAr": "عين النحالة",
      "dairaAr": "عين تالوت"
    },
    {
      "id": "13-0397",
      "nameFr": "عين تالوت",
      "nameAr": "عين تالوت",
      "dairaAr": "عين تالوت"
    },
    {
      "id": "13-0394",
      "nameFr": "عين غرابة",
      "nameAr": "عين غرابة",
      "dairaAr": "منصورة"
    },
    {
      "id": "13-0392",
      "nameFr": "عين فتاح",
      "nameAr": "عين فتاح",
      "dairaAr": "فلاوسن"
    },
    {
      "id": "13-0393",
      "nameFr": "عين فزة",
      "nameAr": "عين فزة",
      "dairaAr": "شتوان"
    },
    {
      "id": "13-0398",
      "nameFr": "عين يوسف",
      "nameAr": "عين يوسف",
      "dairaAr": "الرمشي"
    },
    {
      "id": "13-0418",
      "nameFr": "فلاوسن",
      "nameAr": "فلاوسن",
      "dairaAr": "فلاوسن"
    },
    {
      "id": "13-0425",
      "nameFr": "مرسى بن مهيدي",
      "nameAr": "مرسى بن مهيدي",
      "dairaAr": "مرسى بن مهيدي"
    },
    {
      "id": "13-0426",
      "nameFr": "مسيردة الفواقة",
      "nameAr": "مسيردة الفواقة",
      "dairaAr": "مرسى بن مهيدي"
    },
    {
      "id": "13-0423",
      "nameFr": "مغنية",
      "nameAr": "مغنية",
      "dairaAr": "مغنية"
    },
    {
      "id": "13-0424",
      "nameFr": "منصورة",
      "nameAr": "منصورة",
      "dairaAr": "منصورة"
    },
    {
      "id": "13-0427",
      "nameFr": "ندرومة",
      "nameAr": "ندرومة",
      "dairaAr": "ندرومة"
    },
    {
      "id": "13-0422",
      "nameFr": "هنين",
      "nameAr": "هنين",
      "dairaAr": "هنين"
    },
    {
      "id": "13-0428",
      "nameFr": "وادي الخضر",
      "nameAr": "وادي الخضر",
      "dairaAr": "أولاد ميمون"
    }
  ],
  "14": [
    {
      "id": "14-0470",
      "nameFr": "الرحوية",
      "nameAr": "الرحوية",
      "dairaAr": "رحوية"
    },
    {
      "id": "14-0473",
      "nameFr": "السبت",
      "nameAr": "السبت",
      "dairaAr": "مغيلة"
    },
    {
      "id": "14-0472",
      "nameFr": "السبعين",
      "nameAr": "السبعين",
      "dairaAr": "مهدية"
    },
    {
      "id": "14-0480",
      "nameFr": "السوقر",
      "nameAr": "السوقر",
      "dairaAr": "السوقر"
    },
    {
      "id": "14-0455",
      "nameFr": "الفايجة",
      "nameAr": "الفايجة",
      "dairaAr": "السوقر"
    },
    {
      "id": "14-0467",
      "nameFr": "الناظورة",
      "nameAr": "الناظورة",
      "dairaAr": "مهدية"
    },
    {
      "id": "14-0468",
      "nameFr": "النعيمة",
      "nameAr": "النعيمة",
      "dairaAr": "عين الذهب"
    },
    {
      "id": "14-0481",
      "nameFr": "تاقدمت",
      "nameAr": "تاقدمت",
      "dairaAr": "مشرع الصفا"
    },
    {
      "id": "14-0482",
      "nameFr": "تخمرت",
      "nameAr": "تخمرت",
      "dairaAr": "فرندة"
    },
    {
      "id": "14-0485",
      "nameFr": "توسنينة",
      "nameAr": "توسنينة",
      "dairaAr": "السوقر"
    },
    {
      "id": "14-0483",
      "nameFr": "تيارت",
      "nameAr": "تيارت",
      "dairaAr": "تيارت"
    },
    {
      "id": "14-0484",
      "nameFr": "تيدة",
      "nameAr": "تيدة",
      "dairaAr": "وادي ليلي"
    },
    {
      "id": "14-0453",
      "nameFr": "جبيلات الرصفاء",
      "nameAr": "جبيلات الرصفاء",
      "dairaAr": "عين كرمس"
    },
    {
      "id": "14-0454",
      "nameFr": "جيلالي بن عمار",
      "nameAr": "جيلالي بن عمار",
      "dairaAr": "مشرع الصفا"
    },
    {
      "id": "14-0452",
      "nameFr": "دحموني",
      "nameAr": "دحموني",
      "dairaAr": "دحموني"
    },
    {
      "id": "14-0475",
      "nameFr": "سي عبد الغني",
      "nameAr": "سي عبد الغني",
      "dairaAr": "السوقر"
    },
    {
      "id": "14-0478",
      "nameFr": "سيدي بختي",
      "nameAr": "سيدي بختي",
      "dairaAr": "مدروسة"
    },
    {
      "id": "14-0479",
      "nameFr": "سيدي حسني",
      "nameAr": "سيدي حسني",
      "dairaAr": "مغيلة"
    },
    {
      "id": "14-0476",
      "nameFr": "سيدي عبد الرحمن",
      "nameAr": "سيدي عبد الرحمن",
      "dairaAr": "عين كرمس"
    },
    {
      "id": "14-0477",
      "nameFr": "سيدي علي ملال",
      "nameAr": "سيدي علي ملال",
      "dairaAr": "وادي ليلي"
    },
    {
      "id": "14-0451",
      "nameFr": "شحيمة",
      "nameAr": "شحيمة",
      "dairaAr": "عين الذهب"
    },
    {
      "id": "14-0448",
      "nameFr": "عين الحديد",
      "nameAr": "عين الحديد",
      "dairaAr": "فرندة"
    },
    {
      "id": "14-0446",
      "nameFr": "عين الذهب",
      "nameAr": "عين الذهب",
      "dairaAr": "عين الذهب"
    },
    {
      "id": "14-0445",
      "nameFr": "عين بوشقيف",
      "nameAr": "عين بوشقيف",
      "dairaAr": "دحموني"
    },
    {
      "id": "14-0447",
      "nameFr": "عين دزاريت",
      "nameAr": "عين دزاريت",
      "dairaAr": "مهدية"
    },
    {
      "id": "14-0449",
      "nameFr": "عين كرمس",
      "nameAr": "عين كرمس",
      "dairaAr": "عين كرمس"
    },
    {
      "id": "14-0456",
      "nameFr": "فرندة",
      "nameAr": "فرندة",
      "dairaAr": "فرندة"
    },
    {
      "id": "14-0457",
      "nameFr": "قرطوفة",
      "nameAr": "قرطوفة",
      "dairaAr": "رحوية"
    },
    {
      "id": "14-0460",
      "nameFr": "مادنة",
      "nameAr": "مادنة",
      "dairaAr": "عين كرمس"
    },
    {
      "id": "14-0464",
      "nameFr": "مدروسة",
      "nameAr": "مدروسة",
      "dairaAr": "مدروسة"
    },
    {
      "id": "14-0463",
      "nameFr": "مدريسة",
      "nameAr": "مدريسة",
      "dairaAr": "عين كرمس"
    },
    {
      "id": "14-0462",
      "nameFr": "مشرع الصفا",
      "nameAr": "مشرع الصفا",
      "dairaAr": "مشرع الصفا"
    },
    {
      "id": "14-0465",
      "nameFr": "مغيلة",
      "nameAr": "مغيلة",
      "dairaAr": "مغيلة"
    },
    {
      "id": "14-0466",
      "nameFr": "ملاكو",
      "nameAr": "ملاكو",
      "dairaAr": "مدروسة"
    },
    {
      "id": "14-0461",
      "nameFr": "مهدية",
      "nameAr": "مهدية",
      "dairaAr": "مهدية"
    },
    {
      "id": "14-0469",
      "nameFr": "وادي ليلي",
      "nameAr": "وادي ليلي",
      "dairaAr": "وادي ليلي"
    }
  ],
  "15": [
    {
      "id": "15-0487",
      "nameFr": "أبي يوسف",
      "nameAr": "أبي يوسف",
      "dairaAr": "عين الحمام"
    },
    {
      "id": "15-0507",
      "nameFr": "أزفون",
      "nameAr": "أزفون",
      "dairaAr": "أزفون"
    },
    {
      "id": "15-0505",
      "nameFr": "أسي يوسف",
      "nameAr": "أسي يوسف",
      "dairaAr": "بوغني"
    },
    {
      "id": "15-0488",
      "nameFr": "أغريب",
      "nameAr": "أغريب",
      "dairaAr": "أزفون"
    },
    {
      "id": "15-0504",
      "nameFr": "أقرو",
      "nameAr": "أقرو",
      "dairaAr": "أزفون"
    },
    {
      "id": "15-0489",
      "nameFr": "أقني قغران",
      "nameAr": "أقني قغران",
      "dairaAr": "واضية"
    },
    {
      "id": "15-0500",
      "nameFr": "أيت أومالو",
      "nameAr": "أيت أومالو",
      "dairaAr": "تيزي راشد"
    },
    {
      "id": "15-0493",
      "nameFr": "أيت بــوادو",
      "nameAr": "أيت بــوادو",
      "dairaAr": "واضية"
    },
    {
      "id": "15-0494",
      "nameFr": "أيت بومهدي",
      "nameAr": "أيت بومهدي",
      "dairaAr": "واسيف"
    },
    {
      "id": "15-0501",
      "nameFr": "أيت تودرت",
      "nameAr": "أيت تودرت",
      "dairaAr": "واسيف"
    },
    {
      "id": "15-0495",
      "nameFr": "أيت خليلي",
      "nameAr": "أيت خليلي",
      "dairaAr": "مقلع"
    },
    {
      "id": "15-0498",
      "nameFr": "أيت شافع",
      "nameAr": "أيت شافع",
      "dairaAr": "أزفون"
    },
    {
      "id": "15-0492",
      "nameFr": "أيت عقـواشة",
      "nameAr": "أيت عقـواشة",
      "dairaAr": "الأربعاء ناث إيراثن"
    },
    {
      "id": "15-0497",
      "nameFr": "أيت عيسى ميمون",
      "nameAr": "أيت عيسى ميمون",
      "dairaAr": "واقنون"
    },
    {
      "id": "15-0499",
      "nameFr": "أيت محمود",
      "nameAr": "أيت محمود",
      "dairaAr": "بني دوالة"
    },
    {
      "id": "15-0496",
      "nameFr": "أيت يحي موسى",
      "nameAr": "أيت يحي موسى",
      "dairaAr": "ذراع الميزان"
    },
    {
      "id": "15-0502",
      "nameFr": "أيت يحيى",
      "nameAr": "أيت يحيى",
      "dairaAr": "عين الحمام"
    },
    {
      "id": "15-0521",
      "nameFr": "إبودرارن",
      "nameAr": "إبودرارن",
      "dairaAr": "بني يني"
    },
    {
      "id": "15-0551",
      "nameFr": "إعــكورن",
      "nameAr": "إعــكورن",
      "dairaAr": "عزازقة"
    },
    {
      "id": "15-0523",
      "nameFr": "إفــرحــونان",
      "nameAr": "إفــرحــونان",
      "dairaAr": "إفرحونان"
    },
    {
      "id": "15-0525",
      "nameFr": "إفليـــسن",
      "nameAr": "إفليـــسن",
      "dairaAr": "تيقزيرت"
    },
    {
      "id": "15-0528",
      "nameFr": "إمســوحال",
      "nameAr": "إمســوحال",
      "dairaAr": "إفرحونان"
    },
    {
      "id": "15-0522",
      "nameFr": "إيجــار",
      "nameAr": "إيجــار",
      "dairaAr": "بوزقن"
    },
    {
      "id": "15-0529",
      "nameFr": "إيرجـــن",
      "nameAr": "إيرجـــن",
      "dairaAr": "الأربعاء ناث إيراثن"
    },
    {
      "id": "15-0524",
      "nameFr": "إيفيغاء",
      "nameAr": "إيفيغاء",
      "dairaAr": "عزازقة"
    },
    {
      "id": "15-0526",
      "nameFr": "إيلـيــلتـن",
      "nameAr": "إيلـيــلتـن",
      "dairaAr": "إفرحونان"
    },
    {
      "id": "15-0527",
      "nameFr": "إيلولة أومـــالو",
      "nameAr": "إيلولة أومـــالو",
      "dairaAr": "بوزقن"
    },
    {
      "id": "15-0503",
      "nameFr": "اقبيل",
      "nameAr": "اقبيل",
      "dairaAr": "عين الحمام"
    },
    {
      "id": "15-0530",
      "nameFr": "الأربعــاء ناث إيراثن",
      "nameAr": "الأربعــاء ناث إيراثن",
      "dairaAr": "الأربعاء ناث إيراثن"
    },
    {
      "id": "15-0508",
      "nameFr": "بنــــي زمنزار",
      "nameAr": "بنــــي زمنزار",
      "dairaAr": "بني دوالة"
    },
    {
      "id": "15-0510",
      "nameFr": "بني دوالة",
      "nameAr": "بني دوالة",
      "dairaAr": "بني دوالة"
    },
    {
      "id": "15-0512",
      "nameFr": "بني زيكــي",
      "nameAr": "بني زيكــي",
      "dairaAr": "بوزقن"
    },
    {
      "id": "15-0509",
      "nameFr": "بني عيسي",
      "nameAr": "بني عيسي",
      "dairaAr": "بني دوالة"
    },
    {
      "id": "15-0511",
      "nameFr": "بني يني",
      "nameAr": "بني يني",
      "dairaAr": "بني يني"
    },
    {
      "id": "15-0514",
      "nameFr": "بوجيمة",
      "nameAr": "بوجيمة",
      "dairaAr": "ماكودة"
    },
    {
      "id": "15-0516",
      "nameFr": "بوزقــن",
      "nameAr": "بوزقــن",
      "dairaAr": "بوزقن"
    },
    {
      "id": "15-0513",
      "nameFr": "بوغني",
      "nameAr": "بوغني",
      "dairaAr": "بوغني"
    },
    {
      "id": "15-0515",
      "nameFr": "بونوح",
      "nameAr": "بونوح",
      "dairaAr": "بوغني"
    },
    {
      "id": "15-0543",
      "nameFr": "تادمايت",
      "nameAr": "تادمايت",
      "dairaAr": "ذراع بن خدة"
    },
    {
      "id": "15-0546",
      "nameFr": "تيرمتين",
      "nameAr": "تيرمتين",
      "dairaAr": "ذراع بن خدة"
    },
    {
      "id": "15-0550",
      "nameFr": "تيزي راشد",
      "nameAr": "تيزي راشد",
      "dairaAr": "تيزي راشد"
    },
    {
      "id": "15-0548",
      "nameFr": "تيزي غنيف",
      "nameAr": "تيزي غنيف",
      "dairaAr": "تيزي غنيف"
    },
    {
      "id": "15-0547",
      "nameFr": "تيزي نثلاثة",
      "nameAr": "تيزي نثلاثة",
      "dairaAr": "واضية"
    },
    {
      "id": "15-0549",
      "nameFr": "تيزي وزو",
      "nameAr": "تيزي وزو",
      "dairaAr": "تيزي وزو"
    },
    {
      "id": "15-0544",
      "nameFr": "تيقـزيرت",
      "nameAr": "تيقـزيرت",
      "dairaAr": "تيقزيرت"
    },
    {
      "id": "15-0545",
      "nameFr": "تيمـيزار",
      "nameAr": "تيمـيزار",
      "dairaAr": "واقنون"
    },
    {
      "id": "15-0518",
      "nameFr": "ذراع الميزان",
      "nameAr": "ذراع الميزان",
      "dairaAr": "ذراع الميزان"
    },
    {
      "id": "15-0517",
      "nameFr": "ذراع بن خدة",
      "nameAr": "ذراع بن خدة",
      "dairaAr": "ذراع بن خدة"
    },
    {
      "id": "15-0553",
      "nameFr": "زكري",
      "nameAr": "زكري",
      "dairaAr": "عزازقة"
    },
    {
      "id": "15-0542",
      "nameFr": "سوق الإثنين",
      "nameAr": "سوق الإثنين",
      "dairaAr": "معاتقة"
    },
    {
      "id": "15-0540",
      "nameFr": "سيدي نعمان",
      "nameAr": "سيدي نعمان",
      "dairaAr": "ذراع بن خدة"
    },
    {
      "id": "15-0541",
      "nameFr": "صوامـــع",
      "nameAr": "صوامـــع",
      "dairaAr": "مقلع"
    },
    {
      "id": "15-0506",
      "nameFr": "عزازقة",
      "nameAr": "عزازقة",
      "dairaAr": "عزازقة"
    },
    {
      "id": "15-0490",
      "nameFr": "عين الحمام",
      "nameAr": "عين الحمام",
      "dairaAr": "عين الحمام"
    },
    {
      "id": "15-0491",
      "nameFr": "عين الزاوية",
      "nameAr": "عين الزاوية",
      "dairaAr": "ذراع الميزان"
    },
    {
      "id": "15-0519",
      "nameFr": "فريحة",
      "nameAr": "فريحة",
      "dairaAr": "عزازقة"
    },
    {
      "id": "15-0520",
      "nameFr": "فريقات",
      "nameAr": "فريقات",
      "dairaAr": "ذراع الميزان"
    },
    {
      "id": "15-0532",
      "nameFr": "ماكودة",
      "nameAr": "ماكودة",
      "dairaAr": "ماكودة"
    },
    {
      "id": "15-0533",
      "nameFr": "مشطراس",
      "nameAr": "مشطراس",
      "dairaAr": "بوغني"
    },
    {
      "id": "15-0531",
      "nameFr": "معـــاتقة",
      "nameAr": "معـــاتقة",
      "dairaAr": "معاتقة"
    },
    {
      "id": "15-0534",
      "nameFr": "مقــلع",
      "nameAr": "مقــلع",
      "dairaAr": "مقلع"
    },
    {
      "id": "15-0536",
      "nameFr": "مكيرة",
      "nameAr": "مكيرة",
      "dairaAr": "تيزي غنيف"
    },
    {
      "id": "15-0535",
      "nameFr": "ميزرانـــة",
      "nameAr": "ميزرانـــة",
      "dairaAr": "تيقزيرت"
    },
    {
      "id": "15-0537",
      "nameFr": "واسيف",
      "nameAr": "واسيف",
      "dairaAr": "واسيف"
    },
    {
      "id": "15-0538",
      "nameFr": "واضية",
      "nameAr": "واضية",
      "dairaAr": "واضية"
    },
    {
      "id": "15-0539",
      "nameFr": "واقنون",
      "nameAr": "واقنون",
      "dairaAr": "واقنون"
    },
    {
      "id": "15-0552",
      "nameFr": "يطــافن",
      "nameAr": "يطــافن",
      "dairaAr": "بني يني"
    }
  ],
  "16": [
    {
      "id": "16-0562",
      "nameFr": "ابن عكنون",
      "nameAr": "ابن عكنون",
      "dairaAr": "بوزريعة"
    },
    {
      "id": "16-0580",
      "nameFr": "الابيار",
      "nameAr": "الابيار",
      "dairaAr": "بوزريعة"
    },
    {
      "id": "16-0556",
      "nameFr": "الجزائر الوسطى",
      "nameAr": "الجزائر الوسطى",
      "dairaAr": "سيدي امحمد"
    },
    {
      "id": "16-0581",
      "nameFr": "الحراش",
      "nameAr": "الحراش",
      "dairaAr": "الحراش"
    },
    {
      "id": "16-0586",
      "nameFr": "الحمامات",
      "nameAr": "الحمامات",
      "dairaAr": "الشراقة"
    },
    {
      "id": "16-0590",
      "nameFr": "الخرايسية",
      "nameAr": "الخرايسية",
      "dairaAr": "الدرارية"
    },
    {
      "id": "16-0574",
      "nameFr": "الدار البيضاء",
      "nameAr": "الدار البيضاء",
      "dairaAr": "الدار البيضاء"
    },
    {
      "id": "16-0578",
      "nameFr": "الدرارية",
      "nameAr": "الدرارية",
      "dairaAr": "الدرارية"
    },
    {
      "id": "16-0577",
      "nameFr": "الدويرة",
      "nameAr": "الدويرة",
      "dairaAr": "الدرارية"
    },
    {
      "id": "16-0601",
      "nameFr": "الرايس حميدو",
      "nameAr": "الرايس حميدو",
      "dairaAr": "باب الوادي"
    },
    {
      "id": "16-0600",
      "nameFr": "الرحمانية",
      "nameAr": "الرحمانية",
      "dairaAr": "زرالدة"
    },
    {
      "id": "16-0603",
      "nameFr": "الرويبة",
      "nameAr": "الرويبة",
      "dairaAr": "الرويبة"
    },
    {
      "id": "16-0604",
      "nameFr": "السحاولة",
      "nameAr": "السحاولة",
      "dairaAr": "بئر مراد رايس"
    },
    {
      "id": "16-0573",
      "nameFr": "الشراقة",
      "nameAr": "الشراقة",
      "dairaAr": "الشراقة"
    },
    {
      "id": "16-0579",
      "nameFr": "العاشور",
      "nameAr": "العاشور",
      "dairaAr": "الدرارية"
    },
    {
      "id": "16-0591",
      "nameFr": "القبة",
      "nameAr": "القبة",
      "dairaAr": "حسين داي"
    },
    {
      "id": "16-0572",
      "nameFr": "القصبة",
      "nameAr": "القصبة",
      "dairaAr": "باب الوادي"
    },
    {
      "id": "16-0592",
      "nameFr": "الكاليتوس",
      "nameAr": "الكاليتوس",
      "dairaAr": "براقي"
    },
    {
      "id": "16-0595",
      "nameFr": "المحمدية",
      "nameAr": "المحمدية",
      "dairaAr": "الدار البيضاء"
    },
    {
      "id": "16-0582",
      "nameFr": "المدنية",
      "nameAr": "المدنية",
      "dairaAr": "سيدي امحمد"
    },
    {
      "id": "16-0585",
      "nameFr": "المرادية",
      "nameAr": "المرادية",
      "dairaAr": "سيدي امحمد"
    },
    {
      "id": "16-0584",
      "nameFr": "المرسى",
      "nameAr": "المرسى",
      "dairaAr": "الدار البيضاء"
    },
    {
      "id": "16-0593",
      "nameFr": "المعالمة",
      "nameAr": "المعالمة",
      "dairaAr": "زرالدة"
    },
    {
      "id": "16-0583",
      "nameFr": "المغارية",
      "nameAr": "المغارية",
      "dairaAr": "حسين داي"
    },
    {
      "id": "16-0598",
      "nameFr": "اولاد شبل",
      "nameAr": "اولاد شبل",
      "dairaAr": "بئر توتة"
    },
    {
      "id": "16-0599",
      "nameFr": "اولاد فايت",
      "nameAr": "اولاد فايت",
      "dairaAr": "الشراقة"
    },
    {
      "id": "16-0566",
      "nameFr": "بئر توتة",
      "nameAr": "بئر توتة",
      "dairaAr": "بئر توتة"
    },
    {
      "id": "16-0565",
      "nameFr": "بئر خادم",
      "nameAr": "بئر خادم",
      "dairaAr": "بئر مراد رايس"
    },
    {
      "id": "16-0564",
      "nameFr": "بئر مراد رايس",
      "nameAr": "بئر مراد رايس",
      "dairaAr": "بئر مراد رايس"
    },
    {
      "id": "16-0558",
      "nameFr": "باب الزوار",
      "nameAr": "باب الزوار",
      "dairaAr": "الدار البيضاء"
    },
    {
      "id": "16-0557",
      "nameFr": "باب الوادي",
      "nameAr": "باب الوادي",
      "dairaAr": "باب الوادي"
    },
    {
      "id": "16-0559",
      "nameFr": "بابا حسن",
      "nameAr": "بابا حسن",
      "dairaAr": "الدرارية"
    },
    {
      "id": "16-0560",
      "nameFr": "باش جراح",
      "nameAr": "باش جراح",
      "dairaAr": "الحراش"
    },
    {
      "id": "16-0561",
      "nameFr": "براقي",
      "nameAr": "براقي",
      "dairaAr": "براقي"
    },
    {
      "id": "16-0568",
      "nameFr": "برج البحري",
      "nameAr": "برج البحري",
      "dairaAr": "الدار البيضاء"
    },
    {
      "id": "16-0569",
      "nameFr": "برج الكيفان",
      "nameAr": "برج الكيفان",
      "dairaAr": "الدار البيضاء"
    },
    {
      "id": "16-0563",
      "nameFr": "بني مسوس",
      "nameAr": "بني مسوس",
      "dairaAr": "بوزريعة"
    },
    {
      "id": "16-0570",
      "nameFr": "بوروبة",
      "nameAr": "بوروبة",
      "dairaAr": "الحراش"
    },
    {
      "id": "16-0571",
      "nameFr": "بوزريعة",
      "nameAr": "بوزريعة",
      "dairaAr": "بوزريعة"
    },
    {
      "id": "16-0567",
      "nameFr": "بولوغين بن زيري",
      "nameAr": "بولوغين بن زيري",
      "dairaAr": "باب الوادي"
    },
    {
      "id": "16-0609",
      "nameFr": "تسالة المرجة",
      "nameAr": "تسالة المرجة",
      "dairaAr": "بئر توتة"
    },
    {
      "id": "16-0576",
      "nameFr": "جسر قسنطينة",
      "nameAr": "جسر قسنطينة",
      "dairaAr": "بئر مراد رايس"
    },
    {
      "id": "16-0588",
      "nameFr": "حسين داي",
      "nameAr": "حسين داي",
      "dairaAr": "حسين داي"
    },
    {
      "id": "16-0589",
      "nameFr": "حيدرة",
      "nameAr": "حيدرة",
      "dairaAr": "بئر مراد رايس"
    },
    {
      "id": "16-0575",
      "nameFr": "دالي ابراهيم",
      "nameAr": "دالي ابراهيم",
      "dairaAr": "الشراقة"
    },
    {
      "id": "16-0602",
      "nameFr": "رغاية",
      "nameAr": "رغاية",
      "dairaAr": "الرويبة"
    },
    {
      "id": "16-0610",
      "nameFr": "زرالدة",
      "nameAr": "زرالدة",
      "dairaAr": "زرالدة"
    },
    {
      "id": "16-0608",
      "nameFr": "سطاوالي",
      "nameAr": "سطاوالي",
      "dairaAr": "زرالدة"
    },
    {
      "id": "16-0607",
      "nameFr": "سويدانية",
      "nameAr": "سويدانية",
      "dairaAr": "زرالدة"
    },
    {
      "id": "16-0605",
      "nameFr": "سيدي امحمد",
      "nameAr": "سيدي امحمد",
      "dairaAr": "سيدي امحمد"
    },
    {
      "id": "16-0606",
      "nameFr": "سيدي موسى",
      "nameAr": "سيدي موسى",
      "dairaAr": "براقي"
    },
    {
      "id": "16-0554",
      "nameFr": "عين بنيان",
      "nameAr": "عين بنيان",
      "dairaAr": "الشراقة"
    },
    {
      "id": "16-0555",
      "nameFr": "عين طاية",
      "nameAr": "عين طاية",
      "dairaAr": "الدار البيضاء"
    },
    {
      "id": "16-0594",
      "nameFr": "محمد بلوزداد",
      "nameAr": "محمد بلوزداد",
      "dairaAr": "حسين داي"
    },
    {
      "id": "16-0587",
      "nameFr": "هراوة",
      "nameAr": "هراوة",
      "dairaAr": "الرويبة"
    },
    {
      "id": "16-0597",
      "nameFr": "وادي السمار",
      "nameAr": "وادي السمار",
      "dairaAr": "الحراش"
    },
    {
      "id": "16-0596",
      "nameFr": "وادي قريش",
      "nameAr": "وادي قريش",
      "dairaAr": "باب الوادي"
    }
  ],
  "17": [
    {
      "id": "17-0627",
      "nameFr": "الادريسية",
      "nameAr": "الادريسية",
      "dairaAr": "الادريسية"
    },
    {
      "id": "17-0624",
      "nameFr": "الجلفة",
      "nameAr": "الجلفة",
      "dairaAr": "الجلفة"
    },
    {
      "id": "17-0621",
      "nameFr": "الشارف",
      "nameAr": "الشارف",
      "dairaAr": "الشارف"
    },
    {
      "id": "17-0626",
      "nameFr": "القديد",
      "nameAr": "القديد",
      "dairaAr": "الشارف"
    },
    {
      "id": "17-0618",
      "nameFr": "بن يعقوب",
      "nameAr": "بن يعقوب",
      "dairaAr": "الشارف"
    },
    {
      "id": "17-0644",
      "nameFr": "تعظميت",
      "nameAr": "تعظميت",
      "dairaAr": "عين الإبل"
    },
    {
      "id": "17-0634",
      "nameFr": "حاسي العش",
      "nameAr": "حاسي العش",
      "dairaAr": "حاسي بحبح"
    },
    {
      "id": "17-0633",
      "nameFr": "حاسي بحبح",
      "nameAr": "حاسي بحبح",
      "dairaAr": "حاسي بحبح"
    },
    {
      "id": "17-0622",
      "nameFr": "دار الشيوخ",
      "nameAr": "دار الشيوخ",
      "dairaAr": "دار الشيوخ"
    },
    {
      "id": "17-0625",
      "nameFr": "دويس",
      "nameAr": "دويس",
      "dairaAr": "الادريسية"
    },
    {
      "id": "17-0645",
      "nameFr": "زعفران",
      "nameAr": "زعفران",
      "dairaAr": "حاسي بحبح"
    },
    {
      "id": "17-0646",
      "nameFr": "زكار",
      "nameAr": "زكار",
      "dairaAr": "عين الإبل"
    },
    {
      "id": "17-0642",
      "nameFr": "سيدي بايزيد",
      "nameAr": "سيدي بايزيد",
      "dairaAr": "دار الشيوخ"
    },
    {
      "id": "17-0612",
      "nameFr": "عين الإبل",
      "nameAr": "عين الإبل",
      "dairaAr": "عين الإبل"
    },
    {
      "id": "17-0611",
      "nameFr": "عين الشهداء",
      "nameAr": "عين الشهداء",
      "dairaAr": "الادريسية"
    },
    {
      "id": "17-0614",
      "nameFr": "عين معبد",
      "nameAr": "عين معبد",
      "dairaAr": "حاسي بحبح"
    },
    {
      "id": "17-0638",
      "nameFr": "مجبارة",
      "nameAr": "مجبارة",
      "dairaAr": "عين الإبل"
    },
    {
      "id": "17-0637",
      "nameFr": "مليليحة",
      "nameAr": "مليليحة",
      "dairaAr": "دار الشيوخ"
    }
  ],
  "18": [
    {
      "id": "18-0660",
      "nameFr": "أراقن سويسي",
      "nameAr": "أراقن سويسي",
      "dairaAr": "زيامة منصورية"
    },
    {
      "id": "18-0666",
      "nameFr": "أولاد رابح",
      "nameAr": "أولاد رابح",
      "dairaAr": "سيدي معروف"
    },
    {
      "id": "18-0667",
      "nameFr": "أولاد يحيى خدروش",
      "nameAr": "أولاد يحيى خدروش",
      "dairaAr": "الميلية"
    },
    {
      "id": "18-0659",
      "nameFr": "الامير عبد القادر",
      "nameAr": "الامير عبد القادر",
      "dairaAr": "الطاهير"
    },
    {
      "id": "18-0653",
      "nameFr": "الجمعة بني حبيبي",
      "nameAr": "الجمعة بني حبيبي",
      "dairaAr": "العنصر"
    },
    {
      "id": "18-0669",
      "nameFr": "السطارة",
      "nameAr": "السطارة",
      "dairaAr": "السطارة"
    },
    {
      "id": "18-0651",
      "nameFr": "الشحنة",
      "nameAr": "الشحنة",
      "dairaAr": "الطاهير"
    },
    {
      "id": "18-0652",
      "nameFr": "الشقفة",
      "nameAr": "الشقفة",
      "dairaAr": "الشقفة"
    },
    {
      "id": "18-0672",
      "nameFr": "الطاهير",
      "nameAr": "الطاهير",
      "dairaAr": "الطاهير"
    },
    {
      "id": "18-0655",
      "nameFr": "العنصر",
      "nameAr": "العنصر",
      "dairaAr": "العنصر"
    },
    {
      "id": "18-0656",
      "nameFr": "العوانة",
      "nameAr": "العوانة",
      "dairaAr": "العوانة"
    },
    {
      "id": "18-0657",
      "nameFr": "القنار نشفي",
      "nameAr": "القنار نشفي",
      "dairaAr": "الشقفة"
    },
    {
      "id": "18-0658",
      "nameFr": "الميلية",
      "nameAr": "الميلية",
      "dairaAr": "الميلية"
    },
    {
      "id": "18-0647",
      "nameFr": "برج الطهر",
      "nameAr": "برج الطهر",
      "dairaAr": "الشقفة"
    },
    {
      "id": "18-0648",
      "nameFr": "بودريعة بني ياجيس",
      "nameAr": "بودريعة بني ياجيس",
      "dairaAr": "جيملة"
    },
    {
      "id": "18-0649",
      "nameFr": "بوراوي بلهادف",
      "nameAr": "بوراوي بلهادف",
      "dairaAr": "العنصر"
    },
    {
      "id": "18-0650",
      "nameFr": "بوسيف أولاد عسكر",
      "nameAr": "بوسيف أولاد عسكر",
      "dairaAr": "الطاهير"
    },
    {
      "id": "18-0673",
      "nameFr": "تاكسنة",
      "nameAr": "تاكسنة",
      "dairaAr": "تاكسنة"
    },
    {
      "id": "18-0662",
      "nameFr": "جيجل",
      "nameAr": "جيجل",
      "dairaAr": "جيجل"
    },
    {
      "id": "18-0654",
      "nameFr": "جيملة",
      "nameAr": "جيملة",
      "dairaAr": "جيملة"
    },
    {
      "id": "18-0664",
      "nameFr": "خيري واد عجول",
      "nameAr": "خيري واد عجول",
      "dairaAr": "العنصر"
    },
    {
      "id": "18-0674",
      "nameFr": "زيامة منصورية",
      "nameAr": "زيامة منصورية",
      "dairaAr": "زيامة منصورية"
    },
    {
      "id": "18-0668",
      "nameFr": "سلمى بن زيادة",
      "nameAr": "سلمى بن زيادة",
      "dairaAr": "العوانة"
    },
    {
      "id": "18-0670",
      "nameFr": "سيدي عبد العزيز",
      "nameAr": "سيدي عبد العزيز",
      "dairaAr": "الشقفة"
    },
    {
      "id": "18-0671",
      "nameFr": "سيدي معروف",
      "nameAr": "سيدي معروف",
      "dairaAr": "سيدي معروف"
    },
    {
      "id": "18-0661",
      "nameFr": "غبالة",
      "nameAr": "غبالة",
      "dairaAr": "السطارة"
    },
    {
      "id": "18-0663",
      "nameFr": "قاوس",
      "nameAr": "قاوس",
      "dairaAr": "تاكسنة"
    },
    {
      "id": "18-0665",
      "nameFr": "وجانة",
      "nameAr": "وجانة",
      "dairaAr": "الطاهير"
    }
  ],
  "19": [
    {
      "id": "19-0707",
      "nameFr": "أوريسيا",
      "nameAr": "أوريسيا",
      "dairaAr": "عين أرنات"
    },
    {
      "id": "19-0725",
      "nameFr": "أولاد تبان",
      "nameAr": "أولاد تبان",
      "dairaAr": "صالح باي"
    },
    {
      "id": "19-0724",
      "nameFr": "أولاد سي أحمد",
      "nameAr": "أولاد سي أحمد",
      "dairaAr": "عين ولمان"
    },
    {
      "id": "19-0723",
      "nameFr": "أولاد صابر",
      "nameAr": "أولاد صابر",
      "dairaAr": "قجال"
    },
    {
      "id": "19-0722",
      "nameFr": "أولاد عدوان",
      "nameAr": "أولاد عدوان",
      "dairaAr": "عين الكبيرة"
    },
    {
      "id": "19-0684",
      "nameFr": "أيت نوال مزادة",
      "nameAr": "أيت نوال مزادة",
      "dairaAr": "بوعنداس"
    },
    {
      "id": "19-0733",
      "nameFr": "التلة",
      "nameAr": "التلة",
      "dairaAr": "حمام السخنة"
    },
    {
      "id": "19-0714",
      "nameFr": "الحامة",
      "nameAr": "الحامة",
      "dairaAr": "صالح باي"
    },
    {
      "id": "19-0703",
      "nameFr": "الدهامشة",
      "nameAr": "الدهامشة",
      "dairaAr": "عين الكبيرة"
    },
    {
      "id": "19-0726",
      "nameFr": "الرصفة",
      "nameAr": "الرصفة",
      "dairaAr": "صالح باي"
    },
    {
      "id": "19-0732",
      "nameFr": "الطاية",
      "nameAr": "الطاية",
      "dairaAr": "حمام السخنة"
    },
    {
      "id": "19-0706",
      "nameFr": "العلمة",
      "nameAr": "العلمة",
      "dairaAr": "العلمة"
    },
    {
      "id": "19-0708",
      "nameFr": "الولجة",
      "nameAr": "الولجة",
      "dairaAr": "بئر العرش"
    },
    {
      "id": "19-0685",
      "nameFr": "ايت تيزي",
      "nameAr": "ايت تيزي",
      "dairaAr": "بوعنداس"
    },
    {
      "id": "19-0698",
      "nameFr": "بئر العرش",
      "nameAr": "بئر العرش",
      "dairaAr": "بئر العرش"
    },
    {
      "id": "19-0697",
      "nameFr": "بئر حدادة",
      "nameAr": "بئر حدادة",
      "dairaAr": "عين أزال"
    },
    {
      "id": "19-0687",
      "nameFr": "بابور",
      "nameAr": "بابور",
      "dairaAr": "بابور"
    },
    {
      "id": "19-0688",
      "nameFr": "بازر سكرة",
      "nameAr": "بازر سكرة",
      "dairaAr": "العلمة"
    },
    {
      "id": "19-0690",
      "nameFr": "بلاعة",
      "nameAr": "بلاعة",
      "dairaAr": "بئر العرش"
    },
    {
      "id": "19-0691",
      "nameFr": "بني شبانة",
      "nameAr": "بني شبانة",
      "dairaAr": "بني ورتيلان"
    },
    {
      "id": "19-0695",
      "nameFr": "بني عزيز",
      "nameAr": "بني عزيز",
      "dairaAr": "بني عزيز"
    },
    {
      "id": "19-0692",
      "nameFr": "بني فودة",
      "nameAr": "بني فودة",
      "dairaAr": "جميلة"
    },
    {
      "id": "19-0696",
      "nameFr": "بني موحلي",
      "nameAr": "بني موحلي",
      "dairaAr": "بني ورتيلان"
    },
    {
      "id": "19-0693",
      "nameFr": "بني ورتيلان",
      "nameAr": "بني ورتيلان",
      "dairaAr": "بني ورتيلان"
    },
    {
      "id": "19-0694",
      "nameFr": "بني وسين",
      "nameAr": "بني وسين",
      "dairaAr": "بوقاعة"
    },
    {
      "id": "19-0701",
      "nameFr": "بوسلام",
      "nameAr": "بوسلام",
      "dairaAr": "بوعنداس"
    },
    {
      "id": "19-0702",
      "nameFr": "بوطالب",
      "nameAr": "بوطالب",
      "dairaAr": "صالح باي"
    },
    {
      "id": "19-0699",
      "nameFr": "بوعنداس",
      "nameAr": "بوعنداس",
      "dairaAr": "بوعنداس"
    },
    {
      "id": "19-0700",
      "nameFr": "بوقاعة",
      "nameAr": "بوقاعة",
      "dairaAr": "بوقاعة"
    },
    {
      "id": "19-0689",
      "nameFr": "بيضاء برج",
      "nameAr": "بيضاء برج",
      "dairaAr": "عين أزال"
    },
    {
      "id": "19-0730",
      "nameFr": "تاشودة",
      "nameAr": "تاشودة",
      "dairaAr": "بئر العرش"
    },
    {
      "id": "19-0731",
      "nameFr": "تالة إيفاسن",
      "nameAr": "تالة إيفاسن",
      "dairaAr": "ماوكلان"
    },
    {
      "id": "19-0734",
      "nameFr": "تيزي نبشار",
      "nameAr": "تيزي نبشار",
      "dairaAr": "عموشة"
    },
    {
      "id": "19-0704",
      "nameFr": "جميلة",
      "nameAr": "جميلة",
      "dairaAr": "جميلة"
    },
    {
      "id": "19-0716",
      "nameFr": "حربيل",
      "nameAr": "حربيل",
      "dairaAr": "قنزات"
    },
    {
      "id": "19-0713",
      "nameFr": "حمام السخنة",
      "nameAr": "حمام السخنة",
      "dairaAr": "حمام السخنة"
    },
    {
      "id": "19-0715",
      "nameFr": "حمام قرقور",
      "nameAr": "حمام قرقور",
      "dairaAr": "حمام قرقور"
    },
    {
      "id": "19-0705",
      "nameFr": "ذراع قبيلة",
      "nameAr": "ذراع قبيلة",
      "dairaAr": "حمام قرقور"
    },
    {
      "id": "19-0728",
      "nameFr": "سرج الغول",
      "nameAr": "سرج الغول",
      "dairaAr": "بابور"
    },
    {
      "id": "19-0729",
      "nameFr": "سطيف",
      "nameAr": "سطيف",
      "dairaAr": "سطيف"
    },
    {
      "id": "19-0727",
      "nameFr": "صالح باي",
      "nameAr": "صالح باي",
      "dairaAr": "صالح باي"
    },
    {
      "id": "19-0686",
      "nameFr": "عموشة",
      "nameAr": "عموشة",
      "dairaAr": "عموشة"
    },
    {
      "id": "19-0676",
      "nameFr": "عين أرنات",
      "nameAr": "عين أرنات",
      "dairaAr": "عين أرنات"
    },
    {
      "id": "19-0677",
      "nameFr": "عين أزال",
      "nameAr": "عين أزال",
      "dairaAr": "عين أزال"
    },
    {
      "id": "19-0679",
      "nameFr": "عين الحجر",
      "nameAr": "عين الحجر",
      "dairaAr": "عين أزال"
    },
    {
      "id": "19-0682",
      "nameFr": "عين الروى",
      "nameAr": "عين الروى",
      "dairaAr": "بوقاعة"
    },
    {
      "id": "19-0683",
      "nameFr": "عين السبت",
      "nameAr": "عين السبت",
      "dairaAr": "بني عزيز"
    },
    {
      "id": "19-0678",
      "nameFr": "عين الكبيرة",
      "nameAr": "عين الكبيرة",
      "dairaAr": "عين الكبيرة"
    },
    {
      "id": "19-0675",
      "nameFr": "عين عباسة",
      "nameAr": "عين عباسة",
      "dairaAr": "عين أرنات"
    },
    {
      "id": "19-0681",
      "nameFr": "عين لقراج",
      "nameAr": "عين لقراج",
      "dairaAr": "بني ورتيلان"
    },
    {
      "id": "19-0680",
      "nameFr": "عين ولمان",
      "nameAr": "عين ولمان",
      "dairaAr": "عين ولمان"
    },
    {
      "id": "19-0712",
      "nameFr": "قجال",
      "nameAr": "قجال",
      "dairaAr": "قجال"
    },
    {
      "id": "19-0717",
      "nameFr": "قصر الابطال",
      "nameAr": "قصر الابطال",
      "dairaAr": "عين ولمان"
    },
    {
      "id": "19-0709",
      "nameFr": "قلال",
      "nameAr": "قلال",
      "dairaAr": "عين ولمان"
    },
    {
      "id": "19-0710",
      "nameFr": "قلتة زرقاء",
      "nameAr": "قلتة زرقاء",
      "dairaAr": "العلمة"
    },
    {
      "id": "19-0711",
      "nameFr": "قنزات",
      "nameAr": "قنزات",
      "dairaAr": "قنزات"
    },
    {
      "id": "19-0719",
      "nameFr": "ماوكلان",
      "nameAr": "ماوكلان",
      "dairaAr": "ماوكلان"
    },
    {
      "id": "19-0720",
      "nameFr": "مزلوق",
      "nameAr": "مزلوق",
      "dairaAr": "عين أرنات"
    },
    {
      "id": "19-0718",
      "nameFr": "معاوية",
      "nameAr": "معاوية",
      "dairaAr": "بني عزيز"
    },
    {
      "id": "19-0721",
      "nameFr": "واد البارد",
      "nameAr": "واد البارد",
      "dairaAr": "عموشة"
    }
  ],
  "20": [
    {
      "id": "20-0743",
      "nameFr": "أولاد إبراهيم",
      "nameAr": "أولاد إبراهيم",
      "dairaAr": "أولاد ابراهيم"
    },
    {
      "id": "20-0744",
      "nameFr": "أولاد خالد",
      "nameAr": "أولاد خالد",
      "dairaAr": "سيدي بوبكر"
    },
    {
      "id": "20-0739",
      "nameFr": "الحساسنة",
      "nameAr": "الحساسنة",
      "dairaAr": "الحساسنة"
    },
    {
      "id": "20-0741",
      "nameFr": "المعمورة",
      "nameAr": "المعمورة",
      "dairaAr": "الحساسنة"
    },
    {
      "id": "20-0749",
      "nameFr": "تيرسين",
      "nameAr": "تيرسين",
      "dairaAr": "أولاد ابراهيم"
    },
    {
      "id": "20-0738",
      "nameFr": "دوي ثابت",
      "nameAr": "دوي ثابت",
      "dairaAr": "يوب"
    },
    {
      "id": "20-0745",
      "nameFr": "سعيدة",
      "nameAr": "سعيدة",
      "dairaAr": "سعيدة"
    },
    {
      "id": "20-0746",
      "nameFr": "سيدي احمد",
      "nameAr": "سيدي احمد",
      "dairaAr": "عين الحجر"
    },
    {
      "id": "20-0748",
      "nameFr": "سيدي بوبكر",
      "nameAr": "سيدي بوبكر",
      "dairaAr": "سيدي بوبكر"
    },
    {
      "id": "20-0747",
      "nameFr": "سيدي عمر",
      "nameAr": "سيدي عمر",
      "dairaAr": "سيدي بوبكر"
    },
    {
      "id": "20-0735",
      "nameFr": "عين الحجر",
      "nameAr": "عين الحجر",
      "dairaAr": "عين الحجر"
    },
    {
      "id": "20-0736",
      "nameFr": "عين السخونة",
      "nameAr": "عين السخونة",
      "dairaAr": "الحساسنة"
    },
    {
      "id": "20-0737",
      "nameFr": "عين السلطان",
      "nameAr": "عين السلطان",
      "dairaAr": "أولاد ابراهيم"
    },
    {
      "id": "20-0742",
      "nameFr": "مولاي العربي",
      "nameAr": "مولاي العربي",
      "dairaAr": "عين الحجر"
    },
    {
      "id": "20-0740",
      "nameFr": "هونت",
      "nameAr": "هونت",
      "dairaAr": "سيدي بوبكر"
    },
    {
      "id": "20-0750",
      "nameFr": "يوب",
      "nameAr": "يوب",
      "dairaAr": "يوب"
    }
  ],
  "21": [
    {
      "id": "21-0781",
      "nameFr": "أم الطوب",
      "nameAr": "أم الطوب",
      "dairaAr": "أم الطوب"
    },
    {
      "id": "21-0780",
      "nameFr": "أولاد حبابة",
      "nameAr": "أولاد حبابة",
      "dairaAr": "الحروش"
    },
    {
      "id": "21-0779",
      "nameFr": "أولاد عطية",
      "nameAr": "أولاد عطية",
      "dairaAr": "أولاد عطية"
    },
    {
      "id": "21-0768",
      "nameFr": "الحدائق",
      "nameAr": "الحدائق",
      "dairaAr": "الحدائق"
    },
    {
      "id": "21-0766",
      "nameFr": "الحروش",
      "nameAr": "الحروش",
      "dairaAr": "الحروش"
    },
    {
      "id": "21-0788",
      "nameFr": "الزيتونة",
      "nameAr": "الزيتونة",
      "dairaAr": "الزيتونة"
    },
    {
      "id": "21-0771",
      "nameFr": "السبت",
      "nameAr": "السبت",
      "dairaAr": "عزابة"
    },
    {
      "id": "21-0763",
      "nameFr": "الشرايع",
      "nameAr": "الشرايع",
      "dairaAr": "القل"
    },
    {
      "id": "21-0767",
      "nameFr": "الغدير",
      "nameAr": "الغدير",
      "dairaAr": "عزابة"
    },
    {
      "id": "21-0764",
      "nameFr": "القل",
      "nameAr": "القل",
      "dairaAr": "القل"
    },
    {
      "id": "21-0775",
      "nameFr": "الكركرة",
      "nameAr": "الكركرة",
      "dairaAr": "تمالوس"
    },
    {
      "id": "21-0769",
      "nameFr": "المرسى",
      "nameAr": "المرسى",
      "dairaAr": "بن عزوز"
    },
    {
      "id": "21-0778",
      "nameFr": "الولجة بولبلوط",
      "nameAr": "الولجة بولبلوط",
      "dairaAr": "عين قشرة"
    },
    {
      "id": "21-0756",
      "nameFr": "بكوش لخضر",
      "nameAr": "بكوش لخضر",
      "dairaAr": "بن عزوز"
    },
    {
      "id": "21-0757",
      "nameFr": "بن عزوز",
      "nameAr": "بن عزوز",
      "dairaAr": "بن عزوز"
    },
    {
      "id": "21-0758",
      "nameFr": "بني بشير",
      "nameAr": "بني بشير",
      "dairaAr": "رمضان جمال"
    },
    {
      "id": "21-0760",
      "nameFr": "بني زيد",
      "nameAr": "بني زيد",
      "dairaAr": "القل"
    },
    {
      "id": "21-0759",
      "nameFr": "بني ولبان",
      "nameAr": "بني ولبان",
      "dairaAr": "سيدي مزغيش"
    },
    {
      "id": "21-0762",
      "nameFr": "بوشطاطة",
      "nameAr": "بوشطاطة",
      "dairaAr": "الحدائق"
    },
    {
      "id": "21-0761",
      "nameFr": "بين الويدان",
      "nameAr": "بين الويدان",
      "dairaAr": "تمالوس"
    },
    {
      "id": "21-0786",
      "nameFr": "تمالوس",
      "nameAr": "تمالوس",
      "dairaAr": "تمالوس"
    },
    {
      "id": "21-0765",
      "nameFr": "جندل سعدي محمد",
      "nameAr": "جندل سعدي محمد",
      "dairaAr": "عزابة"
    },
    {
      "id": "21-0773",
      "nameFr": "حمادي كرومة",
      "nameAr": "حمادي كرومة",
      "dairaAr": "سكيكدة"
    },
    {
      "id": "21-0776",
      "nameFr": "خناق مايو",
      "nameAr": "خناق مايو",
      "dairaAr": "أولاد عطية"
    },
    {
      "id": "21-0782",
      "nameFr": "رمضان جمال",
      "nameAr": "رمضان جمال",
      "dairaAr": "رمضان جمال"
    },
    {
      "id": "21-0787",
      "nameFr": "زردازة",
      "nameAr": "زردازة",
      "dairaAr": "الحروش"
    },
    {
      "id": "21-0785",
      "nameFr": "سكيكدة",
      "nameAr": "سكيكدة",
      "dairaAr": "سكيكدة"
    },
    {
      "id": "21-0784",
      "nameFr": "سيدي مزغيش",
      "nameAr": "سيدي مزغيش",
      "dairaAr": "سيدي مزغيش"
    },
    {
      "id": "21-0783",
      "nameFr": "صالح بو الشعور",
      "nameAr": "صالح بو الشعور",
      "dairaAr": "الحروش"
    },
    {
      "id": "21-0755",
      "nameFr": "عزابة",
      "nameAr": "عزابة",
      "dairaAr": "عزابة"
    },
    {
      "id": "21-0751",
      "nameFr": "عين بوزيان",
      "nameAr": "عين بوزيان",
      "dairaAr": "سيدي مزغيش"
    },
    {
      "id": "21-0754",
      "nameFr": "عين زويت",
      "nameAr": "عين زويت",
      "dairaAr": "الحدائق"
    },
    {
      "id": "21-0752",
      "nameFr": "عين شرشار",
      "nameAr": "عين شرشار",
      "dairaAr": "عزابة"
    },
    {
      "id": "21-0753",
      "nameFr": "عين قشرة",
      "nameAr": "عين قشرة",
      "dairaAr": "عين قشرة"
    },
    {
      "id": "21-0772",
      "nameFr": "فلفلة",
      "nameAr": "فلفلة",
      "dairaAr": "سكيكدة"
    },
    {
      "id": "21-0774",
      "nameFr": "قنواع",
      "nameAr": "قنواع",
      "dairaAr": "الزيتونة"
    },
    {
      "id": "21-0770",
      "nameFr": "مجاز الدشيش",
      "nameAr": "مجاز الدشيش",
      "dairaAr": "الحروش"
    },
    {
      "id": "21-0777",
      "nameFr": "وادي الزهور",
      "nameAr": "وادي الزهور",
      "dairaAr": "أولاد عطية"
    }
  ],
  "22": [
    {
      "id": "22-0804",
      "nameFr": "الحصيبة",
      "nameAr": "الحصيبة",
      "dairaAr": "مولاي سليسن"
    },
    {
      "id": "22-0820",
      "nameFr": "السهالة الثورة",
      "nameAr": "السهالة الثورة",
      "dairaAr": "تسالة"
    },
    {
      "id": "22-0803",
      "nameFr": "الضاية",
      "nameAr": "الضاية",
      "dairaAr": "تلاغ"
    },
    {
      "id": "22-0794",
      "nameFr": "العمارنة",
      "nameAr": "العمارنة",
      "dairaAr": "سيدي لحسن"
    },
    {
      "id": "22-0799",
      "nameFr": "بئر الحمام",
      "nameAr": "بئر الحمام",
      "dairaAr": "مرحوم"
    },
    {
      "id": "22-0795",
      "nameFr": "بضرابين المقراني",
      "nameAr": "بضرابين المقراني",
      "dairaAr": "بن باديس"
    },
    {
      "id": "22-0796",
      "nameFr": "بلعربي",
      "nameAr": "بلعربي",
      "dairaAr": "مصطفى بن ابراهيم"
    },
    {
      "id": "22-0797",
      "nameFr": "بن باديس",
      "nameAr": "بن باديس",
      "dairaAr": "بن باديس"
    },
    {
      "id": "22-0798",
      "nameFr": "بن عشيبة شلية",
      "nameAr": "بن عشيبة شلية",
      "dairaAr": "تنيرة"
    },
    {
      "id": "22-0800",
      "nameFr": "بوجبهة البرج",
      "nameAr": "بوجبهة البرج",
      "dairaAr": "سفيزف"
    },
    {
      "id": "22-0801",
      "nameFr": "بوخنفيس",
      "nameAr": "بوخنفيس",
      "dairaAr": "سيدي علي بن يوب"
    },
    {
      "id": "22-0833",
      "nameFr": "تاودموت",
      "nameAr": "تاودموت",
      "dairaAr": "مرين"
    },
    {
      "id": "22-0838",
      "nameFr": "تسالة",
      "nameAr": "تسالة",
      "dairaAr": "تسالة"
    },
    {
      "id": "22-0835",
      "nameFr": "تغاليمت",
      "nameAr": "تغاليمت",
      "dairaAr": "تلاغ"
    },
    {
      "id": "22-0834",
      "nameFr": "تفسور",
      "nameAr": "تفسور",
      "dairaAr": "مرين"
    },
    {
      "id": "22-0836",
      "nameFr": "تلاغ",
      "nameAr": "تلاغ",
      "dairaAr": "تلاغ"
    },
    {
      "id": "22-0839",
      "nameFr": "تلموني",
      "nameAr": "تلموني",
      "dairaAr": "مصطفى بن ابراهيم"
    },
    {
      "id": "22-0837",
      "nameFr": "تنيرة",
      "nameAr": "تنيرة",
      "dairaAr": "تنيرة"
    },
    {
      "id": "22-0805",
      "nameFr": "حاسي دحو",
      "nameAr": "حاسي دحو",
      "dairaAr": "تنيرة"
    },
    {
      "id": "22-0806",
      "nameFr": "حاسي زهانة",
      "nameAr": "حاسي زهانة",
      "dairaAr": "بن باديس"
    },
    {
      "id": "22-0818",
      "nameFr": "راس الماء",
      "nameAr": "راس الماء",
      "dairaAr": "راس الماء"
    },
    {
      "id": "22-0819",
      "nameFr": "رجم دموش",
      "nameAr": "رجم دموش",
      "dairaAr": "راس الماء"
    },
    {
      "id": "22-0840",
      "nameFr": "زروالة",
      "nameAr": "زروالة",
      "dairaAr": "مصطفى بن ابراهيم"
    },
    {
      "id": "22-0821",
      "nameFr": "سفيزف",
      "nameAr": "سفيزف",
      "dairaAr": "سفيزف"
    },
    {
      "id": "22-0825",
      "nameFr": "سيدي ابراهيم",
      "nameAr": "سيدي ابراهيم",
      "dairaAr": "عين البرد"
    },
    {
      "id": "22-0824",
      "nameFr": "سيدي بلعباس",
      "nameAr": "سيدي بلعباس",
      "dairaAr": "سيدي بلعباس"
    },
    {
      "id": "22-0828",
      "nameFr": "سيدي حمادوش",
      "nameAr": "سيدي حمادوش",
      "dairaAr": "عين البرد"
    },
    {
      "id": "22-0829",
      "nameFr": "سيدي خالد",
      "nameAr": "سيدي خالد",
      "dairaAr": "سيدي لحسن"
    },
    {
      "id": "22-0827",
      "nameFr": "سيدي دحو الزاير",
      "nameAr": "سيدي دحو الزاير",
      "dairaAr": "سيدي علي بوسيدي"
    },
    {
      "id": "22-0826",
      "nameFr": "سيدي شعيب",
      "nameAr": "سيدي شعيب",
      "dairaAr": "مرحوم"
    },
    {
      "id": "22-0822",
      "nameFr": "سيدي علي بن يوب",
      "nameAr": "سيدي علي بن يوب",
      "dairaAr": "سيدي علي بن يوب"
    },
    {
      "id": "22-0823",
      "nameFr": "سيدي علي بوسيدي",
      "nameAr": "سيدي علي بوسيدي",
      "dairaAr": "سيدي علي بوسيدي"
    },
    {
      "id": "22-0830",
      "nameFr": "سيدي لحسن",
      "nameAr": "سيدي لحسن",
      "dairaAr": "سيدي لحسن"
    },
    {
      "id": "22-0831",
      "nameFr": "سيدي يعقوب",
      "nameAr": "سيدي يعقوب",
      "dairaAr": "سيدي لحسن"
    },
    {
      "id": "22-0802",
      "nameFr": "شيطوان البلايلة",
      "nameAr": "شيطوان البلايلة",
      "dairaAr": "بن باديس"
    },
    {
      "id": "22-0832",
      "nameFr": "طابية",
      "nameAr": "طابية",
      "dairaAr": "سيدي علي بن يوب"
    },
    {
      "id": "22-0793",
      "nameFr": "عين أدن",
      "nameAr": "عين أدن",
      "dairaAr": "سفيزف"
    },
    {
      "id": "22-0789",
      "nameFr": "عين البرد",
      "nameAr": "عين البرد",
      "dairaAr": "عين البرد"
    },
    {
      "id": "22-0791",
      "nameFr": "عين الثريد",
      "nameAr": "عين الثريد",
      "dairaAr": "تسالة"
    },
    {
      "id": "22-0792",
      "nameFr": "عين تندمين",
      "nameAr": "عين تندمين",
      "dairaAr": "مولاي سليسن"
    },
    {
      "id": "22-0790",
      "nameFr": "عين قادة",
      "nameAr": "عين قادة",
      "dairaAr": "سيدي علي بوسيدي"
    },
    {
      "id": "22-0807",
      "nameFr": "لمطار",
      "nameAr": "لمطار",
      "dairaAr": "سيدي علي بوسيدي"
    },
    {
      "id": "22-0809",
      "nameFr": "مرحوم",
      "nameAr": "مرحوم",
      "dairaAr": "مرحوم"
    },
    {
      "id": "22-0811",
      "nameFr": "مرين",
      "nameAr": "مرين",
      "dairaAr": "مرين"
    },
    {
      "id": "22-0812",
      "nameFr": "مزاورو",
      "nameAr": "مزاورو",
      "dairaAr": "تلاغ"
    },
    {
      "id": "22-0810",
      "nameFr": "مسيد",
      "nameAr": "مسيد",
      "dairaAr": "سفيزف"
    },
    {
      "id": "22-0813",
      "nameFr": "مصطفى بن ابراهيم",
      "nameAr": "مصطفى بن ابراهيم",
      "dairaAr": "مصطفى بن ابراهيم"
    },
    {
      "id": "22-0808",
      "nameFr": "مكدرة",
      "nameAr": "مكدرة",
      "dairaAr": "عين البرد"
    },
    {
      "id": "22-0814",
      "nameFr": "مولاي سليسن",
      "nameAr": "مولاي سليسن",
      "dairaAr": "مولاي سليسن"
    },
    {
      "id": "22-0815",
      "nameFr": "وادي السبع",
      "nameAr": "وادي السبع",
      "dairaAr": "راس الماء"
    },
    {
      "id": "22-0817",
      "nameFr": "وادي تاوريرة",
      "nameAr": "وادي تاوريرة",
      "dairaAr": "مرين"
    },
    {
      "id": "22-0816",
      "nameFr": "وادي سفيون",
      "nameAr": "وادي سفيون",
      "dairaAr": "تنيرة"
    }
  ],
  "23": [
    {
      "id": "23-0846",
      "nameFr": "البوني",
      "nameAr": "البوني",
      "dairaAr": "البوني"
    },
    {
      "id": "23-0852",
      "nameFr": "التريعات",
      "nameAr": "التريعات",
      "dairaAr": "برحال"
    },
    {
      "id": "23-0848",
      "nameFr": "الحجار",
      "nameAr": "الحجار",
      "dairaAr": "الحجار"
    },
    {
      "id": "23-0845",
      "nameFr": "الشرفة",
      "nameAr": "الشرفة",
      "dairaAr": "عين الباردة"
    },
    {
      "id": "23-0847",
      "nameFr": "العلمة",
      "nameAr": "العلمة",
      "dairaAr": "عين الباردة"
    },
    {
      "id": "23-0843",
      "nameFr": "برحال",
      "nameAr": "برحال",
      "dairaAr": "برحال"
    },
    {
      "id": "23-0850",
      "nameFr": "سرايدي",
      "nameAr": "سرايدي",
      "dairaAr": "عنابة"
    },
    {
      "id": "23-0851",
      "nameFr": "سيدي عمار",
      "nameAr": "سيدي عمار",
      "dairaAr": "الحجار"
    },
    {
      "id": "23-0844",
      "nameFr": "شطايبي",
      "nameAr": "شطايبي",
      "dairaAr": "شطايبي"
    },
    {
      "id": "23-0842",
      "nameFr": "عنابة",
      "nameAr": "عنابة",
      "dairaAr": "عنابة"
    },
    {
      "id": "23-0841",
      "nameFr": "عين الباردة",
      "nameAr": "عين الباردة",
      "dairaAr": "عين الباردة"
    },
    {
      "id": "23-0849",
      "nameFr": "واد العنب",
      "nameAr": "واد العنب",
      "dairaAr": "برحال"
    }
  ],
  "24": [
    {
      "id": "24-0867",
      "nameFr": "الدهوارة",
      "nameAr": "الدهوارة",
      "dairaAr": "حمام النبايل"
    },
    {
      "id": "24-0884",
      "nameFr": "الركنية",
      "nameAr": "الركنية",
      "dairaAr": "حمام دباغ"
    },
    {
      "id": "24-0869",
      "nameFr": "الفجوج",
      "nameAr": "الفجوج",
      "dairaAr": "هيليوبوليس"
    },
    {
      "id": "24-0861",
      "nameFr": "برج صباط",
      "nameAr": "برج صباط",
      "dairaAr": "وادي الزناتي"
    },
    {
      "id": "24-0858",
      "nameFr": "بلخير",
      "nameAr": "بلخير",
      "dairaAr": "قلعة بوصبع"
    },
    {
      "id": "24-0859",
      "nameFr": "بن جراح",
      "nameAr": "بن جراح",
      "dairaAr": "قالمة"
    },
    {
      "id": "24-0860",
      "nameFr": "بني مزلين",
      "nameAr": "بني مزلين",
      "dairaAr": "قلعة بوصبع"
    },
    {
      "id": "24-0862",
      "nameFr": "بوحشانة",
      "nameAr": "بوحشانة",
      "dairaAr": "خزارة"
    },
    {
      "id": "24-0863",
      "nameFr": "بوحمدان",
      "nameAr": "بوحمدان",
      "dairaAr": "حمام دباغ"
    },
    {
      "id": "24-0865",
      "nameFr": "بوشقوف",
      "nameAr": "بوشقوف",
      "dairaAr": "بوشقوف"
    },
    {
      "id": "24-0864",
      "nameFr": "بوعاتي محمود",
      "nameAr": "بوعاتي محمود",
      "dairaAr": "هيليوبوليس"
    },
    {
      "id": "24-0866",
      "nameFr": "بومهرة أحمد",
      "nameAr": "بومهرة أحمد",
      "dairaAr": "قلعة بوصبع"
    },
    {
      "id": "24-0886",
      "nameFr": "تاملوكة",
      "nameAr": "تاملوكة",
      "dairaAr": "عين مخلوف"
    },
    {
      "id": "24-0868",
      "nameFr": "جبالة الخميسي",
      "nameAr": "جبالة الخميسي",
      "dairaAr": "قلعة بوصبع"
    },
    {
      "id": "24-0873",
      "nameFr": "حمام النبايل",
      "nameAr": "حمام النبايل",
      "dairaAr": "حمام النبايل"
    },
    {
      "id": "24-0872",
      "nameFr": "حمام دباغ",
      "nameAr": "حمام دباغ",
      "dairaAr": "حمام دباغ"
    },
    {
      "id": "24-0883",
      "nameFr": "رأس العقبة",
      "nameAr": "رأس العقبة",
      "dairaAr": "عين حساينية"
    },
    {
      "id": "24-0885",
      "nameFr": "سلاوة عنونة",
      "nameAr": "سلاوة عنونة",
      "dairaAr": "عين حساينية"
    },
    {
      "id": "24-0854",
      "nameFr": "عين العربي",
      "nameAr": "عين العربي",
      "dairaAr": "عين مخلوف"
    },
    {
      "id": "24-0853",
      "nameFr": "عين بن بيضاء",
      "nameAr": "عين بن بيضاء",
      "dairaAr": "بوشقوف"
    },
    {
      "id": "24-0856",
      "nameFr": "عين رقادة",
      "nameAr": "عين رقادة",
      "dairaAr": "وادي الزناتي"
    },
    {
      "id": "24-0857",
      "nameFr": "عين صندل",
      "nameAr": "عين صندل",
      "dairaAr": "خزارة"
    },
    {
      "id": "24-0855",
      "nameFr": "عين مخلوف",
      "nameAr": "عين مخلوف",
      "dairaAr": "عين مخلوف"
    },
    {
      "id": "24-0871",
      "nameFr": "قالمة",
      "nameAr": "قالمة",
      "dairaAr": "قالمة"
    },
    {
      "id": "24-0870",
      "nameFr": "قلعة بوصبع",
      "nameAr": "قلعة بوصبع",
      "dairaAr": "قلعة بوصبع"
    },
    {
      "id": "24-0876",
      "nameFr": "لخزارة",
      "nameAr": "لخزارة",
      "dairaAr": "خزارة"
    },
    {
      "id": "24-0878",
      "nameFr": "مجاز الصفاء",
      "nameAr": "مجاز الصفاء",
      "dairaAr": "بوشقوف"
    },
    {
      "id": "24-0877",
      "nameFr": "مجاز عمار",
      "nameAr": "مجاز عمار",
      "dairaAr": "عين حساينية"
    },
    {
      "id": "24-0875",
      "nameFr": "نشماية",
      "nameAr": "نشماية",
      "dairaAr": "قلعة بوصبع"
    },
    {
      "id": "24-0879",
      "nameFr": "هواري بومدين",
      "nameAr": "هواري بومدين",
      "dairaAr": "عين حساينية"
    },
    {
      "id": "24-0874",
      "nameFr": "هيليوبوليس",
      "nameAr": "هيليوبوليس",
      "dairaAr": "هيليوبوليس"
    },
    {
      "id": "24-0882",
      "nameFr": "وادي الزناتي",
      "nameAr": "وادي الزناتي",
      "dairaAr": "وادي الزناتي"
    },
    {
      "id": "24-0880",
      "nameFr": "وادي الشحم",
      "nameAr": "وادي الشحم",
      "dairaAr": "حمام النبايل"
    },
    {
      "id": "24-0881",
      "nameFr": "وادي فراغة",
      "nameAr": "وادي فراغة",
      "dairaAr": "بوشقوف"
    }
  ],
  "25": [
    {
      "id": "25-0889",
      "nameFr": "أبن باديس الهرية",
      "nameAr": "أبن باديس الهرية",
      "dairaAr": "عين عبيد"
    },
    {
      "id": "25-0897",
      "nameFr": "أولاد رحمون",
      "nameAr": "أولاد رحمون",
      "dairaAr": "الخروب"
    },
    {
      "id": "25-0895",
      "nameFr": "ابن زياد",
      "nameAr": "ابن زياد",
      "dairaAr": "ابن زياد"
    },
    {
      "id": "25-0893",
      "nameFr": "الخروب",
      "nameAr": "الخروب",
      "dairaAr": "الخروب"
    },
    {
      "id": "25-0890",
      "nameFr": "بني حميدان",
      "nameAr": "بني حميدان",
      "dairaAr": "زيغود يوسف"
    },
    {
      "id": "25-0896",
      "nameFr": "بوجريو مسعود",
      "nameAr": "بوجريو مسعود",
      "dairaAr": "ابن زياد"
    },
    {
      "id": "25-0894",
      "nameFr": "حامة بوزيان",
      "nameAr": "حامة بوزيان",
      "dairaAr": "حامة بوزيان"
    },
    {
      "id": "25-0892",
      "nameFr": "ديدوش مراد",
      "nameAr": "ديدوش مراد",
      "dairaAr": "حامة بوزيان"
    },
    {
      "id": "25-0898",
      "nameFr": "زيغود يوسف",
      "nameAr": "زيغود يوسف",
      "dairaAr": "زيغود يوسف"
    },
    {
      "id": "25-0888",
      "nameFr": "عين السمارة",
      "nameAr": "عين السمارة",
      "dairaAr": "الخروب"
    },
    {
      "id": "25-0887",
      "nameFr": "عين عبيد",
      "nameAr": "عين عبيد",
      "dairaAr": "عين عبيد"
    },
    {
      "id": "25-0891",
      "nameFr": "قسنطينة",
      "nameAr": "قسنطينة",
      "dairaAr": "قسنطينة"
    }
  ],
  "26": [
    {
      "id": "26-0940",
      "nameFr": "أولاد إبراهيم",
      "nameAr": "أولاد إبراهيم",
      "dairaAr": "العمارية"
    },
    {
      "id": "26-0939",
      "nameFr": "أولاد بوعشرة",
      "nameAr": "أولاد بوعشرة",
      "dairaAr": "سي المحجوب"
    },
    {
      "id": "26-0941",
      "nameFr": "أولاد دايد",
      "nameAr": "أولاد دايد",
      "dairaAr": "البرواقية"
    },
    {
      "id": "26-0906",
      "nameFr": "البرواقية",
      "nameAr": "البرواقية",
      "dairaAr": "البرواقية"
    },
    {
      "id": "26-0922",
      "nameFr": "الحمدانية",
      "nameAr": "الحمدانية",
      "dairaAr": "وزرة"
    },
    {
      "id": "26-0923",
      "nameFr": "الحوضان",
      "nameAr": "الحوضان",
      "dairaAr": "تابلاط"
    },
    {
      "id": "26-0946",
      "nameFr": "الربعية",
      "nameAr": "الربعية",
      "dairaAr": "البرواقية"
    },
    {
      "id": "26-0962",
      "nameFr": "الزبيرية",
      "nameAr": "الزبيرية",
      "dairaAr": "سغوان"
    },
    {
      "id": "26-0956",
      "nameFr": "السواقي",
      "nameAr": "السواقي",
      "dairaAr": "السواقي"
    },
    {
      "id": "26-0920",
      "nameFr": "العزيزية",
      "nameAr": "العزيزية",
      "dairaAr": "العزيزية"
    },
    {
      "id": "26-0924",
      "nameFr": "العمارية",
      "nameAr": "العمارية",
      "dairaAr": "العمارية"
    },
    {
      "id": "26-0901",
      "nameFr": "العيساوية",
      "nameAr": "العيساوية",
      "dairaAr": "تابلاط"
    },
    {
      "id": "26-0921",
      "nameFr": "القلب الكبير",
      "nameAr": "القلب الكبير",
      "dairaAr": "القلب الكبير"
    },
    {
      "id": "26-0931",
      "nameFr": "المدية",
      "nameAr": "المدية",
      "dairaAr": "المدية"
    },
    {
      "id": "26-0907",
      "nameFr": "بئر بن عابد",
      "nameAr": "بئر بن عابد",
      "dairaAr": "القلب الكبير"
    },
    {
      "id": "26-0903",
      "nameFr": "بعطة",
      "nameAr": "بعطة",
      "dairaAr": "العمارية"
    },
    {
      "id": "26-0904",
      "nameFr": "بن شكاو",
      "nameAr": "بن شكاو",
      "dairaAr": "وزرة"
    },
    {
      "id": "26-0905",
      "nameFr": "بني سليمان",
      "nameAr": "بني سليمان",
      "dairaAr": "بني سليمان"
    },
    {
      "id": "26-0913",
      "nameFr": "بوسكن",
      "nameAr": "بوسكن",
      "dairaAr": "بني سليمان"
    },
    {
      "id": "26-0911",
      "nameFr": "بوشراحيل",
      "nameAr": "بوشراحيل",
      "dairaAr": "سيدي نعمان"
    },
    {
      "id": "26-0910",
      "nameFr": "بوعيشون",
      "nameAr": "بوعيشون",
      "dairaAr": "سي المحجوب"
    },
    {
      "id": "26-0957",
      "nameFr": "تابلاط",
      "nameAr": "تابلاط",
      "dairaAr": "تابلاط"
    },
    {
      "id": "26-0959",
      "nameFr": "تمسقيدة",
      "nameAr": "تمسقيدة",
      "dairaAr": "المدية"
    },
    {
      "id": "26-0960",
      "nameFr": "تيزي مهدي",
      "nameAr": "تيزي مهدي",
      "dairaAr": "وزرة"
    },
    {
      "id": "26-0961",
      "nameFr": "ثلاث دوائر",
      "nameAr": "ثلاث دوائر",
      "dairaAr": "سغوان"
    },
    {
      "id": "26-0918",
      "nameFr": "جواب",
      "nameAr": "جواب",
      "dairaAr": "السواقي"
    },
    {
      "id": "26-0926",
      "nameFr": "حناشة",
      "nameAr": "حناشة",
      "dairaAr": "عوامري"
    },
    {
      "id": "26-0928",
      "nameFr": "خمس جوامع",
      "nameAr": "خمس جوامع",
      "dairaAr": "سيدي نعمان"
    },
    {
      "id": "26-0919",
      "nameFr": "ذراع السمار",
      "nameAr": "ذراع السمار",
      "dairaAr": "المدية"
    },
    {
      "id": "26-0948",
      "nameFr": "سدراية",
      "nameAr": "سدراية",
      "dairaAr": "القلب الكبير"
    },
    {
      "id": "26-0949",
      "nameFr": "سغوان",
      "nameAr": "سغوان",
      "dairaAr": "سغوان"
    },
    {
      "id": "26-0950",
      "nameFr": "سي المحجوب",
      "nameAr": "سي المحجوب",
      "dairaAr": "سي المحجوب"
    },
    {
      "id": "26-0953",
      "nameFr": "سيدي الربيع",
      "nameAr": "سيدي الربيع",
      "dairaAr": "بني سليمان"
    },
    {
      "id": "26-0954",
      "nameFr": "سيدي زهار",
      "nameAr": "سيدي زهار",
      "dairaAr": "السواقي"
    },
    {
      "id": "26-0955",
      "nameFr": "سيدي زيان",
      "nameAr": "سيدي زيان",
      "dairaAr": "السواقي"
    },
    {
      "id": "26-0952",
      "nameFr": "سيدي نعمان",
      "nameAr": "سيدي نعمان",
      "dairaAr": "سيدي نعمان"
    },
    {
      "id": "26-0936",
      "nameFr": "عوامري",
      "nameAr": "عوامري",
      "dairaAr": "عوامري"
    },
    {
      "id": "26-0932",
      "nameFr": "مجبر",
      "nameAr": "مجبر",
      "dairaAr": "سغوان"
    },
    {
      "id": "26-0933",
      "nameFr": "مزغنة",
      "nameAr": "مزغنة",
      "dairaAr": "تابلاط"
    },
    {
      "id": "26-0930",
      "nameFr": "مغراوة",
      "nameAr": "مغراوة",
      "dairaAr": "العزيزية"
    },
    {
      "id": "26-0935",
      "nameFr": "ميهوب",
      "nameAr": "ميهوب",
      "dairaAr": "العزيزية"
    },
    {
      "id": "26-0937",
      "nameFr": "وادي حربيل",
      "nameAr": "وادي حربيل",
      "dairaAr": "عوامري"
    },
    {
      "id": "26-0945",
      "nameFr": "وزرة",
      "nameAr": "وزرة",
      "dairaAr": "وزرة"
    }
  ],
  "27": [
    {
      "id": "27-0982",
      "nameFr": "أولاد بوغالم",
      "nameAr": "أولاد بوغالم",
      "dairaAr": "عشعاشة"
    },
    {
      "id": "27-0983",
      "nameFr": "أولاد مع الله",
      "nameAr": "أولاد مع الله",
      "dairaAr": "سيدي علي"
    },
    {
      "id": "27-0973",
      "nameFr": "الحسيان (بني ياحي",
      "nameAr": "الحسيان (بني ياحي",
      "dairaAr": "عين نويسي"
    },
    {
      "id": "27-0990",
      "nameFr": "السوافلية",
      "nameAr": "السوافلية",
      "dairaAr": "بوقيراط"
    },
    {
      "id": "27-0994",
      "nameFr": "الطواهرية",
      "nameAr": "الطواهرية",
      "dairaAr": "ماسرة"
    },
    {
      "id": "27-0968",
      "nameFr": "بن عبد المالك رمضان",
      "nameAr": "بن عبد المالك رمضان",
      "dairaAr": "سيدي لخضر"
    },
    {
      "id": "27-0969",
      "nameFr": "بوقيراط",
      "nameAr": "بوقيراط",
      "dairaAr": "بوقيراط"
    },
    {
      "id": "27-0993",
      "nameFr": "تزقايت",
      "nameAr": "تزقايت",
      "dairaAr": "سيدي علي"
    },
    {
      "id": "27-0972",
      "nameFr": "حاسي ماماش",
      "nameAr": "حاسي ماماش",
      "dairaAr": "حاسي ماماش"
    },
    {
      "id": "27-0971",
      "nameFr": "حجاج",
      "nameAr": "حجاج",
      "dairaAr": "سيدي لخضر"
    },
    {
      "id": "27-0974",
      "nameFr": "خضرة",
      "nameAr": "خضرة",
      "dairaAr": "عشعاشة"
    },
    {
      "id": "27-0975",
      "nameFr": "خير الدين",
      "nameAr": "خير الدين",
      "dairaAr": "خير الدين"
    },
    {
      "id": "27-0992",
      "nameFr": "ستيدية",
      "nameAr": "ستيدية",
      "dairaAr": "حاسي ماماش"
    },
    {
      "id": "27-0991",
      "nameFr": "سور",
      "nameAr": "سور",
      "dairaAr": "عين تادلس"
    },
    {
      "id": "27-0987",
      "nameFr": "سيدي بلعطار",
      "nameAr": "سيدي بلعطار",
      "dairaAr": "عين تادلس"
    },
    {
      "id": "27-0986",
      "nameFr": "سيدي علي",
      "nameAr": "سيدي علي",
      "dairaAr": "سيدي علي"
    },
    {
      "id": "27-0988",
      "nameFr": "سيدي لخضر",
      "nameAr": "سيدي لخضر",
      "dairaAr": "سيدي لخضر"
    },
    {
      "id": "27-0989",
      "nameFr": "سيرات",
      "nameAr": "سيرات",
      "dairaAr": "بوقيراط"
    },
    {
      "id": "27-0984",
      "nameFr": "صفصاف",
      "nameAr": "صفصاف",
      "dairaAr": "بوقيراط"
    },
    {
      "id": "27-0985",
      "nameFr": "صيادة",
      "nameAr": "صيادة",
      "dairaAr": "خير الدين"
    },
    {
      "id": "27-0963",
      "nameFr": "عشعاشة",
      "nameAr": "عشعاشة",
      "dairaAr": "عشعاشة"
    },
    {
      "id": "27-0964",
      "nameFr": "عين بودينار",
      "nameAr": "عين بودينار",
      "dairaAr": "خير الدين"
    },
    {
      "id": "27-0967",
      "nameFr": "عين تادلس",
      "nameAr": "عين تادلس",
      "dairaAr": "عين تادلس"
    },
    {
      "id": "27-0966",
      "nameFr": "عين سيدي الشريف",
      "nameAr": "عين سيدي الشريف",
      "dairaAr": "ماسرة"
    },
    {
      "id": "27-0965",
      "nameFr": "عين نويسي",
      "nameAr": "عين نويسي",
      "dairaAr": "عين نويسي"
    },
    {
      "id": "27-0970",
      "nameFr": "فرناقة",
      "nameAr": "فرناقة",
      "dairaAr": "عين نويسي"
    },
    {
      "id": "27-0978",
      "nameFr": "ماسرة",
      "nameAr": "ماسرة",
      "dairaAr": "ماسرة"
    },
    {
      "id": "27-0977",
      "nameFr": "مزغران",
      "nameAr": "مزغران",
      "dairaAr": "حاسي ماماش"
    },
    {
      "id": "27-0979",
      "nameFr": "مستغانم",
      "nameAr": "مستغانم",
      "dairaAr": "مستغانم"
    },
    {
      "id": "27-0976",
      "nameFr": "منصورة",
      "nameAr": "منصورة",
      "dairaAr": "ماسرة"
    },
    {
      "id": "27-0980",
      "nameFr": "نكمارية",
      "nameAr": "نكمارية",
      "dairaAr": "عشعاشة"
    },
    {
      "id": "27-0981",
      "nameFr": "وادي الخير",
      "nameAr": "وادي الخير",
      "dairaAr": "عين تادلس"
    }
  ],
  "28": [
    {
      "id": "28-1027",
      "nameFr": "أولاد دراج",
      "nameAr": "أولاد دراج",
      "dairaAr": "أولاد دراج"
    },
    {
      "id": "28-1026",
      "nameFr": "أولاد عدي لقبالة",
      "nameAr": "أولاد عدي لقبالة",
      "dairaAr": "أولاد دراج"
    },
    {
      "id": "28-1028",
      "nameFr": "أولاد ماضي",
      "nameAr": "أولاد ماضي",
      "dairaAr": "شلال"
    },
    {
      "id": "28-1029",
      "nameFr": "أولاد منصور",
      "nameAr": "أولاد منصور",
      "dairaAr": "حمام الضلعة"
    },
    {
      "id": "28-1038",
      "nameFr": "السوامع",
      "nameAr": "السوامع",
      "dairaAr": "أولاد دراج"
    },
    {
      "id": "28-1023",
      "nameFr": "المسيلة",
      "nameAr": "المسيلة",
      "dairaAr": "المسيلة"
    },
    {
      "id": "28-1024",
      "nameFr": "المطارفة",
      "nameAr": "المطارفة",
      "dairaAr": "أولاد دراج"
    },
    {
      "id": "28-1016",
      "nameFr": "المعاضيد",
      "nameAr": "المعاضيد",
      "dairaAr": "أولاد دراج"
    },
    {
      "id": "28-1004",
      "nameFr": "برهوم",
      "nameAr": "برهوم",
      "dairaAr": "مقرة"
    },
    {
      "id": "28-1000",
      "nameFr": "بلعايبة",
      "nameAr": "بلعايبة",
      "dairaAr": "مقرة"
    },
    {
      "id": "28-1002",
      "nameFr": "بني يلمان",
      "nameAr": "بني يلمان",
      "dairaAr": "سيدي عيسى"
    },
    {
      "id": "28-1007",
      "nameFr": "بوطي السايح",
      "nameAr": "بوطي السايح",
      "dairaAr": "سيدي عيسى"
    },
    {
      "id": "28-1040",
      "nameFr": "تارمونت",
      "nameAr": "تارمونت",
      "dairaAr": "حمام الضلعة"
    },
    {
      "id": "28-1013",
      "nameFr": "حمام الضلعة",
      "nameAr": "حمام الضلعة",
      "dairaAr": "حمام الضلعة"
    },
    {
      "id": "28-1014",
      "nameFr": "خطوطي سد الجير",
      "nameAr": "خطوطي سد الجير",
      "dairaAr": "شلال"
    },
    {
      "id": "28-1009",
      "nameFr": "دهاهنة",
      "nameAr": "دهاهنة",
      "dairaAr": "مقرة"
    },
    {
      "id": "28-1033",
      "nameFr": "سيدي عيسى",
      "nameAr": "سيدي عيسى",
      "dairaAr": "سيدي عيسى"
    },
    {
      "id": "28-1035",
      "nameFr": "سيدي هجرس",
      "nameAr": "سيدي هجرس",
      "dairaAr": "عين الحجل"
    },
    {
      "id": "28-1008",
      "nameFr": "شلال",
      "nameAr": "شلال",
      "dairaAr": "شلال"
    },
    {
      "id": "28-0995",
      "nameFr": "عين الحجل",
      "nameAr": "عين الحجل",
      "dairaAr": "عين الحجل"
    },
    {
      "id": "28-0998",
      "nameFr": "عين الخضراء",
      "nameAr": "عين الخضراء",
      "dairaAr": "مقرة"
    },
    {
      "id": "28-1017",
      "nameFr": "معاريف",
      "nameAr": "معاريف",
      "dairaAr": "شلال"
    },
    {
      "id": "28-1018",
      "nameFr": "مقرة",
      "nameAr": "مقرة",
      "dairaAr": "مقرة"
    },
    {
      "id": "28-1025",
      "nameFr": "ونوغة",
      "nameAr": "ونوغة",
      "dairaAr": "حمام الضلعة"
    }
  ],
  "29": [
    {
      "id": "29-1052",
      "nameFr": "البرج",
      "nameAr": "البرج",
      "dairaAr": "البرج"
    },
    {
      "id": "29-1056",
      "nameFr": "الحشم",
      "nameAr": "الحشم",
      "dairaAr": "الحشم"
    },
    {
      "id": "29-1079",
      "nameFr": "السهايلية",
      "nameAr": "السهايلية",
      "dairaAr": "تيغنيف"
    },
    {
      "id": "29-1051",
      "nameFr": "الشرفاء",
      "nameAr": "الشرفاء",
      "dairaAr": "سيق"
    },
    {
      "id": "29-1046",
      "nameFr": "العلايمية",
      "nameAr": "العلايمية",
      "dairaAr": "عقاز"
    },
    {
      "id": "29-1054",
      "nameFr": "الغمري",
      "nameAr": "الغمري",
      "dairaAr": "المحمدية"
    },
    {
      "id": "29-1057",
      "nameFr": "القرط",
      "nameAr": "القرط",
      "dairaAr": "تيزي"
    },
    {
      "id": "29-1055",
      "nameFr": "القطنة",
      "nameAr": "القطنة",
      "dairaAr": "بوحنيفية"
    },
    {
      "id": "29-1053",
      "nameFr": "القعدة",
      "nameAr": "القعدة",
      "dairaAr": "زهانة"
    },
    {
      "id": "29-1058",
      "nameFr": "المأمونية",
      "nameAr": "المأمونية",
      "dairaAr": "عين فارس"
    },
    {
      "id": "29-1072",
      "nameFr": "المحمدية",
      "nameAr": "المحمدية",
      "dairaAr": "المحمدية"
    },
    {
      "id": "29-1070",
      "nameFr": "المطمور",
      "nameAr": "المطمور",
      "dairaAr": "غريس"
    },
    {
      "id": "29-1059",
      "nameFr": "المنور",
      "nameAr": "المنور",
      "dairaAr": "البرج"
    },
    {
      "id": "29-1048",
      "nameFr": "بنيان",
      "nameAr": "بنيان",
      "dairaAr": "عوف"
    },
    {
      "id": "29-1050",
      "nameFr": "بوحنيفية",
      "nameAr": "بوحنيفية",
      "dairaAr": "بوحنيفية"
    },
    {
      "id": "29-1049",
      "nameFr": "بوهني",
      "nameAr": "بوهني",
      "dairaAr": "سيق"
    },
    {
      "id": "29-1086",
      "nameFr": "تيزي",
      "nameAr": "تيزي",
      "dairaAr": "تيزي"
    },
    {
      "id": "29-1085",
      "nameFr": "تيغنيف",
      "nameAr": "تيغنيف",
      "dairaAr": "تيغنيف"
    },
    {
      "id": "29-1065",
      "nameFr": "حسين",
      "nameAr": "حسين",
      "dairaAr": "بوحنيفية"
    },
    {
      "id": "29-1066",
      "nameFr": "خلوية",
      "nameAr": "خلوية",
      "dairaAr": "البرج"
    },
    {
      "id": "29-1077",
      "nameFr": "رأس عين عميروش",
      "nameAr": "رأس عين عميروش",
      "dairaAr": "عقاز"
    },
    {
      "id": "29-1088",
      "nameFr": "زلامطة",
      "nameAr": "زلامطة",
      "dairaAr": "الحشم"
    },
    {
      "id": "29-1087",
      "nameFr": "زهانة",
      "nameAr": "زهانة",
      "dairaAr": "زهانة"
    },
    {
      "id": "29-1078",
      "nameFr": "سجرارة",
      "nameAr": "سجرارة",
      "dairaAr": "المحمدية"
    },
    {
      "id": "29-1082",
      "nameFr": "سيدي بوسعيد",
      "nameAr": "سيدي بوسعيد",
      "dairaAr": "غريس"
    },
    {
      "id": "29-1080",
      "nameFr": "سيدي عبد الجبار",
      "nameAr": "سيدي عبد الجبار",
      "dairaAr": "وادي الأبطال"
    },
    {
      "id": "29-1081",
      "nameFr": "سيدي عبد المومن",
      "nameAr": "سيدي عبد المومن",
      "dairaAr": "المحمدية"
    },
    {
      "id": "29-1083",
      "nameFr": "سيدي قادة",
      "nameAr": "سيدي قادة",
      "dairaAr": "تيغنيف"
    },
    {
      "id": "29-1084",
      "nameFr": "سيق",
      "nameAr": "سيق",
      "dairaAr": "سيق"
    },
    {
      "id": "29-1074",
      "nameFr": "عقاز",
      "nameAr": "عقاز",
      "dairaAr": "عقاز"
    },
    {
      "id": "29-1047",
      "nameFr": "عوف",
      "nameAr": "عوف",
      "dairaAr": "عوف"
    },
    {
      "id": "29-1045",
      "nameFr": "عين أفرص",
      "nameAr": "عين أفرص",
      "dairaAr": "عين فكان"
    },
    {
      "id": "29-1042",
      "nameFr": "عين فارس",
      "nameAr": "عين فارس",
      "dairaAr": "عين فارس"
    },
    {
      "id": "29-1044",
      "nameFr": "عين فراح",
      "nameAr": "عين فراح",
      "dairaAr": "وادي الأبطال"
    },
    {
      "id": "29-1043",
      "nameFr": "عين فكان",
      "nameAr": "عين فكان",
      "dairaAr": "عين فكان"
    },
    {
      "id": "29-1062",
      "nameFr": "غروس",
      "nameAr": "غروس",
      "dairaAr": "عوف"
    },
    {
      "id": "29-1063",
      "nameFr": "غريس",
      "nameAr": "غريس",
      "dairaAr": "غريس"
    },
    {
      "id": "29-1060",
      "nameFr": "فراقيق",
      "nameAr": "فراقيق",
      "dairaAr": "المحمدية"
    },
    {
      "id": "29-1061",
      "nameFr": "فروحة",
      "nameAr": "فروحة",
      "dairaAr": "تيزي"
    },
    {
      "id": "29-1064",
      "nameFr": "قرجوم",
      "nameAr": "قرجوم",
      "dairaAr": "وادي التاغية"
    },
    {
      "id": "29-1067",
      "nameFr": "ماقضة",
      "nameAr": "ماقضة",
      "dairaAr": "غريس"
    },
    {
      "id": "29-1068",
      "nameFr": "ماوسة",
      "nameAr": "ماوسة",
      "dairaAr": "غريس"
    },
    {
      "id": "29-1069",
      "nameFr": "معسكر",
      "nameAr": "معسكر",
      "dairaAr": "معسكر"
    },
    {
      "id": "29-1071",
      "nameFr": "مقطع الدوز",
      "nameAr": "مقطع الدوز",
      "dairaAr": "المحمدية"
    },
    {
      "id": "29-1073",
      "nameFr": "نسمط",
      "nameAr": "نسمط",
      "dairaAr": "الحشم"
    },
    {
      "id": "29-1075",
      "nameFr": "وادي الأبطال",
      "nameAr": "وادي الأبطال",
      "dairaAr": "وادي الأبطال"
    },
    {
      "id": "29-1076",
      "nameFr": "وادي التاغية",
      "nameAr": "وادي التاغية",
      "dairaAr": "وادي التاغية"
    }
  ],
  "30": [
    {
      "id": "30-1093",
      "nameFr": "البرمة",
      "nameAr": "البرمة",
      "dairaAr": "البرمة"
    },
    {
      "id": "30-1102",
      "nameFr": "الرويسات",
      "nameAr": "الرويسات",
      "dairaAr": "ورقلة"
    },
    {
      "id": "30-1100",
      "nameFr": "انقوسة",
      "nameAr": "انقوسة",
      "dairaAr": "انقوسة"
    },
    {
      "id": "30-1095",
      "nameFr": "حاسي بن عبد الله",
      "nameAr": "حاسي بن عبد الله",
      "dairaAr": "سيدي خويلد"
    },
    {
      "id": "30-1096",
      "nameFr": "حاسي مسعود",
      "nameAr": "حاسي مسعود",
      "dairaAr": "حاسي مسعود"
    },
    {
      "id": "30-1103",
      "nameFr": "سيدي خويلد",
      "nameAr": "سيدي خويلد",
      "dairaAr": "سيدي خويلد"
    },
    {
      "id": "30-1089",
      "nameFr": "عين البيضاء",
      "nameAr": "عين البيضاء",
      "dairaAr": "سيدي خويلد"
    },
    {
      "id": "30-1101",
      "nameFr": "ورقلة",
      "nameAr": "ورقلة",
      "dairaAr": "ورقلة"
    }
  ],
  "31": [
    {
      "id": "31-1113",
      "nameFr": "أرزيو",
      "nameAr": "أرزيو",
      "dairaAr": "أرزيو"
    },
    {
      "id": "31-1121",
      "nameFr": "البراية",
      "nameAr": "البراية",
      "dairaAr": "وادي تليلات"
    },
    {
      "id": "31-1123",
      "nameFr": "السانية",
      "nameAr": "السانية",
      "dairaAr": "السانية"
    },
    {
      "id": "31-1120",
      "nameFr": "العنصر",
      "nameAr": "العنصر",
      "dairaAr": "عين الترك"
    },
    {
      "id": "31-1122",
      "nameFr": "الكرمة",
      "nameAr": "الكرمة",
      "dairaAr": "السانية"
    },
    {
      "id": "31-1129",
      "nameFr": "المرسى الكبير",
      "nameAr": "المرسى الكبير",
      "dairaAr": "عين الترك"
    },
    {
      "id": "31-1116",
      "nameFr": "بئر الجير",
      "nameAr": "بئر الجير",
      "dairaAr": "بئر الجير"
    },
    {
      "id": "31-1115",
      "nameFr": "بطيوة",
      "nameAr": "بطيوة",
      "dairaAr": "بطيوة"
    },
    {
      "id": "31-1114",
      "nameFr": "بن فريحة",
      "nameAr": "بن فريحة",
      "dairaAr": "قديل"
    },
    {
      "id": "31-1119",
      "nameFr": "بوتليليس",
      "nameAr": "بوتليليس",
      "dairaAr": "بوتليليس"
    },
    {
      "id": "31-1118",
      "nameFr": "بوسفر",
      "nameAr": "بوسفر",
      "dairaAr": "عين الترك"
    },
    {
      "id": "31-1117",
      "nameFr": "بوفاتيس",
      "nameAr": "بوفاتيس",
      "dairaAr": "وادي تليلات"
    },
    {
      "id": "31-1125",
      "nameFr": "حاسي بن عقبة",
      "nameAr": "حاسي بن عقبة",
      "dairaAr": "بئر الجير"
    },
    {
      "id": "31-1126",
      "nameFr": "حاسي بونيف",
      "nameAr": "حاسي بونيف",
      "dairaAr": "بئر الجير"
    },
    {
      "id": "31-1127",
      "nameFr": "حاسي مفسوخ",
      "nameAr": "حاسي مفسوخ",
      "dairaAr": "قديل"
    },
    {
      "id": "31-1134",
      "nameFr": "سيدي الشحمي",
      "nameAr": "سيدي الشحمي",
      "dairaAr": "السانية"
    },
    {
      "id": "31-1133",
      "nameFr": "سيدي بن يبقى",
      "nameAr": "سيدي بن يبقى",
      "dairaAr": "أرزيو"
    },
    {
      "id": "31-1135",
      "nameFr": "طفراوي",
      "nameAr": "طفراوي",
      "dairaAr": "وادي تليلات"
    },
    {
      "id": "31-1110",
      "nameFr": "عين البية",
      "nameAr": "عين البية",
      "dairaAr": "بطيوة"
    },
    {
      "id": "31-1112",
      "nameFr": "عين الترك",
      "nameAr": "عين الترك",
      "dairaAr": "عين الترك"
    },
    {
      "id": "31-1111",
      "nameFr": "عين الكرمة",
      "nameAr": "عين الكرمة",
      "dairaAr": "بوتليليس"
    },
    {
      "id": "31-1124",
      "nameFr": "قديل",
      "nameAr": "قديل",
      "dairaAr": "قديل"
    },
    {
      "id": "31-1128",
      "nameFr": "مرسى الحجاج",
      "nameAr": "مرسى الحجاج",
      "dairaAr": "بطيوة"
    },
    {
      "id": "31-1130",
      "nameFr": "مسرغين",
      "nameAr": "مسرغين",
      "dairaAr": "بوتليليس"
    },
    {
      "id": "31-1132",
      "nameFr": "وادي تليلات",
      "nameAr": "وادي تليلات",
      "dairaAr": "وادي تليلات"
    },
    {
      "id": "31-1131",
      "nameFr": "وهران",
      "nameAr": "وهران",
      "dairaAr": "وهران"
    }
  ],
  "32": [
    {
      "id": "32-1144",
      "nameFr": "البيض",
      "nameAr": "البيض",
      "dairaAr": "البيض"
    },
    {
      "id": "32-1147",
      "nameFr": "الخيثر",
      "nameAr": "الخيثر",
      "dairaAr": "بوقطب"
    },
    {
      "id": "32-1142",
      "nameFr": "الشقيق",
      "nameAr": "الشقيق",
      "dairaAr": "رقاصة"
    },
    {
      "id": "32-1149",
      "nameFr": "الغاسول",
      "nameAr": "الغاسول",
      "dairaAr": "بريزينة"
    },
    {
      "id": "32-1150",
      "nameFr": "الكاف الأحمر",
      "nameAr": "الكاف الأحمر",
      "dairaAr": "رقاصة"
    },
    {
      "id": "32-1141",
      "nameFr": "بريزينة",
      "nameAr": "بريزينة",
      "dairaAr": "بريزينة"
    },
    {
      "id": "32-1138",
      "nameFr": "بوعلام",
      "nameAr": "بوعلام",
      "dairaAr": "بوعلام"
    },
    {
      "id": "32-1139",
      "nameFr": "بوقطب",
      "nameAr": "بوقطب",
      "dairaAr": "بوقطب"
    },
    {
      "id": "32-1157",
      "nameFr": "توسمولين",
      "nameAr": "توسمولين",
      "dairaAr": "بوقطب"
    },
    {
      "id": "32-1152",
      "nameFr": "رقاصة",
      "nameAr": "رقاصة",
      "dairaAr": "رقاصة"
    },
    {
      "id": "32-1156",
      "nameFr": "ستيتن",
      "nameAr": "ستيتن",
      "dairaAr": "بوعلام"
    },
    {
      "id": "32-1154",
      "nameFr": "سيدي سليمان",
      "nameAr": "سيدي سليمان",
      "dairaAr": "بوعلام"
    },
    {
      "id": "32-1155",
      "nameFr": "سيدي طيفور",
      "nameAr": "سيدي طيفور",
      "dairaAr": "بوعلام"
    },
    {
      "id": "32-1153",
      "nameFr": "سيدي عامر",
      "nameAr": "سيدي عامر",
      "dairaAr": "بوعلام"
    },
    {
      "id": "32-1151",
      "nameFr": "كراكدة",
      "nameAr": "كراكدة",
      "dairaAr": "بريزينة"
    }
  ],
  "33": [
    {
      "id": "33-1163",
      "nameFr": "إن أمناس",
      "nameAr": "إن أمناس",
      "dairaAr": "إن أمناس"
    },
    {
      "id": "33-1162",
      "nameFr": "إيليزي",
      "nameAr": "إيليزي",
      "dairaAr": "إيليزي"
    },
    {
      "id": "33-1159",
      "nameFr": "برج عمر إدريس",
      "nameAr": "برج عمر إدريس",
      "dairaAr": "إن أمناس"
    },
    {
      "id": "33-1160",
      "nameFr": "دبداب",
      "nameAr": "دبداب",
      "dairaAr": "إن أمناس"
    }
  ],
  "34": [
    {
      "id": "34-1187",
      "nameFr": "أولاد أبراهم",
      "nameAr": "أولاد أبراهم",
      "dairaAr": "رأس الوادي"
    },
    {
      "id": "34-1188",
      "nameFr": "أولاد دحمان",
      "nameAr": "أولاد دحمان",
      "dairaAr": "برج زمورة"
    },
    {
      "id": "34-1189",
      "nameFr": "أولاد سيدي ابراهيم",
      "nameAr": "أولاد سيدي ابراهيم",
      "dairaAr": "المنصورة"
    },
    {
      "id": "34-1177",
      "nameFr": "الحمادية",
      "nameAr": "الحمادية",
      "dairaAr": "الحمادية"
    },
    {
      "id": "34-1190",
      "nameFr": "الرابطة",
      "nameAr": "الرابطة",
      "dairaAr": "الحمادية"
    },
    {
      "id": "34-1174",
      "nameFr": "العش",
      "nameAr": "العش",
      "dairaAr": "الحمادية"
    },
    {
      "id": "34-1176",
      "nameFr": "العناصر",
      "nameAr": "العناصر",
      "dairaAr": "برج الغدير"
    },
    {
      "id": "34-1184",
      "nameFr": "القصور",
      "nameAr": "القصور",
      "dairaAr": "الحمادية"
    },
    {
      "id": "34-1172",
      "nameFr": "القلة",
      "nameAr": "القلة",
      "dairaAr": "جعافرة"
    },
    {
      "id": "34-1178",
      "nameFr": "الماين",
      "nameAr": "الماين",
      "dairaAr": "جعافرة"
    },
    {
      "id": "34-1185",
      "nameFr": "المنصورة",
      "nameAr": "المنصورة",
      "dairaAr": "المنصورة"
    },
    {
      "id": "34-1179",
      "nameFr": "المهير",
      "nameAr": "المهير",
      "dairaAr": "المنصورة"
    },
    {
      "id": "34-1175",
      "nameFr": "الياشير",
      "nameAr": "الياشير",
      "dairaAr": "مجانة"
    },
    {
      "id": "34-1169",
      "nameFr": "بئر قاصد علي",
      "nameAr": "بئر قاصد علي",
      "dairaAr": "بئر قاصد علي"
    },
    {
      "id": "34-1170",
      "nameFr": "برج الغدير",
      "nameAr": "برج الغدير",
      "dairaAr": "برج الغدير"
    },
    {
      "id": "34-1166",
      "nameFr": "برج بوعريرج",
      "nameAr": "برج بوعريرج",
      "dairaAr": "برج بوعريريج"
    },
    {
      "id": "34-1171",
      "nameFr": "برج زمورة",
      "nameAr": "برج زمورة",
      "dairaAr": "برج زمورة"
    },
    {
      "id": "34-1167",
      "nameFr": "بليمور",
      "nameAr": "بليمور",
      "dairaAr": "برج الغدير"
    },
    {
      "id": "34-1168",
      "nameFr": "بن داود",
      "nameAr": "بن داود",
      "dairaAr": "المنصورة"
    },
    {
      "id": "34-1195",
      "nameFr": "تسامرت",
      "nameAr": "تسامرت",
      "dairaAr": "برج زمورة"
    },
    {
      "id": "34-1193",
      "nameFr": "تفرق",
      "nameAr": "تفرق",
      "dairaAr": "جعافرة"
    },
    {
      "id": "34-1194",
      "nameFr": "تقلعيت",
      "nameAr": "تقلعيت",
      "dairaAr": "برج الغدير"
    },
    {
      "id": "34-1197",
      "nameFr": "تيكستار",
      "nameAr": "تيكستار",
      "dairaAr": "عين تاغروت"
    },
    {
      "id": "34-1196",
      "nameFr": "ثنية النصر",
      "nameAr": "ثنية النصر",
      "dairaAr": "مجانة"
    },
    {
      "id": "34-1173",
      "nameFr": "جعافرة",
      "nameAr": "جعافرة",
      "dairaAr": "جعافرة"
    },
    {
      "id": "34-1181",
      "nameFr": "حرازة",
      "nameAr": "حرازة",
      "dairaAr": "المنصورة"
    },
    {
      "id": "34-1182",
      "nameFr": "حسناوة",
      "nameAr": "حسناوة",
      "dairaAr": "مجانة"
    },
    {
      "id": "34-1183",
      "nameFr": "خليل",
      "nameAr": "خليل",
      "dairaAr": "بئر قاصد علي"
    },
    {
      "id": "34-1191",
      "nameFr": "رأس الوادي",
      "nameAr": "رأس الوادي",
      "dairaAr": "رأس الوادي"
    },
    {
      "id": "34-1192",
      "nameFr": "سيدي أمبارك",
      "nameAr": "سيدي أمبارك",
      "dairaAr": "بئر قاصد علي"
    },
    {
      "id": "34-1164",
      "nameFr": "عين تاغروت",
      "nameAr": "عين تاغروت",
      "dairaAr": "عين تاغروت"
    },
    {
      "id": "34-1165",
      "nameFr": "عين تسرة",
      "nameAr": "عين تسرة",
      "dairaAr": "رأس الوادي"
    },
    {
      "id": "34-1180",
      "nameFr": "غيلاسة",
      "nameAr": "غيلاسة",
      "dairaAr": "برج الغدير"
    },
    {
      "id": "34-1186",
      "nameFr": "مجانة",
      "nameAr": "مجانة",
      "dairaAr": "مجانة"
    }
  ],
  "35": [
    {
      "id": "35-1198",
      "nameFr": "أعفير",
      "nameAr": "أعفير",
      "dairaAr": "دلس"
    },
    {
      "id": "35-1219",
      "nameFr": "أولاد عيسى",
      "nameAr": "أولاد عيسى",
      "dairaAr": "الناصرية"
    },
    {
      "id": "35-1221",
      "nameFr": "أولاد موسى",
      "nameAr": "أولاد موسى",
      "dairaAr": "خميس الخشنة"
    },
    {
      "id": "35-1220",
      "nameFr": "أولاد هداج",
      "nameAr": "أولاد هداج",
      "dairaAr": "بودواو"
    },
    {
      "id": "35-1216",
      "nameFr": "الاربعطاش",
      "nameAr": "الاربعطاش",
      "dairaAr": "خميس الخشنة"
    },
    {
      "id": "35-1226",
      "nameFr": "الثنية",
      "nameAr": "الثنية",
      "dairaAr": "الثنية"
    },
    {
      "id": "35-1212",
      "nameFr": "الخروبة",
      "nameAr": "الخروبة",
      "dairaAr": "بودواو"
    },
    {
      "id": "35-1218",
      "nameFr": "الناصرية",
      "nameAr": "الناصرية",
      "dairaAr": "الناصرية"
    },
    {
      "id": "35-1203",
      "nameFr": "برج منايل",
      "nameAr": "برج منايل",
      "dairaAr": "برج منايل"
    },
    {
      "id": "35-1200",
      "nameFr": "بغلية",
      "nameAr": "بغلية",
      "dairaAr": "بغلية"
    },
    {
      "id": "35-1201",
      "nameFr": "بن شود",
      "nameAr": "بن شود",
      "dairaAr": "دلس"
    },
    {
      "id": "35-1202",
      "nameFr": "بني عمران",
      "nameAr": "بني عمران",
      "dairaAr": "الثنية"
    },
    {
      "id": "35-1204",
      "nameFr": "بودواو",
      "nameAr": "بودواو",
      "dairaAr": "بودواو"
    },
    {
      "id": "35-1205",
      "nameFr": "بودواو البحري",
      "nameAr": "بودواو البحري",
      "dairaAr": "بودواو"
    },
    {
      "id": "35-1207",
      "nameFr": "بوزقزة قدارة",
      "nameAr": "بوزقزة قدارة",
      "dairaAr": "بودواو"
    },
    {
      "id": "35-1206",
      "nameFr": "بومرداس",
      "nameAr": "بومرداس",
      "dairaAr": "بومرداس"
    },
    {
      "id": "35-1225",
      "nameFr": "تاورقة",
      "nameAr": "تاورقة",
      "dairaAr": "بغلية"
    },
    {
      "id": "35-1227",
      "nameFr": "تيجلابين",
      "nameAr": "تيجلابين",
      "dairaAr": "بومرداس"
    },
    {
      "id": "35-1228",
      "nameFr": "تيمزريت",
      "nameAr": "تيمزريت",
      "dairaAr": "يسر"
    },
    {
      "id": "35-1211",
      "nameFr": "جنات",
      "nameAr": "جنات",
      "dairaAr": "برج منايل"
    },
    {
      "id": "35-1213",
      "nameFr": "حمادي",
      "nameAr": "حمادي",
      "dairaAr": "خميس الخشنة"
    },
    {
      "id": "35-1215",
      "nameFr": "خميس الخشنة",
      "nameAr": "خميس الخشنة",
      "dairaAr": "خميس الخشنة"
    },
    {
      "id": "35-1210",
      "nameFr": "دلس",
      "nameAr": "دلس",
      "dairaAr": "دلس"
    },
    {
      "id": "35-1229",
      "nameFr": "زموري",
      "nameAr": "زموري",
      "dairaAr": "برج منايل"
    },
    {
      "id": "35-1224",
      "nameFr": "سوق الحد",
      "nameAr": "سوق الحد",
      "dairaAr": "الثنية"
    },
    {
      "id": "35-1222",
      "nameFr": "سي مصطفى",
      "nameAr": "سي مصطفى",
      "dairaAr": "يسر"
    },
    {
      "id": "35-1223",
      "nameFr": "سيدي داود",
      "nameAr": "سيدي داود",
      "dairaAr": "بغلية"
    },
    {
      "id": "35-1208",
      "nameFr": "شعبة العامر",
      "nameAr": "شعبة العامر",
      "dairaAr": "يسر"
    },
    {
      "id": "35-1199",
      "nameFr": "عمال",
      "nameAr": "عمال",
      "dairaAr": "الثنية"
    },
    {
      "id": "35-1209",
      "nameFr": "قورصو",
      "nameAr": "قورصو",
      "dairaAr": "بومرداس"
    },
    {
      "id": "35-1217",
      "nameFr": "لقاطة",
      "nameAr": "لقاطة",
      "dairaAr": "برج منايل"
    },
    {
      "id": "35-1214",
      "nameFr": "يسر",
      "nameAr": "يسر",
      "dairaAr": "يسر"
    }
  ],
  "36": [
    {
      "id": "36-1235",
      "nameFr": "البسباس",
      "nameAr": "البسباس",
      "dairaAr": "البسباس"
    },
    {
      "id": "36-1242",
      "nameFr": "الذرعـان",
      "nameAr": "الذرعـان",
      "dairaAr": "الذرعان"
    },
    {
      "id": "36-1253",
      "nameFr": "الزيتونة",
      "nameAr": "الزيتونة",
      "dairaAr": "الطارف"
    },
    {
      "id": "36-1251",
      "nameFr": "السوارخ",
      "nameAr": "السوارخ",
      "dairaAr": "القالة"
    },
    {
      "id": "36-1240",
      "nameFr": "الشافية",
      "nameAr": "الشافية",
      "dairaAr": "بوثلجة"
    },
    {
      "id": "36-1243",
      "nameFr": "الشط",
      "nameAr": "الشط",
      "dairaAr": "بن مهيدي"
    },
    {
      "id": "36-1246",
      "nameFr": "الطارف",
      "nameAr": "الطارف",
      "dairaAr": "الطارف"
    },
    {
      "id": "36-1244",
      "nameFr": "العيون",
      "nameAr": "العيون",
      "dairaAr": "القالة"
    },
    {
      "id": "36-1245",
      "nameFr": "القالة",
      "nameAr": "القالة",
      "dairaAr": "القالة"
    },
    {
      "id": "36-1248",
      "nameFr": "بحيرة الطيور",
      "nameAr": "بحيرة الطيور",
      "dairaAr": "بوثلجة"
    },
    {
      "id": "36-1234",
      "nameFr": "بريحان",
      "nameAr": "بريحان",
      "dairaAr": "بن مهيدي"
    },
    {
      "id": "36-1233",
      "nameFr": "بن مهيدي",
      "nameAr": "بن مهيدي",
      "dairaAr": "بن مهيدي"
    },
    {
      "id": "36-1238",
      "nameFr": "بوثلجة",
      "nameAr": "بوثلجة",
      "dairaAr": "بوثلجة"
    },
    {
      "id": "36-1237",
      "nameFr": "بوحجار",
      "nameAr": "بوحجار",
      "dairaAr": "بوحجار"
    },
    {
      "id": "36-1236",
      "nameFr": "بوقوس",
      "nameAr": "بوقوس",
      "dairaAr": "الطارف"
    },
    {
      "id": "36-1247",
      "nameFr": "حمام بني صالح",
      "nameAr": "حمام بني صالح",
      "dairaAr": "بوحجار"
    },
    {
      "id": "36-1250",
      "nameFr": "رمل السوق",
      "nameAr": "رمل السوق",
      "dairaAr": "القالة"
    },
    {
      "id": "36-1252",
      "nameFr": "زريزر",
      "nameAr": "زريزر",
      "dairaAr": "البسباس"
    },
    {
      "id": "36-1239",
      "nameFr": "شبيطة مختار",
      "nameAr": "شبيطة مختار",
      "dairaAr": "الذرعان"
    },
    {
      "id": "36-1241",
      "nameFr": "شحاني",
      "nameAr": "شحاني",
      "dairaAr": "الذرعان"
    },
    {
      "id": "36-1232",
      "nameFr": "عصفور",
      "nameAr": "عصفور",
      "dairaAr": "البسباس"
    },
    {
      "id": "36-1230",
      "nameFr": "عين العسل",
      "nameAr": "عين العسل",
      "dairaAr": "الطارف"
    },
    {
      "id": "36-1231",
      "nameFr": "عين الكرمة",
      "nameAr": "عين الكرمة",
      "dairaAr": "بوحجار"
    },
    {
      "id": "36-1249",
      "nameFr": "وادي الزيتون",
      "nameAr": "وادي الزيتون",
      "dairaAr": "بوحجار"
    }
  ],
  "37": [
    {
      "id": "37-1254",
      "nameFr": "أم العسل",
      "nameAr": "أم العسل",
      "dairaAr": "تندوف"
    },
    {
      "id": "37-1255",
      "nameFr": "تندوف",
      "nameAr": "تندوف",
      "dairaAr": "تندوف"
    }
  ],
  "38": [
    {
      "id": "38-1269",
      "nameFr": "أولاد بسام",
      "nameAr": "أولاد بسام",
      "dairaAr": "تيسمسيلت"
    },
    {
      "id": "38-1263",
      "nameFr": "الأربعاء",
      "nameAr": "الأربعاء",
      "dairaAr": "الأزهرية"
    },
    {
      "id": "38-1266",
      "nameFr": "الأزهرية",
      "nameAr": "الأزهرية",
      "dairaAr": "الأزهرية"
    },
    {
      "id": "38-1265",
      "nameFr": "العيون",
      "nameAr": "العيون",
      "dairaAr": "خميستي"
    },
    {
      "id": "38-1267",
      "nameFr": "المعاصم",
      "nameAr": "المعاصم",
      "dairaAr": "عماري"
    },
    {
      "id": "38-1268",
      "nameFr": "الملعب",
      "nameAr": "الملعب",
      "dairaAr": "لرجام"
    },
    {
      "id": "38-1277",
      "nameFr": "اليوسفية",
      "nameAr": "اليوسفية",
      "dairaAr": "برج الأمير عبد القادر"
    },
    {
      "id": "38-1260",
      "nameFr": "برج الأمير عبد القادر",
      "nameAr": "برج الأمير عبد القادر",
      "dairaAr": "برج الأمير عبد القادر"
    },
    {
      "id": "38-1259",
      "nameFr": "برج بونعامة",
      "nameAr": "برج بونعامة",
      "dairaAr": "برج بونعامة"
    },
    {
      "id": "38-1257",
      "nameFr": "بني شعيب",
      "nameAr": "بني شعيب",
      "dairaAr": "برج بونعامة"
    },
    {
      "id": "38-1258",
      "nameFr": "بني لحسن",
      "nameAr": "بني لحسن",
      "dairaAr": "برج بونعامة"
    },
    {
      "id": "38-1261",
      "nameFr": "بوقائد",
      "nameAr": "بوقائد",
      "dairaAr": "الأزهرية"
    },
    {
      "id": "38-1274",
      "nameFr": "تملاحت",
      "nameAr": "تملاحت",
      "dairaAr": "لرجام"
    },
    {
      "id": "38-1276",
      "nameFr": "تيسمسيلت",
      "nameAr": "تيسمسيلت",
      "dairaAr": "تيسمسيلت"
    },
    {
      "id": "38-1275",
      "nameFr": "ثنية الاحد",
      "nameAr": "ثنية الاحد",
      "dairaAr": "ثنية الاحد"
    },
    {
      "id": "38-1262",
      "nameFr": "خميستي",
      "nameAr": "خميستي",
      "dairaAr": "خميستي"
    },
    {
      "id": "38-1272",
      "nameFr": "سيدي العنتري",
      "nameAr": "سيدي العنتري",
      "dairaAr": "لرجام"
    },
    {
      "id": "38-1271",
      "nameFr": "سيدي بوتوشنت",
      "nameAr": "سيدي بوتوشنت",
      "dairaAr": "ثنية الاحد"
    },
    {
      "id": "38-1273",
      "nameFr": "سيدي سليمان",
      "nameAr": "سيدي سليمان",
      "dairaAr": "برج بونعامة"
    },
    {
      "id": "38-1270",
      "nameFr": "سيدي عابد",
      "nameAr": "سيدي عابد",
      "dairaAr": "عماري"
    },
    {
      "id": "38-1256",
      "nameFr": "عماري",
      "nameAr": "عماري",
      "dairaAr": "عماري"
    },
    {
      "id": "38-1264",
      "nameFr": "لرجام",
      "nameAr": "لرجام",
      "dairaAr": "لرجام"
    }
  ],
  "39": [
    {
      "id": "39-1278",
      "nameFr": "البياضة",
      "nameAr": "البياضة",
      "dairaAr": "البياضة"
    },
    {
      "id": "39-1287",
      "nameFr": "الحمراية",
      "nameAr": "الحمراية",
      "dairaAr": "الرقيبة"
    },
    {
      "id": "39-1280",
      "nameFr": "الدبيلة",
      "nameAr": "الدبيلة",
      "dairaAr": "الدبيلة"
    },
    {
      "id": "39-1299",
      "nameFr": "الرباح",
      "nameAr": "الرباح",
      "dairaAr": "الرباح"
    },
    {
      "id": "39-1298",
      "nameFr": "الرقيبة",
      "nameAr": "الرقيبة",
      "dairaAr": "الرقيبة"
    },
    {
      "id": "39-1305",
      "nameFr": "الطالب العربي",
      "nameAr": "الطالب العربي",
      "dairaAr": "الطالب العربي"
    },
    {
      "id": "39-1307",
      "nameFr": "الطريفاوي",
      "nameAr": "الطريفاوي",
      "dairaAr": "حاسي خليفة"
    },
    {
      "id": "39-1283",
      "nameFr": "العقلة",
      "nameAr": "العقلة",
      "dairaAr": "الرباح"
    },
    {
      "id": "39-1291",
      "nameFr": "المقرن",
      "nameAr": "المقرن",
      "dairaAr": "المقرن"
    },
    {
      "id": "39-1294",
      "nameFr": "النخلة",
      "nameAr": "النخلة",
      "dairaAr": "الرباح"
    },
    {
      "id": "39-1285",
      "nameFr": "الوادي",
      "nameAr": "الوادي",
      "dairaAr": "الوادي"
    },
    {
      "id": "39-1292",
      "nameFr": "اميه وانسة",
      "nameAr": "اميه وانسة",
      "dairaAr": "اميه وانسة"
    },
    {
      "id": "39-1279",
      "nameFr": "بن قشة",
      "nameAr": "بن قشة",
      "dairaAr": "الطالب العربي"
    },
    {
      "id": "39-1304",
      "nameFr": "تغزوت",
      "nameAr": "تغزوت",
      "dairaAr": "قمار"
    },
    {
      "id": "39-1289",
      "nameFr": "حاسي خليفة",
      "nameAr": "حاسي خليفة",
      "dairaAr": "حاسي خليفة"
    },
    {
      "id": "39-1288",
      "nameFr": "حساني عبد الكريم",
      "nameAr": "حساني عبد الكريم",
      "dairaAr": "الدبيلة"
    },
    {
      "id": "39-1282",
      "nameFr": "دوار الماء",
      "nameAr": "دوار الماء",
      "dairaAr": "الطالب العربي"
    },
    {
      "id": "39-1301",
      "nameFr": "سيدي عون",
      "nameAr": "سيدي عون",
      "dairaAr": "المقرن"
    },
    {
      "id": "39-1286",
      "nameFr": "قمار",
      "nameAr": "قمار",
      "dairaAr": "قمار"
    },
    {
      "id": "39-1290",
      "nameFr": "كوينين",
      "nameAr": "كوينين",
      "dairaAr": "الوادي"
    },
    {
      "id": "39-1295",
      "nameFr": "وادي العلندة",
      "nameAr": "وادي العلندة",
      "dairaAr": "اميه وانسة"
    },
    {
      "id": "39-1297",
      "nameFr": "ورماس",
      "nameAr": "ورماس",
      "dairaAr": "قمار"
    }
  ],
  "40": [
    {
      "id": "40-1324",
      "nameFr": "أولاد رشاش",
      "nameAr": "أولاد رشاش",
      "dairaAr": "أولاد رشاش"
    },
    {
      "id": "40-1315",
      "nameFr": "الحامة",
      "nameAr": "الحامة",
      "dairaAr": "الحامة"
    },
    {
      "id": "40-1325",
      "nameFr": "الرميلة",
      "nameAr": "الرميلة",
      "dairaAr": "قايس"
    },
    {
      "id": "40-1316",
      "nameFr": "المحمل",
      "nameAr": "المحمل",
      "dairaAr": "أولاد رشاش"
    },
    {
      "id": "40-1317",
      "nameFr": "الولجة",
      "nameAr": "الولجة",
      "dairaAr": "ششار"
    },
    {
      "id": "40-1318",
      "nameFr": "انسيغة",
      "nameAr": "انسيغة",
      "dairaAr": "الحامة"
    },
    {
      "id": "40-1309",
      "nameFr": "بابار",
      "nameAr": "بابار",
      "dairaAr": "بابار"
    },
    {
      "id": "40-1310",
      "nameFr": "بغاي",
      "nameAr": "بغاي",
      "dairaAr": "الحامة"
    },
    {
      "id": "40-1311",
      "nameFr": "بوحمامة",
      "nameAr": "بوحمامة",
      "dairaAr": "بوحمامة"
    },
    {
      "id": "40-1327",
      "nameFr": "تاوزيانت",
      "nameAr": "تاوزيانت",
      "dairaAr": "قايس"
    },
    {
      "id": "40-1314",
      "nameFr": "جلال",
      "nameAr": "جلال",
      "dairaAr": "ششار"
    },
    {
      "id": "40-1320",
      "nameFr": "خنشلة",
      "nameAr": "خنشلة",
      "dairaAr": "خنشلة"
    },
    {
      "id": "40-1321",
      "nameFr": "خيران",
      "nameAr": "خيران",
      "dairaAr": "ششار"
    },
    {
      "id": "40-1312",
      "nameFr": "ششار",
      "nameAr": "ششار",
      "dairaAr": "ششار"
    },
    {
      "id": "40-1313",
      "nameFr": "شلية",
      "nameAr": "شلية",
      "dairaAr": "بوحمامة"
    },
    {
      "id": "40-1326",
      "nameFr": "طامزة",
      "nameAr": "طامزة",
      "dairaAr": "الحامة"
    },
    {
      "id": "40-1308",
      "nameFr": "عين الطويلة",
      "nameAr": "عين الطويلة",
      "dairaAr": "عين الطويلة"
    },
    {
      "id": "40-1319",
      "nameFr": "قايس",
      "nameAr": "قايس",
      "dairaAr": "قايس"
    },
    {
      "id": "40-1323",
      "nameFr": "متوسة",
      "nameAr": "متوسة",
      "dairaAr": "عين الطويلة"
    },
    {
      "id": "40-1322",
      "nameFr": "مصارة",
      "nameAr": "مصارة",
      "dairaAr": "بوحمامة"
    },
    {
      "id": "40-1328",
      "nameFr": "يابوس",
      "nameAr": "يابوس",
      "dairaAr": "بوحمامة"
    }
  ],
  "41": [
    {
      "id": "41-1343",
      "nameFr": "أم العظايم",
      "nameAr": "أم العظايم",
      "dairaAr": "أم العظايم"
    },
    {
      "id": "41-1341",
      "nameFr": "أولاد إدريس",
      "nameAr": "أولاد إدريس",
      "dairaAr": "أولاد إدريس"
    },
    {
      "id": "41-1342",
      "nameFr": "أولاد مومن",
      "nameAr": "أولاد مومن",
      "dairaAr": "الحدادة"
    },
    {
      "id": "41-1333",
      "nameFr": "الحدادة",
      "nameAr": "الحدادة",
      "dairaAr": "الحدادة"
    },
    {
      "id": "41-1334",
      "nameFr": "الحنانشة",
      "nameAr": "الحنانشة",
      "dairaAr": "المشروحة"
    },
    {
      "id": "41-1335",
      "nameFr": "الخضارة",
      "nameAr": "الخضارة",
      "dairaAr": "الحدادة"
    },
    {
      "id": "41-1332",
      "nameFr": "الدريعة",
      "nameAr": "الدريعة",
      "dairaAr": "تاورة"
    },
    {
      "id": "41-1345",
      "nameFr": "الراقوبة",
      "nameAr": "الراقوبة",
      "dairaAr": "مداوروش"
    },
    {
      "id": "41-1353",
      "nameFr": "الزعرورية",
      "nameAr": "الزعرورية",
      "dairaAr": "تاورة"
    },
    {
      "id": "41-1354",
      "nameFr": "الزوابي",
      "nameAr": "الزوابي",
      "dairaAr": "بئر بوحوش"
    },
    {
      "id": "41-1339",
      "nameFr": "المراهنة",
      "nameAr": "المراهنة",
      "dairaAr": "المراهنة"
    },
    {
      "id": "41-1337",
      "nameFr": "المشروحة",
      "nameAr": "المشروحة",
      "dairaAr": "المشروحة"
    },
    {
      "id": "41-1331",
      "nameFr": "بئر بوحوش",
      "nameAr": "بئر بوحوش",
      "dairaAr": "بئر بوحوش"
    },
    {
      "id": "41-1350",
      "nameFr": "تاورة",
      "nameAr": "تاورة",
      "dairaAr": "تاورة"
    },
    {
      "id": "41-1351",
      "nameFr": "ترقالت",
      "nameAr": "ترقالت",
      "dairaAr": "أم العظايم"
    },
    {
      "id": "41-1352",
      "nameFr": "تيفاش",
      "nameAr": "تيفاش",
      "dairaAr": "مداوروش"
    },
    {
      "id": "41-1336",
      "nameFr": "خميسة",
      "nameAr": "خميسة",
      "dairaAr": "سدراتة"
    },
    {
      "id": "41-1346",
      "nameFr": "سافل الويدان",
      "nameAr": "سافل الويدان",
      "dairaAr": "بئر بوحوش"
    },
    {
      "id": "41-1347",
      "nameFr": "سدراتة",
      "nameAr": "سدراتة",
      "dairaAr": "سدراتة"
    },
    {
      "id": "41-1349",
      "nameFr": "سوق أهراس",
      "nameAr": "سوق أهراس",
      "dairaAr": "سوق أهراس"
    },
    {
      "id": "41-1348",
      "nameFr": "سيدي فرج",
      "nameAr": "سيدي فرج",
      "dairaAr": "المراهنة"
    },
    {
      "id": "41-1330",
      "nameFr": "عين الزانة",
      "nameAr": "عين الزانة",
      "dairaAr": "أولاد إدريس"
    },
    {
      "id": "41-1329",
      "nameFr": "عين سلطان",
      "nameAr": "عين سلطان",
      "dairaAr": "سدراتة"
    },
    {
      "id": "41-1338",
      "nameFr": "مداوروش",
      "nameAr": "مداوروش",
      "dairaAr": "مداوروش"
    },
    {
      "id": "41-1340",
      "nameFr": "وادي الكبريت",
      "nameAr": "وادي الكبريت",
      "dairaAr": "أم العظايم"
    },
    {
      "id": "41-1344",
      "nameFr": "ويلان",
      "nameAr": "ويلان",
      "dairaAr": "المراهنة"
    }
  ],
  "42": [
    {
      "id": "42-1356",
      "nameFr": "أحمر العين",
      "nameAr": "أحمر العين",
      "dairaAr": "أحمر العين"
    },
    {
      "id": "42-1355",
      "nameFr": "أغبال",
      "nameAr": "أغبال",
      "dairaAr": "قوراية"
    },
    {
      "id": "42-1373",
      "nameFr": "الأرهاط",
      "nameAr": "الأرهاط",
      "dairaAr": "الداموس"
    },
    {
      "id": "42-1358",
      "nameFr": "الحطاطبة",
      "nameAr": "الحطاطبة",
      "dairaAr": "القليعة"
    },
    {
      "id": "42-1365",
      "nameFr": "الداموس",
      "nameAr": "الداموس",
      "dairaAr": "الداموس"
    },
    {
      "id": "42-1363",
      "nameFr": "الشعيبة",
      "nameAr": "الشعيبة",
      "dairaAr": "القليعة"
    },
    {
      "id": "42-1372",
      "nameFr": "القليعة",
      "nameAr": "القليعة",
      "dairaAr": "القليعة"
    },
    {
      "id": "42-1377",
      "nameFr": "الناظور",
      "nameAr": "الناظور",
      "dairaAr": "سيدي أعمر"
    },
    {
      "id": "42-1359",
      "nameFr": "بني ميلك",
      "nameAr": "بني ميلك",
      "dairaAr": "الداموس"
    },
    {
      "id": "42-1361",
      "nameFr": "بواسماعيل",
      "nameAr": "بواسماعيل",
      "dairaAr": "بواسماعيل"
    },
    {
      "id": "42-1362",
      "nameFr": "بورقيقة",
      "nameAr": "بورقيقة",
      "dairaAr": "أحمر العين"
    },
    {
      "id": "42-1360",
      "nameFr": "بوهارون",
      "nameAr": "بوهارون",
      "dairaAr": "بواسماعيل"
    },
    {
      "id": "42-1382",
      "nameFr": "تيبازة",
      "nameAr": "تيبازة",
      "dairaAr": "تيبازة"
    },
    {
      "id": "42-1370",
      "nameFr": "حجرة النص",
      "nameAr": "حجرة النص",
      "dairaAr": "شرشال"
    },
    {
      "id": "42-1369",
      "nameFr": "حجوط",
      "nameAr": "حجوط",
      "dairaAr": "حجوط"
    },
    {
      "id": "42-1371",
      "nameFr": "خميستي",
      "nameAr": "خميستي",
      "dairaAr": "بواسماعيل"
    },
    {
      "id": "42-1366",
      "nameFr": "دواودة",
      "nameAr": "دواودة",
      "dairaAr": "فوكة"
    },
    {
      "id": "42-1379",
      "nameFr": "سيدي راشد",
      "nameAr": "سيدي راشد",
      "dairaAr": "أحمر العين"
    },
    {
      "id": "42-1380",
      "nameFr": "سيدي سميان",
      "nameAr": "سيدي سميان",
      "dairaAr": "شرشال"
    },
    {
      "id": "42-1381",
      "nameFr": "سيدي عامر",
      "nameAr": "سيدي عامر",
      "dairaAr": "سيدي أعمر"
    },
    {
      "id": "42-1378",
      "nameFr": "سيدي غيلاس",
      "nameAr": "سيدي غيلاس",
      "dairaAr": "شرشال"
    },
    {
      "id": "42-1364",
      "nameFr": "شرشال",
      "nameAr": "شرشال",
      "dairaAr": "شرشال"
    },
    {
      "id": "42-1357",
      "nameFr": "عين تاقورايت",
      "nameAr": "عين تاقورايت",
      "dairaAr": "بواسماعيل"
    },
    {
      "id": "42-1367",
      "nameFr": "فوكة",
      "nameAr": "فوكة",
      "dairaAr": "فوكة"
    },
    {
      "id": "42-1368",
      "nameFr": "قوراية",
      "nameAr": "قوراية",
      "dairaAr": "قوراية"
    },
    {
      "id": "42-1375",
      "nameFr": "مراد",
      "nameAr": "مراد",
      "dairaAr": "حجوط"
    },
    {
      "id": "42-1376",
      "nameFr": "مسلمون",
      "nameAr": "مسلمون",
      "dairaAr": "قوراية"
    },
    {
      "id": "42-1374",
      "nameFr": "مناصر",
      "nameAr": "مناصر",
      "dairaAr": "سيدي أعمر"
    }
  ],
  "43": [
    {
      "id": "43-1383",
      "nameFr": "أحمد راشدي",
      "nameAr": "أحمد راشدي",
      "dairaAr": "وادي النجاء"
    },
    {
      "id": "43-1403",
      "nameFr": "أولاد اخلوف",
      "nameAr": "أولاد اخلوف",
      "dairaAr": "تاجنانت"
    },
    {
      "id": "43-1387",
      "nameFr": "اعميرة اراس",
      "nameAr": "اعميرة اراس",
      "dairaAr": "ترعي باينان"
    },
    {
      "id": "43-1409",
      "nameFr": "التلاغمة",
      "nameAr": "التلاغمة",
      "dairaAr": "التلاغمة"
    },
    {
      "id": "43-1404",
      "nameFr": "الرواشد",
      "nameAr": "الرواشد",
      "dairaAr": "الرواشد"
    },
    {
      "id": "43-1391",
      "nameFr": "الشيقارة",
      "nameAr": "الشيقارة",
      "dairaAr": "سيدي مروان"
    },
    {
      "id": "43-1393",
      "nameFr": "العياضي برباس",
      "nameAr": "العياضي برباس",
      "dairaAr": "عين البيضاء أحريش"
    },
    {
      "id": "43-1396",
      "nameFr": "القرارم قوقة",
      "nameAr": "القرارم قوقة",
      "dairaAr": "القرارم قوقة"
    },
    {
      "id": "43-1388",
      "nameFr": "بن يحي عبد الرحمن",
      "nameAr": "بن يحي عبد الرحمن",
      "dairaAr": "تاجنانت"
    },
    {
      "id": "43-1389",
      "nameFr": "بوحاتم",
      "nameAr": "بوحاتم",
      "dairaAr": "بوحاتم"
    },
    {
      "id": "43-1407",
      "nameFr": "تاجنانت",
      "nameAr": "تاجنانت",
      "dairaAr": "تاجنانت"
    },
    {
      "id": "43-1410",
      "nameFr": "ترعي باينان",
      "nameAr": "ترعي باينان",
      "dairaAr": "ترعي باينان"
    },
    {
      "id": "43-1411",
      "nameFr": "تسالة لمطاعي",
      "nameAr": "تسالة لمطاعي",
      "dairaAr": "ترعي باينان"
    },
    {
      "id": "43-1408",
      "nameFr": "تسدان حدادة",
      "nameAr": "تسدان حدادة",
      "dairaAr": "تسدان حدادة"
    },
    {
      "id": "43-1412",
      "nameFr": "تيبرقنت",
      "nameAr": "تيبرقنت",
      "dairaAr": "الرواشد"
    },
    {
      "id": "43-1397",
      "nameFr": "حمالة",
      "nameAr": "حمالة",
      "dairaAr": "القرارم قوقة"
    },
    {
      "id": "43-1392",
      "nameFr": "دراحي بوصلاح",
      "nameAr": "دراحي بوصلاح",
      "dairaAr": "بوحاتم"
    },
    {
      "id": "43-1414",
      "nameFr": "زغاية",
      "nameAr": "زغاية",
      "dairaAr": "وادي النجاء"
    },
    {
      "id": "43-1405",
      "nameFr": "سيدي خليفة",
      "nameAr": "سيدي خليفة",
      "dairaAr": "ميلة"
    },
    {
      "id": "43-1406",
      "nameFr": "سيدي مروان",
      "nameAr": "سيدي مروان",
      "dairaAr": "سيدي مروان"
    },
    {
      "id": "43-1390",
      "nameFr": "شلغوم العيد",
      "nameAr": "شلغوم العيد",
      "dairaAr": "شلغوم العيد"
    },
    {
      "id": "43-1384",
      "nameFr": "عين البيضاء أحريش",
      "nameAr": "عين البيضاء أحريش",
      "dairaAr": "عين البيضاء أحريش"
    },
    {
      "id": "43-1386",
      "nameFr": "عين التين",
      "nameAr": "عين التين",
      "dairaAr": "ميلة"
    },
    {
      "id": "43-1385",
      "nameFr": "عين الملوك",
      "nameAr": "عين الملوك",
      "dairaAr": "شلغوم العيد"
    },
    {
      "id": "43-1395",
      "nameFr": "فرجيوة",
      "nameAr": "فرجيوة",
      "dairaAr": "فرجيوة"
    },
    {
      "id": "43-1394",
      "nameFr": "مشيرة",
      "nameAr": "مشيرة",
      "dairaAr": "التلاغمة"
    },
    {
      "id": "43-1398",
      "nameFr": "ميلة",
      "nameAr": "ميلة",
      "dairaAr": "ميلة"
    },
    {
      "id": "43-1399",
      "nameFr": "مينار زارزة",
      "nameAr": "مينار زارزة",
      "dairaAr": "تسدان حدادة"
    },
    {
      "id": "43-1400",
      "nameFr": "وادي العثمانية",
      "nameAr": "وادي العثمانية",
      "dairaAr": "شلغوم العيد"
    },
    {
      "id": "43-1401",
      "nameFr": "وادي النجاء",
      "nameAr": "وادي النجاء",
      "dairaAr": "وادي النجاء"
    },
    {
      "id": "43-1402",
      "nameFr": "وادي سقان",
      "nameAr": "وادي سقان",
      "dairaAr": "التلاغمة"
    },
    {
      "id": "43-1413",
      "nameFr": "يحي بني قشة",
      "nameAr": "يحي بني قشة",
      "dairaAr": "فرجيوة"
    }
  ],
  "44": [
    {
      "id": "44-1438",
      "nameFr": "الحسانية",
      "nameAr": "الحسانية",
      "dairaAr": "بطحية"
    },
    {
      "id": "44-1439",
      "nameFr": "الحسينية",
      "nameAr": "الحسينية",
      "dairaAr": "بومدفع"
    },
    {
      "id": "44-1445",
      "nameFr": "الروينة",
      "nameAr": "الروينة",
      "dairaAr": "الروينة"
    },
    {
      "id": "44-1434",
      "nameFr": "العامرة",
      "nameAr": "العامرة",
      "dairaAr": "العامرة"
    },
    {
      "id": "44-1433",
      "nameFr": "العبادية",
      "nameAr": "العبادية",
      "dairaAr": "العبادية"
    },
    {
      "id": "44-1435",
      "nameFr": "العطاف",
      "nameAr": "العطاف",
      "dairaAr": "العطاف"
    },
    {
      "id": "44-1436",
      "nameFr": "الماين",
      "nameAr": "الماين",
      "dairaAr": "الروينة"
    },
    {
      "id": "44-1441",
      "nameFr": "المخاطرية",
      "nameAr": "المخاطرية",
      "dairaAr": "العامرة"
    },
    {
      "id": "44-1426",
      "nameFr": "بئر ولد خليفة",
      "nameAr": "بئر ولد خليفة",
      "dairaAr": "برج الأمير خالد"
    },
    {
      "id": "44-1422",
      "nameFr": "بربوش",
      "nameAr": "بربوش",
      "dairaAr": "جندل"
    },
    {
      "id": "44-1427",
      "nameFr": "برج الأمير خالد",
      "nameAr": "برج الأمير خالد",
      "dairaAr": "برج الأمير خالد"
    },
    {
      "id": "44-1423",
      "nameFr": "بطحية",
      "nameAr": "بطحية",
      "dairaAr": "بطحية"
    },
    {
      "id": "44-1424",
      "nameFr": "بلعاص",
      "nameAr": "بلعاص",
      "dairaAr": "بطحية"
    },
    {
      "id": "44-1425",
      "nameFr": "بن علال",
      "nameAr": "بن علال",
      "dairaAr": "مليانة"
    },
    {
      "id": "44-1429",
      "nameFr": "بوراشد",
      "nameAr": "بوراشد",
      "dairaAr": "جليدة"
    },
    {
      "id": "44-1428",
      "nameFr": "بومدفع",
      "nameAr": "بومدفع",
      "dairaAr": "بومدفع"
    },
    {
      "id": "44-1447",
      "nameFr": "تاشتة زقاغة",
      "nameAr": "تاشتة زقاغة",
      "dairaAr": "العبادية"
    },
    {
      "id": "44-1449",
      "nameFr": "تبركانين",
      "nameAr": "تبركانين",
      "dairaAr": "العطاف"
    },
    {
      "id": "44-1430",
      "nameFr": "جليدة",
      "nameAr": "جليدة",
      "dairaAr": "جليدة"
    },
    {
      "id": "44-1431",
      "nameFr": "جمعة أولاد الشيخ",
      "nameAr": "جمعة أولاد الشيخ",
      "dairaAr": "جليدة"
    },
    {
      "id": "44-1432",
      "nameFr": "جندل",
      "nameAr": "جندل",
      "dairaAr": "جندل"
    },
    {
      "id": "44-1437",
      "nameFr": "حمام ريغة",
      "nameAr": "حمام ريغة",
      "dairaAr": "حمام ريغة"
    },
    {
      "id": "44-1440",
      "nameFr": "خميس مليانة",
      "nameAr": "خميس مليانة",
      "dairaAr": "خميس"
    },
    {
      "id": "44-1450",
      "nameFr": "زدين",
      "nameAr": "زدين",
      "dairaAr": "الروينة"
    },
    {
      "id": "44-1446",
      "nameFr": "سيدي الأخضر",
      "nameAr": "سيدي الأخضر",
      "dairaAr": "خميس"
    },
    {
      "id": "44-1448",
      "nameFr": "طارق بن زياد",
      "nameAr": "طارق بن زياد",
      "dairaAr": "برج الأمير خالد"
    },
    {
      "id": "44-1421",
      "nameFr": "عريب",
      "nameAr": "عريب",
      "dairaAr": "العامرة"
    },
    {
      "id": "44-1418",
      "nameFr": "عين الاشياخ",
      "nameAr": "عين الاشياخ",
      "dairaAr": "عين الاشياخ"
    },
    {
      "id": "44-1415",
      "nameFr": "عين البنيان",
      "nameAr": "عين البنيان",
      "dairaAr": "حمام ريغة"
    },
    {
      "id": "44-1420",
      "nameFr": "عين التركي",
      "nameAr": "عين التركي",
      "dairaAr": "حمام ريغة"
    },
    {
      "id": "44-1417",
      "nameFr": "عين الدفلى",
      "nameAr": "عين الدفلى",
      "dairaAr": "عين الدفلى"
    },
    {
      "id": "44-1419",
      "nameFr": "عين السلطان",
      "nameAr": "عين السلطان",
      "dairaAr": "عين الاشياخ"
    },
    {
      "id": "44-1416",
      "nameFr": "عين بويحيى",
      "nameAr": "عين بويحيى",
      "dairaAr": "العبادية"
    },
    {
      "id": "44-1442",
      "nameFr": "مليانة",
      "nameAr": "مليانة",
      "dairaAr": "مليانة"
    },
    {
      "id": "44-1444",
      "nameFr": "واد الجمعة",
      "nameAr": "واد الجمعة",
      "dairaAr": "عين الاشياخ"
    },
    {
      "id": "44-1443",
      "nameFr": "وادي الشرفاء",
      "nameAr": "وادي الشرفاء",
      "dairaAr": "جندل"
    }
  ],
  "45": [
    {
      "id": "45-1455",
      "nameFr": "البيوض",
      "nameAr": "البيوض",
      "dairaAr": "المشرية"
    },
    {
      "id": "45-1456",
      "nameFr": "القصدير",
      "nameAr": "القصدير",
      "dairaAr": "مكمن بن عمار"
    },
    {
      "id": "45-1458",
      "nameFr": "المشرية",
      "nameAr": "المشرية",
      "dairaAr": "المشرية"
    },
    {
      "id": "45-1460",
      "nameFr": "النعامة",
      "nameAr": "النعامة",
      "dairaAr": "النعامة"
    },
    {
      "id": "45-1462",
      "nameFr": "تيوت",
      "nameAr": "تيوت",
      "dairaAr": "عين الصفراء"
    },
    {
      "id": "45-1454",
      "nameFr": "جنين بورزق",
      "nameAr": "جنين بورزق",
      "dairaAr": "مغرار"
    },
    {
      "id": "45-1461",
      "nameFr": "سفيسيفة",
      "nameAr": "سفيسيفة",
      "dairaAr": "سفيسيفة"
    },
    {
      "id": "45-1453",
      "nameFr": "عسلة",
      "nameAr": "عسلة",
      "dairaAr": "عسلة"
    },
    {
      "id": "45-1452",
      "nameFr": "عين الصفراء",
      "nameAr": "عين الصفراء",
      "dairaAr": "عين الصفراء"
    },
    {
      "id": "45-1451",
      "nameFr": "عين بن خليل",
      "nameAr": "عين بن خليل",
      "dairaAr": "المشرية"
    },
    {
      "id": "45-1459",
      "nameFr": "مغرار",
      "nameAr": "مغرار",
      "dairaAr": "مغرار"
    },
    {
      "id": "45-1457",
      "nameFr": "مكمن بن عمار",
      "nameAr": "مكمن بن عمار",
      "dairaAr": "مكمن بن عمار"
    }
  ],
  "46": [
    {
      "id": "46-1463",
      "nameFr": "أغلال",
      "nameAr": "أغلال",
      "dairaAr": "عين الكيحل"
    },
    {
      "id": "46-1483",
      "nameFr": "أولاد الكيحل",
      "nameAr": "أولاد الكيحل",
      "dairaAr": "المالح"
    },
    {
      "id": "46-1482",
      "nameFr": "أولاد بوجمعة",
      "nameAr": "أولاد بوجمعة",
      "dairaAr": "العامرية"
    },
    {
      "id": "46-1476",
      "nameFr": "الأمير عبد القادر",
      "nameAr": "الأمير عبد القادر",
      "dairaAr": "بني صاف"
    },
    {
      "id": "46-1478",
      "nameFr": "الحساسنة",
      "nameAr": "الحساسنة",
      "dairaAr": "حمام بوحجر"
    },
    {
      "id": "46-1473",
      "nameFr": "العامرية",
      "nameAr": "العامرية",
      "dairaAr": "العامرية"
    },
    {
      "id": "46-1474",
      "nameFr": "المالح",
      "nameAr": "المالح",
      "dairaAr": "المالح"
    },
    {
      "id": "46-1475",
      "nameFr": "المساعيد",
      "nameAr": "المساعيد",
      "dairaAr": "العامرية"
    },
    {
      "id": "46-1469",
      "nameFr": "بني صاف",
      "nameAr": "بني صاف",
      "dairaAr": "بني صاف"
    },
    {
      "id": "46-1470",
      "nameFr": "بوزجار",
      "nameAr": "بوزجار",
      "dairaAr": "العامرية"
    },
    {
      "id": "46-1490",
      "nameFr": "تارقة",
      "nameAr": "تارقة",
      "dairaAr": "المالح"
    },
    {
      "id": "46-1489",
      "nameFr": "تامزورة",
      "nameAr": "تامزورة",
      "dairaAr": "عين الأربعاء"
    },
    {
      "id": "46-1479",
      "nameFr": "حاسي الغلة",
      "nameAr": "حاسي الغلة",
      "dairaAr": "العامرية"
    },
    {
      "id": "46-1477",
      "nameFr": "حمام بوحجر",
      "nameAr": "حمام بوحجر",
      "dairaAr": "حمام بوحجر"
    },
    {
      "id": "46-1485",
      "nameFr": "سيدي بن عدة",
      "nameAr": "سيدي بن عدة",
      "dairaAr": "عين تموشنت"
    },
    {
      "id": "46-1486",
      "nameFr": "سيدي بومدين",
      "nameAr": "سيدي بومدين",
      "dairaAr": "عين الأربعاء"
    },
    {
      "id": "46-1488",
      "nameFr": "سيدي صافي",
      "nameAr": "سيدي صافي",
      "dairaAr": "بني صاف"
    },
    {
      "id": "46-1487",
      "nameFr": "سيدي ورياش",
      "nameAr": "سيدي ورياش",
      "dairaAr": "ولهاصة الغرابة"
    },
    {
      "id": "46-1471",
      "nameFr": "شعبة اللحم",
      "nameAr": "شعبة اللحم",
      "dairaAr": "المالح"
    },
    {
      "id": "46-1472",
      "nameFr": "شنتوف",
      "nameAr": "شنتوف",
      "dairaAr": "حمام بوحجر"
    },
    {
      "id": "46-1468",
      "nameFr": "عقب الليل",
      "nameAr": "عقب الليل",
      "dairaAr": "عين الكيحل"
    },
    {
      "id": "46-1464",
      "nameFr": "عين الأربعاء",
      "nameAr": "عين الأربعاء",
      "dairaAr": "عين الأربعاء"
    },
    {
      "id": "46-1467",
      "nameFr": "عين الطلبة",
      "nameAr": "عين الطلبة",
      "dairaAr": "عين الكيحل"
    },
    {
      "id": "46-1465",
      "nameFr": "عين الكيحل",
      "nameAr": "عين الكيحل",
      "dairaAr": "عين الكيحل"
    },
    {
      "id": "46-1466",
      "nameFr": "عين تموشنت",
      "nameAr": "عين تموشنت",
      "dairaAr": "عين تموشنت"
    },
    {
      "id": "46-1481",
      "nameFr": "وادي الصباح",
      "nameAr": "وادي الصباح",
      "dairaAr": "عين الأربعاء"
    },
    {
      "id": "46-1480",
      "nameFr": "وادي برقش",
      "nameAr": "وادي برقش",
      "dairaAr": "حمام بوحجر"
    },
    {
      "id": "46-1484",
      "nameFr": "ولهاصة الغرابة",
      "nameAr": "ولهاصة الغرابة",
      "dairaAr": "ولهاصة الغرابة"
    }
  ],
  "47": [
    {
      "id": "47-1494",
      "nameFr": "العطف",
      "nameAr": "العطف",
      "dairaAr": "بونورة"
    },
    {
      "id": "47-1497",
      "nameFr": "القرارة",
      "nameAr": "القرارة",
      "dairaAr": "القرارة"
    },
    {
      "id": "47-1500",
      "nameFr": "المنصورة",
      "nameAr": "المنصورة",
      "dairaAr": "المنصورة"
    },
    {
      "id": "47-1491",
      "nameFr": "بريان",
      "nameAr": "بريان",
      "dairaAr": "بريان"
    },
    {
      "id": "47-1492",
      "nameFr": "بونورة",
      "nameAr": "بونورة",
      "dairaAr": "بونورة"
    },
    {
      "id": "47-1503",
      "nameFr": "زلفانة",
      "nameAr": "زلفانة",
      "dairaAr": "زلفانة"
    },
    {
      "id": "47-1502",
      "nameFr": "سبسب",
      "nameAr": "سبسب",
      "dairaAr": "متليلي"
    },
    {
      "id": "47-1493",
      "nameFr": "ضاية بن ضحوة",
      "nameAr": "ضاية بن ضحوة",
      "dairaAr": "ضاية بن ضحوة"
    },
    {
      "id": "47-1496",
      "nameFr": "غرداية",
      "nameAr": "غرداية",
      "dairaAr": "غرداية"
    },
    {
      "id": "47-1501",
      "nameFr": "متليلي",
      "nameAr": "متليلي",
      "dairaAr": "متليلي"
    }
  ],
  "48": [
    {
      "id": "48-1531",
      "nameFr": "أولاد سيدي الميهوب",
      "nameAr": "أولاد سيدي الميهوب",
      "dairaAr": "جديوية"
    },
    {
      "id": "48-1530",
      "nameFr": "أولاد يعيش",
      "nameAr": "أولاد يعيش",
      "dairaAr": "عمي موسى"
    },
    {
      "id": "48-1513",
      "nameFr": "الحاسي",
      "nameAr": "الحاسي",
      "dairaAr": "عمي موسى"
    },
    {
      "id": "48-1514",
      "nameFr": "الحمادنة",
      "nameAr": "الحمادنة",
      "dairaAr": "الحمادنة"
    },
    {
      "id": "48-1532",
      "nameFr": "الرمكة",
      "nameAr": "الرمكة",
      "dairaAr": "الرمكة"
    },
    {
      "id": "48-1516",
      "nameFr": "القطار",
      "nameAr": "القطار",
      "dairaAr": "مازونة"
    },
    {
      "id": "48-1520",
      "nameFr": "القلعة",
      "nameAr": "القلعة",
      "dairaAr": "يلل"
    },
    {
      "id": "48-1517",
      "nameFr": "المطمر",
      "nameAr": "المطمر",
      "dairaAr": "المطمر"
    },
    {
      "id": "48-1515",
      "nameFr": "الولجة",
      "nameAr": "الولجة",
      "dairaAr": "عمي موسى"
    },
    {
      "id": "48-1507",
      "nameFr": "بلعسل بوزقزة",
      "nameAr": "بلعسل بوزقزة",
      "dairaAr": "المطمر"
    },
    {
      "id": "48-1508",
      "nameFr": "بن داود",
      "nameAr": "بن داود",
      "dairaAr": "غليزان"
    },
    {
      "id": "48-1509",
      "nameFr": "بني درقن",
      "nameAr": "بني درقن",
      "dairaAr": "زمورة"
    },
    {
      "id": "48-1510",
      "nameFr": "بني زنطيس",
      "nameAr": "بني زنطيس",
      "dairaAr": "سيدي أمحمد بن علي"
    },
    {
      "id": "48-1512",
      "nameFr": "جديوية",
      "nameAr": "جديوية",
      "dairaAr": "جديوية"
    },
    {
      "id": "48-1518",
      "nameFr": "حد الشكالة",
      "nameAr": "حد الشكالة",
      "dairaAr": "عين طارق"
    },
    {
      "id": "48-1519",
      "nameFr": "حمري",
      "nameAr": "حمري",
      "dairaAr": "جديوية"
    },
    {
      "id": "48-1511",
      "nameFr": "دار بن عبد الله",
      "nameAr": "دار بن عبد الله",
      "dairaAr": "زمورة"
    },
    {
      "id": "48-1541",
      "nameFr": "زمورة",
      "nameAr": "زمورة",
      "dairaAr": "زمورة"
    },
    {
      "id": "48-1539",
      "nameFr": "سوق الحد",
      "nameAr": "سوق الحد",
      "dairaAr": "الرمكة"
    },
    {
      "id": "48-1536",
      "nameFr": "سيدي أمحمد بن علي",
      "nameAr": "سيدي أمحمد بن علي",
      "dairaAr": "سيدي أمحمد بن علي"
    },
    {
      "id": "48-1537",
      "nameFr": "سيدي امحمد بن عودة",
      "nameAr": "سيدي امحمد بن عودة",
      "dairaAr": "المطمر"
    },
    {
      "id": "48-1534",
      "nameFr": "سيدي خطاب",
      "nameAr": "سيدي خطاب",
      "dairaAr": "المطمر"
    },
    {
      "id": "48-1538",
      "nameFr": "سيدي سعادة",
      "nameAr": "سيدي سعادة",
      "dairaAr": "يلل"
    },
    {
      "id": "48-1535",
      "nameFr": "سيدي لزرق",
      "nameAr": "سيدي لزرق",
      "dairaAr": "منداس"
    },
    {
      "id": "48-1506",
      "nameFr": "عمي موسى",
      "nameAr": "عمي موسى",
      "dairaAr": "عمي موسى"
    },
    {
      "id": "48-1504",
      "nameFr": "عين الرحمة",
      "nameAr": "عين الرحمة",
      "dairaAr": "يلل"
    },
    {
      "id": "48-1505",
      "nameFr": "عين طارق",
      "nameAr": "عين طارق",
      "dairaAr": "عين طارق"
    },
    {
      "id": "48-1533",
      "nameFr": "غليزان",
      "nameAr": "غليزان",
      "dairaAr": "غليزان"
    },
    {
      "id": "48-1521",
      "nameFr": "لحلاف",
      "nameAr": "لحلاف",
      "dairaAr": "وادي رهيو"
    },
    {
      "id": "48-1522",
      "nameFr": "مازونة",
      "nameAr": "مازونة",
      "dairaAr": "مازونة"
    },
    {
      "id": "48-1523",
      "nameFr": "مديونة",
      "nameAr": "مديونة",
      "dairaAr": "سيدي أمحمد بن علي"
    },
    {
      "id": "48-1525",
      "nameFr": "مرجة سيدي عابد",
      "nameAr": "مرجة سيدي عابد",
      "dairaAr": "وادي رهيو"
    },
    {
      "id": "48-1524",
      "nameFr": "منداس",
      "nameAr": "منداس",
      "dairaAr": "منداس"
    },
    {
      "id": "48-1527",
      "nameFr": "وادي الجمعة",
      "nameAr": "وادي الجمعة",
      "dairaAr": "الحمادنة"
    },
    {
      "id": "48-1528",
      "nameFr": "وادي السلام",
      "nameAr": "وادي السلام",
      "dairaAr": "منداس"
    },
    {
      "id": "48-1529",
      "nameFr": "وادي رهيو",
      "nameAr": "وادي رهيو",
      "dairaAr": "وادي رهيو"
    },
    {
      "id": "48-1526",
      "nameFr": "واريزان",
      "nameAr": "واريزان",
      "dairaAr": "وادي رهيو"
    },
    {
      "id": "48-1540",
      "nameFr": "يلل",
      "nameAr": "يلل",
      "dairaAr": "يلل"
    }
  ],
  "49": [
    {
      "id": "49-0003",
      "nameFr": "أوقروت",
      "nameAr": "أوقروت",
      "dairaAr": "أوقروت"
    },
    {
      "id": "49-0015",
      "nameFr": "أولاد السعيد",
      "nameAr": "أولاد السعيد",
      "dairaAr": "تيميمون"
    },
    {
      "id": "49-0014",
      "nameFr": "أولاد عيسى",
      "nameAr": "أولاد عيسى",
      "dairaAr": "شروين"
    },
    {
      "id": "49-0012",
      "nameFr": "المطارفة",
      "nameAr": "المطارفة",
      "dairaAr": "أوقروت"
    },
    {
      "id": "49-0025",
      "nameFr": "تنركوك",
      "nameAr": "تنركوك",
      "dairaAr": "تنركوك"
    },
    {
      "id": "49-0024",
      "nameFr": "تيميمون",
      "nameAr": "تيميمون",
      "dairaAr": "تيميمون"
    },
    {
      "id": "49-0008",
      "nameFr": "دلدول",
      "nameAr": "دلدول",
      "dairaAr": "أوقروت"
    },
    {
      "id": "49-0007",
      "nameFr": "شروين",
      "nameAr": "شروين",
      "dairaAr": "شروين"
    },
    {
      "id": "49-0019",
      "nameFr": "طالمين",
      "nameAr": "طالمين",
      "dairaAr": "شروين"
    },
    {
      "id": "49-0011",
      "nameFr": "قصر قدور",
      "nameAr": "قصر قدور",
      "dairaAr": "تنركوك"
    }
  ],
  "50": [
    {
      "id": "50-0005",
      "nameFr": "برج باجي مختار",
      "nameAr": "برج باجي مختار",
      "dairaAr": "برج باجي مختار"
    },
    {
      "id": "50-0023",
      "nameFr": "تيمياوين",
      "nameAr": "تيمياوين",
      "dairaAr": "برج باجي مختار"
    }
  ],
  "51": [
    {
      "id": "51-0255",
      "nameFr": "أولاد جلال",
      "nameAr": "أولاد جلال",
      "dairaAr": "أولاد جلال"
    },
    {
      "id": "51-0240",
      "nameFr": "الدوسن",
      "nameAr": "الدوسن",
      "dairaAr": "أولاد جلال"
    },
    {
      "id": "51-0237",
      "nameFr": "الشعيبة",
      "nameAr": "الشعيبة",
      "dairaAr": "أولاد جلال"
    },
    {
      "id": "51-0232",
      "nameFr": "بسباس",
      "nameAr": "بسباس",
      "dairaAr": "سيدي خالد"
    },
    {
      "id": "51-0258",
      "nameFr": "رأس الميعاد",
      "nameAr": "رأس الميعاد",
      "dairaAr": "سيدي خالد"
    },
    {
      "id": "51-0259",
      "nameFr": "سيدي خالد",
      "nameAr": "سيدي خالد",
      "dairaAr": "سيدي خالد"
    }
  ],
  "52": [
    {
      "id": "52-0279",
      "nameFr": "أولاد خضير",
      "nameAr": "أولاد خضير",
      "dairaAr": "أولاد خضير"
    },
    {
      "id": "52-0271",
      "nameFr": "إقلي",
      "nameAr": "إقلي",
      "dairaAr": "إقلي"
    },
    {
      "id": "52-0274",
      "nameFr": "القصابي",
      "nameAr": "القصابي",
      "dairaAr": "أولاد خضير"
    },
    {
      "id": "52-0269",
      "nameFr": "الواتة",
      "nameAr": "الواتة",
      "dairaAr": "الواتة"
    },
    {
      "id": "52-0266",
      "nameFr": "بن يخلف",
      "nameAr": "بن يخلف",
      "dairaAr": "كرزاز"
    },
    {
      "id": "52-0265",
      "nameFr": "بني عباس",
      "nameAr": "بني عباس",
      "dairaAr": "بني عباس"
    },
    {
      "id": "52-0282",
      "nameFr": "تامترت",
      "nameAr": "تامترت",
      "dairaAr": "بني عباس"
    },
    {
      "id": "52-0283",
      "nameFr": "تيمودي",
      "nameAr": "تيمودي",
      "dairaAr": "كرزاز"
    },
    {
      "id": "52-0273",
      "nameFr": "كرزاز",
      "nameAr": "كرزاز",
      "dairaAr": "كرزاز"
    }
  ],
  "53": [
    {
      "id": "53-0360",
      "nameFr": "إينغر",
      "nameAr": "إينغر",
      "dairaAr": "إينغر"
    },
    {
      "id": "53-0357",
      "nameFr": "عين صالح",
      "nameAr": "عين صالح",
      "dairaAr": "عين صالح"
    },
    {
      "id": "53-0358",
      "nameFr": "فقارة الزوى",
      "nameAr": "فقارة الزوى",
      "dairaAr": "عين صالح"
    }
  ],
  "54": [
    {
      "id": "54-0363",
      "nameFr": "تين زواتين",
      "nameAr": "تين زواتين",
      "dairaAr": "تين زواتين"
    },
    {
      "id": "54-0356",
      "nameFr": "عين قزام",
      "nameAr": "عين قزام",
      "dairaAr": "عين قزام"
    }
  ],
  "55": [
    {
      "id": "55-1094",
      "nameFr": "الحجيرة",
      "nameAr": "الحجيرة",
      "dairaAr": "الحجيرة"
    },
    {
      "id": "55-1109",
      "nameFr": "الزاوية العابدية",
      "nameAr": "الزاوية العابدية",
      "dairaAr": "تقرت"
    },
    {
      "id": "55-1105",
      "nameFr": "الطيبات",
      "nameAr": "الطيبات",
      "dairaAr": "الطيبات"
    },
    {
      "id": "55-1092",
      "nameFr": "العالية",
      "nameAr": "العالية",
      "dairaAr": "الحجيرة"
    },
    {
      "id": "55-1097",
      "nameFr": "المقارين",
      "nameAr": "المقارين",
      "dairaAr": "المقارين"
    },
    {
      "id": "55-1098",
      "nameFr": "المنقر",
      "nameAr": "المنقر",
      "dairaAr": "الطيبات"
    },
    {
      "id": "55-1099",
      "nameFr": "النزلة",
      "nameAr": "النزلة",
      "dairaAr": "تقرت"
    },
    {
      "id": "55-1091",
      "nameFr": "بلدة اعمر",
      "nameAr": "بلدة اعمر",
      "dairaAr": "تماسين"
    },
    {
      "id": "55-1090",
      "nameFr": "بن ناصر",
      "nameAr": "بن ناصر",
      "dairaAr": "الطيبات"
    },
    {
      "id": "55-1106",
      "nameFr": "تبسبست",
      "nameAr": "تبسبست",
      "dairaAr": "تقرت"
    },
    {
      "id": "55-1108",
      "nameFr": "تقرت",
      "nameAr": "تقرت",
      "dairaAr": "تقرت"
    },
    {
      "id": "55-1107",
      "nameFr": "تماسين",
      "nameAr": "تماسين",
      "dairaAr": "تماسين"
    },
    {
      "id": "55-1104",
      "nameFr": "سيدي سليمان",
      "nameAr": "سيدي سليمان",
      "dairaAr": "المقارين"
    }
  ],
  "56": [
    {
      "id": "56-1158",
      "nameFr": "برج الحواس",
      "nameAr": "برج الحواس",
      "dairaAr": "جانت"
    },
    {
      "id": "56-1161",
      "nameFr": "جانت",
      "nameAr": "جانت",
      "dairaAr": "جانت"
    }
  ],
  "57": [
    {
      "id": "57-1296",
      "nameFr": "أم الطيور",
      "nameAr": "أم الطيور",
      "dairaAr": "المغير"
    },
    {
      "id": "57-1293",
      "nameFr": "المرارة",
      "nameAr": "المرارة",
      "dairaAr": "جامعة"
    },
    {
      "id": "57-1284",
      "nameFr": "المغير",
      "nameAr": "المغير",
      "dairaAr": "المغير"
    },
    {
      "id": "57-1306",
      "nameFr": "تندلة",
      "nameAr": "تندلة",
      "dairaAr": "جامعة"
    },
    {
      "id": "57-1281",
      "nameFr": "جامعة",
      "nameAr": "جامعة",
      "dairaAr": "جامعة"
    },
    {
      "id": "57-1303",
      "nameFr": "سطيل",
      "nameAr": "سطيل",
      "dairaAr": "المغير"
    },
    {
      "id": "57-1302",
      "nameFr": "سيدي خليل",
      "nameAr": "سيدي خليل",
      "dairaAr": "المغير"
    },
    {
      "id": "57-1300",
      "nameFr": "سيدي عمران",
      "nameAr": "سيدي عمران",
      "dairaAr": "جامعة"
    }
  ],
  "58": [
    {
      "id": "58-1495",
      "nameFr": "المنيعة",
      "nameAr": "المنيعة",
      "dairaAr": "المنيعة"
    },
    {
      "id": "58-1498",
      "nameFr": "حاسي الفحل",
      "nameAr": "حاسي الفحل",
      "dairaAr": "المنصورة"
    },
    {
      "id": "58-1499",
      "nameFr": "حاسي القارة",
      "nameAr": "حاسي القارة",
      "dairaAr": "المنيعة"
    }
  ],
  "59": [
    {
      "id": "59-0001",
      "nameFr": "Aflou",
      "nameAr": "أفلو",
      "dairaAr": ""
    },
    {
      "id": "59-0004",
      "nameFr": "El Beïdha",
      "nameAr": "البيضاء",
      "dairaAr": ""
    },
    {
      "id": "59-0007",
      "nameFr": "Hadj Mechri",
      "nameAr": "الحاج مشري",
      "dairaAr": ""
    },
    {
      "id": "59-0006",
      "nameFr": "El Ghicha",
      "nameAr": "الغيشة",
      "dairaAr": ""
    },
    {
      "id": "59-0005",
      "nameFr": "Brida",
      "nameAr": "بريدة",
      "dairaAr": ""
    },
    {
      "id": "59-0009",
      "nameFr": "Taouiala",
      "nameAr": "تاويالة",
      "dairaAr": ""
    },
    {
      "id": "59-0008",
      "nameFr": "Sebgag",
      "nameAr": "سبقاق",
      "dairaAr": ""
    },
    {
      "id": "59-0012",
      "nameFr": "Sidi Bouzid",
      "nameAr": "سيدي بوزيد",
      "dairaAr": ""
    },
    {
      "id": "59-0003",
      "nameFr": "Aïn Sidi Ali",
      "nameAr": "عين سيدي علي",
      "dairaAr": ""
    },
    {
      "id": "59-0002",
      "nameFr": "Gueltat Sidi Saad",
      "nameAr": "قلتة سيدي سعد",
      "dairaAr": ""
    },
    {
      "id": "59-0010",
      "nameFr": "Oued Morra",
      "nameAr": "وادي مرة",
      "dairaAr": ""
    },
    {
      "id": "59-0011",
      "nameFr": "Oued M'Zi",
      "nameAr": "وادي مزي",
      "dairaAr": ""
    }
  ],
  "60": [
    {
      "id": "60-0008",
      "nameFr": "Ouled Ammar",
      "nameAr": "أولاد عمار",
      "dairaAr": ""
    },
    {
      "id": "60-0007",
      "nameFr": "M'Doukal",
      "nameAr": "إمدوكل",
      "dairaAr": ""
    },
    {
      "id": "60-0006",
      "nameFr": "Djezzar",
      "nameAr": "الجزار",
      "dairaAr": ""
    },
    {
      "id": "60-0001",
      "nameFr": "Barika",
      "nameAr": "بريكة",
      "dairaAr": ""
    },
    {
      "id": "60-0002",
      "nameFr": "Bitam",
      "nameAr": "بيطام",
      "dairaAr": ""
    },
    {
      "id": "60-0004",
      "nameFr": "Tilatou",
      "nameAr": "تيلاطو",
      "dairaAr": ""
    },
    {
      "id": "60-0005",
      "nameFr": "Seggana",
      "nameAr": "سقانة",
      "dairaAr": ""
    },
    {
      "id": "60-0003",
      "nameFr": "Abdelkader Azil",
      "nameAr": "عزيل عبد القادر",
      "dairaAr": ""
    }
  ],
  "61": [
    {
      "id": "61-0001",
      "nameFr": "El Kantara",
      "nameAr": "القنطرة",
      "dairaAr": ""
    },
    {
      "id": "61-0004",
      "nameFr": "El Outaya",
      "nameAr": "الوطاية",
      "dairaAr": ""
    },
    {
      "id": "61-0003",
      "nameFr": "Branis",
      "nameAr": "برانيس",
      "dairaAr": ""
    },
    {
      "id": "61-0005",
      "nameFr": "Djemourah",
      "nameAr": "جمورة",
      "dairaAr": ""
    },
    {
      "id": "61-0002",
      "nameFr": "Aïn Zaatout",
      "nameAr": "عين زعطوط",
      "dairaAr": ""
    }
  ],
  "62": [
    {
      "id": "62-0003",
      "nameFr": "El Ogla El Melha",
      "nameAr": "العقلة المالحة",
      "dairaAr": ""
    },
    {
      "id": "62-0001",
      "nameFr": "Bir El Ater",
      "nameAr": "بئر العاتر",
      "dairaAr": ""
    },
    {
      "id": "62-0004",
      "nameFr": "Ferkane",
      "nameAr": "فركان",
      "dairaAr": ""
    },
    {
      "id": "62-0002",
      "nameFr": "Negrine",
      "nameAr": "نقرين",
      "dairaAr": ""
    }
  ],
  "63": [
    {
      "id": "63-0004",
      "nameFr": "El Bouihi",
      "nameAr": "البويهي",
      "dairaAr": ""
    },
    {
      "id": "63-0001",
      "nameFr": "El Aricha",
      "nameAr": "العريشة",
      "dairaAr": ""
    },
    {
      "id": "63-0002",
      "nameFr": "El Gor",
      "nameAr": "القور",
      "dairaAr": ""
    },
    {
      "id": "63-0003",
      "nameFr": "Sidi Djillali",
      "nameAr": "سيدي الجيلالي",
      "dairaAr": ""
    }
  ],
  "64": [
    {
      "id": "64-0003",
      "nameFr": "Rechaiga",
      "nameAr": "الرشايقة",
      "dairaAr": ""
    },
    {
      "id": "64-0006",
      "nameFr": "Bougara",
      "nameAr": "بوقرة",
      "dairaAr": ""
    },
    {
      "id": "64-0004",
      "nameFr": "Hamadia",
      "nameAr": "حمادية",
      "dairaAr": ""
    },
    {
      "id": "64-0002",
      "nameFr": "Zmalet El Emir Abdelkader",
      "nameAr": "زمالة الأمير عبد القادر",
      "dairaAr": ""
    },
    {
      "id": "64-0005",
      "nameFr": "Serguine",
      "nameAr": "سرغين",
      "dairaAr": ""
    },
    {
      "id": "64-0001",
      "nameFr": "Ksar Chellala",
      "nameAr": "قصر الشلالة",
      "dairaAr": ""
    }
  ],
  "65": [
    {
      "id": "65-0004",
      "nameFr": "El Khemis",
      "nameAr": "الخميس",
      "dairaAr": ""
    },
    {
      "id": "65-0008",
      "nameFr": "Benhar",
      "nameAr": "بنهار",
      "dairaAr": ""
    },
    {
      "id": "65-0003",
      "nameFr": "Bouira Lahdab",
      "nameAr": "بويرة الأحداب",
      "dairaAr": ""
    },
    {
      "id": "65-0002",
      "nameFr": "Birine",
      "nameAr": "بيرين",
      "dairaAr": ""
    },
    {
      "id": "65-0009",
      "nameFr": "Hassi Fedoul",
      "nameAr": "حاسي فدول",
      "dairaAr": ""
    },
    {
      "id": "65-0006",
      "nameFr": "Had Sahary",
      "nameAr": "حد الصحاري",
      "dairaAr": ""
    },
    {
      "id": "65-0005",
      "nameFr": "Sidi Ladjel",
      "nameAr": "سيدي لعجال",
      "dairaAr": ""
    },
    {
      "id": "65-0010",
      "nameFr": "Aïn Fekka",
      "nameAr": "عين فقه",
      "dairaAr": ""
    },
    {
      "id": "65-0001",
      "nameFr": "Aïn Ouessara",
      "nameAr": "عين وسارة",
      "dairaAr": ""
    },
    {
      "id": "65-0007",
      "nameFr": "Guernini",
      "nameAr": "قرنيني",
      "dairaAr": ""
    }
  ],
  "66": [
    {
      "id": "66-0006",
      "nameFr": "Oum Laadham",
      "nameAr": "أم العظام",
      "dairaAr": ""
    },
    {
      "id": "66-0007",
      "nameFr": "Deldoul",
      "nameAr": "دلدول",
      "dairaAr": ""
    },
    {
      "id": "66-0002",
      "nameFr": "Sed Rahal",
      "nameAr": "سد الرحال",
      "dairaAr": ""
    },
    {
      "id": "66-0005",
      "nameFr": "Selmana",
      "nameAr": "سلمانة",
      "dairaAr": ""
    },
    {
      "id": "66-0008",
      "nameFr": "Amourah",
      "nameAr": "عمورة",
      "dairaAr": ""
    },
    {
      "id": "66-0003",
      "nameFr": "Faïdh El Botma",
      "nameAr": "فيض البطمة",
      "dairaAr": ""
    },
    {
      "id": "66-0004",
      "nameFr": "Guettara",
      "nameAr": "قطارة",
      "dairaAr": ""
    },
    {
      "id": "66-0001",
      "nameFr": "Messaad",
      "nameAr": "مسعد",
      "dairaAr": ""
    }
  ],
  "67": [
    {
      "id": "67-0016",
      "nameFr": "Oum El Djallil",
      "nameAr": "أم الجليل",
      "dairaAr": ""
    },
    {
      "id": "67-0002",
      "nameFr": "Ouled Maaref",
      "nameAr": "أولاد امعرف",
      "dairaAr": ""
    },
    {
      "id": "67-0020",
      "nameFr": "Ouled Antar",
      "nameAr": "أولاد عنتر",
      "dairaAr": ""
    },
    {
      "id": "67-0008",
      "nameFr": "Ouled Hellal",
      "nameAr": "أولاد هلال",
      "dairaAr": ""
    },
    {
      "id": "67-0021",
      "nameFr": "Saneg",
      "nameAr": "السانق",
      "dairaAr": ""
    },
    {
      "id": "67-0013",
      "nameFr": "Chahbounia",
      "nameAr": "الشهبونية",
      "dairaAr": ""
    },
    {
      "id": "67-0019",
      "nameFr": "El Ouinet",
      "nameAr": "العوينات",
      "dairaAr": ""
    },
    {
      "id": "67-0006",
      "nameFr": "Kef Lakhdar",
      "nameAr": "الكاف الاخضر",
      "dairaAr": ""
    },
    {
      "id": "67-0005",
      "nameFr": "Bouaiche",
      "nameAr": "بوعيش",
      "dairaAr": ""
    },
    {
      "id": "67-0010",
      "nameFr": "Boghar",
      "nameAr": "بوغار",
      "dairaAr": ""
    },
    {
      "id": "67-0018",
      "nameFr": "Boughezoul",
      "nameAr": "بوغزول",
      "dairaAr": ""
    },
    {
      "id": "67-0009",
      "nameFr": "Tafraout",
      "nameAr": "تفراوت",
      "dairaAr": ""
    },
    {
      "id": "67-0004",
      "nameFr": "Derrag",
      "nameAr": "دراق",
      "dairaAr": ""
    },
    {
      "id": "67-0011",
      "nameFr": "Sidi Damed",
      "nameAr": "سيدي دامد",
      "dairaAr": ""
    },
    {
      "id": "67-0007",
      "nameFr": "Chelalet El Adhaoura",
      "nameAr": "شلالة العذاورة",
      "dairaAr": ""
    },
    {
      "id": "67-0014",
      "nameFr": "Cheniguel",
      "nameAr": "شنيقل",
      "dairaAr": ""
    },
    {
      "id": "67-0012",
      "nameFr": "Aziz",
      "nameAr": "عزيز",
      "dairaAr": ""
    },
    {
      "id": "67-0015",
      "nameFr": "Aïn Ouksir",
      "nameAr": "عين اقصير",
      "dairaAr": ""
    },
    {
      "id": "67-0003",
      "nameFr": "Aïn Boucif",
      "nameAr": "عين بوسيف",
      "dairaAr": ""
    },
    {
      "id": "67-0001",
      "nameFr": "Ksar El Boukhari",
      "nameAr": "قصر البخاري",
      "dairaAr": ""
    },
    {
      "id": "67-0017",
      "nameFr": "M'Fatha",
      "nameAr": "مفاتحة",
      "dairaAr": ""
    }
  ],
  "68": [
    {
      "id": "68-0008",
      "nameFr": "Ouled Slimane",
      "nameAr": "أولاد سليمان",
      "dairaAr": ""
    },
    {
      "id": "68-0004",
      "nameFr": "Ouled Sidi Brahim",
      "nameAr": "أولاد سيدي ابراهيم",
      "dairaAr": ""
    },
    {
      "id": "68-0009",
      "nameFr": "El Houamed",
      "nameAr": "الحوامد",
      "dairaAr": ""
    },
    {
      "id": "68-0010",
      "nameFr": "El Hamel",
      "nameAr": "الهامل",
      "dairaAr": ""
    },
    {
      "id": "68-0019",
      "nameFr": "Medjedel",
      "nameAr": "امجدل",
      "dairaAr": ""
    },
    {
      "id": "68-0014",
      "nameFr": "Bir Foda",
      "nameAr": "بئر فضة",
      "dairaAr": ""
    },
    {
      "id": "68-0013",
      "nameFr": "Benzouh",
      "nameAr": "بن زوه",
      "dairaAr": ""
    },
    {
      "id": "68-0007",
      "nameFr": "Ben Srour",
      "nameAr": "بن سرور",
      "dairaAr": ""
    },
    {
      "id": "68-0001",
      "nameFr": "Bou Saada",
      "nameAr": "بوسعادة",
      "dairaAr": ""
    },
    {
      "id": "68-0006",
      "nameFr": "Tamsa",
      "nameAr": "تامسة",
      "dairaAr": ""
    },
    {
      "id": "68-0023",
      "nameFr": "Djebel Messaad",
      "nameAr": "جبل مساعد",
      "dairaAr": ""
    },
    {
      "id": "68-0002",
      "nameFr": "Khoubana",
      "nameAr": "خبانة",
      "dairaAr": ""
    },
    {
      "id": "68-0011",
      "nameFr": "Zarzour",
      "nameAr": "زرزور",
      "dairaAr": ""
    },
    {
      "id": "68-0020",
      "nameFr": "Slim",
      "nameAr": "سليم",
      "dairaAr": ""
    },
    {
      "id": "68-0016",
      "nameFr": "Sidi M'Hamed",
      "nameAr": "سيدي امحمد",
      "dairaAr": ""
    },
    {
      "id": "68-0005",
      "nameFr": "Sidi Ameur",
      "nameAr": "سيدي عامر",
      "dairaAr": ""
    },
    {
      "id": "68-0021",
      "nameFr": "Aïn Errich",
      "nameAr": "عين الريش",
      "dairaAr": ""
    },
    {
      "id": "68-0018",
      "nameFr": "Aïn El Meleh",
      "nameAr": "عين الملح",
      "dairaAr": ""
    },
    {
      "id": "68-0015",
      "nameFr": "Aïn Farès",
      "nameAr": "عين فارس",
      "dairaAr": ""
    },
    {
      "id": "68-0012",
      "nameFr": "Mouhamed Boudiaf",
      "nameAr": "محمد بوضياف",
      "dairaAr": ""
    },
    {
      "id": "68-0003",
      "nameFr": "M'Cif",
      "nameAr": "مسيف",
      "dairaAr": ""
    },
    {
      "id": "68-0017",
      "nameFr": "Menaâ",
      "nameAr": "مناعة",
      "dairaAr": ""
    },
    {
      "id": "68-0022",
      "nameFr": "Oultem",
      "nameAr": "ولتام",
      "dairaAr": ""
    }
  ],
  "69": [
    {
      "id": "69-0003",
      "nameFr": "Arbaouat",
      "nameAr": "اربوات",
      "dairaAr": ""
    },
    {
      "id": "69-0001",
      "nameFr": "El Abiodh Sidi Cheikh",
      "nameAr": "الأبيض سيدي الشيخ",
      "dairaAr": ""
    },
    {
      "id": "69-0006",
      "nameFr": "El Bnoud",
      "nameAr": "البنود",
      "dairaAr": ""
    },
    {
      "id": "69-0007",
      "nameFr": "El Meharra",
      "nameAr": "المحرة",
      "dairaAr": ""
    },
    {
      "id": "69-0004",
      "nameFr": "Boussemghoun",
      "nameAr": "بوسمغون",
      "dairaAr": ""
    },
    {
      "id": "69-0005",
      "nameFr": "Chellala",
      "nameAr": "شلالة",
      "dairaAr": ""
    },
    {
      "id": "69-0002",
      "nameFr": "Aïn El Orak",
      "nameAr": "عين العراك",
      "dairaAr": ""
    }
  ]
};

export const WILAYA_BY_ID = Object.fromEntries(
  WILAYAS.map((wilaya) => [wilaya.id, wilaya]),
) as Record<string, Wilaya>;

export function getWilaya(id: string) {
  return WILAYA_BY_ID[id];
}

export function getCommunes(wilayaId: string) {
  return COMMUNES_BY_WILAYA[wilayaId] ?? [];
}

export function getWilayaLabel(id: string, lang: "ar" | "fr" = "ar") {
  const wilaya = getWilaya(id);
  if (!wilaya) return id;
  return lang === "fr"
    ? `${wilaya.id} - ${wilaya.nameFr}`
    : `${wilaya.id} - ${wilaya.nameAr}`;
}

export function getCommuneLabel(commune: Commune, lang: "ar" | "fr" = "ar") {
  return lang === "fr" ? commune.nameFr : commune.nameAr;
}

export function getBaseDeliveryFee(wilayaId: string, type: DeliveryType) {
  const wilaya = getWilaya(wilayaId);
  if (!wilaya) return 0;
  return wilaya[type];
}
