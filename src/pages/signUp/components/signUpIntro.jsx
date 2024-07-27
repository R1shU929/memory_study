import Star from '../../../assets/Img/signUpImg/star.png';
import Background from '../../../assets/Img/backgroundImg/signUp_1.png';
import { BackGroundImg } from '../../../styles/common';
import styled from 'styled-components';
import CustomButton from '../../../components/customButton/customButton';
import { useNavigate } from 'react-router-dom';

function SignUpIntro({ upCount }) {
    // upCount를 props로 받아옴
    const navigate = useNavigate();
    return (
        <BackImg>
            <Wrapper>
                <Box>
                    <TopBox>
                        안녕.
                        <br />
                        나는 메코야
                        <StarImg src={Star} alt="" />
                    </TopBox>
                    <BottomBox>메코와 함께 자기 자신을 알아볼까요?</BottomBox>
                </Box>
                <ButtonWrap>
                    <CustomButton icon={'right'} onClick={upCount}>
                        회원가입 하러 가기
                    </CustomButton>
                    <CustomButton
                        icon={'right'}
                        onClick={() => navigate('/login')}
                    >
                        로그인
                    </CustomButton>
                </ButtonWrap>
            </Wrapper>
        </BackImg>
    );
}
export default SignUpIntro;

const BackImg = styled.div`
    ${BackGroundImg(Background)}
    display: flex;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Box = styled.div`
    margin-top: 200px;
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TopBox = styled.div`
    width: 80%;
    height: 100px;
    font-size: 32px;
    color: white;
    margin-top: 50px;
`;

const StarImg = styled.img`
    width: 17px;
    height: 16px;
    margin-bottom: 12px;
    margin-left: 5px;
`;

const BottomBox = styled.div`
    width: 100%;
    height: 50px;
    font-size: 18px;
    color: #dad9e3;
`;
const ButtonWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    & > * {
        margin-bottom: 10px;
    }
`;
