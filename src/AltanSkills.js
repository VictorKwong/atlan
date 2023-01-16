import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './css/mapAltanSkills.css'

function StartMenu(props){
    const skillCapChart = useSelector(state => state.skillCapChart)
    const dispatch = useDispatch();

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