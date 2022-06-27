const questions = [
    {
        question: 'What was the capital of Brazil before the current capital?',
        answers: [
            { text: 'Rio de Janeiro', correct: true },
            { text: 'Salvador', correct: false },
            { text: 'São Paulo', correct: false },
            { text: 'Porto Alegre', correct: false }
        ],
        info: 'Rio de Janeiro became the capital of the colony of Brazil in 1763. In 1960 the capital was transferred to Brasília.',
        other1: 'Rosalind Franklin was a chemist whose work was important to understanding the molecular structure of DNA.',
        other2: 'Lise Meitner was an Austrian-Swedish physicist who discovered the radioactive isotope protactinium-237.',
        other3: 'Barbara McClintock won the Nobel Prize in Physiology or Medicine in 1983 for the discovery of genetic transposition.'
    },
    {
        question: 'How many stars can be found on the Brazilian flag?',
        answers: [
            { text: '24', correct: false },
            { text: '29', correct: false },
            { text: '27', correct: true },
            { text: '26', correct: false }
        ],
        info: '26 of the stars represent the Brazilian states and 1 more star represents the capital (Federal District).',
        other1: 'Rosalyn Sussman Yalow was an American medical physicist, and a co-winner of the 1977 Nobel Prize in Physiology or Medicine (together with Roger Guillemin and Andrew Schally) for development of the radioimmunoassay technique.',
        other2: 'Gerty Theresa Cori was the third woman to win a Nobel Prize (which she shared with Carl Ferdinand Cori and Bernardo Houssay) in science. She was also the first woman to be awarded the Nobel Prize in Physiology or Medicine, for her significant role in the "discovery of the course of the catalytic conversion of glycogen".',
        other3: 'Rita Levi-Montalcini was an Italian Nobel laureate honored for her work in neurobiology. She was awarded the 1986 Nobel Prize in Physiology or Medicine jointly with colleague Stanley Cohen for the discovery of nerve growth factor (NGF).'
    },
    {
        question: 'How many countries does Brazil border?',
        answers: [
            { text: '8', correct: false },
            { text: '10', correct: true },
            { text: '6', correct: false },
            { text: '12', correct: false }
        ],
        info: 'Brazil borders ten countries. They are Argentina, Bolivia, Colombia, French Guiana, Guyana, Paraguay, Peru, Suriname, Uruguay, and Venezuela. Its longest border is shared with the country of Bolivia, on the central-western border. Brazil is the largest country in South America, and thus, most likely will have the largest border.',
        other1: 'Kalpana Chawla was an American astronaut, engineer, and the first woman of Indian origin to go to space. She first flew on Space Shuttle Columbia in 1997 as a mission specialist and primary robotic arm operator.',
        other2: 'Mae Carol Jemison is an American engineer, physician, and former NASA astronaut. She became the first black woman to travel into space when she served as a mission specialist aboard the Space Shuttle Endeavour in 1992.',
        other3: 'Ellen Ochoa is an American engineer, former astronaut and former director of the Johnson Space Center. In 1993 Ochoa became the first Hispanic woman to go to space when she served on a nine-day mission aboard the Space Shuttle Discovery.'
    },
    {
        question: 'What is the largest city in Brazil?',
        answers: [
            { text: 'Rio de Janeiro', correct: false },
            { text: 'Brasilia', correct: false },
            { text: 'Recife', correct: false },
            { text: 'São Paulo', correct: true }
        ],
        info: 'São Paulo is by far the largest, with a population of around 18,000,000. The capital Brasilia has around two million.',
        other1: 'Esther Conwell was a pioneer in electrical engineering. Her research explaining how electrons travel through semiconductors changed the field of computing.',
        other2: 'Beatrice Hicks worked on aircraft technology and co-founded the Society of Women Engineers.',
        other3: 'Beulah Louise Henry was an American inventor. In 1912 she received her first patent for a more efficient ice cream machine.'
    },
    {
        question: 'What is the longest Brazilian river?',
        answers: [
            { text: 'Tietê', correct: false },
            { text: 'Amazonas', correct: true },
            { text: 'São Francisco', correct: false },
            { text: 'Tapajós', correct: false }
        ],
        info: 'The Amazon is the second longest river in the World, about 3,900 miles long.',
        other1: 'Hypatia was a mathematician, astronomer, and philosopher who lived in Alexandria, Egypt. Born around 360 AD, she is the earliest female mathematician whose life and work is well known.',
        other2: 'Shakuntala Devi proved her exceptional talent in arithmetic through her math shows worldwide at a very young age. Her ability to multiply large numbers in her head has given her the nickname “Human-Computer.”',
        other3: 'Maria Gaetana Agnesi wrote one of the first calculus textbooks in 1748.'
    },
    {
        question: 'If you were in Brazil and wanted to visit the "Estação da Luz", a famous train station, which city would you go to?',
        answers: [
            { text: 'Florianópolis', correct: false },
            { text: 'Manaus', correct: false },
            { text: 'Goiânia', correct: false },
            { text: 'São Paulo', correct: true }
        ],
        info: 'The "Estação da Luz" (Luz Station) is a famous train station in the Luz neighborhood, São Paulo. The station, inspired by Flinders Street Station (Melbourne, Australia), was finished in the late 19th century. Since 2006 it has housed the Museum of the Portuguese Language.',
        other1: 'Hertha Ayrton was a British engineer who was awarded the Hughes Medal for her work. She was also a suffragette.',
        other2: 'Emily Warren Roebling was an engineer who is famous for her contribution to the Brooklyn Bridge.',
        other3: 'Edith Clark was a pioneer in electrical engineering and the first female professor of electrical engineering in the US.'
    },
    {
        question: 'Where are the famous Copacabana and Ipanema beaches located?',
        answers: [
            { text: 'Rio de Janeiro', correct: true },
            { text: 'Porto Seguro', correct: false },
            { text: 'Maceió', correct: false },
            { text: 'Fortaleza', correct: false }
        ],
        info: 'Rio de Janeiro is famous for its beautiful beaches and Ipanema was inspiration for the most well-known Brazilian song in the world.',
        other1: 'Anita Borg was an American computer scientist who founded the Institute for Women and Technology, and the annual Grace Hopper Celebration of Women in Computing.',
        other2: 'Adele Goldstine was an American mathematician and computer programmer who wrote the manual for ENIAC, which was the first electronic digital computer.',
        other3: 'Marsha Rhea Williams is a professor and researcher and is known for being the first African-American woman to earn a Ph.D. in computer science.'
    },
    {
        question: 'What is the estimated population of Brazil?',
        answers: [
            { text: '188 Million', correct: false },
            { text: '202 Million', correct: false },
            { text: '214 Million', correct: true },
            { text: '242 Million', correct: false }
        ],
        info: 'Brazil is the largest country in both South America and Latin America with over 214 million people.',
        other1: 'Evelyn Boyd Granville was a computer programmer and professor and was the second African-American woman to receive a Ph.D. in mathematics from an American university.',
        other2: 'Beatrice Helen Worsley was a Canadian pioneer in computer science and the first person to be granted a Ph.D. in computer science.',
        other3: 'Carol Shaw is one of the first female game designers and programmers in the video game industry and is best known for her work on Atari 2600 (River Raid).'
    },
    {
        question: 'What is the longest beach in Brazil?',
        answers: [
            { text: 'Praia do Cassino', correct: true },
            { text: 'Praia Grande', correct: false },
            { text: 'Praia dos Ingleses', correct: false },
            { text: 'Copacaban', correct: false }
        ],
        info: 'Praia do Cassino is the longest uninterrupted sandy seashore in the world, located in the southernmost of the Brazilian coast, on the South Atlantic Ocean, in the Rio Grande do Sul state.',
        other1: 'Sheryl Sandberg is the COO of Facebook.',
        other2: 'Susan Wojcicki is the CEO of You Tube.',
        other3: 'Jennifer Taubert is Worldwide Chairman of Pharmaceuticals for Johnson & Johnson.'
    },
    {
        question: 'Besides coffee which one of these other products is Brazil a leading producer?',
        answers: [
            { text: 'Rice', correct: false },
            { text: 'Beans', correct: false },
            { text: 'Tea', correct: false },
            { text: 'Sugar', correct: true }
        ],
        info: 'Brazil is the largest producer of sugarcane in the world, and in the 2020/21 harvest, was responsible for the production of 654.5 million tons destined to produce 41.2 million tons of sugar.',
        other1: 'Rachel Carson was an American marine biologist, writer, and conservationist whose influential book Silent Spring (1962) and other writings are credited with advancing the global environmental movement.',
        other2: 'Elizabeth Feinler is an American information scientist. From 1972 until 1989 she was director of the Network Information Systems Center at the Stanford Research Institute.',
        other3: 'Bozoma Saint John is an American businessperson and marketing executive who was the chief marketing officer (CMO) at Netflix.'
    }
];