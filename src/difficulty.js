DIFFICULTY_NORMAL = {
    maxDeaths: Infinity,
    maxDamageTaken: 1,
    label: nomangle('普通'),
    humanReactionTime: 0.2,
};

DIFFICULTY_EASY = {
    ...DIFFICULTY_NORMAL,
    maxDamageTaken: 3,
    label: nomangle('简单'),
    humanReactionTime: 0.5,
};

DIFFICULTY_NINE_LIVES = {
    ...DIFFICULTY_NORMAL,
    maxDeaths: 9,
    label: nomangle('9条命'),
};

DIFFICULTIES = [DIFFICULTY_NORMAL, DIFFICULTY_EASY];
