import { IProduct } from '@/entities/product/model/store'

const products: IProduct[] = [
  {
    id: 1,
    images: [
      {
        id: 1,
        src: 'D3.jpg',
        alt: 'Витамин D3 (2000 ME)'
      },
      {
        id: 2,
        src: 'D3-1.jpg',
        alt: 'Витамин D3 (2000 ME)'
      },
      {
        id: 3,
        src: 'D3-2.jpg',
        alt: 'Витамин D3 (2000 ME)'
      }
    ],
    name: 'Витамин D3 (2000 ME)',
    brief:
      'Улучшает состояние зубов и костей, поддерживает иммунитет и репродуктивные функции. Снижает риск вирусных заболеваний. Нормализует работу мозговой, нервной системы.',
    description:
      'Витамин D3 (холекальциферол) выполняет в организме ряд жизненно важных функций. Он способствует усвоению кальция и фосфора, что заметно улучшает состояние костей и зубов, снижает риск развития остеопороза. Витамин D поддерживает иммунную систему, способствует снижению рисков возникновения вирусных заболеваний, облегчает их течение. D3 — незаменимый витамин для многих метаболических процессов, он нормализует работу нервной и мышечной систем, поддерживает репродуктивные функции. Витамин D участвует в синтезе и высвобождении нейромедиаторов серотонина, дофамина и норадреналина, которые играют решающую роль в регуляции настроения. Форма выпуска: капсулы массой 390 мг ± 10%.',
    structure:
      'Витамин D3 (холекальциферол), масло подсолнечное, компоненты капсулы (вода, желатин, глицерин пищевой, сорбат калия).',
    recommendations:
      'Взрослым принимать по 1 капсуле в день во время еды. Продолжительность приема: 1 месяц. При необходимости прием можно повторить.',
    contra:
      'Индивидуальная непереносимость компонентов, беременность, кормление грудью, лица в возрасте до 18 лет. Перед применением рекомендуется проконсультироваться с врачом. Не превышать установленную рекомендуемую дозу. Биологически активная добавка к пище не должна употребляться в качестве замены пищи.'
  },
  {
    id: 2,
    images: [
      {
        id: 1,
        src: 'Omega-3.jpg',
        alt: 'Омега-3'
      },
      {
        id: 2,
        src: 'Omega-3-1.jpg',
        alt: 'Омега-3'
      },
      {
        id: 3,
        src: 'Omega-3-2.jpg',
        alt: 'Омега-3'
      }
    ],
    name: 'Омега-3',
    brief:
      'Высокая концентрация жирных кислот. Поддерживает общее состояние здоровья, снижает риски сердечно-сосудистых заболеваний. Помогает сохранить красоту и молодость.',
    description:
      'Омега 3 со сбалансированным соотношением полиненасыщенных жирных кислот (эйкозапентаеновой (ЭПК) и докозагексаеновой (ДГК)) поддерживает здоровье на всех уровнях, а триглицеридная форма препарата обеспечивает максимальную биодоступность действующих веществ. Омега-3 полиненасыщенные жирные кислоты способствуют поддержанию оптимального липидного профиля, повышая уровень «хорошего» холестерина, снижает риски возникновения сердечно-сосудистых заболеваний. Также показана для улучшения работы дыхательной и нервной систем, при нарушениях менструального цикла и мигренях. Улучшает состояние кожи, волос, ногтей и суставов, поддерживает здоровье глаз и способствует сохранению молодости. Омега-3 жирные кислоты оказывают противовоспалительное и антиаллергическое действие, играют важную роль в поддержании позитивной микрофлоры. Омега-3 — мощный антиоксидант, необходимый современному человеку в условиях повышенных нагрузок и несбалансированного питания.',
    structure: 'Рыбий жир, компоненты капсулы (желатин пищевой, глицерин пищевой, сорбат калия).',
    recommendations:
      'Принимать по 3 капсулы 2 раза в день во время еды, запивая обильным количеством воды. Продолжительность приема: 1 месяц. При необходимости прием можно повторить.',
    contra:
      'Индивидуальная непереносимость компонентов, беременность, кормление грудью, лица в возрасте до 18 лет. Перед применением рекомендуется проконсультироваться с врачом.'
  },
  {
    id: 3,
    images: [
      {
        id: 1,
        src: 'B-complex.jpg',
        alt: 'Комплекс витаминов группы B'
      },
      {
        id: 2,
        src: 'B-complex-1.jpg',
        alt: 'Комплекс витаминов группы B'
      },
      {
        id: 3,
        src: 'B-complex-2.jpg',
        alt: 'Комплекс витаминов группы B'
      }
    ],
    name: 'Комплекс витаминов группы B',
    brief:
      'Повышает уровень энергии, убирает хроническую усталость и бессонницу. Улучшает работоспособность, помогает справляться с высокими нагрузками.',
    description:
      'Комплекс витаминов группы В нормализует обмен веществ, повышает энергичность и работоспособность. Способствует снижению тревожности, восприимчивости к стрессу, успешно применяется при нарушениях сна, рассеянности, невралгических болях. Витамины группы В поддерживают иммунную систему, повышают адаптивность и выносливость при физических нагрузках, регулируют работу репродуктивной системы. Прием витаминов группы В рекомендован при проблемах с кожей, волосами и ногтями, а биодоступные формы компонентов делают усвоение препарата максимально эффективным. Витамины группы В участвуют в кроветворении, поэтому их дополнительный прием показан при анемии и ее профилактике, например в условиях несбалансированного питания или ограничения продуктов животного происхождения в рационе.',
    structure:
      'Микрокристаллическая целлюлоза (носитель), желатин, никотинамид (Витамин В3), D-пантотенат кальция (Витамин В5 (пантотеновая кислота)), кремния диоксид (агент антислеживающий), рибофлавин (Витамин В2), пиридоксина гидрохлорид (Витамин В6), тиамина гидрохлорид (Витамин В1), цианокабаламин (Витамин В12), фолиевая кислота (Витамин В9), D-биотин (биотин).',
    recommendations:
      'Взрослым принимать по 1 капсуле в день во время еды. Беременным и кормящим женщинам принимать только по рекомендации и под наблюдением врача. Продолжительность приема: 1 месяц. При необходимости прием можно повторить.',
    contra:
      'Индивидуальная непереносимость компонентов, беременность, кормление грудью, лица в возрасте до 18 лет. Перед применением рекомендуется проконсультироваться с врачом.\n' +
      'Не превышать установленную рекомендуемую дозу.\n' +
      'Биологически активная добавка к пище не должна употребляться в качестве замены пищи.'
  },
  {
    id: 4,
    images: [
      {
        id: 1,
        src: 'L-complex.jpg',
        alt: 'Комплекс микроэлементов'
      },
      {
        id: 2,
        src: 'L-complex-1.jpg',
        alt: 'Комплекс микроэлементов'
      },
      {
        id: 3,
        src: 'L-complex-2.jpg',
        alt: 'Комплекс микроэлементов'
      }
    ],
    name: 'Комплекс микроэлементов',
    brief:
      'Рекомендованная доза всех полезных компонентов в одной капсуле. Избавляет от хронической усталости, повышает иммунитет, защищает организм. Поддерживает здоровье ЖКТ.',
    description:
      'Дополнительный прием микроэлементов рекомендован при снижении иммунитета, гормональных проблемах, нарушении углеводного обмена. Компоненты комплекса помогут лучше справляться с физическими нагрузками, улучшают сопротивляемость организма, работу сердечно-сосудистой системы, и защищают наши клетки от окислительного стресса.',
    structure:
      'Марганец, Цинк бисглицинат хелат, Йод, Хром пиколинат, Молибден, Селенметионин, Медь бисглицинат хелат.',
    recommendations:
      'Взрослым принимать по 1 капсуле в день во время еды. Продолжительность приема: 1 месяц. При необходимости прием можно повторить.',
    contra:
      'Индивидуальная непереносимость компонентов, беременность, кормление грудью, лица в возрасте до 18 лет. Перед применением рекомендуется проконсультироваться с врачом.'
  },
  {
    id: 5,
    images: [
      {
        id: 1,
        src: 'C.jpg',
        alt: 'Витамин C, 500 мг'
      },
      {
        id: 2,
        src: 'C-1.jpg',
        alt: 'Витамин C, 500 мг'
      },
      {
        id: 3,
        src: 'C-2.jpg',
        alt: 'Витамин C, 500 мг'
      }
    ],
    name: 'Витамин C, 500 мг',
    brief:
      'Легко усваивается и не раздражает слизистую желудка. Укрепляет иммунитет, снижает риски тромбообразования, нормализует работу нервной системы.',
    description:
      'Витамин С в форме аскорбата натрия является легкоусваиваемой формой витамина. Он не раздражает слизистую желудка. Витамин С — базовый антиоксидант, участвует в регулировании окислительно-восстановительных процессов, углеводного обмена, свертываемости крови, регенерации тканей. Важно ежедневно восполнять витамин С, так как он не синтезируется в организме и практически не накапливается в тканях.',
    structure: 'Витамин С (аскорбат натрия) 500 мг',
    recommendations:
      'Взрослым принимать по 1 капсуле в день во время еды. Продолжительность приема: 1 месяц. При необходимости прием можно повторить.',
    contra:
      'Индивидуальная непереносимость компонентов, беременность, кормление грудью, лица в возрасте до 18 лет. Перед применением рекомендуется проконсультироваться с врачом.'
  },
  {
    id: 6,
    images: [
      {
        id: 1,
        src: 'Zinc.jpg',
        alt: 'Цинк, 15 мг'
      },
      {
        id: 2,
        src: 'Zinc-1.jpg',
        alt: 'Цинк, 15 мг'
      },
      {
        id: 3,
        src: 'Zinc-2.jpg',
        alt: 'Цинк, 15 мг'
      }
    ],
    name: 'Цинк, 15 мг',
    brief:
      'Органическая форма, минимум побочных эффектов для ЖКТ. Защищает клетки от разрушения, стимулирует рост мышц, помогает накапливать коллаген и регулирует выработку инсулина.',
    description:
      'Цинка пиколинат — органическая, легко усваиваемая хелатная форма микроэлемента, не раздражает желудок. Цинк является компонентом более 300 ферментов, участвует в биосинтезе нуклеиновых кислот, аминокислот, белков. Этот незаменимый микроэлемент необходим для поддержания работы иммунной системы, он повышает выработку интерферонов, снижает уровень провоспалительных цитокинов.',
    structure: 'Цинка цитрат 15 мг',
    recommendations:
      'Взрослым принимать по 1 капсуле в день во время еды. Продолжительность приема: 1 месяц. При необходимости прием можно повторить.',
    contra:
      'Индивидуальная непереносимость компонентов, беременность, кормление грудью, лица в возрасте до 18 лет. Перед применением рекомендуется проконсультироваться с врачом.'
  },
  {
    id: 7,
    images: [
      {
        id: 1,
        src: 'B9.jpg',
        alt: 'Витамин B9 (Метилфолат), 600 мкг'
      },
      {
        id: 2,
        src: 'B9-1.jpg',
        alt: 'Витамин B9 (Метилфолат), 600 мкг'
      },
      {
        id: 3,
        src: 'B9-2.jpg',
        alt: 'Витамин B9 (Метилфолат), 600 мкг'
      }
    ],
    name: 'Витамин B9 (Метилфолат), 600 мкг',
    brief:
      'Поддерживает работоспособность сердца и сосудов, здоровье нервной системы, и репродуктивную функцию, замедляет процессы старения',
    description:
      'Метилфолат представляет собой биологически активную, наиболее хорошо усваиваемую форму витамина В9. Витамин В9 задействован в процессе кроветворения, поддерживает работоспособность сердечно-сосудистой системы, снижает риск тромбообразования, снижает уровень гомоцистеина.',
    structure: 'Витамин B9 (Метилфолат), 600 мкг',
    recommendations:
      'Взрослым принимать по 1 капсуле в день во время еды. Продолжительность приема: 1 месяц. При необходимости прием можно повторить.',
    contra:
      'Индивидуальная непереносимость компонентов, беременность, кормление грудью, лица в возрасте до 18 лет. Перед применением рекомендуется проконсультироваться с врачом.'
  },
  {
    id: 8,
    images: [
      {
        id: 1,
        src: 'B12.jpg',
        alt: 'Витамин B12 (Метилкобаламин)'
      },
      {
        id: 2,
        src: 'B12-1.jpg',
        alt: 'Витамин B12 (Метилкобаламин)'
      },
      {
        id: 3,
        src: 'B12-2.jpg',
        alt: 'Витамин B12 (Метилкобаламин)'
      }
    ],
    name: 'Витамин B12 (Метилкобаламин)',
    brief:
      'Стимулирует концентрацию внимания, незаменим для работы нервной системы, используется для профилактики и лечение анемии.',
    description:
      'Метилкобаламин является активной формой витамина B12, обеспечивающей его высокую биодоступность и усвояемость. Витамин B12 — ключевой компонент, участвующий в синтезе ДНК, метаболизме жирных кислот и аминокислот. Витамин В12 участвует в образовании миелина, необходимой для быстрой передачи нервных импульсов.',
    structure: 'Витамин B12 (метилкобаламин), 9 мкг',
    recommendations:
      'Взрослым принимать по 1 капсуле в день во время еды. Продолжительность приема: 1 месяц. При необходимости прием можно повторить.',
    contra:
      'Индивидуальная непереносимость компонентов, беременность, кормление грудью, лица в возрасте до 18 лет. Перед применением рекомендуется проконсультироваться с врачом.'
  },
  {
    id: 9,
    images: [
      {
        id: 1,
        src: 'Iron.jpg',
        alt: 'Железо, 15 мг'
      },
      {
        id: 2,
        src: 'Iron-1.jpg',
        alt: 'Железо, 15 мг'
      },
      {
        id: 3,
        src: 'Iron-2.jpg',
        alt: 'Железо, 15 мг'
      }
    ],
    name: 'Железо, 15 мг',
    brief:
      'Хелатная форма с высокой усвояемостью повышает уровень энергии, улучшает концентрацию внимания и насыщение организма кислородом',
    description:
      'Железа бисглицинат — хелатная форма железа с высокой биодоступностью. Хелатная форма мягко влияет на желудочно-кишечный тракт, легко переносится пищеварительной системой. Железо — необходимый микроэлемент, который способствует нормальному производству гемоглобина.',
    structure: 'Железа бисглицинат хелат, 15 мг',
    recommendations:
      'Взрослым принимать по 1 капсуле в день во время еды. Продолжительность приема: 1 месяц. При необходимости прием можно повторить.',
    contra:
      'Индивидуальная непереносимость компонентов, беременность, кормление грудью. Перед применением рекомендуется проконсультироваться с врачом.'
  },
  {
    id: 10,
    images: [
      {
        id: 1,
        src: 'Magnesium.jpg',
        alt: 'Магний, 125 мг'
      },
      {
        id: 2,
        src: 'Magnesium-1.jpg',
        alt: 'Магний, 125 мг'
      },
      {
        id: 3,
        src: 'Magnesium-2.jpg',
        alt: 'Магний, 125 мг'
      }
    ],
    name: 'Магний, 125 мг',
    brief:
      'Улучшает состояние нервной системы, нормализует сердечный ритм, снижает артериальное давление, устраняет судороги в мышцах',
    description:
      'Магния бисглицинат хелат представляет собой соединение магния и аминокислоты глицина, это самая доступная и быстро усваиваемая форма минерала. Она не раздражает слизистую желудка и хорошо переносится.',
    structure: 'Магний бисглицинат хелат 125 мг',
    recommendations:
      'Взрослым принимать по 1 капсуле в день во время еды. Продолжительность приема: 1 месяц. При необходимости прием можно повторить.',
    contra:
      'Индивидуальная непереносимость компонентов, беременность, кормление грудью. Перед применением рекомендуется проконсультироваться с врачом.'
  },
  {
    id: 11,
    images: [
      {
        id: 1,
        src: 'Q10.jpg',
        alt: 'Коэнзим Q10, 100 мг'
      },
      {
        id: 2,
        src: 'Q10-1.jpg',
        alt: 'Коэнзим Q10, 100 мг'
      },
      {
        id: 3,
        src: 'Q10-2.jpg',
        alt: 'Коэнзим Q10, 100 мг'
      }
    ],
    name: 'Коэнзим Q10, 100 мг',
    brief:
      'Способствует сохранению молодости и красоты, обновлению клеток, снижает оксидативную нагрузку на организм',
    description:
      'Коэнзим Q10 (убихинон) — это витаминоподобное соединение, которое имеет множество важных свойств, включая защиту от окислительного стресса и укрепление иммунной системы.',
    structure: 'Коэнзим Q10, 100 мг',
    recommendations:
      'Взрослым принимать по 1 капсуле в день во время еды. Продолжительность приема: 1 месяц. При необходимости прием можно повторить.',
    contra:
      'Индивидуальная непереносимость компонентов, беременность, кормление грудью. Перед применением рекомендуется проконсультироваться с врачом.'
  },
  {
    id: 12,
    images: [
      {
        id: 1,
        src: '5-HTP.jpg',
        alt: '5-HTP'
      },
      {
        id: 2,
        src: '5-HTP-1.jpg',
        alt: '5-HTP'
      },
      {
        id: 3,
        src: '5-HTP-2.jpg',
        alt: '5-HTP'
      }
    ],
    name: '5-HTP',
    brief:
      'Способствует выработке серотонина, улучшает настроение, помогает бороться с тревожностью, улучшает качество сна',
    description:
      '5-гидрокситриптофан — природная аминокислота, входящая в состав белков. Из нее организм производит серотонин, который еще называют «гормоном радости».',
    structure: '5 гидрокситриптофан 100 мг, В6 6мг',
    recommendations:
      'Взрослым принимать по 1 капсуле в день во время еды. Продолжительность приема: 1 месяц. При необходимости прием можно повторить.',
    contra:
      'Индивидуальная непереносимость компонентов, беременность, кормление грудью. Перед применением рекомендуется проконсультироваться с врачом.'
  },
  {
    id: 13,
    images: [
      {
        id: 1,
        src: 'Psyllium.jpg',
        alt: 'Псиллиум (клетчатка), 750 мг'
      },
      {
        id: 2,
        src: 'Psyllium-1.jpg',
        alt: 'Псиллиум (клетчатка), 750 мг'
      }
    ],
    name: 'Псиллиум (клетчатка), 750 мг',
    brief:
      'Природный пребиотик, способствует восстановлению здоровья кишечной микрофлоры, улучшает пищеварение, помогает в контроле аппетита',
    description:
      'Псиллиум выступает источником клетчатки, пищевых волокон, которые в свою очередь являются пребиотиком, необходимым для питания полезной микрофлоры кишечника. Нормальное потребление клетчатки имеет целый ряд преимуществ как для поддержания здоровья, так и профилактики многих алиментарно-зависимых заболеваний.',
    structure: 'Порошок оболочки семян подорожника',
    recommendations:
      'Взрослым принимать по 2-3 капсулы в день во время еды. Продолжительность приема: 1 месяц. При необходимости прием можно повторить.',
    contra:
      'Индивидуальная непереносимость компонентов, беременность, кормление грудью. Перед применением рекомендуется проконсультироваться с врачом.'
  },
  {
    id: 14,
    images: [
      {
        id: 1,
        src: 'Lecithin.jpg',
        alt: 'Лецитин, 350 мг'
      },
      {
        id: 2,
        src: 'Lecithin-1.jpg',
        alt: 'Лецитин, 350 мг'
      }
    ],
    name: 'Лецитин, 350 мг',
    brief:
      'Защищает клеточные мембраны, контролирует распад холестерина, улучшает работу мозга и когнитивные функции',
    description:
      'Лецитин является отличным естественным источником холина и фосфолипидов, которые способствуют здоровому функционированию нервной системы, играют жизненно важную роль в работе мозга и печени.',
    structure: 'Лецитин 350 мг',
    recommendations:
      'Взрослым принимать по 1 капсуле в день во время еды. Продолжительность приема: 1 месяц. При необходимости прием можно повторить.',
    contra:
      'Индивидуальная непереносимость компонентов, беременность, кормление грудью. Перед применением рекомендуется проконсультироваться с врачом.'
  },
  {
    id: 15,
    images: [
      {
        id: 1,
        src: 'MSM.jpg',
        alt: 'МСМ, Глюкозамин, Хондроитин'
      },
      {
        id: 2,
        src: 'MSM-1.jpg',
        alt: 'МСМ, Глюкозамин, Хондроитин'
      },
      {
        id: 3,
        src: 'MSM-2.jpg',
        alt: 'МСМ, Глюкозамин, Хондроитин'
      }
    ],
    name: 'МСМ, Глюкозамин, Хондроитин',
    brief:
      'Комплекс способствует улучшению подвижности суставов, способствует их восстановлению, обладает противовоспалительным эффектом',
    description:
      'Глюкозамин, хондроитин и MSM (метилсульфонилметан) — эффективная формула для заботы о суставах, сочетающая в себе три важных питательных вещества, которые помогают поддерживать здоровье суставных и соединительных тканей.',
    structure: 'Глюкозамин 300мг, Хондроитин 90 мг, МСМ 350 мг, Аскорбиновая кислота 35 мг',
    recommendations:
      'Взрослым принимать по 1 капсуле в день во время еды. Продолжительность приема: 1 месяц. При необходимости прием можно повторить.',
    contra:
      'Индивидуальная непереносимость компонентов, беременность, кормление грудью. Перед применением рекомендуется проконсультироваться с врачом.'
  },
  {
    id: 16,
    images: [
      {
        id: 1,
        src: 'Calcium.jpg',
        alt: 'Кальций, 500 мг'
      },
      {
        id: 2,
        src: 'Calcium-1.jpg',
        alt: 'Кальций, 500 мг'
      },
      {
        id: 3,
        src: 'Calcium-2.jpg',
        alt: 'Кальций, 500 мг'
      }
    ],
    name: 'Кальций, 500 мг',
    brief: 'Поддерживает здоровье зубов и костей, способствует нормализации сердечного ритма.',
    description:
      'Кальций в форме цитрата — формула минерала с высокой биодоступностью, которая легко усваивается и идеально подходит для восполнения потребности организма в кальции.',
    structure: 'Кальция цитрат 500 мг',
    recommendations:
      'Взрослым принимать по 1-2 капсулы в день во время еды. Продолжительность приема: 1 месяц. При необходимости прием можно повторить.',
    contra:
      'Индивидуальная непереносимость компонентов, беременность, кормление грудью. Перед применением рекомендуется проконсультироваться с врачом.'
  },
  {
    id: 17,
    images: [
      {
        id: 1,
        src: 'B5.jpg',
        alt: 'Биотин + B5'
      },
      {
        id: 2,
        src: 'B5-1.jpg',
        alt: 'Биотин + B5'
      },
      {
        id: 3,
        src: 'B5-2.jpg',
        alt: 'Биотин + B5'
      }
    ],
    name: 'Биотин + B5',
    brief:
      'Пантотеновая кислота (B5) и биотин (B7) регулируют углеводный и жировой обмены, поддерживают в норме состояние кожи, волос, ногтей.',
    description:
      'Пантотеновая кислота и биотин помогают организму усваивать углеводы, белки и жиры, обеспечивая получение из них энергии организмом.',
    structure: 'B5 (пантотеновая кислота) 10 мг, B7 (биотин) 50 мкг',
    recommendations:
      'Взрослым принимать по 1 капсуле в день во время еды. Продолжительность приема: 1 месяц. При необходимости прием можно повторить.',
    contra:
      'Индивидуальная непереносимость компонентов, беременность, кормление грудью. Перед применением рекомендуется проконсультироваться с врачом.'
  },
  {
    id: 18,
    images: [
      {
        id: 1,
        src: 'K2.jpg',
        alt: 'Витамин K2, 80 мкг'
      },
      {
        id: 2,
        src: 'K2-1.jpg',
        alt: 'Витамин K2, 80 мкг'
      },
      {
        id: 3,
        src: 'K2-2.jpg',
        alt: 'Витамин K2, 80 мкг'
      }
    ],
    name: 'Витамин K2, 80 мкг',
    brief:
      'Способствует лучшему усвоению кальция и витамина D, отвечает за здоровье стенок сосудов, обладает антиоксидантными свойствами.',
    description:
      'Жирорастворимый витамин K2 способствует лучшему усвоению кальция и витамина D. Он поддерживает естественный здоровый уровень остеокальцина.',
    structure: 'Витамин K2 (менахинон) 80 мкг',
    recommendations:
      'Взрослым принимать по 1 капсуле в день во время еды. Продолжительность приема: 1 месяц. При необходимости прием можно повторить.',
    contra:
      'Индивидуальная непереносимость компонентов, беременность, кормление грудью. Перед применением рекомендуется проконсультироваться с врачом.'
  },
  {
    id: 19,
    images: [
      {
        id: 1,
        src: 'E.jpg',
        alt: 'Витамин E, 30 мг'
      },
      {
        id: 2,
        src: 'E-1.jpg',
        alt: 'Витамин E, 30 мг'
      },
      {
        id: 3,
        src: 'E-2.jpg',
        alt: 'Витамин E, 30 мг'
      }
    ],
    name: 'Витамин E, 30 мг',
    brief:
      'Мощный антиоксидант, поддерживает иммунную систему и защищает от преждевременного старения',
    description:
      'Витамин Е — важный жирорастворимый антиоксидант, который обеспечивает питательную поддержку клеток, включая клетки сердечной мышцы, и иммунной системы. Он помогает нейтрализовать повреждающие клетки и приводящие к их преждевременному старению свободные радикалы. Витамин Е защищает клеточные мембраны, снижает риски воспалений и поддерживает сердечно-сосудистую систему.',
    structure: 'Витамин Е 30 мг',
    recommendations:
      'Взрослым принимать по 1 капсуле в день во время еды. Продолжительность приема: 1 месяц. При необходимости прием можно повторить.',
    contra:
      'Индивидуальная непереносимость компонентов, беременность, кормление грудью. Перед применением рекомендуется проконсультироваться с врачом.'
  }
]

export default products
