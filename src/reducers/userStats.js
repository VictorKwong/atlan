
const Fn = {
    Level: 1,
    Experience: 0,
    maxHealth: 150,
    currentHealth: 100,
    maxSP: 50,
    currentSP: 3,
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
    userFootGear: null,
    userFootGearImg: null,
    BaseFootGearDef: 0,
    userGarment: null,
    userGarmentImg: null,
    BaseGarmentDef: 0,
    userAccessoryOne: null,
    userAccessoryOneImg: null,
    BaseAccessoryOneDef: 0,
    userAccessoryTwo: null,
    userAccessoryTwoImg: null,
    BaseAccessoryTwoDef: 0,

    //Bonus
    Bonusattack: 0,
    Bonusdefence: 0,
    Bonusdefencebuffer: 0,
    Bonusspeed: 0,
    BonushitRate: 0,
    BonusdodgeRate: 0,
    BonuscritRate: 0,
    BonusHealth:0,
    BonusSP:0,

    //Training
    Trainingattack: 0,
    Trainingdefence: 0,
    Trainingdefencebuffer: 0,
    Trainingspeed: 0,
    TraininghitRate: 0,
    TrainingdodgeRate: 0,
    TrainingcritRate: 0,
    FirstGiftName: '',
    SecondGiftName: '',

    //Reset
    BasemaxHealth: 149,
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
        case 'UserSkillFirstAidFn':
            switch(true){
                case ((state.currentHealth + 150) <= state.maxHealth):
                    return {
                        ...state,
                        currentHealth: state.currentHealth + 150,
                        currentSP: state.currentSP - action.sp,
                    }
                default:
                    return {
                        ...state,
                        currentHealth: state.maxHealth,
                        currentSP: state.currentSP - action.sp
                    }
            }
        case 'UserSkillBashEnemyFn':
        case 'UserSkillBashMissedFn':
            return{
                ...state,
                currentSP: state.currentSP - action.sp,
            }
        case 'UserSkillMammoniteEnemyFn':
        case 'UserSkillMammoniteMissedFn':
                return{
                    ...state,
                    currentSP: state.currentSP - action.sp,
                }
        case 'UserSkillMagnumBreakEnemyFn':
        case 'UserSkillMagnumBreakMissedFn':
            return{
                ...state,
                currentSP: state.currentSP - action.sp,
            }
        case 'UserSkillBowlingBashEnemyFn':
        case 'UserSkillBowlingBashMissedFn':
            return{
                ...state,
                currentSP: state.currentSP - action.sp,
            }    
        case 'UserSkillQuickenFn':
            return{
                ...state,
                currentSP: state.currentSP - action.sp,
            }
        case 'UserSkillKodokuFn':
            return{
                ...state,
                currentSP: state.currentSP - action.sp,
            }
        case 'UserSkillVitalStrikeFn':
            return{
                ...state,
                currentSP: state.currentSP - action.sp,
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
                Trainingattack: state.Trainingattack + 1,
                Bonusattack: state.Bonusattack + 1,
            }
        case 'BonusAGIPointsFn':
            return {
                ...state,
                //Recover
                Trainingspeed: state.Trainingspeed + 0.2,
                TrainingdodgeRate: state.TrainingdodgeRate + 0.01,

                Bonusspeed: state.Bonusspeed + 0.2,
                BonusdodgeRate: state.BonusdodgeRate + 0.01
            }
        case 'BonusVITPointsFn':
            return {
                ...state,
                Trainingdefence: state.defence + 0.5,
                Trainingdefencebuffer: state.defencebuffer + 1,
                maxHealth: Math.floor(state.BasemaxHealth * (1 + (action.Vit + action.BonusVit) *0.01) + state.BonusHealth),

                Bonusdefence: state.Bonusdefence + 0.5,
                Bonusdefencebuffer: state.Bonusdefencebuffer + 1,
            }
        case 'BonusINTPointsFn':
            return {
                ...state,
                maxSP: Math.floor(state.BasemaxSP * (1 + (action.Int + action.BonusInt) *0.01) + state.BonusSP),
                //Recover
            }
        case 'BonusDEXPointsFn':
            return {
                ...state,
                //Recover
                Trainingattack: state.Trainingattack + 0.2,
                Trainingspeed: state.Trainingspeed + 0.1,
                TraininghitRate: state.TraininghitRate + 0.01,

                Bonusattack: state.Bonusattack + 0.2,
                Bonusspeed: state.Bonusspeed + 0.1,
                BonushitRate: state.BonushitRate + 0.01
            }
        case 'BonusLUKPointsFn':
            return {
                ...state,
                //Recover
                TrainingcritRate: state.TrainingcritRate + 0.03,
                Trainingattack: state.attack + 0.5,

                BonuscritRate: state.BonuscritRate + 0.03,
                Bonusattack: state.Bonusattack + 0.5
            }
        case 'GiftOneFn':
            switch(true){
                case(action.One === 1):
                    return {
                        ...state,
                        //Atk + 50
                        Trainingattack: state.Trainingattack + 50,
                        Bonusattack: state.Bonusattack + 50,
                        FirstGiftName: 'Sword Master'
                    }
                case(action.One === 2):
                    return {
                        ...state,
                        //Flee + 15
                        TrainingdodgeRate: state.TrainingdodgeRate + 0.15,
                        BonusdodgeRate: state.BonusdodgeRate + 0.15,
                        FirstGiftName: 'Swiftness',
                    }
                case(action.One === 3):
                    return {
                        ...state,
                        //LUK + 10
                        TrainingcritRate: state.TrainingcritRate + 0.3,
                        Trainingattack: state.attack + 5,
        
                        BonuscritRate: state.BonuscritRate + 0.3,
                        Bonusattack: state.Bonusattack + 5,
                        FirstGiftName: 'Gloria',
                    }
                case(action.One === 4):
                    return {
                        ...state,
                        //HP + 100, SP + 30
                        maxHealth: state.maxHealth + 100,
                        maxSP: state.maxSP + 30,
                        BasemaxHealth: state.BasemaxHealth + 100,
                        BasemaxSP: state.BasemaxSP + 30,
                        FirstGiftName: 'Endure',
                    }
                default:
                    return{
                        ...state,
                    }
            }
        case 'GiftTwoFn':
            switch(true){
                case(action.Two === 5):
                    return {
                        ...state,
                        //Atk + 30
                        Trainingattack: state.Trainingattack + 30,
                        Bonusattack: state.Bonusattack + 30,
                        SecondGiftName: 'Impositio Manus',
                    }
                case(action.Two === 6):
                    return {
                        ...state,
                        //AGI/DEX + 7
                        Trainingspeed: state.Trainingspeed + 2.1,
                        TrainingdodgeRate: state.TrainingdodgeRate + 0.07,
                        Trainingattack: state.Trainingattack + 1.4,
                        TraininghitRate: state.TraininghitRate + 0.07,

                        Bonusspeed: state.Bonusspeed + 2.1,
                        BonusdodgeRate: state.BonusdodgeRate + 0.07,
                        Bonusattack: state.Bonusattack + 1.4,
                        BonushitRate: state.BonushitRate + 0.07,
                        SecondGiftName: 'Attention Concentrate',
                    }
                case(action.Two === 7):
                    return {
                        ...state,
                        //STR/INT/DEX + 5
                        Trainingattack: state.Trainingattack + 6,
                        Trainingspeed: state.Trainingspeed + 0.5,
                        TraininghitRate: state.TraininghitRate + 0.05,

                        maxSP: Math.floor(state.BasemaxSP * (1 + (5) *0.01) + state.BonusSP),

                        Bonusattack: state.Bonusattack + 6,
                        Bonusspeed: state.Bonusspeed + 0.5,
                        BonushitRate: state.BonushitRate + 0.05,
                        SecondGiftName: 'Blessing',
                    }
                default:
                    return{
                        ...state,
                        SecondGiftName: 'Magnificat',
                    }
            }
        case 'BonusEquipPointsFn':
            switch(true){
                case ((Math.floor(state.BasemaxHealth * (1 + (action.Vit + action.BonusVit) *0.01) + action.BonusHealth) < state.currentHealth) && (Math.floor(state.BasemaxSP * (1 + (action.Int + action.BonusInt) *0.01) + action.BonusSP) < state.currentSP)):
                    return {
                        ...state,
                        Bonusattack: Math.floor(action.BonusStr * 1 + action.BonusDex * 0.2 + action.BonusLuk * 0.5) + action.Bonusattack + state.Trainingattack,
                        Bonusspeed: (action.BonusAgi * 0.2 + action.BonusDex * 0.1) + action.Bonusspeed + state.Trainingspeed,
                        BonusdodgeRate: (action.BonusAgi * 0.01) + action.BonusdodgeRate + state.TrainingdodgeRate,
                        maxHealth: Math.floor(state.BasemaxHealth * (1 + (action.Vit + action.BonusVit) *0.01) + action.BonusHealth),
                        Bonusdefence: (action.BonusVit * 0.5) + action.Bonusdefence + state.Trainingdefence,
                        Bonusdefencebuffer: Math.floor(action.BonusVit * 1) + action.Bonusdefencebuffer + state.Trainingdefencebuffer,
                        maxSP: Math.floor(state.BasemaxSP * (1 + (action.Int + action.BonusInt) *0.01) + action.BonusSP),
                        BonushitRate: (action.BonusDex * 0.01) + action.BonushitRate + state.TraininghitRate,
                        BonuscritRate: (action.BonusLuk * 0.03) + action.BonuscritRate + state.TrainingcritRate,
                        BonusHealth: action.BonusHealth,
                        BonusSP: action.BonusSP,
                        //Debug Reset Stats Point, Unequip Item
                        currentHealth: Math.floor(state.BasemaxHealth * (1 + (action.Vit + action.BonusVit) *0.01) + action.BonusHealth),
                        currentSP: Math.floor(state.BasemaxSP * (1 + (action.Int + action.BonusInt) *0.01) + action.BonusSP)
                    }
                case (Math.floor(state.BasemaxHealth * (1 + (action.Vit + action.BonusVit) *0.01) + action.BonusHealth) < state.currentHealth):
                    return {
                        ...state,
                        Bonusattack: Math.floor(action.BonusStr * 1 + action.BonusDex * 0.2 + action.BonusLuk * 0.5) + action.Bonusattack + state.Trainingattack,
                        Bonusspeed: (action.BonusAgi * 0.2 + action.BonusDex * 0.1) + action.Bonusspeed + state.Trainingspeed,
                        BonusdodgeRate: (action.BonusAgi * 0.01) + action.BonusdodgeRate + state.TrainingdodgeRate,
                        maxHealth: Math.floor(state.BasemaxHealth * (1 + (action.Vit + action.BonusVit) *0.01) + action.BonusHealth),
                        Bonusdefence: (action.BonusVit * 0.5) + action.Bonusdefence + state.Trainingdefence,
                        Bonusdefencebuffer: Math.floor(action.BonusVit * 1) + action.Bonusdefencebuffer + state.Trainingdefencebuffer,
                        maxSP: Math.floor(state.BasemaxSP * (1 + (action.Int + action.BonusInt) *0.01) + action.BonusSP),
                        BonushitRate: (action.BonusDex * 0.01) + action.BonushitRate + state.TraininghitRate,
                        BonuscritRate: (action.BonusLuk * 0.03) + action.BonuscritRate + state.TrainingcritRate,
                        BonusHealth: action.BonusHealth,
                        BonusSP: action.BonusSP,
                        //Debug Reset Stats Point, Unequip Item
                        currentHealth: Math.floor(state.BasemaxHealth * (1 + (action.Vit + action.BonusVit) *0.01) + action.BonusHealth)
                    }
                case (Math.floor(state.BasemaxSP * (1 + (action.Int + action.BonusInt) *0.01) + action.BonusSP) < state.currentSP):
                    return {
                        ...state,
                        Bonusattack: Math.floor(action.BonusStr * 1 + action.BonusDex * 0.2 + action.BonusLuk * 0.5) + action.Bonusattack + state.Trainingattack,
                        Bonusspeed: (action.BonusAgi * 0.2 + action.BonusDex * 0.1) + action.Bonusspeed + state.Trainingspeed,
                        BonusdodgeRate: (action.BonusAgi * 0.01) + action.BonusdodgeRate + state.TrainingdodgeRate,
                        maxHealth: Math.floor(state.BasemaxHealth * (1 + (action.Vit + action.BonusVit) *0.01) + action.BonusHealth),
                        Bonusdefence: (action.BonusVit * 0.5) + action.Bonusdefence + state.Trainingdefence,
                        Bonusdefencebuffer: Math.floor(action.BonusVit * 1) + action.Bonusdefencebuffer + state.Trainingdefencebuffer,
                        maxSP: Math.floor(state.BasemaxSP * (1 + (action.Int + action.BonusInt) *0.01) + action.BonusSP),
                        BonushitRate: (action.BonusDex * 0.01) + action.BonushitRate + state.TraininghitRate,
                        BonuscritRate: (action.BonusLuk * 0.03) + action.BonuscritRate + state.TrainingcritRate,
                        BonusHealth: action.BonusHealth,
                        BonusSP: action.BonusSP,
                        //Debug Reset Stats Point, Unequip Item
                        currentSP: Math.floor(state.BasemaxSP * (1 + (action.Int + action.BonusInt) *0.01) + action.BonusSP)
                    }
                default:
                    return {
                        ...state,
                        Bonusattack: Math.floor(action.BonusStr * 1 + action.BonusDex * 0.2 + action.BonusLuk * 0.5) + action.Bonusattack + state.Trainingattack,
                        Bonusspeed: (action.BonusAgi * 0.2 + action.BonusDex * 0.1) + action.Bonusspeed + state.Trainingspeed,
                        BonusdodgeRate: (action.BonusAgi * 0.01) + action.BonusdodgeRate + state.TrainingdodgeRate,
                        maxHealth: Math.floor(state.BasemaxHealth * (1 + (action.Vit + action.BonusVit) *0.01) + action.BonusHealth),
                        Bonusdefence: (action.BonusVit * 0.5) + action.Bonusdefence + state.Trainingdefence,
                        Bonusdefencebuffer: Math.floor(action.BonusVit * 1) + action.Bonusdefencebuffer + state.Trainingdefencebuffer,
                        maxSP: Math.floor(state.BasemaxSP * (1 + (action.Int + action.BonusInt) *0.01) + action.BonusSP),
                        BonushitRate: (action.BonusDex * 0.01) + action.BonushitRate + state.TraininghitRate,
                        BonuscritRate: (action.BonusLuk * 0.03) + action.BonuscritRate + state.TrainingcritRate,
                        BonusHealth: action.BonusHealth,
                        BonusSP: action.BonusSP,
                    }
            }   
        case 'ResetMyPointsFn':
            return {
                ...state,
                maxHealth: Math.floor(state.BasemaxHealth * (1 + ((1 + action.BonusVit) * 0.01)) + state.BonusHealth),
                currentHealth: Math.floor(state.BasemaxHealth * (1 + ((1 + action.BonusVit) * 0.01)) + state.BonusHealth),
                maxSP: Math.floor(state.BasemaxSP * (1 + ((1 + action.BonusInt * 0.01))) + state.BonusSP),
                currentSP: Math.floor(state.BasemaxSP * (1 + ((1 + action.BonusInt * 0.01))) + state.BonusSP),
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
        case 'ReturnFootGearEquipmentChoiceFn':
            return {
                ...state,
                userFootGear: action.FootGear,
                userFootGearImg: action.FootGearImg,
                BaseFootGearDef: action.FootGearDef
            }
        case 'ReturnGarmentEquipmentChoiceFn':
            return {
                ...state,
                userGarment: action.Garment,
                userGarmentImg: action.GarmentImg,
                BaseGarmentDef: action.GarmentDef
            }
        case 'ReturnAccessoryOneEquipmentChoiceFn':
            return {
                ...state,
                userAccessoryOne: action.AccessoryOne,
                userAccessoryOneImg: action.AccessoryOneImg,
                BaseAccessoryOneDef: action.AccessoryOneDef
            }
        case 'ReturnAccessoryTwoEquipmentChoiceFn':
            return {
                ...state,
                userAccessoryTwo: action.AccessoryTwo,
                userAccessoryTwoImg: action.AccessoryTwoImg,
                BaseAccessoryTwoDef: action.AccessoryTwoDef
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
        case 'AmuletRecoveryFn':
            switch(true){
                case (((state.currentHealth + action.HPHeal) <= state.maxHealth) && ((state.currentSP + action.SPHeal) <= state.maxSP)):
                    return {
                        ...state,
                        currentHealth: state.currentHealth + action.HPHeal,
                        currentSP: state.currentSP + action.SPHeal
                    }
                case (((state.currentHealth + action.HPHeal) <= state.maxHealth) && ((state.currentSP + action.SPHeal) > state.maxSP)):
                    return {
                        ...state,
                        currentHealth: state.currentHealth + action.HPHeal,
                        currentSP: state.maxSP
                    }
                case (((state.currentHealth + action.HPHeal) > state.maxHealth) && ((state.currentSP + action.SPHeal) <= state.maxSP)):
                    return {
                        ...state,
                        currentHealth: state.maxHealth,
                        currentSP: state.currentSP + action.SPHeal
                    }
                default:
                    return {
                        ...state,
                        currentHealth: state.maxHealth,
                        currentSP: state.maxSP
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