import styled from 'styled-components';
import { BackGroundImg } from '../../styles/common';
import Background from '../../assets/Img/backgroundImg/logInStatistics.png';
import Meco from '../../assets/Img/meco.png';
import GlassmorphismModal from '../../components/glassmorphismModal/glassmorphismModal';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LogInPage() {
    const navigate = useNavigate();

    const [IdAndPw, setIdAndPw] = useState({
        userId: '',
        userPW: '',
    });

    const handleLogIn = () => {
        console.log(IdAndPw); // 유저 아이디와 비번 출력
    };

    const signUpNav = () => {
        console.log('navigate 됐습니다 !');
        navigate('/signUp');
    };
    return (
        <BackImg>
            <Box>
                <GlassmorphismModal>
                    <TopBox>
                        <LogoBox>로고</LogoBox>
                        <MecoImg src={Meco} alt="" />
                    </TopBox>
                    <MiddleBox>
                        <LogInInput
                            type="text"
                            name="id"
                            placeholder="아이디를 입력하세요"
                            onChange={(e) =>
                                setIdAndPw((prev) => ({
                                    // prev = IdAndPW. 즉, 현재의 값
                                    ...prev, // 스프레드 연산자를 통해 객체를 벗겨서 값들만 남김
                                    userId: e.target.value, // 그 중, userId의 값만 바꿈.
                                    // 그 값은, 사용자가 현재 입력중인 값 !
                                }))
                            }
                        />
                        <LogInInput
                            type="password"
                            name="pw"
                            placeholder="비밀번호를 입력하세요"
                            onChange={(e) =>
                                setIdAndPw((prev) => ({
                                    ...prev,
                                    userPW: e.target.value,
                                }))
                            }
                        />
                    </MiddleBox>
                    <BottomBox>
                        <LogInBt
                            type="Button"
                            onClick={handleLogIn} // LogInBt 눌렀을 시 handleLogIn 실행
                        >
                            로그인
                        </LogInBt>
                        <LogInBt type="Button" onClick={signUpNav}>
                            가입하러 가기
                        </LogInBt>
                    </BottomBox>
                </GlassmorphismModal>
            </Box>
        </BackImg>
    );
}
export default LogInPage;

const BackImg = styled.div`
    ${BackGroundImg(Background)}
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 120px;
`;

const Box = styled.form`
    margin-top: 50px;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TopBox = styled.div`
    /* width: 60%; */
    width: 75%;
    height: 103px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const MecoImg = styled.img`
    height: 103px;
`;
const LogoBox = styled.div`
    font-size: 30px;
    color: white;
    font-weight: bold;
`;
const MiddleBox = styled.div`
    width: 75%;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const BottomBox = styled.div`
    width: 75%;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const LogInInput = styled.input`
    border: 0px;
    width: 100%;
    height: 43px;
    border-radius: 10px;
    font-size: 12px;
    padding-left: 10px;
    background-color: #6a6b9d;
    font-size: 16px;
    margin-bottom: 20px;
    &::placeholder {
        color: #edecec;
        opacity: 70%;
    }
    &:focus {
        outline: none;
    }
`;
const LogInBt = styled.button`
    border: 0px;
    width: 100%;
    height: 43px;
    border-radius: 10px;
    font-size: 16px;
    background-color: #65628b;
    font-size: 16px;
    color: #ffffff;
    margin-bottom: 24px;
    padding-top: 3px;
    cursor: pointer;
    font-weight: bold;
    &:disabled {
        opacity: 0.9;
    }
`;
