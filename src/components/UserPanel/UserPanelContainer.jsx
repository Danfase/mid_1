import { ThemeProvider } from '../../context/ThemeContext';
import { LanguageProvider } from '../../context/LanguageContext';
import { LikesProvider } from '../../context/LikesContext';
import UserPanel from './UserPanel';

const UserPanelContainer = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <LikesProvider>
          <UserPanel />
        </LikesProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default UserPanelContainer;