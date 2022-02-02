

export const sign_in = () => {
    return {
        type: 'sign_in'
    }
}
export const enemyAttackUserFn = (eAttack,uDefence) => {
    return {
        type: 'enemyAttackUserFn',
        payloadeAttack: eAttack,
        payloaduDefence: uDefence
    };
};

export const usingLifePotion = () => {
    return {
        type: 'usingLifePotion',
        payload: 1
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

export const testrara = () => {
    return {
        type: 'testrara',
    };
};

export const testnana = () => {
    return {
        type: 'testnana',
    };
};
