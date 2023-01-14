import React, {useEffect, useRef, useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {styles} from './styles';

export interface ISkill {
  id: string;
  name: string;
}
interface ISkillCardProps {
  skill: ISkill;
  removeSkill: (id: string) => void;
  editSkill: (skill: ISkill) => void;
}

export const SkillCard: React.FC<ISkillCardProps> = ({
  skill,
  removeSkill,
  editSkill,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [titleEdit, setTitleEdit] = useState(skill.name);
  //para você manipular manualmente se o item está sendo editado ou não
  const textInputRef = useRef<TextInput>(null);

  function handleStartEditing() {
    setIsEdit(true);
  }

  function handleCancelEditing() {
    setTitleEdit(skill.name);
    setIsEdit(false);
  }

  function handleSubmitEditing() {
    const skillEdited = {
      id: skill.id,
      name: titleEdit,
    };
    editSkill(skillEdited);
    setIsEdit(false);
  }

  useEffect(() => {
    if (textInputRef.current) {
      if (isEdit) {
        textInputRef.current.focus();
      } else {
        textInputRef.current.blur();
      }
    }
    console.log(isEdit);
  }, [isEdit]);

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity activeOpacity={0.7} style={styles.buttonSkills}>
          <TextInput
            style={styles.buttonTextSkills}
            value={titleEdit}
            onChangeText={setTitleEdit}
            editable={true}
            onSubmitEditing={handleSubmitEditing}
            ref={textInputRef}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.iconsContainer}>
        {isEdit ? (
          <TouchableOpacity onPress={handleCancelEditing}>
            <Icon name="x" size={24} color="#b2b2b2" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleStartEditing}>
            <Icon name="edit-3" size={24} color="#b2b2b2" />
          </TouchableOpacity>
        )}

        <View style={styles.iconsDivider} />

        <TouchableOpacity
          disabled={isEdit}
          onPress={() => {
            removeSkill(skill.id);
          }}>
          <Icon
            name="trash-2"
            size={24}
            color="#b2b2b2"
            style={{opacity: isEdit ? 0.2 : 1}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
