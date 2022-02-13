
const Fn = {
    Level: 1,
    Experience: 0,
    maxHealth: 150,
    currentHealth: 150,
    maxSP: 50,
    currentSP: 50,
    attack: 25,
    power: 10,
    defence: 18,
    defencebuffer: 28, // 18 + 10
    speed: 10,
    hitRate: 0.95, //0.95
    dodgeRate: 0.1,
    critRate: 0.05, // 0.05
    userClockDefend: false,
    userWeapon: 'Katana',
    userWeaponImg: null,
    BaseWeaponDamage: 60,
    userArmor: 'Cotton Shirt',
    userArmorImg: null,
    BaseArmorDef: 1,
}

const userStatsReducer = (state = Fn, action) => {
    switch(action.type){
        case 'EnemyAttackUserFn':
            return {
                ...state,
                currentHealth: state.currentHealth - (20 * action.CriticalAttack),
                //(action.payloadeAttack)/(action.payloaduDefence)
            }
        case 'EnemyAttackBlockUserFn':
            return {
                ...state,
                currentHealth: state.currentHealth - (10 * action.CriticalAttack),
                //(action.payloadeAttack)/(action.payloaduDefence)
        }
        case 'WinResultFn':
            return{
                ...state,
                Experience: state.Experience + action.enemyExperience,
            }
        case 'ReturnCheckPointFn':
            return{
                ...state,
                currentHealth: 1,
            }
        case 'KafraEmployeeHealFn':
            return{
                ...state,
                currentHealth: state.maxHealth,
                currentSP: state.maxSP,
            }
        case 'UserSkillBashBlockEnemyFn':
        case 'UserSkillBashEnemyFn':
        case 'UserSkillBashMissedFn':
            return{
                ...state,
                currentSP: state.currentSP - 10,
            }
        case 'UserSkillMagnumBreakBlockEnemyFn':
        case 'UserSkillMagnumBreakEnemyFn':
        case 'UserSkillMagnumBreakMissedFn':
        return{
            ...state,
            currentSP: state.currentSP - 15,
        }
        case 'UserLevelUpFn':
            return {
                ...state,
                Level: state.Level + 1,
                maxHealth: state.maxHealth + 40,
                currentHealth: state.maxHealth + 40,
                maxSP: state.maxSP + 25,
                currentSP: state.maxSP + 25,
                attack: state.attack + 15,
                power: state.power + 10,
                defence: state.defence + 8,
                defencebuffer: state.defencebuffer + 8, 
                speed: state.speed + (state.Level),
            }
        //EQUIP STAGE
        case 'ReturnWeaponEquipmentChoiceFn':
            return {
                ...state,
                userWeapon: action.Weapon,
                userWeaponImg: action.WeaponImg,
                BaseWeaponDamage: action.WeaponDamage,
            }
        case 'ReturnArmorEquipmentChoiceFn':
            return {
                ...state,
                userArmor: action.Armor,
                userArmorImg: action.ArmorImg,
                BaseArmorDef: action.ArmorDef,
            }
        //ITEMS
        case 'UseRedPotionFn':
            switch(true){
                case ((state.currentHealth + 50) <= state.maxHealth):
                    return {
                        ...state,
                        currentHealth: state.currentHealth + 50
                    }
                default:
                    return {
                        ...state,
                        currentHealth: state.maxHealth
                    }
            }
        case 'UseYellowPotionFn':
            switch(true){
                case ((state.currentHealth + 150) <= state.maxHealth):
                    return {
                        ...state,
                        currentHealth: state.currentHealth + 150
                    }
                default:
                    return {
                        ...state,
                        currentHealth: state.maxHealth
                    }
            }   
        //Rerender Fn
        case 'userClockDefendFn':
            return {
                ...state,
                userClockDefend: !state.userClockDefend,
            }
        default:
            return state;
    }
}
export default userStatsReducer;