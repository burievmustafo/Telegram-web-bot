export function getData() {
  return [
    {
      id: 1,
      title: 'Hiragana asoslari',
      description: 'Yapon alifbosini noldan o\'rganing. Bu kursda siz 46 ta hiragana harfini yozish va o\'qishni o\'rganasiz. Har bir harf uchun amaliy mashqlar va testlar mavjud.',
      price: 49000,
      level: 'Boshlang\'ich',
      duration: '8 soat',
      lessons: 24,
      emoji: 'あ',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&h=250&fit=crop',
      learningOutcomes: [
        '46 ta hiragana harfini yozish',
        'Oddiy so\'zlarni o\'qish',
        'To\'g\'ri talaffuz qilish',
        'Hiragana bilan gap tuzish'
      ],
      lessonsList: [
        { title: 'Kirish - Hiragana nima?', duration: '10:00', isFree: true },
        { title: 'A-I-U-E-O harflari', duration: '25:00', isFree: true },
        { title: 'KA-KI-KU-KE-KO harflari', duration: '20:00', isFree: false },
        { title: 'SA-SHI-SU-SE-SO harflari', duration: '20:00', isFree: false },
      ]
    },
    {
      id: 2,
      title: 'Katakana kursi',
      description: 'Katakana yozuvini o\'zlashtiring. Xorijiy so\'zlar va nomlarni yozish uchun ishlatiladigan katakana alifbosini mukammal o\'rganing.',
      price: 49000,
      level: 'Boshlang\'ich',
      duration: '6 soat',
      lessons: 20,
      emoji: 'カ',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=400&h=250&fit=crop',
      learningOutcomes: [
        '46 ta katakana harfini yozish',
        'Xorijiy so\'zlarni o\'qish',
        'Katakana va Hiragana farqi',
        'Amaliy mashqlar'
      ],
      lessonsList: [
        { title: 'Katakana haqida umumiy', duration: '8:00', isFree: true },
        { title: 'A-I-U-E-O (Katakana)', duration: '20:00', isFree: true },
        { title: 'KA-KI-KU-KE-KO (Katakana)', duration: '18:00', isFree: false },
        { title: 'Amaliy mashq', duration: '15:00', isFree: false },
      ]
    },
    {
      id: 3,
      title: 'JLPT N5 tayyorlov',
      description: 'N5 imtihoniga tayyorlaning. Yapon tili bilish darajasining birinchi bosqichi uchun to\'liq tayyorgarlik kursi.',
      price: 149000,
      level: 'Boshlang\'ich',
      duration: '25 soat',
      lessons: 60,
      emoji: '📚',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=400&h=250&fit=crop',
      learningOutcomes: [
        '800 ta so\'z o\'rganish',
        '100 ta kanji bilish',
        'Grammatika asoslari',
        'Tinglash ko\'nikmalari'
      ],
      lessonsList: [
        { title: 'JLPT N5 haqida', duration: '15:00', isFree: true },
        { title: 'Asosiy grammatika', duration: '30:00', isFree: true },
        { title: 'Lug\'at - 1-qism', duration: '25:00', isFree: false },
        { title: 'Tinglash mashqlari', duration: '20:00', isFree: false },
      ]
    },
    {
      id: 4,
      title: 'JLPT N4 tayyorlov',
      description: 'N4 darajasiga ko\'taring. N5 dan keyingi bosqich uchun kengaytirilgan grammatika va lug\'at.',
      price: 199000,
      level: 'O\'rta',
      duration: '35 soat',
      lessons: 80,
      emoji: '📖',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=400&h=250&fit=crop',
      learningOutcomes: [
        '1500 ta so\'z o\'rganish',
        '300 ta kanji bilish',
        'Murakkab grammatika',
        'O\'qish tezligini oshirish'
      ],
      lessonsList: [
        { title: 'N4 talablari', duration: '12:00', isFree: true },
        { title: 'Grammatika - Te-forma', duration: '35:00', isFree: true },
        { title: 'Kanji mashqlari', duration: '30:00', isFree: false },
        { title: 'Mock test', duration: '45:00', isFree: false },
      ]
    },
    {
      id: 5,
      title: 'Kanji 500',
      description: '500 ta asosiy kanji ierogliflar. Kundalik hayotda eng ko\'p ishlatiladigan kanjilarni o\'rganing.',
      price: 249000,
      level: 'O\'rta',
      duration: '40 soat',
      lessons: 100,
      emoji: '漢',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=400&h=250&fit=crop',
      learningOutcomes: [
        '500 ta kanji yozish',
        'On\'yomi va Kun\'yomi',
        'Kanji birikmalar',
        'Eslab qolish texnikasi'
      ],
      lessonsList: [
        { title: 'Kanji tizimi', duration: '20:00', isFree: true },
        { title: 'Raqamlar 1-10', duration: '25:00', isFree: true },
        { title: 'Kun, Oy, Yil', duration: '25:00', isFree: false },
        { title: 'Odam va tabiat', duration: '30:00', isFree: false },
      ]
    },
    {
      id: 6,
      title: 'Yapon madaniyati',
      description: 'Madaniyat va an\'analar. Yaponiyaning boy madaniyati, an\'analari va zamonaviy hayoti haqida bilib oling.',
      price: 79000,
      level: 'Barcha',
      duration: '12 soat',
      lessons: 30,
      emoji: '🏯',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=250&fit=crop',
      learningOutcomes: [
        'Yapon an\'analari',
        'Odobnamlik qoidalari',
        'Bayramlar va festivallar',
        'Zamonaviy Yaponiya'
      ],
      lessonsList: [
        { title: 'Yaponiya tarixi', duration: '20:00', isFree: true },
        { title: 'Choy marosimi', duration: '18:00', isFree: true },
        { title: 'Kimono va kiyinish', duration: '15:00', isFree: false },
        { title: 'Yapon oshxonasi', duration: '22:00', isFree: false },
      ]
    },
  ];
}
