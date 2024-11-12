const verses = {
    Frustrated: [
        { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", title: "Psalm 34:18" },
        { text: "Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken.", title: "Psalm 55:22" },
        { text: "Come to me, all you who are weary and burdened, and I will give you rest.", title: "Matthew 11:28" },
        { text: "Be still before the Lord and wait patiently for him; do not fret when people succeed in their ways, when they carry out their wicked schemes.", title: "Psalm 37:7" },
        { text: "Do not be quickly provoked in your spirit, for anger resides in the lap of fools.", title: "Ecclesiastes 7:9" },
        { text: "The righteous cry out, and the Lord hears them; he delivers them from all their troubles.", title: "Psalm 34:17" },
        { text: "Do not let your hearts be troubled. You believe in God; believe also in me.", title: "John 14:1" },
        { text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.", title: "Proverbs 3:5-6" },
        { text: "I can do all this through him who gives me strength.", title: "Philippians 4:13" },
        { text: "Cast all your anxiety on him because he cares for you.", title: "1 Peter 5:7" },
        { text: "I sought the Lord, and he answered me; he delivered me from all my fears.", title: "Psalm 34:4" },
        { text: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you.", title: "Isaiah 43:2" },
        { text: "My grace is sufficient for you, for my power is made perfect in weakness.", title: "2 Corinthians 12:9" },
        { text: "The Lord is a refuge for the oppressed, a stronghold in times of trouble.", title: "Psalm 9:9" },
        { text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", title: "Isaiah 40:31" },
        { text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.", title: "Philippians 4:6" },
        { text: "In this world you will have trouble. But take heart! I have overcome the world.", title: "John 16:33" },
        { text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.", title: "Jeremiah 29:11" },
        { text: "The Lord gives strength to his people; the Lord blesses his people with peace.", title: "Psalm 29:11" },
        { text: "The Lord is my rock, my fortress, and my deliverer; my God is my rock, in whom I take refuge.", title: "Psalm 18:2" },
        { text: "The Lord is good, a refuge in times of trouble. He cares for those who trust in him.", title: "Nahum 1:7" },
        { text: "He heals the brokenhearted and binds up their wounds.", title: "Psalm 147:3" },
        { text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.", title: "Isaiah 26:3" },
        { text: "God is our refuge and strength, an ever-present help in trouble.", title: "Psalm 46:1" },
        { text: "The Lord will fight for you; you need only to be still.", title: "Exodus 14:14" },
        { text: "Come near to God and he will come near to you.", title: "James 4:8" },
        { text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.", title: "John 14:27" },
        { text: "I have told you these things, so that in me you may have peace.", title: "John 16:33" },
        { text: "Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort.", title: "2 Corinthians 1:3" },
        { text: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.", title: "Psalm 28:7" }
    ],
    Troubled: [
        { text: "Do not let your hearts be troubled. You believe in God; believe also in me.", title: "John 14:1" },
        { text: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you.", title: "Isaiah 43:2" },
        { text: "God is our refuge and strength, an ever-present help in trouble.", title: "Psalm 46:1" },
        { text: "In this world you will have trouble. But take heart! I have overcome the world.", title: "John 16:33" },
        { text: "The Lord will fight for you; you need only to be still.", title: "Exodus 14:14" },
        { text: "Though I walk in the midst of trouble, you preserve my life. You stretch out your hand against the anger of my foes; with your right hand you save me.", title: "Psalm 138:7" },
        { text: "The Lord is a refuge for the oppressed, a stronghold in times of trouble.", title: "Psalm 9:9" },
        { text: "I sought the Lord, and he answered me; he delivered me from all my fears.", title: "Psalm 34:4" },
        { text: "Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken.", title: "Psalm 55:22" },
        { text: "Come to me, all you who are weary and burdened, and I will give you rest.", title: "Matthew 11:28" },
        { text: "When anxiety was great within me, your consolation brought me joy.", title: "Psalm 94:19" },
        { text: "Cast all your anxiety on him because he cares for you.", title: "1 Peter 5:7" },
        { text: "The righteous cry out, and the Lord hears them; he delivers them from all their troubles.", title: "Psalm 34:17" },
        { text: "He will cover you with his feathers, and under his wings you will find refuge; his faithfulness will be your shield and rampart.", title: "Psalm 91:4" },
        { text: "The Lord is near to all who call on him, to all who call on him in truth.", title: "Psalm 145:18" },
        { text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.", title: "Jeremiah 29:11" },
        { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", title: "Psalm 34:18" },
        { text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.", title: "John 14:27" },
        { text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", title: "Isaiah 40:31" },
        { text: "The Lord is good, a refuge in times of trouble. He cares for those who trust in him.", title: "Nahum 1:7" },
        { text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.", title: "Isaiah 26:3" },
        { text: "Trust in the Lord with all your heart and lean not on your own understanding.", title: "Proverbs 3:5" },
        { text: "Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort.", title: "2 Corinthians 1:3" },
        { text: "The Lord is my rock, my fortress, and my deliverer; my God is my rock, in whom I take refuge.", title: "Psalm 18:2" },
        { text: "I lift up my eyes to the mountains—where does my help come from? My help comes from the Lord, the Maker of heaven and earth.", title: "Psalm 121:1-2" },
        { text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.", title: "Psalm 23:4" },
        { text: "For we live by faith, not by sight.", title: "2 Corinthians 5:7" },
        { text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", title: "Joshua 1:9" },
        { text: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", title: "Proverbs 18:10" },
        { text: "My flesh and my heart may fail, but God is the strength of my heart and my portion forever.", title: "Psalm 73:26" }
    ],
    Anxious: [
        { text: "Cast all your anxiety on him because he cares for you.", title: "1 Peter 5:7" },
        { text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.", title: "Philippians 4:6" },
        { text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.", title: "John 14:27" },
        { text: "When anxiety was great within me, your consolation brought me joy.", title: "Psalm 94:19" },
        { text: "Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes?", title: "Matthew 6:25" },
        { text: "Who of you by worrying can add a single hour to your life?", title: "Matthew 6:27" },
        { text: "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?", title: "Psalm 27:1" },
        { text: "So do not worry, saying, ‘What shall we eat?’ or ‘What shall we drink?’ or ‘What shall we wear?’", title: "Matthew 6:31" },
        { text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.", title: "Proverbs 3:5-6" },
        { text: "Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken.", title: "Psalm 55:22" },
        { text: "Come to me, all you who are weary and burdened, and I will give you rest.", title: "Matthew 11:28" },
        { text: "Do not let your hearts be troubled. You believe in God; believe also in me.", title: "John 14:1" },
        { text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", title: "Isaiah 40:31" },
        { text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.", title: "Jeremiah 29:11" },
        { text: "The Lord gives strength to his people; the Lord blesses his people with peace.", title: "Psalm 29:11" },
        { text: "I sought the Lord, and he answered me; he delivered me from all my fears.", title: "Psalm 34:4" },
        { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", title: "Psalm 34:18" },
        { text: "The Lord is a refuge for the oppressed, a stronghold in times of trouble.", title: "Psalm 9:9" },
        { text: "Be still, and know that I am God.", title: "Psalm 46:10" },
        { text: "So we say with confidence, 'The Lord is my helper; I will not be afraid. What can mere mortals do to me?'", title: "Hebrews 13:6" },
        { text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.", title: "Psalm 23:4" },
        { text: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.", title: "Matthew 6:34" },
        { text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.", title: "Isaiah 26:3" },
        { text: "God is our refuge and strength, an ever-present help in trouble.", title: "Psalm 46:1" },
        { text: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", title: "Proverbs 18:10" },
        { text: "The Lord is good, a refuge in times of trouble. He cares for those who trust in him.", title: "Nahum 1:7" },
        { text: "Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful.", title: "Colossians 3:15" },
        { text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", title: "Joshua 1:9" },
        { text: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.", title: "Psalm 28:7" },
        { text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.", title: "2 Timothy 1:7" }
    ],
    Sad: [
        { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", title: "Psalm 34:18" },
        { text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.", title: "Revelation 21:4" },
        { text: "Blessed are those who mourn, for they will be comforted.", title: "Matthew 5:4" },
        { text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.", title: "Psalm 23:4" },
        { text: "Come to me, all you who are weary and burdened, and I will give you rest.", title: "Matthew 11:28" },
        { text: "Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken.", title: "Psalm 55:22" },
        { text: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.", title: "Psalm 28:7" },
        { text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God.", title: "Romans 8:38-39" },
        { text: "Weeping may stay for the night, but rejoicing comes in the morning.", title: "Psalm 30:5" },
        { text: "I lift up my eyes to the mountains—where does my help come from? My help comes from the Lord, the Maker of heaven and earth.", title: "Psalm 121:1-2" },
        { text: "My flesh and my heart may fail, but God is the strength of my heart and my portion forever.", title: "Psalm 73:26" },
        { text: "The Lord is a refuge for the oppressed, a stronghold in times of trouble.", title: "Psalm 9:9" },
        { text: "He heals the brokenhearted and binds up their wounds.", title: "Psalm 147:3" },
        { text: "Cast all your anxiety on him because he cares for you.", title: "1 Peter 5:7" },
        { text: "Though I sit in darkness, the Lord will be my light.", title: "Micah 7:8" },
        { text: "For his anger lasts only a moment, but his favor lasts a lifetime; weeping may stay for the night, but rejoicing comes in the morning.", title: "Psalm 30:5" },
        { text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.", title: "Isaiah 41:10" },
        { text: "When the righteous cry for help, the Lord hears and delivers them out of all their troubles.", title: "Psalm 34:17" },
        { text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.", title: "Jeremiah 29:11" },
        { text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.", title: "John 14:27" },
        { text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", title: "Isaiah 40:31" },
        { text: "The Lord is near to all who call on him, to all who call on him in truth.", title: "Psalm 145:18" },
        { text: "I sought the Lord, and he answered me; he delivered me from all my fears.", title: "Psalm 34:4" },
        { text: "The Lord is my rock, my fortress, and my deliverer; my God is my rock, in whom I take refuge.", title: "Psalm 18:2" },
        { text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.", title: "Isaiah 26:3" },
        { text: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", title: "Proverbs 18:10" },
        { text: "The Lord is good, a refuge in times of trouble. He cares for those who trust in him.", title: "Nahum 1:7" },
        { text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", title: "Joshua 1:9" },
        { text: "Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort.", title: "2 Corinthians 1:3" },
        { text: "The righteous cry out, and the Lord hears them; he delivers them from all their troubles.", title: "Psalm 34:17" }
    ],
    Happy: [
        { text: "This is the day that the Lord has made; let us rejoice and be glad in it.", title: "Psalm 118:24" },
        { text: "The joy of the Lord is your strength.", title: "Nehemiah 8:10" },
        { text: "Rejoice in the Lord always. I will say it again: Rejoice!", title: "Philippians 4:4" },
        { text: "You make known to me the path of life; in your presence there is fullness of joy; at your right hand are pleasures forevermore.", title: "Psalm 16:11" },
        { text: "A cheerful heart is good medicine, but a crushed spirit dries up the bones.", title: "Proverbs 17:22" },
        { text: "Rejoice with those who rejoice; mourn with those who mourn.", title: "Romans 12:15" },
        { text: "I have told you this so that my joy may be in you and that your joy may be complete.", title: "John 15:11" },
        { text: "Be joyful in hope, patient in affliction, faithful in prayer.", title: "Romans 12:12" },
        { text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.", title: "Galatians 6:9" },
        { text: "Shout for joy to the Lord, all the earth. Worship the Lord with gladness; come before him with joyful songs.", title: "Psalm 100:1-2" },
        { text: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.", title: "Romans 15:13" },
        { text: "For the Lord takes delight in his people; he crowns the humble with victory.", title: "Psalm 149:4" },
        { text: "The Lord has done great things for us, and we are filled with joy.", title: "Psalm 126:3" },
        { text: "My lips will shout for joy when I sing praise to you— I whom you have delivered.", title: "Psalm 71:23" },
        { text: "I delight greatly in the Lord; my soul rejoices in my God. For he has clothed me with garments of salvation and arrayed me in a robe of his righteousness.", title: "Isaiah 61:10" },
        { text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness.", title: "Galatians 5:22" },
        { text: "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.", title: "Zephaniah 3:17" },
        { text: "Be glad in the Lord and rejoice, O righteous, and shout for joy, all you upright in heart!", title: "Psalm 32:11" },
        { text: "I will be glad and rejoice in you; I will sing the praises of your name, O Most High.", title: "Psalm 9:2" },
        { text: "Rejoice in the Lord and be glad, you righteous; sing, all you who are upright in heart!", title: "Psalm 32:11" },
        { text: "A person finds joy in giving an apt reply— and how good is a timely word!", title: "Proverbs 15:23" },
        { text: "For the Lord will comfort Zion; he will comfort all her waste places, and will make her wilderness like Eden, her desert like the garden of the Lord; joy and gladness will be found in her, thanksgiving and the voice of song.", title: "Isaiah 51:3" },
        { text: "Light is sown for the righteous, and joy for the upright in heart.", title: "Psalm 97:11" },
        { text: "For his anger is but for a moment, and his favor is for a lifetime. Weeping may tarry for the night, but joy comes with the morning.", title: "Psalm 30:5" },
        { text: "Delight yourself in the Lord, and he will give you the desires of your heart.", title: "Psalm 37:4" },
        { text: "Those who sow with tears will reap with songs of joy.", title: "Psalm 126:5" },
        { text: "Rejoice in the Lord and be glad, you righteous; sing, all you who are upright in heart!", title: "Psalm 32:11" },
        { text: "I will praise you, Lord, among the nations; I will sing of you among the peoples.", title: "Psalm 57:9" },
        { text: "The kingdom of heaven is like treasure hidden in a field. When a man found it, he hid it again, and then in his joy went and sold all he had and bought that field.", title: "Matthew 13:44" },
        { text: "A generous person will prosper; whoever refreshes others will be refreshed.", title: "Proverbs 11:25" }
    ],
    Grateful: [
        { text: "Give thanks to the Lord, for he is good; his love endures forever.", title: "Psalm 107:1" },
        { text: "I will give thanks to you, Lord, with all my heart; I will tell of all your wonderful deeds.", title: "Psalm 9:1" },
        { text: "And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him.", title: "Colossians 3:17" },
        { text: "Let them give thanks to the Lord for his unfailing love and his wonderful deeds for mankind.", title: "Psalm 107:8" },
        { text: "Give thanks in all circumstances; for this is God’s will for you in Christ Jesus.", title: "1 Thessalonians 5:18" },
        { text: "Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name.", title: "Psalm 100:4" },
        { text: "I will praise God’s name in song and glorify him with thanksgiving.", title: "Psalm 69:30" },
        { text: "I always thank my God for you because of his grace given you in Christ Jesus.", title: "1 Corinthians 1:4" },
        { text: "Thanks be to God for his indescribable gift!", title: "2 Corinthians 9:15" },
        { text: "The Lord is my strength and my shield; my heart trusts in him, and he helps me. My heart leaps for joy, and with my song I praise him.", title: "Psalm 28:7" },
        { text: "Praise the Lord. Give thanks to the Lord, for he is good; his love endures forever.", title: "Psalm 106:1" },
        { text: "Give thanks to the Lord, call on his name; make known among the nations what he has done.", title: "1 Chronicles 16:8" },
        { text: "Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful.", title: "Colossians 3:15" },
        { text: "I thank Christ Jesus our Lord, who has given me strength, that he considered me trustworthy, appointing me to his service.", title: "1 Timothy 1:12" },
        { text: "I will give thanks to the Lord because of his righteousness; I will sing the praises of the name of the Lord Most High.", title: "Psalm 7:17" },
        { text: "You are my God, and I will praise you; you are my God, and I will exalt you.", title: "Psalm 118:28" },
        { text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.", title: "Philippians 4:6" },
        { text: "I will extol the Lord at all times; his praise will always be on my lips.", title: "Psalm 34:1" },
        { text: "I will give you thanks in the great assembly; among the throngs I will praise you.", title: "Psalm 35:18" },
        { text: "Let us come before him with thanksgiving and extol him with music and song.", title: "Psalm 95:2" },
        { text: "Let the message of Christ dwell among you richly as you teach and admonish one another with all wisdom through psalms, hymns, and songs from the Spirit, singing to God with gratitude in your hearts.", title: "Colossians 3:16" },
        { text: "But thanks be to God! He gives us the victory through our Lord Jesus Christ.", title: "1 Corinthians 15:57" },
        { text: "I will give thanks to the Lord with my whole heart; I will recount all of your wonderful deeds.", title: "Psalm 9:1" },
        { text: "Oh give thanks to the Lord; call upon his name; make known his deeds among the peoples!", title: "Psalm 105:1" },
        { text: "Let them give thanks to the Lord for his unfailing love and his wonderful deeds for mankind.", title: "Psalm 107:15" },
        { text: "Bless the Lord, O my soul, and forget not all his benefits.", title: "Psalm 103:2" },
        { text: "For everything God created is good, and nothing is to be rejected if it is received with thanksgiving.", title: "1 Timothy 4:4" },
        { text: "The Lord is good to all; he has compassion on all he has made.", title: "Psalm 145:9" },
        { text: "Sing to the Lord with grateful praise; make music to our God on the harp.", title: "Psalm 147:7" },
        { text: "Give thanks to the God of heaven, for his steadfast love endures forever.", title: "Psalm 136:26" }
    ],
    Faith: [
        { text: "Now faith is confidence in what we hope for and assurance about what we do not see.", title: "Hebrews 11:1" },
        { text: "For we live by faith, not by sight.", title: "2 Corinthians 5:7" },
        { text: "And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him.", title: "Hebrews 11:6" },
        { text: "Jesus replied, 'Because you have so little faith. Truly I tell you, if you have faith as small as a mustard seed, you can say to this mountain, “Move from here to there,” and it will move. Nothing will be impossible for you.'", title: "Matthew 17:20" },
        { text: "For we walk by faith, not by sight.", title: "2 Corinthians 5:7" },
        { text: "I have fought the good fight, I have finished the race, I have kept the faith.", title: "2 Timothy 4:7" },
        { text: "The Lord is my shepherd; I lack nothing.", title: "Psalm 23:1" },
        { text: "Faith comes from hearing the message, and the message is heard through the word of Christ.", title: "Romans 10:17" },
        { text: "And Jesus said to him, 'If you can? Everything is possible for one who believes.'", title: "Mark 9:23" },
        { text: "But the one who stands firm to the end will be saved.", title: "Matthew 24:13" },
        { text: "But when you ask, you must believe and not doubt, because the one who doubts is like a wave of the sea, blown and tossed by the wind.", title: "James 1:6" },
        { text: "But the righteous will live by faith.", title: "Romans 1:17" },
        { text: "For nothing will be impossible with God.", title: "Luke 1:37" },
        { text: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.", title: "Jeremiah 29:11" },
        { text: "Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ.", title: "Romans 5:1" },
        { text: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God.", title: "Ephesians 2:8" },
        { text: "Now faith is confidence in what we hope for and assurance about what we do not see.", title: "Hebrews 11:1" },
        { text: "I can do all this through him who gives me strength.", title: "Philippians 4:13" },
        { text: "If you have faith as small as a mustard seed, you can say to this mountain, 'Move from here to there,' and it will move. Nothing will be impossible for you.", title: "Matthew 17:20" },
        { text: "So faith comes from hearing, and hearing through the word of Christ.", title: "Romans 10:17" },
        { text: "For we live by faith, not by sight.", title: "2 Corinthians 5:7" },
        { text: "For the word of the Lord is right and true; he is faithful in all he does.", title: "Psalm 33:4" },
        { text: "And Jesus said to him, 'If you can? Everything is possible for one who believes.'", title: "Mark 9:23" },
        { text: "For the Lord is faithful to all his promises and loving toward all he has made.", title: "Psalm 145:13" },
        { text: "The one who calls you is faithful, and he will do it.", title: "1 Thessalonians 5:24" },
        { text: "But the Lord is faithful, and he will strengthen you and protect you from the evil one.", title: "2 Thessalonians 3:3" },
        { text: "So let us come boldly to the throne of our gracious God. There we will receive his mercy, and we will find grace to help us when we need it most.", title: "Hebrews 4:16" },
        { text: "You are my hiding place; you will protect me from trouble and surround me with songs of deliverance.", title: "Psalm 32:7" },
        { text: "Do not let your hearts be troubled. You believe in God; believe also in me.", title: "John 14:1" },
        { text: "Cast all your anxiety on him because he cares for you.", title: "1 Peter 5:7" }
    ],
    Temptation: [
        { text: "No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can endure it.", title: "1 Corinthians 10:13" },
        { text: "The Lord knows how to rescue the godly from trials and to hold the unrighteous for punishment on the day of judgment.", title: "2 Peter 2:9" },
        { text: "Submit yourselves, then, to God. Resist the devil, and he will flee from you.", title: "James 4:7" },
        { text: "Watch and pray so that you will not fall into temptation. The spirit is willing, but the flesh is weak.", title: "Matthew 26:41" },
        { text: "For we do not have a high priest who is unable to empathize with our weaknesses, but we have one who has been tempted in every way, just as we are—yet he did not sin.", title: "Hebrews 4:15" },
        { text: "Blessed is the one who perseveres under trial because, having stood the test, that person will receive the crown of life that the Lord has promised to those who love him.", title: "James 1:12" },
        { text: "And lead us not into temptation, but deliver us from the evil one.", title: "Matthew 6:13" },
        { text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.", title: "2 Corinthians 12:9" },
        { text: "Do not be deceived: God cannot be mocked. A man reaps what he sows.", title: "Galatians 6:7" },
        { text: "The temptation to give in to sin is not from God, but from our own evil desires.", title: "James 1:13-14" },
        { text: "Therefore, since Christ suffered in his body, arm yourselves also with the same attitude, because whoever suffers in the body is done with sin.", title: "1 Peter 4:1" },
        { text: "When tempted, no one should say, 'God is tempting me.' For God cannot be tempted by evil, nor does he tempt anyone.", title: "James 1:13" },
        { text: "You have been my help, and in the shadow of your wings, I will sing for joy.", title: "Psalm 63:7" },
        { text: "No temptation has overtaken you except what is common to man. And God is faithful; he will not allow you to be tempted beyond what you can bear.", title: "1 Corinthians 10:13" },
        { text: "But if you resist the devil and stand firm in your faith, the God of all grace, who called you to his eternal glory in Christ, will restore you and make you strong, firm and steadfast.", title: "1 Peter 5:9-10" },
        { text: "Do not love the world or anything in the world. If anyone loves the world, love for the Father is not in them.", title: "1 John 2:15" },
        { text: "For it is written: 'Worship the Lord your God, and serve him only.'", title: "Matthew 4:10" },
        { text: "Do not be overcome by evil, but overcome evil with good.", title: "Romans 12:21" },
        { text: "And I will give you a new heart and put a new spirit in you; I will remove from you your heart of stone and give you a heart of flesh.", title: "Ezekiel 36:26" },
        { text: "If anyone is in Christ, the new creation has come: The old has gone, the new is here!", title: "2 Corinthians 5:17" },
        { text: "Resist the devil, and he will flee from you.", title: "James 4:7" },
        { text: "For the Lord will be your confidence and will keep your foot from being caught.", title: "Proverbs 3:26" },
        { text: "The wise man sees danger and takes refuge, but the simple keep going and suffer for it.", title: "Proverbs 22:3" },
        { text: "He who has been forgiven little loves little.", title: "Luke 7:47" },
        { text: "But I say to you, Love your enemies and pray for those who persecute you.", title: "Matthew 5:44" },
        { text: "Therefore, there is now no condemnation for those who are in Christ Jesus.", title: "Romans 8:1" },
        { text: "The temptations in your life are no different from what others experience. And God is faithful. He will not allow the temptation to be more than you can stand. When you are tempted, he will show you a way out so that you can endure.", title: "1 Corinthians 10:13" },
        { text: "Put on the full armor of God, so that you can take your stand against the devil’s schemes.", title: "Ephesians 6:11" },
        { text: "Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", title: "Joshua 1:9" },
        { text: "But thanks be to God! He gives us the victory through our Lord Jesus Christ.", title: "1 Corinthians 15:57" }
    ]
};

function getVerse(category) {
    const verseDisplay = document.getElementById("verse-display");
    const selectedVerses = verses[category];
    const randomVerse = selectedVerses[Math.floor(Math.random() * selectedVerses.length)];
    verseDisplay.innerHTML = `<h2>${randomVerse.title}</h2><p>${randomVerse.text}</p>`;
    verseDisplay.style.display = "block";
}
