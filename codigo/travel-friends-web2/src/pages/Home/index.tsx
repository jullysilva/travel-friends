import { useCallback } from 'react';
import { getAllRoadmap } from '../../services/api/Requests/roadmap';
import { CardBox, FallbackWrapper } from '../../components';
import { usePromise } from '../../hooks';
import Navigation from '../../components/Navigation/Navigation';
import { Container } from 'react-bootstrap';

const Home = () => {

  const getRoadMaps = useCallback(async () => {
    return getAllRoadmap();
  }, []);

  const { data, ...promiseStatus } = usePromise(getRoadMaps);

  const renderContent = () => {
    return (
      <Navigation>
        <Container className='p-5'>
        <CardBox data={data} />
        </Container>
      </Navigation>
    );
  };

  return (
    <FallbackWrapper
      renderContent={renderContent}
      {...promiseStatus}
    />
  );
}

export default Home;
