import SignUpName from './components/signUpName';
import SignUpId from './components/signUpId';
import SignUpIntro from './components/signUpIntro';
import SignUpPassword from './components/signUpPassword';
import { useState } from 'react';
import styled from 'styled-components';
import { BackGroundImg } from '../../styles/common';
import Background1 from '../../assets/Img/backgroundImg/signUp_2.png';
import CustomButton from '../../components/customButton/customButton';
import SignUpMadal from './components/SignUpModal';
import ProgressBar from '../../components/progressBar/progressBar';

function SignUpPage() {
    const [currentPageNum, SetCurrentPageNum] = useState(0); // 페이지 넘버를 기본 0으로 설정
    const [isModalView, setIsModalView] = useState(false); // 모달 창은 기본 false 값으로 설정

    const [user, setUser] = useState({
        name: '',
        id: '',
        password: '',
    });
    console.log(user);
    const upCount = () => {
        SetCurrentPageNum((prev) => prev + 1); // upCount 함수 실행시, 페이지 넘버 하나씩 증가
    };
    const downCount = () => {
        SetCurrentPageNum((prev) => prev - 1); // downCount 함수 실행시, 페이지 넘버 하나씩 감소
    };
    const handleSignUp = () => {
        setIsModalView(true); // handleSignUp시, 모달 띄우기
    };

    return (
        <>
            {currentPageNum === 0 ? ( // currentPageNum이 0이면, upCount
                <SignUpIntro upCount={upCount} />
            ) : (
                <BackImg1>
                    <Wrapper>
                        <Container>
                            <ProgressBar
                                currentPageNum={currentPageNum}
                                limit={3}
                            />
                            {currentPageNum === 1 && (
                                <SignUpName setUser={setUser} />
                            )}
                            {currentPageNum === 2 && (
                                <SignUpId setUser={setUser} />
                            )}
                            {currentPageNum === 3 && (
                                <SignUpPassword setUser={setUser} />
                            )}
                        </Container>
                        <ButtonWrap2>
                            <CustomButton icon={'left'} onClick={downCount}>
                                {/* 
                                이전 버튼 눌렀을때, 페이지 번호 감소
                             */}
                                이전 질문
                            </CustomButton>
                            {currentPageNum === 3 ? (
                                <CustomButton
                                    icon={'right'}
                                    onClick={handleSignUp}
                                >
                                    {/* 
                                회원가입 버튼 눌렀을때, 모달 띄우기
                             */}
                                    회원가입 하기
                                </CustomButton>
                            ) : (
                                <CustomButton icon={'right'} onClick={upCount}>
                                    {/* 
                                다음 버튼 눌렀을때, 페이지 번호 증가
                             */}
                                    다음 질문
                                </CustomButton>
                            )}
                        </ButtonWrap2>
                    </Wrapper>
                    {isModalView && (
                        <SignUpMadal setIsModalView={setIsModalView} />
                    )}
                    {/* 
                    SignUpModal 컴포넌트는 항상 true. isModalView가 true일때만 SignUpModal
                 */}
                </BackImg1>
            )}
        </>
    );
}
export default SignUpPage;

const BackImg1 = styled.div`
    ${BackGroundImg(Background1)}
    display: flex;
    flex-direction: column;
`;
const Wrapper = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Container = styled.div`
    margin-top: 200px;
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const ButtonWrap2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
