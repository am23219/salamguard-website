import { faHandsHolding, faPersonPraying, faBottleWater, faMoon } from "@fortawesome/free-solid-svg-icons";
const haajah = `
  <div class="space-y-6">
    <div class="space-y-4">
      <p class="font-arabic text-2xl md:text-3xl text-primary/90 text-center">
        لا إِلَهَ إِلَّا اللَّهُ الْحَلِيمُ الْكَرِيمُ
      </p>
      <p class="font-body text-base md:text-lg text-gray-400 text-center">
        There is no god but Allah, the Clement and Wise.
      </p>
    </div>

    <div class="space-y-4">
      <p class="font-arabic text-2xl md:text-3xl text-primary/90 text-center">
        سُبْحَانَ اللَّهِ رَبِّ الْعَرْشِ الْعَظِيمِ
      </p>
      <p class="font-body text-base md:text-lg text-gray-400 text-center">
        Glory be to Allah, Lord of the Tremendous Throne.
      </p>
    </div>

    <div class="space-y-4">
      <p class="font-arabic text-2xl md:text-3xl text-primary/90 text-center">
        الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
      </p>
      <p class="font-body text-base md:text-lg text-gray-400 text-center">
        All praise is to Allah, Lord of the worlds.
      </p>
    </div>

    <div class="space-y-4">
      <p class="font-arabic text-2xl md:text-3xl text-primary/90 text-center">
        أَسْأَلُكَ مُوجِبَاتِ رَحْمَتِكَ وَعَزَائِمَ مَغْفِرَتِكَ وَالْغَنِيمَةَ مِنْ كُلِّ بِرٍّ وَالسَّلامَةَ مِنْ كُلّ إِثْمٍ
      </p>
      <p class="font-body text-base md:text-lg text-gray-400 text-center">
        I ask you (O Allah) everything that leads to your mercy, and your tremendous forgiveness, enrichment in all good, and freedom from all sin.
      </p>
    </div>

    <div class="space-y-4">
      <p class="font-arabic text-2xl md:text-3xl text-primary/90 text-center">
        لا تَدَعْ لِي ذَنْبًا إِلَّا غَفَرْتَهُ وَلا هَمًّا إِلَّا فَرَّجْتَهُ وَلا حَاجَةً هِيَ لَكَ رِضًا إِلَّا قَضَيْتَهَا يَا أَرْحَمَ الرَّاحِمِينَ
      </p>
      <p class="font-body text-base md:text-lg text-gray-400 text-center">
        Do not leave a sin of mine (O Allah), except that you forgive it, nor any concern except that you create for it an opening, nor any need in which there is your good pleasure except that you fulfill it, O Most Merciful!
      </p>
    </div>
  </div>
`;

const salahAlTasbihString = `
  <div class="space-y-6">
    <h2 class="font-heading text-2xl md:text-3xl text-primary text-center">
      Prayer of Tasbih
    </h2>
    
    <p class="font-body text-base md:text-lg text-gray-400 text-center">
      Follow these steps for each of the 4 rak'ahs (units of prayer).
    </p>

    <ol class="space-y-8">
      <li class="space-y-3">
        <h3 class="font-heading text-lg md:text-xl text-primary/90 text-center">
          1. Start Salah Like Normal
        </h3>
        <p class="font-body text-gray-400 text-center">
          Begin your prayer as usual until you reach the standing position before Ruku.
        </p>
      </li>

      <li class="space-y-3">
        <h3 class="font-heading text-lg md:text-xl text-primary/90 text-center">
          2. Standing Position: 15 Times
        </h3>
        <p class="font-arabic text-xl md:text-2xl text-primary text-center">
          سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ
        </p>
        <p class="font-body text-gray-400 text-center">
          "Glory be to Allah, all praise is for Allah, there is no god but Allah, and Allah is the Greatest"
        </p>
      </li>

      <li class="space-y-3">
        <h3 class="font-heading text-lg md:text-xl text-primary/90 text-center">
          3. In Ruku: 10 Times
        </h3>
        <p class="font-body text-gray-400 text-center">
          After the usual Ruku dhikr, recite the same tasbih 10 times
        </p>
      </li>

      <li class="space-y-3">
        <h3 class="font-heading text-lg md:text-xl text-primary/90 text-center">
          4. Standing After Ruku: 10 Times
        </h3>
        <p class="font-body text-gray-400 text-center">
          After saying "Rabbana lakal hamd", recite the tasbih 10 times
        </p>
      </li>

      <li class="space-y-3">
        <h3 class="font-heading text-lg md:text-xl text-primary/90 text-center">
          5. First Sujood: 10 Times
        </h3>
        <p class="font-body text-gray-400 text-center">
          After the usual Sujood dhikr, recite the tasbih 10 times
        </p>
      </li>

      <li class="space-y-3">
        <h3 class="font-heading text-lg md:text-xl text-primary/90 text-center">
          6. Sitting Between Sujood: 10 Times
        </h3>
        <p class="font-body text-gray-400 text-center">
          Recite the tasbih 10 times while sitting
        </p>
      </li>

      <li class="space-y-3">
        <h3 class="font-heading text-lg md:text-xl text-primary/90 text-center">
          7. Second Sujood: 10 Times
        </h3>
        <p class="font-body text-gray-400 text-center">
          After the usual Sujood dhikr, recite the tasbih 10 times
        </p>
      </li>

      <li class="space-y-3">
        <h3 class="font-heading text-lg md:text-xl text-primary/90 text-center">
          8. Before Standing: 10 Times
        </h3>
        <p class="font-body text-gray-400 text-center">
          Before rising for the next rak'ah, recite the tasbih 10 times
        </p>
      </li>
    </ol>

    <div class="mt-8 p-4 bg-primary/5 rounded-lg">
      <p class="font-heading text-lg md:text-xl text-primary/90 text-center">
        Repeat this entire process for each of the 4 rak'ahs
      </p>
    </div>
  </div>
`;

