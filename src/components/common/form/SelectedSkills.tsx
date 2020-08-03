import React from 'react';
import { MdClose } from 'react-icons/md';

interface ISkill {
  name: string;
  id: string;
  skillCategory: {
    name: string;
  };
}

interface IProps {
  skills: ISkill[];
  onDeleteClick: (name: string, skill: ISkill) => void;
  disabled?: boolean;
}

const SelectedSkills = (props: IProps) => {
  const { skills, onDeleteClick, disabled } = props;

  return (
    <div className="selected-skills">
      {skills.map(skill => (
        <div className="selected-skill" key={skill.id}>
          <span>{skill.name}</span>
          <button
            type="button"
            onClick={() => {
              onDeleteClick(skill.skillCategory.name, skill);
            }}
            disabled={disabled}
          >
            <MdClose size={15} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedSkills;
