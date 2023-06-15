import { CardBox, FallbackWrapper, Navigation } from '../../components';
import { Container } from 'react-bootstrap';
import React from 'react';
import { userHook } from 'src/context/userData';

const Profile = () => {

  const { userData } = userHook();

  const renderContent = () => {
    return (
      <Navigation>
        Perfil
      </Navigation>
    );
  };

  return (
    <FallbackWrapper
      renderContent={renderContent}
    />
  );
}

export default Profile;
