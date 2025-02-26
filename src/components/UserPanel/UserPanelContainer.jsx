import { ThemeProvider } from '../../context/ThemeContext';
import { LanguageProvider } from '../../context/LanguageContext';
import { LikesProvider } from '../../context/LikesContext';
import UserPanel from './UserPanel';

const UserPanelContainer = () => {
  return (

    <div>
      <ThemeProvider>
        <LanguageProvider>
          <LikesProvider>
            <UserPanel />
          </LikesProvider>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};

export default UserPanelContainer;