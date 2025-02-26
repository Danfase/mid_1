import React from 'react';

import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import { useLikes } from '../../hooks/useLikes';

import en from '../../translations/en.json';
import ru from '../../translations/ru.json';

import Button from '../Button';
import './UserPanel.css';

const translations = { en, ru };

const UserPanel = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, switchLanguage } = useLanguage();
  const { likes, addLike } = useLikes();

  const tox = translations[language];

  return (
    <div className={`user-panel ${theme}`}>
      <h1>{tox.greeting}</h1>
      <p>{tox.like}: {likes}</p>
      <div className="buttons">
        <Button onClick={addLike}>👍 {tox.likes}</Button>
        <Button onClick={toggleTheme}>{tox.toggleTheme}</Button>
        <Button onClick={switchLanguage}>{tox.switchLanguage}</Button>
      </div>
    </div>
  );
};

export default UserPanel;