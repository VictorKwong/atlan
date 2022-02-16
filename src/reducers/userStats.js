
const Fn = {
    Level: 1,
    Experience: 0,
    maxHealth: 150,
    currentHealth: 140,
    maxSP: 50,
    currentSP: 50,
    attack: 25,
    power: 10,
    defence: 18,
    defencebuffer: 38, // 18 + 20
    speed: 10,
    hitRate: 0.95, //0.95
    dodgeRate: 0.1,
    critRate: 0.05, // 0.05
    userClockDefend: false,
    userWeapon: 'Katana',
    userWeaponImg: 'initial',
    BaseWeaponDamage: 60,
    userArmor: 'Cotton Shirt',
    userArmorImg: 'initial',
    BaseArmorDef: 10,
    userHeadGear: null,
    userHeadGearImg: null,
    BaseHeadGearDef: 0,
}

const userStatsReducer = (state = Fn, action) => {
    switch(action.type){
        case 'EnemyAttackUserFn':
            return {
                ...state,
                currentHealth: state.currentHealth - action.DamageCalculation,
            }
        case 'EnemyAttackBlockUserFn':
            return {
                ...state,
                currentHealth: state.currentHealth - action.DamageCalculation,
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
                currentSP: state.currentSP - 15,
            }
        case 'UserSkillMagnumBreakBlockEnemyFn':
        case 'UserSkillMagnumBreakEnemyFn':
        case 'UserSkillMagnumBreakMissedFn':
        return{
            ...state,
            currentSP: state.currentSP - 35,
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
        case 'ReturnHeadGearEquipmentChoiceFn':
            return {
                ...state,
                userHeadGear: action.HeadGear,
                userHeadGearImg: action.HeadGearImg,
                BaseHeadGearDef: action.HeadGearDef
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
        case 'UseOrangePotionFn':
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
        case 'UseYellowPotionFn':
            switch(true){
                case ((state.currentHealth + 400) <= state.maxHealth):
                    return {
                        ...state,
                        currentHealth: state.currentHealth + 400
                    }
                default:
                    return {
                        ...state,
                        currentHealth: state.maxHealth
                    }
            }
        case 'UseWhitePotionFn':
            switch(true){
                case ((state.currentHealth + 800) <= state.maxHealth):
                    return {
                        ...state,
                        currentHealth: state.currentHealth + 800
                    }
                default:
                    return {
                        ...state,
                        currentHealth: state.maxHealth
                    }
            } 
        case 'UseAnniversaryCakeFn':
            switch(true){
                case ((state.currentHealth + 1200) <= state.maxHealth):
                    return {
                        ...state,
                        currentHealth: state.currentHealth + 1200
                    }
                default:
                    return {
                        ...state,
                        currentHealth: state.maxHealth
                    }
            } 
        case 'UseMastelaFruitFn':
            switch(true){
                case ((state.currentHealth + 2000) <= state.maxHealth):
                    return {
                        ...state,
                        currentHealth: state.currentHealth + 2000
                    }
                default:
                    return {
                        ...state,
                        currentHealth: state.maxHealth
                    }
            }
        case 'UseBluePotionFn':
            switch(true){
                case ((state.currentSP + 2000) <= state.maxSP):
                    return {
                        ...state,
                        currentSP: state.currentSP + 60
                    }
                default:
                    return {
                        ...state,
                        currentSP: state.maxSP
                    }
            }
        case 'UseYggdrasilBerryFn':
                    return {
                        ...state,
                        currentHealth: state.maxHealth,
                        currentSP: state.maxSP
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