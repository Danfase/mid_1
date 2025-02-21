import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import { useLikes } from '../../hooks/useLikes';
import translations from '../../translations/en.json';
import Button from '../Button';
import './UserPanel.css';

const UserPanel = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, switchLanguage } = useLanguage();
  const { likes, addLike } = useLikes();

  const t = translations[language];

  return (
    <div className={`panel ${theme}`}>
      <h1>{t.greeting}</h1>
      <p>{t.likes}: {likes}</p>
      <div className="buttons">
        <Button onClick={addLike}>👍 {t.like}</Button>
        <Button onClick={toggleTheme}>{t.toggleTheme}</Button>
        <Button onClick={switchLanguage}>{t.switchLanguage}</Button>
      </div>
    </div>
  );
};

export default UserPanel;