import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './css/mapAltanSkills.css'
//Skills
import { UserSkillFirstAidFn } from './actions'

//SKILLS
import skillFirstAid from './img/Skill/nv_firstaid.gif'
import skillBash from './img/Skill/sm_bash.gif'
import skillMammonite from './img/Skill/mc_mammonite.gif'
import skillMagnum from './img/Skill/sm_magnum.gif'
import skillHeadCrush from './img/Skill/lk_headcrush.gif'
import skillKodoku from './img/Skill/pr_kodoku.gif'
import skillQuicken from './img/Skill/sm_quicken.gif'
import skillBowlingBash from './img/Skill/sm_blowingbash.gif'

function StartMenu(){
    const userStats = useSelector(state => state.userStats)
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const SkillControlRoom = useSelector(state => state.SkillControlRoom)
    const dispatch = useDispatch();
    let SkillBox = [
      {id:20000, Img:skillFirstAid, name:"First Aid", skillLevelCheck:1, title:"SP:30, Heal small amount of health", Activate:UserSkillFirstAidFn()},
      {id:20001, Img:skillBash, name:"Bash", skillLevelCheck:1, title:"Deal damage to enemy"},
      {id:20002, Img:skillMammonite, name:"Mammonite", skillLevelCheck:1, title:"Deal small amount damage to enemy and recieved zeny"},
      {id:20003, Img:skillKodoku, name:"Kodoku", skillLevelCheck:1, title:"Make target enemy become poison for 5 rounds"},
      {id:20004, Img:skillMagnum, name:"Magnum Break", skillLevelCheck:1, title:"Deal damage to enemy"},
      {id:20005, Img:skillHeadCrush, name:"Head Crush", skillLevelCheck:1, title:"Deal damage to enemy"},
      {id:20006, Img:skillQuicken, name:"Quicken", skillLevelCheck:1, title:"Increase speed by 10 for 5 turns"},
      {id:20007, Img:skillBowlingBash, name:"BowlingBash", skillLevelCheck:1, title:"Deal damage to enemy"},
    ]

    return(
      <div className="AltanSkillsMap">
        <h2 className="altanSkillsTitle">Skills</h2>
            {SkillBox.map(Skill => {
              return( 
                <span key={Skill.id}>
                  {Skill.name === "First Aid" ?
                  <button className={userStats.currentSP >= 30 ? "atlanSkillButton atlanSkillButtonFix" : "atlanSkillButton atlanSkillButtonFix atlanSkillButtonNeedMoreSP"} title={Skill.title} onClick={
                    userStats.currentSP >= 30 && userStats.currentHealth !== userStats.maxHealth?
                    () => dispatch(Skill.Activate) : null}>
                    <div className="adjImgCenterBox">
                      <p className="adjImgCenter"><img src={Skill.Img} alt={Skill.name} />{Skill.name} - Lv.{Skill.skillLevelCheck}</p>
                    </div>
                    </button> :
                  userStats.Level >= Skill.skillLevelCheck ? <button className="atlanSkillButton atlanSkillButtonFix" title={Skill.title} disabled>
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