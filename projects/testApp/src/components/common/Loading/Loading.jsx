import { LoadingWrapper } from './styled';
import Spinner from '../../../assets/spinner.gif';

const Loading = () => {
  return (
    <LoadingWrapper>
      <p>잠시만 기다려주세요.</p>
      <img src={Spinner} alt="로딩스피너" />
    </LoadingWrapper>
  );
};

export default Loading;
