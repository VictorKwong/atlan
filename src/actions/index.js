

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

export const gameTitleOptionScreenFn = () => {
    return {
        type: 'gameTitleOptionScreenFn',
    };
};

export const returnToTitleScreenFn = () => {
    return {
        type: 'returnToTitleScreenFn',
    };
};

export const finishStoryLineOneFn = () => {
    return {
        type: 'finishStoryLineOneFn',
    };
};
export const GotoWorldMapFn = () => {
    return {
        type: 'GotoWorldMapFn',
    };
};

export const GotoPronteraFn = () => {
    return {
        type: 'GotoPronteraFn',
    };
};
export const GotoPoringIslandFn = () => {
    return {
        type: 'GotoPoringIslandFn',
    };
};
export const GotoAntHellFn = () => {
    return {
        type: 'GotoAntHellFn',
    };
};

export const typeWritterEffectFn = () => {
    return {
        type: 'typeWritterEffectFn',
    };
};
export const resetTypeWritterEffectFn = () => {
    return {
        type: 'resetTypeWritterEffectFn',
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

