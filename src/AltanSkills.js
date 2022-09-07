import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './css/mapAltanSkills.css'
//Skills
import { UserSkillFirstAidFn } from './actions'
//Skill Level
import {FirstAidTrainingFn, BashTrainingFn, MammoniteTrainingFn, KodokuTrainingFn, MagnumBreakTrainingFn, HeadCrushTrainingFn, QuickenTrainingFn, VitalStrikeTrainingFn, BowlingBashTrainingFn} from './actions'

//SKILLS
import skillFirstAid from './img/Skill/nv_firstaid.gif'
import skillKodoku from './img/Skill/pr_kodoku.gif'
import skillBash from './img/Skill/sm_bash.gif'
import skillMagnum from './img/Skill/sm_magnum.gif'
import skillHeadCrush from './img/Skill/lk_headcrush.gif'
import skillMammonite from './img/Skill/mc_mammonite.gif'
import skillQuicken from './img/Skill/sm_quicken.gif'
import skillVitalStrike from './img/Skill/lk_vitalstrike.gif'
import skillBowlingBash from './img/Skill/sm_blowingbash.gif'

function StartMenu(props){
    const userStats = useSelector(state => state.userStats)
    const SkillControlRoom = useSelector(state => state.SkillControlRoom)
    const skillCapChart = useSelector(state => state.skillCapChart)
    const userAttribute = useSelector(state => state.userAttribute)
    const dispatch = useDispatch();
    
    // let SkillBox = [
    //   {id:20000, Img:skillFirstAid, name:"First Aid", skillLevelCheck:skillCapChart.FirstAidSkillLevel, selection:FirstAidTrainingFn(), title:`SP:${skillCapChart.SPFirstAid} - Heal ${skillCapChart.FirstAidFlatHeal} of health`, Activate:UserSkillFirstAidFn(skillCapChart.SPFirstAid, skillCapChart.FirstAidFlatHeal)},

    //   {id:20001, Img:skillBash, name:"Bash", skillLevelCheck:skillCapChart.BashSkillLevel, selection:BashTrainingFn(), 
    //   title:`SP:${skillCapChart.SPBash} - Strike the target with a strong blow ${Math.floor((userStats.attack + userStats.Bonusattack + userStats.Level + (userAttribute.str + userAttribute.BonusStr)*3 + (userAttribute.dex + userAttribute.BonusDex)/2 + (userAttribute.luk + userAttribute.BonusLuk) + userStats.BaseWeaponDamage*( 1 + 0.05*(userAttribute.str + userAttribute.BonusStr)) + userStats.BaseWeaponDamage)*skillCapChart.BashDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.BashBaseDamage)} damage to target, it has a ${skillCapChart.BashStunChance*100}% chance of leaving the target stunned.`},

    //   {id:20002, Img:skillMammonite, name:"Mammonite", skillLevelCheck:skillCapChart.MammoniteSkillLevel, selection:MammoniteTrainingFn(), title:`SP:${skillCapChart.SPMammonite} - Strike the target with a less lethal blow ${Math.floor((userStats.attack + userStats.Bonusattack + userStats.Level + (userAttribute.str + userAttribute.BonusStr)*3 + (userAttribute.dex + userAttribute.BonusDex)/2 + (userAttribute.luk + userAttribute.BonusLuk) + userStats.BaseWeaponDamage*( 1 + 0.05*(userAttribute.str + userAttribute.BonusStr)) + userStats.BaseWeaponDamage)*skillCapChart.MammoniteDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.MammoniteBaseDamage)} damage to target, steal zeny from ${skillCapChart.MammoniteGain*100}% of the damage.`},

    //   {id:20003, Img:skillKodoku, name:"Kodoku", skillLevelCheck:skillCapChart.KodokuSkillLevel, selection:KodokuTrainingFn(), title:`SP:${skillCapChart.SPKodoku} - inflict poison status on target for ${skillCapChart.KodokuPoisonTurn} turns. Poison target lose ${skillCapChart.KodokuPoisonPercent*100}% maximum health each turn.`},

    //   {id:20004, Img:skillMagnum, name:"Magnum Break", skillLevelCheck:skillCapChart.MagnumBreakSkillLevel, selection:MagnumBreakTrainingFn(), title:`SP:${skillCapChart.SPMagnumBreak} - Instant fire property skill ${Math.floor((userStats.attack + userStats.Bonusattack + userStats.Level + (userAttribute.str + userAttribute.BonusStr)*3 + (userAttribute.dex + userAttribute.BonusDex)/2 + (userAttribute.luk + userAttribute.BonusLuk) + userStats.BaseWeaponDamage*( 1 + 0.05*(userAttribute.str + userAttribute.BonusStr)) + userStats.BaseWeaponDamage)*skillCapChart.MagnumBreakDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.MagnumBreakBaseDamage)} damage to target, increase accuracy by ${Math.floor((skillCapChart.MagnumBreakAccuracyPercent - 1)*100)}% and apply additional ${Math.floor((skillCapChart.MagnumBreakFireAdditionalDamage - 1)*100)}% Fire attack for ${skillCapChart.MagnumBreakFireWeaponTurn} Turns`},

    //   {id:20005, Img:skillHeadCrush, name:"Head Crush", skillLevelCheck:skillCapChart.HeadCrushSkillLevel, selection:HeadCrushTrainingFn(), title:`SP:${skillCapChart.SPHeadCrush} -	Strong hit against the target that has a chance to cause bleeding effect. Bleeding target lose ${skillCapChart.HeadCrushBleedingPercent*100}% maximum health each turn.`},
    //   {id:20006, Img:skillQuicken, name:"Quicken", skillLevelCheck:skillCapChart.QuickenSkillLevel, selection:QuickenTrainingFn(), title:`SP:${skillCapChart.SPQuicken} - Increase speed by ${skillCapChart.QuickenSpeed} for ${skillCapChart.QuickenSpeedTurn} turns`},
    //   {id:20007, Img:skillVitalStrike, name:"Vital Strike", skillLevelCheck:skillCapChart.VitalStrikeSkillLevel, selection:VitalStrikeTrainingFn(), title:`SP:${skillCapChart.SPVitalStrike} - Strikes the target with a painful blow ${Math.floor(userStats.attack + userStats.Bonusattack + userStats.Level + (userAttribute.int)*8)} damage to target, decrease target defence ${skillCapChart.VitalStrikeDefenceBreakDown*100}% for 8 turns`},
    //   {id:20008, Img:skillBowlingBash, name:"BowlingBash", skillLevelCheck:skillCapChart.BowlingBashSkillLevel, selection:BowlingBashTrainingFn(), title:`SP:${skillCapChart.SPBowlingBash} - Charge to target with a fatal blow ${Math.floor((userStats.attack + userStats.Bonusattack + userStats.Level + (userAttribute.str + userAttribute.BonusStr)*3 + (userAttribute.dex + userAttribute.BonusDex)/2 + (userAttribute.luk + userAttribute.BonusLuk) + userStats.BaseWeaponDamage*( 1 + 0.05*(userAttribute.str + userAttribute.BonusStr)) + userStats.BaseWeaponDamage)*skillCapChart.BowlingBashDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.BowlingBashBaseDamage)} damage to target, target reduce movement speed by ${skillCapChart.BowlingBashSlowPercent*100}%`},
    // ]

    return(
      <div className="AltanSkillsMap">
        <h2 className="altanSkillsTitle">Skills</h2>
          <p className="skillPointDescription">Skill Point: {skillCapChart.JobPoints}</p>
            {props.SkillsLevelingBox.map(Skill => {
              return( 
                <span key={Skill.id}>
                  {true ? 
                  <button className="atlanSkillButton atlanSkillButtonFix" title={Skill.title} onClick={() => dispatch((Skill.selection))}>
                    <div className="adjImgCenterBox">
                      <p className="adjImgCenter"><img src={Skill.Img} alt={Skill.name} />{Skill.name} - Lv.{Skill.skillLevelCheck}</p>
                    </div>
                    </button> : null}
                </span>
              )})}
            </div>
    );
}

export default StartMenu;