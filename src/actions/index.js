
export const increment = () => {
    return {
        type: 'increment',
        payload: 1
    };
};

export const decrement = () => {
    return {
        type: 'decrement'
    };
};

export const sign_in = () => {
    return {
        type: 'sign_in'
    }
}

export const userAtkIncrement = () => {
    return {
        type: 'userAtkIncrement',
        payload: 50
    };
};

export const userArmorIncrement = () => {
    return {
        type: 'userArmorIncrement',
        payload: 20
    };
};

export const usingLifePotion = () => {
    return {
        type: 'usingLifePotion',
        payload: 25,
    };
};

export const userDecrementHealth = () => {
    return {
        type: 'userDecrementHealth',
        payload: 10
    };
};

export const buyPotion = () => {
    return {
        type: 'buyPotion',
        payload: 1
    };
};
export const sellPotion = () => {
    return {
        type: 'sellPotion',
    };
};

export const startGameFn = () => {
    return {
        type: 'startGameFn',
    };
};

export const authorLogoFn = () => {
    return {
        type: 'authorLogoFn',
    };
};

export const easterEggFn = () => {
    return {
        type: 'easterEggFn',
    };
};

export const userAttackEnemyFn = (userAttackStats) => {
        return {
            type: 'userAttackEnemyFn',
            payload: 10,
            userAttackStats: userAttackStats
        };
    };

export const testgaga = () => {
    return {
        type: 'testgaga',
    };
};