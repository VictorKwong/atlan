
const Fn = {
    Level: 1,
    Experience: 0,
    maxHealth: 150,
    currentHealth: 140,
    maxSP: 50,
    currentSP: 9999,
    attack: 25,
    defence: 18,
    defencebuffer: 38, // 18 + 20
    speed: 10,
    hitRate: 0.95, //0.95
    dodgeRate: 1, //0.1
    critRate: 1, // 0.05
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


    //Bonus
    Bonusattack: 0,
    Bonusdefence: 0,
    Bonusdefencebuffer: 0,
    Bonusspeed: 0,
    BonushitRate: 0,
    BonusdodgeRate: 0,
    BonuscritRate: 0,

    //Reset
    BasemaxHealth: 150,
    BasemaxSP: 50,
    Baseattack: 25,
    Basedefence: 18,
    Basedefencebuffer: 38,
    Basespeed: 10,
    BasehitRate: 0.95, 
    BasedodgeRate: 0.1, 
    BasecritRate: 0.05, 

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
        case 'EnemyAttackReflectUserFn':
            return {
                ...state,
                currentHealth: state.currentHealth - action.DamageCalculation,
            }
        case 'UserLifeStealEnemyFn':
            switch(true){
                case ((state.currentHealth + action.LifeSteal) <= state.maxHealth):
                    return {
                        ...state,
                        currentHealth: state.currentHealth + action.LifeSteal
                    }
                default:
                    return {
                        ...state,
                        currentHealth: state.maxHealth
                    }
            }
        case 'UserSkillLifeStealEnemyFn':
            switch(true){
                case ((state.currentHealth + action.LifeSteal) <= state.maxHealth):
                    return {
                        ...state,
                        currentHealth: state.currentHealth + action.LifeSteal,
                        currentSP: state.currentSP - action.Consume
                    }
                default:
                    return {
                        ...state,
                        currentHealth: state.maxHealth,
                        currentSP: state.currentSP - action.Consume
                    }
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
                currentSP: state.currentSP - 40,
            }
        case 'UserSkillMagnumBreakBlockEnemyFn':
        case 'UserSkillMagnumBreakEnemyFn':
        case 'UserSkillMagnumBreakMissedFn':
            return{
                ...state,
                currentSP: state.currentSP - 100,
            }
        case 'UserSkillBowlingBashEnemyFn':
        case 'UserSkillBowlingBashMissedFn':
            return{
                ...state,
                currentSP: state.currentSP - 250,
            }    
        case 'UserSkillQuickenFn':
            return{
                ...state,
                currentSP: state.currentSP - 180,
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
                defence: state.defence + 8,
                defencebuffer: state.defencebuffer + 8, 
                speed: state.speed + 0.03,
                //Track
                BasemaxHealth: state.BasemaxHealth + 40,
                BasemaxSP: state.BasemaxSP + 25,
                Baseattack: state.Baseattack + 15,
                Basedefence: state.Basedefence + 8,
                Basedefencebuffer: state.Basedefencebuffer + 8, 
                Basespeed: state.Basespeed + 0.03,
            }
        //Stats Upgrade
        case 'STRPointsFn':
            return {
                ...state,
                attack: state.attack + 1,
            }
        case 'AGIPointsFn':
            return {
                ...state,
                speed: state.speed + 0.2,
                dodgeRate: state.dodgeRate + 0.01,
            }
        case 'VITPointsFn':
            return {
                ...state,
                maxHealth: Math.floor(state.BasemaxHealth * (1 + (action.Vit + action.BonusVit) *0.01 + 0.01)),
                defence: state.defence + 0.5,
                defencebuffer: state.defencebuffer + 1,
            }
        case 'INTPointsFn':
            return {
                ...state,
                maxSP: Math.floor(state.BasemaxSP * (1 + (action.Int + action.BonusInt) *0.01 + 0.01)),
            }
        case 'DEXPointsFn':
            return {
                ...state,
                attack: state.attack + 0.2,
                speed: state.speed + 0.1,
                hitRate: state.hitRate + 0.01
            }
        case 'LUKPointsFn':
            return {
                ...state,
                critRate: state.critRate + 0.03,
                attack: state.attack + 0.5
            }
        case 'BonusSTRPointsFn':
            return {
                ...state,
                //Recover
                Bonusattack: Math.floor(action.BonusStr * 1 + action.BonusDex * 0.2 + action.BonusLuk * 0.5) + 1
            }
        case 'BonusAGIPointsFn':
            return {
                ...state,
                //Recover
                Bonusspeed: action.BonusAgi * 0.2 + 0.2,
                BonusdodgeRate: action.BonusAgi * 0.01 + 0.01
            }
        case 'BonusVITPointsFn':
            return {
                ...state,
                maxHealth: Math.floor(state.BasemaxHealth * (1 + (action.Vit + action.BonusVit) *0.01 + 0.01)),
                //Recover
                Bonusdefence: action.BonusVit * 0.5 + 0.5,
                Bonusdefencebuffer: Math.floor(action.BonusVit * 1) + 1,
            }
        case 'BonusINTPointsFn':
            return {
                ...state,
                maxSP: Math.floor(state.BasemaxSP * (1 + (action.Int + action.BonusInt) *0.01 + 0.01)),
                //Recover
            }
        case 'BonusDEXPointsFn':
            return {
                ...state,
                //Recover
                Bonusattack: Math.floor(action.BonusStr * 1 + action.BonusDex * 0.2 + action.BonusLuk * 0.5) + 0.2,
                Bonusspeed: action.BonusDex * 0.1 + 0.1,
                BonushitRate: action.BonusDex * 0.01 + 0.01,
            }
        case 'BonusLUKPointsFn':
            return {
                ...state,
                //Recover
                BonuscritRate: action.BonusLuk * 0.03 + 0.03,
                Bonusattack: Math.floor(action.BonusStr * 1 + action.BonusDex * 0.2 + action.BonusLuk * 0.5) + 0.5,
            }
        case 'ResetMyPointsFn':
            return {
                ...state,
                maxHealth: Math.floor(state.BasemaxHealth * (1 + (action.BonusVit) *0.01)),
                currentHealth: Math.floor(state.BasemaxHealth * (1 + (action.BonusVit) *0.01)),
                maxSP: Math.floor(state.BasemaxSP * (1 + (action.BonusInt) *0.01)),
                currentSP: Math.floor(state.BasemaxSP * (1 + (action.BonusInt) *0.01)),
                attack: state.Baseattack,
                defence: state.Basedefence,
                defencebuffer: state.Basedefencebuffer,
                speed: state.Basespeed,
                hitRate: state.BasehitRate,
                dodgeRate: state.BasedodgeRate,
                critRate: state.BasecritRate
                //Track
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
                case ((state.currentHealth + 50*(1 + action.Vit*0.02)) <= state.maxHealth):
                    return {
                        ...state,
                        currentHealth: state.currentHealth + Math.floor(50*(1 + action.Vit*0.02))
                    }
                default:
                    return {
                        ...state,
                        currentHealth: state.maxHealth
                    }
            }
        case 'UseOrangePotionFn':
            switch(true){
                case ((state.currentHealth + 150*(1 + action.Vit*0.02)) <= state.maxHealth):
                    return {
                        ...state,
                        currentHealth: state.currentHealth + Math.floor(150*(1 + action.Vit*0.02))
                    }
                default:
                    return {
                        ...state,
                        currentHealth: state.maxHealth
                    }
            }   
        case 'UseYellowPotionFn':
            switch(true){
                case ((state.currentHealth + 400*(1 + action.Vit*0.02)) <= state.maxHealth):
                    return {
                        ...state,
                        currentHealth: state.currentHealth + Math.floor(400*(1 + action.Vit*0.02))
                    }
                default:
                    return {
                        ...state,
                        currentHealth: state.maxHealth
                    }
            }
        case 'UseWhitePotionFn':
            switch(true){
                case ((state.currentHealth + 800*(1 + action.Vit*0.02)) <= state.maxHealth):
                    return {
                        ...state,
                        currentHealth: state.currentHealth + Math.floor(800*(1 + action.Vit*0.02))
                    }
                default:
                    return {
                        ...state,
                        currentHealth: state.maxHealth
                    }
            } 
        case 'UseAnniversaryCakeFn':
            switch(true){
                case ((state.currentHealth + 1200*(1 + action.Vit*0.02)) <= state.maxHealth):
                    return {
                        ...state,
                        currentHealth: state.currentHealth + Math.floor(1200*(1 + action.Vit*0.02))
                    }
                default:
                    return {
                        ...state,
                        currentHealth: state.maxHealth
                    }
            } 
        case 'UseMastelaFruitFn':
            switch(true){
                case ((state.currentHealth + 2000*(1 + action.Vit*0.02)) <= state.maxHealth):
                    return {
                        ...state,
                        currentHealth: state.currentHealth + Math.floor(2000*(1 + action.Vit*0.02))
                    }
                default:
                    return {
                        ...state,
                        currentHealth: state.maxHealth
                    }
            }
        case 'UseBluePotionFn':
            switch(true){
                case ((state.currentSP + 60*(1 + action.Int*0.02)) <= state.maxSP):
                    return {
                        ...state,
                        currentSP: state.currentSP + Math.floor(60*(1 + action.Int*0.02))
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