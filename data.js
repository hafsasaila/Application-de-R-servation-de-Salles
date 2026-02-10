const USERS_DATA = [
    {
        "nom": "ALAMI",
        "prenom": "Ahmed",
        "type_identifiant": "Matricule",
        "num_piece": "GEST-001",
        "email": "admin@ecole.ma",
        "role": "gestionnaire",
        "nationalite": "Marocaine"
    },
    {
        "nom": "BENNANI",
        "prenom": "Driss",
        "type_identifiant": "CIN",
        "num_piece": "BE101",
        "email": "driss.p1@ecole.ma",
        "role": "prof",
        "nationalite": "Marocaine"
    },
    {
        "nom": "CHERRADI",
        "prenom": "Laila",
        "type_identifiant": "CIN",
        "num_piece": "CD101",
        "email": "laila.p2@ecole.ma",
        "role": "prof",
        "nationalite": "Marocaine"
    },
    {
        "nom": "MAZOUZI",
        "prenom": "Omar",
        "type_identifiant": "CIN",
        "num_piece": "MZ102",
        "email": "omar.p3@ecole.ma",
        "role": "prof",
        "nationalite": "Marocaine"
    },
    {
        "nom": "JABRI",
        "prenom": "Sami",
        "type_identifiant": "CIN",
        "num_piece": "JB103",
        "email": "sami.p4@ecole.ma",
        "role": "prof",
        "nationalite": "Marocaine"
    },
    {
        "nom": "FATMI",
        "prenom": "Houda",
        "type_identifiant": "CIN",
        "num_piece": "FT104",
        "email": "houda.p5@ecole.ma",
        "role": "prof",
        "nationalite": "Marocaine"
    },
    {
        "nom": "NACIRI",
        "prenom": "Anas",
        "type_identifiant": "CIN",
        "num_piece": "NC105",
        "email": "anas.p6@ecole.ma",
        "role": "prof",
        "nationalite": "Marocaine"
    },
    {
        "nom": "KADIRI",
        "prenom": "Zineb",
        "type_identifiant": "CIN",
        "num_piece": "KD106",
        "email": "zineb.p7@ecole.ma",
        "role": "prof",
        "nationalite": "Marocaine"
    },
    {
        "nom": "IDRISSI",
        "prenom": "Youssef",
        "type_identifiant": "CIN",
        "num_piece": "ID107",
        "email": "youssef.p8@ecole.ma",
        "role": "prof",
        "nationalite": "Marocaine"
    },
    {
        "nom": "BERRADA",
        "prenom": "Amine",
        "type_identifiant": "CIN",
        "num_piece": "BR108",
        "email": "amine.p9@ecole.ma",
        "role": "prof",
        "nationalite": "Marocaine"
    },
    {
        "nom": "AMRANI",
        "prenom": "Salma",
        "type_identifiant": "CIN",
        "num_piece": "AM109",
        "email": "salma.p10@ecole.ma",
        "role": "prof",
        "nationalite": "Marocaine"
    },
    {
        "nom": "TAZI",
        "prenom": "Mehdi",
        "type_identifiant": "CIN",
        "num_piece": "TZ110",
        "email": "mehdi.p11@ecole.ma",
        "role": "prof",
        "nationalite": "Marocaine"
    },
    {
        "nom": "SLAOUI",
        "prenom": "Rim",
        "type_identifiant": "CIN",
        "num_piece": "SL111",
        "email": "rim.p12@ecole.ma",
        "role": "prof",
        "nationalite": "Marocaine"
    },
    {
        "nom": "DAOUDI",
        "prenom": "Saad",
        "type_identifiant": "CIN",
        "num_piece": "DD112",
        "email": "saad.p13@ecole.ma",
        "role": "prof",
        "nationalite": "Marocaine"
    },
    {
        "nom": "FILALI",
        "prenom": "Nawal",
        "type_identifiant": "CIN",
        "num_piece": "FL113",
        "email": "nawal.p14@ecole.ma",
        "role": "prof",
        "nationalite": "Marocaine"
    },
    {
        "nom": "GUESSOUS",
        "prenom": "Kamal",
        "type_identifiant": "CIN",
        "num_piece": "GS114",
        "email": "kamal.p15@ecole.ma",
        "role": "prof",
        "nationalite": "Marocaine"
    },
    {
        "nom": "DIOP",
        "prenom": "Ibrahima",
        "type_identifiant": "Passeport",
        "num_piece": "SN201",
        "email": "diop.e1@ecole.ma",
        "role": "etudiant",
        "nationalite": "Sénégalaise"
    },
    {
        "nom": "BARRY",
        "prenom": "Alpha",
        "type_identifiant": "Passeport",
        "num_piece": "GN202",
        "email": "barry.e2@ecole.ma",
        "role": "etudiant",
        "nationalite": "Guinéenne"
    },
    {
        "nom": "BANDA",
        "prenom": "Gift",
        "type_identifiant": "Passeport",
        "num_piece": "ZM203",
        "email": "banda.e3@ecole.ma",
        "role": "etudiant",
        "nationalite": "Zambienne"
    },
    {
        "nom": "EL FASSI",
        "prenom": "Yassine",
        "type_identifiant": "CIN",
        "num_piece": "EF204",
        "email": "fassi.e4@ecole.ma",
        "role": "etudiant",
        "nationalite": "Marocaine"
    },
    {
        "nom": "OUEDRAOGO",
        "prenom": "Fatou",
        "type_identifiant": "Passeport",
        "num_piece": "BF205",
        "email": "ouedra.e5@ecole.ma",
        "role": "etudiant",
        "nationalite": "Burkinabé"
    },
    {
        "nom": "MENSAH",
        "prenom": "Kofi",
        "type_identifiant": "Passeport",
        "num_piece": "GH206",
        "email": "mensah.e6@ecole.ma",
        "role": "etudiant",
        "nationalite": "Ghanéenne"
    },
    {
        "nom": "KEITA",
        "prenom": "Moussa",
        "type_identifiant": "Passeport",
        "num_piece": "ML207",
        "email": "keita.e7@ecole.ma",
        "role": "etudiant",
        "nationalite": "Malienne"
    },
    {
        "nom": "OKORO",
        "prenom": "John",
        "type_identifiant": "Passeport",
        "num_piece": "NG208",
        "email": "okoro.e8@ecole.ma",
        "role": "etudiant",
        "nationalite": "Nigériane"
    },
    {
        "nom": "TURE",
        "prenom": "Amara",
        "type_identifiant": "Passeport",
        "num_piece": "CI209",
        "email": "ture.e9@ecole.ma",
        "role": "etudiant",
        "nationalite": "Ivoirienne"
    },
    {
        "nom": "CHOUAIB",
        "prenom": "Sara",
        "type_identifiant": "CIN",
        "num_piece": "CH210",
        "email": "choua.e10@ecole.ma",
        "role": "etudiant",
        "nationalite": "Marocaine"
    },
    {
        "nom": "SOW",
        "prenom": "Mamadou",
        "type_identifiant": "Passeport",
        "num_piece": "SN211",
        "email": "sow.e11@ecole.ma",
        "role": "etudiant",
        "nationalite": "Sénégalaise"
    },
    {
        "nom": "MBEKI",
        "prenom": "Thabo",
        "type_identifiant": "Passeport",
        "num_piece": "SA212",
        "email": "mbeki.e12@ecole.ma",
        "role": "etudiant",
        "nationalite": "Sud-Africaine"
    },
    {
        "nom": "ZULU",
        "prenom": "Lindiwe",
        "type_identifiant": "Passeport",
        "num_piece": "ZM213",
        "email": "zulu.e13@ecole.ma",
        "role": "etudiant",
        "nationalite": "Zambienne"
    },
    {
        "nom": "MOHAMED",
        "prenom": "Ali",
        "type_identifiant": "Passeport",
        "num_piece": "DJ214",
        "email": "ali.e14@ecole.ma",
        "role": "etudiant",
        "nationalite": "Djiboutienne"
    },
    {
        "nom": "KAMAU",
        "prenom": "John",
        "type_identifiant": "Passeport",
        "num_piece": "KE215",
        "email": "kamau.e15@ecole.ma",
        "role": "etudiant",
        "nationalite": "Kényane"
    },
    {
        "nom": "MANSARE",
        "prenom": "Fanta",
        "type_identifiant": "Passeport",
        "num_piece": "GN216",
        "email": "mansa.e16@ecole.ma",
        "role": "etudiant",
        "nationalite": "Guinéenne"
    },
    {
        "nom": "BENJELNOUN",
        "prenom": "Sami",
        "type_identifiant": "CIN",
        "num_piece": "BJ217",
        "email": "benj.e17@ecole.ma",
        "role": "etudiant",
        "nationalite": "Marocaine"
    },
    {
        "nom": "TOURE",
        "prenom": "Sekou",
        "type_identifiant": "Passeport",
        "num_piece": "ML218",
        "email": "toure.e18@ecole.ma",
        "role": "etudiant",
        "nationalite": "Malienne"
    },
    {
        "nom": "NKOSI",
        "prenom": "Sipho",
        "type_identifiant": "Passeport",
        "num_piece": "SA219",
        "email": "nkosi.e19@ecole.ma",
        "role": "etudiant",
        "nationalite": "Sud-Africaine"
    },
    {
        "nom": "DIALLO",
        "prenom": "Mariam",
        "type_identifiant": "Passeport",
        "num_piece": "GN220",
        "email": "diall.e20@ecole.ma",
        "role": "etudiant",
        "nationalite": "Guinéenne"
    },
    {
        "nom": "SAIDI",
        "prenom": "Amal",
        "type_identifiant": "CIN",
        "num_piece": "SI221",
        "email": "saidi.e21@ecole.ma",
        "role": "etudiant",
        "nationalite": "Marocaine"
    },
    {
        "nom": "KABORE",
        "prenom": "Issa",
        "type_identifiant": "Passeport",
        "num_piece": "BF222",
        "email": "kabor.e22@ecole.ma",
        "role": "etudiant",
        "nationalite": "Burkinabé"
    },
    {
        "nom": "ADEYEMI",
        "prenom": "Bisi",
        "type_identifiant": "Passeport",
        "num_piece": "NG223",
        "email": "adeye.e23@ecole.ma",
        "role": "etudiant",
        "nationalite": "Nigériane"
    },
    {
        "nom": "SYLLA",
        "prenom": "Abdou",
        "type_identifiant": "Passeport",
        "num_piece": "SN224",
        "email": "sylla.e24@ecole.ma",
        "role": "etudiant",
        "nationalite": "Sénégalaise"
    },
    {
        "nom": "BAH",
        "prenom": "Ousmane",
        "type_identifiant": "Passeport",
        "num_piece": "GN225",
        "email": "bah.e25@ecole.ma",
        "role": "etudiant",
        "nationalite": "Guinéenne"
    },
    {
        "nom": "MWALE",
        "prenom": "Agness",
        "type_identifiant": "Passeport",
        "num_piece": "ZM226",
        "email": "mwale.e26@ecole.ma",
        "role": "etudiant",
        "nationalite": "Zambienne"
    },
    {
        "nom": "LAHLOU",
        "prenom": "Zineb",
        "type_identifiant": "CIN",
        "num_piece": "LH227",
        "email": "lahlou.e27@ecole.ma",
        "role": "etudiant",
        "nationalite": "Marocaine"
    },
    {
        "nom": "CISSE",
        "prenom": "Bakary",
        "type_identifiant": "Passeport",
        "num_piece": "ML228",
        "email": "cisse.e28@ecole.ma",
        "role": "etudiant",
        "nationalite": "Malienne"
    },
    {
        "nom": "TRAORE",
        "prenom": "Salif",
        "type_identifiant": "Passeport",
        "num_piece": "BF229",
        "email": "trao.e29@ecole.ma",
        "role": "etudiant",
        "nationalite": "Burkinabé"
    },
    {
        "nom": "NGOMA",
        "prenom": "Jean",
        "type_identifiant": "Passeport",
        "num_piece": "CG230",
        "email": "ngoma.e30@ecole.ma",
        "role": "etudiant",
        "nationalite": "Congolaise"
    }
];