const haajahSource = `
Abdullah ibn Abi Awfa (Allah be pleased with him) relates that the Messenger of Allah (Allah bless him and give him peace) said:

        "Whoever has a need with Allah, or with any human being, then let them perform ritual ablutions well and then pray two rakats.<br>
        After that, let them praise Allah and send blessings on the Prophet (Allah bless him and give him peace).

        After this, let them say:

        لا إِلَهَ إِلَّا اللَّهُ الْحَلِيمُ الْكَرِيمُ,
        سُبْحَانَ اللَّهِ رَبِّ الْعَرْشِ الْعَظِيمِ,
        الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِين,
        أَسْأَلُكَ مُوجِبَاتِ رَحْمَتِكَ وَعَزَائِمَ مَغْفِرَتِكَ وَالْغَنِيمَةَ مِنْ كُلِّ بِرٍّ وَالسَّلامَةَ مِنْ كُلّ إِثْمٍ,
        لا تَدَعْ لِي ذَنْبًا إِلا غَفَرْتَهُ وَلا هَمًّا إِلا فَرَّجْتَهُ وَلا حَاجَةً هِيَ لَكَ رِضًا إِلا قَضَيْتَهَا يَا أَرْحَمَ الرَّاحِمِينَ."

        [Related by Tirmidhi and Ibn Maja]
`;

const tasbihSource = `
    The Messenger of Allah ﷺ said to al-Abbas ibn Abdul Muttalib: "Abbas, my uncle, shall I not give you, shall I not present to you, shall I not donate to you, shall I not produce for you ten things? If you act upon them, Allah will forgive you your sins, first and last, old and new, involuntary and voluntary, small and great, secret and public.

    These are the ten things: you should pray four rak’ahs, reciting in each one Fatiha al-Kitab and a surah. When you finish the recitation of the first rak’ah you should say fifteen times while standing: “Glory be to Allah”, “Praise be to Allah”, “There is no god but Allah”, “Allah is most great”.

    Then you should bow and say it ten times while bowing.
    Then you should raise your head after bowing and say it ten times.
    Then you should kneel down in prostration and say it ten times while prostrating yourself.
    Then you should raise your head after prostration and say it ten times.
    Then you should prostrate yourself and say it ten times.
    Then you should raise your head after prostrating and say it ten times in every rak’ah.
    You should do that in four rak’ahs.

    If you can observe it once daily, do so; if not, then once a week; if not, then once a month; if not, then once a year; if not, then at least once in your lifetime.<br>

    [Abu Dawud and Ibn Majah]
`;

const sevensDescription = `Recite each dhikr or verse seven times.

After completing each set of seven, blow into a water bottle, then blow into your hands and wipe them over your entire body.

Drink some water from the bottle after finishing all the steps.

Repeat this process 3–5 times a day for 21 days, or until you notice improvement.

Continue adding water to the bottle to extend the benefit of the ruqyah as long as possible.`;

export const duaCategories = [
    {
      name: "Duas for Forgiveness",
      items: [
        {
          title: "Sayyid al-Istighfar: The Best Way of Seeking Forgiveness",
          arabic:
            "اَللّٰهُمَّ أَنْتَ رَبِّيْ لَا إِلٰهَ إِلَّا أَنْتَ ، خَلَقْتَنِيْ وَأَنَا عَبْدُكَ ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ ، أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ ، أَبُوْءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوْءُ لَكَ بِذَنْبِيْ ، فَاغْفِرْ لِيْ فَإِنَّهُ لَا يَغْفِرُ الذُّنُوْبَ إِلَّا أَنْتَ.",
          translation:
            "O Allah, You are my Lord. There is no god worthy of worship except You. You have created me, and I am Your slave, and I am under Your covenant and pledge (to fulfill it) to the best of my ability. I seek Your protection from the evil that I have done. I acknowledge the favors that You have bestowed upon me, and I admit my sins. Forgive me, for none forgives sins but You.",
          source: "Sahih Al-Bukhari",
        },
        {
          title: "Praising Allah, Forgiveness and Good Character",
          arabic:
            "اَللّٰهُمَّ أَنْتَ الْمَلِكُ لَا إِلٰهَ إِلَّا أَنْتَ ، أَنْتَ رَبِّيْ وَأَنَا عَبْدُكَ ، ظَلَمْتُ نَفْسِيْ وَاعْتَرَفْتُ بِذَنْبِيْ ، فَاغْفِرْ لِيْ ذُنُوْبِيْ جَمِيْعًا ، إِنَّهُ لَا يَغْفِرُ الذُّنُوْبَ إِلَّا أَنْتَ ، وَاهْدِنِيْ لِأَحْسَنِ الْأَخْلَاقِ لَا يَهْدِيْ لِأَحْسَنِهَا إِلَّا أَنْتَ ، وَاصْرِفْ عَنِّيْ سَيِّئَهَا لَا يَصْرِفُ عَنِّيْ سَيِّئَهَا إِلَّا أَنْتَ ، لَبَّيْكَ وَسَعْدَيْكَ ، وَالْخَيْرُ كُلُّهُ فِيْ يَدَيْكَ ، وَالشَّرُّ لَيْسَ إِلَيْكَ ، أَنَا بِكَ وَإِلَيْكَ ، تَبَارَكْتَ وَتَعَالَيْتَ ، أَسْتَغْفِرُكَ وَأَتُوْبُ إِلَيْكَ",
          translation:
            "O Allah, You are the King, there is no god worthy of worship except You. You are my Lord and I am Your slave. I have wronged myself and I confess my sins. Forgive all of my sins; indeed no one forgives sins except You. Guide me to the best of character, for no one guides to the best of it except You; and turn the evil of it away from me, for no one turns it away except You. Here I am at Your service, seeking Your pleasure; all good is in Your hands and no evil is attributed to You. I am from You and I am returning to You. You are Most Blessed and You are Most Exalted. I seek Your forgiveness and repent to You.",
          source: "Sahih Al-Muslim",
        },
        {
          title: "Forgiveness For All Types of Sins",
          arabic:
            "اَللّٰهُمَّ اغْفِرْ لِيْ ذَنْبِيْ كُلَّهُ ، دِقَّهُ وَجِلَّهُ ، وَأَوَّلَهُ وَآخِرَهُ ، وَعَلَانِيَتَهُ وَسِرَّهُ",
          translation:
            "O Allah, forgive for me all of my sins: the minor and major, the first and the last, the public and the private.",
          source: "Sahih Al-Muslim",
        },
        {
          title: "Intentional and Unintentional",
          arabic:
            "اَللّٰهُمَّ اغْفِرْ لِيْ خَطِيْئَتِيْ وَجَهْلِيْ وَإِسْرَافِيْ فِيْ أَمْرِيْ ، وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّيْ ، اَللّٰهُمَّ اغْفِرْ لِيْ جِدِّيْ وَهَزْلِيْ وَخَطَئِيْ وَعَمْدِيْ وَكُلُّ ذٰلِكَ عِنْدِيْ ، اَللّٰهُمَّ اغْفِرْ لِيْ مَا قَدَّمْتُ وَمَا أَخَّرْتُ ، وَمَا أَسْرَرْتُ وَمَا أَعْلَنْتُ ، وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّـيْ ، أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ ، وَأَنْتَ عَلَىٰ كُلِّ شَيْءٍ قَدِيْرٌ",
          translation:
            "O Allah, forgive my mistakes, ignorance, transgression in my matters, and what You are more Knowledgeable of than me. O Allah, forgive me for what I did in earnestness and in jest; unintentionally or intentionally; as I have committed all of these (types of sins). O Allah, forgive me for what I have already done, what I am yet to do, what I did publicly, what I did privately, and what You are more Knowledgeable of than me. You are the One who brings forward and You are the One who defers. You are All-Powerful over everything.",
          source: "Sahih Al-Muslim",
        },
        {
          title: "Pardoning of Sins",
          arabic:
            "اَللّٰهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّيْ",
          translation:
            "O Allah, You are the Ever-Pardoning, You love to pardon so pardon me.",
          source: "Tirmidhi",
        },
        {
          title: "Acknowledgement of Your Sins, Forgiveness & Mercy",
          arabic:
            "اَللّٰهُمَّ إِنّيْ ظَلَمْتُ نَفْسِيْ ظُلْمًا كَثِيْرًا ، وَلَا يَغْفِرُ الذُّنُوْبَ إِلَّا أَنْتَ ، فَاغْفِرْ لِيْ مَغْفِرَةً مِّنْ عِنْدِكَ ، وَارْحَمْنِيْ ، إِنَّكَ أَنْتَ الْغَفُوْرُ الرَّحِيْمُ",
          translation:
            "O Allah, I have wronged myself greatly and no one forgives sins except You; so grant me forgiveness from You and have mercy upon me. You are the Most Forgiving, the Most Merciful.",
          source: "Sahih Al-Bukhari",
        },
        {
          title: "A Deep Cleansing of Sins",
          arabic:
            "اَللّٰهُمَّ بَاعِدْ بَيْنِيْ وَبَيْنَ خَطَايَاىَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ ، اللَّهُمَّ نَقِّنِيْ مِنَ الْخَطَايَا كَمَا يُنَقَّى الثَّوْبُ الأَبْيَضُ مِنَ الدَّنَسِ ، اللَّهُمَّ اغْسِلْنِيْ مِنْ خَطَايَاىَ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ",
          translation:
            "O Allah, distance me from my sins as You have distanced the East from the West. O Allah, purify me from my sins as white cloth is purified from dirt. O Allah, wash away my sins with water, snow and hail.",
          source: "Sahih Al-Bukhari",
        },
      ],
    },
    {
      name: "Duas to Quit Bad Habits",
      items: [
        {
          title: "Turn Heart to Steadfastness",
          arabic: "يَا مُقَلِّبَ الْقُلُوْبِ ثَبِّتْ قَلْبِيْ عَلَىٰ دِيْنِكَ",
          translation:
            "O Allah, Turner of hearts, make my heart firm upon Your religion.",
          source: "Tirmidhi",
        },
        {
          title: "Divert Heart to Obedience",
          arabic:
            "اَللّٰهُمَّ مُصَرِّفَ الْقُلُوْبِ صَرِّفْ قُلُوْبَنَا عَلَىٰ طَاعَتِكَ",
          translation:
            "O Allah, Changer of hearts, direct our hearts to Your obedience.",
          source: "Sahih Al-Muslim",
        },
        {
          title: "Guidance, Piety, Chastity & Self-Sufficiency",
          arabic:
            "اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ الْهُدَىٰ وَالتُّقَىٰ وَالْعَفَافَ وَالْغِنَىٰ",
          translation:
            "O Allah, I beg You for guidance, taqwā (piety), chastity and self-sufficiency.",
          source: "Tirmidhi",
        },
        {
          title: "Guidance & Protection from Evil",
          arabic:
            "اَللّٰهُمَّ أَلْهِمْنِيْ رُشْدِيْ ، وَأَعِذْنِيْ مِنْ شَرِّ نَفْسِيْ",
          translation:
            "O Allah, inspire me with sound guidance and protect me from the evil of my self.",
          source: "Tirmidhi",
        },
        {
          title: "Protection From Misleading Trials",
          arabic:
            "اَللّٰهُمَّ رَبَّ مُحَمَّدٍ اغْفِرْ لِيْ ذَنْبِيْ ، وَأَذْهِبْ غَيْظَ قَلْبِيْ ، وَأَعِذْنِيْ مِنْ مُضِلَّاتِ الْفِتَنِ",
          translation:
            "O Allah, Lord of Muḥammad forgive my sins, remove the anger of my heart and protect me from misleading trials.",
          source: "Ibn Al-Sunni",
        },
        {
          title: "Leaving Bad Actions",
          arabic:
            "اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ فِعْلَ الْخَيْرَاتِ ، وَتَرْكَ الْمُنْكَرَاتِ ، وَحُبَّ الْمَسَاكِيْنِ ، وَأَنْ تَغْفِرَ لِيْ وَتَرْحَمَنِيْ ، وَإِذَا أَرَدْتَ فِتْنَةَ قَوْمٍ فَتَوَفَّنِيْ غَيْرَ مَفْتُوْنٍ ، وَأَسْأَلُكَ حُبَّكَ ، وَحُبَّ مَنْ يُّحِبُّكَ ، وَحُبَّ عَمَلٍ يُّقَرِّبُنِيْ إِلَىٰ حُبِّكَ",
          translation:
            "O Allah, I beg You to enable me to do good deeds, abstain from evil acts, and love the poor; and that You forgive me and have mercy upon me. When You intend to test a people, then grant me death without being tested. I ask You for Your love, the love of those whom You love, and the love of deeds which will bring me closer to Your love.",
          source: "Tirmidhi",
        },
        {
          title: "Protection from Evil Actions",
          arabic:
            "اَللّٰهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنْ شَرِّ مَا عَمِلْتُ ، وَمِنْ شَرِّ مَا لَمْ أَعْمَلْ",
          translation:
            "O Allah, I seek Your protection from the evil of what I have done, and from the evil of what I have not done.",
          source: "Sahih Al-Muslim",
        },
        {
          title: "Protection from the Evil of Body",
          arabic:
            "اَللّٰهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنْ شَرِّ سَمْعِيْ ، وَمِنْ شَرِّ بَصَرِيْ ، وَمِنْ شَرِّ لِسَانِيْ ، وَمِنْ شَرِّ قَلْبِيْ ، وَمِنْ شَرِّ مَنِيِّيْ",
          translation:
            "O Allah, I seek Your protection from the evil of my hearing, the evil of my sight, the evil of my tongue, the evil of my heart and the evil of my semen.",
          source: "Tirmidhi",
        },
        {
          title: "Protection from Evil Character, Actions & Desires",
          arabic:
            "اَللّٰهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنْ مُنْكَرَاتِ الْأَخْلَاقِ ، وَالْأَعْمَالِ ، وَالْأَهْوَاءِ",
          translation:
            "O Allah, I seek Your protection from evil character, evil actions and evil desires.",
          source: "Tirmidhi",
        },
        {
          title: "Loving Allah & What He Loves",
          arabic:
            "اَللّٰهُمَّ ارْزُقْـنِيْ حُبَّكَ ، وَحُبَّ مَنْ يَّنْفَعُنِيْ حُبُّهُ عِنْدَكَ ، اَللّٰهُمَّ مَا رَزَقْتَنِيْ مِمَّا أُحِبُّ فَاجْعَلْهُ قُوَّةً لِّيْ فِيْمَا تُحِبُّ ، اَللّٰهُمَّ مَا زَوَيْتَ عَنِّيْ مِمَّا أُحِبُّ فَاجْعَلْهُ فَرَاغًا لِّيْ فِيْمَا تُحِبُّ",
          translation:
            "O Allah, grant me Your love and the love of those whose love will benefit me with You. O Allah, whatever You have provided me of the things that I love, make them a source of strength for me in pursuing what You love. O Allah, whatever you have withheld from me from what I love, make its absence a means for me to pursue what You love.",
          source: "Tirmidhi",
        },
        {
          title: "Gain an All-Encompassing Nur (Light)",
          arabic:
            "اَللّٰهُمَّ اجْعَلْ لِيْ فِيْ قَلْبِيْ نُوْرًا ، وَفِيْ لِسَانِيْ نُوْرًا ، وَفِيْ سَمْعِيْ نُوْرًا ، وَفِيْ بَصَرِيْ نُوْرًا ، وَمِنْ فَوْقِيْ نُوْرًا ، وَمِنْ تَحْتِيْ نُوْرًا ، وَعَنْ يَّمِيْنِيْ نُوْرًا ، وَعَنْ شِمَالِيْ نُوْرًا ، وَمِنْ بَيْنِ يَدَيَّ نُوْرًا ، وَمِنْ خَلْفِيْ نُوْرًا ، وَاجْعَلْ فِيْ نَفْسِيْ نُوْرًا ، وَأَعْظِمْ لِيْ نُوْرًا",
          translation:
            "O Allah, place light in my heart, light in my tongue, light in my hearing and light in my sight. Place light above me, light beneath me, light on my right, light on my left, light in front of me, and light behind me. Place light in my self and magnify for me light.",
          source: "Sahih Al-Muslim",
        },
        {
          title: "Gain Awe of Allah",
          arabic:
            "اَللّٰهُمَّ اقْسِمْ لَنَا مِنْ خَشْيَتِكَ مَا يَحُوْلُ بِهِ بَيْنَنَا وَبَيْنَ مَعَاصِيْكَ ، وَمِنْ طَاعَتِكَ مَا تُبَلِّغُنَا بِهِ جَنَّتَكَ ، وَمِنَ الْيَقِيْنِ مَا تُهَوِّنُ بِهِ عَلَيْنَا مَصَائِبَ الدُّنْيَا ، اَللّٰهُمَّ مَتِّعْنَا بِأَسْمَاعِنَا ، وَأَبْصَارِنَا ، وَقُوَّتِنَا مَا أَحْيَيْتَنَا ، وَاجْعَلْهُ الْوَارِثَ مِنَّا ، وَاجْعَلْ ثَأْرَنَا عَلَىٰ مَنْ ظَلَمَنَا ، وَانْصُرْنَا عَلَىٰ مَنْ عَادَانَا ، وَلَا تَجْعَلْ مُصِيْبَتَنَا فِيْ دِيْنِنَا ، وَلَا تَجْعَلِ الدُّنْيَا أَكْبَرَ هَمِّنَا ، وَلَا مَبْلَغَ عِلْمِنَا ، وَلَا تُسَلِّطْ عَلَيْنَا مَنْ لَّا يَرْحَمُنَا.",
          translation:
            "O Allah, apportion for us enough fear and awe of You to prevent us from sinning against You, and enough obedience to You to make us reach Your Paradise, and enough certainty to make the difficulties of this world easy for us. O Allah, let us enjoy our hearing and sight and strength as long as You allow us to live, and make it an inheritance for us. Let our retaliation be upon those who have wronged us, and help us against those who harbour enmity towards us. Let not our afflictions be in our religion. Do not make the world our biggest concern or the full extent of our knowledge, and do not give power over us to anyone who will not have mercy on us.",
          source: "Tirmidhi",
        },
        {
          title: "Purification of the Heart",
          arabic:
            "اَللّٰهُمَّ آتِ نَفْسِيْ تَقْوَاهَا ، وَزَكِّهَا أَنْتَ خَيْرُ مَنْ زَكَّاهَا ، أَنْتَ وَلِيُّهَا وَمَوْلَاهَا ، اَللّٰهُمَّ إِنِّىْ أَعُوْذُ بِكَ مِنْ عِلْمٍ لَّا يَنْفَعُ ، وَمِنْ قَلْبٍ لَّا يَخْشَعُ ، وَمِنْ نَّفْسٍ لَّا تَشْبَعُ ، وَمِنْ دَعْوَةٍ لَّا يُسْتَجَابُ لَهَا",
          translation:
            "O Allah, grant my soul taqwā (piety) and purify it, for You are the Best of those who can purify it. You are its Protector and Master. O Allah, I seek Your protection from knowledge which does not benefit, a heart which does not submit, a soul which is not satisfied and a supplication which is not accepted.",
          source: "Sahih Al-Muslim",
        },
      ],
    },
    {
      name: "Comprehensive Duas",
      items: [
        {
          title: "The Ultimate Dua",
          arabic:
            "اَللّٰهُمَّ إِنَّا نَسْأَلُكَ مِنْ خَيْرِ مَا سَأَلَكَ مِنْهُ نَبِيُّكَ مُحَمَّدٌ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ ، وَنَعُوْذُ بِكَ مِنْ شَرِّ مَا اسْتَعَاذَ مِنْهُ نَبِيُّكَ مُحَمَّدٌ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ ، وَأَنْتَ الْمُسْتَعَانُ ، وَعَلَيْكَ الْبَلَاغُ ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ",
          translation:
            "O Allah, we beg You for the good which Your Prophet Muhammad ﷺ asked from You. We seek Your protection from the evil which Your Prophet Muhammad ﷺ sought protection for from You. You are the One whose assistance is sought and You are the Only One who provides and suffices. There is no power (to avert evil) nor strength (to do good) except by Allah.",
          source: "Tirmidhi",
        },
        {
          title: "The Best Dua",
          arabic:
            "اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ خَيْرَ الْمَسْأَلَةِ ، وَخَيْرَ الدُّعَاءِ ، وَخَيْرَ النَّجَاحِ ، وَخَيْرَ الْعَمَلِ ، وَخَيْرَ الثَّوَابِ ، وَخَيْرَ الْحَيَاةِ ، وَخَيْرَ الْمَمَاتِ ، وَثَبِّتْنِيْ ، وَثَقِّلْ مَوَازِيْنِيْ ، وَحَقِّقْ إِيْمَانِيْ ، وَارْفَعْ دَرَجَاتِيْ ، وَتَقَبَّلْ صَلَاتِيْ ، وَاغْفِرْ خَطِيْئَتِيْ ، وَأَسْأَلُكَ الدَّرَجَاتِ الْعُلَا مِنَ الْجَنَّةِ ، اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ فَوَاتِحَ الْخَيْرِ ، وَخَوَاتِمَهُ ، وَجَوَامِعَهُ ، وَأَوَّلَهُ ، وَظَاهِرَهُ ، وَبَاطِنَهُ ، وَالدَّرَجَاتِ الْعُلَا مِنَ الْجَنَّةِ آمِيْن ، اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ خَيْرَ مَا آتِيْ ، وَخَيْرَ مَا أَفْعَلُ ، وَخَيْرَ مَا أَعْمَلُ ، وَخَيْرَ مَا بَطَنَ ، وَخَيْرَ مَا ظَهَرَ ، وَالدَّرَجَاتِ الْعُلَا مِنَ الْجَنَّةِ آمِيْن ، اَللّٰهُمَّ إنِّيْ أَسْأَلُكَ أنْ تَرْفَعَ ذِكْرِيْ ، وَتَضَعَ وِزْرِيْ ، وَتُصْلِحَ أَمْرِيْ ، وَتُطَهِّرَ قَلْبِيْ ، وَتُحَصِّنَ فَرْجِيْ ، وَتُنَوِّرَ لِيْ قَلْبِيْ ، وَتَغْفِرَ لِيْ ذَنْبِيْ ، وَأَسْأَلُكَ الدَّرَجَاتِ الْعُلَا مِنَ الْجَنَّةِ آمِيْن ، اَللّٰهُمَّ إنِّيْ أَسْأَلُكَ أنْ تُبَارِكَ لِيْ فِيْ نَفْسِيْ ، وَفِيْ سَمْعِيْ ، وَفِيْ بَصَرِيْ ، وَفِيْ رُوْحِيْ ، وَفِيْ خَلْقِيْ ، وَفِيْ خُلُقِيْ ، وَفِيْ أَهْلِيْ ، وَفِيْ مَحْيَايَ ، وَفِيْ مَمَاتِيْ ، وَفِيْ عَمَلِيْ ، فَتَقَبَّلْ حَسَنَاتِيْ ، وَأَسْأَلُكَ الدَّرَجَاتِ الْعُلَا مِنَ الْجَنَّةِ ، آمِيْن",
          translation:
            "O Allah, I beg You for the best of what can be asked for, the best supplication, the ultimate success, the best deeds, the best reward, the best life, and the best death. Keep me steadfast, make my scales heavy, establish my belief, elevate my ranks, accept my salāh, forgive my sins and I ask You for lofty ranks in Paradise. O Allah, I beg you for good beginnings, good endings, good in its entirety, its first, its apparent and its hidden; and lofty ranks in Paradise. Āmīn. O Allah, I beg you for the best of what I can do, perform and accomplish, the best of what is hidden or apparent; and lofty ranks in Paradise. Āmīn. O Allah, I beg you to elevate my mention, remove my burden, rectify my affairs, purify my heart, protect my chastity, enlighten my heart, forgive my sins and I ask You for lofty ranks in Paradise. Āmīn. O Allah, I beg you to bless for me my inner self, my hearing, my sight, my soul, my appearance, my character, my family, my life, my death and my deeds. Accept my good deeds and I ask You for lofty ranks in Paradise. Āmīn.",
          source: "Hakim",
        },
        {
          title: "Darkness to Light",
          arabic:
            "اَللّٰهُمَّ أَلِّفْ بَيْنَ قُلُوْبِنَا ، وَأَصْلِحْ ذَاتَ بَيْنِنَا ، وَاهْدِنَا سُبُلَ السَّلَامِ ، وَنَجِّنَا مِنَ الظُّلُمَاتِ إِلَى النُّوْرِ ، وَجَنِّبْنَا الْفَوَاحِشَ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ ، وَبَارِكْ لَنَا فِيْ أَسْمَاعِنَا ، وَأَبْصَارِنَا ، وَقُلُوْبِنَا ، وَأَزْوَاجِنَا ، وَذُرِّيَّاتِنَا ، وَتُبْ عَلَيْنَا إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيْمُ ، وَاجْعَلْنَا شَاكِرِيْنَ لِنِعَمِكَ مُثْنِيْنَ بِهَا عَلَيْكَ ، قَابِلِيْنَ لَهَا ، وَأَتِمِمْهَا عَلَيْنَا",
          translation:
            "O Allah, unite our hearts, set aright our relationships, and guide us to the paths of peace. Bring us out of darknesses into light and protect us from evident and hidden obscenities. Bless us in our hearing, our sight, our hearts, our spouses and our children. Accept our repentance. Indeed, You truly are the Acceptor of repentance, the Ever-Merciful. Make us of those who are grateful for Your blessings, who praise You for them and acknowledge them. Perfect (the blessings) and make them last forever for us.",
          source: "Hakim",
        },
        {
          title: "Attainment of Every Good",
          arabic:
            "اَللّٰهُمَّ إِنَّا نَسْأَلُكَ مُوْجِبَاتِ رَحْمَتِكَ ، وَعَزَائِمَ مَغْفِرَتِكَ ، وَالسَّلَامَةَ مِنْ كُلِّ إِثْمٍ ، وَالْغَنِِيْمَةَ مِنْ كُلِّ بِرٍّ ، وَالْفَوْزَ بِالْجَنَّةِ ، وَالنَّجَاةَ مِنَ النَّارِ",
          translation:
            "O Allah, we beg You for all that which will necessitate Your mercy and the determination to do all that which will necessitate Your forgiveness; for protection from every sin and accomplishment of every good; for attainment of Paradise and for freedom from Hell-fire.",
          source: "Hakim",
        },
        {
          title: "The Prophet’s Comprehensive Duʿa After the Battle of Uhud",
          arabic:
            "اَللّٰهُمَّ ابْسُطْ عَلَيْنَا مِنْ بَرَكَاتِكَ وَرَحْمَتِكَ وَفَضْلِكَ وَرِزْقِكَ ، اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ النَّعِيْمَ الْمُقِيْمَ الَّذِيْ لَا يَحُوْلُ وَلَا يَزُوْلُ ، اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ النَّعِيْمَ يَوْمَ الْعَيْلَةِ ، وَالْأَمْنَ يَوْمَ الْخَوْفِ ، اَللّٰهُمَّ إِنِّيْ عَائِذٌ بِكَ مِنْ شَرِّ مَا أَعْطَيْتَنَا وَشَرِّ مَا مَنَعْتَنَا ، اَللّٰهُمَّ حَبِّبْ إِلَيْنَا الْإِيْمَانَ وَزَيِّنْهُ فِيْ قُلُوْبِنَا ، وَكَرِّهْ إِلَيْنَا الْكُفْرَ وَالْفُسُوْقَ وَالْعِصْيَانَ ، وَاجْعَلْنَا مِنَ الرَّاشِدِيْنَ ، اَللّٰهُمَّ تَوَفَّنَا مُسْلِمِيْنَ ، وَأَحْيِنَا مُسْلِمِيْنَ ، وَأَلْحِقْنَا بِالصَّالِحِيْنَ ، غَيْرَ خَزَايَا وَلَا مَفْتُوْنِيْنَ ، اَللّٰهُمَّ قَاتِلِ الْكَفَرَةَ الَّذِيْنَ يُكَذِّبُوْنَ رُسُلَكَ ، وَيَصُدُّوْنَ عَنْ سَبِيْلِكَ ، وَاجْعَلْ عَلَيْهِمْ رِجْزَكَ وَعَذَابَكَ ، اَللّٰهُمَّ قَاتِلِ الْكَفَرَةَ الَّذِيْنَ أُوْتُوا الْكِتَابَ ، إِلٰهَ الْحَقِّ",
          translation:
            "O Allah, grant us Your blessings, Your mercy, Your grace and Your sustenance in abundance. O Allah, I beg you for eternal blessings which do not change nor disappear. O Allah, I beg you for blessings on the day of intense need and safety on the day of fear (i.e. Day of Judgement). O Allah, I seek Your protection from the evil of what You have granted us and the evil of what You have withheld from us. O Allah, endear faith to us and beautify it in our hearts. Make disbelief, sins and disobedience hateful to us, and make us of the rightly guided ones. O Allah, grant us death as Muslims, make us live as Muslims and join us with the righteous without being humiliated or tested. O Allah, fight the disbelievers who reject Your Messengers and avert from Your path. Inflict upon them Your punishment and vengeance. O Allah, fight the disbelievers who were given the Book, O the True God.",
          source: "Ahmad",
        },
        {
          title: "Good Characteristics",
          arabic:
            "رَبِّ أَعِنِّيْ وَلَا تُعِنْ عَلَيَّ ، وَانْصُرْنِيْ وَلَا تَنْصُرْ عَلَيَّ ، وَامْكُرْ لِيْ وَلَا تَمْكُرْ عَلَيَّ ، وَاهْدِنِيْ وَيَسِّرِ الْهُدَىٰ لِيْ ، وَانْصُرْنِيْ عَلَىٰ مَنْ بَغَىٰ عَلَيَّ ، رَبِّ اجْعَلْنِيْ لَكَ شَكَّارًا ، لَكَ ذَكَّارًا ، لَكَ رَهَّابًا ، لَكَ مِطْوَاعًا ، لَكَ مُخْبِتًا ، إِلَيْكَ أَوَّاهًا مُّنِيْبًا ، رَبِّ تَقَبَّلْ تَوْبَتِيْ ، وَاغْسِلْ حَوْبَتِيْ ، وَأَجِبْ دَعْوَتِيْ ، وَثَبِّتْ حُجَّتِيْ ، وَسَدِّدْ لِسَانِيْ ، وَاهْدِ قَلْبِيْ ، وَاسْلُلْ سَخِيْمَةَ صَدْرِيْ",
          translation:
            "My Lord, help me and do not help others against me. Grant me victory and do not grant victory to others over me. Plan in my favour and do not plan for others against me. Guide me and ease guidance for me. Help me against those who oppress me. My Lord, make me one who is extremely grateful to You, who remembers you always, who perpetually fears You, who is fully obedient to You, who is humble before You, who constantly cries and pleads with You, and who repeatedly turns to You in repentance. My Lord, accept my repentance, wash away my sins, accept my supplications, strengthen my case, rectify my speech, guide my heart, and remove the malice from my heart.",
          source: "Tirmidhi",
        },
      ],
    },
    {
      name: "Light & Beautiful Duas",
      items: [
        {
          title: "Asking for Jannah al-Firdaws",
          arabic:
            "اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ الْفِرْدَوْسَ أَعْلَى الْجَنَّةِ",
          translation:
            "O Allah, I beg you for al-Firdaws, the loftiest abode of Paradise.",
          source: "Sahih Al-Bukhari",
        },
        {
          title: "The Prophet’s Company in Paradise",
          arabic:
            "اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ إِيْمَانًا لَّا يَرْتَدُّ ، وَنَعِيْمًا لَّا يَنْفَدُ ، وَمُرَافَقَةَ نَبِيِّنَا مُحَمَّدٍ فِيْ أَعْلَىٰ جَنَّةِ الْخُلْدِ",
          translation:
            "O Allah, I beg you for faith which does not waver, blessings which do not cease, and the company of our Prophet Muhammad ﷺ in the loftiest abode of the Eternal Garden.",
          source: "Ahmad",
        },
        {
          title: "Best of What the Righteous are Granted",
          arabic:
            "اَللّٰهُمَّ آتِنِيْ أَفْضَلَ مَا تُؤْتِيْ عِبَادَكَ الصَّالِحِيْنَ",
          translation:
            "O Allah, grant me the best of what You grant Your righteous slaves.",
          source: "Ibn Hibban",
        },
        {
          title: "A Pure Life",
          arabic:
            "اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ عِيْشَةً نَّقِيَّةً ، وَمِيْتَةً سَوِيَّةً ، وَمَرَدًّا غَيْرَ مُخْزٍ وَّلَا فَاضِحٍ",
          translation:
            "O Allah, I beg you for a pure life, a good death, and a return (to You) which is neither humiliating nor disgraceful.",
          source: "Tabarani",
        },
        {
          title: "Beneficial Knowledge, Pure Sustenance & Accepted Deeds",
          arabic:
            "اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ عِلْمًا نَّافِعًا ، وَرِزْقًا طَيِّبًا ، وَعَمَلًا مُّتَقَبَّلًا",
          translation:
            "O Allah, I ask You for beneficial knowledge, wholesome sustenance, and deeds which are accepted.",
          source: "Ibn Majah",
        },
        {
          title: "Sincerity in Actions",
          arabic:
            "اَللّٰهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنْ عِلْمٍ لَّا يَنْفَعُ ، وَعَمَلٍ لَّا يُرْفَعُ ، وَقَلْبٍ لَّا يَخْشَعُ ، وَقَوْلٍ لَّا يُسْمَعُ",
          translation:
            "O Allah, I seek Your protection from knowledge which does not benefit, actions which are not raised (to You), a heart which does not humble itself (in Your awe), and an utterance which is not accepted.",
          source: "Ahmad",
        },
        {
          title: "Sufficiency from Allah",
          arabic:
            "اَللّٰهُمَّ اكْفِنِيْ بِحَلَالِكَ عَنْ حَرَامِكَ ، وَأَغْنِنِيْ بِفَضْلِكَ عَمَّنْ سِوَاكَ",
          translation:
            "O Allah, suffice me with Your lawful against Your prohibited, and make me independent of all those besides You.",
          source: "Tirmidhi",
        },
        {
          title: "Contentment with Decree",
          arabic:
            "اَللّٰهُمَّ قَنِّعْنِيْ بِمَا رَزَقْتَنِيْ ، وَبَارِكْ لِيْ فِيْهِ ، وَاخْلُفْ عَلَيٰ كُلِّ غَائِبَةٍ لِّيْ بِخَيْرٍ",
          translation:
            "O Allah, make me content with what You have granted me, bless me in it and be a protector for me in that which is absent from me (i.e. family and wealth).",
          source: "Hakim",
        },
        {
          title: "Honour & Pleasure of Allah",
          arabic:
            "اَللّٰهُمَّ زِدْنَا وَلَا تَنْقُصْنَا ، وَأَكْرِمْنَا وَلَا تُهِنَّا ، وَأَعْطِنَا وَلَا تَحْرِمْنَا ، وَآثِرْنَا وَلَا تُؤْثِرْ عَلَيْنَا ، وَأَرْضِنَا وَارْضَ عَنَّا",
          translation:
            "O Allah, grant us more and not less. Honour us and do not disgrace us. Grant us and do not deprive us. Favour us and do not favour others over us. Make us pleased with You and be pleased with us.",
          source: "Tirmidhi",
        },
      ],
    },
  ]

  export const aamaalList = [
    {
      title: "Salah al-Haajah",
      description: "A prayer that guarantees that Allah will take care of your needs and worries. Pray a normal 2 or 4 Rakat Nafl prayer, praise Allah, send Salawaat, and then make wholehearted Dua with the following:",
      content: haajah,
      source: {
        text: haajahSource,
        type: "html"
      },
      icon: faHandsHolding
    },
    {
      title: "Salah al-Tasbih",
      description: "A powerful prayer that includes reciting a special tasbih 75 times in each rak'ah, totaling 300 times in 4 raka'ats.",
      content: salahAlTasbihString,
      instructions: "Read with conviction, concentration, and consistency.",
      source: {
        text: tasbihSource,
        type: "html"
      },
      icon: faPersonPraying
    },
    {
      title: "The 7's",
      description: sevensDescription,
      steps: [
        "7x Salawaat",
        "7x Surah Fatiha", 
        "7x Ayat-ul-Kursi",
        "7x Surah Quraish",
        "7x Surah Kafiroon",
        "7x Surah Ikhlas",
        "7x Surah Falaq",
        "7x Surah Naas",
        "7x Salawaat"
      ],
      instructions: "Read with conviction, concentration, and consistency.",
      icon: faBottleWater,
      source: "This is a Mujarrab Amal, meaning it is something some people have tried and they have found that it works well for them. It is said to help with spiritual problems and to rid one of negative influences."
    },
    {
      title: "Surah Kawthar Nafl Prayer",
      description: "Pray a 2 Rakat Nafl prayer before Witr, in which you recite the following:",
      steps: [
        "First Rakat: Recite Surah Kawthar 41 times after Surah Fatiha",
        "Second Rakat: Recite Surah Kawthar 40 times after Surah Fatiha"
      ],
      instructions: "Read with conviction, concentration, and consistency.",
      icon: faMoon,
      source: "This is a Mujarrab Amal, meaning it is something some people have tried and they have found that it works well for them. It is said to help with any type of spiritual or worldly problem."
    }
  ];